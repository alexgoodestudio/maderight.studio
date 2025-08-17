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
        start: "top center",     // pin starts when top hits viewport top
        end: "+=1000",        // adjust for your text length
        scrub: true,
        pin: true,
        anticipatePin: 1,
      },
    });

    // Animate each word opacity from 0.6 → 1
    tl.fromTo(words, { opacity: 0.2 }, { opacity: 1, stagger: 0.1 });
  }, []);

  const text = `this will be the section that scroll on top of Dashboard that highlights
        through mission statement with scrollTrigger like storytelling effect`;

  return (
    <div className="bg-amber-950 ">
      <h3 className="text-white">mission section</h3>
      <p
        ref={container}
        className="display-4 px-5 py-5 mt-5 leading-relaxed text-white"
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
