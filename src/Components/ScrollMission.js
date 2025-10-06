import React, { useRef, useEffect } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/all";
import { useGSAP } from "@gsap/react";

function ScrollMission() {
  const container = useRef();
  const particleWrapperRef = useRef();

  gsap.registerPlugin(ScrollTrigger);

  useEffect(() => {
    const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    if (prefersReducedMotion || !particleWrapperRef.current || !container.current) return;

    const wrapper = particleWrapperRef.current;
    const textElement = container.current;
    const particles = [];
    
    const tailwindColors = [
      '#f9a8d4', // pink-300
      '#c4b5fd', // violet-300
      '#93c5fd', // blue-300
      '#6ee7b7', // emerald-300
      '#fcd34d', // amber-300
      '#fdba74', // orange-300
      '#fca5a5', // red-300
      '#5eead4', // teal-300
      '#bef264', // lime-300
      '#d8b4fe', // purple-300
    ];

    const updateParticleBounds = () => {
      const bounds = textElement.getBoundingClientRect();
      wrapper.style.top = `${bounds.top}px`;
      wrapper.style.left = `${bounds.left}px`;
      wrapper.style.width = `${bounds.width}px`;
      wrapper.style.height = `${bounds.height}px`;
    };

    updateParticleBounds();

    for (let i = 0; i < 18; i++) {
      const particle = document.createElement('div');
      const startX = gsap.utils.random(5, 95);
      const startY = gsap.utils.random(5, 95);
      const color = tailwindColors[Math.floor(Math.random() * tailwindColors.length)];
      
      particle.style.cssText = `
        position: absolute;
        width: 14px;
        height: 14px;
        border-radius: 50%;
        background-color: ${color};
        opacity: 0.6;
        pointer-events: auto;
        left: ${startX}%;
        top: ${startY}%;
        cursor: pointer;
        transition: transform 0.2s ease;
      `;
      
      wrapper.appendChild(particle);
      particles.push(particle);

      // Primary movement - increased range and faster
      gsap.to(particle, {
        x: gsap.utils.random(-200, 200),
        y: gsap.utils.random(-200, 200),
        duration: gsap.utils.random(5, 10),
        ease: 'sine.inOut',
        repeat: -1,
        yoyo: true,
        delay: i * 0.1
      });

      // Scale animation - more dramatic
      gsap.to(particle, {
        scale: gsap.utils.random(0.6, 1.4),
        duration: gsap.utils.random(1.5, 3),
        ease: 'sine.inOut',
        repeat: -1,
        yoyo: true
      });

      // Rotation - continuous spin
      gsap.to(particle, {
        rotation: 360,
        duration: gsap.utils.random(4, 8),
        ease: 'none',
        repeat: -1
      });

      // Secondary floating movement
      gsap.to(particle, {
        x: `+=${gsap.utils.random(-50, 50)}`,
        y: `+=${gsap.utils.random(-50, 50)}`,
        duration: gsap.utils.random(2, 4),
        ease: 'power1.inOut',
        repeat: -1,
        yoyo: true,
        delay: gsap.utils.random(0, 2)
      });

      // Opacity pulse
      gsap.to(particle, {
        opacity: gsap.utils.random(0.3, 0.8),
        duration: gsap.utils.random(2, 5),
        ease: 'sine.inOut',
        repeat: -1,
        yoyo: true
      });

      particle.addEventListener('mouseenter', () => {
        gsap.to(particle, {
          scale: 2.5,
          duration: 0.2,
          ease: 'back.out(2)'
        });
      });

      particle.addEventListener('mouseleave', () => {
        gsap.to(particle, {
          scale: 1,
          duration: 0.5,
          ease: 'elastic.out(1, 0.4)'
        });
      });

      particle.addEventListener('click', () => {
        gsap.to(particle, {
          x: gsap.utils.random(-300, 300),
          y: gsap.utils.random(-300, 300),
          rotation: gsap.utils.random(360, 720),
          scale: 0,
          opacity: 0,
          duration: 0.8,
          ease: 'power2.out',
          onComplete: () => {
            gsap.set(particle, {
              x: 0,
              y: 0,
              rotation: 0,
              scale: 1,
              opacity: 0.6
            });
          }
        });
      });
    }

    const handleScroll = () => {
      updateParticleBounds();
    };

    window.addEventListener('scroll', handleScroll);
    window.addEventListener('resize', handleScroll);

    return () => {
      particles.forEach(p => {
        gsap.killTweensOf(p);
        p.remove();
      });
      window.removeEventListener('scroll', handleScroll);
      window.removeEventListener('resize', handleScroll);
    };
  }, []);

  useGSAP(() => {
    const words = container.current.querySelectorAll(".word");

    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: container.current,
        start: "center center",
        end: "+=1000",
        scrub: true,
        pin: true,
        anticipatePin: 1,
      },
    });

    tl.fromTo(words, { opacity: 0.2 }, { opacity: 1, stagger: 0.1 });
  }, []);

  const text = `At Made Right, we bring creativity + technology together to develop web experiences that are as functional as they are beautiful. We focus on thoughtful design, smooth interactions, and purposeful strategy—helping brands grow their presence with websites that inspire, engage, and perform.`;

  return (
    <div className="bg-white">
      <div 
        ref={particleWrapperRef}
        style={{
          position: 'fixed',
          pointerEvents: 'none',
          zIndex: 0,
          overflow: 'hidden'
        }}
      />
      
      <p
        ref={container}
        className="story text-3xl leading-relaxed text-slate-500 mission-body"
      >
        {text.split(" ").map((word, i) => {
          const match = word.match(/^(\w+)(\W*)$/);
          const letters = match ? match[1] : word;
          const punctuation = match ? match[2] : "";

          let colorClass = "";
          if (letters === "creativity") colorClass = "text-blue-400 eighties";
          else if (letters === "technology") colorClass = "text-blue-800 eighties";

          return (
            <span key={i} className="inline-block light mr-2">
              <span className={`word ${colorClass}`}>
                {letters}
              </span>
              {punctuation && <span className="word">{punctuation}</span>}
            </span>
          );
        })}
      </p>
    </div>
  );
}

export default ScrollMission;