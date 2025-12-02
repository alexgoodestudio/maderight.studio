import React, { useRef } from "react";
import { gsap } from "gsap";
import { useGSAP } from "@gsap/react";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import "./Style.css";

gsap.registerPlugin(ScrollTrigger);

function Banner() {
  const textRef = useRef();
  const containerRef = useRef();
  const animationRef = useRef();

  useGSAP(() => {
    const el = textRef.current;
    const textWidth = el.offsetWidth / 3; // Divide by 3 since we repeat text 3 times

    // Start from right edge (positive value)
    gsap.set(el, { x: 0 });

    animationRef.current = gsap.to(el, {
      x: -textWidth,
      duration: 20,
      ease: "linear",
      repeat: -1,
      modifiers: {
        x: gsap.utils.unitize(x => parseFloat(x) % -textWidth)
      },
      scrollTrigger: {
        trigger: containerRef.current,
        start: "top bottom",
        end: "bottom top",
        toggleActions: "play pause resume pause",
      },
    });
  });

  const handleMouseEnter = () => {
    if (animationRef.current) {
      animationRef.current.pause();
    }
  };

  const handleMouseLeave = () => {
    if (animationRef.current) {
      animationRef.current.resume();
    }
  };

  const bannerText = "How can we help you make an impact? Lets talk about it. ";

  return (
    <div
      ref={containerRef}
      className="banner-container bg-teal-900"
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
    >
      <span ref={textRef} className="banner-text text-white">
        {bannerText.repeat(3)}
      </span>
    </div>
  );
}

export default Banner;