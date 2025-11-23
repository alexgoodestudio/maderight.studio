import React, { useRef } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { useGSAP } from '@gsap/react';

gsap.registerPlugin(ScrollTrigger);

function Stats() {
  const containerRef = useRef();
  const statsRefs = useRef([]);
  const valueRefs = useRef([]);

  const metrics = [
    {
      value: '98',
      suffix: '%',
      label: 'Lighthouse Score',
      sublabel: 'Performance, accessibility, SEO',
      color: '#115e59',
      textColor: '#0f172a'
    },
    {
      value: '2',
      prefix: '<',
      suffix: 's',
      label: 'Time to Interactive',
      sublabel: 'Measured on 4G mobile',
      color: '#115e59',
      textColor: '#0f172a'
    },
    {
      value: '5',
      suffix: '+',
      label: 'Year Lifespan',
      sublabel: 'Built to scale, not rebuild',
      color: '#115e59',
      textColor: '#0f172a'
    },
    {
      value: '300',
      suffix: '%',
      label: 'SEO Improvement',
      sublabel: 'vs. Wix, Squarespace, WordPress',
      color: '#115e59',
      textColor: '#0f172a'
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
      const counterObj = { val: 0 };

      // Fade in animation
      gsap.from(stat, {
        scrollTrigger: {
          trigger: stat,
          start: 'top 85%',
          once: true,
        },
        opacity: 0,
        y: 30,
        duration: 0.6,
        ease: 'power2.out',
        delay: index * 0.1
      });

      // Counter animation
      gsap.to(counterObj, {
        val: targetValue,
        scrollTrigger: {
          trigger: stat,
          start: 'top 85%',
          once: true,
        },
        duration: 1.2,
        ease: 'power2.out',
        delay: index * 0.1,
        onUpdate: () => {
          const currentValue = Math.floor(counterObj.val);
          valueEl.textContent = `${metric.prefix || ''}${currentValue}${metric.suffix || ''}`;
        },
        onComplete: () => {
          // Ensure final value is exact
          valueEl.textContent = `${metric.prefix || ''}${metric.value}${metric.suffix || ''}`;
        }
      });
    });
  }, { scope: containerRef });

  return (
    <section
      className="bg-white text-slate-900 pb-5"
      ref={containerRef}
      aria-labelledby="stats-heading"
    >
      <div className="container-fluid py-5 py-lg-6">
        <div className="row">
          <div className="col-12 px-4 px-lg-5">

            {/* Section Header */}
            <header className="text-start mb-5 mb-lg-6">
              <div className="row">
                <div className="col-12 col-lg-8">
                  <h2
                    id="stats-heading"
                    className="text-5xl text-lg-6xl gs font-bold mb-3"
                    style={{ letterSpacing: '-0.015em', lineHeight: '1.1' }}
                  >
                    Performance that matters.
                  </h2>
                  <p
                    className="text-lg gs text-slate-700 mb-0"
                    style={{
                      letterSpacing: '-0.01em',
                      lineHeight: '1.6',
                      maxWidth: '60ch'
                    }}
                  >
                    Built into every project are the best technical practices that help your website perform optimally for users and search engines.
                  </p>
                </div>
              </div>
            </header>

            {/* Stats Grid */}
            <div className="row g-4">
              {metrics.map((metric, index) => (
                <div key={index} className="col-6 col-lg-3">
                  <div
                    ref={el => statsRefs.current[index] = el}
                    className="text-start"
                  >
                    <div
                      ref={el => valueRefs.current[index] = el}
                      className="text-6xl text-lg-7xl gs font-bold mb-2"
                      style={{
                        letterSpacing: '-0.025em',
                        lineHeight: '1',
                        color: metric.color
                      }}
                    >
                      {metric.prefix || ''}{metric.value}{metric.suffix || ''}
                    </div>
                    <div
                      className="text-lg gs font-medium mb-1"
                      style={{
                        letterSpacing: '-0.005em',
                        lineHeight: '1.3',
                        color: metric.textColor
                      }}
                    >
                      {metric.label}
                    </div>
                    <div
                      className="text-sm gs mb-1"
                      style={{
                        letterSpacing: '0em',
                        lineHeight: '1.4',
                        color: metric.textColor,
                        opacity: 0.8
                      }}
                    >
                      {metric.sublabel}
                    </div>
                  </div>
                </div>
              ))}
            </div>

          </div>
        </div>
      </div>
    </section>
  );
}

export default Stats;
