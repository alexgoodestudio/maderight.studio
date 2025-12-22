import React, { useRef, useState } from "react";
import { gsap } from "gsap";
import { useGSAP } from "@gsap/react";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { ScrambleTextPlugin } from "gsap/ScrambleTextPlugin";
import { ButtonShape, BRAND_COLORS } from './Shapes';
import { ArrowUpRight } from 'lucide-react';

gsap.registerPlugin(ScrollTrigger, ScrambleTextPlugin);

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
  const borderRef = useRef(null);
  const [fontLoaded, setFontLoaded] = useState(false);


  // Wait for font to load
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

    // Ensure all refs are ready
    if (!madeRef.current || !rightRef.current || !taglineRef.current) return;

    const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;

    if (prefersReducedMotion) {
      gsap.set([madeRef.current, rightRef.current, taglineRef.current], {
        opacity: 1
      });
      return;
    }

    // Wait for next frame to ensure elements are rendered
    requestAnimationFrame(() => {
      // Double-check refs are still valid
      if (!madeRef.current || !rightRef.current || !taglineRef.current) return;

      const taglineWords = taglineRef.current.querySelectorAll('.word');
      const taglineEmphasis = taglineRef.current.querySelectorAll('.emphasis');

      // Ensure tagline elements exist
      if (taglineWords.length === 0) return;

      // Set border initial state
      if (borderRef.current) {
        gsap.set(borderRef.current, { opacity: 0 });
      }

      const tl = gsap.timeline();

      // No animation for "Made Right" text - just show it
      gsap.set([madeRef.current, rightRef.current], {
        opacity: 1
      });

      tl
        .from(taglineWords, {
          y: 40,
          opacity: 0,
          rotateX: 45,
          transformOrigin: 'center top',
          duration: MOTION.smooth,
          stagger: 0.12,
          ease: 'power2.out'
        })
        .to(taglineEmphasis, {
          duration: MOTION.quick,
          stagger: 0.15,
          ease: 'power1.inOut'
        }, `-=${MOTION.instant}`)
        .to(borderRef.current, {
          opacity: 1,
          duration: MOTION.story,
          ease: 'power1.out'
        }, `-=0.4`);
    });

  }, [fontLoaded]);



  return (


    <div className="vh-100 bg-teal-950 d-flex justify-content-center align-items-center" >
    
      <section 
        ref={sectionRef} 
        className="text-center"
        style={{ opacity: fontLoaded ? 1 : 0 }}
      >
        <h1
          className="text-opener eighties text-white d-flex justify-content-center opener-heading"
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
        
        <h2 ref={taglineRef} className="text-3xl mt-lg-2 mt-2 text-slate-100 pt-4 font-light mb-5 opener-tagline">
          <section className="d-inline-block text-center  pb-2 px-2 md:px-6">
            <div>

              <span className="word emphasis lora">Design-first</span>{' '}
              <span className="word emphasis font-semibold italic">technology</span>{' '}
              <span className="word lora">studio</span>
            </div>
            <div ref={borderRef} className="mt-2 w-100 tagline-border"></div>
          </section>

          <br />

          <div className="d-flex justify-content-center ">
            <span className="text-xs tracking-wider word emphasis px-2  text-slate-100 font-mono">
              Located in Columbia, South Carolina
            </span>
          </div>
        </h2>

        <button
          onClick={() => window.location.href = "mailto:hello@maderight.studio"}
          className="btn-contact text-decoration-none d-inline-flex align-items-center justify-content-center mt-4 px-3 text-md font-mono position-relative border-0 text-sky-50"
          style={{
            background: "transparent",
            height: window.innerWidth <= 768 ? "50px" : "60px",
            minWidth: window.innerWidth <= 768 ? "150px" : "180px",
            cursor: "pointer"
          }}
        >
          <ButtonShape
            color={BRAND_COLORS.coral}
            width={window.innerWidth <= 768 ? 150 : 180}
            height={window.innerWidth <= 768 ? 50 : 60}
            className="position-absolute top-0 start-0"
            style={{ pointerEvents: "none" }}
          />
          <span
            className="position-relative d-flex align-items-center gap-2"
            style={{ zIndex: 1 }}
          >
            Let's Talk
            <ArrowUpRight size={window.innerWidth <= 768 ? 14 : 16} strokeWidth={2} />
          </span>
        </button>


      </section>
    </div>
    
  );
}

export default Opener;