import { useEffect, useRef, useState } from 'react';
import { gsap } from 'gsap';
import { BRAND_COLORS } from './Shapes';

function PlaygroundNew() {
  const containerRef = useRef(null);
  const [clickedCircles, setClickedCircles] = useState(new Set());
  const [glitchCircle, setGlitchCircle] = useState(null);
  const [missingCircles, setMissingCircles] = useState(new Set());
  const [autoColoredCircles, setAutoColoredCircles] = useState(new Set());
  const rows = 6;
  const cols = 6;
  const totalCircles = rows * cols;

  // Color palette for personality (craft culture vibes)
  const colorPalette = [
    BRAND_COLORS.coral,      // Orange
    BRAND_COLORS.yellow,     // Yellow
    BRAND_COLORS.purple,     // Purple
    BRAND_COLORS.lavender,   // Lavender
    '#FF9375',               // Coral variant
    '#A1ADEB',               // Purple variant
    '#FFF7AF',               // Yellow variant
  ];

  // Assign each circle a random personality (animation offset)
  const circlePersonalities = useRef(
    Array.from({ length: totalCircles }, () => Math.random() * 0.5)
  );

  // Main animation timeline
  useEffect(() => {
    const circles = containerRef.current.querySelectorAll('.circle');

    const masterTL = gsap.timeline({ repeat: -1 });

    // Initial state
    gsap.set(circles, {
      scale: 0,
      opacity: 0
    });

    // Phase 1: Sharp wave emergence with personality offsets
    circles.forEach((circle, i) => {
      const personalityDelay = circlePersonalities.current[i];

      masterTL.to(circle, {
        scale: 1,
        opacity: 1,
        duration: 1.5 + personalityDelay * 0.3,
        ease: "back.out(2)",
      }, personalityDelay);
    });

    // Phase 2: Ripple wave (1.5-3.5s)
    masterTL.to(circles, {
      scale: 1.3,
      duration: 1,
      ease: "power3.inOut",
      yoyo: true,
      repeat: 1,
      stagger: {
        each: 0.02,
        from: "edges"
      }
    }, 1.5);

    // Phase 3: Sharp breathing (3.5-5.5s)
    masterTL.to(circles, {
      scale: 0.6,
      opacity: 0.5,
      duration: 1,
      ease: "power4.inOut",
      stagger: {
        each: 0.015,
        from: "random"
      }
    }, 3.5);

    masterTL.to(circles, {
      scale: 1,
      opacity: 1,
      duration: 1,
      ease: "power4.out",
      stagger: {
        each: 0.015,
        from: "center"
      }
    }, 4.5);

    // Phase 4: Sharp collapse (5.5-7s)
    masterTL.to(circles, {
      scale: 0,
      opacity: 0,
      duration: 1.5,
      ease: "back.in(2)",
      stagger: {
        each: 0.025,
        from: "edges"
      }
    }, 5.5);

    return () => {
      masterTL.kill();
    };
  }, [totalCircles]);

  // Random glitch effect - occasionally a circle becomes a square
  useEffect(() => {
    const triggerGlitch = () => {
      // 30% chance of glitch
      if (Math.random() < 0.3) {
        const randomCircle = Math.floor(Math.random() * totalCircles);
        setGlitchCircle(randomCircle);

        // Reset after 2 seconds
        setTimeout(() => setGlitchCircle(null), 2000);
      }
    };

    const interval = setInterval(triggerGlitch, 4000);
    return () => clearInterval(interval);
  }, [totalCircles]);

  // Always keep between 12-18 random circles missing
  useEffect(() => {
    const changeMissingCircles = () => {
      // Random number between 12 and 18 (inclusive)
      const numMissing = Math.floor(Math.random() * 7) + 12;

      // Generate random unique indices for missing circles
      const missing = new Set();
      while (missing.size < numMissing) {
        missing.add(Math.floor(Math.random() * totalCircles));
      }

      setMissingCircles(missing);
    };

    // Initial missing circles
    changeMissingCircles();

    // Change which circles are missing every 5 seconds
    const interval = setInterval(changeMissingCircles, 5000);
    return () => clearInterval(interval);
  }, [totalCircles]);

  // Always keep between 2-16 circles automatically colored
  useEffect(() => {
    const changeAutoColoredCircles = () => {
      // Random number between 2 and 16 (inclusive)
      const numColored = Math.floor(Math.random() * 15) + 2;

      // Generate random unique indices for auto-colored circles
      const colored = new Set();
      while (colored.size < numColored) {
        colored.add(Math.floor(Math.random() * totalCircles));
      }

      setAutoColoredCircles(colored);
    };

    // Initial auto-colored circles
    changeAutoColoredCircles();

    // Change which circles are auto-colored every 5 seconds
    const interval = setInterval(changeAutoColoredCircles, 5000);
    return () => clearInterval(interval);
  }, [totalCircles]);

  // Handle circle click - permanently change color
  const handleCircleClick = (index) => {
    const circle = containerRef.current.querySelectorAll('.circle')[index];

    // Bounce animation on click
    gsap.fromTo(circle,
      { scale: 1 },
      {
        scale: 1.4,
        duration: 0.3,
        ease: "back.out(3)",
        yoyo: true,
        repeat: 1
      }
    );

    // Add to clicked set
    setClickedCircles(prev => new Set([...prev, index]));
  };

  // Get color for a circle based on personality and state
  const getCircleColor = (index) => {
    // If clicked, assign a permanent color from palette (takes priority)
    if (clickedCircles.has(index)) {
      const colorIndex = index % colorPalette.length;
      return colorPalette[colorIndex];
    }
    // If auto-colored, assign a color from palette
    if (autoColoredCircles.has(index)) {
      const colorIndex = index % colorPalette.length;
      return colorPalette[colorIndex];
    }
    // Default teal
    return BRAND_COLORS.tealDark;
  };

  // Create grid of circles
  const circles = Array.from({ length: totalCircles }, (_, i) => i);

  return (
    <div className="scaled-down flex items-center justify-content-center bg-white position-relative">
      <div ref={containerRef} className="grid circle-grid" style={{
        gridTemplateColumns: `repeat(${cols}, 1fr)`,
        gridTemplateRows: `repeat(${rows}, 1fr)`
      }}>
        {circles.map((i) => {
          // If this is a missing circle, render an empty space
          if (missingCircles.has(i)) {
            return <div key={i} className="circle-empty" />;
          }

          return (
            <div
              key={i}
              className="circle position-relative"
              onClick={() => handleCircleClick(i)}
              style={{
                backgroundColor: getCircleColor(i),
                transition: 'background-color 0.5s ease-in-out, border-radius 0.4s ease-in-out, opacity 0.3s ease-in-out',
                cursor: 'pointer',
                borderRadius: glitchCircle === i ? '15%' : '50%',
                // Craft detail: slight imperfection in size
                transform: `scale(${0.95 + (circlePersonalities.current[i] * 0.1)})`,
                // Subtle shadow for depth
                boxShadow: clickedCircles.has(i)
                  ? '0 4px 12px rgba(0,0,0,0.15)'
                  : '0 2px 6px rgba(0,0,0,0.08)',
              }}
            />
          );
        })}
      </div>
    </div>
  );
}

export default PlaygroundNew;