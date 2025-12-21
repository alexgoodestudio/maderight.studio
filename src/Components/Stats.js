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
      value: '1.6',
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
      value: '300',
      suffix: '%',
      label: 'SEO Improvement',
      sublabel: 'vs. Wix, Squarespace or WordPress Sites'
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
    });
  }, { scope: containerRef });

  return (
    <section
      className="bg-white text-slate-900"
      ref={containerRef}
      aria-labelledby="stats-heading"
      style={{
        paddingTop: '80px',
        paddingLeft: '30px',
        paddingRight: '30px',
        paddingBottom: '120px'
      }}
    >
      <style>{`
        @media (min-width: 992px) {
          section[aria-labelledby="stats-heading"] {
            padding-bottom: 200px !important;
          }
        }
      `}</style>
      <div className="container-fluid px-1 px-lg-5">
        {/* Section Header */}
        <header className="text-start mb-5 mb-lg-6">
          <div className="row">
            <div className="col-12 col-lg-8">
              <h2
                id="stats-heading"
                className="text-4xl text-lg-6xl lora font-black mb-3 section-heading"
              >
                Performance that matters.
              </h2>
              <p
                className="text-xl gs text-slate-700 mb-0 section-description"
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
                      className="text-5xl nunito-semi-bold mb-2 text-teal-900 stat-value"
                    >
                      {metric.prefix || ''}{metric.value}{metric.suffix || ''}
                    </div>
                    <div
                      className="text-xl pt-2 gs font-medium mb-1 stat-label"
                    >
                      {metric.label}
                    </div>
                    <div
                      className="text-sm gs mb-1 stat-sublabel"
                    >
                      {metric.sublabel}
                    </div>
                  </div>
                </div>
              ))}
        </div>
      </div>
    </section>
  );
}

export default Stats;
