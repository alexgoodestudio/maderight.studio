import React, { useRef } from 'react';
import { useGSAP } from '@gsap/react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

const MOTION = {
  instant: 0.15,
  quick: 0.3,
  smooth: 0.5,
  slow: 0.8,
  story: 1.2
};

// Split text into animated characters with optional special ending
function AnimatedText({ text, className, staggerDelay = 0.03, triggerRef, endChar }) {
  const containerRef = useRef(null);
  const endCharRef = useRef(null);

  useGSAP(() => {
    const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    if (prefersReducedMotion) return;

    const chars = containerRef.current.querySelectorAll('.char');
    
    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: triggerRef?.current || containerRef.current,
        start: 'top 85%',
        toggleActions: 'play none none none'
      }
    });

    // Stagger in the characters
    tl.fromTo(chars,
      {
        y: '100%',
        opacity: 0
      },
      {
        y: '0%',
        opacity: 1,
        duration: MOTION.smooth,
        ease: 'power3.out',
        stagger: staggerDelay
      }
    );

    // Bounce in the end character after text finishes
    if (endCharRef.current) {
      tl.fromTo(endCharRef.current,
        {
          scale: 0,
          rotation: -20
        },
        {
          scale: 1,
          rotation: 0,
          duration: MOTION.slow,
          ease: 'elastic.out(1, 0.5)'
        },
        `-=${MOTION.quick}` // Overlap slightly with end of text
      );
    }
  }, [triggerRef]);

  const words = text.split(' ');

  return (
    <span ref={containerRef} className={className}>
      {words.map((word, wordIndex) => (
        <span key={wordIndex} className="word" style={{ display: 'inline-block', whiteSpace: 'nowrap' }}>
          {word.split('').map((char, charIndex) => (
            <span
              key={charIndex}
              className="char-wrap"
              style={{
                display: 'inline-block',
                overflow: 'hidden',
                verticalAlign: 'bottom'
              }}
            >
              <span
                className="char"
                style={{
                  display: 'inline-block',
                  willChange: 'transform'
                }}
              >
                {char}
              </span>
            </span>
          ))}
          {/* Add endChar after the last word */}
          {endChar && wordIndex === words.length - 1 && (
            <span
              ref={endCharRef}
              style={{
                display: 'inline-block',
                transformOrigin: 'center bottom'
              }}
            >
              {endChar}
            </span>
          )}
          {wordIndex < words.length - 1 && (
            <span style={{ display: 'inline-block' }}>&nbsp;</span>
          )}
        </span>
      ))}
    </span>
  );
}

function Contact() {
  const sectionRef = useRef(null);
  const waveRef = useRef(null);
  const bodyRef = useRef(null);
  const buttonRef = useRef(null);

  useGSAP(() => {
    const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    
    if (prefersReducedMotion) return;

    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: sectionRef.current,
        start: 'top 85%',
        toggleActions: 'play none none none'
      }
    });

    // Body text fades up
    tl.fromTo(bodyRef.current,
      {
        y: 30,
        opacity: 0
      },
      {
        y: 0,
        opacity: 1,
        duration: MOTION.smooth,
        ease: 'power2.out'
      },
      0.6
    );

    // Button slides in
    tl.fromTo(buttonRef.current,
      {
        y: 20,
        opacity: 0
      },
      {
        y: 0,
        opacity: 1,
        duration: MOTION.quick,
        ease: 'power2.out'
      },
      0.9
    );

    // Waving hand starts after everything is visible
    if (waveRef.current) {
      tl.to(waveRef.current, {
        rotation: 20,
        transformOrigin: 'bottom center',
        duration: MOTION.smooth,
        ease: 'power1.inOut',
        yoyo: true,
        repeat: -1,
        repeatDelay: 0.8
      }, 1.2);
    }

  }, []);

  const handleContactClick = () => {
    window.location.href = "mailto:hello@maderight.studio";
  };

  return (
    <div ref={sectionRef} className="row contact">
      <div className="col-lg-12 col-12 bg-slate-50 contact text-dark d-flex flex-column justify-content-center items-center text-center p-4">
        <h3 className="text-5xl eighties font-bold mb-3">
          <AnimatedText 
            text="Interested in working together" 
            staggerDelay={0.025}
            triggerRef={sectionRef}
            endChar="?"
          />
        </h3>
        <p ref={bodyRef} className="text-lg contact-body gs text-start mb-5">
          Made Right is interested in working with you. Send us a brief of what
          you would like done. It works best if you send a budget so we can plan
          accordingly to create within your means.
        </p>
        <button
          ref={buttonRef}
          onClick={handleContactClick}
          className="btn-contact text-lg font-mono bg-sky-400 text-sky-50 px-5 py-3 rounded"
        >
          Email
        </button>
      </div>
    </div>
  );
}

export default Contact;