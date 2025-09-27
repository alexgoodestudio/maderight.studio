import React, { useRef } from 'react';
import { gsap } from 'gsap';
import { useGSAP } from '@gsap/react';
import Footer from "./Footer";
import Banner from "./Banner";
import Nav from "./Nav";

function OurProcess() {
  const containerRef = useRef();
  const headingRef = useRef();
  const subtitleRef = useRef();
  const metadataRef = useRef();
  const stepRefs = useRef([]);

  useGSAP(() => {
    const steps = stepRefs.current.filter(Boolean);
    
    gsap.fromTo([headingRef.current, subtitleRef.current, metadataRef.current], 
      { opacity: 0, y: 20 },
      { 
        opacity: 1, 
        y: 0,
        duration: 0.8,
        stagger: 0.1,
        ease: "power2.out"
      }
    );

    gsap.fromTo(steps, 
      { opacity: 0, y: 15 },
      { 
        opacity: 1, 
        y: 0,
        duration: 0.6,
        stagger: 0.08,
        ease: "power2.out",
        delay: 0.3
      }
    );

    steps.forEach((step) => {
      if (!step) return;
      
      const stepNumber = step.querySelector('.step-number');
      const stepContent = step.querySelector('.step-content');
      
      step.addEventListener('mouseenter', () => {
        gsap.to(step, { y: -4, duration: 0.3, ease: "power2.out" });
        gsap.to(stepNumber, { color: '#0f172a', duration: 0.3, ease: "power2.out" });
        gsap.to(stepContent, { x: 8, duration: 0.3, ease: "power2.out" });
      });

      step.addEventListener('mouseleave', () => {
        gsap.to(step, { y: 0, duration: 0.3, ease: "power2.out" });
        gsap.to(stepNumber, { color: '#64748b', duration: 0.3, ease: "power2.out" });
        gsap.to(stepContent, { x: 0, duration: 0.3, ease: "power2.out" });
      });
    });

  }, { scope: containerRef });

  const processSteps = [
    {
      number: "01",
      title: "Discovery",
      description: "We start by learning about your goals, your brand, and your audience."
    },
    {
      number: "02", 
      title: "Design System",
      description: "We create reusable building blocks that make your site flexible and easy to grow."
    },
    {
      number: "03",
      title: "Design", 
      description: "Clean layouts, strong typography, and thoughtful details bring the system to life."
    },
    {
      number: "04",
      title: "Development",
      description: "We build for speed and accessibility using modern tools and smooth interactions."
    },
    {
      number: "05",
      title: "Launch",
      description: "Once live, your team can update content and create new pages whenever you need."
    }
  ];

  return (
    <section className="bg-white text-slate-900" ref={containerRef}>
      <Nav />
      
      <div className="py-5">
        <div className="">
          <div className="row ">
            <div className="col-12 ">
              
              <div className="row mb-5 ">
                <div className="col-12 col-lg-8 mx-auto text-center">
                  <div ref={metadataRef} className="text-sm text-slate-600 mb-4">
                    Our Approach — How We Work
                  </div>
                  <h1 ref={headingRef} className="text-11xl font-bold mb-4">
                    Our Process
                  </h1>
                  <p ref={subtitleRef} className="text-lg text-slate-700">
                    Our approach is simple: clear strategy, modular design, and
                    performance-driven development that puts your team in control.
                  </p>
                </div>
              </div>

              <div className="row ">
                {processSteps.map((step, index) => (
                  <div 
                    key={index}
                    className={`${index === 4 ? 'col-12' : 'col-md-6'} mb-4`}
                  >
                    <div 
                      ref={el => stepRefs.current[index] = el}
                      className="border border-slate-300 p-4 bg-white h-100"
                      style={{ cursor: 'pointer' }}
                    >
                      <div className="d-flex align-items-start">
                        <div className="me-4">
                          <span className="step-number font-monospace text-sm text-slate-500 fw-medium">
                            {step.number}
                          </span>
                        </div>
                        <div className="step-content flex-1">
                          <h3 className="text-2xl fw-semibold mb-3">
                            {step.title}
                          </h3>
                          <p className="text-base text-slate-700 mb-0">
                            {step.description}
                          </p>
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

  
    </section>
  );
}

export default OurProcess;