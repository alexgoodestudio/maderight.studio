import React, { useRef, useState, useEffect } from "react";
import { gsap } from "gsap";
import { useGSAP } from "@gsap/react";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const MOTION = {
  instant: 0.15,
  quick: 0.3,
  smooth: 0.4, // Reduced from 0.5
  slow: 0.8,
  story: 0.7 // Reduced from 0.925 - animation completes faster
};

function Opener() {
  const madeRef = useRef(null);
  const rightRef = useRef(null);
  const taglineRef = useRef(null);
  const containerRef = useRef(null);
  const [fontLoaded, setFontLoaded] = useState(false);
  const [animationComplete, setAnimationComplete] = useState(false);

  useEffect(() => {
    const loadFont = async () => {
      try {
        await document.fonts.load('300 1em EightiesComeback');
        await document.fonts.ready;
        // Small delay to ensure font is fully rendered
        setTimeout(() => setFontLoaded(true), 100);
      } catch (error) {
        console.error('Font loading error:', error);
        setTimeout(() => setFontLoaded(true), 2000);
      }
    };

    loadFont();
  }, []);

  useGSAP(() => {
    if (!fontLoaded) return;
    if (!madeRef.current || !rightRef.current || !taglineRef.current) return;

    const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    
    if (prefersReducedMotion) {
      gsap.set([madeRef.current, rightRef.current, taglineRef.current], { 
        opacity: 1,
        clearProps: "all"
      });
      setAnimationComplete(true);
      return;
    }

    const taglineWords = taglineRef.current.querySelectorAll('.word');
    const taglineEmphasis = taglineRef.current.querySelectorAll('.emphasis');
    
    if (taglineWords.length === 0) {
      setAnimationComplete(true);
      return;
    }
    
    const viewportWidth = window.innerWidth;
    const verticalOffset = 100;
    
    const tl = gsap.timeline({
      onComplete: () => {
        // Clear all transforms after animation
        gsap.set([madeRef.current, rightRef.current, ...taglineWords], {
          clearProps: "transform,will-change"
        });
        setAnimationComplete(true);
      }
    });

    // Set will-change before animation
    gsap.set([madeRef.current, rightRef.current], {
      willChange: "transform"
    });

    gsap.set(madeRef.current, {
      x: -viewportWidth / 2,
      y: -verticalOffset,
      opacity: 1
    });

    gsap.set(rightRef.current, {
      x: viewportWidth / 2,
      y: verticalOffset,
      opacity: 1
    });

    tl
      .to([madeRef.current, rightRef.current], {
        x: 0,
        y: 0,
        duration: MOTION.story,
        ease: 'power3.out'
      })
      .from(taglineWords, {
        y: 20, // Reduced from 40
        opacity: 0,
        duration: MOTION.smooth,
        stagger: 0.08, // Reduced from 0.12
        ease: 'power2.out',
        clearProps: "transform,will-change"
      }, `-=${MOTION.smooth * 0.3}`)
      .to(taglineEmphasis, {
        duration: MOTION.quick,
        stagger: 0.1,
        ease: 'power1.inOut'
      }, `-=${MOTION.instant}`);

  }, { scope: containerRef, dependencies: [fontLoaded] });

  return (
    <div 
      ref={containerRef}
      className="bg-teal-950" 
      style={{ 
        paddingTop: 'clamp(100px, 20vh, 200px)',
        paddingBottom: 'clamp(100px, 20vh, 200px)',
        paddingLeft: '1.25rem',
        paddingRight: '1.25rem',
        position: 'relative',
        touchAction: 'pan-y', // Allow vertical scroll
        WebkitOverflowScrolling: 'touch',
      }}
    >
      <div
        style={{
          opacity: fontLoaded ? 1 : 0,
          transition: 'opacity 0.3s ease',
          margin: '0 auto',
          maxWidth: '100%',
          pointerEvents: animationComplete ? 'auto' : 'none', // Prevent touch interference during animation
        }}
      >
        <h1
          className="text-opener eighties text-white text-center mb-4"
          style={{
            display: 'flex',
            justifyContent: 'center',
            flexWrap: 'wrap',
          }}
        >
          <span style={{ display: 'inline-block' }}>
            <span ref={madeRef} style={{ display: 'inline-block', marginRight: 'clamp(1rem, 3vw, 3rem)' }}>
              <span style={{ display: 'inline-block' }}>M</span>
              <span style={{ display: 'inline-block' }}>a</span>
              <span style={{ display: 'inline-block' }}>d</span>
              <span style={{ display: 'inline-block' }}>e</span>
            </span>
          </span>

          <span style={{ display: 'inline-block' }}>
            <span ref={rightRef} style={{ display: 'inline-block' }}>
              <span style={{ display: 'inline-block' }}>R</span>
              <span style={{ display: 'inline-block' }}>i</span>
              <span style={{ display: 'inline-block' }}>g</span>
              <span style={{ display: 'inline-block' }}>h</span>
              <span style={{ display: 'inline-block' }}>t</span>
            </span>
          </span>
        </h1>
        
        <div className="text-center">
          <div ref={taglineRef} className="text-2xl tracking-wider pt-4 font-light text-white">
            <div className="pb-3 px-4">
              <div style={{ marginBottom: '1rem' }}>
                <span className="word">An</span>{' '}
                <span className="word">independent</span>{' '}
                <span className="word">creative</span>{' '}
                <span className="word emphasis">web design</span>{' '}
                <span className="word">and</span>{' '}
                <span className="word emphasis">technology</span>{' '}
                <span className="word">studio.</span>
              </div>
              <div style={{ borderBottom: '1px solid currentColor', width: '100%' }}></div>
            </div>

            <div className="mt-4">
              <span className="text-sm tracking-wider text-white font-mono">
                Based in Columbia, South Carolina
              </span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Opener;