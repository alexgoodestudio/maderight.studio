import React, { useRef, useState } from "react";
import { gsap } from "gsap";
import { useGSAP } from "@gsap/react";
import "./Style.css";

const MOTION = {
  instant: 0.15,
  quick: 0.3,
  smooth: 0.5,
  slow: 0.8,
  story: 1.2
};

function Opener() {
  const madeRef = useRef(null);
  const rightRef = useRef(null);
  const taglineRef = useRef(null);
  const sectionRef = useRef(null);
  const [fontLoaded, setFontLoaded] = useState(false);

  // Wait for font to load
  React.useEffect(() => {
    const loadFont = async () => {
      try {
        // Wait for the specific font to load
        await document.fonts.load('1em eighties');
        // Or wait for all fonts to be ready
        await document.fonts.ready;
        setFontLoaded(true);
      } catch (error) {
        console.error('Font loading error:', error);
        // Fallback: show content anyway after timeout
        setTimeout(() => setFontLoaded(true), 2000);
      }
    };

    loadFont();
  }, []);

  useGSAP(() => {
    if (!fontLoaded) return;

    const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    
    if (prefersReducedMotion) {
      gsap.set([madeRef.current, rightRef.current, taglineRef.current], { 
        opacity: 1
      });
      return;
    }

    const tl = gsap.timeline();

    tl.from([madeRef.current, rightRef.current], {
      rotationX: -90,
      // rotationY: -180,
      transformOrigin: 'center bottom',
      opacity: 0,
      duration: MOTION.story,
      stagger: 0.3,
      ease: 'power3.out'
    })
    .from(taglineRef.current.querySelectorAll('.word'), {
      y: 40,
      opacity: 0,
      rotateX: 45,
      transformOrigin: 'center top',
      duration: MOTION.smooth,
      stagger: 0.1,
      ease: 'power2.out'
    }, `-=${MOTION.smooth}`)
    .to(taglineRef.current.querySelectorAll('.emphasis'), {
      duration: MOTION.quick,
      stagger: 0.15,
      ease: 'power1.inOut'
    }, `-=${MOTION.instant}`);

  }, [fontLoaded]);

  return (
    <div className="vh-92 bg-teal-950 d-flex justify-content-center align-items-center">
      <section 
        ref={sectionRef} 
        className="text-center"
        style={{ opacity: fontLoaded ? 1 : 0 }}
      >
        <h1
          className="text-opener eighties text-white d-flex justify-content-center"
          style={{ paddingLeft: "1.25rem", paddingRight: "1.25rem" }}
        >
          <span className="d-inline-block">
            <span ref={madeRef} className="d-inline-block me-lg-5 me-3">
              Made
            </span>
          </span>

          <span className="d-inline-block">
            <span ref={rightRef} className="d-inline-block">
              Right
            </span>
          </span>
        </h1>
        
        <h4 ref={taglineRef} className="text-3xl pt-4 font-light text-white mb-5">
          <span className="word">An</span>{' '}
          <span className="word">independent</span>{' '}
          <span className="word">creative</span>{' '}
          <span className="word emphasis">web design</span>{' '}
          <span className="word">and</span>{' '}
          <span className="word emphasis">technology</span>{' '}
          <span className="word">studio.</span>
          <br/>
          <p className="word text-sm tracking-wider mt-4 text-white font-mono">
            Located in <span className="">Columbia, South Carolina</span>
          </p>
        </h4>
      </section>
    </div>
  );
}

export default Opener;