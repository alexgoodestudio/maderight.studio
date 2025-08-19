import React, { useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/all";
import { useGSAP } from "@gsap/react";

function Mission() {
  const container = useRef();

  gsap.registerPlugin(ScrollTrigger);

  useGSAP(() => {
    const words = container.current.querySelectorAll(".word");

    // Create a timeline for staggered opacity animation
    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: container.current,
        start: "center center",     // pin starts when top hits viewport top
        end: "+=1000",        // adjust for your text length
        scrub: true,
        pin: true,
        anticipatePin: 1,
      },
    });

    // Animate each word opacity from 0.6 → 1
    tl.fromTo(words, { opacity: 0.2 }, { opacity: 1, stagger: 0.1 });
  }, []);

const text = `At Made Right, we bring creativity and technology together to craft web experiences that are as functional as they are beautiful. We focus on thoughtful design, smooth interactions, and purposeful strategy—helping brands grow their presence with websites that inspire, engage, and perform.`;

  return (
    <div className="bg-amber-950 ">
      <p
        ref={container}
        className=" story text-5xl leading-relaxed  text-white mission-body"
      >
        {text.split(" ").map((word, i) => (
          <span key={i} className="word inline-block mr-2">
            {word}
          </span>
        ))}
      </p>
    </div>
  );
}

export default Mission;
