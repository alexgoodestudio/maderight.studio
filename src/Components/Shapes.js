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
    logoVariation10: LogoVariation10
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

            <div className="col-6 col-md-4 col-lg-3 shape-demo">
              <div className="bg-white p-3 rounded-3 shadow-sm text-center h-100 d-flex flex-column">
                <div className="flex-grow-1 d-flex align-items-center justify-content-center mb-2">
                  <SmileyFace size={110} />
                </div>
                <p className="gs fw-semibold mb-0" style={{ color: BRAND_COLORS.slateDark }}>Smiley Face</p>
              </div>
            </div>

            <div className="col-6 col-md-4 col-lg-3 shape-demo">
              <div className="bg-white p-3 rounded-3 shadow-sm text-center h-100 d-flex flex-column">
                <div className="flex-grow-1 d-flex align-items-center justify-content-center mb-2">
                  <SmileyFaceTwo size={110} />
                </div>
                <p className="gs fw-semibold mb-0" style={{ color: BRAND_COLORS.slateDark }}>Smiley Face 2</p>
              </div>
            </div>

            <div className="col-6 col-md-4 col-lg-3 shape-demo">
              <div className="bg-white p-3 rounded-3 shadow-sm text-center h-100 d-flex flex-column">
                <div className="flex-grow-1 d-flex align-items-center justify-content-center mb-2">
                  <SmileyFaceThree size={110} />
                </div>
                <p className="gs fw-semibold mb-0" style={{ color: BRAND_COLORS.slateDark }}>Smiley Face 3</p>
              </div>
            </div>

            <div className="col-6 col-md-4 col-lg-3 shape-demo">
              <div className="bg-white p-3 rounded-3 shadow-sm text-center h-100 d-flex flex-column">
                <div className="flex-grow-1 d-flex align-items-center justify-content-center mb-2">
                  <SmileyFaceFour size={110} />
                </div>
                <p className="gs fw-semibold mb-0" style={{ color: BRAND_COLORS.slateDark }}>Smiley Face 4</p>
              </div>
            </div>

            <div className="col-6 col-md-4 col-lg-3 shape-demo">
              <div className="bg-white p-3 rounded-3 shadow-sm text-center h-100 d-flex flex-column">
                <div className="flex-grow-1 d-flex align-items-center justify-content-center mb-2">
                  <SmileyFaceFive size={110} />
                </div>
                <p className="gs fw-semibold mb-0" style={{ color: BRAND_COLORS.slateDark }}>Winking Face</p>
              </div>
            </div>

            <div className="col-6 col-md-4 col-lg-3 shape-demo">
              <div className="bg-white p-3 rounded-3 shadow-sm text-center h-100 d-flex flex-column">
                <div className="flex-grow-1 d-flex align-items-center justify-content-center mb-2">
                  <SmileyFaceSix size={110} />
                </div>
                <p className="gs fw-semibold mb-0" style={{ color: BRAND_COLORS.slateDark }}>Surprised Face</p>
              </div>
            </div>

            <div className="col-6 col-md-4 col-lg-3 shape-demo">
              <div className="bg-white p-3 rounded-3 shadow-sm text-center h-100 d-flex flex-column">
                <div className="flex-grow-1 d-flex align-items-center justify-content-center mb-2">
                  <SmileyFaceSeven size={110} />
                </div>
                <p className="gs fw-semibold mb-0" style={{ color: BRAND_COLORS.slateDark }}>Silly Face</p>
              </div>
            </div>

            <div className="col-6 col-md-4 col-lg-3 shape-demo">
              <div className="bg-white p-3 rounded-3 shadow-sm text-center h-100 d-flex flex-column">
                <div className="flex-grow-1 d-flex align-items-center justify-content-center mb-2">
                  <SmileyFaceEight size={110} />
                </div>
                <p className="gs fw-semibold mb-0" style={{ color: BRAND_COLORS.slateDark }}>Goofy Face</p>
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
                  <LogoVariation2 size={80} />
                </div>
                <h4 className="fw-bold mb-2" style={{ color: BRAND_COLORS.yellow, fontSize: '18px' }}>Variation 2: "MR" Monogram</h4>
                <p className="gs mb-2" style={{ color: BRAND_COLORS.slateLight, fontSize: '13px', lineHeight: '1.5' }}>
                  <strong>Pros:</strong> Professional, memorable initials, uses brand shapes, sophisticated.
                </p>
                <p className="gs mb-2" style={{ color: BRAND_COLORS.slateLight, fontSize: '13px', lineHeight: '1.5' }}>
                  <strong>Cons:</strong> Less immediately friendly.
                </p>
                <p className="gs" style={{ color: BRAND_COLORS.coral, fontSize: '12px', fontWeight: '600' }}>
                  Best for: Established studios
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

            <div className="col-12 col-md-6 col-lg-4 shape-demo">
              <div className="p-4 rounded-3 text-center h-100 d-flex flex-column" style={{ background: BRAND_COLORS.tealDark }}>
                <div className="flex-grow-1 d-flex align-items-center justify-content-center mb-3" style={{ minHeight: '140px' }}>
                  <LogoVariation4 size={60} />
                </div>
                <h4 className="fw-bold mb-2" style={{ color: BRAND_COLORS.yellow, fontSize: '18px' }}>Variation 4: Wordmark + Icon</h4>
                <p className="gs mb-2" style={{ color: BRAND_COLORS.slateLight, fontSize: '13px', lineHeight: '1.5' }}>
                  <strong>Pros:</strong> Most professional, clear branding, strong brand recall, readable.
                </p>
                <p className="gs mb-2" style={{ color: BRAND_COLORS.slateLight, fontSize: '13px', lineHeight: '1.5' }}>
                  <strong>Cons:</strong> Wider footprint.
                </p>
                <p className="gs" style={{ color: BRAND_COLORS.coral, fontSize: '12px', fontWeight: '600' }}>
                  Best for: Professional credibility
                </p>
              </div>
            </div>

            <div className="col-12 col-md-6 col-lg-4 shape-demo">
              <div className="p-4 rounded-3 text-center h-100 d-flex flex-column" style={{ background: BRAND_COLORS.tealDark }}>
                <div className="flex-grow-1 d-flex align-items-center justify-content-center mb-3" style={{ minHeight: '140px' }}>
                  <LogoVariation5 size={80} />
                </div>
                <h4 className="fw-bold mb-2" style={{ color: BRAND_COLORS.yellow, fontSize: '18px' }}>Variation 5: Stacked Badge</h4>
                <p className="gs mb-2" style={{ color: BRAND_COLORS.slateLight, fontSize: '13px', lineHeight: '1.5' }}>
                  <strong>Pros:</strong> Unique, memorable, suggests craftsmanship/quality, strong structure, scales well.
                </p>
                <p className="gs mb-2" style={{ color: BRAND_COLORS.slateLight, fontSize: '13px', lineHeight: '1.5' }}>
                  <strong>Cons:</strong> Abstract, less "face-like".
                </p>
                <p className="gs" style={{ color: BRAND_COLORS.coral, fontSize: '12px', fontWeight: '600' }}>
                  Best for: Craft & precision emphasis
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

      </div>
    </div>
  );
}

export default Shapes;
