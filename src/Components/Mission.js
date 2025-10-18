import React, { useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/all";
import { useGSAP } from "@gsap/react";

function Mission() {
  const container = useRef();

  gsap.registerPlugin(ScrollTrigger);

  useGSAP(() => {
    const words = container.current.querySelectorAll(".word");

    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: container.current,
        start: "center center",
        end: "+=2500",
        scrub: true,
        pin: true,
        anticipatePin: 1,
      },
    });

    tl.fromTo(words, { opacity: 0.2 }, { opacity: 1, stagger: 0.1 }, 0);
    tl.to({}, { duration: 0.2 });
  }, []);

  const text = "Made Right is a two-person, design-focused web development company based in Columbia, South Carolina. Our goal is to bring creativity and technology together to develop web experiences that are as functional as they are beautiful. We focus on thoughtful design, smooth interactions, and purposeful strategy—helping brands grow their presence with websites that inspire, engage, and perform.";

  return (
    <section className="bg-white mission-p py-5 text-start px-lg-5 px-3">
      <p ref={container} className="mission-body">
        {text.split(" ").map((word, i) => {
          const match = word.match(/^(\w+)(\W*)$/);
          const letters = match ? match[1] : word;
          const punctuation = match ? match[2] : "";

          let colorClass = "";
          if (letters === "Made" || letters === "Right") {
            colorClass = " text-sky-300 font-semibold";
          }

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
    </section>
  );
}

export default Mission;