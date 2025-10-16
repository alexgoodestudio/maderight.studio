import React, { useRef } from "react";
import { useGSAP } from "@gsap/react";
import { Link } from "react-router-dom";

function Typewriter() {
  const txtRef = useRef(null);

  const words = [
   "API Integration & Development",
    "Performance & Optimization",
    "Mobile-First Responsive Layouts",
    "SEO & Performance Audits",
    "Frontend Animation",
    "Micro-Interactions",
  ];

  useGSAP(() => {
    let wordIndex = 0;
    let charIndex = 0;
    let isDeleting = false;
    const wait = 2000;

    const type = () => {
      if (!txtRef.current) return; 
      const currentWord = words[wordIndex];
      const currentText = isDeleting
        ? currentWord.substring(0, charIndex - 1)
        : currentWord.substring(0, charIndex + 1);

      txtRef.current.textContent = currentText;

      if (!isDeleting && charIndex === currentWord.length) {
        isDeleting = true;
        setTimeout(type, wait);
      } else if (isDeleting && charIndex === 0) {
        isDeleting = false;
        wordIndex = (wordIndex + 1) % words.length;
        setTimeout(type, 500);
      } else {
        charIndex = isDeleting ? charIndex - 1 : charIndex + 1;
        setTimeout(type, isDeleting ? 25 : 50);
      }
    };

    type();
  }, []);

  return (
    <div className="flex items-center justify-between rounded-lg">
      <h3 className="text-secondary text-lg border bg-white border-gray-300 rounded-xl ps-4 py-2 flex-1  text-left">
        <span ref={txtRef}></span>
        <span className="ml-1 border-r-2 border-gray animate-blink"></span>
      </h3>

      <Link 
        to="/our-process"
        className="px-4 py-2 hide bg-teal-900 ms-3 no-underline text-white rounded whitespace-nowrap hover:bg-teal-950 transition-colors"
      >
        Our Process
      </Link>

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