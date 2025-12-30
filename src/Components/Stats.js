import React, { useRef } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { useGSAP } from '@gsap/react';
import square from './Images/l.png';

gsap.registerPlugin(ScrollTrigger);

function Stats() {
  const containerRef = useRef();
  const statsRefs = useRef([]);
  const valueRefs = useRef([]);

  const metrics = [
    {
      value: '1.3',
      suffix: 's',
      label: 'Avg. Load Time',
      sublabel: 'Faster than 95% of websites'
    },
    {
      value: '35',
      suffix: '%',
      label: 'Avg. Conversion Lift',
      sublabel: 'More leads from your website'
    },
    {
      value: '5',
      suffix: '+',
      label: 'Year Lifespan',
      sublabel: 'Built to scale, not rebuild'
    },
    {
      value: '90',
      suffix: '+',
      label: 'Performance Scores',
      sublabel: 'Lighthouse & Core Web Vitals'
    },
  ];

  useGSAP(() => {
    const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;

    if (prefersReducedMotion) {
      // Set final values immediately without animation
      valueRefs.current.forEach((valueEl, index) => {
        if (!valueEl) return;
        const metric = metrics[index];
        valueEl.textContent = `${metric.prefix || ''}${metric.value}${metric.suffix || ''}`;
      });
      return;
    }

    statsRefs.current.forEach((stat, index) => {
      if (!stat) return;
      const valueEl = valueRefs.current[index];
      if (!valueEl) return;

      const metric = metrics[index];
      const targetValue = parseFloat(metric.value);
      const startValue = index === 0 ? 1.0 : 0; // First metric starts at 1.0
      const counterObj = { val: startValue };

      // Fade in animation with subtle scale
      gsap.from(stat, {
        scrollTrigger: {
          trigger: stat,
          start: 'top 85%',
          once: true,
        },
        opacity: 0,
        y: 40,
        scale: 0.95,
        duration: 0.8,
        ease: 'power2.out',
        delay: index * 0.12
      });

      // Counter animation
      gsap.to(counterObj, {
        val: targetValue,
        scrollTrigger: {
          trigger: stat,
          start: 'top 85%',
          once: true,
        },
        duration: 1.5,
        ease: 'power2.out',
        delay: index * 0.12,
        onUpdate: () => {
          const currentValue = index === 0
            ? counterObj.val.toFixed(1)
            : Math.floor(counterObj.val);
          valueEl.textContent = `${metric.prefix || ''}${currentValue}${metric.suffix || ''}`;
        },
        onComplete: () => {
          // Ensure final value is exact
          valueEl.textContent = `${metric.prefix || ''}${metric.value}${metric.suffix || ''}`;
        }
      });

      // Hover interaction - subtle lift
      stat.addEventListener('mouseenter', () => {
        gsap.to(stat, {
          y: -4,
          duration: 0.3,
          ease: 'power2.out'
        });
      });

      stat.addEventListener('mouseleave', () => {
        gsap.to(stat, {
          y: 0,
          duration: 0.4,
          ease: 'power2.inOut'
        });
      });
    });
  }, { scope: containerRef });

  return (
    <>
      {/* Divider */}
      <div style={{
        backgroundColor: '#ffffff',
        padding: '48px 16px'
      }}>
        <div style={{
          maxWidth: '1200px',
          margin: '0 auto',
          height: '1px',
          backgroundColor: '#e2e8f0'
        }} />
      </div>

      <section
        ref={containerRef}
        aria-labelledby="stats-heading"
        style={{
          backgroundColor: '#ffffff',
          paddingTop: '48px',
          paddingBottom: '128px'
        }}
      >
      <style>{`
        @media (min-width: 992px) {
          section[aria-labelledby="stats-heading"] {
            padding-top: 128px !important;
            padding-bottom: 192px !important;
          }
        }
        @media (max-width: 991px) {
          .stats-grid-mobile > .col-6:nth-child(odd) {
            padding-right: 2px;
          }
          .stats-grid-mobile > .col-6:nth-child(even) {
            padding-left: 2px;
          }
        }
      `}</style>
      <div className="container-fluid px-4 px-lg-5" style={{ maxWidth: '1200px', margin: '0 auto' }}>
        {/* Section Header - Asymmetric 2/3 layout */}
        <header className="mb-5 mb-lg-6">
          <div className="row g-0">
            <div className="col-12 col-lg-8">
              <p
                className="gs mb-3 lora spaced-underline-2 px-1"
                style={{
                  fontSize: '12px',
                  textTransform: 'uppercase',
                  letterSpacing: '0.15em',
                  fontWeight: '600',
                  color: '#64748b'
                }}
              >
            <span className=' font-light lora'>WHY MADE RIGHT</span> ?
              </p>
              <h2
                id="stats-heading"
                className="lora mb-4"
                style={{
                  fontSize: 'clamp(2rem, 9vw, 6rem)',
                  lineHeight: '1.05',
                  letterSpacing: '-0.03em',
                  fontWeight: '700',
                  color: '#0f172a'
                }}
              >
                Performance that matters.
              </h2>
              <p
                className="gs mb-0"
                style={{
                  fontSize: '18px',
                  lineHeight: '1.7',
                  letterSpacing: '-0.012em',
                  color: '#64748b',
                  maxWidth: '560px',
                  fontWeight: '400'
                }}
              >
                Built into every project are the best technical practices that help your website perform optimally for users and search engines.
              </p>
            </div>
          </div>
        </header>

        {/* Stats Grid - Architectural blocks */}
        <div className="row g-0 row-gap-0 stats-grid-mobile">
              {metrics.map((metric, index) => (
                <div key={index} className="col-6 col-lg-3">
                  <div
                    ref={el => statsRefs.current[index] = el}
                    className="text-start p-4 p-lg-5 position-relative"
                    style={{
                      height: '100%',
                      minHeight: window.innerWidth < 992 ? '160px' : '240px',
                      cursor: 'default',
                      transition: 'box-shadow 0.3s ease',
                      overflow: 'hidden',
                      wordWrap: 'break-word'
                    }}
                    onMouseEnter={(e) => {
                      e.currentTarget.style.boxShadow = '0 4px 20px rgba(15, 23, 42, 0.08)';
                    }}
                    onMouseLeave={(e) => {
                      e.currentTarget.style.boxShadow = 'none';
                    }}
                  >
                    {/* Background square image */}
                    <img
                      src={square}
                      alt=""
                      className="position-absolute"
                      style={{
                        top: '50%',
                        left: '50%',
                        transform: 'translate(-50%, -50%)',
                        width: '98%',
                        height: '98%',
                        objectFit: 'contain',
                        filter: index === 0
                          ? 'brightness(0) saturate(100%) invert(93%) sepia(61%) saturate(514%) hue-rotate(322deg) brightness(104%) contrast(101%)'
                          : index === 1
                          ? 'brightness(0) saturate(100%) invert(73%) sepia(19%) saturate(1044%) hue-rotate(192deg) brightness(93%) contrast(87%)'
                          : index === 2
                          ? 'brightness(0) saturate(100%) invert(92%) sepia(14%) saturate(1151%) hue-rotate(235deg) brightness(102%) contrast(98%)'
                          : 'brightness(0) saturate(100%) invert(85%) sepia(8%) saturate(450%) hue-rotate(350deg) brightness(98%) contrast(92%)',
                        zIndex: 0
                      }}
                    />

                    {/* Crayon/pencil texture overlay */}
                    <div
                      className="position-absolute"
                      style={{
                        top: '50%',
                        left: '50%',
                        transform: 'translate(-50%, -50%)',
                        width: '98%',
                        height: '98%',
                        backgroundImage: `url("data:image/svg+xml,%3Csvg width='200' height='200' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='grainy'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='2' result='noise'/%3E%3CfeColorMatrix in='noise' type='saturate' values='0'/%3E%3CfeComponentTransfer%3E%3CfeFuncA type='discrete' tableValues='0 0 0 0 0 1 0 1 0 1'/%3E%3C/feComponentTransfer%3E%3C/filter%3E%3Crect width='200' height='200' filter='url(%23grainy)' opacity='1'/%3E%3C/svg%3E")`,
                        backgroundSize: '120px 120px',
                        mixBlendMode: 'multiply',
                        opacity: 0.06,
                        zIndex: 1,
                        pointerEvents: 'none'
                      }}
                    />

                    <div
                      ref={el => valueRefs.current[index] = el}
                      className="lora mb-3 position-relative"
                      style={{
                        fontSize: window.innerWidth < 992 ? 'clamp(2.2rem, 6vw, 5rem)' : 'clamp(2.8rem, 6vw, 5rem)',
                        lineHeight: '1',
                        letterSpacing: '-0.03em',
                        fontWeight: '700',
                        color: '#1e293b',
                        paddingTop: window.innerWidth < 992 ? '8px' : '0',
                        zIndex: 2
                      }}
                    >
                      {metric.prefix || ''}{metric.value}{metric.suffix || ''}
                    </div>
                    <div
                      className="gs mb-2 position-relative"
                      style={{
                        fontSize: window.innerWidth < 992 ? '14px' : '16px',
                        fontWeight: '600',
                        letterSpacing: '-0.015em',
                        color: index === 0
                          ? '#B8A030'  // Darker yellow
                          : index === 1
                          ? '#5B6DB8'  // Darker blue
                          : index === 2
                          ? '#9B7CB8'  // Darker purple
                          : '#A89780', // Darker warm gray
                        zIndex: 2
                      }}
                    >
                      {metric.label}
                    </div>
                    <div
                      className="gs position-relative"
                      style={{
                        fontSize: window.innerWidth < 992 ? '12px' : '13px',
                        lineHeight: '1.5',
                        letterSpacing: '-0.01em',
                        color: index === 0
                          ? '#9A8528'  // Even darker yellow
                          : index === 1
                          ? '#4A5C9A'  // Even darker blue
                          : index === 2
                          ? '#7D649A'  // Even darker purple
                          : '#8A7D68', // Even darker warm gray
                        zIndex: 2
                      }}
                    >
                      {metric.sublabel}
                    </div>
                  </div>
                </div>
              ))}
        </div>

      </div>
    </section>
    </>
  );
}

export default Stats;
