import React, { useRef } from "react";
import { gsap } from "gsap";
import { useGSAP } from "@gsap/react";
import "./Style.css";

function Banner() {
  const textRef = useRef();

  useGSAP(() => {
    const el = textRef.current;
    const containerWidth = el.parentElement.offsetWidth;
    const textWidth = el.offsetWidth;

    // immediately position offscreen to the right
    gsap.set(el, { x: containerWidth });

    gsap.to(el, {
      x: -textWidth - containerWidth,
      duration: 20,
      ease: "linear",
      repeat: -1,
    });
  });

  return (
    <div className="banner-container bg-amber-950 ">
      <span ref={textRef} className="banner-text text-white">
         How can we help you make an impact? Lets talk about it.
      </span>
    </div>
  );
}

export default Banner;
