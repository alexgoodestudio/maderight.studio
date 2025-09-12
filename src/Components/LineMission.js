import React, { useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/all";
import { useGSAP } from "@gsap/react";

function Mission() {
  const container = useRef();

  gsap.registerPlugin(ScrollTrigger);

  // Function to split text into lines based on actual rendering
  const splitTextIntoLines = (element) => {
    const text = element.textContent;
    const words = text.split(' ');
    let lines = [];
    let currentLine = [];

    // Clear the element and rebuild with spans
    element.innerHTML = '';
    let previousTop = null;

    words.forEach((word) => {
      const wordSpan = document.createElement('span');
      wordSpan.textContent = word + ' ';
      wordSpan.className = 'word inline-block mr-2';
      element.appendChild(wordSpan);

      const rect = wordSpan.getBoundingClientRect();
      const currentTop = rect.top;

      if (previousTop !== null && Math.abs(currentTop - previousTop) > 5) {
        // New line detected
        if (currentLine.length > 0) {
          lines.push([...currentLine]);
        }
        currentLine = [wordSpan];
      } else {
        currentLine.push(wordSpan);
      }

      previousTop = currentTop;
    });

    // Add the last line
    if (currentLine.length > 0) {
      lines.push(currentLine);
    }

    // Wrap each line in a container for animation
    element.innerHTML = '';
    const lineElements = [];

    lines.forEach((lineWords) => {
      const lineDiv = document.createElement('div');
      lineDiv.className = 'line-container overflow-hidden';
      
      const lineInner = document.createElement('div');
      lineInner.className = 'line-inner';
      
      lineWords.forEach(wordSpan => {
        lineInner.appendChild(wordSpan);
      });
      
      lineDiv.appendChild(lineInner);
      element.appendChild(lineDiv);
      lineElements.push(lineInner);
    });

    return lineElements;
  };

  useGSAP(() => {
    ScrollTrigger.create({
      trigger: container.current,
      start: "top 80%",
      onEnter: () => {
        // Split into lines when entering viewport
        const lines = splitTextIntoLines(container.current);
        
        // Animate lines in sequence
        gsap.set(lines, { y: 50, opacity: 0 });
        gsap.to(lines, {
          y: 0,
          opacity: 1,
          duration: 0.6,
          stagger: 0.2,
          ease: "power2.out"
        });
      },
      once: true // Only trigger once
    });
  }, []);

  const text = `With all that being said, we are here to help solve all your web-bsed business needs. Whether that be technology consulting, improving your search results, to defining your UX/UI, we are to help you grow in all ways digital. With backgrounds ranging in Full-Stack Software Engineering, Web Design, to User Experience, we can take on web projects from start to finish.`;

  return (
    <div className="bg-green-200 min-h-screen flex items-center justify-center">
      <p
        ref={container}
        className="story text-5xl leading-relaxed text-green-950 mission-body max-w-6xl px-8"
      >
        {text}
      </p>
    </div>
  );
}

export default Mission;