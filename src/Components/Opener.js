import React, { useRef, useState } from "react";
import { gsap } from "gsap";
import { useGSAP } from "@gsap/react";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const MOTION = {
  instant: 0.15,
  quick: 0.3,
  smooth: 0.5,
  slow: 0.8,
  story: .925
};

function Opener() {
  const madeRef = useRef(null);
  const rightRef = useRef(null);
  const taglineRef = useRef(null);
  const sectionRef = useRef(null);
  const containerRef = useRef(null);
  const [fontLoaded, setFontLoaded] = useState(false);

  React.useEffect(() => {
    const loadFont = async () => {
      try {
        await document.fonts.load('1em eighties');
        await document.fonts.ready;
        setFontLoaded(true);
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
      return;
    }

    requestAnimationFrame(() => {
      if (!madeRef.current || !rightRef.current || !taglineRef.current) return;
      
      const taglineWords = taglineRef.current.querySelectorAll('.word');
      const taglineEmphasis = taglineRef.current.querySelectorAll('.emphasis');
      
      if (taglineWords.length === 0) return;
      
      const viewportWidth = window.innerWidth;
      const verticalOffset = 100;
      
      const tl = gsap.timeline({
        onComplete: () => {
          gsap.set([madeRef.current, rightRef.current, ...taglineWords], {
            clearProps: "transform,transformOrigin,will-change"
          });
        }
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
        .to(madeRef.current, {
          x: 0,
          duration: MOTION.story,
          ease: 'power3.out'
        })
        .to(rightRef.current, {
          x: 0,
          duration: MOTION.story,
          ease: 'power3.out'
        }, '<')
        .to(madeRef.current, {
          y: 0,
          duration: MOTION.story,
          ease: 'power3.out'
        })
        .to(rightRef.current, {
          y: 0,
          duration: MOTION.story,
          ease: 'power3.out'
        }, '<')
        .from(taglineWords, {
          y: 40,
          opacity: 0,
          rotateX: 45,
          transformOrigin: 'center top',
          duration: MOTION.smooth,
          stagger: 0.12,
          ease: 'power2.out'
        }, `-=${MOTION.smooth}`)
        .to(taglineEmphasis, {
          duration: MOTION.quick,
          stagger: 0.15,
          ease: 'power1.inOut'
        }, `-=${MOTION.instant}`);
    });

  }, { scope: containerRef, dependencies: [fontLoaded] });

  return (
    <div 
      ref={containerRef}
      className="bg-teal-950 d-flex justify-content-center align-items-center" 
      style={{ 
        minHeight: '100vh',
        padding: '2rem 1.25rem',
        position: 'relative'
      }}
    >
      <section 
        ref={sectionRef} 
        className="text-center"
        style={{ 
          opacity: fontLoaded ? 1 : 0,
          maxWidth: '100%'
        }}
      >
        <h1
          className="text-opener eighties text-white d-flex justify-content-center"
        >
          <span className="d-inline-block">
            <span ref={madeRef} className="d-inline-block me-lg-5 me-3">
              <span className="letter d-inline-block">M</span>
              <span className="letter d-inline-block">a</span>
              <span className="letter d-inline-block">d</span>
              <span className="letter d-inline-block">e</span>
            </span>
          </span>

          <span className="d-inline-block">
            <span ref={rightRef} className="d-inline-block">
              <span className="letter d-inline-block">R</span>
              <span className="letter d-inline-block">i</span>
              <span className="letter d-inline-block">g</span>
              <span className="letter d-inline-block">h</span>
              <span className="letter d-inline-block">t</span>
            </span>
          </span>
        </h1>
        
        <h2 ref={taglineRef} className="text-2xl tracking-wider pt-4 font-light text-white mb-5">
          <div className="d-inline-block text-center pb-3 px-4">
            <div>
              <span className="word">An</span>{' '}
              <span className="word">independent</span>{' '}
              <span className="word">creative</span>{' '}
              <span className="word emphasis">web design</span>{' '}
              <span className="word">and</span>{' '}
              <span className="word emphasis">technology</span>{' '}
              <span className="word">studio.</span>
            </div>
            <div className="mt-2 w-100" style={{ borderBottom: '1px solid currentColor' }}></div>
          </div>

          <br />

          <div className="d-flex justify-content-center">
            <span className="text-sm tracking-wider px-2 text-white font-mono">
              Based in Columbia, South Carolina
            </span>
          </div>
        </h2>
      </section>
    </div>
  );
}

export default Opener;