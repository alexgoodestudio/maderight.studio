import React, { useRef } from "react";
import { Link } from "react-router-dom";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/all";
import { useGSAP } from "@gsap/react";
import { ButtonShape, BRAND_COLORS } from "./Shapes";
import { ArrowUpRight } from "lucide-react";

function Mission() {
  const container = useRef();
  const confettiContainer = useRef();
  const buttonRef = useRef();
  const underlineRef = useRef();
  const confettiFired = useRef(false);

  gsap.registerPlugin(ScrollTrigger);

  // Create and animate confetti burst
  const triggerConfetti = () => {
    if (confettiFired.current) return; // Only fire once
    confettiFired.current = true;

    const colors = ["#FFF7AF", "#2C4B45", "#A1ADEB"];
    const confettiCount = 36;

    for (let i = 0; i < confettiCount; i++) {
      const confetti = document.createElement("div");
      confetti.className = "confetti-piece";

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
        opacity: 0;
        border-radius: 50%;
      `;
      confettiContainer.current.appendChild(confetti);

      gsap
        .timeline()
        .to(confetti, {
          x: xDest,
          y: yDest,
          opacity: 1,
          duration: 0.8,
          ease: "power2.out",
        })
        .to(confetti, {
          x: xDest * 2.5,
          y: yDest * 2.5,
          opacity: 0,
          duration: 0.4,
          ease: "power1.inOut",
          onComplete: () => confetti.remove(),
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
        end: "+=4000",
        scrub: 0.8,
        pin: true,
        pinSpacing: true,
        anticipatePin: 1,
        fastScrollEnd: true,
        invalidateOnRefresh: true,
        onUpdate: (self) => {
          // Trigger confetti after Made Right has faded out (~95% progress)
          if (self.progress > 0.99 && !confettiFired.current) {
            triggerConfetti();
          }
        },
      },
    });

    // Fade in words and button - animation stays at final state
    tl.fromTo(
      words,
      { opacity: 0.2 },
      { opacity: 1, stagger: 0.1, duration: 1 },
      0
    );

    // Animate underline from left to right synced with word fade-in
    if (underlineRef.current) {
      tl.fromTo(
        underlineRef.current,
        { scaleX: 0, opacity: 0 },
        { scaleX: 1, opacity: 1, duration: 1.2, ease: "power2.out" },
        0.3 // Start slightly after words begin fading in
      );
    }

    tl.fromTo(
      buttonRef.current,
      { opacity: 0 },
      { opacity: 1, duration: 1 },
      0.5
    );
  }, []);

  const text =
    "Made Right is a design-focused web development studio based in Columbia, South Carolina. Our goal is to bring together creativity, technology, and design to create performant, lasting websites that convert. With thoughtful user flows, strategic SEO implementation and our approach to development, we strive to deliver services that that you'll love well past launch.";

  return (
    <section className="bg-yellow gs mission-p py-5  text-start px-lg-5 px-4 position-relative" style={{ overflow: 'visible' }}>
      {/* Top wave */}
      <div className="position-absolute start-0 w-100" style={{ top: '-1px', zIndex: 1 }}>
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1200 120" preserveAspectRatio="none" style={{ width: '100%', height: '60px', display: 'block' }}>
          <path d="M0,120 C300,80 900,80 1200,120 L1200,0 L0,0 Z" fill="#ffffff" />
        </svg>
      </div>

      {/* Bottom wave */}
      <div className="position-absolute start-0 w-100" style={{ bottom: '-1px', zIndex: 1 }}>
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1200 120" preserveAspectRatio="none" style={{ width: '100%', height: '60px', display: 'block' }}>
          <path d="M0,0 C300,40 900,40 1200,0 L1200,120 L0,120 Z" fill="#ffffff" />
        </svg>
      </div>

      <div
        ref={confettiContainer}
        className="position-fixed confetti-container "
      />
      <div ref={container} className="mission-body ">
        <p>
          {text.split(" ").map((word, i) => {
            const match = word.match(/^(\w+)(\W*)$/);
            const letters = match ? match[1] : word;
            const punctuation = match ? match[2] : "";

            let colorClass = "";
            let specialClass = "";

            if (letters === "Made" || letters === "Right") {
              colorClass = "text-teal-900 lora";
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
        <Link
          ref={buttonRef}
          to="/our-process"
          className="btn-contact text-decoration-none d-inline-flex align-items-center justify-content-center mt-4 px-3 text-md font-mono position-relative border-0 text-white"
          style={{
            background: "transparent",
            height: window.innerWidth <= 768 ? "50px" : "60px",
            minWidth: window.innerWidth <= 768 ? "150px" : "180px",
          }}
        >
          <ButtonShape
            color={BRAND_COLORS.tealDark}
            width={window.innerWidth <= 768 ? 150 : 180}
            height={window.innerWidth <= 768 ? 50 : 60}
            className="position-absolute top-0 start-0"
            style={{ pointerEvents: "none" }}
          />
          <span
            className="position-relative d-flex align-items-center gap-2"
            style={{ zIndex: 1 }}
          >
            Our Process
            <ArrowUpRight size={window.innerWidth <= 768 ? 14 : 16} strokeWidth={2} />
          </span>
        </Link>
      </div>
    </section>
  );
}

export default Mission;
