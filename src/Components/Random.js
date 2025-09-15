import React, { useRef, useLayoutEffect, useState } from "react";
import gsap from "gsap";
import { SplitText } from "gsap/SplitText";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";

gsap.registerPlugin(SplitText, ScrollTrigger);

function Random() {
  const titleRef = useRef(null);
  const [ready, setReady] = useState(false);

  // Wait until component has fully rendered to get accurate width/height
  useLayoutEffect(() => {
    setReady(true);
  }, []);

  useGSAP(() => {
    if (!ready) return;

    const split = new SplitText(titleRef.current, { type: "chars" });
    const container = titleRef.current;

    // Use getBoundingClientRect for responsive width/height
    const rect = container.getBoundingClientRect();
    const containerWidth = rect.width;
    const containerHeight = rect.height;

    const padding = 10; // small padding to keep letters inside

    // Scatter letters across entire container
    const scatterStart = split.chars.map(() => ({
      x: gsap.utils.random(-containerWidth / 2 + padding, containerWidth / 2 - padding),
      y: gsap.utils.random(-containerHeight / 2 + padding, containerHeight / 2 - padding),
      rotation: gsap.utils.random(-45, 45),
    }));

    const scatterEnd = split.chars.map(() => ({
      x: gsap.utils.random(-containerWidth / 2 + padding, containerWidth / 2 - padding),
      y: gsap.utils.random(-containerHeight / 2 + padding, containerHeight / 2 - padding),
      rotation: gsap.utils.random(-45, 45),
    }));

    // Set initial scatter
    gsap.set(split.chars, {
      x: (i) => scatterStart[i].x,
      y: (i) => scatterStart[i].y,
      rotation: (i) => scatterStart[i].rotation,
    });

    // Animate into center
    gsap.timeline({
      scrollTrigger: {
        trigger: container,
        start: "top bottom",
        end: "center center",
        scrub: true,
      },
    }).to(split.chars, {
      x: 0,
      y: 0,
      rotation: 0,
      ease: "back.out(1.7)",
      stagger: { amount: 0.8, from: "random" },
    });

    // Animate out to exit scatter
    gsap.timeline({
      scrollTrigger: {
        trigger: container,
        start: "center center",
        end: "bottom top",
        scrub: true,
      },
    }).to(split.chars, {
      x: (i) => scatterEnd[i].x,
      y: (i) => scatterEnd[i].y,
      rotation: (i) => scatterEnd[i].rotation,
      ease: "back.in(1.7)",
      stagger: { amount: 0.8, from: "random" },
    });
  }, [ready]);

  return (
    <div className="row text-dark contact">
      <div className="col-lg-12 col-12 d-flex justify-content-center items-center">
        <h1
          ref={titleRef}
          className="font-bold text-orange-900 text-center p-5 split"
        >
          made right
        </h1>
      </div>
    </div>
  );
}

export default Random;
