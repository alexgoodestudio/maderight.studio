import React, { useRef, useState } from "react";
import { gsap } from "gsap";
import { useGSAP } from "@gsap/react";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { ScrambleTextPlugin } from "gsap/ScrambleTextPlugin";
import { ButtonShape, BRAND_COLORS } from './Shapes';
import { ArrowUpRight } from 'lucide-react';
import { triggerConfetti } from '../utils/confetti';
import Line from "./Images/b.png"

gsap.registerPlugin(ScrollTrigger, ScrambleTextPlugin);

function Opener() {
  const designRef = useRef(null);
  const firstRef = useRef(null);
  const webRef = useRef(null);
  const developmentRef = useRef(null);
  const taglineRef = useRef(null);
  const sectionRef = useRef(null);
  const borderRef = useRef(null);
  const servicesRef = useRef(null);
  const [fontLoaded, setFontLoaded] = useState(false);
  const [currentWordIndex, setCurrentWordIndex] = useState(0);
  const [isButtonHovered, setIsButtonHovered] = useState(false);
  const [hasInitialAnimated, setHasInitialAnimated] = useState(false);
  const wordSwapRef = useRef(null);
  const initialPhraseWordsRef = useRef([]);

  // Words to cycle through with their widths
  const swappingWords = [
    { text: "drive conversions", width: "240px", words: ["drive", "conversions"] },
    { text: "build customer trust", width: "280px" },
    { text: "grow your business", width: "280px" },
    { text: "stand out", width: "300px" }
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
    if (!designRef.current || !firstRef.current || !webRef.current || !developmentRef.current || !taglineRef.current) return;

    const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;

    if (prefersReducedMotion) {
      gsap.set([designRef.current, firstRef.current, webRef.current, developmentRef.current, taglineRef.current], {
        opacity: 1
      });
      return;
    }

    // Wait for next frame to ensure elements are rendered
    requestAnimationFrame(() => {
      // Double-check refs are still valid
      if (!designRef.current || !firstRef.current || !webRef.current || !developmentRef.current || !taglineRef.current) return;

      // Border and services text show immediately without animation
      if (borderRef.current) {
        gsap.set(borderRef.current, { opacity: 1 });
      }
      if (servicesRef.current) {
        gsap.set(servicesRef.current, { opacity: 1 });
      }

      // Word-by-word reveal for "Design-first web development to"
      const allWords = [designRef.current, webRef.current, developmentRef.current, firstRef.current];

      gsap.from(allWords, {
        y: 20,
        opacity: 0,
        stagger: 0.08, // 80ms between each word
        duration: 0.5,
        ease: 'back.out(1.4)'
      });

      // Tagline fades in after letters complete
      gsap.from(taglineRef.current, {
        opacity: 0,
        duration: 0.8,
        delay: 0.3, // Start after letters begin
        ease: 'power2.out'
      });
    });

  }, [fontLoaded]);

  // Initial phrase word-by-word animation (only runs once)
  useGSAP(() => {
    if (!fontLoaded || !wordSwapRef.current || hasInitialAnimated) return;

    const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    if (prefersReducedMotion) {
      setHasInitialAnimated(true);
      return;
    }

    const wordElements = initialPhraseWordsRef.current;

    if (wordElements.length > 0) {
      // Set initial state - words hidden and slightly below
      gsap.set(wordElements, { y: 20, opacity: 0 });

      // Animate words in one by one
      gsap.to(wordElements, {
        y: 0,
        opacity: 1,
        stagger: 0.08,
        duration: 0.5,
        ease: 'back.out(1.4)',
        onComplete: () => {
          setHasInitialAnimated(true);
        }
      });
    }
  }, [fontLoaded, hasInitialAnimated]);

  // Word swapping animation (runs after initial animation completes)
  useGSAP(() => {
    if (!fontLoaded || !wordSwapRef.current || !hasInitialAnimated) return;

    const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    if (prefersReducedMotion) {
      gsap.set(wordSwapRef.current, { opacity: 1, y: 0 });
      return;
    }

    // Function to perform the word swap animation
    const performSwap = () => {
      if (!wordSwapRef.current) return;

      // Animate current word out (up)
      gsap.to(wordSwapRef.current, {
        y: '-100%',
        opacity: 0,
        duration: 0.5,
        ease: 'power2.in',
        onComplete: () => {
          // Safety check: verify ref still exists before proceeding
          if (!wordSwapRef.current) return;

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
    };

    let intervalId;

    // First swap happens after 2 seconds
    const firstTimeout = setTimeout(() => {
      performSwap();

      // After first swap, set up interval for subsequent swaps at 3 seconds each
      intervalId = setInterval(performSwap, 3000);
    }, 2000);

    return () => {
      clearTimeout(firstTimeout);
      if (intervalId) clearInterval(intervalId);
    };
  }, [fontLoaded, swappingWords.length, hasInitialAnimated]);



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
          ? "Web Design, SEO & Full-Stack Solutions"
          : "Web Design, Development, & Full-Stack Solutions"}
      </div>

      <section
        ref={sectionRef}
        className="text-center"
        style={{ opacity: fontLoaded ? 1 : 0 }}
      >


        <h2 ref={taglineRef} className="mt-lg-4 mt-3 text-slate-100 pt-4 font-light mb-5 opener-tagline" style={{ fontSize: window.innerWidth <= 768 ? '1.35rem' : '4rem' }}>
          <section className="d-inline-block text-center pb-2 md:px-6" style={{ padding: window.innerWidth <= 768 ? '0 0.5rem' : '0 1.5rem' }}>
            <div>
              <span ref={designRef} className="word d-inline-block emphasis animate lora pt-lg-4 position-relative" style={{ color: '#FFF7AF', overflow: 'visible', marginRight: window.innerWidth <= 768 ? '0.5rem' : '1rem' }}>
                Design-first
                {window.innerWidth > 768 && (
                  // Image line for desktop only
                  <img
                    src={Line}
                    alt=""
                    className="position-absolute"
                    style={{
                      top: '65%',
                      left: '-2%',
                      width: '110%',
                      height: 'auto',
                      pointerEvents: 'none',
                      filter: 'brightness(1.2) saturate(0.8)',
                      opacity: 0.75,
                      transform: 'none',
                      transformOrigin: 'left center'
                    }}
                  />
                )}
              </span>
              <span ref={webRef} className="word d-inline-block lora font-semibold" style={{ marginRight: window.innerWidth <= 768 ? '0.5rem' : '1rem' }}>web</span>
              <span ref={developmentRef} className="word d-inline-block lora font-semibold" style={{ marginRight: window.innerWidth <= 768 ? '0.5rem' : '1rem' }}>development</span>
              <span ref={firstRef} className="word d-inline-block lora" style={{ marginRight: window.innerWidth <= 768 ? '0.5rem' : '0' }}>to</span>
              <br />
              <span
                className="d-inline-block position-relative"
                style={{
                  overflow: 'hidden',
                  height: '1.4em',
                  width: window.innerWidth <= 768 ? '280px' : '750px',
                  verticalAlign: 'baseline',
                  display: 'inline-block',
                  top: window.innerWidth <= 768 ? '0.1em' : '0.4em',
                  textAlign: 'center',
                  left: window.innerWidth <= 768 ? 'calc(50% + 0.3em)' : '50%',
                  transform: 'translateX(-50%)'
                }}
              >
                {/* White wall overlay - creates cut-off effect on top */}
                <span
                  className="position-absolute bg-teal-950"
                  style={{
                    top: 0,
                    left: 0,
                    right: 0,
                    height: '0.15em',
                    zIndex: 10,
                    pointerEvents: 'none'
                  }}
                />
                {/* White wall overlay - creates cut-off effect on bottom */}
                <span
                  className="position-absolute bg-teal-950"
                  style={{
                    bottom: 0,
                    left: 0,
                    right: 0,
                    height: '0.15em',
                    zIndex: 10,
                    pointerEvents: 'none'
                  }}
                />
                <span
                  ref={wordSwapRef}
                  className="lora font-semibold d-inline-block position-absolute"
                  style={{
                    opacity: 1,
                    whiteSpace: 'nowrap',
                    width: '100%',
                    textAlign: 'center',
                    left: 0,
                    right: 0,
                    top: 0
                  }}
                >
                  {currentWordIndex === 0 && !hasInitialAnimated && swappingWords[0].words ? (
                    // Initial phrase: render individual words for word-by-word animation
                    swappingWords[0].words.map((word, idx) => (
                      <span
                        key={idx}
                        ref={el => initialPhraseWordsRef.current[idx] = el}
                        className="d-inline-block"
                        style={{ marginRight: idx < swappingWords[0].words.length - 1 ? '0.25em' : '0' }}
                      >
                        {word}
                      </span>
                    ))
                  ) : (
                    // All other phrases: render as single text with slide animation
                    swappingWords[currentWordIndex].text
                  )}
                </span>
              </span>
            </div>
          </section>

          <br />

          <div className="d-flex justify-content-center">
            <span className="text-xs tracking-wider pt-lg-2 px-2 text-slate-100 font-mono">
              Located in Columbia, South Carolina
            </span>
          </div>
        </h2>

        <button
          onClick={(e) => {
            triggerConfetti(e.currentTarget);
            window.location.href = "mailto:hello@maderight.studio";
          }}
          onMouseEnter={() => setIsButtonHovered(true)}
          onMouseLeave={() => setIsButtonHovered(false)}
          className="btn-contact text-decoration-none d-inline-flex align-items-center justify-content-center mt-4 px-3 text-md font-mono position-relative border-0 text-white"
          style={{
            background: "transparent",
            height: window.innerWidth <= 768 ? "50px" : "60px",
            minWidth: window.innerWidth <= 768 ? "150px" : "180px",
            cursor: "pointer",
            transform: isButtonHovered ? "translateY(-2px)" : "translateY(0)",
            transition: "transform 0.2s ease"
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
            className="position-relative d-flex align-items-center p-2 gap-2 text-dark"
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