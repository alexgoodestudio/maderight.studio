import { useEffect, useRef } from 'react';
import { gsap } from 'gsap';

function CircleWaveIllusion() {
  const containerRef = useRef(null);

  useEffect(() => {
    const circles = containerRef.current.querySelectorAll('.circle');

    const masterTL = gsap.timeline({ repeat: -1 });

    // Initial state
    gsap.set(circles, {
      scale: 0,
      opacity: 0
    });

    // Phase 1: Sharp wave emergence (0-1.5s)
    masterTL.to(circles, {
      scale: 1,
      opacity: 1,
      duration: 1.5,
      ease: "back.out(2)",
      stagger: {
        each: 0.03,
        from: "center"
      }
    }, 0);

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
  }, []);

  // Create grid of circles
  const rows = 5;
  const cols = 6;
  const circles = [];

  for (let row = 0; row < rows; row++) {
    for (let col = 0; col < cols; col++) {
      circles.push({ row, col });
    }
  }

  return (
    <div className="w-full h-screen flex items-center justify-center bg-white overflow-hidden">
      <div ref={containerRef} className="grid circle-grid" style={{
        gridTemplateColumns: `repeat(${cols}, 1fr)`,
        gridTemplateRows: `repeat(${rows}, 1fr)`
      }}>

        {circles.map((circle, i) => (
          <div
            key={i}
            className="circle bg-teal-900"
          />
        ))}
      </div>
    </div>
  );
}

export default CircleWaveIllusion;