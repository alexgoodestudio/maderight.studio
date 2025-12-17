import { useState } from "react";
import {
  LogoVariation11,
  LogoVariation12,
  LogoVariation13,
  LogoVariation14,
  LogoVariation15,
  LogoVariation16,
  LogoVariation17,
  LogoVariation18,
  LogoVariation19,
  LogoVariation20
} from './Shapes';

// Logo Variation 1: Refined Winking Face - More professional proportions
const LogoVariation1 = ({ size = 50 }) => (
  <svg
    width={size}
    height={size}
    viewBox="0 0 200 200"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    {/* Subtle background circle for visual weight */}
    <circle cx="100" cy="100" r="90" fill="#0F766E" opacity="0.3" />

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

// Logo Variation 2: Abstract "MR" Monogram with playful shapes
const LogoVariation2 = ({ size = 50 }) => (
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

// Logo Variation 3: Minimal Geometric Face - More sophisticated
const LogoVariation3 = ({ size = 50 }) => (
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

// Logo Variation 4: Wordmark + Icon Combo - Professional
const LogoVariation4 = ({ size = 50 }) => (
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

// Logo Variation 5: Stacked Shapes Badge - Bold and memorable
const LogoVariation5 = ({ size = 50 }) => (
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

// Demo component to preview all variations (for testing - remove in production)
export const LogoShowcase = () => (
  <div style={{
    padding: '40px',
    background: '#134E4A',
    display: 'grid',
    gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))',
    gap: '30px',
    fontFamily: 'system-ui, sans-serif'
  }}>
    <div style={{ background: 'rgba(255,255,255,0.05)', padding: '30px', borderRadius: '12px', textAlign: 'center' }}>
      <div style={{ background: '#134E4A', padding: '20px', borderRadius: '8px', marginBottom: '15px', display: 'flex', justifyContent: 'center', alignItems: 'center', height: '100px' }}>
        <LogoVariation1 size={55} />
      </div>
      <h3 style={{ color: '#FFF7AF', fontSize: '16px', fontWeight: '600', marginBottom: '8px' }}>Variation 1: Refined Winking Face</h3>
      <p style={{ color: '#E0E7E5', fontSize: '13px', lineHeight: '1.5', margin: 0 }}>
        <strong>Pros:</strong> Friendly, approachable, maintains playful aesthetic with better proportions. Yellow eyes pop against dark background.<br/>
        <strong>Cons:</strong> Still very casual for a web dev studio.<br/>
        <strong>Best for:</strong> Creative agencies targeting fun brands
      </p>
    </div>

    <div style={{ background: 'rgba(255,255,255,0.05)', padding: '30px', borderRadius: '12px', textAlign: 'center' }}>
      <div style={{ background: '#134E4A', padding: '20px', borderRadius: '8px', marginBottom: '15px', display: 'flex', justifyContent: 'center', alignItems: 'center', height: '100px' }}>
        <LogoVariation2 size={55} />
      </div>
      <h3 style={{ color: '#FFF7AF', fontSize: '16px', fontWeight: '600', marginBottom: '8px' }}>Variation 2: "MR" Monogram</h3>
      <p style={{ color: '#E0E7E5', fontSize: '13px', lineHeight: '1.5', margin: 0 }}>
        <strong>Pros:</strong> Professional, memorable initials, uses brand shapes, sophisticated.<br/>
        <strong>Cons:</strong> Less immediately friendly, may look like unrelated brand.<br/>
        <strong>Best for:</strong> Established studios wanting polish + personality
      </p>
    </div>

    <div style={{ background: 'rgba(255,255,255,0.05)', padding: '30px', borderRadius: '12px', textAlign: 'center' }}>
      <div style={{ background: '#134E4A', padding: '20px', borderRadius: '8px', marginBottom: '15px', display: 'flex', justifyContent: 'center', alignItems: 'center', height: '100px' }}>
        <LogoVariation3 size={55} />
      </div>
      <h3 style={{ color: '#FFF7AF', fontSize: '16px', fontWeight: '600', marginBottom: '8px' }}>Variation 3: Minimal Geometric</h3>
      <p style={{ color: '#E0E7E5', fontSize: '13px', lineHeight: '1.5', margin: 0 }}>
        <strong>Pros:</strong> Clean, modern, sophisticated, asymmetric for interest, strong visual weight.<br/>
        <strong>Cons:</strong> Less distinctive, could feel generic.<br/>
        <strong>Best for:</strong> Professional studios balancing warmth + credibility
      </p>
    </div>

    <div style={{ background: 'rgba(255,255,255,0.05)', padding: '30px', borderRadius: '12px', textAlign: 'center' }}>
      <div style={{ background: '#134E4A', padding: '20px', borderRadius: '8px', marginBottom: '15px', display: 'flex', justifyContent: 'center', alignItems: 'center', height: '100px' }}>
        <LogoVariation4 size={45} />
      </div>
      <h3 style={{ color: '#FFF7AF', fontSize: '16px', fontWeight: '600', marginBottom: '8px' }}>Variation 4: Wordmark + Icon</h3>
      <p style={{ color: '#E0E7E5', fontSize: '13px', lineHeight: '1.5', margin: 0 }}>
        <strong>Pros:</strong> Most professional, clear branding, compact icon reinforces identity, readable.<br/>
        <strong>Cons:</strong> Wider footprint, may compete with center "Made Right" text.<br/>
        <strong>Best for:</strong> Studios wanting strong brand recall + professionalism
      </p>
    </div>

    <div style={{ background: 'rgba(255,255,255,0.05)', padding: '30px', borderRadius: '12px', textAlign: 'center' }}>
      <div style={{ background: '#134E4A', padding: '20px', borderRadius: '8px', marginBottom: '15px', display: 'flex', justifyContent: 'center', alignItems: 'center', height: '100px' }}>
        <LogoVariation5 size={55} />
      </div>
      <h3 style={{ color: '#FFF7AF', fontSize: '16px', fontWeight: '600', marginBottom: '8px' }}>Variation 5: Stacked Badge</h3>
      <p style={{ color: '#E0E7E5', fontSize: '13px', lineHeight: '1.5', margin: 0 }}>
        <strong>Pros:</strong> Unique, memorable, suggests craftsmanship/quality, strong structure, works at small sizes.<br/>
        <strong>Cons:</strong> Abstract, less immediately "face-like".<br/>
        <strong>Best for:</strong> Studios emphasizing craft, precision, and quality work
      </p>
    </div>

    <div style={{ background: 'rgba(255,255,255,0.05)', padding: '30px', borderRadius: '12px', textAlign: 'center' }}>
      <div style={{ background: '#134E4A', padding: '20px', borderRadius: '8px', marginBottom: '15px', display: 'flex', justifyContent: 'center', alignItems: 'center', height: '100px' }}>
        <LogoVariation11 size={45} />
      </div>
      <h3 style={{ color: '#FFF7AF', fontSize: '16px', fontWeight: '600', marginBottom: '8px' }}>Variation 11: Psychedelic Wobbly</h3>
      <p style={{ color: '#E0E7E5', fontSize: '13px', lineHeight: '1.5', margin: 0 }}>
        <strong>Inspired by:</strong> Online Ceramics<br/>
        <strong>Pros:</strong> Unique personality, organic wavy forms, retro psychedelic vibe, approachable.<br/>
        <strong>Cons:</strong> May feel too casual or niche for corporate clients.<br/>
        <strong>Best for:</strong> Creative studios embracing counterculture, artisanal brands
      </p>
    </div>

    <div style={{ background: 'rgba(255,255,255,0.05)', padding: '30px', borderRadius: '12px', textAlign: 'center' }}>
      <div style={{ background: '#134E4A', padding: '20px', borderRadius: '8px', marginBottom: '15px', display: 'flex', justifyContent: 'center', alignItems: 'center', height: '100px' }}>
        <LogoVariation12 size={50} />
      </div>
      <h3 style={{ color: '#FFF7AF', fontSize: '16px', fontWeight: '600', marginBottom: '8px' }}>Variation 12: Condensed Bold</h3>
      <p style={{ color: '#E0E7E5', fontSize: '13px', lineHeight: '1.5', margin: 0 }}>
        <strong>Inspired by:</strong> Self Aware Studio<br/>
        <strong>Pros:</strong> Strong, confident, modern, compact footprint, professional weight.<br/>
        <strong>Cons:</strong> Less playful, might feel too serious.<br/>
        <strong>Best for:</strong> Studios wanting bold confidence with minimal space
      </p>
    </div>

    <div style={{ background: 'rgba(255,255,255,0.05)', padding: '30px', borderRadius: '12px', textAlign: 'center' }}>
      <div style={{ background: '#134E4A', padding: '20px', borderRadius: '8px', marginBottom: '15px', display: 'flex', justifyContent: 'center', alignItems: 'center', height: '100px' }}>
        <LogoVariation13 size={42} />
      </div>
      <h3 style={{ color: '#FFF7AF', fontSize: '16px', fontWeight: '600', marginBottom: '8px' }}>Variation 13: Sketchy Organic</h3>
      <p style={{ color: '#E0E7E5', fontSize: '13px', lineHeight: '1.5', margin: 0 }}>
        <strong>Inspired by:</strong> Plank.co<br/>
        <strong>Pros:</strong> Hand-crafted feel, layered sketch lines add depth, human touch, artistic.<br/>
        <strong>Cons:</strong> May appear unfinished to some, needs larger size.<br/>
        <strong>Best for:</strong> Design studios emphasizing craft and process
      </p>
    </div>

    <div style={{ background: 'rgba(255,255,255,0.05)', padding: '30px', borderRadius: '12px', textAlign: 'center' }}>
      <div style={{ background: '#134E4A', padding: '20px', borderRadius: '8px', marginBottom: '15px', display: 'flex', justifyContent: 'center', alignItems: 'center', height: '100px' }}>
        <LogoVariation14 size={45} />
      </div>
      <h3 style={{ color: '#FFF7AF', fontSize: '16px', fontWeight: '600', marginBottom: '8px' }}>Variation 14: Bouncy Bubble</h3>
      <p style={{ color: '#E0E7E5', fontSize: '13px', lineHeight: '1.5', margin: 0 }}>
        <strong>Inspired by:</strong> Retro bubble letters<br/>
        <strong>Pros:</strong> Fun, rounded, friendly, nostalgic '70s vibe, playful dots add charm.<br/>
        <strong>Cons:</strong> Very casual, may not convey professionalism.<br/>
        <strong>Best for:</strong> Youth-focused brands, fun creative agencies
      </p>
    </div>

    <div style={{ background: 'rgba(255,255,255,0.05)', padding: '30px', borderRadius: '12px', textAlign: 'center' }}>
      <div style={{ background: '#134E4A', padding: '20px', borderRadius: '8px', marginBottom: '15px', display: 'flex', justifyContent: 'center', alignItems: 'center', height: '100px' }}>
        <LogoVariation15 size={40} />
      </div>
      <h3 style={{ color: '#FFF7AF', fontSize: '16px', fontWeight: '600', marginBottom: '8px' }}>Variation 15: Scrawled Graffiti</h3>
      <p style={{ color: '#E0E7E5', fontSize: '13px', lineHeight: '1.5', margin: 0 }}>
        <strong>Inspired by:</strong> Street art typography<br/>
        <strong>Pros:</strong> Energetic, bold, rebellious, expressive scribble accent, edgy personality.<br/>
        <strong>Cons:</strong> Very urban/casual, may alienate conservative clients.<br/>
        <strong>Best for:</strong> Edgy creative studios, streetwear-adjacent brands
      </p>
    </div>

    <div style={{ background: 'rgba(255,255,255,0.05)', padding: '30px', borderRadius: '12px', textAlign: 'center' }}>
      <div style={{ background: '#134E4A', padding: '20px', borderRadius: '8px', marginBottom: '15px', display: 'flex', justifyContent: 'center', alignItems: 'center', height: '100px' }}>
        <LogoVariation16 size={52} />
      </div>
      <h3 style={{ color: '#FFF7AF', fontSize: '16px', fontWeight: '600', marginBottom: '8px' }}>Variation 16: Minimal Quirky</h3>
      <p style={{ color: '#E0E7E5', fontSize: '13px', lineHeight: '1.5', margin: 0 }}>
        <strong>Inspired by:</strong> Modern minimalism with character<br/>
        <strong>Pros:</strong> Clean, confident, simple dot accent adds personality without clutter.<br/>
        <strong>Cons:</strong> May feel too simple, less distinctive than others.<br/>
        <strong>Best for:</strong> Studios wanting understated professionalism with a hint of fun
      </p>
    </div>

    <div style={{ background: 'rgba(255,255,255,0.05)', padding: '30px', borderRadius: '12px', textAlign: 'center' }}>
      <div style={{ background: '#134E4A', padding: '20px', borderRadius: '8px', marginBottom: '15px', display: 'flex', justifyContent: 'center', alignItems: 'center', height: '100px' }}>
        <LogoVariation17 size={45} />
      </div>
      <h3 style={{ color: '#FFF7AF', fontSize: '16px', fontWeight: '600', marginBottom: '8px' }}>Variation 17: Lowercase Friendly</h3>
      <p style={{ color: '#E0E7E5', fontSize: '13px', lineHeight: '1.5', margin: 0 }}>
        <strong>Inspired by:</strong> Approachable lowercase<br/>
        <strong>Pros:</strong> Soft, friendly, contemporary feel, wide spacing, warm personality.<br/>
        <strong>Cons:</strong> May feel too casual for corporate clients.<br/>
        <strong>Best for:</strong> Creative studios wanting approachable, modern branding
      </p>
    </div>

    <div style={{ background: 'rgba(255,255,255,0.05)', padding: '30px', borderRadius: '12px', textAlign: 'center' }}>
      <div style={{ background: '#134E4A', padding: '20px', borderRadius: '8px', marginBottom: '15px', display: 'flex', justifyContent: 'center', alignItems: 'center', height: '100px' }}>
        <LogoVariation18 size={42} />
      </div>
      <h3 style={{ color: '#FFF7AF', fontSize: '16px', fontWeight: '600', marginBottom: '8px' }}>Variation 18: Lowercase Script</h3>
      <p style={{ color: '#E0E7E5', fontSize: '13px', lineHeight: '1.5', margin: 0 }}>
        <strong>Inspired by:</strong> Flowing script lettering<br/>
        <strong>Pros:</strong> Flowing, casual, connected letterforms, relaxed and friendly, human touch.<br/>
        <strong>Cons:</strong> May appear too informal for professional services.<br/>
        <strong>Best for:</strong> Boutique studios, artisan brands, creative agencies
      </p>
    </div>

    <div style={{ background: 'rgba(255,255,255,0.05)', padding: '30px', borderRadius: '12px', textAlign: 'center' }}>
      <div style={{ background: '#134E4A', padding: '20px', borderRadius: '8px', marginBottom: '15px', display: 'flex', justifyContent: 'center', alignItems: 'center', height: '100px' }}>
        <LogoVariation19 size={38} />
      </div>
      <h3 style={{ color: '#FFF7AF', fontSize: '16px', fontWeight: '600', marginBottom: '8px' }}>Variation 19: Lowercase Geometric</h3>
      <p style={{ color: '#E0E7E5', fontSize: '13px', lineHeight: '1.5', margin: 0 }}>
        <strong>Inspired by:</strong> Modernist geometric typography<br/>
        <strong>Pros:</strong> Clean, modern, precise forms, contemporary, professional yet approachable.<br/>
        <strong>Cons:</strong> May lack distinctive character.<br/>
        <strong>Best for:</strong> Tech-forward studios, modern design agencies
      </p>
    </div>

    <div style={{ background: 'rgba(255,255,255,0.05)', padding: '30px', borderRadius: '12px', textAlign: 'center' }}>
      <div style={{ background: '#134E4A', padding: '20px', borderRadius: '8px', marginBottom: '15px', display: 'flex', justifyContent: 'center', alignItems: 'center', height: '100px' }}>
        <LogoVariation20 size={40} />
      </div>
      <h3 style={{ color: '#FFF7AF', fontSize: '16px', fontWeight: '600', marginBottom: '8px' }}>Variation 20: Lowercase Condensed</h3>
      <p style={{ color: '#E0E7E5', fontSize: '13px', lineHeight: '1.5', margin: 0 }}>
        <strong>Inspired by:</strong> Editorial magazine typography<br/>
        <strong>Pros:</strong> Tight, sophisticated, editorial feel, narrow letterforms, magazine-style elegance.<br/>
        <strong>Cons:</strong> May be too compact for small sizes.<br/>
        <strong>Best for:</strong> Design-focused studios, editorial publications, luxury brands
      </p>
    </div>
  </div>
);

function Nav() {
  const [isCompanyOpen, setIsCompanyOpen] = useState(false);
  const [isFeaturedOpen, setIsFeaturedOpen] = useState(false);
  const [isMobileOpen, setIsMobileOpen] = useState(false);

  const currentPath = typeof window !== 'undefined' ? window.location.pathname : '';

  const handleContactClick = () => {
    window.location.href = "mailto:alexgoode2@gmail.com";
  };

  const isActive = (path) => currentPath === path;

  return (
    <>
      {/* Desktop Navigation */}
      <nav className="hidden lg:flex justify-between items-center sticky bg-teal-950 top-0 z-50 px-4 py-3">
        {/* Logo Text - Left Side */}
        <a
          href="/"
          className="flex items-center eighties no-underline text-3xl"
          style={{ color: '#FFFFFF' }}
          aria-label="Made Right Studio Home"
        >
          Made Right
        </a>

        {/* Main Navigation Pill */}
        <div className="bg-teal-900 rounded-full px-4 py-2 flex items-center gap-4 shadow-lg mx-auto">
          {/* Logo Text */}
          <a
            href="/"
            className="flex items-center font-semibold text-sm no-underline pr-3 border-r border-green-800"
            style={{ color: '#FFFFFF' }}
            aria-label="Made Right Studio Home"
          >
            Home
          </a>

          {/* Navigation Links */}
          <a
            href="/about"
            className={`text-sm no-underline px-3 py-1.5 rounded-full ${
              isActive('/about')
                ? 'bg-white text-teal-950 font-medium'
                : 'text-white hover:bg-teal-800'
            }`}
            style={{
              transition: 'all 0.3s cubic-bezier(0.215, 0.61, 0.355, 1)',
              letterSpacing: '0.01em'
            }}
            aria-current={isActive('/about') ? 'page' : undefined}
          >
            About
          </a>

          <a
            href="/team"
            className={`text-sm no-underline px-3 py-1.5 rounded-full ${
              isActive('/team')
                ? 'bg-white text-teal-950 font-medium'
                : 'text-white hover:bg-teal-800'
            }`}
            style={{
              transition: 'all 0.3s cubic-bezier(0.215, 0.61, 0.355, 1)',
              letterSpacing: '0.01em'
            }}
            aria-current={isActive('/team') ? 'page' : undefined}
          >
            Team
          </a>

          <a
            href="/our-process"
            className={`text-sm no-underline px-3 py-1.5 rounded-full ${
              isActive('/our-process')
                ? 'bg-white text-teal-950 font-medium'
                : 'text-white hover:bg-teal-800'
            }`}
            style={{
              transition: 'all 0.3s cubic-bezier(0.215, 0.61, 0.355, 1)',
              letterSpacing: '0.01em'
            }}
            aria-current={isActive('/our-process') ? 'page' : undefined}
          >
           Process
          </a>

          {/* Featured Work Dropdown */}
          <div className="relative">
            <button
              className="text-white text-sm hover:bg-teal-800 px-3 py-1.5 rounded-full flex items-center gap-1"
              style={{
                transition: 'all 0.3s cubic-bezier(0.215, 0.61, 0.355, 1)',
                letterSpacing: '0.01em'
              }}
              onMouseEnter={() => setIsFeaturedOpen(true)}
              onMouseLeave={() => setIsFeaturedOpen(false)}
              aria-expanded={isFeaturedOpen}
              aria-haspopup="true"
            >
              Featured Work
              <svg
                className="w-2.5 h-2.5"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                aria-hidden="true"
                style={{
                  transition: 'transform 0.3s cubic-bezier(0.215, 0.61, 0.355, 1)',
                  transform: isFeaturedOpen ? 'rotate(180deg)' : 'rotate(0deg)'
                }}
              >
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
              </svg>
            </button>
            {isFeaturedOpen && (
              <div
                className="absolute top-full left-0 w-72 z-50"
                style={{
                  paddingTop: '16px',
                  transform: 'translate3d(0,0,0)'
                }}
                onMouseEnter={() => setIsFeaturedOpen(true)}
                onMouseLeave={() => setIsFeaturedOpen(false)}
              >
                <div
                  className="bg-white border border-slate-900"
                  style={{
                    borderRadius: '0',
                    boxShadow: '4px 4px 0 rgba(15, 23, 42, 0.08)'
                  }}
                >
                  {/* Whitney-inspired catalog header */}
                  <div
                    className="px-6 py-3 border-b border-slate-200 bg-green-400"
                    // style={{ backgroundColor: 'rgba(248, 250, 252, 0.6)' }}
                  >
                    <div
                      className="text-xs font-mono uppercase text-slate-600"
                      style={{
                        letterSpacing: '0.15em',
                        lineHeight: '1.3'
                      }}
                    >
                      Selected Projects
                    </div>
                  </div>

                  {/* Muuto-inspired minimal list with Whitney spacing */}
                  <div style={{ padding: '8px 0' }}>
                    <a
                      href="http://alexgoode.netlify.app/"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="block px-6 py-4 hover:bg-stone-50 no-underline group"
                      style={{
                        transition: 'background-color 0.3s cubic-bezier(0.215, 0.61, 0.355, 1)',
                        borderBottom: '1px solid rgba(226, 232, 240, 0.5)'
                      }}
                    >
                      <div
                        className="text-xs font-mono uppercase text-slate-500 mb-2"
                        style={{
                          letterSpacing: '0.1em',
                          lineHeight: '1.3'
                        }}
                      >
                        Portfolio / 2024
                      </div>
                      <div
                        className="text-base text-slate-900 group-hover:text-slate-900"
                        style={{
                          letterSpacing: '-0.01em',
                          lineHeight: '1.4',
                          fontWeight: '500'
                        }}
                      >
                        Alex Goode
                      </div>
                      <div
                        className="text-sm text-slate-600 mt-1"
                        style={{
                          letterSpacing: '0',
                          lineHeight: '1.4'
                        }}
                      >
                        Studio Owner
                      </div>
                    </a>

                    <a
                      href="https://lemich.netlify.app"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="block px-6 py-4 hover:bg-stone-50 no-underline group"
                      style={{
                        transition: 'background-color 0.3s cubic-bezier(0.215, 0.61, 0.355, 1)',
                        borderBottom: '1px solid rgba(226, 232, 240, 0.5)'
                      }}
                    >
                      <div
                        className="text-xs font-mono uppercase text-slate-500 mb-2"
                        style={{
                          letterSpacing: '0.1em',
                          lineHeight: '1.3'
                        }}
                      >
                        Healthcare / 2024
                      </div>
                      <div
                        className="text-base text-slate-900 group-hover:text-slate-900"
                        style={{
                          letterSpacing: '-0.01em',
                          lineHeight: '1.4',
                          fontWeight: '500'
                        }}
                      >
                        The Lemich Clinic
                      </div>
                      <div
                        className="text-sm text-slate-600 mt-1"
                        style={{
                          letterSpacing: '0',
                          lineHeight: '1.4'
                        }}
                      >
                        Norfolk, Virginia
                      </div>
                    </a>

                    <a
                      href="https://rosewoodcleaning.netlify.app"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="block px-6 py-4 hover:bg-stone-50 no-underline group"
                      style={{
                        transition: 'background-color 0.3s cubic-bezier(0.215, 0.61, 0.355, 1)'
                      }}
                    >
                      <div
                        className="text-xs font-mono uppercase text-slate-500 mb-2"
                        style={{
                          letterSpacing: '0.1em',
                          lineHeight: '1.3'
                        }}
                      >
                        Service / 2024
                      </div>
                      <div
                        className="text-base text-slate-900 group-hover:text-slate-900"
                        style={{
                          letterSpacing: '-0.01em',
                          lineHeight: '1.4',
                          fontWeight: '500'
                        }}
                      >
                        Rosewood Cleaning
                      </div>
                      <div
                        className="text-sm text-slate-600 mt-1"
                        style={{
                          letterSpacing: '0',
                          lineHeight: '1.4'
                        }}
                      >
                        Columbia, South Carolina
                      </div>
                    </a>
                  </div>
                </div>
              </div>
            )}
          </div>

          {/* <a 
            href="/blog" 
            className={`text-sm transition-colors no-underline px-3 py-1.5 rounded-full ${
              isActive('/blog') 
                ? 'bg-white text-teal-950 font-medium' 
                : 'text-white hover:text-gray-300'
            }`}
            style={{ letterSpacing: '0.02em' }}
            aria-current={isActive('/blog') ? 'page' : undefined}
          >
            Blog
          </a> */}
        </div>

        {/* Right Side Links */}
        <div className="flex items-center gap-3">
          <button
            onClick={handleContactClick}
            className="bg-white lora  text-green-900 px-5 py-2 font-semibold rounded-full text-sm cursor-pointer border-0 hover:bg-stone-100"
            style={{
              transition: 'all 0.3s cubic-bezier(0.215, 0.61, 0.355, 1)',
              letterSpacing: '0.01em'
            }}
            aria-label="Email us"
          >
            Email
          </button>

          {/* Socials Dropdown */}
          <div className="relative">
            <button
              className="text-white bg-teal-900 py-2 px-5 rounded-md text-sm font-medium hover:bg-teal-800 flex items-center gap-1 nav-dropdown-button"
              style={{
                transition: 'all 0.3s cubic-bezier(0.215, 0.61, 0.355, 1)',
                letterSpacing: '0.01em'
              }}
              onMouseEnter={() => setIsCompanyOpen(true)}
              onMouseLeave={() => setIsCompanyOpen(false)}
              aria-expanded={isCompanyOpen}
              aria-haspopup="true"
            >
              Socials
              <svg
                className="w-2.5 h-2.5"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                aria-hidden="true"
                style={{
                  transition: 'transform 0.3s cubic-bezier(0.215, 0.61, 0.355, 1)',
                  transform: isCompanyOpen ? 'rotate(180deg)' : 'rotate(0deg)'
                }}
              >
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
              </svg>
            </button>
            {isCompanyOpen && (
              <div
                className="absolute top-full right-0 pt-2 w-44 z-50"
                onMouseEnter={() => setIsCompanyOpen(true)}
                onMouseLeave={() => setIsCompanyOpen(false)}
              >
                <div className="bg-white rounded-xl shadow-lg py-1">
                  <a 
                    href="https://instagram.com/maderight.studio" 
                    target="_blank" 
                    rel="noopener noreferrer" 
                    className="block px-3 py-2 text-sm text-gray-700 hover:bg-gray-100 no-underline rounded-lg mx-1"
                  >
                    Instagram
                  </a>
                </div>
              </div>
            )}
          </div>
        </div>
      </nav>

      {/* Tablet Navigation (768px - 1023px) */}
      <nav className="hidden md:flex lg:hidden sticky top-0 z-50 bg-teal-950 px-3 py-3">
        <div className="bg-teal-900 rounded-lg w-full">
          <div className="flex justify-between items-center px-4 py-3">
            <a
              href="/"
              className="flex items-center eighties no-underline"
              style={{ color: '#FFFFFF' }}
              aria-label="Made Right Studio Home"
            >
              Made Right
            </a>
            <button
              onClick={() => setIsMobileOpen(!isMobileOpen)}
              className="bg-white text-green-950 px-4 py-2 rounded-lg"
              aria-expanded={isMobileOpen}
              aria-label="Toggle navigation menu"
            >
              {isMobileOpen ? (
                <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round">
                  <path d="M18 6L6 18M6 6l12 12" />
                </svg>
              ) : (
                <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round">
                  <path d="M3 12h18M3 6h18M3 18h18" />
                </svg>
              )}
            </button>
          </div>

          {isMobileOpen && (
            <div className="bg-white border border-slate-900 mt-3 mx-3 mb-3" style={{ borderRadius: '0', boxShadow: '4px 4px 0 rgba(15, 23, 42, 0.08)' }}>
              {/* Catalog header */}
              <div className="px-5 py-3 border-b border-slate-200" style={{ backgroundColor: 'rgba(248, 250, 252, 0.6)' }}>
                <div className="text-xs font-mono uppercase text-slate-600" style={{ letterSpacing: '0.15em', lineHeight: '1.3' }}>
                  Navigation
                </div>
              </div>

              <div className="pb-2">
                {/* Studio Links */}
                <a
                  href="/"
                  className="block px-5 py-3 hover:bg-stone-50 no-underline"
                  style={{
                    transition: 'background-color 0.3s cubic-bezier(0.215, 0.61, 0.355, 1)',
                    borderBottom: '1px solid rgba(226, 232, 240, 0.5)'
                  }}
                >
                  <div className="text-sm text-slate-900" style={{ letterSpacing: '-0.01em', fontWeight: '500' }}>
                    Home
                  </div>
                </a>
                <a
                  href="/about"
                  className="block px-5 py-3 hover:bg-stone-50 no-underline"
                  style={{
                    transition: 'background-color 0.3s cubic-bezier(0.215, 0.61, 0.355, 1)',
                    borderBottom: '1px solid rgba(226, 232, 240, 0.5)'
                  }}
                >
                  <div className="text-sm text-slate-900" style={{ letterSpacing: '-0.01em', fontWeight: '500' }}>
                    About
                  </div>
                </a>
                <a
                  href="/team"
                  className="block px-5 py-3 hover:bg-stone-50 no-underline"
                  style={{
                    transition: 'background-color 0.3s cubic-bezier(0.215, 0.61, 0.355, 1)',
                    borderBottom: '1px solid rgba(226, 232, 240, 0.5)'
                  }}
                >
                  <div className="text-sm text-slate-900" style={{ letterSpacing: '-0.01em', fontWeight: '500' }}>
                    Team
                  </div>
                </a>
                <a
                  href="/our-process"
                  className="block px-5 py-3 hover:bg-stone-50 no-underline"
                  style={{
                    transition: 'background-color 0.3s cubic-bezier(0.215, 0.61, 0.355, 1)',
                    borderBottom: '1px solid rgba(226, 232, 240, 0.5)'
                  }}
                >
                  <div className="text-sm text-slate-900" style={{ letterSpacing: '-0.01em', fontWeight: '500' }}>
                    Our Process
                  </div>
                </a>

                {/* Featured Work Section */}
                <div className="px-5 py-3 border-b border-slate-200 mt-2" style={{ backgroundColor: 'rgba(248, 250, 252, 0.6)' }}>
                  <div className="text-xs font-mono uppercase text-slate-600" style={{ letterSpacing: '0.15em', lineHeight: '1.3' }}>
                    Selected Projects
                  </div>
                </div>

                <a
                  href="http://alexgoode.netlify.app/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="block px-5 py-3 hover:bg-stone-50 no-underline"
                  style={{
                    transition: 'background-color 0.3s cubic-bezier(0.215, 0.61, 0.355, 1)',
                    borderBottom: '1px solid rgba(226, 232, 240, 0.5)'
                  }}
                >
                  <div className="text-xs font-mono uppercase text-slate-500 mb-1" style={{ letterSpacing: '0.1em' }}>
                    Portfolio / 2024
                  </div>
                  <div className="text-sm text-slate-900" style={{ letterSpacing: '-0.01em', fontWeight: '500' }}>
                    Alex Goode
                  </div>
                  <div className="text-xs text-slate-600 mt-0.5" style={{ letterSpacing: '0' }}>
                    Studio Owner
                  </div>
                </a>
                <a
                  href="https://lemich.netlify.app"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="block px-5 py-3 hover:bg-stone-50 no-underline"
                  style={{
                    transition: 'background-color 0.3s cubic-bezier(0.215, 0.61, 0.355, 1)',
                    borderBottom: '1px solid rgba(226, 232, 240, 0.5)'
                  }}
                >
                  <div className="text-xs font-mono uppercase text-slate-500 mb-1" style={{ letterSpacing: '0.1em' }}>
                    Healthcare / 2024
                  </div>
                  <div className="text-sm text-slate-900" style={{ letterSpacing: '-0.01em', fontWeight: '500' }}>
                    The Lemich Clinic
                  </div>
                  <div className="text-xs text-slate-600 mt-0.5" style={{ letterSpacing: '0' }}>
                    Norfolk, Virginia
                  </div>
                </a>
                <a
                  href="https://rosewoodcleaning.netlify.app"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="block px-5 py-3 hover:bg-stone-50 no-underline"
                  style={{
                    transition: 'background-color 0.3s cubic-bezier(0.215, 0.61, 0.355, 1)',
                    borderBottom: '1px solid rgba(226, 232, 240, 0.5)'
                  }}
                >
                  <div className="text-xs font-mono uppercase text-slate-500 mb-1" style={{ letterSpacing: '0.1em' }}>
                    Service / 2024
                  </div>
                  <div className="text-sm text-slate-900" style={{ letterSpacing: '-0.01em', fontWeight: '500' }}>
                    Rosewood Cleaning
                  </div>
                  <div className="text-xs text-slate-600 mt-0.5" style={{ letterSpacing: '0' }}>
                    Columbia, South Carolina
                  </div>
                </a>

                {/* Socials Section */}
                <div className="px-5 py-3 border-b border-slate-200 mt-2" style={{ backgroundColor: 'rgba(248, 250, 252, 0.6)' }}>
                  <div className="text-xs font-mono uppercase text-slate-600" style={{ letterSpacing: '0.15em', lineHeight: '1.3' }}>
                    Connect
                  </div>
                </div>

                <a
                  href="https://instagram.com/maderight.studio"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="block px-5 py-3 hover:bg-stone-50 no-underline"
                  style={{
                    transition: 'background-color 0.3s cubic-bezier(0.215, 0.61, 0.355, 1)',
                    borderBottom: '1px solid rgba(226, 232, 240, 0.5)'
                  }}
                >
                  <div className="text-sm text-slate-900" style={{ letterSpacing: '-0.01em', fontWeight: '500' }}>
                    Instagram
                  </div>
                </a>

                <a
                  href="mailto:alexgoode2@gmail.com"
                  className="block mx-5 my-3 bg-teal-950 text-white px-4 py-2 text-center text-sm font-medium no-underline hover:bg-teal-900"
                  style={{
                    transition: 'background-color 0.3s cubic-bezier(0.215, 0.61, 0.355, 1)',
                    letterSpacing: '0.01em',
                    borderRadius: '0'
                  }}
                >
                  Contact Us
                </a>
              </div>
            </div>
          )}
        </div>
      </nav>

      {/* Mobile Navigation (< 768px) */}
      <nav className="md:hidden fixed top-0 left-0 right-0 z-50 px-3 pt-2 pb-3">
        <div className=" rounded-lg">
          <div className="flex justify-between items-center px-3 py-2.5">
            <a
              href="/"
              className="flex items-center bg-teal-900 px-2 py-2 rounded eighties no-underline"
              style={{ color: '#FFFFFF' }}
              aria-label="Made Right Studio Home"
            >
              Made Right
            </a>
            <button
              onClick={() => setIsMobileOpen(!isMobileOpen)}
              className="bg-white text-green-950 px-3 py-2 rounded-lg"
              aria-expanded={isMobileOpen}
              aria-label="Toggle navigation menu"
            >
              {isMobileOpen ? (
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round">
                  <path d="M18 6L6 18M6 6l12 12" />
                </svg>
              ) : (
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round">
                  <path d="M3 12h18M3 6h18M3 18h18" />
                </svg>
              )}
            </button>
          </div>

          {isMobileOpen && (
            <div className="bg-white border border-slate-900 mt-2 mx-2 mb-2" style={{ borderRadius: '0', boxShadow: '4px 4px 0 rgba(15, 23, 42, 0.08)' }}>
              {/* Catalog header */}
              <div className="px-4 py-2.5 border-b border-slate-200" style={{ backgroundColor: 'rgba(248, 250, 252, 0.6)' }}>
                <div className="text-xs font-mono uppercase text-slate-600" style={{ letterSpacing: '0.15em', lineHeight: '1.3' }}>
                  Navigation
                </div>
              </div>

              <div className="pb-2">
                {/* Studio Links */}
                <a
                  href="/"
                  className="block px-4 py-2.5 hover:bg-stone-50 no-underline"
                  style={{
                    transition: 'background-color 0.3s cubic-bezier(0.215, 0.61, 0.355, 1)',
                    borderBottom: '1px solid rgba(226, 232, 240, 0.5)'
                  }}
                >
                  <div className="text-sm text-slate-900" style={{ letterSpacing: '-0.01em', fontWeight: '500' }}>
                    Home
                  </div>
                </a>
                <a
                  href="/about"
                  className="block px-4 py-2.5 hover:bg-stone-50 no-underline"
                  style={{
                    transition: 'background-color 0.3s cubic-bezier(0.215, 0.61, 0.355, 1)',
                    borderBottom: '1px solid rgba(226, 232, 240, 0.5)'
                  }}
                >
                  <div className="text-sm text-slate-900" style={{ letterSpacing: '-0.01em', fontWeight: '500' }}>
                    About
                  </div>
                </a>
                <a
                  href="/team"
                  className="block px-4 py-2.5 hover:bg-stone-50 no-underline"
                  style={{
                    transition: 'background-color 0.3s cubic-bezier(0.215, 0.61, 0.355, 1)',
                    borderBottom: '1px solid rgba(226, 232, 240, 0.5)'
                  }}
                >
                  <div className="text-sm text-slate-900" style={{ letterSpacing: '-0.01em', fontWeight: '500' }}>
                    Team
                  </div>
                </a>
                <a
                  href="/our-process"
                  className="block px-4 py-2.5 hover:bg-stone-50 no-underline"
                  style={{
                    transition: 'background-color 0.3s cubic-bezier(0.215, 0.61, 0.355, 1)',
                    borderBottom: '1px solid rgba(226, 232, 240, 0.5)'
                  }}
                >
                  <div className="text-sm text-slate-900" style={{ letterSpacing: '-0.01em', fontWeight: '500' }}>
                    Our Process
                  </div>
                </a>

                {/* Featured Work Section */}
                <div className="px-4 py-2.5 border-b border-slate-200 mt-2" style={{ backgroundColor: 'rgba(248, 250, 252, 0.6)' }}>
                  <div className="text-xs font-mono uppercase text-slate-600" style={{ letterSpacing: '0.15em', lineHeight: '1.3' }}>
                    Selected Projects
                  </div>
                </div>

                <a
                  href="http://alexgoode.netlify.app/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="block px-4 py-2.5 hover:bg-stone-50 no-underline"
                  style={{
                    transition: 'background-color 0.3s cubic-bezier(0.215, 0.61, 0.355, 1)',
                    borderBottom: '1px solid rgba(226, 232, 240, 0.5)'
                  }}
                >
                  <div className="text-xs font-mono uppercase text-slate-500 mb-1" style={{ letterSpacing: '0.1em' }}>
                    Portfolio / 2024
                  </div>
                  <div className="text-sm text-slate-900" style={{ letterSpacing: '-0.01em', fontWeight: '500' }}>
                    Alex Goode
                  </div>
                  <div className="text-xs text-slate-600 mt-0.5" style={{ letterSpacing: '0' }}>
                    Studio Owner
                  </div>
                </a>
                <a
                  href="https://lemich.netlify.app"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="block px-4 py-2.5 hover:bg-stone-50 no-underline"
                  style={{
                    transition: 'background-color 0.3s cubic-bezier(0.215, 0.61, 0.355, 1)',
                    borderBottom: '1px solid rgba(226, 232, 240, 0.5)'
                  }}
                >
                  <div className="text-xs font-mono uppercase text-slate-500 mb-1" style={{ letterSpacing: '0.1em' }}>
                    Healthcare / 2024
                  </div>
                  <div className="text-sm text-slate-900" style={{ letterSpacing: '-0.01em', fontWeight: '500' }}>
                    The Lemich Clinic
                  </div>
                  <div className="text-xs text-slate-600 mt-0.5" style={{ letterSpacing: '0' }}>
                    Norfolk, Virginia
                  </div>
                </a>
                <a
                  href="https://rosewoodcleaning.netlify.app"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="block px-4 py-2.5 hover:bg-stone-50 no-underline"
                  style={{
                    transition: 'background-color 0.3s cubic-bezier(0.215, 0.61, 0.355, 1)',
                    borderBottom: '1px solid rgba(226, 232, 240, 0.5)'
                  }}
                >
                  <div className="text-xs font-mono uppercase text-slate-500 mb-1" style={{ letterSpacing: '0.1em' }}>
                    Service / 2024
                  </div>
                  <div className="text-sm text-slate-900" style={{ letterSpacing: '-0.01em', fontWeight: '500' }}>
                    Rosewood Cleaning
                  </div>
                  <div className="text-xs text-slate-600 mt-0.5" style={{ letterSpacing: '0' }}>
                    Columbia, South Carolina
                  </div>
                </a>

                {/* Socials Section */}
                <div className="px-4 py-2.5 border-b border-slate-200 mt-2" style={{ backgroundColor: 'rgba(248, 250, 252, 0.6)' }}>
                  <div className="text-xs font-mono uppercase text-slate-600" style={{ letterSpacing: '0.15em', lineHeight: '1.3' }}>
                    Connect
                  </div>
                </div>

                <a
                  href="https://instagram.com/maderight.studio"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="block px-4 py-2.5 hover:bg-stone-50 no-underline"
                  style={{
                    transition: 'background-color 0.3s cubic-bezier(0.215, 0.61, 0.355, 1)',
                    borderBottom: '1px solid rgba(226, 232, 240, 0.5)'
                  }}
                >
                  <div className="text-sm text-slate-900" style={{ letterSpacing: '-0.01em', fontWeight: '500' }}>
                    Instagram
                  </div>
                </a>

                <a
                  href="mailto:alexgoode2@gmail.com"
                  className="block mx-4 my-2.5 bg-teal-950 text-white px-4 py-2 text-center text-sm font-medium no-underline hover:bg-teal-900"
                  style={{
                    transition: 'background-color 0.3s cubic-bezier(0.215, 0.61, 0.355, 1)',
                    letterSpacing: '0.01em',
                    borderRadius: '0'
                  }}
                >
                  Contact Us
                </a>
              </div>
            </div>
          )}
        </div>
      </nav>
    </>
  );
}

export default Nav;