import React, { useRef } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { useGSAP } from '@gsap/react';

gsap.registerPlugin(ScrollTrigger);

function DesignSystem() {
  const containerRef = useRef();

  useGSAP(() => {
    // Staggered section reveals
    gsap.from('.ds-section', {
      y: 40,
      opacity: 0,
      stagger: 0.15,
      duration: 0.8,
      ease: 'power2.out',
      scrollTrigger: {
        trigger: '.ds-section',
        start: 'top 85%',
      }
    });

    // Highlight boxes
    gsap.from('.ds-highlight', {
      scaleY: 0,
      transformOrigin: 'bottom',
      duration: 0.6,
      ease: 'power2.out',
      scrollTrigger: {
        trigger: '.ds-highlight',
        start: 'top 80%',
      }
    });
  }, { scope: containerRef });

  return (
    <div ref={containerRef} className="bg-white">
      {/* Hero */}
      <section className="py-5 px-4 px-lg-5" style={{ backgroundColor: '#0f172a' }}>
        <div className="container-fluid px-0">
          <div className="row">
            <div className="col-12 col-lg-8">
              <p className="text-uppercase gs mb-3" style={{
                color: '#94a3b8',
                fontSize: '12px',
                letterSpacing: '0.15em',
                fontWeight: '500'
              }}>
                Made Right Studio
              </p>
              <h1 className="lora mb-4" style={{
                fontSize: 'clamp(3rem, 8vw, 6rem)',
                lineHeight: '1.05',
                letterSpacing: '-0.03em',
                color: '#FAF6EB',
                fontWeight: '700'
              }}>
                Design System
              </h1>
              <p className="gs mb-0" style={{
                fontSize: '20px',
                lineHeight: '1.6',
                color: '#cbd5e1',
                maxWidth: '600px'
              }}>
                Bold Visual Execution + Memorable Moments
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Core Philosophy */}
      <section className="ds-section py-5 px-4 px-lg-5" style={{ backgroundColor: '#FAF6EB' }}>
        <div className="container-fluid px-0">
          <div className="row">
            <div className="col-12 col-lg-10">
              <h2 className="lora mb-4" style={{
                fontSize: 'clamp(2rem, 5vw, 3.5rem)',
                lineHeight: '1.1',
                letterSpacing: '-0.02em',
                color: '#0f172a',
                fontWeight: '700'
              }}>
                Core Philosophy
              </h2>

              <div className="mb-5 p-4 position-relative" style={{ backgroundColor: '#fff', borderRadius: '8px' }}>
                <div className="ds-highlight position-absolute top-0 start-0 w-100 h-100" style={{
                  backgroundColor: '#A1ADEB',
                  opacity: '0.1',
                  borderRadius: '8px'
                }}></div>
                <p className="gs mb-3" style={{
                  fontSize: '18px',
                  lineHeight: '1.8',
                  color: '#0f172a',
                  position: 'relative'
                }}>
                  <strong>The Formula:</strong>
                </p>
                <pre className="gs mb-0" style={{
                  fontSize: '16px',
                  lineHeight: '1.8',
                  color: '#334155',
                  fontFamily: 'monospace',
                  backgroundColor: 'transparent',
                  border: 'none',
                  position: 'relative'
                }}>
{`Made Right = Bauhaus Grid Discipline
           + Neighborhood Craft Warmth
           + Bold Visual Surprise
           + Smooth Purposeful Animation
           + Every Component Has a Memorable Moment`}
                </pre>
              </div>

              <div className="row g-4 mb-5">
                <div className="col-12 col-md-6">
                  <div className="p-4" style={{ backgroundColor: '#fff', borderRadius: '8px', height: '100%' }}>
                    <h3 className="gs mb-3" style={{
                      fontSize: '20px',
                      fontWeight: '600',
                      color: '#0f172a',
                      letterSpacing: '-0.01em'
                    }}>
                      Mission
                    </h3>
                    <p className="gs mb-0" style={{
                      fontSize: '18px',
                      lineHeight: '1.6',
                      color: '#475569'
                    }}>
                      Create components that make users pause and say "that's well done."
                    </p>
                  </div>
                </div>
                <div className="col-12 col-md-6">
                  <div className="p-4" style={{ backgroundColor: '#134e4a', borderRadius: '8px', height: '100%' }}>
                    <h3 className="gs mb-3" style={{
                      fontSize: '20px',
                      fontWeight: '600',
                      color: '#FAF6EB',
                      letterSpacing: '-0.01em'
                    }}>
                      The Non-Negotiable
                    </h3>
                    <p className="gs mb-0" style={{
                      fontSize: '18px',
                      lineHeight: '1.6',
                      color: '#d1fae5'
                    }}>
                      Every component must surprise through typography, layout, interaction, or color.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Four Surprise Types */}
      <section className="ds-section py-5 px-4 px-lg-5">
        <div className="container-fluid px-0">
          <div className="row">
            <div className="col-12">
              <h2 className="lora mb-5" style={{
                fontSize: 'clamp(2rem, 5vw, 3.5rem)',
                lineHeight: '1.1',
                letterSpacing: '-0.02em',
                color: '#0f172a',
                fontWeight: '700'
              }}>
                The Four Surprise Types
              </h2>

              <div className="row g-4">
                {[
                  {
                    title: 'Typography Surprise',
                    items: ['80-120px headlines', 'Tight tracking (-0.03em)', 'Unexpected italic emphasis', 'Bold statements'],
                    bg: '#FFF7AF'
                  },
                  {
                    title: 'Layout Surprise',
                    items: ['Edge-to-edge sections', 'Asymmetric 2/3 + 1/3 splits', 'Off-grid positioning', 'Full-bleed backgrounds'],
                    bg: '#A1ADEB'
                  },
                  {
                    title: 'Interaction Surprise',
                    items: ['Magnetic hover', 'Letter-by-letter reveals', 'Custom cursor states', '3D transforms on hover'],
                    bg: '#E9D5FF'
                  },
                  {
                    title: 'Color Surprise',
                    items: ['Warm off-white (#FAF6EB)', 'Bold accents', 'Unexpected transitions', 'Background shifts'],
                    bg: '#E8DAC8'
                  }
                ].map((surprise, index) => (
                  <div key={index} className="col-12 col-md-6 col-lg-3">
                    <div className="p-4 h-100" style={{
                      backgroundColor: surprise.bg,
                      borderRadius: '8px'
                    }}>
                      <h3 className="gs mb-3" style={{
                        fontSize: '18px',
                        fontWeight: '700',
                        color: '#0f172a',
                        letterSpacing: '-0.01em'
                      }}>
                        {surprise.title}
                      </h3>
                      <ul className="list-unstyled mb-0">
                        {surprise.items.map((item, i) => (
                          <li key={i} className="gs mb-2" style={{
                            fontSize: '14px',
                            lineHeight: '1.6',
                            color: '#334155'
                          }}>
                            • {item}
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                ))}
              </div>

              <div className="mt-4 p-4 text-center" style={{
                backgroundColor: '#0f172a',
                borderRadius: '8px'
              }}>
                <p className="gs mb-0" style={{
                  fontSize: '18px',
                  fontWeight: '600',
                  color: '#FFF7AF',
                  letterSpacing: '-0.01em'
                }}>
                  Minimum Requirement: Every component needs AT LEAST ONE surprise type.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Typography System */}
      <section className="ds-section py-5 px-4 px-lg-5" style={{ backgroundColor: '#FAF6EB' }}>
        <div className="container-fluid px-0">
          <div className="row">
            <div className="col-12 col-lg-10">
              <h2 className="lora mb-5" style={{
                fontSize: 'clamp(2rem, 5vw, 3.5rem)',
                lineHeight: '1.1',
                letterSpacing: '-0.02em',
                color: '#0f172a',
                fontWeight: '700'
              }}>
                Typography System
              </h2>

              <div className="mb-5">
                <h3 className="gs mb-4" style={{
                  fontSize: '24px',
                  fontWeight: '600',
                  color: '#0f172a',
                  letterSpacing: '-0.015em'
                }}>
                  Scale
                </h3>
                <div className="row g-4">
                  {[
                    { label: 'Display', size: '80-120px', example: 'We accept TRICARE' },
                    { label: 'Headers', size: '36-60px', example: 'About our practice' },
                    { label: 'Body', size: '18-20px', example: 'Generous, readable, accessible' },
                    { label: 'Labels', size: '12px', example: 'IN-NETWORK PROVIDER' }
                  ].map((type, index) => (
                    <div key={index} className="col-12">
                      <div className="p-4" style={{
                        backgroundColor: '#fff',
                        borderRadius: '8px',
                        borderLeft: '4px solid #134e4a'
                      }}>
                        <div className="d-flex justify-content-between align-items-start mb-2">
                          <span className="gs" style={{
                            fontSize: '14px',
                            fontWeight: '700',
                            color: '#134e4a',
                            textTransform: 'uppercase',
                            letterSpacing: '0.1em'
                          }}>
                            {type.label}
                          </span>
                          <span className="gs" style={{
                            fontSize: '14px',
                            color: '#64748b',
                            fontFamily: 'monospace'
                          }}>
                            {type.size}
                          </span>
                        </div>
                        <p className="lora mb-0" style={{
                          fontSize: index === 0 ? '32px' : index === 1 ? '24px' : index === 2 ? '18px' : '12px',
                          color: '#0f172a',
                          letterSpacing: index === 3 ? '0.15em' : index === 0 ? '-0.03em' : '-0.015em',
                          textTransform: index === 3 ? 'uppercase' : 'none'
                        }}>
                          {type.example}
                        </p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Absolute Prohibitions */}
      <section className="ds-section py-5 px-4 px-lg-5" style={{ backgroundColor: '#0f172a' }}>
        <div className="container-fluid px-0">
          <div className="row">
            <div className="col-12 col-lg-10">
              <h2 className="lora mb-5" style={{
                fontSize: 'clamp(2rem, 5vw, 3.5rem)',
                lineHeight: '1.1',
                letterSpacing: '-0.02em',
                color: '#FAF6EB',
                fontWeight: '700'
              }}>
                Absolute Prohibitions
              </h2>

              <div className="row g-3">
                {[
                  'No pure #000 or #FFF',
                  'No default letter-spacing',
                  'No 50/50 layouts',
                  'No components below 5/10',
                  'No linear easing',
                  'No more than 2 font families'
                ].map((rule, index) => (
                  <div key={index} className="col-12 col-md-6">
                    <div className="p-3" style={{
                      backgroundColor: '#1e293b',
                      borderRadius: '8px',
                      borderLeft: '3px solid #ef4444'
                    }}>
                      <p className="gs mb-0" style={{
                        fontSize: '16px',
                        color: '#fca5a5',
                        fontWeight: '500'
                      }}>
                        ❌ {rule}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* The Made Right Promise */}
      <section className="ds-section py-5 px-4 px-lg-5" style={{ backgroundColor: '#FFF7AF' }}>
        <div className="container-fluid px-0">
          <div className="row justify-content-center">
            <div className="col-12 col-lg-8 text-center">
              <h2 className="lora mb-4" style={{
                fontSize: 'clamp(2rem, 5vw, 3.5rem)',
                lineHeight: '1.1',
                letterSpacing: '-0.02em',
                color: '#0f172a',
                fontWeight: '700'
              }}>
                The Made Right Promise
              </h2>
              <p className="gs mb-0" style={{
                fontSize: '20px',
                lineHeight: '1.6',
                color: '#334155'
              }}>
                Every component should surprise, delight, adapt, and perform smoothly.
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

export default DesignSystem;
