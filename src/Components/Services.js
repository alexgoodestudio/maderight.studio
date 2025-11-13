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
    const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    const isPointerFine = window.matchMedia('(hover: hover) and (pointer: fine)').matches;
    const q = context.selector || gsap.utils.selector(containerRef);

    // Magnetic hover (desktop only)
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
        card._magMove = handleMove;
        card._magLeave = handleLeave;
      });

      return () => {
        cards.forEach((card) => {
          card.removeEventListener('mousemove', card._magMove);
          card.removeEventListener('mouseleave', card._magLeave);
        });
      };
    }

    // Entrance animations
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
    <section 
      className="bg-white text-slate-900 content-module" 
      ref={containerRef}
      aria-labelledby="services-heading"
    >
      <div className="  py-5 py-lg-6">
        <div className="row">
          <div className="col-12">
            
            {/* Section Header */}
            <header className="text-start ms-2 ms-lg-5 mb-5 mb-lg-6">
              <div className="row">
                <div className="col-12 col-lg-8">
                  <h2 
                    id="services-heading"
                    ref={headingRef} 
                    className="text-6xl font-bold mb-3"
                    style={{ letterSpacing: '-0.015em', lineHeight: '1.1' }}
                  >
                    What We Do.
                  </h2>
                  <p 
                    ref={metadataRef} 
                    className="text-xs text-slate-600 mb-0"
                    style={{ 
                      letterSpacing: '0.15em', 
                      textTransform: 'uppercase',
                      fontWeight: '500'
                    }}
                  >
                    Our Capabilities — Updated 2025
                  </p>
                </div>
              </div>
            </header>

            {/* Services Grid */}
            <div className="row g-0">
              <div className="col-12">
                <div 
                  className="border-top border-start border-slate-900"
                  role="list"
                  aria-label="Service offerings"
                >
                  {services.map((service, index) => {
                    const isExpanded = expandedIndex === index;
                    
                    return (
                      <article
                        key={index}
                        ref={el => moduleRefs.current[index] = el}
                        className="service-card border-bottom border-end border-slate-900"
                        style={{ 
                          backgroundColor: service.bgColor,
                          transition: 'background-color 0.3s ease',
                          cursor: 'pointer'
                        }}
                        role="listitem"
                      >
                        {/* Desktop Layout */}
                        <div className="d-none d-lg-flex align-items-start py-4 px-4">
                          <span
                            className="font-mono text-xs text-slate-500 text-start"
                            style={{ 
                              width: '5%', 
                              flexShrink: 0,
                              letterSpacing: '0.02em',
                              paddingTop: '2px'
                            }}
                            aria-label={`Service ${index + 1} of ${services.length}`}
                          >
                            {String(index + 1).padStart(2, '0')}
                          </span>
                          
                          <h3
                            className="text-xl font-medium mb-0 text-start"
                            style={{ 
                              width: '25%', 
                              flexShrink: 0,
                              letterSpacing: '-0.005em',
                              lineHeight: '1.3'
                            }}
                          >
                            {service.title}
                          </h3>
                          
                          <p
                            className="text-sm text-slate-600 mb-0 text-start"
                            style={{ 
                              width: '30%', 
                              flexShrink: 0,
                              letterSpacing: '-0.01em',
                              lineHeight: '1.5'
                            }}
                          >
                            {service.description}
                          </p>
                          
                          <p
                            className="text-xs text-slate-500 font-medium mb-0 text-start"
                            style={{ 
                              width: '35%', 
                              flexShrink: 0,
                              letterSpacing: '0.005em',
                              lineHeight: '1.5'
                            }}
                          >
                            {service.expertise}
                          </p>
                        </div>

                        {/* Mobile Layout - Accordion Pattern */}
                        <div className="d-lg-none">
                          <button
                            className="w-100 border-0 bg-transparent py-4 px-4 text-start"
                            onClick={() => toggleExpand(index)}
                            aria-expanded={isExpanded}
                            aria-controls={`service-detail-${index}`}
                          >
                            <div className="d-flex align-items-center justify-content-between">
                              <div className="d-flex align-items-center gap-3">
                                <span 
                                  className="font-mono text-xs text-slate-500"
                                  style={{ letterSpacing: '0.02em' }}
                                  aria-label={`Service ${index + 1} of ${services.length}`}
                                >
                                  {String(index + 1).padStart(2, '0')}
                                </span>
                                <h3 
                                  className="text-xl font-medium mb-0"
                                  style={{ letterSpacing: '-0.005em' }}
                                >
                                  {service.title}
                                </h3>
                              </div>
                              
                              <svg
                                width="20"
                                height="20"
                                viewBox="0 0 20 20"
                                fill="none"
                                className="text-slate-900"
                                style={{
                                  transform: isExpanded ? 'rotate(180deg)' : 'rotate(0deg)',
                                  transition: 'transform 0.3s ease',
                                  flexShrink: 0
                                }}
                                aria-hidden="true"
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
                          </button>

                          {isExpanded && (
                            <div 
                              id={`service-detail-${index}`}
                              className="px-4 pb-4 pt-0 ps-5"
                              style={{ 
                                animation: 'fadeIn 0.3s ease'
                              }}
                            >
                              <p 
                                className="text-sm text-slate-600 mb-2"
                                style={{ 
                                  letterSpacing: '-0.01em',
                                  lineHeight: '1.5'
                                }}
                              >
                                {service.description}
                              </p>
                              <p 
                                className="text-xs text-slate-500 font-medium mb-0"
                                style={{ 
                                  letterSpacing: '0.005em',
                                  lineHeight: '1.5'
                                }}
                              >
                                {service.expertise}
                              </p>
                            </div>
                          )}
                        </div>
                      </article>
                    );
                  })}
                </div>
              </div>
            </div>

          </div>
        </div>
      </div>

      <style jsx>{`
        @keyframes fadeIn {
          from {
            opacity: 0;
            transform: translateY(-8px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }

        @media (prefers-reduced-motion: reduce) {
          .service-card,
          @keyframes fadeIn {
            animation: none !important;
            transition: none !important;
          }
        }
      `}</style>
    </section>
  );
}

export default Services;