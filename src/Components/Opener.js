import React, { useRef, useState } from "react";
import { gsap } from "gsap";
import { useGSAP } from "@gsap/react";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { ScrambleTextPlugin } from "gsap/ScrambleTextPlugin";
import { ButtonShape, BRAND_COLORS } from './Shapes';
import { ArrowUpRight } from 'lucide-react';
import { triggerConfetti } from '../utils/confetti';

gsap.registerPlugin(ScrollTrigger, ScrambleTextPlugin);

function Opener() {
  const madeRef = useRef(null);
  const rightRef = useRef(null);
  const taglineRef = useRef(null);
  const sectionRef = useRef(null);
  const borderRef = useRef(null);
  const servicesRef = useRef(null);
  const [fontLoaded, setFontLoaded] = useState(false);
  const [currentWordIndex, setCurrentWordIndex] = useState(0);
  const wordSwapRef = useRef(null);

  // Words to cycle through with their widths
  const swappingWords = [
    { text: "drive conversions", width: "240px" },
    { text: "build trust", width: "140px" },
    { text: "grow your business", width: "280px" },
    { text: "stand out", width: "140px" }
  ];


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

      // Border and services text show immediately without animation
      if (borderRef.current) {
        gsap.set(borderRef.current, { opacity: 1 });
      }
      if (servicesRef.current) {
        gsap.set(servicesRef.current, { opacity: 1 });
      }

      // No animation for "Made Right" text - just show it
      gsap.set([madeRef.current, rightRef.current], {
        opacity: 1
      });

      // No animation for tagline - just show it
      gsap.set(taglineRef.current, {
        opacity: 1
      });
    });

  }, [fontLoaded]);

  // Word swapping animation
  useGSAP(() => {
    if (!fontLoaded || !wordSwapRef.current) return;

    const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    if (prefersReducedMotion) {
      gsap.set(wordSwapRef.current, { opacity: 1, y: 0 });
      return;
    }

    // Initial animation - fade in first word from below
    gsap.fromTo(wordSwapRef.current,
      {
        y: '100%',
        opacity: 0
      },
      {
        y: '0%',
        opacity: 1,
        duration: 0.6,
        ease: 'power2.out',
        delay: 1.2 // Start after the "Design-first" animation
      }
    );

    // Set up looping animation
    const interval = setInterval(() => {
      if (!wordSwapRef.current) return;

      // Animate current word out (up)
      gsap.to(wordSwapRef.current, {
        y: '-100%',
        opacity: 0,
        duration: 0.5,
        ease: 'power2.in',
        onComplete: () => {
          // Change the word
          setCurrentWordIndex((prev) => (prev + 1) % swappingWords.length);

          // Reset position to below before animating in
          gsap.set(wordSwapRef.current, { y: '100%' });

          // Animate new word in (from below)
          gsap.to(wordSwapRef.current,
            {
              y: '0%',
              opacity: 1,
              duration: 0.5,
              ease: 'power2.out'
            }
          );
        }
      });
    }, 3000); // Change word every 3 seconds

    return () => clearInterval(interval);
  }, [fontLoaded, swappingWords.length]);



  return (


    <div className="bg-teal-950 d-flex justify-content-center align-items-center position-relative" style={{ height: window.innerWidth <= 768 ? '100vh' : '93vh' }}>

      {/* Services text - bottom left */}
      <div
        ref={servicesRef}
        className="position-absolute bottom-0 start-0 text-slate-300 font-mono text-xs px-4 pb-4"
        style={{
          letterSpacing: '0.02em'
        }}
      >
        {window.innerWidth <= 768
          ? "Columbia, South Carolina"
          : "Web Design, Development, & Full-Stack Solutions"}
      </div>

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

              <span className="word emphasis animate lora">Design-first</span>{' '}
              <span className="font-semibold italic">technology</span>{' '}
              <span className="lora">to</span>{' '}
              <span
                className="d-inline-block position-relative"
                style={{
                  overflow: 'visible',
                  height: '1.2em',
                  width: '280px',
                  verticalAlign: 'baseline',
                  display: 'inline-block',
                  top: window.innerWidth <= 768 ? '0.1em' : '0.15em',
                  ...(window.innerWidth <= 768 ? { textAlign: 'center', left: '50%', transform: 'translateX(-50%)' } : {})
                }}
              >
                <span
                  ref={wordSwapRef}
                  className="lora font-semibold d-inline-block position-absolute"
                  style={{
                    opacity: 0,
                    whiteSpace: 'nowrap',
                    ...(window.innerWidth <= 768 ? { width: '100%', textAlign: 'center', left: 0, right: 0 } : { left: 0 }),
                    top: 0
                  }}
                >
                  {swappingWords[currentWordIndex].text}
                </span>
              </span>
            </div>
          </section>

          <br />

          <div className="d-none d-lg-flex justify-content-center ">
            <span className="text-xs tracking-wider pt-lg-2 px-2  text-slate-100 font-mono">
              Located in Columbia, South Carolina
            </span>
          </div>
        </h2>

        <button
          onClick={(e) => {
            triggerConfetti(e.currentTarget);
            window.location.href = "mailto:hello@maderight.studio";
          }}
          className="btn-contact text-decoration-none d-inline-flex align-items-center justify-content-center mt-4 px-3 text-md font-mono position-relative border-0 text-sky-50"
          style={{
            background: "transparent",
            height: window.innerWidth <= 768 ? "50px" : "60px",
            minWidth: window.innerWidth <= 768 ? "150px" : "180px",
            cursor: "pointer"
          }}
        >
          <ButtonShape
            color={BRAND_COLORS.yellow}
            width={window.innerWidth <= 768 ? 150 : 180}
            height={window.innerWidth <= 768 ? 50 : 60}
            className="position-absolute top-0 start-0"
            style={{ pointerEvents: "none" }}
          />
          <span
            className="position-relative d-flex align-items-center p-2 gap-2"
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