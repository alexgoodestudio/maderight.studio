import React, { useRef } from "react";
import { Link } from "react-router-dom";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/all";
import { useGSAP } from "@gsap/react";
import { ButtonShape, BRAND_COLORS } from "./Shapes";
import { ArrowUpRight } from "lucide-react";
import line from "./Images/b.png"
import { triggerConfetti } from "../utils/confetti";

function Mission() {
  const container = useRef();
  const buttonRef = useRef();

  gsap.registerPlugin(ScrollTrigger);

  useGSAP(() => {
    const isMobile = window.innerWidth <= 767;

    // Simple fade-in animation without pinning (all screen sizes)
    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: container.current,
        start: "top center",
        end: "bottom center",
        toggleActions: "play none none reverse",
      },
    });

    // Animate button
    tl.fromTo(
      buttonRef.current,
      { opacity: 0 },
      { opacity: 1, duration: isMobile ? 0.5 : 0.7 },
      0.3
    );
  }, []);

  const text =
    "Made Right is a design-first web development studio in Columbia, South Carolina. Our goal is to bring together creativity, technology, and design to create performant, lasting websites that convert. With thoughtful user flows, strategic SEO implementation and our approach to development, we strive to deliver services that <boldyellow>you'll love well past launch</boldyellow> .";

  return (
    <section className="bg-yellow gs mission-p py-5  text-start px-lg-5 px-4 position-relative">
      {/* Top wave */}
      <div className="position-absolute start-0 w-100 mission-wave-top">
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1200 120" preserveAspectRatio="none" className="mission-wave-svg">
          <path d="M0,120 C300,80 900,80 1200,120 L1200,0 L0,0 Z" fill="#ffffff" />
        </svg>
      </div>

      {/* Bottom wave */}
      <div className="position-absolute start-0 w-100 mission-wave-bottom">
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1200 120" preserveAspectRatio="none" className="mission-wave-svg">
          <path d="M0,0 C300,40 900,40 1200,0 L1200,120 L0,120 Z" fill="#ffffff" />
        </svg>
      </div>

      <div ref={container} className="mission-body container pt-5 pb-7">
        <div className="row">
          <div className="col-12">
            <p style={{ color: '#1e293b' }}>
              {(() => {
                const words = text.split(" ");
                const result = [];
                let skipNext = false;

                words.forEach((word, i) => {
                  if (skipNext) {
                    skipNext = false;
                    return;
                  }

                  // Check for tags
                  const isBoldStart = word.includes("<bold>");
                  const isBoldEnd = word.includes("</bold>");
                  const isSemiBoldStart = word.includes("<semibold>");
                  const isSemiBoldEnd = word.includes("</semibold>");
                  const isItalicStart = word.includes("<italic>");
                  const isItalicEnd = word.includes("</italic>");
                  const isUnderlineStart = word.includes("<underline>");
                  const isUnderlineEnd = word.includes("</underline>");
                  const isBoldYellowStart = word.includes("<boldyellow>");
                  const isBoldYellowEnd = word.includes("</boldyellow>");

                  // Remove tags from word
                  let cleanWord = word.replace(/<\/?bold>/g, "").replace(/<\/?semibold>/g, "").replace(/<\/?italic>/g, "").replace(/<\/?underline>/g, "").replace(/<\/?boldyellow>/g, "");

                  const match = cleanWord.match(/^(\w+)(\W*)$/);
                  const letters = match ? match[1] : cleanWord;
                  const punctuation = match ? match[2] : "";

                  let colorClass = "";
                  let specialClass = "";
                  let styleClass = "";

                  // Special handling for "Made Right" phrase
                  if (letters === "Made" && words[i + 1]?.includes("Right")) {
                    const nextWord = words[i + 1];
                    const cleanNextWord = nextWord.replace(/<\/?underline>/g, "");

                    colorClass = "lora";
                    specialClass = "made-right";

                    if (isUnderlineStart) {
                      styleClass = " made-right-underline";
                    }

                    result.push(
                      <span key={i} className="inline-block mr-2 position-relative">
                        <span className={`word ${colorClass} ${specialClass} ${styleClass}`}>
                          {letters} {cleanNextWord}
                        </span>
                        {punctuation && <span className="word">{punctuation}</span>}
                      </span>
                    );
                    skipNext = true;
                    return;
                  }

                  // Special handling for "Columbia, South Carolina" phrase
                  if (letters === "Columbia" && isUnderlineStart) {
                    let phrase = cleanWord;
                    let lookAhead = 1;

                    // Collect all words until we find the closing underline tag
                    while (i + lookAhead < words.length && !words[i + lookAhead].includes("</underline>")) {
                      const nextWord = words[i + lookAhead].replace(/<\/?underline>/g, "");
                      phrase += " " + nextWord;
                      lookAhead++;
                    }

                    // Add the final word with closing tag
                    if (i + lookAhead < words.length) {
                      const finalWord = words[i + lookAhead].replace(/<\/?underline>/g, "");
                      phrase += " " + finalWord;
                    }

                    result.push(
                      <span key={i} className="inline-block mr-2">
                        <span className="word custom-underline">
                          {phrase}
                        </span>
                      </span>
                    );

                    // Skip all the words we just processed
                    for (let j = 0; j < lookAhead; j++) {
                      skipNext = true;
                      words[i + j + 1] = "__SKIP__";
                    }
                    return;
                  }

                  // Special handling for boldyellow multi-word phrases
                  if (isBoldYellowStart) {
                    let phrase = cleanWord;
                    let lookAhead = 1;

                    // Collect all words until we find the closing boldyellow tag
                    while (i + lookAhead < words.length && !words[i + lookAhead].includes("</boldyellow>")) {
                      const nextWord = words[i + lookAhead].replace(/<\/?boldyellow>/g, "");
                      phrase += " " + nextWord;
                      lookAhead++;
                    }

                    // Add the final word with closing tag
                    if (i + lookAhead < words.length) {
                      const finalWord = words[i + lookAhead].replace(/<\/?boldyellow>/g, "");
                      phrase += " " + finalWord;
                    }

                    result.push(
                      <span key={i} className="inline-block mr-2 position-relative">
                        <span className="word fw-bold text-dark-yellow">
                          {phrase}
                        </span>
                        <img
                          src={line}
                          alt=""
                          className="position-absolute w-100 yellow-phrase-line"
                          style={{
                            top: '20%',
                            left: 0,
                            height: 'auto',
                            pointerEvents: 'none',
                            filter: 'brightness(0.3)'
                          }}
                        />
                      </span>
                    );

                    // Skip all the words we just processed
                    for (let j = 0; j < lookAhead; j++) {
                      skipNext = true;
                      words[i + j + 1] = "__SKIP__";
                    }
                    return;
                  }

                  // Skip words marked for skipping
                  if (word === "__SKIP__") {
                    return;
                  }

                  if (letters === "Made" || letters === "Right") {
                    colorClass = "lora";
                    specialClass = "made-right";
                  }

                  if (isBoldStart || isBoldEnd) {
                    styleClass += " fw-bold";
                  }

                  if (isSemiBoldStart || isSemiBoldEnd) {
                    styleClass += " fw-semibold";
                  }

                  if (isItalicStart || isItalicEnd) {
                    styleClass += " fst-italic lora fw-light";
                  }

                  if (isBoldYellowStart || isBoldYellowEnd) {
                    styleClass += " fw-bold text-dark-yellow";
                  }

                  if (isUnderlineStart || isUnderlineEnd) {
                    styleClass += " custom-underline";
                  }

                  result.push(
                    <span key={i} className="inline-block mr-2">
                      <span className={`word ${colorClass} ${specialClass} ${styleClass}`}>
                        {letters}
                      </span>
                      {punctuation && <span className="word">{punctuation}</span>}
                    </span>
                  );
                });

                return result;
              })()}
            </p>
            <Link
              ref={buttonRef}
              to="/our-process"
              className="btn-contact text-decoration-none d-inline-flex align-items-center justify-content-center px-3 text-md font-mono position-relative border-0 text-white"
              style={{
                marginTop: window.innerWidth <= 768 ? '1rem' : '3.5rem'
              }}
              onClick={(e) => {
                if (buttonRef.current) {
                  triggerConfetti(buttonRef.current);
                }
              }}
            >
              <ButtonShape
                color={BRAND_COLORS.tealDark}
                width={window.innerWidth <= 768 ? 150 : 180}
                height={window.innerWidth <= 768 ? 50 : 60}
                className="position-absolute top-0 start-0 button-shape"
              />
              <span
                className="position-relative d-flex align-items-center gap-2 button-text"
              >
                Our Process
                <ArrowUpRight size={window.innerWidth <= 768 ? 14 : 16} strokeWidth={2} />
              </span>
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Mission;
