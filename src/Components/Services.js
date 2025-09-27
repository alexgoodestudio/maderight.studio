import React, { useRef } from 'react';
import { gsap } from 'gsap';
import { useGSAP } from '@gsap/react';
import Typewriter from './TypeWriter';
import { Link } from "react-router-dom";

function Services() {
  const containerRef = useRef();
  const moduleRefs = useRef([]);
  const headingRef = useRef();
  const metadataRef = useRef();

  useGSAP(() => {
    const modules = moduleRefs.current.filter(Boolean);
    
    // Staggered entrance with 0.1s delays
    gsap.fromTo([headingRef.current, metadataRef.current], 
      { opacity: 0, y: 20 },
      { 
        opacity: 1, 
        y: 0,
        duration: 0.8,
        stagger: 0.1,
        ease: "power2.out"
      }
    );

    gsap.fromTo(modules, 
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

    // Gentle hover interactions
    modules.forEach((module) => {
      if (!module) return;
      
      const serviceNumber = module.querySelector('.service-number');
      const serviceContent = module.querySelector('.service-content');
      
      module.addEventListener('mouseenter', () => {
        gsap.to(module, { y: -4, duration: 0.3, ease: "power2.out" });
        gsap.to(serviceNumber, { color: '#0f172a', duration: 0.3, ease: "power2.out" });
        gsap.to(serviceContent, { x: 8, duration: 0.3, ease: "power2.out" });
      });

      module.addEventListener('mouseleave', () => {
        gsap.to(module, { y: 0, duration: 0.3, ease: "power2.out" });
        gsap.to(serviceNumber, { color: '#64748b', duration: 0.3, ease: "power2.out" });
        gsap.to(serviceContent, { x: 0, duration: 0.3, ease: "power2.out" });
      });
    });

  }, { scope: containerRef });

  const services = [
    { 
      title: "Front-End Development", 
      description: "React Framework",
      expertise: "Component Architecture"
    },
    { 
      title: "Back-End Development", 
      description: "APIs, Databases & Infrastructure",
      expertise: "Headless Systems"
    },
    { 
      title: "REST API Development", 
      description: "Scalable Backend Architecture",
      expertise: "Performance-First"
    },
    { 
      title: "Creative Web Design", 
      description: "Brand-Forward",
      expertise: "Design Systems"
    },
    { 
      title: "Interactive Design", 
      description: "GSAP & Micro-interactions",
      expertise: "Subtle Motion"
    },
    { 
      title: "Search Engine Optimization", 
      description: "Technical & Content Strategy",
      expertise: "Core Web Vitals"
    },
    { 
      title: "UX/UI Design", 
      description: "Research-Driven Experiences",
      expertise: "Accessibility-First"
    },
    { 
      title: "Digital Consulting", 
      description: "Strategy & Technology Planning",
      expertise: "Process Optimization"
    }
  ];

  return (
    <div className="bg-white text-slate-900 content-module" ref={containerRef}>
      <div className="container-fluid">
        <div className="row">
          <div className="col-12 px-4 px-md-5">
            
            <div className="row mb-5">
              <div className="col-12 col-lg-8">
                <h2 ref={headingRef} className="text-6xl font-bold mb-3">
                  What We Do.
                </h2>
                <div ref={metadataRef} className="text-sm text-slate-600 mb-4">
                  Our Capabilities — Updated 2025
                </div>
              </div>
            </div>

            <div className="row mb-5">
              <div className="col-12 col-lg-10">
                <div className="border border-slate-900 p-4 bg-slate-50">
                  <Typewriter />
                </div>
              </div>
            </div>

            <div className="row g-0">
              
              <div className="col-12 col-lg-8">
                <div className="border-top border-start border-slate-900">
                  {services.map((service, index) => (
                    <div 
                      key={index}
                      ref={el => moduleRefs.current[index] = el}
                      className="border-bottom border-end border-slate-900 p-4 cursor-pointer bg-white"
                    >
                      <div className="row align-items-center">
                        <div className="col-2 col-md-1">
                          <span className="service-number font-mono text-xs text-slate-500">
                            {String(index + 1).padStart(2, '0')}
                          </span>
                        </div>
                        <div className="col-10 col-md-11">
                          <div className="service-content">
                            <h3 className="text-xl font-medium mb-1">
                              {service.title}
                            </h3>
                            <p className="text-sm text-slate-600 mb-1">
                              {service.description}
                            </p>
                            <p className="text-xs text-slate-500 font-medium">
                              {service.expertise}
                            </p>
                          </div>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              <div className="col-12 col-lg-4">
                <div className="p-4 bg-slate-900 text-white h-100 d-flex flex-column justify-content-center">
                  <div className="text-xs text-slate-400 mb-3">
                    Our Approach
                  </div>
                  <h3 className="text-2xl font-medium mb-3">
                    Modular by Design
                  </h3>
                  <p className="text-sm text-slate-300 mb-4">
                    Every project begins with understanding your goals. We build scalable, 
                    component-based systems that evolve with your business.
                  </p>
                  <div className="mt-auto pt-4">
                    <Link 
                      to="/process" 
                      className="text-white text-sm font-medium"
                    >
                      View Our Process →
                    </Link>
                  </div>
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