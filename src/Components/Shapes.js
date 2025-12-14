import React, { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

// Brand Colors - Made Right Studio
export const BRAND_COLORS = {
  teal: '#0f766e',        // Primary teal (teal-700)
  tealDark: '#134e4a',    // Dark teal (teal-900)
  tealDarker: '#115e59',  // Darker teal (teal-950)
  coral: '#FF9375',       // Coral accent
  yellow: '#FFF7AF',      // Made Right yellow
  purple: '#A1ADEB',      // Purple accent
  lavender: '#E9D5FF',    // Light lavender
  slate: '#64748b',       // Slate gray
  slateLight: '#cbd5e1',  // Light slate
  slateDark: '#334155',   // Dark slate
  buttonPurple: '#A1ADEB' // Button purple (same as purple)
};

// Geometric Shapes
export const Circle = ({ color = BRAND_COLORS.purple, size = 120, className = '' }) => (
  <svg
    width={size}
    height={size}
    viewBox="0 0 120 120"
    fill="none"
    className={className}
    xmlns="http://www.w3.org/2000/svg"
  >
    <circle cx="60" cy="60" r="58" fill={color} opacity="0.95"/>
  </svg>
);

export const Square = ({ color = BRAND_COLORS.teal, size = 120, className = '' }) => (
  <svg
    width={size}
    height={size}
    viewBox="0 0 120 120"
    fill="none"
    className={className}
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      d="M5,8 Q8,4 12,5 Q20,3 28,6 Q40,4 52,5 Q64,3 76,6 Q88,4 100,5 Q108,3 115,8 Q118,12 117,20 Q119,32 116,44 Q118,56 117,68 Q119,80 116,92 Q118,104 115,112 Q112,116 104,115 Q92,117 80,114 Q68,116 56,115 Q44,117 32,114 Q20,116 8,115 Q4,112 5,104 Q3,92 6,80 Q4,68 5,56 Q3,44 6,32 Q4,20 5,8 Z"
      fill={color}
      opacity="0.95"
    />
  </svg>
);

export const Triangle = ({ color = BRAND_COLORS.coral, size = 120, className = '' }) => (
  <svg
    width={size}
    height={size * 0.866}
    viewBox="0 0 120 104"
    fill="none"
    className={className}
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      d="M60,5 Q62,8 65,12 Q68,18 71,24 Q74,30 77,36 Q80,42 83,48 Q86,54 89,60 Q92,66 95,72 Q98,78 101,84 Q104,90 107,95 Q110,99 113,102 Q108,103 100,102 Q88,103 76,102 Q64,103 52,102 Q40,103 28,102 Q16,103 7,102 Q4,99 7,95 Q10,90 13,84 Q16,78 19,72 Q22,66 25,60 Q28,54 31,48 Q34,42 37,36 Q40,30 43,24 Q46,18 49,12 Q52,8 55,5 Q58,3 60,5 Z"
      fill={color}
      opacity="0.95"
    />
  </svg>
);

export const Rectangle = ({ color = BRAND_COLORS.yellow, size = 120, className = '', orientation = 'horizontal' }) => {
  const width = orientation === 'horizontal' ? size * 1.618 : size;
  const height = orientation === 'horizontal' ? size : size * 1.618;
  const w = Math.floor(width - 8);
  const h = Math.floor(height - 8);

  return (
    <svg
      width={width}
      height={height}
      viewBox={`0 0 ${width} ${height}`}
      fill="none"
      className={className}
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d={`M6,10 Q10,5 ${w * 0.25},7 Q${w * 0.5},5 ${w * 0.75},7 Q${w},5 ${w + 4},10 Q${w + 6},${h * 0.25} ${w + 4},${h * 0.5} Q${w + 6},${h * 0.75} ${w + 4},${h - 2} Q${w},${h + 3} ${w * 0.75},${h} Q${w * 0.5},${h + 2} ${w * 0.25},${h} Q10,${h + 2} 6,${h - 2} Q4,${h * 0.75} 6,${h * 0.5} Q4,${h * 0.25} 6,10 Z`}
        fill={color}
        opacity="0.95"
      />
    </svg>
  );
};

export const Hexagon = ({ color = BRAND_COLORS.lavender, size = 120, className = '' }) => (
  <svg
    width={size}
    height={size}
    viewBox="0 0 120 104"
    fill="none"
    className={className}
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      d="M60,5 Q65,7 72,10 Q82,15 92,20 Q102,25 108,30 Q112,35 111,42 Q110,52 111,62 Q112,72 108,78 Q102,83 92,88 Q82,93 72,98 Q65,101 60,103 Q55,101 48,98 Q38,93 28,88 Q18,83 12,78 Q8,72 9,62 Q10,52 9,42 Q8,35 12,30 Q18,25 28,20 Q38,15 48,10 Q55,7 60,5 Z"
      fill={color}
      opacity="0.95"
    />
  </svg>
);

// Organic Shapes
export const BlobOne = ({ color = BRAND_COLORS.coral, size = 200, className = '' }) => (
  <svg
    width={size}
    height={size}
    viewBox="0 0 200 200"
    fill="none"
    className={className}
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      d="M45,20 Q20,40 30,70 T50,120 Q80,140 110,130 T150,100 Q170,70 160,40 T120,10 Q80,0 45,20Z"
      fill={color}
      opacity="0.9"
    />
  </svg>
);

export const BlobTwo = ({ color = BRAND_COLORS.teal, size = 200, className = '' }) => (
  <svg
    width={size}
    height={size}
    viewBox="0 0 200 200"
    fill="none"
    className={className}
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      d="M100,10 C140,15 175,40 185,75 C195,110 180,145 150,170 C120,195 80,195 50,175 C20,155 5,120 10,85 C15,50 60,5 100,10Z"
      fill={color}
      opacity="0.9"
    />
  </svg>
);

export const BlobThree = ({ color = BRAND_COLORS.purple, size = 200, className = '' }) => (
  <svg
    width={size}
    height={size}
    viewBox="0 0 200 200"
    fill="none"
    className={className}
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      d="M70,15 Q110,10 140,30 T175,80 Q185,120 160,155 T110,185 Q70,190 40,165 T15,110 Q10,70 35,40 T70,15Z"
      fill={color}
      opacity="0.9"
    />
  </svg>
);

export const Arc = ({ color = BRAND_COLORS.tealDark, size = 150, className = '' }) => (
  <svg
    width={size}
    height={size / 2}
    viewBox="0 0 150 75"
    fill="none"
    className={className}
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      d="M5,70 Q75,5 145,70"
      stroke={color}
      strokeWidth="8"
      strokeLinecap="round"
      fill="none"
      opacity="0.95"
    />
  </svg>
);

export const Wave = ({ color = BRAND_COLORS.coral, size = 200, className = '' }) => (
  <svg
    width={size}
    height={size / 4}
    viewBox="0 0 200 50"
    fill="none"
    className={className}
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      d="M5,25 Q50,5 100,25 T195,25"
      stroke={color}
      strokeWidth="6"
      strokeLinecap="round"
      fill="none"
      opacity="0.95"
    />
  </svg>
);

// Hand-drawn Button Background - for use behind text in buttons
export const ButtonShape = ({ color = BRAND_COLORS.teal, width = 200, height = 60, className = '' }) => {
  const w = Math.floor(width - 8);
  const h = Math.floor(height - 8);

  return (
    <svg
      width={width}
      height={height}
      viewBox={`0 0 ${width} ${height}`}
      fill="none"
      className={className}
      xmlns="http://www.w3.org/2000/svg"
      preserveAspectRatio="none"
    >
      <path
        d={`M6,${h * 0.3} Q8,4 ${w * 0.15},5 Q${w * 0.3},3 ${w * 0.5},4 Q${w * 0.7},3 ${w * 0.85},5 Q${w},4 ${w + 4},${h * 0.3} Q${w + 6},${h * 0.5} ${w + 4},${h * 0.7} Q${w},${h - 2} ${w * 0.85},${h - 1} Q${w * 0.7},${h} ${w * 0.5},${h - 1} Q${w * 0.3},${h} ${w * 0.15},${h - 1} Q8,${h - 2} 6,${h * 0.7} Q4,${h * 0.5} 6,${h * 0.3} Z`}
        fill={color}
        opacity="0.95"
      />
    </svg>
  );
};

// Floating Shape Component
export const FloatingShape = ({
  shape,
  color,
  size = 120,
  lag = 0.3,
  position = { top: '10%', left: '5%' },
  rotate = false,
  className = ''
}) => {
  const shapeRef = useRef(null);

  useEffect(() => {
    if (!shapeRef.current) return;

    const element = shapeRef.current;

    // Parallax scroll animation
    const scrollAnimation = gsap.to(element, {
      y: () => window.innerHeight * lag,
      ease: 'none',
      scrollTrigger: {
        trigger: element,
        start: 'top bottom',
        end: 'bottom top',
        scrub: true
      }
    });

    // Optional rotation on hover
    if (rotate) {
      const handleMouseEnter = () => {
        gsap.to(element, { rotation: 15, duration: 0.4, ease: 'back.out' });
      };
      const handleMouseLeave = () => {
        gsap.to(element, { rotation: 0, duration: 0.4, ease: 'back.out' });
      };

      element.addEventListener('mouseenter', handleMouseEnter);
      element.addEventListener('mouseleave', handleMouseLeave);

      return () => {
        scrollAnimation.kill();
        element.removeEventListener('mouseenter', handleMouseEnter);
        element.removeEventListener('mouseleave', handleMouseLeave);
      };
    }

    return () => {
      scrollAnimation.kill();
    };
  }, [lag, rotate]);

  const ShapeComponent = {
    circle: Circle,
    square: Square,
    triangle: Triangle,
    rectangle: Rectangle,
    hexagon: Hexagon,
    blobOne: BlobOne,
    blobTwo: BlobTwo,
    blobThree: BlobThree,
    arc: Arc,
    wave: Wave
  }[shape] || Circle;

  return (
    <div
      ref={shapeRef}
      className={`floating-shape ${className}`}
      style={{
        position: 'absolute',
        pointerEvents: 'none',
        zIndex: -1,
        willChange: 'transform',
        ...position
      }}
      aria-hidden="true"
    >
      <ShapeComponent color={color} size={size} />
    </div>
  );
};

// Main Shapes Showcase Component
function Shapes() {
  const showcaseRef = useRef(null);

  useEffect(() => {
    const shapes = showcaseRef.current?.querySelectorAll('.shape-demo');

    if (shapes) {
      gsap.fromTo(
        shapes,
        { opacity: 0, scale: 0.8, y: 20 },
        {
          opacity: 1,
          scale: 1,
          y: 0,
          duration: 0.5,
          stagger: 0.08,
          ease: 'back.out(1.4)'
        }
      );
    }
  }, []);

  return (
    <div className="min-h-screen position-relative overflow-hidden" style={{ backgroundColor: '#f8f9fa' }}>
      {/* Fun floating background shapes */}
      <FloatingShape shape="circle" color={`${BRAND_COLORS.purple}33`} size={200} lag={0.15} position={{ top: '5%', right: '8%' }} />
      <FloatingShape shape="blobTwo" color={`${BRAND_COLORS.coral}22`} size={300} lag={0.25} position={{ top: '40%', left: '-5%' }} rotate />
      <FloatingShape shape="triangle" color={`${BRAND_COLORS.yellow}44`} size={150} lag={0.2} position={{ bottom: '10%', right: '15%' }} />
      <FloatingShape shape="square" color={`${BRAND_COLORS.teal}22`} size={120} lag={0.18} position={{ top: '70%', right: '5%' }} />

      <div className="container py-5" style={{ position: 'relative', zIndex: 10 }}>
        {/* Casual Header */}
        <header className="text-center mb-5 pt-5">
          <h1 className="text-6xl lora font-bold mb-3" style={{ color: BRAND_COLORS.tealDarker }}>
            Shape Playground
          </h1>
          <p className="text-2xl gs mb-2" style={{ color: BRAND_COLORS.coral }}>
            Design tools for Made Right Studio
          </p>
          <p className="text-lg gs" style={{ color: BRAND_COLORS.slate }}>
            Hand-drawn shapes meet clean geometry
          </p>
        </header>

        {/* Color Swatches */}
        <section className="mb-5">
          <h2 className="text-3xl lora font-bold mb-4 text-center" style={{ color: BRAND_COLORS.tealDark }}>
            Our Colors
          </h2>
          <div className="row g-3 justify-content-center">
            {Object.entries(BRAND_COLORS).map(([name, hex]) => (
              <div key={name} className="col-6 col-md-3 col-lg-2">
                <div
                  className="rounded-3 shadow-sm position-relative overflow-hidden"
                  style={{ backgroundColor: hex, height: '100px', cursor: 'pointer', transition: 'transform 0.3s' }}
                  onMouseEnter={(e) => e.currentTarget.style.transform = 'scale(1.05)'}
                  onMouseLeave={(e) => e.currentTarget.style.transform = 'scale(1)'}
                >
                  <div className="position-absolute bottom-0 start-0 w-100 p-2" style={{ backgroundColor: 'rgba(0,0,0,0.6)' }}>
                    <p className="text-xs font-mono text-white mb-0">{hex}</p>
                  </div>
                </div>
                <p className="text-sm gs text-center mt-2 mb-0 text-capitalize" style={{ color: BRAND_COLORS.slateDark }}>{name}</p>
              </div>
            ))}
          </div>
        </section>

        {/* All Shapes Grid */}
        <section className="mb-5" ref={showcaseRef}>
          <h2 className="text-3xl lora font-bold mb-4 text-center" style={{ color: BRAND_COLORS.tealDark }}>
            The Full Collection
          </h2>
          <div className="row g-3">
            <div className="col-6 col-md-4 col-lg-3 shape-demo">
              <div className="bg-white p-3 rounded-3 shadow-sm text-center h-100 d-flex flex-column">
                <div className="flex-grow-1 d-flex align-items-center justify-content-center mb-2">
                  <Circle color={BRAND_COLORS.purple} size={90} />
                </div>
                <p className="gs fw-semibold mb-0" style={{ color: BRAND_COLORS.slateDark }}>Circle</p>
              </div>
            </div>

            <div className="col-6 col-md-4 col-lg-3 shape-demo">
              <div className="bg-white p-3 rounded-3 shadow-sm text-center h-100 d-flex flex-column">
                <div className="flex-grow-1 d-flex align-items-center justify-content-center mb-2">
                  <Square color={BRAND_COLORS.teal} size={90} />
                </div>
                <p className="gs fw-semibold mb-0" style={{ color: BRAND_COLORS.slateDark }}>Square</p>
              </div>
            </div>

            <div className="col-6 col-md-4 col-lg-3 shape-demo">
              <div className="bg-white p-3 rounded-3 shadow-sm text-center h-100 d-flex flex-column">
                <div className="flex-grow-1 d-flex align-items-center justify-content-center mb-2">
                  <Triangle color={BRAND_COLORS.coral} size={90} />
                </div>
                <p className="gs fw-semibold mb-0" style={{ color: BRAND_COLORS.slateDark }}>Triangle</p>
              </div>
            </div>

            <div className="col-6 col-md-4 col-lg-3 shape-demo">
              <div className="bg-white p-3 rounded-3 shadow-sm text-center h-100 d-flex flex-column">
                <div className="flex-grow-1 d-flex align-items-center justify-content-center mb-2">
                  <Rectangle color={BRAND_COLORS.yellow} size={70} />
                </div>
                <p className="gs fw-semibold mb-0" style={{ color: BRAND_COLORS.slateDark }}>Rectangle</p>
              </div>
            </div>

            <div className="col-6 col-md-4 col-lg-3 shape-demo">
              <div className="bg-white p-3 rounded-3 shadow-sm text-center h-100 d-flex flex-column">
                <div className="flex-grow-1 d-flex align-items-center justify-content-center mb-2">
                  <Hexagon color={BRAND_COLORS.lavender} size={90} />
                </div>
                <p className="gs fw-semibold mb-0" style={{ color: BRAND_COLORS.slateDark }}>Hexagon</p>
              </div>
            </div>

            <div className="col-6 col-md-4 col-lg-3 shape-demo">
              <div className="bg-white p-3 rounded-3 shadow-sm text-center h-100 d-flex flex-column">
                <div className="flex-grow-1 d-flex align-items-center justify-content-center mb-2">
                  <BlobOne color={BRAND_COLORS.coral} size={110} />
                </div>
                <p className="gs fw-semibold mb-0" style={{ color: BRAND_COLORS.slateDark }}>Blob One</p>
              </div>
            </div>

            <div className="col-6 col-md-4 col-lg-3 shape-demo">
              <div className="bg-white p-3 rounded-3 shadow-sm text-center h-100 d-flex flex-column">
                <div className="flex-grow-1 d-flex align-items-center justify-content-center mb-2">
                  <BlobTwo color={BRAND_COLORS.teal} size={110} />
                </div>
                <p className="gs fw-semibold mb-0" style={{ color: BRAND_COLORS.slateDark }}>Blob Two</p>
              </div>
            </div>

            <div className="col-6 col-md-4 col-lg-3 shape-demo">
              <div className="bg-white p-3 rounded-3 shadow-sm text-center h-100 d-flex flex-column">
                <div className="flex-grow-1 d-flex align-items-center justify-content-center mb-2">
                  <BlobThree color={BRAND_COLORS.purple} size={110} />
                </div>
                <p className="gs fw-semibold mb-0" style={{ color: BRAND_COLORS.slateDark }}>Blob Three</p>
              </div>
            </div>

            <div className="col-6 col-md-4 col-lg-3 shape-demo">
              <div className="bg-white p-3 rounded-3 shadow-sm text-center h-100 d-flex flex-column">
                <div className="flex-grow-1 d-flex align-items-center justify-content-center mb-2">
                  <Arc color={BRAND_COLORS.tealDark} size={110} />
                </div>
                <p className="gs fw-semibold mb-0" style={{ color: BRAND_COLORS.slateDark }}>Arc</p>
              </div>
            </div>

            <div className="col-6 col-md-4 col-lg-3 shape-demo">
              <div className="bg-white p-3 rounded-3 shadow-sm text-center h-100 d-flex flex-column">
                <div className="flex-grow-1 d-flex align-items-center justify-content-center mb-2">
                  <Wave color={BRAND_COLORS.coral} size={130} />
                </div>
                <p className="gs fw-semibold mb-0" style={{ color: BRAND_COLORS.slateDark }}>Wave</p>
              </div>
            </div>
          </div>
        </section>

      </div>
    </div>
  );
}

export default Shapes;
