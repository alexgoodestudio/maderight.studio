import React, { useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/all";
import { useGSAP } from "@gsap/react";

function SrcollMission() {
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

const text = `At Made Right, we bring creativity and technology together to develop web experiences that are as functional as they are beautiful. We focus on thoughtful design, smooth interactions, and purposeful strategy—helping brands grow their presence with websites that inspire, engage, and perform.`;

  return (
    <div className="bg-white  ">
<p
  ref={container}
  className="story text-4xl leading-relaxed text-black mission-body"
>
  {text.split(" ").map((word, i) => {
    // Split word into letters and punctuation
    const match = word.match(/^(\w+)(\W*)$/);
    const letters = match ? match[1] : word;
    const punctuation = match ? match[2] : "";

    // Determine color for specific words
    let colorClass = "";
  
     if (letters === "technology") colorClass = "text-orange-500";
    else if (letters === "creativity") colorClass = "text-pink-400";
    else if (letters === "") colorClass = "text-blue-600"; // updated for "functional"

    return (
      <span key={i} className="inline-block mr-2">
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

export default SrcollMission;
