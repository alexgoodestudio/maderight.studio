import React, { useRef, useState } from "react";
import { useGSAP } from "@gsap/react";
import { Link } from "react-router-dom";

function Typewriter() {
  const txtRef = useRef(null);
  const [isPaused, setIsPaused] = useState(false);
  const [currentIndex, setCurrentIndex] = useState(0);

  const words = [
   "API Integration & Development",
    "Performance & Optimization",
    "Mobile-First Responsive Layouts",
    "SEO & Performance Audits",
    "Frontend Animation",
    "Micro-Interactions",
  ];

  const handlePrev = () => {
    setIsPaused(true);
    const newIndex = currentIndex === 0 ? words.length - 1 : currentIndex - 1;
    setCurrentIndex(newIndex);
    if (txtRef.current) {
      txtRef.current.textContent = words[newIndex];
    }
  };

  const handleNext = () => {
    setIsPaused(true);
    const newIndex = (currentIndex + 1) % words.length;
    setCurrentIndex(newIndex);
    if (txtRef.current) {
      txtRef.current.textContent = words[newIndex];
    }
  };

  useGSAP(() => {
    if (isPaused) return;
    
    let wordIndex = 0;
    let charIndex = 0;
    let isDeleting = false;
    const wait = 2000;

    const type = () => {
      if (!txtRef.current || isPaused) return; 
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
        setCurrentIndex(wordIndex);
        setTimeout(type, 500);
      } else {
        charIndex = isDeleting ? charIndex - 1 : charIndex + 1;
        setTimeout(type, isDeleting ? 25 : 50);
      }
    };

    type();
  }, [isPaused]);

  return (
    <div className="flex items-center justify-between rounded-lg">
      <div className="flex items-center gap-2">
        <button 
          onClick={handlePrev}
          className="px-3 py-1 bg-gray-400 text-white rounded hover:bg-gray-500 transition-colors"
        >
          &lt;
        </button>
        <button 
          onClick={handleNext}
          className="px-3 py-1 bg-gray-400 text-white rounded hover:bg-gray-500 transition-colors"
        >
          &gt;
        </button>
      </div>

      <h3 className="text-secondary text-xl border bg-white border-gray-300 rounded-xl ps-4 py-2 flex-1 mx-4 text-left">
        <span ref={txtRef}></span>
        <span className="ml-1 border-r-2 border-white animate-blink"></span>
      </h3>

      <Link 
        to="/our-process"
        className="px-4 py-2 bg-teal-900 no-underline text-white rounded whitespace-nowrap hover:bg-teal-950 transition-colors"
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