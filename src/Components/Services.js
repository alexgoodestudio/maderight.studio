import React, { useRef, useState } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { useGSAP } from '@gsap/react';

gsap.registerPlugin(ScrollTrigger);

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
            x: x * 0.08,
            y: y * 0.08,
            scale: 1.02,
            duration: 0.3,
            ease: 'power2.out',
          });
        };

        const handleLeave = () => {
          gsap.to(card, {
            x: 0,
            y: 0,
            scale: 1,
            duration: 0.5,
            ease: 'power2.out',
          });
        };

        card.addEventListener('mouseenter', handleMove);
        card.addEventListener('mousemove', handleMove);
        card.addEventListener('mouseleave', handleLeave);
        card._magEnter = handleMove;
        card._magMove = handleMove;
        card._magLeave = handleLeave;
      });

      return () => {
        cards.forEach((card) => {
          card.removeEventListener('mouseenter', card._magEnter);
          card.removeEventListener('mousemove', card._magMove);
          card.removeEventListener('mouseleave', card._magLeave);
        });
      };
    }

    // Mobile scroll-triggered scale (non-hover devices)
    if (!prefersReducedMotion && !isPointerFine) {
      const cards = q('.service-card');

      cards.forEach((card) => {
        ScrollTrigger.create({
          trigger: card,
          start: 'top 85%',
          end: 'bottom 15%',
          onEnter: () => {
            gsap.to(card, {
              scale: 1.02,
              duration: 0.4,
              ease: 'power2.out'
            });
          },
          onLeave: () => {
            gsap.to(card, {
              scale: 1,
              duration: 0.3,
              ease: 'power2.out'
            });
          },
          onEnterBack: () => {
            gsap.to(card, {
              scale: 1.02,
              duration: 0.4,
              ease: 'power2.out'
            });
          },
          onLeaveBack: () => {
            gsap.to(card, {
              scale: 1,
              duration: 0.3,
              ease: 'power2.out'
            });
          }
        });
      });
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
      description: "React & Next.js Applications",
      expertise: "Component-driven architecture with server-side rendering and optimized performance",
      bgColor: "#FFF7AF",
      textColor: "#2B2B2B"
    },
    {
      title: "Content Management",
      description: "Sanity.io & Headless CMS",
      expertise: "Structured content, real-time collaboration, and flexible content modeling",
      bgColor: "#816281",
      textColor: "#F2D4E5"
    },
    {
      title: "Search Engine Optimization",
      description: "Technical SEO & Performance",
      expertise: "Next.js optimization, Core Web Vitals, semantic markup, and search visibility",
      bgColor: "#BB879D",
      textColor: "#1E1435"
    },
    {
      title: "Interactive Design",
      description: "Motion & Micro-interactions",
      expertise: "GSAP-powered animations, scroll triggers, and engaging user experiences",
      bgColor: "#2C4B45",
      textColor: "#E8DAC8"
    },
    {
      title: "Web Design Systems",
      description: "Consistent Design Implementation",
      expertise: "Cohesive color palettes, typography scales,  and reusable components",
      bgColor: "#A1ADEB",
      textColor: "#2A2440"
    },
    {
      title: "Accessibility & UX",
      description: "Inclusive User Experiences",
      expertise: "WCAG compliance, semantic HTML, and user-centered design principles",
      bgColor: "#C5C9D1",
      textColor: "#31304A"
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
                    className="text-5xl text-lg-6xl  font-bold mb-3"
                    style={{ letterSpacing: '-0.015em', lineHeight: '1.1' }}
                  >
                    What We Do.
                  </h2>
                  <p
                    ref={metadataRef}
                    className="text-lg gs text-slate-700 mb-0"
                    style={{
                      letterSpacing: '-0.01em',
                      lineHeight: '1.6',
                      maxWidth: '60ch'
                    }}
                  >
                    Our capabilities — Updated 2025
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
                            className="font-mono text-xs text-start"
                            style={{
                              width: '5%',
                              flexShrink: 0,
                              letterSpacing: '0.02em',
                              paddingTop: '2px',
                              color: service.textColor,
                              opacity: 0.7
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
                              lineHeight: '1.3',
                              color: service.textColor
                            }}
                          >
                            {service.title}
                          </h3>

                          <p
                            className="text-sm mb-0 text-start"
                            style={{
                              width: '30%',
                              flexShrink: 0,
                              letterSpacing: '-0.01em',
                              lineHeight: '1.5',
                              color: service.textColor,
                              opacity: 0.85
                            }}
                          >
                            {service.description}
                          </p>

                          <p
                            className="text-xs font-medium mb-0 text-start"
                            style={{
                              width: '35%',
                              flexShrink: 0,
                              letterSpacing: '0.005em',
                              lineHeight: '1.5',
                              color: service.textColor,
                              opacity: 0.8
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
                                  className="font-mono text-xs"
                                  style={{
                                    letterSpacing: '0.02em',
                                    color: service.textColor,
                                    opacity: 0.7
                                  }}
                                  aria-label={`Service ${index + 1} of ${services.length}`}
                                >
                                  {String(index + 1).padStart(2, '0')}
                                </span>
                                <h3
                                  className="text-xl font-medium mb-0"
                                  style={{
                                    letterSpacing: '-0.005em',
                                    color: service.textColor
                                  }}
                                >
                                  {service.title}
                                </h3>
                              </div>

                              <svg
                                width="20"
                                height="20"
                                viewBox="0 0 20 20"
                                fill="none"
                                style={{
                                  transform: isExpanded ? 'rotate(180deg)' : 'rotate(0deg)',
                                  transition: 'transform 0.3s ease',
                                  flexShrink: 0,
                                  color: service.textColor
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
                                className="text-sm mb-2"
                                style={{
                                  letterSpacing: '-0.01em',
                                  lineHeight: '1.5',
                                  color: service.textColor,
                                  opacity: 0.85
                                }}
                              >
                                {service.description}
                              </p>
                              <p
                                className="text-xs font-medium mb-0"
                                style={{
                                  letterSpacing: '0.005em',
                                  lineHeight: '1.5',
                                  color: service.textColor,
                                  opacity: 0.8
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