import React, { useRef } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { useGSAP } from '@gsap/react';

gsap.registerPlugin(ScrollTrigger);

function Stats() {
  const containerRef = useRef();
  const metricsRef = useRef([]);
  const headingRef = useRef();
  const totalHoursRef = useRef();

  const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;

  const timeMetrics = [
    {
      task: 'Weekly website updates',
      typical: 180,
      optimized: 30,
      label: 'Product photos, menu changes, event posts'
    },
        {
      task: 'Mobile experience fixes',
      typical: 90,
      optimized: 0,
      label: 'Responsive design built right from the start'
    },
    {
      task: 'Monthly content publishing',
      typical: 240,
      optimized: 60,
      label: 'Blog posts, announcements, seasonal updates'
    },
    {
      task: 'Technical troubleshooting',
      typical: 120,
      optimized: 15,
      label: 'Broken links, layout issues, plugin conflicts'
    },
  ];

  const totalTypical = timeMetrics.reduce((sum, m) => sum + m.typical, 0);
  const totalOptimized = timeMetrics.reduce((sum, m) => sum + m.optimized, 0);
  const totalSaved = totalTypical - totalOptimized;

  useGSAP(() => {
    if (!prefersReducedMotion) {
      gsap.from(headingRef.current, {
        opacity: 0,
        y: 30,
        duration: 0.8,
        ease: 'power2.out'
      });

      ScrollTrigger.create({
        trigger: totalHoursRef.current,
        start: 'top 75%',
        once: true,
        onEnter: () => {
          const counter = { val: 0 };
          gsap.to(counter, {
            val: totalSaved / 60,
            duration: 2,
            ease: 'power2.out',
            onUpdate: () => {
              totalHoursRef.current.textContent = Math.floor(counter.val);
            }
          });
        }
      });

      metricsRef.current.forEach((metric, index) => {
        if (!metric) return;

        const progressBar = metric.querySelector('.progress-fill');
        const savedMinutes = metric.querySelector('.saved-minutes');
        const saved = timeMetrics[index].typical - timeMetrics[index].optimized;

        ScrollTrigger.create({
          trigger: metric,
          start: 'top 80%',
          once: true,
          onEnter: () => {
            gsap.from(metric, {
              opacity: 0,
              x: index % 2 === 0 ? -30 : 30,
              duration: 0.8,
              ease: 'power2.out'
            });

            gsap.from(progressBar, {
              scaleX: 0,
              transformOrigin: 'left',
              duration: 1.2,
              ease: 'power3.inOut',
              delay: 0.2
            });

            const counter = { val: 0 };
            gsap.to(counter, {
              val: saved,
              duration: 1.5,
              ease: 'power2.out',
              delay: 0.3,
              onUpdate: () => {
                savedMinutes.textContent = Math.floor(counter.val);
              }
            });
          }
        });
      });
    } else {
      totalHoursRef.current.textContent = Math.floor(totalSaved / 60);
      metricsRef.current.forEach((metric, index) => {
        if (!metric) return;
        const savedMinutes = metric.querySelector('.saved-minutes');
        const saved = timeMetrics[index].typical - timeMetrics[index].optimized;
        savedMinutes.textContent = saved;
      });
    }
  }, { scope: containerRef });

  return (
    <div className="bg-white text-slate-900" ref={containerRef}>
      <div className="container-fluid py-5">
        <div className="row">
          <div className="col-12 px-4 px-md-5">
            
            <div className="row mb-5 text-start">
              <div className="col-12 col-lg-10 col-xl-8">
                <div className="text-xs text-slate-600 mb-3">
                  Time Reclaimed
                </div>
                <h2 ref={headingRef} className="text-6xl font-bold mb-4">
                  <span ref={totalHoursRef} className="text-slate-900">0</span> hours 
                  <span className="text-slate-400"> saved monthly</span>
                </h2>
                <p className="text-lg text-slate-700">
                  For small creative businesses, a well-built system isn't about traffic 
                  spikes—it's about reclaiming the time you lose fighting with your website. 
                  Here's what that looks like in practice.
                </p>

              </div>
            </div>

            <div className="row g-4">
              {timeMetrics.map((metric, index) => (
                <div key={index} className="col-12 col-lg-6">
                  <div 
                    ref={el => metricsRef.current[index] = el}
                    className="border border-slate-200 rounded-3xl p-4 h-100 bg-stone-50"
                  >
                    <div className="mb-4">
                      <h3 className="text-xl font-medium text-slate-900 mb-2">
                        {metric.task}
                      </h3>
                      <p className="text-sm text-slate-600 mb-0">
                        {metric.label}
                      </p>
                    </div>

                    <div className="mb-3">
                      <div className="d-flex justify-content-between align-items-baseline mb-2">
                        <span className="text-xs text-slate-600">Without system</span>
                        <span className="text-sm text-slate-900">{metric.typical} min</span>
                      </div>
                      <div className="bg-slate-200" style={{ height: '8px', width: '100%', borderRadius: '2px' }}>
                        <div 
                          className="bg-slate-400" 
                          style={{ 
                            height: '100%', 
                            width: '100%',
                            borderRadius: '2px'
                          }}
                        ></div>
                      </div>
                    </div>

                    <div className="mb-4">
                      <div className="d-flex justify-content-between align-items-baseline mb-2">
                        <span className="text-xs text-slate-600">With our system</span>
                        <span className="text-sm font-medium text-slate-900">{metric.optimized} min</span>
                      </div>
                      <div className="bg-slate-200" style={{ height: '8px', width: '100%', borderRadius: '2px' }}>
                        <div 
                          className="progress-fill bg-slate-900" 
                          style={{ 
                            height: '100%', 
                            width: `${(metric.optimized / metric.typical) * 100}%`,
                            borderRadius: '2px',
                            transformOrigin: 'left'
                          }}
                        ></div>
                      </div>
                    </div>

                    <div className="pt-3 border-top border-slate-200">
                      <div className="d-flex align-items-baseline">
                        <span className="saved-minutes text-3xl font-bold text-slate-900 me-2">0</span>
                        <span className="text-sm text-slate-600">minutes saved monthly</span>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>

   

          </div>
        </div>
      </div>
    </div>
  );
}

export default Stats;