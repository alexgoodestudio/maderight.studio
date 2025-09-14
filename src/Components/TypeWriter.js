import React, { useRef } from "react";
import { useGSAP } from "@gsap/react";

function Typewriter() {
  const txtRef = useRef(null);

  const words = [
    "Experimental Web Projects",
    "Performance & Optimization",
    "Mobile-First Responsive Layouts",
    "Frontend Animation",
    "Interaction Design",

  ];


  useGSAP(() => {
    let wordIndex = 0;
    let charIndex = 0;
    let isDeleting = false;
    const wait = 2000;

    const type = () => {
      const currentWord = words[wordIndex];
      const currentText = isDeleting
        ? currentWord.substring(0, charIndex - 1)
        : currentWord.substring(0, charIndex + 1);

      txtRef.current.textContent = currentText;

      if (!isDeleting && charIndex === currentWord.length) {
        // Pause at end of word
        isDeleting = true;
        setTimeout(type, wait);
      } else if (isDeleting && charIndex === 0) {
        // Move to next word
        isDeleting = false;
        wordIndex = (wordIndex + 1) % words.length;
        setTimeout(type, 500);
      } else {
        // Continue typing/deleting
        charIndex = isDeleting ? charIndex - 1 : charIndex + 1;
        setTimeout(type, isDeleting ? 25 : 50);
      }
    };

    type();
  }, []);

  return (
    <div className="flex items-center ">
      <h3 className="text-blue-700 text-xl">
        <span ref={txtRef}></span>
        <span className="ml-1 border-r-2  border-white animate-blink"></span>
      </h3>

      <style jsx>{`
        @keyframes blink {
          0%, 100% { border-color: green; }
          50% { border-color: transparent; }
        }
        .animate-blink {
          animation: blink 0.6s infinite;
        }
      `}</style>
    </div>
  );
}

export default Typewriter;
