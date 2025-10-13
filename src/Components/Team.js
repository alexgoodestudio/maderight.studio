import { useRef } from 'react';
import { useGSAP } from '@gsap/react';
import gsap from 'gsap';
import ScrollTrigger from 'gsap/ScrollTrigger';
import Nick from "./Images/nick-min.jpg";
import Alex from "./Images/self-min.jpg";
import Nav from "./Nav";

gsap.registerPlugin(ScrollTrigger);

const MOTION = {
  smooth: 0.5,
  quick: 0.3
};

function Team() {
  const sectionRef = useRef(null);
  const headingRef = useRef(null);
  const cardsRef = useRef(null);

  useGSAP(() => {
    const prefersReducedMotion = window.matchMedia(
      '(prefers-reduced-motion: reduce)'
    ).matches;

    if (!prefersReducedMotion) {
      // Heading entrance
      gsap.from(headingRef.current, {
        y: 40,
        opacity: 0,
        duration: MOTION.smooth,
        ease: 'power2.out',
        scrollTrigger: {
          trigger: headingRef.current,
          start: 'top 80%',
          once: true
        }
      });

      // Stagger team cards
      const cards = gsap.utils.toArray('.team-card');
      gsap.from(cards, {
        y: 60,
        opacity: 0,
        duration: MOTION.smooth,
        ease: 'power2.out',
        stagger: 0.15,
        scrollTrigger: {
          trigger: cardsRef.current,
          start: 'top 75%',
          once: true
        }
      });
    }
  }, []);

  return (
    <>
      <Nav />
      <section ref={sectionRef} className="py-24 py-md-32">
        <div className="container">
          {/* Section Heading */}
          <div ref={headingRef} className="row mb-16 mb-md-20">
            <div className=" col-12">
              <h1 className="text-7xl font-bold text-slate-900 mb-4">
                Our Team
              </h1>
              <p className="text-xl text-slate-600">
            
              </p>
            </div>
          </div>

          {/* Team Cards */}
          <div ref={cardsRef} className="row g-4 g-md-5">
            {/* Alex Goode - Primary Card (60% width on desktop) */}
            <div className="col-lg-6 col-12">
              <article className="team-card">
                <div className="team-image-container mb-4 overflow-hidden rounded">
                  <img 
                    src={Alex} 
                    alt="Alex Goode working at desk"
                    className="team-image team-image-top"
                    loading="eager"
                  />
                </div>
                <div className="card-content">
                  <h2 className="text-4xl text-slate-900 mb-2">
                    Alex Goode
                  </h2>
                  <p className="text-metadata text-slate-500 mb-4">
                    Owner | Full-Stack Web Developer, Designer
                  </p>
                  <p className="text-lg text-slate-600 leading-relaxed">
                    Full-Stack Web Developer/ Designer with a focus on Front-End Web Development in React.js.
Graduate of Promineo Tech's Front End Software Development Program and Chegg Skills (formerly Thinkful) Full-Stack Software Engineering Immersion Program. He is the founder and owner of Made Right.
                  </p>
                </div>
              </article>
            </div>

            {/* Nick Perry - Secondary Card (40% width on desktop) */}
            <div className="col-lg-6 col-12">
              <article className="team-card">
                <div className="team-image-container mb-4 overflow-hidden rounded">
                  <img 
                    src={Nick} 
                    alt="Nick Perry reviewing project materials"
                    className="team-image"
                    loading="lazy"
                  />
                </div>
                <div className="card-content">
                  <h2 className="text-4xl text-slate-900 mb-2">
                    Nick Perry
                  </h2>
                  <p className="text-metadata text-slate-500 mb-4">
                    Project Manager
                  </p>
                  <p className="text-lg text-slate-600 leading-relaxed">
                    Formerly a small business owner, Nick is well trained to orchestrate client relationships, timelines and help keep your project moving forward. 
                    As an IT enthusiast, he contributes toward quality assuarance and SEO of our products. 
                  </p>
                </div>
              </article>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

export default Team;