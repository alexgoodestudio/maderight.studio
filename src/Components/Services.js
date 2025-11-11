import React, { useRef, useState } from 'react';
import { gsap } from 'gsap';
import { useGSAP } from '@gsap/react';

function Services() {
  const containerRef = useRef();
  const moduleRefs = useRef([]);
  const headingRef = useRef();
  const metadataRef = useRef();
  const [expandedIndex, setExpandedIndex] = useState(null);

useGSAP((context) => {
  const modules = moduleRefs.current.filter(Boolean);

  // Respect reduced motion + only run on real hover devices (desktop / iPad with pointer)
  const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
  const isPointerFine = window.matchMedia('(hover: hover) and (pointer: fine)').matches;

  // Scoped selector (respects { scope: containerRef })
  const q = context.selector || gsap.utils.selector(containerRef);

  // ---- Magnetic hover (desktop / iPad only) ----
  if (!prefersReducedMotion && isPointerFine) {
    const cards = q('.service-card');

    cards.forEach((card) => {
      const handleMove = (e) => {
        const rect = card.getBoundingClientRect();
        const x = e.clientX - rect.left - rect.width / 2;
        const y = e.clientY - rect.top - rect.height / 2;

        gsap.to(card, {
          x: x * 0.05,
          y: y * 0.05,
          duration: 0.4,
          ease: 'power2.out',
        });
      };

      const handleLeave = () => {
        gsap.to(card, {
          x: 0,
          y: 0,
          duration: 0.6,
          ease: 'power2.out',
        });
      };

      card.addEventListener('mousemove', handleMove);
      card.addEventListener('mouseleave', handleLeave);

      // store handlers for cleanup
      card._magMove = handleMove;
      card._magLeave = handleLeave;
    });

    // cleanup on unmount / remount (React Strict Mode)
    return () => {
      cards.forEach((card) => {
        card.removeEventListener('mousemove', card._magMove);
        card.removeEventListener('mouseleave', card._magLeave);
      });
    };
  }

  // ---- Existing entrance animations ----
  gsap.fromTo(
    [headingRef.current, metadataRef.current],
    { opacity: 0, y: 20 },
    {
      opacity: 1,
      y: 0,
      duration: 0.8,
      stagger: 0.1,
      ease: 'power2.out',
    }
  );

  gsap.fromTo(
    modules,
    { opacity: 0, y: 15 },
    {
      opacity: 1,
      y: 0,
      duration: 0.6,
      stagger: 0.08,
      ease: 'power2.out',
      delay: 0.3,
    }
  );
}, { scope: containerRef });


  const toggleExpand = (index) => {
    setExpandedIndex(expandedIndex === index ? null : index);
  };

  const services = [
    { 
      title: "Front-End Development", 
      description: "React Framework",
      expertise: "Component Architecture, State Management",
      bgColor: "#B8E5F0"
    },
    { 
      title: "Back-End Development", 
      description: "APIs, Databases & Infrastructure",
      expertise: "Data Management and Content Management Systems",
      bgColor: "#F5D4D9"
    },
    { 
      title: "Search Engine Optimization", 
      description: "Technical & Content Strategy",
      expertise: "Core Web Vitals, Next.js Optimization",
      bgColor: "#D4E8D4"
    },
    { 
      title: "REST API Development", 
      description: "Client-Server Communication",
      expertise: "Scalable API Architecture",
      bgColor: "#D4C5E8"
    },
    { 
      title: "Interactive Design", 
      description: "GSAP & Micro-interactions",
      expertise: "Subtle Motion and User Engagement",
      bgColor: "#F5E8C8"
    },
    { 
      title: "UX/UI Design", 
      description: "Research-Driven Experiences",
      expertise: "Accessibility-First",
      bgColor: "#E8F0F5"
    }
  ];

  return (
    <div className="bg-white text-slate-900 content-module" ref={containerRef}>
      <div className="">
        <div className="row">
          <div className="col-12">
            
            <div className="text-start ms-2 ms-lg-5 row mb-5">
              <div className="col-12 col-lg-8">
                <h2 ref={headingRef} className="text-6xl font-bold mb-3">
                  What We Do.
                </h2>
                <div ref={metadataRef} className="text-sm text-slate-600 mb-4">
                  Our Capabilities — Updated 2025
                </div>
              </div>
            </div>

            <div className="row g-0">
              <div className="col-12">
                <div className="border-top border-start border-slate-900">
 {services.map((service, index) => (
  <div
    key={index}
    ref={el => moduleRefs.current[index] = el}
    className="service-card border-bottom border-end border-slate-900 p-4"
    style={{ backgroundColor: service.bgColor, cursor: 'pointer' }}
    onClick={() => toggleExpand(index)}
  >
    {/* Desktop Layout */}
    <div className="d-none d-lg-flex align-items-center justify-content-between">
      <span
        className="service-number font-mono text-xs text-slate-500 text-start"
        style={{ width: '5%', flexShrink: 0 }}
      >
        {String(index + 1).padStart(2, '0')}
      </span>
      <h3
        className="text-xl font-medium mb-0 text-start"
        style={{ width: '25%', flexShrink: 0 }}
      >
        {service.title}
      </h3>
      <p
        className="text-sm text-slate-600 mb-0 text-start"
        style={{ width: '30%', flexShrink: 0 }}
      >
        {service.description}
      </p>
      <p
        className="text-xs text-slate-500 font-medium mb-0 text-start"
        style={{ width: '35%', flexShrink: 0 }}
      >
        {service.expertise}
      </p>
    </div>

    {/* Mobile Layout */}
    <div className="d-lg-none">
      <div className="d-flex align-items-center justify-content-between">
        <div className="d-flex align-items-center gap-3">
          <span className="service-number font-mono text-xs text-slate-500">
            {String(index + 1).padStart(2, '0')}
          </span>
          <h3 className="text-xl font-medium mb-0">
            {service.title}
          </h3>
        </div>
        <svg
          width="20"
          height="20"
          viewBox="0 0 20 20"
          fill="none"
          style={{
            transform: expandedIndex === index ? 'rotate(180deg)' : 'rotate(0deg)',
            transition: 'transform 0.3s ease'
          }}
        >
          <path
            d="M5 7.5L10 12.5L15 7.5"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>
      </div>

      {expandedIndex === index && (
        <div className="mt-3 ps-4">
          <p className="text-sm text-slate-600 mb-2">
            {service.description}
          </p>
          <p className="text-xs text-slate-500 font-medium mb-0">
            {service.expertise}
          </p>
        </div>
      )}
    </div>
  </div>
))}
                </div>
              </div>
            </div>

          </div>
        </div>
      </div>
    </div>
  );
}

export default Services;