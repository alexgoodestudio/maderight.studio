import React, { useRef } from "react";
import { gsap } from "gsap";
import { useGSAP } from "@gsap/react";
import "./Style.css";

function Banner() {
  const textRef = useRef();

  // useGSAP handles setup and cleanup automatically
  useGSAP(() => {
    const el = textRef.current;
    const containerWidth = el.parentElement.offsetWidth;
    const textWidth = el.offsetWidth;

    // immediately position offscreen to the right
    gsap.set(el, { x: containerWidth });

    // animate smoothly to the left, repeat infinitely
    gsap.to(el, {
      x: -textWidth - containerWidth,
      duration: 20,
      ease: "linear",
      repeat: -1,
    });
  });

  return (
    <div className="banner-container bg-dark ">
      <span ref={textRef} className="banner-text">
        The key to a happy marriage is hiring a regular house cleaner. Save on therapy. Hire us today!
      </span>
    </div>
  );
}

export default Banner;
