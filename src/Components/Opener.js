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

    // Wait for next frame to ensure elements are rendered
    requestAnimationFrame(() => {
      const viewportWidth = window.innerWidth;
      const isMobile = viewportWidth < 768; // Mobile breakpoint
      
      const tl = gsap.timeline();

      if (isMobile) {
        // Mobile animation: slide in from opposite sides sequentially
        gsap.set(madeRef.current, {
          x: -viewportWidth,
          opacity: 1
        });

        gsap.set(rightRef.current, {
          x: viewportWidth,
          opacity: 1
        });

        tl
          // Made slides in from left
          .to(madeRef.current, {
            x: 0,
            duration: MOTION.story,
            ease: 'power3.out'
          })
          // Right slides in from right after Made is settled
          .to(rightRef.current, {
            x: 0,
            duration: MOTION.story,
            ease: 'power3.out'
          }, `-=${MOTION.smooth}`)
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
      } else {
        // Desktop/tablet animation: original corner animation
        const viewportHeight = window.innerHeight;
        const edgePadding = 60;
        
        const madeRect = madeRef.current.getBoundingClientRect();
        const rightRect = rightRef.current.getBoundingClientRect();
        
        const madeWidth = madeRect.width;
        const madeHeight = madeRect.height;
        const rightWidth = rightRect.width;
        const rightHeight = rightRect.height;
        
        const madeCenterX = madeRect.left + madeWidth / 2;
        const madeCenterY = madeRect.top + madeHeight / 2;
        const rightCenterX = rightRect.left + rightWidth / 2;
        const rightCenterY = rightRect.top + rightHeight / 2;
        
        const madeTargetX = edgePadding + madeWidth / 2;
        const madeTargetY = edgePadding + madeHeight / 2;
        const rightTargetX = viewportWidth - edgePadding - rightWidth / 2;
        const rightTargetY = viewportHeight - edgePadding - rightHeight / 2;
        
        const madeStartX = madeTargetX - madeCenterX;
        const madeStartY = madeTargetY - madeCenterY;
        const rightStartX = rightTargetX - rightCenterX;
        const rightStartY = rightTargetY - rightCenterY;

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

        tl
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
      }
    });

  }, [fontLoaded]);

  return (
    <div className="vh-92 bg-teal-950 d-flex justify-content-center align-items-center" style={{ overflow: 'hidden' }}>
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