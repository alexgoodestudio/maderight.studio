import { useRef } from 'react';
import { useGSAP } from '@gsap/react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import Nav from './Nav';
import NavBanner from './NavBanner';

gsap.registerPlugin(ScrollTrigger);

const MOTION = {
  smooth: 0.5,
  stagger: 0.15
};

function About() {
  const headingRef = useRef(null);
  const contentRef = useRef(null);
  const timelineRef = useRef(null);

  useGSAP(() => {
    const prefersReducedMotion = window.matchMedia(
      '(prefers-reduced-motion: reduce)'
    ).matches;

    if (!prefersReducedMotion) {
      // Heading reveal
      gsap.from(headingRef.current, {
        y: 40,
        opacity: 0,
        duration: MOTION.smooth,
        ease: 'power2.out',
        scrollTrigger: {
          trigger: headingRef.current,
          start: 'top 75%',
          once: true
        }
      });

      // Content staggered reveal
      const paragraphs = contentRef.current.querySelectorAll('p');
      gsap.from(paragraphs, {
        y: 30,
        opacity: 0,
        duration: MOTION.smooth,
        ease: 'power2.out',
        stagger: MOTION.stagger,
        scrollTrigger: {
          trigger: contentRef.current,
          start: 'top 75%',
          once: true
        }
      });

      // Timeline items reveal
      const timelineItems = timelineRef.current.querySelectorAll('.timeline-item');
      gsap.from(timelineItems, {
        x: -20,
        opacity: 0,
        duration: MOTION.smooth,
        ease: 'power2.out',
        stagger: 0.1,
        scrollTrigger: {
          trigger: timelineRef.current,
          start: 'top 70%',
          once: true
        }
      });
    }
  }, []);

  const timeline = [
    { year: '2023', event: "Alex Goode completed Promineo Tech's front-end development program and Thinkful's full-stack engineering immersion program" },
    { year: 'April 2025', event: 'Made Right Studio founded in Columbia, SC' },
    { year: 'Today', event: 'Accepting new clients' }
  ];

  return (
    <>
    <NavBanner/>
      <Nav />
      <style>{`
        :root {
          /* Typography System - Perfect Fourth Scale */
          --ratio: 1.333;
          --base-size: 1rem;
          --text-sm: calc(var(--base-size) / var(--ratio));
          --text-base: var(--base-size);
          --text-lg: calc(var(--base-size) * var(--ratio));
          --text-xl: calc(var(--text-lg) * var(--ratio));
          --text-2xl: calc(var(--text-xl) * var(--ratio));
          --text-3xl: calc(var(--text-2xl) * var(--ratio));
          --text-4xl: calc(var(--text-3xl) * var(--ratio));
          
          /* OKLCH Color System */
          --stone-50: oklch(98% 0.005 85);
          --stone-100: oklch(96% 0.008 85);
          --stone-200: oklch(88% 0.012 85);
          --slate-400: oklch(60% 0.015 250);
          --slate-600: oklch(45% 0.018 250);
          --slate-700: oklch(40% 0.018 250);
          --slate-900: oklch(18% 0.015 250);
          --emerald-600: oklch(55% 0.15 160);
          
          /* Semantic Colors */
          --color-text-primary: var(--slate-900);
          --color-text-secondary: var(--slate-600);
          --color-text-tertiary: var(--slate-400);
          --color-bg-primary: var(--stone-50);
          --color-bg-card: var(--stone-100);
          --color-accent: var(--emerald-600);
          --color-border: var(--stone-200);
          
          /* Fibonacci Spacing */
          --space-2: 0.5rem;
          --space-3: 0.75rem;
          --space-5: 1.25rem;
          --space-8: 2rem;
          --space-13: 3.25rem;
          --space-21: 5.25rem;
          --space-34: 8.5rem;
          --space-55: 13.75rem;
          
          /* Baseline Grid */
          --baseline: 8px;
          --rhythm-unit: 24px;
        }

        @media (prefers-color-scheme: dark) {
          :root {
            --stone-50: oklch(18% 0.005 85);
            --stone-100: oklch(22% 0.008 85);
            --stone-200: oklch(28% 0.012 85);
            --slate-900: oklch(98% 0.008 250);
            --slate-700: oklch(85% 0.015 250);
            --slate-600: oklch(75% 0.015 250);
            --slate-400: oklch(60% 0.015 250);
          }
        }

        .about-section {
          padding-block: var(--space-34);
          background-color: var(--color-bg-primary);
          color: var(--color-text-primary);
        }

        .section-heading {
          font-size: var(--text-4xl);
          font-weight: 600;
          line-height: 1.2;
          color: var(--color-text-primary);
          margin-bottom: var(--space-8);
          letter-spacing: -0.02em;
        }

        .section-kicker {
          font-size: var(--text-sm);
          font-weight: 500;
          text-transform: uppercase;
          letter-spacing: 0.1em;
          margin-bottom: var(--space-3);
        }

        .origins-card {
          background-color: var(--color-bg-card);
          border-radius: 12px;
          padding: var(--space-8);
          margin-bottom: var(--space-8);
        }

        .origins-card h3 {
          font-size: var(--text-3xl);
       
          color: var(--color-text-primary);
          margin-bottom: var(--space-5);
          letter-spacing: -0.01em;
        }

        .body-text {
          font-size: var(--text-lg);
          line-height: calc(var(--baseline) * 4);
          color: var(--color-text-secondary);
          margin-bottom: var(--rhythm-unit);
        }

        .body-text:last-child {
          margin-bottom: 0;
        }

        .timeline-item {
          display: flex;
          align-items: start;
          padding-bottom: var(--space-5);
          margin-bottom: var(--space-5);
          border-bottom: 1px solid var(--color-border);
        }

        .timeline-item:last-child {
          border-bottom: none;
          margin-bottom: 0;
          padding-bottom: 0;
        }

        .timeline-year {
          font-size: var(--text-base);
          font-weight: 600;
          color: var(--color-text-tertiary);
          min-width: 120px;
          flex-shrink: 0;
          letter-spacing: 0.02em;
        }

        .timeline-event {
          font-size: var(--text-base);
          line-height: calc(var(--baseline) * 3);
          color: var(--color-text-secondary);
          margin: 0;
        }

        .content-wrapper {
          padding-left: var(--space-8);
        }

        .timeline-wrapper {
          padding-left: var(--space-8);
        }

        @media (max-width: 991px) {
          .content-wrapper,
          .timeline-wrapper {
            padding-left: 0;
            margin-top: var(--space-8);
          }

          .about-section {
            padding-block: var(--space-21);
          }

          .section-heading {
            font-size: var(--text-3xl);
          }
        }

        @media (max-width: 575px) {
          .timeline-item {
            flex-direction: column;
            gap: var(--space-2);
          }

          .timeline-year {
            min-width: auto;
          }
        }
      `}</style>

      <section className="about-section">
        <div className="container">
          <div className="row g-5 align-items-start">
            {/* Content Column - 50% on desktop */}
            <div className="col-lg-7">
              <div className="content-wrapper">
                <p className="section-kicker text-teal-800" ref={headingRef}>Our Story</p>
                
                <div className="origins-card" ref={contentRef}>
                  <h3 className='text-teal-900 eighties'>Origins</h3>
                  
                  <p className="text-lg text-start">
                    Made Right Studio was started in April 2025 in Columbia, South Carolina by Alex Goode. 
                    After completing Promineo Tech's Front End Software Development Program and Thinkful's 
                    Full-Stack Software Engineering Immersion Program in 2023, combined with 4 years of graphic 
                    design experience, the goal was clear: build a design-first web development studio that 
                    helps local businesses stand out with fast, high-performing websites. 
                  </p>
                </div>
              </div>
            </div>

            {/* Timeline Column - 50% on desktop */}
            <div className="col-lg-5 text-start">
              <div className="timeline-wrapper">
                <p className="section-kicker text-teal-800">Timeline</p>
                
                <div ref={timelineRef}>
                  {timeline.map((item, i) => (
                    <div key={i} className="timeline-item">
                      <span className="timeline-year">{item.year}</span>
                      <p className="timeline-event">{item.event}</p>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

export default About;