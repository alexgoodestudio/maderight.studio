import React, { useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/all";
import { useGSAP } from "@gsap/react";

function Mission() {
  const container = useRef();

  gsap.registerPlugin(ScrollTrigger);

  useGSAP(() => {
    const words = container.current.querySelectorAll(".word");

    // SINGLE UNIFIED SCROLLTRIGGER - pin and animation together
    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: container.current,
        start: "center center",
        end: "+=5000",
        scrub: 1.5,
        pin: true,
        anticipatePin: 1,
      },
    });

    // Fade in words
    tl.fromTo(words, { opacity: 0.2 }, { opacity: 1, stagger: 0.1, duration: 1 }, 0);

    // Hold at full opacity
    tl.to({}, { duration: 1 });

    // Simple fade out all words together
    tl.to(words, {
      opacity: 0,
      duration: 1.5,
      ease: 'power1.out'
    });

  }, []);

  const text = "Made Right is a design-focused web development studio based in Columbia, South Carolina. Our goal is to bring creativity and technology together to develop high-performing websites that showcases your brand. We focus on design principles, technical performance and purposeful strategy.";

  return (
    <section className="bg-white gs mission-p py-5 text-start px-lg-0 px-1">
      <p ref={container} className="mission-body">
        {text.split(" ").map((word, i) => {
          const match = word.match(/^(\w+)(\W*)$/);
          const letters = match ? match[1] : word;
          const punctuation = match ? match[2] : "";

          let colorClass = "";
          if (letters === "Made" || letters === "Right") {
            colorClass = "text-sky-400";
          }

          return (
            <span key={i} className="inline-block mr-2 text-teal-900">
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