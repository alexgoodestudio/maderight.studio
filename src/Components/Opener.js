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

    const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    
    if (prefersReducedMotion) {
      gsap.set([madeRef.current, rightRef.current, taglineRef.current], { 
        opacity: 1
      });
      return;
    }

    const tl = gsap.timeline();

    // Calculate starting positions based on viewport size (responsive)
    const viewportWidth = window.innerWidth;
    const viewportHeight = window.innerHeight;
    
    // Use percentages of viewport for responsive positioning
    // Start "Made" in top-left corner
    const madeStartX = -viewportWidth * 0.25; // 25% of viewport width to the left
    const madeStartY = -viewportHeight * 0.25; // 25% of viewport height up
    
    // Start "Right" in bottom-right corner  
    const rightStartX = viewportWidth * 0.25; // 25% of viewport width to the right
    const rightStartY = viewportHeight * 0.25; // 25% of viewport height down

    // Set initial positions
    gsap.set(madeRef.current, {
      x: madeStartX,
      y: madeStartY,
      opacity: 1
    });

    gsap.set(rightRef.current, {
      x: rightStartX,
      y: rightStartY,
      opacity: 1
    });

    // Animation sequence
    tl
      // Step 1: Move both vertically to center (y: 0)
      .to(madeRef.current, {
        y: 0,
        duration: MOTION.story,
        ease: 'power3.out'
      })
      .to(rightRef.current, {
        y: 0,
        duration: MOTION.story,
        ease: 'power3.out'
      }, '<') // '<' makes it start at the same time as previous animation
      // Step 2: Move both horizontally to center (x: 0)
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
      // Animate tagline
      .from(taglineRef.current.querySelectorAll('.word'), {
        y: 40,
        opacity: 0,
        rotateX: 45,
        transformOrigin: 'center top',
        duration: MOTION.smooth,
        stagger: 0.12,
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