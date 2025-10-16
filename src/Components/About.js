import { useRef } from 'react';
import { useGSAP } from '@gsap/react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import Nav from './Nav';

gsap.registerPlugin(ScrollTrigger);

const MOTION = {
  instant: 0.15,
  quick: 0.3,
  smooth: 0.5,
  slow: 0.8,
  story: 1.2
};

function About() {
  const imageRef = useRef(null);
  const headingRef = useRef(null);
  const contentRef = useRef(null);

  useGSAP(() => {
    const prefersReducedMotion = window.matchMedia(
      '(prefers-reduced-motion: reduce)'
    ).matches;

    if (!prefersReducedMotion) {
      // Image fade-in with subtle scale
      gsap.from(imageRef.current, {
        opacity: 0,
        scale: 0.95,
        duration: MOTION.slow,
        ease: 'power2.out',
        scrollTrigger: {
          trigger: imageRef.current,
          start: 'top 80%',
          once: true
        }
      });

      // Heading reveal
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

      // Content staggered reveal
      const contentElements = contentRef.current.children;
      gsap.from(contentElements, {
        y: 30,
        opacity: 0,
        duration: MOTION.smooth,
        ease: 'power2.out',
        stagger: 0.15,
        scrollTrigger: {
          trigger: contentRef.current,
          start: 'top 80%',
          once: true
        }
      });
    }
  }, []);

  return (
    <section >
        <Nav/>
        <div className='className="about-section  pt-5'>
      <div className="container">
        <div className="row align-items-center g-5">


          {/* Content Column - 40% */}
          <div className="col-lg-5">
            <div className="content-wrapper ps-lg-4">

              <h3 className=' text-teal-950 text-8xl eighties inline-block px-5 py-3 rounded-2xl mb-5'> Origins</h3>
              <div ref={contentRef}>
                
                <p className="text-lg text-justify text-slate-700 mb-4 " style={{ lineHeight: '1.6' }}>
                  Made Right Studio was started in April of 2025 in Columbia, South Carolina by Alex Goode. 
                  After completing Promineo Tech's Front End Software Development Program and Thinkful's (now Chegg Skills) Full-Stack Software Engineering Immersion Program back in 2023, as a long-time hobbyist of graphic design, the goal was to build a creative design-first web development studio for helping small businesses grow and engage their audience. 
                  <br/><br/>
                  In August, after bringing on our new Project Manager, Nick Perry, Made Right is officially ready for taking in new clients.
                </p>
              </div>
            </div>
          </div>
<div className="col-lg-7">
  <div className="ps-lg-5 text-start ">
    {[
      { year: '2023', event: "Alex Goode completed Promineo Tech's front-end development program and Thinkful's full-stack engineering immersion program" },
      { year: 'April 2025', event: 'Made Right Studio founded in Columbia, SC' },
      { year: 'August 2025', event: 'Nick Perry joins as Project Manager' },
      { year: 'Today', event: 'Accepting new clients' }
    ].map((item, i) => (
      <div 
        key={i}
        className="d-flex align-items-start mb-4 pb-4"
        style={{ borderBottom: i < 3 ? '1px solid #e7e5e4' : 'none' }}
      >
        <span className="text-metadata text-slate-400 me-4" style={{ minWidth: '120px' }}>
          {item.year}
        </span>
        <p className="text-md text-slate-700 mb-0">
          {item.event}
        </p>
      </div>
    ))}
  </div>
</div>        </div>
      </div>
      </div>
    </section>
  );
}

export default About;

