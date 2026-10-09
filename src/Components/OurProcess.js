import { useRef } from 'react';
import { useGSAP } from '@gsap/react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import Nav from "./Nav"

gsap.registerPlugin(ScrollTrigger);

const MOTION = {
  smooth: 0.5,
  stagger: 0.15
};

function OurProcess() {
  const containerRef = useRef(null);
  const headingRef = useRef(null);
  const subtitleRef = useRef(null);
  const metadataRef = useRef(null);
  const timelineRef = useRef(null);
  const ctaRef = useRef(null);

    const handleContactClick = () => {
    window.location.href = "mailto:hello@maderight.studio";
  };

  const processSteps = [
    {
      number: "01",
      title: "Discovery",
      description: "We start by learning about your goals, your brand, and your audience. Deep-dive sessions ensure we understand what success looks like for you.",
      deliverables: ["Discovery Call","User research summary"],
      duration: "1 week"
    },
    {
      number: "02", 
      title: "Design System",
      description: "We create reusable building blocks that make your site flexible and easy to grow. Typography, color, spacing—all mathematically precise.",
      deliverables: ["Component library", "Styling and design guide"],
      duration: "2 weeks"
    },
    {
      number: "03",
      title: "Design", 
      description: "Clean layouts, strong typography, and thoughtful details bring the system to life. Every pixel serves a purpose.",
      deliverables: ["Prototype", "Design specs"],
      duration: "2 weeks"
    },
    {
      number: "04",
      title: "Development",
      description: "We build for speed and accessibility using modern tools and smooth interactions. Performance-first, always.",
      deliverables: ["Production code", "Documentation", "CMS integration"],
      duration: "3 weeks"
    },
    {
      number: "05",
      title: "Testing",
      description: "We rigorously test components and functionality to ensure everything works flawlessly across all devices and browsers.",
      deliverables: ["QA testing", "Accessibility audit", "Performance report"],
      duration: "1 week"
    },
    {
      number: "06",
      title: "Launch",
      description: "Your site goes live with optimized performance, security, and ongoing support to keep everything running smoothly.",
      deliverables: ["Deployment", "Training", "30-day support"],
      duration: "Ongoing"
    }
  ];

  useGSAP(() => {
    const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    
    if (!prefersReducedMotion) {
      // Header animation
      gsap.from(metadataRef.current, {
        y: 20,
        opacity: 0,
        duration: MOTION.smooth,
        ease: 'power2.out'
      });

      gsap.from(headingRef.current, {
        y: 30,
        opacity: 0,
        duration: MOTION.smooth,
        ease: 'power2.out',
        delay: 0.1
      });

      gsap.from(subtitleRef.current, {
        y: 20,
        opacity: 0,
        duration: MOTION.smooth,
        ease: 'power2.out',
        delay: 0.2
      });

      // Timeline items staggered reveal
      const timelineItems = gsap.utils.toArray('.timeline-step');
      
      gsap.from(timelineItems, {
        x: -30,
        opacity: 0,
        duration: MOTION.smooth,
        ease: 'power2.out',
        stagger: 0.12,
        scrollTrigger: {
          trigger: timelineRef.current,
          start: 'top 70%',
          once: true
        }
      });

      // Step number badges: bounce in and count up as each step scrolls into view
      gsap.utils.toArray('.step-indicator').forEach((badge) => {
        const target = parseInt(badge.dataset.number, 10);
        badge.textContent = String(target).padStart(2, '0');
        const counter = { value: 0 };

        gsap.from(badge, {
          scale: 0,
          rotation: -90,
          duration: 0.6,
          ease: 'back.out(2)',
          clearProps: 'transform',
          scrollTrigger: {
            trigger: badge,
            start: 'top 85%',
            once: true
          }
        });

        gsap.to(counter, {
          value: target,
          duration: 0.8,
          ease: 'power1.out',
          onUpdate: () => {
            badge.textContent = String(Math.round(counter.value)).padStart(2, '0');
          },
          scrollTrigger: {
            trigger: badge,
            start: 'top 85%',
            once: true
          }
        });
      });

      // Timeline line draw-in
      gsap.fromTo('.timeline-line',
        { scaleY: 0, transformOrigin: 'top' },
        {
          scaleY: 1,
          duration: 1.2,
          ease: 'power2.inOut',
          scrollTrigger: {
            trigger: timelineRef.current,
            start: 'top 70%',
            once: true
          }
        }
      );

      // CTA "1 ... 2 ... 3 ..." sequence: each number pops, then its dots fade in
      const ctaTl = gsap.timeline({
        scrollTrigger: {
          trigger: '.cta-heading',
          start: 'top 85%',
          once: true
        }
      });

      gsap.utils.toArray('.cta-number').forEach((num, i) => {
        const dots = gsap.utils.toArray('.cta-dots')[i];
        ctaTl.from(num, { scale: 0, y: 20, opacity: 0, duration: 0.45, ease: 'back.out(2)' });
        // The final word ("Go!") has no dots after it
        if (dots) {
          ctaTl.from(dots, { opacity: 0, x: -10, duration: 0.35, ease: 'power2.out' }, '-=0.1');
        }
      });

      // CTA animation
      if (ctaRef.current) {
        gsap.from(ctaRef.current, {
          y: 30,
          opacity: 0,
          duration: MOTION.smooth,
          ease: 'power2.out',
          scrollTrigger: {
            trigger: ctaRef.current,
            start: 'top 85%',
            once: true
          }
        });
      }
    }
  }, { scope: containerRef });

  return (
    <div ref={containerRef} className="bg-white">
      <Nav/>
      <style>{`
        :root {
          --stone-50: #fafaf9;
          --stone-100: #f5f5f4;
          --stone-200: #e7e5e4;
          --slate-400: #94a3b8;
          --slate-600: #475569;
          --slate-700: #334155;
          --slate-900: #0f172a;
          --emerald-600: #059669;
          --emerald-700: #047857;
          
          --space-3: 0.75rem;
          --space-5: 1.25rem;
          --space-8: 2rem;
          --space-13: 3.25rem;
          --space-21: 5.25rem;
          --space-34: 8.5rem;
        }

        .process-section {
          padding-block: var(--space-34);
          position: relative;
        }

        .section-header {
          margin-bottom: var(--space-21);
          max-width: 800px;
          margin-left: auto;
          margin-right: auto;
          text-align: center;
        }

        .metadata {
          font-size: 0.875rem;
          font-weight: 500;
          text-transform: uppercase;
          letter-spacing: 0.1em;
          color: var(--slate-600);
          margin-bottom: var(--space-3);
        }

        .main-heading {
          font-size: clamp(3rem, 6vw, 3rem);
 
          line-height: 1.1;
          letter-spacing: -0.02em;
          color: var(--slate-900);
          margin-bottom: var(--space-5);
        }

        .subtitle {
          font-size: 1.125rem;
          line-height: 1.6;
          color: var(--slate-700);
        }

        .timeline-container {
          position: relative;
          max-width: 900px;
          margin: 0 auto;
          padding-left: 48px;
        }

        .timeline-line {
          position: absolute;
          left: 15px;
          top: 0;
          bottom: 0;
          width: 2px;
          background: var(--stone-200);
        }

        .timeline-step {
          position: relative;
          margin-bottom: var(--space-13);
          padding-left: var(--space-8);
        }

        .timeline-step:last-child {
          margin-bottom: 0;
        }

        .step-indicator {
          position: absolute;
          left: -41px;
          top: 4px;
          width: 32px;
          height: 32px;
          border-radius: 50%;
          background: white;
          border: 2px solid var(--stone-200);
          display: flex;
          align-items: center;
          justify-content: center;
          font-size: 0.75rem;
          font-weight: 600;
          color: var(--slate-600);
          transition: all 0.3s ease;
          z-index: 2;
        }

        .timeline-step:hover .step-indicator {
          border-color: var(--slate-400);
          color: var(--slate-900);
          background: var(--stone-100);
          transform: scale(1.15);
        }

        .step-card {
          background: var(--stone-50);
          border: 1px solid var(--stone-200);
          border-radius: 12px;
          padding: var(--space-8);
          transition: all 0.3s ease;
          cursor: pointer;
        }

        .step-card:hover {
          transform: translateY(-4px);
          box-shadow: 0 12px 24px rgba(0, 0, 0, 0.08);
          border-color: var(--slate-400);
        }

        .step-header {
          display: flex;
          align-items: baseline;
          justify-content: space-between;
          margin-bottom: var(--space-3);
          gap: var(--space-3);
        }

        .step-title {
          font-size: 1.875rem;
          font-weight: 600;
          color: var(--slate-900);
          line-height: 1.3;
          letter-spacing: -0.01em;
        }

        .step-duration {
          font-size: 0.875rem;
          font-weight: 500;
          color: var(--slate-600);
          background: white;
          padding: 4px 12px;
          border-radius: 6px;
          white-space: nowrap;
          border: 1px solid var(--stone-200);
        }

        .step-description {
          font-size: 1rem;
          line-height: 1.6;
          color: var(--slate-700);
          margin-bottom: var(--space-5);
        }

        .deliverables-list {
          list-style: none;
          padding: 0;
          margin: 0;
          display: flex;
          flex-direction: column;
          gap: 8px;
        }

        .deliverable-item {
          display: flex;
          align-items: center;
          gap: 8px;
          font-size: 0.875rem;
          color: var(--slate-600);
        }

        .deliverable-icon {
          color: var(--emerald-600);
          flex-shrink: 0;
        }

        .cta-section {
          margin-top: var(--space-34);
          text-align: center;
          padding: var(--space-13);
          background: var(--stone-100);
          border-radius: 16px;
          max-width: 800px;
          margin-left: auto;
          margin-right: auto;
        }

        .cta-heading {
          font-size: 2.25rem;
  
          color: var(--slate-900);
          margin-bottom: var(--space-3);
          letter-spacing: -0.01em;
        }

        .cta-text {
          font-size: 1.125rem;
          color: var(--slate-700);
          margin-bottom: var(--space-8);
        }

        .cta-button {
          display: inline-flex;
          align-items: center;
          gap: 8px;
          background: var(--slate-900);
          color: white;
          padding: 16px 32px;
          border-radius: 8px;
          font-size: 1rem;
          font-weight: 600;
          text-decoration: none;
          transition: all 0.3s ease;
          border: none;
          cursor: pointer;
        }

        .cta-button:hover {
          transform: translateY(-2px);
          box-shadow: 0 8px 16px rgba(0, 0, 0, 0.15);
          color: white;
        }

        .cta-button:hover .arrow-icon {
          transform: translateX(4px);
        }

        .arrow-icon {
          transition: transform 0.3s ease;
        }

        @media (max-width: 768px) {
          .process-section {
            padding-block: var(--space-21);
          }

          .section-header {
            margin-bottom: var(--space-13);
          }

          .timeline-container {
            padding-left: 32px;
          }

          .step-indicator {
            left: -33px;
            width: 24px;
            height: 24px;
            font-size: 0.625rem;
          }

          .timeline-step {
            padding-left: var(--space-5);
            margin-bottom: var(--space-8);
          }

          .step-card {
            padding: var(--space-5);
          }

          .step-header {
            flex-direction: column;
            align-items: flex-start;
          }

          .step-title {
            font-size: 1.5rem;
          }

          .cta-section {
            margin-top: var(--space-21);
            padding: var(--space-8);
          }

          .cta-heading {
            font-size: 1.875rem;
          }
        }
      `}</style>

      <section className="process-section">
        
        <div className="container">
          
          {/* Header */}
          <div className="section-header">

            <p ref={metadataRef} className="metadata">
              Our Approach — How We Work
            </p>
            <h1 ref={headingRef} className="main-heading eighties">
              Our Process
            </h1>
            <p ref={subtitleRef} className="subtitle">
            The system we are working to constantly improve. 
            </p>
          </div>

          {/* Timeline */}
          <div ref={timelineRef} className="timeline-container">
            <div className="timeline-line"></div>
            
            {processSteps.map((step, index) => (
              <div key={index} className="timeline-step">
                <div className="step-indicator" data-number={step.number}>{step.number}</div>
                
                <div className="step-card">
                  <div className="step-header">
                    <h2 className="step-title">{step.title}</h2>
                    <span className="step-duration">{step.duration}</span>
                  </div>
                  
                  <p className="step-description">
                    {step.description}
                  </p>
                  
                  <ul className="deliverables-list">
                    {step.deliverables.map((deliverable, i) => (
                      <li key={i} className="deliverable-item">
                        <span>{deliverable}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            ))}
          </div>

          {/* CTA */}
          <div ref={ctaRef} className="cta-section">
            <h2 className="cta-heading eighties">
              {['1', '2', '3', 'Go!'].map((n, i, all) => (
                <span key={n}>
                  <span className="cta-number" style={{ display: 'inline-block' }}>{n}</span>
                  {' '}
                  {i < all.length - 1 && (
                    <>
                      <span className="cta-dots" style={{ display: 'inline-block' }}>...</span>
                      {' '}
                    </>
                  )}
                </span>
              ))}
            </h2>
            <p className="cta-text px-5 text-left">
              Interested in working with Made Right? Send an email with your name, your role, company, purpose of website, and budget range, and we'll get back to you promptly.
            </p>
        <button
          onClick={handleContactClick}
          className="btn-contact text-md font-mono bg-teal-800 px-5 py-3  text-dark rounded"
        >
          Email
        </button>
          </div>

        </div>
      </section>
    </div>
  );
}

export default OurProcess;