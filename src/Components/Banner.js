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
    const containerWidth = el.parentElement.offsetWidth;
    const textWidth = el.offsetWidth;

    // position text to start 1/3 across the screen
    const startPosition = containerWidth / 3;
    gsap.set(el, { x: startPosition });

    animationRef.current = gsap.to(el, {
      x: -textWidth - containerWidth,
      duration: 20,
      ease: "linear",
      repeat: -1,
      scrollTrigger: {
        trigger: containerRef.current,
        start: "top bottom", // animation starts when top of element hits bottom of viewport
        end: "bottom top", // animation pauses when bottom of element hits top of viewport
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

  return (
    <div
      ref={containerRef}
      className="banner-container bg-teal-900"
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
    >
      <span ref={textRef} className="banner-text text-white">
         How can we help you make an impact? Lets talk about it.
      </span>
    </div>
  );
}

export default Banner;