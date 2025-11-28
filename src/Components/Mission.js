import React, { useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/all";
import { useGSAP } from "@gsap/react";

function Mission() {
  const container = useRef();
  const confettiContainer = useRef();
  const confettiFired = useRef(false);

  gsap.registerPlugin(ScrollTrigger);

  // Create and animate confetti burst
  const triggerConfetti = () => {
    if (confettiFired.current) return; // Only fire once
    confettiFired.current = true;

    const colors = ['#FFF7AF', '#2C4B45', '#A1ADEB'];
    const confettiCount = 36;

    for (let i = 0; i < confettiCount; i++) {
      const confetti = document.createElement('div');
      confetti.className = 'confetti-piece';

      // Evenly distribute angles to prevent overlap
      const angle = (i / confettiCount) * Math.PI * 2;
      const velocity = 200 + (i % 3) * 80; // 3 rings at different distances
      const xDest = Math.cos(angle) * velocity;
      const yDest = Math.sin(angle) * velocity;

      confetti.style.cssText = `
        position: absolute;
        width: 14px;
        height: 14px;
        background: ${colors[i % colors.length]};
        left: 50%;
        top: 50%;
        opacity: 1;
        border-radius: 50%;
      `;
      confettiContainer.current.appendChild(confetti);

      gsap.to(confetti, {
        x: xDest,
        y: yDest,
        opacity: 0,
        duration: 2,
        ease: 'power2.out',
        onComplete: () => confetti.remove()
      });
    }
  };

  useGSAP(() => {
    const words = container.current.querySelectorAll(".word");

    // SINGLE UNIFIED SCROLLTRIGGER - pin and animation together
    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: container.current,
        start: "center center",
        end: "+=5000",
        scrub: 1.5,
        pin: true,
        anticipatePin: 1,
        onUpdate: (self) => {
          // Trigger confetti after Made Right has faded out (~95% progress)
          if (self.progress > 0.99 && !confettiFired.current) {
            triggerConfetti();
          }
        }
      },
    });

    // Fade in words
    tl.fromTo(words, { opacity: 0.2 }, { opacity: 1, stagger: 0.1, duration: 1 }, 0);

    // Hold at full opacity
    tl.to({}, { duration: 1 });

    // Fade out all words including "Made Right"
    tl.to(words, {
      opacity: 0,
      duration: 1.5,
      ease: 'power1.out'
    });

  }, []);

  const text = "Made Right is a design-focused web development studio based in Columbia, South Carolina. Our goal is to bring creativity and technology together to develop high-performing websites that showcases your brand and gets found. We focus on design principles, technical performance and purposeful strategy.";

  return (
    <section className="bg-white gs mission-p py-5 text-start px-lg-0 px-1 position-relative">
      <div ref={confettiContainer} className="position-fixed" style={{ left: '50%', top: '50%', pointerEvents: 'none', zIndex: 9999 }} />
      <p ref={container} className="mission-body">
        {text.split(" ").map((word, i) => {
          const match = word.match(/^(\w+)(\W*)$/);
          const letters = match ? match[1] : word;
          const punctuation = match ? match[2] : "";

          let colorClass = "";
          let specialClass = "";

          if (letters === "Made" || letters === "Right") {
            colorClass = "service-blue ";
            specialClass = "made-right";
          }

          return (
            <span key={i} className="inline-block mr-2">
              <span className={`word ${colorClass} ${specialClass}`}>
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