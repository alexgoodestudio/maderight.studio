import React, { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

// Brand Colors - Made Right Studio
export const BRAND_COLORS = {
  teal: '#0f766e',        // Primary teal (teal-700)
  tealDark: '#134e4a',    // Dark teal (teal-900)
  tealDarker: '#115e59',  // Darker teal (teal-950)
  coral: '#BB879D',       // Rosewood accent
  yellow: '#FFF7AF',      // Made Right yellow
  purple: '#A1ADEB',      // Purple accent
  lavender: '#E9D5FF',    // Light lavender
  slate: '#64748b',       // Slate gray
  slateLight: '#cbd5e1',  // Light slate
  slateDark: '#334155',   // Dark slate
  buttonPurple: '#B5BFEF' // Button purple (slightly lighter)
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
    viewBox="0 0 700 700"
    fill="none"
    className={className}
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      d="M212.382 14.2876C188.503 25.1792 165.026 39.8085 142.991 52.5086C119.955 65.2088 96.4782 80.4008 74.3256 91.6139C57.2295 100.255 36.4413 109.137 24.3618 124.65C12.2822 140.164 8.71047 153.105 6.78411 170.749C3.41306 202.258 8.1889 245.262 8.22903 277.052C8.22903 298.112 6.82428 318.971 6.82428 340.192C6.82428 359.242 2.57032 379.337 9.31242 397.021C16.4558 415.79 30.0606 430.098 45.0698 442.838C66.0987 460.723 92.1441 473.302 114.016 490.504C133.881 506.138 164.581 526.555 185.329 541.023C209.208 557.662 239.627 569.397 269.445 560.837C290.755 554.728 310.219 538.009 329.643 527.399C352.558 514.899 378.001 501.797 399.792 487.65C436.994 463.456 490.41 441.15 495.426 391.836C498.837 358.317 498.877 318.368 500.683 284.206C502.569 248.115 511.479 209.131 502.69 173.522C493.058 134.457 450.158 108.253 416.327 87.4743C397.746 76.0602 382.054 65.8117 363.594 53.1517C348.304 42.662 333.736 29.8011 317.443 20.2357C300.266 10.1077 288.066 4.07917 267.639 2.87348C247.212 1.66776 228.792 7.29441 213.382 14.2876Z"
      fill={color}
      opacity="0.95"
      style={{ strokeDashoffset: '0.002', strokeDasharray: '0px, 999999px' }}
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

// Hand-drawn decorative lines - Plank-inspired
export const SquiggleLine = ({ color = BRAND_COLORS.teal, size = 180, className = '' }) => (
  <svg
    width={size}
    height={size * 0.5}
    viewBox="0 0 180 90"
    fill="none"
    className={className}
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      d="M8,45 Q15,38 22,42 T38,48 Q48,52 58,46 T78,44 Q92,42 106,48 T130,52 Q145,54 158,48 T172,45"
      stroke={color}
      strokeWidth="3.5"
      strokeLinecap="round"
      strokeLinejoin="round"
      fill="none"
      opacity="0.9"
    />
  </svg>
);

export const UnderlineDoodle = ({ color = BRAND_COLORS.coral, size = 160, className = '' }) => (
  <svg
    width={size}
    height={size * 0.25}
    viewBox="0 0 160 40"
    fill="none"
    className={className}
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      d="M6,18 Q20,14 35,16 T65,20 Q85,22 105,18 T135,15 Q145,14 154,17"
      stroke={color}
      strokeWidth="3"
      strokeLinecap="round"
      fill="none"
      opacity="0.85"
    />
    <path
      d="M10,28 Q28,24 48,26 T88,30 Q108,32 128,28 T150,26"
      stroke={color}
      strokeWidth="2.5"
      strokeLinecap="round"
      fill="none"
      opacity="0.7"
    />
  </svg>
);

export const ScribbleCircle = ({ color = BRAND_COLORS.purple, size = 100, className = '' }) => (
  <svg
    width={size}
    height={size}
    viewBox="0 0 100 100"
    fill="none"
    className={className}
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      d="M50,8 Q68,10 80,22 T92,50 Q90,70 78,82 T50,92 Q30,90 18,78 T8,50 Q10,30 22,18 T50,8"
      stroke={color}
      strokeWidth="3"
      strokeLinecap="round"
      fill="none"
      opacity="0.85"
    />
    <path
      d="M50,12 Q66,14 76,25 T86,50 Q84,68 74,78 T50,88 Q34,86 24,75 T14,50 Q16,32 26,22 T50,12"
      stroke={color}
      strokeWidth="2.5"
      strokeLinecap="round"
      fill="none"
      opacity="0.65"
    />
  </svg>
);

export const ArrowDoodle = ({ color = BRAND_COLORS.yellow, size = 120, className = '', direction = 'right' }) => {
  const rotation = {
    right: 0,
    left: 180,
    up: 270,
    down: 90
  }[direction] || 0;

  return (
    <svg
      width={size}
      height={size * 0.6}
      viewBox="0 0 120 72"
      fill="none"
      className={className}
      xmlns="http://www.w3.org/2000/svg"
      style={{ transform: `rotate(${rotation}deg)` }}
    >
      <path
        d="M8,36 Q30,32 52,35 T96,38"
        stroke={color}
        strokeWidth="3.5"
        strokeLinecap="round"
        fill="none"
        opacity="0.9"
      />
      <path
        d="M82,22 Q96,30 102,38 Q96,46 82,52"
        stroke={color}
        strokeWidth="3.5"
        strokeLinecap="round"
        strokeLinejoin="round"
        fill="none"
        opacity="0.9"
      />
    </svg>
  );
};

export const ZigZagLine = ({ color = BRAND_COLORS.tealDark, size = 140, className = '' }) => (
  <svg
    width={size}
    height={size * 0.5}
    viewBox="0 0 140 70"
    fill="none"
    className={className}
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      d="M6,50 L22,20 Q28,12 38,18 L54,42 Q58,48 66,44 L82,18 Q88,10 96,16 L112,44 Q118,52 128,48 L134,40"
      stroke={color}
      strokeWidth="3"
      strokeLinecap="round"
      strokeLinejoin="round"
      fill="none"
      opacity="0.85"
    />
  </svg>
);

export const LoopDoodle = ({ color = BRAND_COLORS.coral, size = 90, className = '' }) => (
  <svg
    width={size}
    height={size}
    viewBox="0 0 90 90"
    fill="none"
    className={className}
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      d="M15,45 Q15,20 35,15 T65,25 Q75,35 72,50 T55,70 Q35,75 20,65 T15,45"
      stroke={color}
      strokeWidth="3"
      strokeLinecap="round"
      fill="none"
      opacity="0.85"
    />
  </svg>
);

// Smiley Face - Made from existing shapes (BlobTwo and BlobThree for eyes)
export const SmileyFace = ({
  eyeColor = BRAND_COLORS.teal,
  noseColor = BRAND_COLORS.yellow,
  mouthColor = BRAND_COLORS.tealDark,
  size = 200,
  className = ''
}) => (
  <svg
    width={size}
    height={size}
    viewBox="0 0 200 200"
    fill="none"
    className={className}
    xmlns="http://www.w3.org/2000/svg"
  >
    {/* Left Eye - BlobTwo (teal) */}
    <g transform="translate(35, 50) scale(0.25)">
      <path
        d="M100,10 C140,15 175,40 185,75 C195,110 180,145 150,170 C120,195 80,195 50,175 C20,155 5,120 10,85 C15,50 60,5 100,10Z"
        fill={eyeColor}
        opacity="0.9"
      />
    </g>

    {/* Right Eye - BlobThree (teal) */}
    <g transform="translate(125, 50) scale(0.25)">
      <path
        d="M70,15 Q110,10 140,30 T175,80 Q185,120 160,155 T110,185 Q70,190 40,165 T15,110 Q10,70 35,40 T70,15Z"
        fill={eyeColor}
        opacity="0.9"
      />
    </g>

    {/* Nose - 7 shape flipped vertically and horizontally */}
    <g transform="translate(100, 100) scale(-1, -1)">
      <path
        d="M-5,-5 L8,-5 Q12,-2 11,5 L9,20"
        stroke={noseColor}
        strokeWidth="4"
        strokeLinecap="round"
        strokeLinejoin="round"
        fill="none"
        opacity="0.9"
      />
    </g>

    {/* Mouth - Flipped Arc (smile) using tealDark */}
    <path
      d="M55,145 Q100,175 145,145"
      stroke={mouthColor}
      strokeWidth="6"
      strokeLinecap="round"
      fill="none"
      opacity="0.95"
    />
  </svg>
);

// Smiley Face 2 - Variation with BlobTwo & BlobThree, different colors
export const SmileyFaceTwo = ({
  eyeColor = BRAND_COLORS.purple,
  noseColor = BRAND_COLORS.coral,
  mouthColor = BRAND_COLORS.teal,
  size = 200,
  className = ''
}) => (
  <svg
    width={size}
    height={size}
    viewBox="0 0 200 200"
    fill="none"
    className={className}
    xmlns="http://www.w3.org/2000/svg"
  >
    {/* Left Eye - BlobTwo (purple) */}
    <g transform="translate(40, 55) scale(0.22)">
      <path
        d="M100,10 C140,15 175,40 185,75 C195,110 180,145 150,170 C120,195 80,195 50,175 C20,155 5,120 10,85 C15,50 60,5 100,10Z"
        fill={eyeColor}
        opacity="0.85"
      />
    </g>

    {/* Right Eye - BlobThree (purple) */}
    <g transform="translate(128, 55) scale(0.22)">
      <path
        d="M70,15 Q110,10 140,30 T175,80 Q185,120 160,155 T110,185 Q70,190 40,165 T15,110 Q10,70 35,40 T70,15Z"
        fill={eyeColor}
        opacity="0.85"
      />
    </g>

    {/* Nose - Modified 7 shape flipped vertically and horizontally */}
    <g transform="translate(100, 95) scale(-1, -1)">
      <path
        d="M-6,-3 L10,-3 Q14,0 13,8 L11,22"
        stroke={noseColor}
        strokeWidth="3.5"
        strokeLinecap="round"
        strokeLinejoin="round"
        fill="none"
        opacity="0.85"
      />
    </g>

    {/* Mouth - Big smile (teal) */}
    <path
      d="M50,140 Q100,180 150,140"
      stroke={mouthColor}
      strokeWidth="5.5"
      strokeLinecap="round"
      fill="none"
      opacity="0.9"
    />
  </svg>
);

// Smiley Face 3 - Variation with wider spacing
export const SmileyFaceThree = ({
  eyeColor = BRAND_COLORS.coral,
  noseColor = BRAND_COLORS.purple,
  mouthColor = BRAND_COLORS.yellow,
  size = 200,
  className = ''
}) => (
  <svg
    width={size}
    height={size}
    viewBox="0 0 200 200"
    fill="none"
    className={className}
    xmlns="http://www.w3.org/2000/svg"
  >
    {/* Left Eye - BlobTwo (coral) - wider spacing */}
    <g transform="translate(25, 48) scale(0.28)">
      <path
        d="M100,10 C140,15 175,40 185,75 C195,110 180,145 150,170 C120,195 80,195 50,175 C20,155 5,120 10,85 C15,50 60,5 100,10Z"
        fill={eyeColor}
        opacity="0.9"
      />
    </g>

    {/* Right Eye - BlobThree (coral) */}
    <g transform="translate(135, 48) scale(0.28)">
      <path
        d="M70,15 Q110,10 140,30 T175,80 Q185,120 160,155 T110,185 Q70,190 40,165 T15,110 Q10,70 35,40 T70,15Z"
        fill={eyeColor}
        opacity="0.9"
      />
    </g>

    {/* Nose - 7 shape flipped vertically and horizontally */}
    <g transform="translate(100, 105) scale(-1, -1)">
      <path
        d="M-7,-6 L9,-6 Q13,-3 12,6 L10,24"
        stroke={noseColor}
        strokeWidth="4.5"
        strokeLinecap="round"
        strokeLinejoin="round"
        fill="none"
        opacity="0.85"
      />
    </g>

    {/* Mouth - Gentle smile (yellow) */}
    <path
      d="M58,150 Q100,172 142,150"
      stroke={mouthColor}
      strokeWidth="6.5"
      strokeLinecap="round"
      fill="none"
      opacity="0.9"
    />
  </svg>
);

// Smiley Face 4 - Compact variation
export const SmileyFaceFour = ({
  eyeColor = BRAND_COLORS.yellow,
  noseColor = BRAND_COLORS.teal,
  mouthColor = BRAND_COLORS.coral,
  size = 200,
  className = ''
}) => (
  <svg
    width={size}
    height={size}
    viewBox="0 0 200 200"
    fill="none"
    className={className}
    xmlns="http://www.w3.org/2000/svg"
  >
    {/* Left Eye - BlobTwo (yellow) - compact */}
    <g transform="translate(48, 58) scale(0.2)">
      <path
        d="M100,10 C140,15 175,40 185,75 C195,110 180,145 150,170 C120,195 80,195 50,175 C20,155 5,120 10,85 C15,50 60,5 100,10Z"
        fill={eyeColor}
        opacity="0.9"
      />
    </g>

    {/* Right Eye - BlobThree (yellow) */}
    <g transform="translate(120, 58) scale(0.2)">
      <path
        d="M70,15 Q110,10 140,30 T175,80 Q185,120 160,155 T110,185 Q70,190 40,165 T15,110 Q10,70 35,40 T70,15Z"
        fill={eyeColor}
        opacity="0.9"
      />
    </g>

    {/* Nose - Small 7 shape flipped vertically and horizontally */}
    <g transform="translate(100, 98) scale(-1, -1)">
      <path
        d="M-4,-4 L7,-4 Q10,-2 9,4 L8,16"
        stroke={noseColor}
        strokeWidth="3"
        strokeLinecap="round"
        strokeLinejoin="round"
        fill="none"
        opacity="0.85"
      />
    </g>

    {/* Mouth - Wide grin (coral) */}
    <path
      d="M52,135 Q100,168 148,135"
      stroke={mouthColor}
      strokeWidth="5"
      strokeLinecap="round"
      fill="none"
      opacity="0.95"
    />
  </svg>
);

// Smiley Face 5 - Winking variation
export const SmileyFaceFive = ({
  eyeColor = BRAND_COLORS.lavender,
  noseColor = BRAND_COLORS.teal,
  mouthColor = BRAND_COLORS.coral,
  size = 200,
  className = ''
}) => (
  <svg
    width={size}
    height={size}
    viewBox="0 0 200 200"
    fill="none"
    className={className}
    xmlns="http://www.w3.org/2000/svg"
  >
    {/* Left Eye - BlobTwo (lavender) - normal */}
    <g transform="translate(38, 52) scale(0.24)">
      <path
        d="M100,10 C140,15 175,40 185,75 C195,110 180,145 150,170 C120,195 80,195 50,175 C20,155 5,120 10,85 C15,50 60,5 100,10Z"
        fill={eyeColor}
        opacity="0.9"
      />
    </g>

    {/* Right Eye - Wink (arc line instead of blob) */}
    <path
      d="M125,68 Q145,72 165,68"
      stroke={eyeColor}
      strokeWidth="4"
      strokeLinecap="round"
      fill="none"
      opacity="0.9"
    />

    {/* Nose - 7 shape flipped */}
    <g transform="translate(100, 102) scale(-1, -1)">
      <path
        d="M-5,-4 L9,-4 Q12,-2 11,6 L9,18"
        stroke={noseColor}
        strokeWidth="3.5"
        strokeLinecap="round"
        strokeLinejoin="round"
        fill="none"
        opacity="0.9"
      />
    </g>

    {/* Mouth - Cheeky smile */}
    <path
      d="M60,145 Q85,165 100,168 Q115,165 140,145"
      stroke={mouthColor}
      strokeWidth="5.5"
      strokeLinecap="round"
      fill="none"
      opacity="0.9"
    />
  </svg>
);

// Smiley Face 6 - Surprised expression
export const SmileyFaceSix = ({
  eyeColor = BRAND_COLORS.teal,
  noseColor = BRAND_COLORS.coral,
  mouthColor = BRAND_COLORS.purple,
  size = 200,
  className = ''
}) => (
  <svg
    width={size}
    height={size}
    viewBox="0 0 200 200"
    fill="none"
    className={className}
    xmlns="http://www.w3.org/2000/svg"
  >
    {/* Left Eye - BlobTwo (teal) - larger for surprise */}
    <g transform="translate(32, 45) scale(0.3)">
      <path
        d="M100,10 C140,15 175,40 185,75 C195,110 180,145 150,170 C120,195 80,195 50,175 C20,155 5,120 10,85 C15,50 60,5 100,10Z"
        fill={eyeColor}
        opacity="0.9"
      />
    </g>

    {/* Right Eye - BlobThree (teal) - larger */}
    <g transform="translate(128, 45) scale(0.3)">
      <path
        d="M70,15 Q110,10 140,30 T175,80 Q185,120 160,155 T110,185 Q70,190 40,165 T15,110 Q10,70 35,40 T70,15Z"
        fill={eyeColor}
        opacity="0.9"
      />
    </g>

    {/* Nose - 7 shape flipped */}
    <g transform="translate(100, 108) scale(-1, -1)">
      <path
        d="M-5,-5 L8,-5 Q11,-3 10,4 L8,16"
        stroke={noseColor}
        strokeWidth="4"
        strokeLinecap="round"
        strokeLinejoin="round"
        fill="none"
        opacity="0.85"
      />
    </g>

    {/* Mouth - O shape for surprise */}
    <ellipse
      cx="100"
      cy="155"
      rx="18"
      ry="24"
      stroke={mouthColor}
      strokeWidth="5"
      fill="none"
      opacity="0.9"
    />
  </svg>
);

// Smiley Face 7 - Silly/Tongue out
export const SmileyFaceSeven = ({
  eyeColor = BRAND_COLORS.yellow,
  noseColor = BRAND_COLORS.purple,
  mouthColor = BRAND_COLORS.teal,
  tongueColor = BRAND_COLORS.coral,
  size = 200,
  className = ''
}) => (
  <svg
    width={size}
    height={size}
    viewBox="0 0 200 200"
    fill="none"
    className={className}
    xmlns="http://www.w3.org/2000/svg"
  >
    {/* Left Eye - BlobTwo (yellow) */}
    <g transform="translate(40, 54) scale(0.23)">
      <path
        d="M100,10 C140,15 175,40 185,75 C195,110 180,145 150,170 C120,195 80,195 50,175 C20,155 5,120 10,85 C15,50 60,5 100,10Z"
        fill={eyeColor}
        opacity="0.9"
      />
    </g>

    {/* Right Eye - BlobThree (yellow) */}
    <g transform="translate(126, 54) scale(0.23)">
      <path
        d="M70,15 Q110,10 140,30 T175,80 Q185,120 160,155 T110,185 Q70,190 40,165 T15,110 Q10,70 35,40 T70,15Z"
        fill={eyeColor}
        opacity="0.9"
      />
    </g>

    {/* Nose - 7 shape flipped */}
    <g transform="translate(100, 100) scale(-1, -1)">
      <path
        d="M-6,-5 L8,-5 Q12,-3 11,5 L9,18"
        stroke={noseColor}
        strokeWidth="4"
        strokeLinecap="round"
        strokeLinejoin="round"
        fill="none"
        opacity="0.85"
      />
    </g>

    {/* Mouth - Open with tongue */}
    <path
      d="M55,140 Q70,155 100,160 Q130,155 145,140"
      stroke={mouthColor}
      strokeWidth="5"
      strokeLinecap="round"
      fill="none"
      opacity="0.9"
    />

    {/* Tongue */}
    <ellipse
      cx="100"
      cy="162"
      rx="12"
      ry="18"
      fill={tongueColor}
      opacity="0.85"
    />
  </svg>
);

// Smiley Face 8 - Goofy asymmetric
export const SmileyFaceEight = ({
  eyeColor = BRAND_COLORS.coral,
  noseColor = BRAND_COLORS.yellow,
  mouthColor = BRAND_COLORS.purple,
  size = 200,
  className = ''
}) => (
  <svg
    width={size}
    height={size}
    viewBox="0 0 200 200"
    fill="none"
    className={className}
    xmlns="http://www.w3.org/2000/svg"
  >
    {/* Left Eye - BlobTwo (coral) - higher */}
    <g transform="translate(35, 48) scale(0.26)">
      <path
        d="M100,10 C140,15 175,40 185,75 C195,110 180,145 150,170 C120,195 80,195 50,175 C20,155 5,120 10,85 C15,50 60,5 100,10Z"
        fill={eyeColor}
        opacity="0.9"
      />
    </g>

    {/* Right Eye - BlobThree (coral) - lower and smaller */}
    <g transform="translate(130, 58) scale(0.2)">
      <path
        d="M70,15 Q110,10 140,30 T175,80 Q185,120 160,155 T110,185 Q70,190 40,165 T15,110 Q10,70 35,40 T70,15Z"
        fill={eyeColor}
        opacity="0.9"
      />
    </g>

    {/* Nose - 7 shape flipped, slightly offset */}
    <g transform="translate(95, 104) scale(-1, -1)">
      <path
        d="M-6,-5 L9,-5 Q13,-3 12,5 L10,20"
        stroke={noseColor}
        strokeWidth="4.5"
        strokeLinecap="round"
        strokeLinejoin="round"
        fill="none"
        opacity="0.85"
      />
    </g>

    {/* Mouth - Wonky smile */}
    <path
      d="M50,148 Q75,175 105,172 Q135,170 150,145"
      stroke={mouthColor}
      strokeWidth="5.5"
      strokeLinecap="round"
      fill="none"
      opacity="0.9"
    />
  </svg>
);

// Logo Variations for Made Right Studio
export const LogoVariation1 = ({ size = 50 }) => (
  <svg
    width={size}
    height={size}
    viewBox="0 0 200 200"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    {/* Left Eye - BlobTwo (yellow for contrast) - bigger */}
    <g transform="translate(35, 48) scale(0.28)">
      <path
        d="M100,10 C140,15 175,40 185,75 C195,110 180,145 150,170 C120,195 80,195 50,175 C20,155 5,120 10,85 C15,50 60,5 100,10Z"
        fill="#FFF7AF"
        opacity="1"
      />
    </g>

    {/* Right Eye - Wink (thicker arc) */}
    <path
      d="M125,70 Q145,75 165,70"
      stroke="#FFF7AF"
      strokeWidth="5"
      strokeLinecap="round"
      fill="none"
      opacity="1"
    />

    {/* Nose - coral instead of white for visibility */}
    <g transform="translate(100, 105) scale(-1, -1)">
      <path
        d="M-6,-5 L10,-5 Q14,-3 13,7 L11,22"
        stroke="#FF9375"
        strokeWidth="4.5"
        strokeLinecap="round"
        strokeLinejoin="round"
        fill="none"
        opacity="1"
      />
    </g>

    {/* Mouth - lavender smile */}
    <path
      d="M58,148 Q88,172 100,175 Q112,172 142,148"
      stroke="#E9D5FF"
      strokeWidth="6"
      strokeLinecap="round"
      fill="none"
      opacity="1"
    />
  </svg>
);

export const LogoVariation2 = ({ size = 50 }) => (
  <svg
    width={size}
    height={size}
    viewBox="0 0 200 200"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    {/* M - made from two blob shapes */}
    <g transform="translate(25, 65) scale(0.18)">
      <path
        d="M100,10 C140,15 175,40 185,75 C195,110 180,145 150,170 C120,195 80,195 50,175 C20,155 5,120 10,85 C15,50 60,5 100,10Z"
        fill="#FFF7AF"
        opacity="0.95"
      />
    </g>
    <g transform="translate(60, 65) scale(0.18)">
      <path
        d="M70,15 Q110,10 140,30 T175,80 Q185,120 160,155 T110,185 Q70,190 40,165 T15,110 Q10,70 35,40 T70,15Z"
        fill="#FF9375"
        opacity="0.95"
      />
    </g>

    {/* R - hand-drawn style */}
    <path
      d="M110,75 L110,135 M110,75 Q125,72 135,82 T135,100 Q135,110 125,115 L140,135"
      stroke="#E9D5FF"
      strokeWidth="7"
      strokeLinecap="round"
      strokeLinejoin="round"
      fill="none"
      opacity="0.95"
    />

    {/* Playful dot accent */}
    <circle cx="170" cy="75" r="6" fill="#A1ADEB" opacity="0.9" />
  </svg>
);

export const LogoVariation3 = ({ size = 50 }) => (
  <svg
    width={size}
    height={size}
    viewBox="0 0 200 200"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    {/* Rounded square container for structure */}
    <rect x="35" y="35" width="130" height="130" rx="32" fill="#0F766E" opacity="0.25" />

    {/* Eyes - simple circles, asymmetric for personality */}
    <circle cx="75" cy="85" r="12" fill="#FFF7AF" opacity="0.95" />
    <ellipse cx="125" cy="88" rx="18" ry="10" fill="#FF9375" opacity="0.95" />

    {/* Nose - minimal line */}
    <path
      d="M100,100 L95,118"
      stroke="#E9D5FF"
      strokeWidth="4"
      strokeLinecap="round"
      opacity="0.9"
    />

    {/* Smile - confident arc */}
    <path
      d="M70,130 Q100,150 130,130"
      stroke="#A1ADEB"
      strokeWidth="5"
      strokeLinecap="round"
      fill="none"
      opacity="0.95"
    />
  </svg>
);

export const LogoVariation4 = ({ size = 50 }) => (
  <svg
    width={size * 2.4}
    height={size}
    viewBox="0 0 240 100"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    {/* Small winking face icon */}
    <g transform="translate(0, 0) scale(0.45)">
      <circle cx="50" cy="50" r="45" fill="#0F766E" opacity="0.2" />
      <g transform="translate(15, 22) scale(0.22)">
        <path
          d="M100,10 C140,15 175,40 185,75 C195,110 180,145 150,170 C120,195 80,195 50,175 C20,155 5,120 10,85 C15,50 60,5 100,10Z"
          fill="#FFF7AF"
        />
      </g>
      <path d="M60,35 Q70,37 80,35" stroke="#FF9375" strokeWidth="3" strokeLinecap="round" fill="none" />
      <g transform="translate(50, 52) scale(-1, -1)">
        <path d="M-3,-2 L5,-2 Q7,-1 6,3 L5,9" stroke="#E9D5FF" strokeWidth="2.5" strokeLinecap="round" fill="none" />
      </g>
      <path d="M28,72 Q42,82 50,84 Q58,82 72,72" stroke="#A1ADEB" strokeWidth="4" strokeLinecap="round" fill="none" />
    </g>

    {/* "MR" text - clean sans-serif style */}
    <text x="58" y="70" fill="#FFFFFF" fontSize="56" fontWeight="700" fontFamily="system-ui, -apple-system, sans-serif" letterSpacing="-2">MR</text>
  </svg>
);

export const LogoVariation5 = ({ size = 50 }) => (
  <svg
    width={size}
    height={size}
    viewBox="0 0 200 200"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    {/* Badge background - hexagon shape */}
    <path
      d="M100,15 L160,52 L160,128 L100,165 L40,128 L40,52 Z"
      fill="#0F766E"
      opacity="0.3"
    />

    {/* Three stacked shapes representing quality/precision */}
    <circle cx="100" cy="65" r="18" fill="#FFF7AF" opacity="0.95" />

    <g transform="translate(72, 88) scale(0.16)">
      <path
        d="M70,15 Q110,10 140,30 T175,80 Q185,120 160,155 T110,185 Q70,190 40,165 T15,110 Q10,70 35,40 T70,15Z"
        fill="#FF9375"
        opacity="0.95"
      />
    </g>

    {/* Smile at bottom */}
    <path
      d="M70,135 Q100,155 130,135"
      stroke="#E9D5FF"
      strokeWidth="6"
      strokeLinecap="round"
      fill="none"
      opacity="0.95"
    />

    {/* Wink accent */}
    <path
      d="M115,110 Q125,112 135,110"
      stroke="#A1ADEB"
      strokeWidth="4"
      strokeLinecap="round"
      fill="none"
      opacity="0.9"
    />
  </svg>
);

// Middle Child-Inspired Logo Variations - Bold, Playful, Hand-drawn Restaurant Aesthetic

export const LogoVariation6 = ({ size = 50 }) => (
  <svg
    width={size * 2.8}
    height={size}
    viewBox="0 0 280 100"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    {/* Hand-drawn "MR" with bold, casual strokes */}
    <path
      d="M15,75 L15,25 Q18,28 25,45 L32,65 Q35,70 38,65 L45,45 Q52,28 55,25 L55,75"
      stroke="#FFF7AF"
      strokeWidth="9"
      strokeLinecap="round"
      strokeLinejoin="round"
      fill="none"
      opacity="0.95"
    />

    {/* R with chunky style */}
    <path
      d="M75,75 L75,25 L95,25 Q110,25 110,40 Q110,50 100,52 L112,75 M75,50 L95,50"
      stroke="#FF9375"
      strokeWidth="9"
      strokeLinecap="round"
      strokeLinejoin="round"
      fill="none"
      opacity="0.95"
    />

    {/* Playful underline squiggle */}
    <path
      d="M10,85 Q30,82 45,85 T75,88 Q95,90 115,85"
      stroke="#E9D5FF"
      strokeWidth="4"
      strokeLinecap="round"
      fill="none"
      opacity="0.8"
    />
  </svg>
);

export const LogoVariation7 = ({ size = 50 }) => (
  <svg
    width={size}
    height={size}
    viewBox="0 0 200 200"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    {/* Organic blob container with bold outline */}
    <path
      d="M100,20 Q140,25 165,50 T180,100 Q175,140 150,165 T100,180 Q60,175 35,150 T20,100 Q25,60 50,35 T100,20Z"
      fill="#0F766E"
      opacity="0.15"
    />
    <path
      d="M100,20 Q140,25 165,50 T180,100 Q175,140 150,165 T100,180 Q60,175 35,150 T20,100 Q25,60 50,35 T100,20Z"
      stroke="#FFF7AF"
      strokeWidth="5"
      strokeLinecap="round"
      fill="none"
      opacity="0.9"
    />

    {/* Bold "M" inside */}
    <path
      d="M60,85 L60,115 Q62,100 70,90 L78,110 Q82,100 90,90 Q98,100 90,115 L90,85"
      stroke="#FF9375"
      strokeWidth="7"
      strokeLinecap="round"
      strokeLinejoin="round"
      fill="none"
      opacity="0.95"
    />

    {/* Chunky dot */}
    <circle cx="120" cy="100" r="12" fill="#A1ADEB" opacity="0.9" />
  </svg>
);

export const LogoVariation8 = ({ size = 50 }) => (
  <svg
    width={size * 2.2}
    height={size}
    viewBox="0 0 220 100"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    {/* Stacked text style - "MADE" */}
    <path
      d="M20,30 L20,45 Q22,38 28,35 L32,42 Q34,38 40,35 Q44,38 40,45 L40,30"
      stroke="#FFF7AF"
      strokeWidth="6"
      strokeLinecap="round"
      strokeLinejoin="round"
      fill="none"
      opacity="0.95"
    />
    <path
      d="M50,30 L65,30 L65,45 L50,45 Z"
      stroke="#FFF7AF"
      strokeWidth="6"
      strokeLinecap="round"
      strokeLinejoin="round"
      fill="none"
      opacity="0.95"
    />

    {/* "RIGHT" below */}
    <path
      d="M20,60 L20,85 L30,85 Q40,85 40,75 Q40,70 35,68 L42,85 M20,72 L32,72"
      stroke="#FF9375"
      strokeWidth="6"
      strokeLinecap="round"
      strokeLinejoin="round"
      fill="none"
      opacity="0.95"
    />

    {/* Decorative shapes */}
    <g transform="translate(70, 55) scale(0.08)">
      <path
        d="M100,10 C140,15 175,40 185,75 C195,110 180,145 150,170 C120,195 80,195 50,175 C20,155 5,120 10,85 C15,50 60,5 100,10Z"
        fill="#E9D5FF"
        opacity="0.85"
      />
    </g>
  </svg>
);

export const LogoVariation9 = ({ size = 50 }) => (
  <svg
    width={size}
    height={size}
    viewBox="0 0 200 200"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    {/* Rough square frame */}
    <path
      d="M30,25 Q28,22 35,20 L165,20 Q172,22 170,30 L170,170 Q172,178 165,180 L35,180 Q28,178 30,170 Z"
      stroke="#FFF7AF"
      strokeWidth="6"
      strokeLinecap="round"
      strokeLinejoin="round"
      fill="none"
      opacity="0.9"
    />

    {/* Bold "M" and "R" stacked */}
    <path
      d="M55,70 L55,95 Q57,82 65,75 L72,88 Q75,82 83,75 Q90,82 83,95 L83,70"
      stroke="#FF9375"
      strokeWidth="8"
      strokeLinecap="round"
      strokeLinejoin="round"
      fill="none"
      opacity="0.95"
    />

    {/* Playful splat */}
    <circle cx="135" cy="80" r="18" fill="#A1ADEB" opacity="0.75" />
    <circle cx="125" cy="75" r="10" fill="#A1ADEB" opacity="0.85" />
    <circle cx="145" cy="75" r="8" fill="#A1ADEB" opacity="0.8" />

    {/* Bottom accent line */}
    <path
      d="M50,125 Q75,122 100,125 T150,125"
      stroke="#E9D5FF"
      strokeWidth="5"
      strokeLinecap="round"
      fill="none"
      opacity="0.85"
    />
  </svg>
);

export const LogoVariation10 = ({ size = 50 }) => (
  <svg
    width={size * 1.8}
    height={size}
    viewBox="0 0 180 100"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    {/* Condensed stamp-like design */}
    <rect x="10" y="10" width="160" height="80" rx="8"
      stroke="#FFF7AF"
      strokeWidth="5"
      fill="none"
      opacity="0.9"
      strokeDasharray="8,4"
    />

    {/* "MR" in bold condensed style */}
    <text x="40" y="68" fill="#FF9375" fontSize="48" fontWeight="900" fontFamily="system-ui, -apple-system, sans-serif" letterSpacing="-4">MR</text>

    {/* Small decorative elements in corners */}
    <circle cx="25" cy="25" r="5" fill="#A1ADEB" opacity="0.8" />
    <circle cx="155" cy="25" r="5" fill="#E9D5FF" opacity="0.8" />
    <circle cx="25" cy="75" r="5" fill="#E9D5FF" opacity="0.8" />
    <circle cx="155" cy="75" r="5" fill="#A1ADEB" opacity="0.8" />
  </svg>
);

// Properly researched hand-drawn typography - MADE RIGHT full wordmark

// Variation 11: Psychedelic Wavy - Online Ceramics / Grateful Dead poster aesthetic
// Wobbly baselines, irregular letter heights, '60s psychedelia, tie-dye energy
export const LogoVariation11 = ({ size = 50, color = null }) => {
  const colors = color ? [color, color, color, color] : ["#FFF7AF", "#FF9375", "#E9D5FF", "#A1ADEB"];
  const underlineColor = color ? color : "#FF9375";

  return (
    <svg
      width={size * 5.2}
      height={size * 1.4}
      viewBox="0 0 520 140"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      {/* "MADE" - wobbly psychedelic letters with wavy baseline and irregular heights */}
      <path
        d="M15,95 Q12,98 15,42 Q17,38 22,48 L32,78 Q34,85 37,78 L47,48 Q52,38 54,42 Q57,98 54,95"
        stroke={colors[0]}
        strokeWidth="8"
        strokeLinecap="round"
        strokeLinejoin="round"
        fill="none"
        opacity="0.95"
      />
      <path
        d="M80,100 Q77,103 85,40 Q87,36 92,40 Q100,103 97,100 M81,72 Q87,68 96,72"
        stroke={colors[1]}
        strokeWidth="8"
        strokeLinecap="round"
        strokeLinejoin="round"
        fill="none"
        opacity="0.95"
      />
      <path
        d="M120,97 Q117,100 120,44 L140,45 Q163,50 163,70 Q163,92 140,96 L120,95"
        stroke={colors[2]}
        strokeWidth="8"
        strokeLinecap="round"
        strokeLinejoin="round"
        fill="none"
        opacity="0.95"
      />
      <path
        d="M185,96 Q182,99 185,45 L215,48 M185,70 L210,72 M185,95 L215,98"
        stroke={colors[3]}
        strokeWidth="8"
        strokeLinecap="round"
        strokeLinejoin="round"
        fill="none"
        opacity="0.95"
      />

      {/* "RIGHT" - continuing psychedelic wobble */}
      <path
        d="M240,96 Q237,99 240,45 L265,46 Q280,48 280,62 Q280,72 270,75 L285,96 M240,72 L265,73"
        stroke={colors[0]}
        strokeWidth="8"
        strokeLinecap="round"
        strokeLinejoin="round"
        fill="none"
        opacity="0.95"
      />
      <path
        d="M305,98 Q302,101 305,46"
        stroke={colors[1]}
        strokeWidth="8"
        strokeLinecap="round"
        fill="none"
        opacity="0.95"
      />
      <path
        d="M345,58 Q345,42 330,40 Q315,42 315,70 Q315,98 330,98 Q345,96 345,70 L330,70"
        stroke={colors[2]}
        strokeWidth="8"
        strokeLinecap="round"
        strokeLinejoin="round"
        fill="none"
        opacity="0.95"
      />
      <path
        d="M370,99 Q367,102 370,44 M400,99 Q397,102 400,44 M370,70 L400,72"
        stroke={colors[3]}
        strokeWidth="8"
        strokeLinecap="round"
        strokeLinejoin="round"
        fill="none"
        opacity="0.95"
      />
      <path
        d="M425,47 L460,50 M442,49 Q439,100 442,98"
        stroke={colors[0]}
        strokeWidth="8"
        strokeLinecap="round"
        strokeLinejoin="round"
        fill="none"
        opacity="0.95"
      />

      {/* Psychedelic wavy underline */}
      <path
        d="M10,115 Q45,108 80,115 Q115,122 150,113 Q185,105 220,117 Q255,125 290,115 Q325,107 360,118 Q395,126 430,115 Q455,110 480,120"
        stroke={underlineColor}
        strokeWidth="4"
        strokeLinecap="round"
        fill="none"
        opacity="0.75"
      />
    </svg>
  );
};

// Variation 12: Spaced Modern Sans - Self Aware Studio aesthetic
// Wide letterspacing, clean geometric sans, breathing room, contemporary minimal
export const LogoVariation12 = ({ size = 50, color = null }) => {
  const colors = color ? [color, color, color, color] : ["#FFF7AF", "#FF9375", "#E9D5FF", "#A1ADEB"];

  return (
    <svg
      width={size * 6}
      height={size}
      viewBox="0 0 600 100"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      {/* "MADE" - Wide spaced, clean geometric sans-serif */}
      <path
        d="M15,75 L15,25 L35,60 L55,25 L55,75"
        stroke={colors[0]}
        strokeWidth="6"
        strokeLinecap="round"
        strokeLinejoin="round"
        fill="none"
        opacity="0.95"
      />
      <path
        d="M95,75 L107,25 L120,25 L132,75 M100,52 L127,52"
        stroke={colors[1]}
        strokeWidth="6"
        strokeLinecap="round"
        strokeLinejoin="round"
        fill="none"
        opacity="0.95"
      />
      <path
        d="M165,75 L165,25 L185,25 Q205,25 205,50 Q205,75 185,75 L165,75"
        stroke={colors[2]}
        strokeWidth="6"
        strokeLinecap="round"
        strokeLinejoin="round"
        fill="none"
        opacity="0.95"
      />
      <path
        d="M235,75 L235,25 L265,25 M235,50 L260,50 M235,75 L265,75"
        stroke={colors[3]}
        strokeWidth="6"
        strokeLinecap="round"
        strokeLinejoin="round"
        fill="none"
        opacity="0.95"
      />

      {/* "RIGHT" - continuing wide spacing */}
      <path
        d="M300,75 L300,25 L320,25 Q335,25 335,40 Q335,50 325,52 L340,75 M300,50 L320,50"
        stroke={colors[0]}
        strokeWidth="6"
        strokeLinecap="round"
        strokeLinejoin="round"
        fill="none"
        opacity="0.95"
      />
      <path
        d="M370,75 L370,25"
        stroke={colors[1]}
        strokeWidth="6"
        strokeLinecap="round"
        fill="none"
        opacity="0.95"
      />
      <path
        d="M420,42 Q420,25 405,25 Q390,25 390,50 Q390,75 405,75 Q420,73 420,50 L405,50"
        stroke={colors[2]}
        strokeWidth="6"
        strokeLinecap="round"
        strokeLinejoin="round"
        fill="none"
        opacity="0.95"
      />
      <path
        d="M455,75 L455,25 M485,75 L485,25 M455,50 L485,50"
        stroke={colors[3]}
        strokeWidth="6"
        strokeLinecap="round"
        strokeLinejoin="round"
        fill="none"
        opacity="0.95"
      />
      <path
        d="M515,25 L545,25 M530,25 L530,75"
        stroke={colors[0]}
        strokeWidth="6"
        strokeLinecap="round"
        strokeLinejoin="round"
        fill="none"
        opacity="0.95"
      />
    </svg>
  );
};

// Variation 13: Friendly Rounded - Plank.co Montreal studio aesthetic
// Organic rounded sans, friendly approachable, geometric with soft edges
export const LogoVariation13 = ({ size = 50, color = null }) => {
  const colors = color ? [color, color, color, color] : ["#FFF7AF", "#FF9375", "#E9D5FF", "#A1ADEB"];

  return (
    <svg
      width={size * 6.5}
      height={size * 1.1}
      viewBox="0 0 650 110"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      {/* "MADE" - Soft rounded geometric letters with wide spacing */}
      <path
        d="M15,80 Q12,82 12,30 Q12,28 15,28 L20,30 L30,62 L40,30 L45,28 Q48,28 48,30 Q48,82 45,80"
        stroke={colors[0]}
        strokeWidth="7"
        strokeLinecap="round"
        strokeLinejoin="round"
        fill="none"
        opacity="0.95"
      />
      <path
        d="M95,80 Q92,82 99,30 Q101,28 105,30 Q112,82 109,80 M96,58 Q102,56 108,58"
        stroke={colors[1]}
        strokeWidth="7"
        strokeLinecap="round"
        strokeLinejoin="round"
        fill="none"
        opacity="0.95"
      />
      <path
        d="M155,80 Q152,82 152,30 Q152,28 155,28 L172,28 Q190,30 190,54 Q190,78 172,80 L155,80"
        stroke={colors[2]}
        strokeWidth="7"
        strokeLinecap="round"
        strokeLinejoin="round"
        fill="none"
        opacity="0.95"
      />
      <path
        d="M230,80 Q227,82 227,30 Q227,28 230,28 L253,28 M227,54 L248,54 M227,80 L253,80"
        stroke={colors[3]}
        strokeWidth="7"
        strokeLinecap="round"
        strokeLinejoin="round"
        fill="none"
        opacity="0.95"
      />

      {/* "RIGHT" - continuing rounded friendly style with added spacing */}
      <path
        d="M305,80 Q302,82 302,30 Q302,28 305,28 L323,28 Q337,30 337,44 Q337,54 328,56 L340,80 M302,54 L323,54"
        stroke={colors[0]}
        strokeWidth="7"
        strokeLinecap="round"
        strokeLinejoin="round"
        fill="none"
        opacity="0.95"
      />
      <path
        d="M375,80 Q372,82 372,30 Q372,28 375,28"
        stroke={colors[1]}
        strokeWidth="7"
        strokeLinecap="round"
        fill="none"
        opacity="0.95"
      />
      <path
        d="M430,44 Q430,28 415,28 Q400,28 400,54 Q400,80 415,80 Q430,78 430,54 L415,54"
        stroke={colors[2]}
        strokeWidth="7"
        strokeLinecap="round"
        strokeLinejoin="round"
        fill="none"
        opacity="0.95"
      />
      <path
        d="M470,80 Q467,82 467,30 Q467,28 470,28 M497,80 Q494,82 494,30 Q494,28 497,28 M467,54 L497,54"
        stroke={colors[3]}
        strokeWidth="7"
        strokeLinecap="round"
        strokeLinejoin="round"
        fill="none"
        opacity="0.95"
      />
      <path
        d="M535,30 Q535,28 538,28 L560,28 M548,28 Q545,82 548,80"
        stroke={colors[0]}
        strokeWidth="7"
        strokeLinecap="round"
        strokeLinejoin="round"
        fill="none"
        opacity="0.95"
      />
    </svg>
  );
};

// Variation 14: Chunky Marker - Bold casual hand-drawn
// Fat marker strokes, playful imperfect, energetic casual
export const LogoVariation14 = ({ size = 50 }) => (
  <svg
    width={size * 5.8}
    height={size * 1.2}
    viewBox="0 0 580 120"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    {/* "MADE" - Chunky marker style */}
    <path
      d="M15,90 L17,35 L28,70 L39,35 L41,90"
      stroke="#FFF7AF"
      strokeWidth="11"
      strokeLinecap="round"
      strokeLinejoin="round"
      fill="none"
      opacity="0.95"
    />
    <path
      d="M70,92 L82,33 L91,92 M74,63 L87,63"
      stroke="#FF9375"
      strokeWidth="11"
      strokeLinecap="round"
      strokeLinejoin="round"
      fill="none"
      opacity="0.95"
    />
    <path
      d="M115,90 L115,35 L135,35 Q152,37 152,62 Q152,87 135,90 L115,90"
      stroke="#E9D5FF"
      strokeWidth="11"
      strokeLinecap="round"
      strokeLinejoin="round"
      fill="none"
      opacity="0.95"
    />
    <path
      d="M175,90 L175,35 L200,35 M175,62 L195,62 M175,90 L200,90"
      stroke="#A1ADEB"
      strokeWidth="11"
      strokeLinecap="round"
      strokeLinejoin="round"
      fill="none"
      opacity="0.95"
    />

    {/* "RIGHT" - continuing chunky marker */}
    <path
      d="M225,90 L225,35 L250,35 Q268,37 268,52 Q268,64 258,66 L272,90 M225,64 L250,64"
      stroke="#FFF7AF"
      strokeWidth="11"
      strokeLinecap="round"
      strokeLinejoin="round"
      fill="none"
      opacity="0.95"
    />
    <path
      d="M295,92 L295,33"
      stroke="#FF9375"
      strokeWidth="11"
      strokeLinecap="round"
      fill="none"
      opacity="0.95"
    />
    <path
      d="M335,52 Q335,35 320,35 Q305,35 305,62 Q305,90 320,90 Q335,88 335,62 L320,62"
      stroke="#E9D5FF"
      strokeWidth="11"
      strokeLinecap="round"
      strokeLinejoin="round"
      fill="none"
      opacity="0.95"
    />
    <path
      d="M360,90 L360,35 M390,90 L390,35 M360,62 L390,62"
      stroke="#A1ADEB"
      strokeWidth="11"
      strokeLinecap="round"
      strokeLinejoin="round"
      fill="none"
      opacity="0.95"
    />
    <path
      d="M410,35 L445,35 M427,35 L427,90"
      stroke="#FFF7AF"
      strokeWidth="11"
      strokeLinecap="round"
      strokeLinejoin="round"
      fill="none"
      opacity="0.95"
    />

    {/* Playful dots */}
    <circle cx="28" cy="103" r="5" fill="#FF9375" opacity="0.85" />
    <circle cx="135" cy="103" r="5" fill="#E9D5FF" opacity="0.85" />
    <circle cx="320" cy="103" r="5" fill="#A1ADEB" opacity="0.85" />
  </svg>
);

// Variation 15: Condensed Tall - Modern editorial
// Narrow condensed forms, sophisticated, magazine-style
export const LogoVariation15 = ({ size = 50, color = null }) => {
  const colors = color ? [color, color, color, color] : ["#FFF7AF", "#FF9375", "#E9D5FF", "#A1ADEB"];

  return (
    <svg
      width={size * 6.8}
      height={size * 1.3}
      viewBox="0 0 680 130"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      {/* "MADE" - Tall condensed */}
      <path
        d="M15,105 L15,25 L28,75 L41,25 L41,105"
        stroke={colors[0]}
        strokeWidth="8"
        strokeLinecap="round"
        strokeLinejoin="round"
        fill="none"
        opacity="0.95"
      />
      <path
        d="M70,105 L78,25 L86,25 L94,105 M72,65 L92,65"
        stroke={colors[1]}
        strokeWidth="8"
        strokeLinecap="round"
        strokeLinejoin="round"
        fill="none"
        opacity="0.95"
      />
      <path
        d="M120,105 L120,25 L135,25 Q150,25 150,65 Q150,105 135,105 L120,105"
        stroke={colors[2]}
        strokeWidth="8"
        strokeLinecap="round"
        strokeLinejoin="round"
        fill="none"
        opacity="0.95"
      />
      <path
        d="M175,105 L175,25 L195,25 M175,65 L192,65 M175,105 L195,105"
        stroke={colors[3]}
        strokeWidth="8"
        strokeLinecap="round"
        strokeLinejoin="round"
        fill="none"
        opacity="0.95"
      />

      {/* "RIGHT" - continuing tall condensed with added spacing */}
      <path
        d="M250,105 L250,25 L270,25 Q285,25 285,48 Q285,62 275,65 L290,105 M250,62 L270,62"
        stroke={colors[0]}
        strokeWidth="8"
        strokeLinecap="round"
        strokeLinejoin="round"
        fill="none"
        opacity="0.95"
      />
      <path
        d="M315,105 L315,25"
        stroke={colors[1]}
        strokeWidth="8"
        strokeLinecap="round"
        fill="none"
        opacity="0.95"
      />
      <path
        d="M360,48 Q360,25 345,25 Q330,25 330,65 Q330,105 345,105 Q360,103 360,65 L345,65"
        stroke={colors[2]}
        strokeWidth="8"
        strokeLinecap="round"
        strokeLinejoin="round"
        fill="none"
        opacity="0.95"
      />
      <path
        d="M385,105 L385,25 M410,105 L410,25 M385,65 L410,65"
        stroke={colors[3]}
        strokeWidth="8"
        strokeLinecap="round"
        strokeLinejoin="round"
        fill="none"
        opacity="0.95"
      />
      <path
        d="M430,25 L455,25 M442,25 L442,105"
        stroke={colors[0]}
        strokeWidth="8"
        strokeLinecap="round"
        strokeLinejoin="round"
        fill="none"
        opacity="0.95"
      />
    </svg>
  );
};

// Variation 16: Brush Script - Flowing connected
// Casual brush lettering, connected strokes, energetic flow
export const LogoVariation16 = ({ size = 50 }) => (
  <svg
    width={size * 6}
    height={size * 1.2}
    viewBox="0 0 600 120"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    {/* "MADE" - Flowing brush script */}
    <path
      d="M15,85 Q13,88 18,42 Q20,38 24,45 L32,72 Q34,78 36,72 L44,45 Q48,38 50,42 Q55,88 52,85"
      stroke="#FFF7AF"
      strokeWidth="9"
      strokeLinecap="round"
      strokeLinejoin="round"
      fill="none"
      opacity="0.95"
    />
    <path
      d="M78,90 Q75,93 82,40 Q84,38 88,45 Q93,93 90,90 M80,65 Q85,62 90,65"
      stroke="#FF9375"
      strokeWidth="9"
      strokeLinecap="round"
      strokeLinejoin="round"
      fill="none"
      opacity="0.95"
    />
    <path
      d="M115,88 Q112,90 115,42 Q117,40 122,40 L138,42 Q153,45 153,64 Q153,83 138,87 L115,88"
      stroke="#E9D5FF"
      strokeWidth="9"
      strokeLinecap="round"
      strokeLinejoin="round"
      fill="none"
      opacity="0.95"
    />
    <path
      d="M178,87 Q175,90 178,43 Q180,40 185,42 L205,45 M178,64 L200,66 M178,86 L205,88"
      stroke="#A1ADEB"
      strokeWidth="9"
      strokeLinecap="round"
      strokeLinejoin="round"
      fill="none"
      opacity="0.95"
    />

    {/* "RIGHT" - continuing brush script flow */}
    <path
      d="M230,87 Q227,90 230,43 Q232,40 237,42 L255,44 Q268,46 268,58 Q268,68 258,70 L272,87 M230,66 L252,68"
      stroke="#FFF7AF"
      strokeWidth="9"
      strokeLinecap="round"
      strokeLinejoin="round"
      fill="none"
      opacity="0.95"
    />
    <path
      d="M295,90 Q292,93 295,42"
      stroke="#FF9375"
      strokeWidth="9"
      strokeLinecap="round"
      fill="none"
      opacity="0.95"
    />
    <path
      d="M335,58 Q335,42 320,42 Q305,42 305,66 Q305,88 320,88 Q335,86 335,66 L320,66"
      stroke="#E9D5FF"
      strokeWidth="9"
      strokeLinecap="round"
      strokeLinejoin="round"
      fill="none"
      opacity="0.95"
    />
    <path
      d="M360,88 Q357,90 360,43 Q362,40 365,42 M390,88 Q387,90 390,43 Q392,40 395,42 M360,65 L390,66"
      stroke="#A1ADEB"
      strokeWidth="9"
      strokeLinecap="round"
      strokeLinejoin="round"
      fill="none"
      opacity="0.95"
    />
    <path
      d="M415,45 Q417,42 422,43 L445,45 M430,44 Q427,90 430,88"
      stroke="#FFF7AF"
      strokeWidth="9"
      strokeLinecap="round"
      strokeLinejoin="round"
      fill="none"
      opacity="0.95"
    />

    {/* Connecting flourish */}
    <path
      d="M52,83 Q62,80 78,88 M205,85 Q215,82 230,87"
      stroke="#FF9375"
      strokeWidth="3"
      strokeLinecap="round"
      fill="none"
      opacity="0.6"
    />
  </svg>
);

// Variation 17: Lowercase Friendly - Approachable and warm
// Soft lowercase letters, wide spacing, contemporary feel
export const LogoVariation17 = ({ size = 50, color = null }) => {
  const colors = color ? [color, color, color, color] : ["#FFF7AF", "#FF9375", "#E9D5FF", "#A1ADEB"];

  return (
    <svg
      width={size * 6.5}
      height={size * 0.9}
      viewBox="0 0 650 90"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      {/* "made" - lowercase with soft rounded forms */}
      <path
        d="M15,70 Q15,72 15,50 L20,55 L30,70 L35,55 L40,50 Q40,72 40,70"
        stroke={colors[0]}
        strokeWidth="6"
        strokeLinecap="round"
        strokeLinejoin="round"
        fill="none"
        opacity="0.95"
      />
      <path
        d="M85,70 Q85,72 85,50 Q85,48 90,48 Q95,48 95,58 Q95,72 95,70"
        stroke={colors[1]}
        strokeWidth="6"
        strokeLinecap="round"
        strokeLinejoin="round"
        fill="none"
        opacity="0.95"
      />
      <path
        d="M145,70 Q145,72 145,38 L155,38 Q170,40 170,58 Q170,70 155,72 L145,72"
        stroke={colors[2]}
        strokeWidth="6"
        strokeLinecap="round"
        strokeLinejoin="round"
        fill="none"
        opacity="0.95"
      />
      <path
        d="M225,50 Q225,48 230,48 Q245,48 245,58 Q245,72 230,72 Q225,72 225,70 Q225,48 225,50"
        stroke={colors[3]}
        strokeWidth="6"
        strokeLinecap="round"
        strokeLinejoin="round"
        fill="none"
        opacity="0.95"
      />

      {/* "right" - continuing lowercase style with word spacing */}
      <path
        d="M305,70 Q305,72 305,50 L315,50 Q325,50 325,58 Q325,62 320,64 L330,70"
        stroke={colors[0]}
        strokeWidth="6"
        strokeLinecap="round"
        strokeLinejoin="round"
        fill="none"
        opacity="0.95"
      />
      <path
        d="M370,70 Q370,72 370,38"
        stroke={colors[1]}
        strokeWidth="6"
        strokeLinecap="round"
        fill="none"
        opacity="0.95"
      />
      <path
        d="M425,50 Q425,48 430,48 Q445,48 445,58 Q445,72 430,72 Q425,70 425,60"
        stroke={colors[2]}
        strokeWidth="6"
        strokeLinecap="round"
        strokeLinejoin="round"
        fill="none"
        opacity="0.95"
      />
      <path
        d="M485,70 Q485,72 485,38 M505,70 Q505,72 505,50 M485,58 L505,58"
        stroke={colors[3]}
        strokeWidth="6"
        strokeLinecap="round"
        strokeLinejoin="round"
        fill="none"
        opacity="0.95"
      />
      <path
        d="M545,50 L555,70 M555,50 L545,70"
        stroke={colors[0]}
        strokeWidth="6"
        strokeLinecap="round"
        strokeLinejoin="round"
        fill="none"
        opacity="0.95"
      />
    </svg>
  );
};

// Variation 18: Lowercase Script - Flowing and casual
// Connected script letters, relaxed and friendly
export const LogoVariation18 = ({ size = 50, color = null }) => {
  const colors = color ? [color, color, color, color] : ["#FFF7AF", "#FF9375", "#E9D5FF", "#A1ADEB"];

  return (
    <svg
      width={size * 6.2}
      height={size}
      viewBox="0 0 620 100"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      {/* "made" - lowercase script */}
      <path
        d="M15,65 Q15,68 15,45 Q15,42 20,45 L25,55 L35,65 L40,55 L45,45 Q45,42 45,65"
        stroke={colors[0]}
        strokeWidth="6"
        strokeLinecap="round"
        strokeLinejoin="round"
        fill="none"
        opacity="0.95"
      />
      <path
        d="M90,65 Q90,68 90,45 Q90,42 95,42 Q105,42 105,52 Q105,68 105,65"
        stroke={colors[1]}
        strokeWidth="6"
        strokeLinecap="round"
        strokeLinejoin="round"
        fill="none"
        opacity="0.95"
      />
      <path
        d="M150,65 Q150,68 150,32 L160,32 Q178,35 178,52 Q178,65 160,68 L150,68"
        stroke={colors[2]}
        strokeWidth="6"
        strokeLinecap="round"
        strokeLinejoin="round"
        fill="none"
        opacity="0.95"
      />
      <path
        d="M225,45 Q225,42 230,42 Q248,42 248,52 Q248,68 230,68 Q225,68 225,65 Q225,42 225,45"
        stroke={colors[3]}
        strokeWidth="6"
        strokeLinecap="round"
        strokeLinejoin="round"
        fill="none"
        opacity="0.95"
      />

      {/* "right" - continuing lowercase script */}
      <path
        d="M300,65 Q300,68 300,45 Q300,42 305,45 L315,45 Q325,45 325,52 Q325,58 320,60 L330,65"
        stroke={colors[0]}
        strokeWidth="6"
        strokeLinecap="round"
        strokeLinejoin="round"
        fill="none"
        opacity="0.95"
      />
      <path
        d="M370,65 Q370,68 370,32"
        stroke={colors[1]}
        strokeWidth="6"
        strokeLinecap="round"
        fill="none"
        opacity="0.95"
      />
      <path
        d="M425,45 Q425,42 430,42 Q448,42 448,52 Q448,68 430,68 Q425,65 425,55"
        stroke={colors[2]}
        strokeWidth="6"
        strokeLinecap="round"
        strokeLinejoin="round"
        fill="none"
        opacity="0.95"
      />
      <path
        d="M490,65 Q490,68 490,32 M515,65 Q515,68 515,45 M490,52 L515,52"
        stroke={colors[3]}
        strokeWidth="6"
        strokeLinecap="round"
        strokeLinejoin="round"
        fill="none"
        opacity="0.95"
      />
      <path
        d="M555,45 L565,65 M565,45 L555,65"
        stroke={colors[0]}
        strokeWidth="6"
        strokeLinecap="round"
        strokeLinejoin="round"
        fill="none"
        opacity="0.95"
      />
    </svg>
  );
};

// Variation 19: Lowercase Geometric - Clean and modern
// Precise geometric forms, contemporary lowercase
export const LogoVariation19 = ({ size = 50, color = null }) => {
  const colors = color ? [color, color, color, color] : ["#FFF7AF", "#FF9375", "#E9D5FF", "#A1ADEB"];

  return (
    <svg
      width={size * 6.8}
      height={size * 0.85}
      viewBox="0 0 680 85"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      {/* "made" - geometric lowercase */}
      <path
        d="M15,65 L15,35 L25,55 L35,65 L45,55 L55,35 L55,65"
        stroke={colors[0]}
        strokeWidth="6"
        strokeLinecap="round"
        strokeLinejoin="round"
        fill="none"
        opacity="0.95"
      />
      <path
        d="M105,65 L105,35 Q105,32 110,32 Q115,32 115,45 L115,65"
        stroke={colors[1]}
        strokeWidth="6"
        strokeLinecap="round"
        strokeLinejoin="round"
        fill="none"
        opacity="0.95"
      />
      <path
        d="M165,65 L165,20 L180,20 Q200,22 200,45 Q200,65 180,68 L165,68"
        stroke={colors[2]}
        strokeWidth="6"
        strokeLinecap="round"
        strokeLinejoin="round"
        fill="none"
        opacity="0.95"
      />
      <path
        d="M250,35 Q250,32 255,32 Q275,32 275,45 Q275,68 255,68 Q250,68 250,65 L250,35"
        stroke={colors[3]}
        strokeWidth="6"
        strokeLinecap="round"
        strokeLinejoin="round"
        fill="none"
        opacity="0.95"
      />

      {/* "right" - continuing geometric lowercase */}
      <path
        d="M335,65 L335,35 L350,35 Q365,35 365,45 Q365,52 358,55 L370,65"
        stroke={colors[0]}
        strokeWidth="6"
        strokeLinecap="round"
        strokeLinejoin="round"
        fill="none"
        opacity="0.95"
      />
      <path
        d="M420,65 L420,20"
        stroke={colors[1]}
        strokeWidth="6"
        strokeLinecap="round"
        fill="none"
        opacity="0.95"
      />
      <path
        d="M480,35 Q480,32 485,32 Q505,32 505,45 Q505,68 485,68 Q480,65 480,50"
        stroke={colors[2]}
        strokeWidth="6"
        strokeLinecap="round"
        strokeLinejoin="round"
        fill="none"
        opacity="0.95"
      />
      <path
        d="M545,65 L545,20 M575,65 L575,35 M545,48 L575,48"
        stroke={colors[3]}
        strokeWidth="6"
        strokeLinecap="round"
        strokeLinejoin="round"
        fill="none"
        opacity="0.95"
      />
      <path
        d="M615,35 L625,65 M625,35 L615,65"
        stroke={colors[0]}
        strokeWidth="6"
        strokeLinecap="round"
        strokeLinejoin="round"
        fill="none"
        opacity="0.95"
      />
    </svg>
  );
};

// Variation 20: Lowercase Condensed - Tight and editorial
// Narrow letterforms, magazine-style
export const LogoVariation20 = ({ size = 50, color = null }) => {
  const colors = color ? [color, color, color, color] : ["#FFF7AF", "#FF9375", "#E9D5FF", "#A1ADEB"];

  return (
    <svg
      width={size * 5.5}
      height={size}
      viewBox="0 0 550 100"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      {/* "made" - condensed lowercase */}
      <path
        d="M12,75 L12,35 L18,55 L24,75 L30,55 L36,35 L36,75"
        stroke={colors[0]}
        strokeWidth="7"
        strokeLinecap="round"
        strokeLinejoin="round"
        fill="none"
        opacity="0.95"
      />
      <path
        d="M75,75 L75,35 Q75,32 80,32 Q85,32 85,48 L85,75"
        stroke={colors[1]}
        strokeWidth="7"
        strokeLinecap="round"
        strokeLinejoin="round"
        fill="none"
        opacity="0.95"
      />
      <path
        d="M120,75 L120,25 L130,25 Q145,27 145,50 Q145,75 130,78 L120,78"
        stroke={colors[2]}
        strokeWidth="7"
        strokeLinecap="round"
        strokeLinejoin="round"
        fill="none"
        opacity="0.95"
      />
      <path
        d="M180,35 Q180,32 185,32 Q200,32 200,50 Q200,78 185,78 Q180,78 180,75 L180,35"
        stroke={colors[3]}
        strokeWidth="7"
        strokeLinecap="round"
        strokeLinejoin="round"
        fill="none"
        opacity="0.95"
      />

      {/* "right" - continuing condensed lowercase */}
      <path
        d="M245,75 L245,35 L255,35 Q268,35 268,48 Q268,58 260,62 L272,75"
        stroke={colors[0]}
        strokeWidth="7"
        strokeLinecap="round"
        strokeLinejoin="round"
        fill="none"
        opacity="0.95"
      />
      <path
        d="M305,75 L305,25"
        stroke={colors[1]}
        strokeWidth="7"
        strokeLinecap="round"
        fill="none"
        opacity="0.95"
      />
      <path
        d="M350,35 Q350,32 355,32 Q370,32 370,50 Q370,78 355,78 Q350,75 350,58"
        stroke={colors[2]}
        strokeWidth="7"
        strokeLinecap="round"
        strokeLinejoin="round"
        fill="none"
        opacity="0.95"
      />
      <path
        d="M405,75 L405,25 M425,75 L425,35 M405,53 L425,53"
        stroke={colors[3]}
        strokeWidth="7"
        strokeLinecap="round"
        strokeLinejoin="round"
        fill="none"
        opacity="0.95"
      />
      <path
        d="M460,35 L470,75 M470,35 L460,75"
        stroke={colors[0]}
        strokeWidth="7"
        strokeLinecap="round"
        strokeLinejoin="round"
        fill="none"
        opacity="0.95"
      />
    </svg>
  );
};

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
    wave: Wave,
    squiggleLine: SquiggleLine,
    underlineDoodle: UnderlineDoodle,
    scribbleCircle: ScribbleCircle,
    arrowDoodle: ArrowDoodle,
    zigZagLine: ZigZagLine,
    loopDoodle: LoopDoodle,
    smileyFace: SmileyFace,
    smileyFaceTwo: SmileyFaceTwo,
    smileyFaceThree: SmileyFaceThree,
    smileyFaceFour: SmileyFaceFour,
    smileyFaceFive: SmileyFaceFive,
    smileyFaceSix: SmileyFaceSix,
    smileyFaceSeven: SmileyFaceSeven,
    smileyFaceEight: SmileyFaceEight,
    logoVariation1: LogoVariation1,
    logoVariation2: LogoVariation2,
    logoVariation3: LogoVariation3,
    logoVariation4: LogoVariation4,
    logoVariation5: LogoVariation5,
    logoVariation6: LogoVariation6,
    logoVariation7: LogoVariation7,
    logoVariation8: LogoVariation8,
    logoVariation9: LogoVariation9,
    logoVariation10: LogoVariation10,
    logoVariation11: LogoVariation11,
    logoVariation12: LogoVariation12,
    logoVariation13: LogoVariation13,
    logoVariation14: LogoVariation14,
    logoVariation15: LogoVariation15,
    logoVariation16: LogoVariation16
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

            <div className="col-6 col-md-4 col-lg-3 shape-demo">
              <div className="bg-white p-3 rounded-3 shadow-sm text-center h-100 d-flex flex-column">
                <div className="flex-grow-1 d-flex align-items-center justify-content-center mb-2">
                  <SquiggleLine color={BRAND_COLORS.teal} size={130} />
                </div>
                <p className="gs fw-semibold mb-0" style={{ color: BRAND_COLORS.slateDark }}>Squiggle Line</p>
              </div>
            </div>

            <div className="col-6 col-md-4 col-lg-3 shape-demo">
              <div className="bg-white p-3 rounded-3 shadow-sm text-center h-100 d-flex flex-column">
                <div className="flex-grow-1 d-flex align-items-center justify-content-center mb-2">
                  <UnderlineDoodle color={BRAND_COLORS.coral} size={120} />
                </div>
                <p className="gs fw-semibold mb-0" style={{ color: BRAND_COLORS.slateDark }}>Underline Doodle</p>
              </div>
            </div>

            <div className="col-6 col-md-4 col-lg-3 shape-demo">
              <div className="bg-white p-3 rounded-3 shadow-sm text-center h-100 d-flex flex-column">
                <div className="flex-grow-1 d-flex align-items-center justify-content-center mb-2">
                  <ScribbleCircle color={BRAND_COLORS.purple} size={90} />
                </div>
                <p className="gs fw-semibold mb-0" style={{ color: BRAND_COLORS.slateDark }}>Scribble Circle</p>
              </div>
            </div>

            <div className="col-6 col-md-4 col-lg-3 shape-demo">
              <div className="bg-white p-3 rounded-3 shadow-sm text-center h-100 d-flex flex-column">
                <div className="flex-grow-1 d-flex align-items-center justify-content-center mb-2">
                  <ArrowDoodle color={BRAND_COLORS.yellow} size={110} direction="right" />
                </div>
                <p className="gs fw-semibold mb-0" style={{ color: BRAND_COLORS.slateDark }}>Arrow Doodle</p>
              </div>
            </div>

            <div className="col-6 col-md-4 col-lg-3 shape-demo">
              <div className="bg-white p-3 rounded-3 shadow-sm text-center h-100 d-flex flex-column">
                <div className="flex-grow-1 d-flex align-items-center justify-content-center mb-2">
                  <ZigZagLine color={BRAND_COLORS.tealDark} size={110} />
                </div>
                <p className="gs fw-semibold mb-0" style={{ color: BRAND_COLORS.slateDark }}>Zigzag Line</p>
              </div>
            </div>

            <div className="col-6 col-md-4 col-lg-3 shape-demo">
              <div className="bg-white p-3 rounded-3 shadow-sm text-center h-100 d-flex flex-column">
                <div className="flex-grow-1 d-flex align-items-center justify-content-center mb-2">
                  <LoopDoodle color={BRAND_COLORS.coral} size={80} />
                </div>
                <p className="gs fw-semibold mb-0" style={{ color: BRAND_COLORS.slateDark }}>Loop Doodle</p>
              </div>
            </div>

          </div>
        </section>

        {/* Logo Variations Section */}
        <section className="py-5 px-4 bg-white">
          <div className="text-center mb-5">
            <h2 className="display-6 fw-bold mb-3 lora" style={{ color: BRAND_COLORS.tealDark }}>
              Logo Variations
            </h2>
            <p className="text-muted gs">
              5 professional logo concepts for Made Right Studio
            </p>
          </div>

          <div className="row g-4" ref={showcaseRef}>
            <div className="col-12 col-md-6 col-lg-4 shape-demo">
              <div className="p-4 rounded-3 text-center h-100 d-flex flex-column" style={{ background: BRAND_COLORS.tealDark }}>
                <div className="flex-grow-1 d-flex align-items-center justify-content-center mb-3" style={{ minHeight: '140px' }}>
                  <LogoVariation1 size={80} />
                </div>
                <h4 className="fw-bold mb-2" style={{ color: BRAND_COLORS.yellow, fontSize: '18px' }}>Variation 1: Refined Winking Face</h4>
                <p className="gs mb-2" style={{ color: BRAND_COLORS.slateLight, fontSize: '13px', lineHeight: '1.5' }}>
                  <strong>Pros:</strong> Friendly, approachable, yellow eyes pop on dark backgrounds, better proportions.
                </p>
                <p className="gs mb-2" style={{ color: BRAND_COLORS.slateLight, fontSize: '13px', lineHeight: '1.5' }}>
                  <strong>Cons:</strong> Still casual for web dev studio.
                </p>
                <p className="gs" style={{ color: BRAND_COLORS.coral, fontSize: '12px', fontWeight: '600' }}>
                  Best for: Creative agencies
                </p>
              </div>
            </div>

            <div className="col-12 col-md-6 col-lg-4 shape-demo">
              <div className="p-4 rounded-3 text-center h-100 d-flex flex-column" style={{ background: BRAND_COLORS.tealDark }}>
                <div className="flex-grow-1 d-flex align-items-center justify-content-center mb-3" style={{ minHeight: '140px' }}>
                  <LogoVariation3 size={80} />
                </div>
                <h4 className="fw-bold mb-2" style={{ color: BRAND_COLORS.yellow, fontSize: '18px' }}>Variation 3: Minimal Geometric</h4>
                <p className="gs mb-2" style={{ color: BRAND_COLORS.slateLight, fontSize: '13px', lineHeight: '1.5' }}>
                  <strong>Pros:</strong> Clean, modern, sophisticated, asymmetric for personality, strong visual weight.
                </p>
                <p className="gs mb-2" style={{ color: BRAND_COLORS.slateLight, fontSize: '13px', lineHeight: '1.5' }}>
                  <strong>Cons:</strong> Could feel generic.
                </p>
                <p className="gs" style={{ color: BRAND_COLORS.coral, fontSize: '12px', fontWeight: '600' }}>
                  Best for: Warmth + credibility balance
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Middle Child-Inspired Logo Variations Section */}
        <section className="py-5 px-4" style={{ background: '#f8f9fa' }}>
          <div className="text-center mb-5">
            <h2 className="display-6 fw-bold mb-3 lora" style={{ color: BRAND_COLORS.tealDark }}>
              Middle Child-Inspired Logos
            </h2>
            <p className="text-muted gs">
              Bold, playful, hand-drawn restaurant aesthetic variations
            </p>
          </div>

          <div className="row g-4" ref={showcaseRef}>
            <div className="col-12 col-md-6 col-lg-4 shape-demo">
              <div className="p-4 rounded-3 text-center h-100 d-flex flex-column" style={{ background: BRAND_COLORS.tealDark }}>
                <div className="flex-grow-1 d-flex align-items-center justify-content-center mb-3" style={{ minHeight: '140px' }}>
                  <LogoVariation6 size={50} />
                </div>
                <h4 className="fw-bold mb-2" style={{ color: BRAND_COLORS.yellow, fontSize: '18px' }}>Variation 6: Chunky Hand-drawn MR</h4>
                <p className="gs mb-2" style={{ color: BRAND_COLORS.slateLight, fontSize: '13px', lineHeight: '1.5' }}>
                  <strong>Pros:</strong> Bold, casual, approachable, thick strokes create confidence, playful underline.
                </p>
                <p className="gs mb-2" style={{ color: BRAND_COLORS.slateLight, fontSize: '13px', lineHeight: '1.5' }}>
                  <strong>Cons:</strong> Very casual, may feel too restaurant-like.
                </p>
                <p className="gs" style={{ color: BRAND_COLORS.coral, fontSize: '12px', fontWeight: '600' }}>
                  Best for: Fun, casual brand personality
                </p>
              </div>
            </div>

            <div className="col-12 col-md-6 col-lg-4 shape-demo">
              <div className="p-4 rounded-3 text-center h-100 d-flex flex-column" style={{ background: BRAND_COLORS.tealDark }}>
                <div className="flex-grow-1 d-flex align-items-center justify-content-center mb-3" style={{ minHeight: '140px' }}>
                  <LogoVariation7 size={80} />
                </div>
                <h4 className="fw-bold mb-2" style={{ color: BRAND_COLORS.yellow, fontSize: '18px' }}>Variation 7: Organic Blob Badge</h4>
                <p className="gs mb-2" style={{ color: BRAND_COLORS.slateLight, fontSize: '13px', lineHeight: '1.5' }}>
                  <strong>Pros:</strong> Unique organic shape, bold outline creates presence, memorable icon.
                </p>
                <p className="gs mb-2" style={{ color: BRAND_COLORS.slateLight, fontSize: '13px', lineHeight: '1.5' }}>
                  <strong>Cons:</strong> Abstract letterforms inside.
                </p>
                <p className="gs" style={{ color: BRAND_COLORS.coral, fontSize: '12px', fontWeight: '600' }}>
                  Best for: Distinctive brand mark
                </p>
              </div>
            </div>

            <div className="col-12 col-md-6 col-lg-4 shape-demo">
              <div className="p-4 rounded-3 text-center h-100 d-flex flex-column" style={{ background: BRAND_COLORS.tealDark }}>
                <div className="flex-grow-1 d-flex align-items-center justify-content-center mb-3" style={{ minHeight: '140px' }}>
                  <LogoVariation8 size={60} />
                </div>
                <h4 className="fw-bold mb-2" style={{ color: BRAND_COLORS.yellow, fontSize: '18px' }}>Variation 8: Stacked Wordmark</h4>
                <p className="gs mb-2" style={{ color: BRAND_COLORS.slateLight, fontSize: '13px', lineHeight: '1.5' }}>
                  <strong>Pros:</strong> Clear brand name, bold strokes, decorative blob accent, readable.
                </p>
                <p className="gs mb-2" style={{ color: BRAND_COLORS.slateLight, fontSize: '13px', lineHeight: '1.5' }}>
                  <strong>Cons:</strong> Wider horizontal footprint.
                </p>
                <p className="gs" style={{ color: BRAND_COLORS.coral, fontSize: '12px', fontWeight: '600' }}>
                  Best for: Full brand name display
                </p>
              </div>
            </div>

            <div className="col-12 col-md-6 col-lg-4 shape-demo">
              <div className="p-4 rounded-3 text-center h-100 d-flex flex-column" style={{ background: BRAND_COLORS.tealDark }}>
                <div className="flex-grow-1 d-flex align-items-center justify-content-center mb-3" style={{ minHeight: '140px' }}>
                  <LogoVariation9 size={80} />
                </div>
                <h4 className="fw-bold mb-2" style={{ color: BRAND_COLORS.yellow, fontSize: '18px' }}>Variation 9: Framed Badge</h4>
                <p className="gs mb-2" style={{ color: BRAND_COLORS.slateLight, fontSize: '13px', lineHeight: '1.5' }}>
                  <strong>Pros:</strong> Structured frame, playful splat accent, balanced composition, hand-drawn charm.
                </p>
                <p className="gs mb-2" style={{ color: BRAND_COLORS.slateLight, fontSize: '13px', lineHeight: '1.5' }}>
                  <strong>Cons:</strong> Busy with multiple elements.
                </p>
                <p className="gs" style={{ color: BRAND_COLORS.coral, fontSize: '12px', fontWeight: '600' }}>
                  Best for: Playful professionalism
                </p>
              </div>
            </div>

            <div className="col-12 col-md-6 col-lg-4 shape-demo">
              <div className="p-4 rounded-3 text-center h-100 d-flex flex-column" style={{ background: BRAND_COLORS.tealDark }}>
                <div className="flex-grow-1 d-flex align-items-center justify-content-center mb-3" style={{ minHeight: '140px' }}>
                  <LogoVariation10 size={60} />
                </div>
                <h4 className="fw-bold mb-2" style={{ color: BRAND_COLORS.yellow, fontSize: '18px' }}>Variation 10: Stamp Style</h4>
                <p className="gs mb-2" style={{ color: BRAND_COLORS.slateLight, fontSize: '13px', lineHeight: '1.5' }}>
                  <strong>Pros:</strong> Compact, stamp-like aesthetic, bold condensed type, corner accents add charm.
                </p>
                <p className="gs mb-2" style={{ color: BRAND_COLORS.slateLight, fontSize: '13px', lineHeight: '1.5' }}>
                  <strong>Cons:</strong> Dashed border may not scale well.
                </p>
                <p className="gs" style={{ color: BRAND_COLORS.coral, fontSize: '12px', fontWeight: '600' }}>
                  Best for: Vintage-modern fusion
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Hand-Drawn Typography Variations - "MADE RIGHT" Full Wordmarks */}
        <section className="py-5 px-4 bg-white">
          <div className="text-center mb-5">
            <h2 className="display-6 fw-bold mb-3 lora" style={{ color: BRAND_COLORS.tealDark }}>
              "MADE RIGHT" Typography Variations
            </h2>
            <p className="text-muted gs">
              Full wordmark explorations with diverse hand-drawn styles
            </p>
          </div>

          <div className="row g-4">
            <div className="col-12 col-md-6 col-lg-4 shape-demo">
              <div className="p-4 rounded-3 text-center h-100 d-flex flex-column" style={{ background: BRAND_COLORS.tealDark }}>
                <div className="flex-grow-1 d-flex align-items-center justify-content-center mb-3" style={{ minHeight: '140px' }}>
                  <LogoVariation11 size={28} />
                </div>
                <h4 className="fw-bold mb-2" style={{ color: BRAND_COLORS.yellow, fontSize: '18px' }}>Variation 11: Psychedelic Wavy</h4>
                <p className="gs mb-2" style={{ color: BRAND_COLORS.lavender, fontSize: '12px', fontStyle: 'italic' }}>
                  Online Ceramics / Grateful Dead poster aesthetic
                </p>
                <p className="gs mb-2" style={{ color: BRAND_COLORS.slateLight, fontSize: '13px', lineHeight: '1.5' }}>
                  <strong>Pros:</strong> Authentic '60s psychedelia, wobbly baselines, retro counterculture energy, unique personality.
                </p>
                <p className="gs mb-2" style={{ color: BRAND_COLORS.slateLight, fontSize: '13px', lineHeight: '1.5' }}>
                  <strong>Cons:</strong> Very niche, may not suit corporate clients.
                </p>
                <p className="gs" style={{ color: BRAND_COLORS.coral, fontSize: '12px', fontWeight: '600' }}>
                  Best for: Alternative creative brands
                </p>
              </div>
            </div>

            <div className="col-12 col-md-6 col-lg-4 shape-demo">
              <div className="p-4 rounded-3 text-center h-100 d-flex flex-column" style={{ background: BRAND_COLORS.tealDark }}>
                <div className="flex-grow-1 d-flex align-items-center justify-content-center mb-3" style={{ minHeight: '140px' }}>
                  <LogoVariation12 size={22} />
                </div>
                <h4 className="fw-bold mb-2" style={{ color: BRAND_COLORS.yellow, fontSize: '18px' }}>Variation 12: Spaced Modern Sans</h4>
                <p className="gs mb-2" style={{ color: BRAND_COLORS.lavender, fontSize: '12px', fontStyle: 'italic' }}>
                  Self Aware Studio aesthetic
                </p>
                <p className="gs mb-2" style={{ color: BRAND_COLORS.slateLight, fontSize: '13px', lineHeight: '1.5' }}>
                  <strong>Pros:</strong> Wide letterspacing, breathing room, contemporary clean, sophisticated minimal.
                </p>
                <p className="gs mb-2" style={{ color: BRAND_COLORS.slateLight, fontSize: '13px', lineHeight: '1.5' }}>
                  <strong>Cons:</strong> Requires horizontal space, less personality.
                </p>
                <p className="gs" style={{ color: BRAND_COLORS.coral, fontSize: '12px', fontWeight: '600' }}>
                  Best for: Modern professional studios
                </p>
              </div>
            </div>

            <div className="col-12 col-md-6 col-lg-4 shape-demo">
              <div className="p-4 rounded-3 text-center h-100 d-flex flex-column" style={{ background: BRAND_COLORS.tealDark }}>
                <div className="flex-grow-1 d-flex align-items-center justify-content-center mb-3" style={{ minHeight: '140px' }}>
                  <LogoVariation13 size={28} />
                </div>
                <h4 className="fw-bold mb-2" style={{ color: BRAND_COLORS.yellow, fontSize: '18px' }}>Variation 13: Friendly Rounded</h4>
                <p className="gs mb-2" style={{ color: BRAND_COLORS.lavender, fontSize: '12px', fontStyle: 'italic' }}>
                  Plank.co Montreal studio aesthetic
                </p>
                <p className="gs mb-2" style={{ color: BRAND_COLORS.slateLight, fontSize: '13px', lineHeight: '1.5' }}>
                  <strong>Pros:</strong> Organic rounded sans, approachable friendly, geometric with soft edges.
                </p>
                <p className="gs mb-2" style={{ color: BRAND_COLORS.slateLight, fontSize: '13px', lineHeight: '1.5' }}>
                  <strong>Cons:</strong> May feel too soft or casual.
                </p>
                <p className="gs" style={{ color: BRAND_COLORS.coral, fontSize: '12px', fontWeight: '600' }}>
                  Best for: Accessible design studios
                </p>
              </div>
            </div>

            <div className="col-12 col-md-6 col-lg-4 shape-demo">
              <div className="p-4 rounded-3 text-center h-100 d-flex flex-column" style={{ background: BRAND_COLORS.tealDark }}>
                <div className="flex-grow-1 d-flex align-items-center justify-content-center mb-3" style={{ minHeight: '140px' }}>
                  <LogoVariation14 size={38} />
                </div>
                <h4 className="fw-bold mb-2" style={{ color: BRAND_COLORS.yellow, fontSize: '18px' }}>Variation 14: Chunky Marker</h4>
                <p className="gs mb-2" style={{ color: BRAND_COLORS.lavender, fontSize: '12px', fontStyle: 'italic' }}>
                  Bold casual hand-drawn
                </p>
                <p className="gs mb-2" style={{ color: BRAND_COLORS.slateLight, fontSize: '13px', lineHeight: '1.5' }}>
                  <strong>Pros:</strong> Fat marker strokes, playful imperfect, energetic casual, fun dots.
                </p>
                <p className="gs mb-2" style={{ color: BRAND_COLORS.slateLight, fontSize: '13px', lineHeight: '1.5' }}>
                  <strong>Cons:</strong> Very casual, chunky strokes need space.
                </p>
                <p className="gs" style={{ color: BRAND_COLORS.coral, fontSize: '12px', fontWeight: '600' }}>
                  Best for: Playful creative brands
                </p>
              </div>
            </div>

            <div className="col-12 col-md-6 col-lg-4 shape-demo">
              <div className="p-4 rounded-3 text-center h-100 d-flex flex-column" style={{ background: BRAND_COLORS.tealDark }}>
                <div className="flex-grow-1 d-flex align-items-center justify-content-center mb-3" style={{ minHeight: '140px' }}>
                  <LogoVariation15 size={35} />
                </div>
                <h4 className="fw-bold mb-2" style={{ color: BRAND_COLORS.yellow, fontSize: '18px' }}>Variation 15: Condensed Tall</h4>
                <p className="gs mb-2" style={{ color: BRAND_COLORS.lavender, fontSize: '12px', fontStyle: 'italic' }}>
                  Modern editorial magazine-style
                </p>
                <p className="gs mb-2" style={{ color: BRAND_COLORS.slateLight, fontSize: '13px', lineHeight: '1.5' }}>
                  <strong>Pros:</strong> Narrow condensed forms, sophisticated, editorial elegance, vertical impact.
                </p>
                <p className="gs mb-2" style={{ color: BRAND_COLORS.slateLight, fontSize: '13px', lineHeight: '1.5' }}>
                  <strong>Cons:</strong> Less readable at small sizes.
                </p>
                <p className="gs" style={{ color: BRAND_COLORS.coral, fontSize: '12px', fontWeight: '600' }}>
                  Best for: Editorial-focused studios
                </p>
              </div>
            </div>

            <div className="col-12 col-md-6 col-lg-4 shape-demo">
              <div className="p-4 rounded-3 text-center h-100 d-flex flex-column" style={{ background: BRAND_COLORS.tealDark }}>
                <div className="flex-grow-1 d-flex align-items-center justify-content-center mb-3" style={{ minHeight: '140px' }}>
                  <LogoVariation16 size={35} />
                </div>
                <h4 className="fw-bold mb-2" style={{ color: BRAND_COLORS.yellow, fontSize: '18px' }}>Variation 16: Brush Script</h4>
                <p className="gs mb-2" style={{ color: BRAND_COLORS.lavender, fontSize: '12px', fontStyle: 'italic' }}>
                  Flowing connected lettering
                </p>
                <p className="gs mb-2" style={{ color: BRAND_COLORS.slateLight, fontSize: '13px', lineHeight: '1.5' }}>
                  <strong>Pros:</strong> Casual brush lettering, connected strokes, energetic flow, organic personality.
                </p>
                <p className="gs mb-2" style={{ color: BRAND_COLORS.slateLight, fontSize: '13px', lineHeight: '1.5' }}>
                  <strong>Cons:</strong> Very casual, less professional.
                </p>
                <p className="gs" style={{ color: BRAND_COLORS.coral, fontSize: '12px', fontWeight: '600' }}>
                  Best for: Artisanal handmade brands
                </p>
              </div>
            </div>
          </div>
        </section>

      </div>
    </div>
  );
}

export default Shapes;
