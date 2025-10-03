import React, { useRef } from "react";
import { Link } from "react-router-dom";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const MOTION = {
  smooth: 0.5,
  slow: 0.8
};

function Footer() {
  const year = new Date().getFullYear();
  const footerRef = useRef(null);
  const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;

  useGSAP(() => {
    if (!prefersReducedMotion) {
      const sections = gsap.utils.toArray('.footer-section');
      
      sections.forEach((section, index) => {
        gsap.from(section, {
          opacity: 0,
          y: 30,
          duration: MOTION.smooth,
          ease: "power2.out",
          stagger: 0.1,
          scrollTrigger: {
            trigger: footerRef.current,
            start: "top 85%",
            toggleActions: "play none none none"
          },
          delay: index * 0.08
        });
      });
    }
  }, { scope: footerRef });

  return (
    <footer ref={footerRef} className="bg-teal-950 text-slate-100 pt-32 pb-8 ">
      <div className="container-fluid px-4 px-lg-5">
        
        {/* Primary Content Grid */}
        <div className="row mb-5 pb-5 border-bottom border-slate-700">
          
          {/* Studio Statement */}
          <div className="col-lg-5 col-12 mb-5 mb-lg-0 footer-section">
            <h2 className="text-4xl font-bold mb-4 text-slate-100">
              Made Right
            </h2>
            <p className="text-lg text-slate-300 mb-5 pe-lg-5">
              An independent creative web design and technology studio.
            </p>
            <p className="text-sm text-slate-400 pe-lg-4">
              Design systems and institutional-quality craftsmanship for small businesses. We build modular, digital experiences that for long term growth.
            </p>
          </div>

          {/* Navigation Columns */}
          <div className="col-lg-7 col-12">
            <div className="row">
              
              {/* Studio Links */}
              <div className="col-md-4 col-6 mb-4 mb-md-0 footer-section">
                <h6 className="text-xs font-semibold text-slate-500 uppercase tracking-wider mb-4">
                  Studio
                </h6>
                <ul className="list-unstyled">
                   <li className="mb-3">
                    <Link 
                      to="/" 
                      className="text-base text-slate-300 hover:text-slate-100 text-decoration-none d-inline-block transition-colors"
                    >
                      Home
                    </Link>
                  </li>
                  <li className="mb-3">
                    <Link 
                      to="/our-process" 
                      className="text-base text-slate-300 hover:text-slate-100 text-decoration-none d-inline-block transition-colors"
                    >
                      Our Process
                    </Link>
                  </li>

                </ul>
              </div>

              {/* Work Links */}
              <div className="col-md-4 col-6 mb-4 mb-md-0 footer-section">
                <h6 className="text-xs font-semibold text-slate-500 uppercase tracking-wider mb-4">
                  Recent Work
                </h6>
                <ul className="list-unstyled">
                  <li className="mb-3">
                    <a 
                      href="https://lemichclinic.netlify.app" 
                      className="text-base text-slate-300 hover:text-slate-100 text-decoration-none d-inline-block transition-colors"
                      target="_blank" 
                      rel="noopener noreferrer"
                    >
                      The Lemich Clinic
                    </a>
                  </li>
                  <li className="mb-3">
                    <a 
                      href="https://rosewoodcleaning.netlify.app" 
                      className="text-base text-slate-300 hover:text-slate-100 text-decoration-none d-inline-block transition-colors"
                      target="_blank" 
                      rel="noopener noreferrer"
                    >
                      Rosewood Cleaning
                    </a>
                  </li>
                                    <li className="mb-3">
                    <a 
                      href="http://alexgoode.netlify.app/" 
                      className="text-base text-slate-300 hover:text-slate-100 text-decoration-none d-inline-block transition-colors"
                      target="_blank" 
                      rel="noopener noreferrer"
                    >
                      Alex Goode Portfolio
                    </a>
                  </li>
                </ul>
              </div>

              {/* Connect Links */}
              <div className="col-md-4 col-12 footer-section">
                <h6 className="text-xs font-semibold text-slate-500 uppercase tracking-wider mb-4">
                  Connect
                </h6>
                <ul className="list-unstyled">
                  <li className="mb-3">
                    <a 
                      href="https://www.linkedin.com/in/alexgoodestudio/" 
                      className="text-base text-slate-300 hover:text-slate-100 text-decoration-none d-inline-block transition-colors"
                      target="_blank" 
                      rel="noopener noreferrer"
                    >
                      LinkedIn
                    </a>
                  </li>
                  <li className="mb-3">
                    <a 
                      href="https://instagram.com/maderight.studio" 
                      className="text-base text-slate-300 hover:text-slate-100 text-decoration-none d-inline-block transition-colors"
                      target="_blank" 
                      rel="noopener noreferrer"
                    >
                      Instagram
                    </a>
                  </li>
                </ul>
              </div>

            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="row align-items-center footer-section">
          <div className="col-md-6 col-12 mb-3 mb-md-0">
            <p className="text-xs text-slate-500 mb-0">
              © {year} Made Right Studios — Columbia, South Carolina
            </p>
          </div>
          <div className="col-md-6 col-12 text-md-end">
            <p className="text-xs text-slate-500 mb-0">
              Built with React + Vite
            </p>
          </div>
        </div>

      </div>
    </footer>
  );
}

export default Footer;