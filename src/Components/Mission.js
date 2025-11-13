import React, { useRef, useEffect } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/all";
import { useGSAP } from "@gsap/react";

function Mission() {
  const container = useRef();
  const particleWrapperRef = useRef();
  const particlesRef = useRef([]);
  const hasFadedInRef = useRef(false);

  gsap.registerPlugin(ScrollTrigger);

  useEffect(() => {
    const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;

    if (prefersReducedMotion || !particleWrapperRef.current || !container.current) return;

    const wrapper = particleWrapperRef.current;
    const textElement = container.current;
    const particles = [];
    
    const tailwindColors = [
      '#7dd3fc',
      '#a7f3d0',
    ];

    // FIXED: Only update bounds on resize, not on scroll
    const updateParticleBounds = () => {
      const bounds = textElement.getBoundingClientRect();
      wrapper.style.top = `${bounds.top + window.scrollY}px`; // Use absolute positioning
      wrapper.style.left = `${bounds.left}px`;
      wrapper.style.width = `${bounds.width}px`;
      wrapper.style.height = `${bounds.height}px`;
    };

    updateParticleBounds();

    for (let i = 0; i < 8; i++) {
      const particle = document.createElement('div');
      const startX = gsap.utils.random(5, 95);
      const startY = gsap.utils.random(5, 95);
      const color = tailwindColors[i % 2];
      const size = i < 12 ? 30 : gsap.utils.random(8, 22);
      
      particle.style.cssText = `
        position: absolute;
        width: ${size}px;
        height: ${size}px;
        border-radius: 50%;
        background-color: ${color};
        opacity: 0;
        pointer-events: none;
        left: ${startX}%;
        top: ${startY}%;
        will-change: transform;
      `;
      
      wrapper.appendChild(particle);
      particles.push(particle);
      particlesRef.current.push(particle);

      // Primary movement
      gsap.to(particle, {
        x: gsap.utils.random(-400, 400),
        y: gsap.utils.random(-400, 400),
        duration: gsap.utils.random(5, 10),
        ease: 'sine.inOut',
        repeat: -1,
        yoyo: true,
        delay: i * 0.1
      });

      // Scale animation
      gsap.to(particle, {
        scale: gsap.utils.random(0.6, 1.4),
        duration: gsap.utils.random(1.5, 3),
        ease: 'sine.inOut',
        repeat: -1,
        yoyo: true
      });

      // Rotation
      gsap.to(particle, {
        rotation: 360,
        duration: gsap.utils.random(4, 8),
        ease: 'none',
        repeat: -1
      });

      // Secondary floating
      gsap.to(particle, {
        x: `+=${gsap.utils.random(-50, 50)}`,
        y: `+=${gsap.utils.random(-50, 50)}`,
        duration: gsap.utils.random(2, 4),
        ease: 'power1.inOut',
        repeat: -1,
        yoyo: true,
        delay: gsap.utils.random(0, 2)
      });
    }

    // REMOVED: Scroll event listener (was causing reflow)
    // Only resize handler now
    let resizeTimeout;
    const handleResize = () => {
      clearTimeout(resizeTimeout);
      resizeTimeout = setTimeout(updateParticleBounds, 100);
    };

    window.addEventListener('resize', handleResize);

    return () => {
      particles.forEach(p => {
        gsap.killTweensOf(p);
        p.remove();
      });
      window.removeEventListener('resize', handleResize);
      clearTimeout(resizeTimeout);
    };
  }, []);

  useGSAP(() => {
    const words = container.current.querySelectorAll(".word");

    const getLineGroups = () => {
      const lineGroups = [];
      const tolerance = 5;
      
      words.forEach((word) => {
        const wordTop = word.getBoundingClientRect().top;
        let foundLine = false;
        
        for (let line of lineGroups) {
          const lineTop = line[0].getBoundingClientRect().top;
          if (Math.abs(wordTop - lineTop) < tolerance) {
            line.push(word);
            foundLine = true;
            break;
          }
        }
        
        if (!foundLine) {
          lineGroups.push([word]);
        }
      });
      
      return lineGroups;
    };

    const createAnimation = () => {
      ScrollTrigger.getAll().forEach(st => {
        if (st.vars.trigger === container.current) {
          st.kill();
        }
      });

      const lineGroups = getLineGroups();

      // FIXED: Single ScrollTrigger with both pin and animation
      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: container.current,
          start: "center center",
          end: "+=1800", // Reduced from 2400
          pin: true,
          anticipatePin: 1,
          scrub: 0.5, // Reduced from 1.5 for better momentum
          invalidateOnRefresh: true,
          onUpdate: (self) => {
            // Fade in particles at 15%
            if (self.progress > 0.15 && !hasFadedInRef.current && particlesRef.current.length > 0) {
              hasFadedInRef.current = true;
              
              particlesRef.current.forEach((particle, index) => {
                const targetOpacity = gsap.utils.random(0.3, 0.8);
                gsap.to(particle, {
                  opacity: targetOpacity,
                  duration: 1.5,
                  delay: index * 0.1,
                  ease: 'power2.out',
                  onComplete: () => {
                    gsap.to(particle, {
                      opacity: gsap.utils.random(0.3, 0.8),
                      duration: gsap.utils.random(2, 5),
                      ease: 'sine.inOut',
                      repeat: -1,
                      yoyo: true
                    });
                  }
                });
              });
            }
            
            // Fly away at 75%
            if (self.progress > 0.75 && particlesRef.current.length > 0) {
              particlesRef.current.forEach((particle, index) => {
                gsap.killTweensOf(particle);
                
                gsap.to(particle, {
                  y: -1000,
                  x: gsap.utils.random(-200, 200),
                  opacity: 0,
                  rotation: gsap.utils.random(360, 720),
                  duration: 0.8,
                  delay: index * 0.03,
                  ease: 'power2.in'
                });
              });
              particlesRef.current = [];
            }
          }
        },
      });

      // Fade in words
      tl.fromTo(words, { opacity: 0.2 }, { opacity: 1, stagger: 0.1, duration: 1 }, 0);
      
      // Hold
      tl.to({}, { duration: 0.3 });
      
      // Slide out lines
      lineGroups.forEach((lineWords, lineIndex) => {
        const direction = lineIndex % 2 === 0 ? '40vw' : '-40vw';
        tl.to(lineWords, {
          x: direction,
          opacity: 0,
          duration: 1.5,
          ease: 'power1.out'
        }, '<');
      });
    };

    createAnimation();

    let resizeTimeout;
    const handleResize = () => {
      clearTimeout(resizeTimeout);
      resizeTimeout = setTimeout(() => {
        gsap.set(words, { x: 0, opacity: 1 });
        hasFadedInRef.current = false;
        createAnimation();
        ScrollTrigger.refresh();
      }, 250);
    };

    window.addEventListener('resize', handleResize);

    return () => {
      window.removeEventListener('resize', handleResize);
      clearTimeout(resizeTimeout);
    };

  }, []);

  const text = "Made Right is a design-focused web development company based in Columbia, South Carolina. Our goal is to bring creativity and technology together to develop highly-performant web experiences that are as functional as they are dependable. We focus on thoughtful design, and purposeful strategy—helping brands grow their presence with websites that communicate clearly, build trust, and drive results.";

  return (
    <section className="bg-white gs mission-p py-5 text-start px-lg-5 px-3">
      <div 
        ref={particleWrapperRef}
        style={{
          position: 'absolute',
          pointerEvents: 'none',
          zIndex: 0,
          overflow: 'visible',
        }}
      />
      
      <p ref={container} className="mission-body" style={{ position: 'relative', zIndex: 1 }}>
        {text.split(" ").map((word, i) => {
          const match = word.match(/^(\w+)(\W*)$/);
          const letters = match ? match[1] : word;
          const punctuation = match ? match[2] : "";

          let colorClass = "";
          if (letters === "Made" || letters === "Right") {
            colorClass = "text-sky-500";
          }

          return (
            <span key={i} className="inline-block mr-2">
              <span className={`word ${colorClass}`}>
                {letters}
              </span>
              {punctuation && <span className="word">{punctuation}</span>}
            </span>
          );
        })}
      </p>
    </section>
  );
}

export default Mission;