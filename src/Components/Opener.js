import React, { useRef, useState } from "react";
import { gsap } from "gsap";
import { useGSAP } from "@gsap/react";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { ScrambleTextPlugin } from "gsap/ScrambleTextPlugin";

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

      const viewportWidth = window.innerWidth;
      const isMobile = viewportWidth < 992; // Tablets and phones
      const tl = gsap.timeline();

      if (isMobile) {
        // Mobile: 3D swing-forward animation (like door opening)
        gsap.set([madeRef.current, rightRef.current], {
          opacity: 1,
          rotateX: 85,
          transformOrigin: 'center bottom',
          transformPerspective: 800
        });

        tl
          .to([madeRef.current, rightRef.current], {
            rotateX: 0,
            duration: MOTION.story,
            ease: 'power2.out',
            stagger: 0.1
          })
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
          }, `-=${MOTION.instant}`)
          .to(borderRef.current, {
            opacity: 1,
            duration: MOTION.story,
            ease: 'power1.out'
          }, `-=0.4`);
      } else {
        // Desktop: Original slide animation
        const verticalOffset = 100;

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
          }, `-=${MOTION.instant}`)
          .to(borderRef.current, {
            opacity: 1,
            duration: MOTION.story,
            ease: 'power1.out'
          }, `-=0.4`);
      }
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

        


      </section>
    </div>
    
  );
}

export default Opener;