import React, { useRef } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { useGSAP } from '@gsap/react';

gsap.registerPlugin(ScrollTrigger);

function Stats() {
  const containerRef = useRef();
  const cardRefs = useRef([]);
  const headingRef = useRef();
  const subheadRef = useRef();
  const trustRef = useRef();

  const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;

  const outcomes = [
    {
      problem: "Hidden from customers",
      solution: "Found on Google",
      before: "Your site doesn't show up when people search for what you do",
      after: "Customers find you first — before your competitors",
      impact: "More calls, more visits, more business"
    },
    {
      problem: "Slow and frustrating",
      solution: "Fast on every device",
      before: "Customers leave before your site finishes loading",
      after: "Pages appear instantly, even on phones with weak signal",
      impact: "Visitors stay and explore"
    },
    {
      problem: "Constant tech problems",
      solution: "Built to last",
      before: "Plugin conflicts, broken updates, emergency fixes",
      after: "Runs smoothly for years without constant maintenance",
      impact: "You focus on your business, not your website"
    },
    {
      problem: "Hard to manage",
      solution: "Easy to update",
      before: "Pay someone every time you need to change a menu or add a photo",
      after: "Update content yourself in minutes, no technical knowledge needed",
      impact: "Total control, no waiting"
    }
  ];

  useGSAP(() => {
    if (!prefersReducedMotion) {
      // Entrance animations
      gsap.from([headingRef.current, subheadRef.current], {
        opacity: 0,
        y: 30,
        duration: 0.8,
        stagger: 0.15,
        ease: 'power2.out'
      });

      // Card animations on scroll
      cardRefs.current.forEach((card, index) => {
        if (!card) return;

        gsap.from(card, {
          scrollTrigger: {
            trigger: card,
            start: 'top 85%',
            once: true,
          },
          opacity: 0,
          y: 40,
          duration: 0.7,
          ease: 'power2.out',
          delay: index * 0.1
        });
      });

      // Trust section animation
      if (trustRef.current) {
        gsap.from(trustRef.current, {
          scrollTrigger: {
            trigger: trustRef.current,
            start: 'top 85%',
            once: true,
          },
          opacity: 0,
          y: 30,
          duration: 0.8,
          ease: 'power2.out'
        });
      }
    }
  }, { scope: containerRef });

  return (
    <section 
      className="bg-stone-50 text-slate-900" 
      ref={containerRef}
      aria-labelledby="outcomes-heading"
    >
      <div className="container-fluid py-5 py-lg-6">
        <div className="row">
          <div className="col-12 px-4 px-md-5">
            
            {/* Section Header */}
            <header className="row mb-5 mb-lg-6 text-start">
              <div className="col-12 col-lg-10">
                <p 
                  className="text-xs text-slate-600 mb-3"
                  style={{ 
                    letterSpacing: '0.15em', 
                    textTransform: 'uppercase',
                    fontWeight: '500'
                  }}
                >
                  The Difference
                </p>
                <h2 
                  id="outcomes-heading"
                  ref={headingRef} 
                  className="text-5xl text-lg-6xl font-bold mb-4"
                  style={{ letterSpacing: '-0.015em', lineHeight: '1.1' }}
                >
                  Built right vs built wrong
                </h2>
                <p 
                  ref={subheadRef}
                  className="text-lg text-slate-700 mb-0"
                  style={{ 
                    letterSpacing: '-0.01em',
                    lineHeight: '1.6',
                    maxWidth: '65ch'
                  }}
                >
                  Your website is a tool for your business. When it's built with care and precision, 
                  it works for you every day. When it's not, you're constantly fixing problems instead of serving customers.
                </p>
              </div>
            </header>

            {/* Outcomes Grid */}
            <div className="row g-4 mb-5 mb-lg-6">
              {outcomes.map((outcome, index) => (
                <div key={index} className="col-12 col-lg-6">
                  <article 
                    ref={el => cardRefs.current[index] = el}
                    className="h-100 bg-white border border-slate-200 p-4 p-lg-5"
                    style={{ borderRadius: '24px' }}
                  >
                    {/* Problem → Solution Header */}
                    <div className="mb-4 pb-4 border-bottom border-slate-200">
                      <div className="d-flex align-items-center gap-3 mb-2">
                        <span 
                          className="text-slate-400"
                          style={{ 
                            fontSize: '1.25rem',
                            letterSpacing: '-0.01em'
                          }}
                        >
                          {outcome.problem}
                        </span>
                        <svg 
                          width="20" 
                          height="20" 
                          viewBox="0 0 20 20" 
                          fill="none"
                          className="text-slate-400"
                          style={{ flexShrink: 0 }}
                        >
                          <path 
                            d="M7.5 15L12.5 10L7.5 5" 
                            stroke="currentColor" 
                            strokeWidth="2" 
                            strokeLinecap="round" 
                            strokeLinejoin="round"
                          />
                        </svg>
                      </div>
                      <h3 
                        className="text-2xl font-bold text-slate-900 mb-0"
                        style={{ letterSpacing: '-0.01em', lineHeight: '1.2' }}
                      >
                        {outcome.solution}
                      </h3>
                    </div>

                    {/* Before State */}
                    <div className="mb-4">
                      <p 
                        className="text-xs text-slate-600 mb-2"
                        style={{ 
                          letterSpacing: '0.05em', 
                          textTransform: 'uppercase',
                          fontWeight: '600'
                        }}
                      >
                        Built Wrong
                      </p>
                      <p 
                        className="text-base text-slate-700 mb-0"
                        style={{ 
                          letterSpacing: '0em',
                          lineHeight: '1.5'
                        }}
                      >
                        {outcome.before}
                      </p>
                    </div>

                    {/* After State */}
                    <div className="mb-4">
                      <p 
                        className="text-xs text-slate-600 mb-2"
                        style={{ 
                          letterSpacing: '0.05em', 
                          textTransform: 'uppercase',
                          fontWeight: '600'
                        }}
                      >
                        Built Right
                      </p>
                      <p 
                        className="text-base text-slate-900 mb-0"
                        style={{ 
                          letterSpacing: '0em',
                          lineHeight: '1.5',
                          fontWeight: '500'
                        }}
                      >
                        {outcome.after}
                      </p>
                    </div>

                    {/* Impact */}
                    <div 
                      className="pt-4 border-top border-slate-200"
                    >
                      <p 
                        className="text-sm text-emerald-700 mb-0"
                        style={{ 
                          letterSpacing: '0em',
                          fontWeight: '600'
                        }}
                      >
                        → {outcome.impact}
                      </p>
                    </div>
                  </article>
                </div>
              ))}
            </div>

            {/* Trust Section */}
            <div className="row">
              <div className="col-12">
                <div 
                  ref={trustRef}
                  className="bg-white border border-slate-200 p-4 p-lg-5 text-center"
                  style={{ borderRadius: '24px' }}
                >
                  <div className="row justify-content-center">
                    <div className="col-12 col-lg-10 col-xl-8">
                      <p 
                        className="text-xs text-slate-600 mb-3"
                        style={{ 
                          letterSpacing: '0.15em', 
                          textTransform: 'uppercase',
                          fontWeight: '500'
                        }}
                      >
                        How We Work
                      </p>
                      <h3 
                        className="text-3xl font-bold text-slate-900 mb-4"
                        style={{ letterSpacing: '-0.01em', lineHeight: '1.2' }}
                      >
                        Precision meets warmth
                      </h3>
                      <p 
                        className="text-lg text-slate-700 mb-4"
                        style={{ 
                          letterSpacing: '-0.01em',
                          lineHeight: '1.6'
                        }}
                      >
                        We bring institutional design rigor to neighborhood businesses. Every site is built 
                        with the same care and systematic thinking we'd use for a museum or design school — 
                        because your business deserves that level of craft.
                      </p>
                      
                      {/* Trust Metrics */}
                      <div className="row g-4 mt-4">
                        <div className="col-12 col-md-4">
                          <div className="text-4xl font-bold text-slate-900 mb-2" style={{ letterSpacing: '-0.015em' }}>
                            15+
                          </div>
                          <div className="text-sm text-slate-600" style={{ letterSpacing: '0.005em' }}>
                            Years building for businesses like yours
                          </div>
                        </div>
                        <div className="col-12 col-md-4">
                          <div className="text-4xl font-bold text-slate-900 mb-2" style={{ letterSpacing: '-0.015em' }}>
                            100%
                          </div>
                          <div className="text-sm text-slate-600" style={{ letterSpacing: '0.005em' }}>
                            Built in Columbia, SC — no outsourcing
                          </div>
                        </div>
                        <div className="col-12 col-md-4">
                          <div className="text-4xl font-bold text-slate-900 mb-2" style={{ letterSpacing: '-0.015em' }}>
                            5+ years
                          </div>
                          <div className="text-sm text-slate-600" style={{ letterSpacing: '0.005em' }}>
                            Average lifespan of our websites
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

          </div>
        </div>
      </div>

      <style jsx>{`
        @media (prefers-reduced-motion: reduce) {
          * {
            animation: none !important;
            transition: none !important;
          }
        }
      `}</style>
    </section>
  );
}

export default Stats;