import { useRef } from 'react';
import { useGSAP } from '@gsap/react';
import gsap from 'gsap';
import ScrollTrigger from 'gsap/ScrollTrigger';
import Alex from "./Images/self-min.jpg";

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
    <div className="bg-white">
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

          --space-2: 0.5rem;
          --space-3: 0.75rem;
          --space-5: 1.25rem;
          --space-8: 2rem;
          --space-13: 3.25rem;
          --space-21: 5.25rem;
          --space-34: 8.5rem;
        }

        .team-section {
          padding-block: var(--space-34);
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

        .heading-line-wrapper {
          overflow: hidden;
          display: block;
        }

        .team-heading-line {
          display: inline-block;
        }

        .subtitle {
          font-size: 1.125rem;
          line-height: 1.6;
          color: var(--slate-700);
        }

        .team-grid {
          display: grid;
          gap: var(--space-5);
          grid-template-columns: 1fr;
        }

        @media (min-width: 1024px) {
          .team-grid {
            grid-template-columns: minmax(0, 520px);
            justify-content: center;
            gap: var(--space-8);
          }
        }

        .team-member-card {
          position: relative;
          background: var(--stone-100);
          border: 1px solid var(--stone-200);
          border-radius: 12px;
          overflow: hidden;
          transition: all 0.3s ease;
        }

        .team-member-card:hover {
          transform: translateY(-4px);
          box-shadow: 0 12px 24px rgba(0, 0, 0, 0.08);
          border-color: var(--slate-400);
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
            height: 520px;
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
          font-size: 1.875rem;
          font-weight: 600;
          color: var(--slate-900);
          line-height: 1.3;
          letter-spacing: -0.01em;
          margin-bottom: var(--space-2);
        }

        .team-member-role {
          font-size: 0.875rem;
          color: var(--slate-600);
          font-weight: 500;
          text-transform: uppercase;
          letter-spacing: 0.05em;
          margin-bottom: var(--space-5);
        }

        .team-member-bio {
          font-size: 1rem;
          line-height: 1.6;
          color: var(--slate-700);
        }

        @media (max-width: 768px) {
          .team-section {
            padding-block: var(--space-21);
          }

          .section-header {
            margin-bottom: var(--space-13);
          }

          .team-member-name {
            font-size: 1.5rem;
          }
        }
      `}</style>

      <section ref={sectionRef} className="team-section">
        <div className="container">
          <div ref={headingRef} className="section-header">
            <p className="metadata">Who We Are</p>
            <h1 className="main-heading">
              <div className="heading-line-wrapper">
                <span className="team-heading-line eighties">Our Team</span>
              </div>
            </h1>
            <p className="subtitle">
            </p>
          </div>

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

export default Team;
