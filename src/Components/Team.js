import { useRef } from 'react';
import { useGSAP } from '@gsap/react';
import gsap from 'gsap';
import ScrollTrigger from 'gsap/ScrollTrigger';
import Alex from "./Images/self-min.jpg";
import NavBanner from './NavBanner';

import Nav from './Nav';

gsap.registerPlugin(ScrollTrigger);

const MOTION = {
  smooth: 0.6,
  quick: 0.3,
  stagger: 0.12
};

const TEAM_MEMBERS = [
  {
    name: "Alex Goode",
    role: "Owner | Full-Stack Web Developer, Designer",
    bio: "Full-Stack Web Developer/ Designer with a focus on Front-End Web Development in React.js. Graduate of Promineo Tech's Front End Software Development Program and Chegg Skills (formerly Thinkful) Full-Stack Software Engineering Immersion Program. He is the founder and owner of Made Right.",
    image: Alex,
    focal: true
  }
];

function Team() {
  const sectionRef = useRef(null);
  const headingRef = useRef(null);
  const cardsRef = useRef(null);

  useGSAP(() => {
    const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;

    if (!prefersReducedMotion) {
      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: sectionRef.current,
          start: 'top 80%',
          once: true
        }
      });

      tl.from('.team-heading-line', {
        yPercent: 100,
        opacity: 0,
        duration: 0.8,
        ease: 'power3.out'
      });

      const cards = gsap.utils.toArray('.team-member-card');
      gsap.from(cards, {
        scale: 0.9,
        y: 60,
        opacity: 0,
        duration: MOTION.smooth,
        ease: 'back.out(1.2)',
        stagger: MOTION.stagger,
        scrollTrigger: {
          trigger: cardsRef.current,
          start: 'top 75%',
          once: true
        }
      });
    }
  }, { scope: sectionRef });

  return (
    <div>
      <NavBanner/>
      <Nav/>
    <section 
      ref={sectionRef} 
      className="team-section"
      style={{
        paddingBlock: 'var(--space-34)',
        backgroundColor: 'var(--color-bg-primary)'
      }}
    >
      <div className="team-container">
        <header 
          ref={headingRef} 
          className="team-header"
          style={{ marginBottom: 'var(--space-21)' }}
        >
          <h1 className="team-heading">
            <div className="heading-line-wrapper">
              <span className="team-heading-line eighties">Our Team</span>
            </div>
          </h1>
        </header>

        <div ref={cardsRef} className="team-grid">
          {TEAM_MEMBERS.map((member, index) => (
            <article
              key={member.name}
              className="team-member-card"
              data-focal={member.focal}
            >
              <div className="team-member-image-container">
                <img
                  src={member.image}
                  alt={`${member.name}, ${member.role}`}
                  className="team-member-image"
                  loading={index === 0 ? "eager" : "lazy"}
                />
              </div>

              <div className="team-member-content">
                <h2 className="team-member-name">{member.name}</h2>
                <p className="team-member-role">{member.role}</p>
                <p className="team-member-bio">{member.bio}</p>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
    </div>
  );
}

const styles = `
  @layer reset, base, components;

  @layer reset {
    * {
      margin: 0;
      padding: 0;
      box-sizing: border-box;
    }
  }

  @layer base {
    :root {
      --stone-50: oklch(98% 0.005 85);
      --stone-100: oklch(96% 0.008 85);
      --stone-200: oklch(88% 0.012 85);
      --slate-400: oklch(60% 0.015 250);
      --slate-600: oklch(45% 0.018 250);
      --slate-900: oklch(18% 0.015 250);
      
      --color-text-primary: var(--slate-900);
      --color-text-secondary: var(--slate-600);
      --color-text-tertiary: var(--slate-400);
      --color-bg-primary: var(--stone-50);
      --color-bg-secondary: var(--stone-100);
      
      --ratio: 1.333;
      --base-size: 1rem;
      --text-sm: calc(var(--base-size) / var(--ratio));
      --text-base: var(--base-size);
      --text-lg: calc(var(--base-size) * var(--ratio));
      --text-xl: calc(var(--text-lg) * var(--ratio));
      --text-2xl: calc(var(--text-xl) * var(--ratio));
      --text-3xl: calc(var(--text-2xl) * var(--ratio));
      --text-4xl: calc(var(--text-3xl) * var(--ratio));
      --text-5xl: calc(var(--text-4xl) * var(--ratio));
      
      --space-2: 0.5rem;
      --space-3: 0.75rem;
      --space-5: 1.25rem;
      --space-8: 2rem;
      --space-13: 3.25rem;
      --space-21: 5.25rem;
      --space-34: 8.5rem;
      
      --font-display: 'Inter Variable', -apple-system, sans-serif;
      --font-body: 'Inter Variable', -apple-system, sans-serif;
    }
  }

  @layer components {
    .team-section {
      position: relative;
      width: 100%;
    }
    
    .team-container {
      max-width: 1400px;
      margin: 0 auto;
      padding-inline: var(--space-5);
    }
    
    @media (min-width: 768px) {
      .team-container {
        padding-inline: var(--space-8);
      }
    }
    
    .team-header {
      max-width: 52rem;
    }
    
    .team-heading {
      font-family: var(--font-display);
      font-size: var(--text-4xl);
      font-weight: 600;
      color: var(--color-text-primary);
      line-height: 1.15;
      letter-spacing: -0.02em;
      margin-bottom: var(--space-5);
    }
    
    @media (min-width: 768px) {
      .team-heading {
        font-size: var(--text-5xl);
      }
    }
    
    .heading-line-wrapper {
      overflow: hidden;
      display: block;
    }
    
    .team-heading-line {
      display: inline-block;
    }
    
    .team-grid {
      display: grid;
      gap: var(--space-5);
      grid-template-columns: 1fr;
    }
    
    @media (min-width: 1024px) {
      .team-grid {
        grid-template-columns: 1.5fr 1fr;
        gap: var(--space-8);
      }
    }
    
    .team-member-card {
      position: relative;
      background: var(--color-bg-secondary);
      border-radius: 12px;
      overflow: hidden;
      transition: transform 0.4s cubic-bezier(0.4, 0, 0.2, 1);
    }
    

    .team-member-image-container {
      position: relative;
      width: 100%;
      background: var(--stone-200);
      display: block;
    }
    
    .team-member-card[data-focal="true"] .team-member-image-container {
      height: 450px;
      overflow: hidden;
    }
    
    @media (min-width: 768px) {
      .team-member-card[data-focal="true"] .team-member-image-container {
        height: 700px;
      }
    }
    
    @media (min-width: 1200px) {
      .team-member-card[data-focal="true"] .team-member-image-container {
        height: 850px;
      }
    }
    
    .team-member-image {
      width: 100%;
      height: auto;
      display: block;
      vertical-align: bottom;
    }
    
    .team-member-card[data-focal="true"] .team-member-image {
      width: 100%;
      height: 100%;
      min-height: 100%;
      object-fit: cover;
      object-position: center 20%;
    }
    
    .team-member-content {
      padding: var(--space-8);
    }
    
    @media (min-width: 768px) {
      .team-member-content {
        padding: var(--space-13);
      }
    }
    
    .team-member-name {
      font-family: var(--font-display);
      font-size: var(--text-3xl);
      font-weight: 600;
      color: var(--color-text-primary);
      line-height: 1.2;
      letter-spacing: -0.01em;
      margin-bottom: var(--space-2);
    }
    
    .team-member-role {
      font-size: var(--text-sm);
      color: var(--color-text-tertiary);
      font-weight: 500;
      text-transform: uppercase;
      letter-spacing: 0.05em;
      margin-bottom: var(--space-5);
    }
    
    .team-member-bio {
      font-size: var(--text-base);
      color: var(--color-text-secondary);
      line-height: 1.6;
    }
    
    @media (min-width: 768px) {
      .team-member-bio {
        font-size: var(--text-lg);
        line-height: 1.65;
      }
    }
    
    .team-member-card[data-focal="true"] {
      box-shadow: 0 1px 3px rgba(0, 0, 0, 0.05);
    }
    

  }
`;

if (typeof document !== 'undefined') {
  const styleSheet = document.createElement('style');
  styleSheet.textContent = styles;
  document.head.appendChild(styleSheet);
}

export default Team;