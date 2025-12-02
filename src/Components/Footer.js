import { Link } from "react-router-dom";
import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

function Footer() {
  const year = new Date().getFullYear();
  const footerRef = useRef(null);
  const titleRef = useRef(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.from(titleRef.current, {
        scrollTrigger: {
          trigger: titleRef.current,
          start: "top 80%",
          toggleActions: "play none none none",
        },
        duration: 1.2,
        y: -40,
        opacity: 20,
        ease: "bounce.out",
      });
    }, footerRef);

    return () => ctx.revert();
  }, []);

  return (
    <footer ref={footerRef} className="bg-teal-950 text-slate-100 pt-32 pb-8 ">
      <div className="container-fluid px-4 px-lg-5">
        
        {/* Primary Content Grid */}
        <div className="row mb-5 pb-5 border-bottom border-slate-700">
          
          {/* Studio Statement */}
          <div className="col-lg-5 col-12 mb-5 mb-lg-0 footer-section d-flex justify-content-center align-items-center">
            <div className="text-center">
              <h2
                ref={titleRef}
                className="text-6xl eighties font-bold mb-4 text-slate-100"
              >
                Made Right
              </h2>
              <p className="text-xl tracking-wide text-slate-300">
                Design-first <span className="italic">technology</span> studio.

              </p>
              <p className="text-sm font-mono text-slate-400">
                Columbia, South Carolina
              </p>
            </div>
          </div>

          {/* Navigation Columns */}
          <div className="col-lg-7 col-12">
            <div className="row">
              
              {/* Studio Links */}
              <div className="col-md-4 text-start col-12 mb-4 mb-md-0 footer-section">
                <h6 className="text-lg font-mono font-semibold text-slate-400 border-white uppercase tracking-wider mb-4">
                  Studio
                </h6>
                <ul className="list-unstyled">
                   <li className="mb-3">
                    <Link 
                      to="/" 
                      className="text-md text-slate-300 hover:text-slate-100 text-decoration-none d-inline-block transition-colors"
                    >
                      Home
                    </Link>
                  </li>
                  <li className="mb-3">
                    <Link 
                      to="/our-process" 
                      className="text-md text-slate-300 hover:text-slate-100 text-decoration-none d-inline-block transition-colors"
                    >
                      Our Process
                    </Link>
                  </li>
                  <li className="mb-3">
                    <Link 
                      to="/about" 
                      className="text-md text-slate-300 hover:text-slate-100 text-decoration-none d-inline-block transition-colors"
                    >
                      About
                    </Link>
                  </li>
                  <li className="mb-3">
                    <Link 
                      to="/team" 
                      className="text-md text-slate-300 hover:text-slate-100 text-decoration-none d-inline-block transition-colors"
                    >
                      Team
                    </Link>
                  </li>
                </ul>
              </div>

              {/* Work Links */}
              <div className="col-md-4 text-start col-12 mb-4 mb-md-0 footer-section">
                <h6 className="text-lg font-mono font-semibold text-slate-400 border-white uppercase tracking-wider mb-4">
                  Recent Work
                </h6>
                <ul className="list-unstyled">
                  <li className="mb-3">
                    <a 
                      href="https://lemichclinic.netlify.app" 
                      className="text-md text-slate-300 hover:text-slate-100 text-decoration-none d-inline-block transition-colors"
                      target="_blank" 
                      rel="noopener noreferrer"
                    >
                      The Lemich Clinic
                    </a>
                  </li>
                  <li className="mb-3">
                    <a 
                      href="https://rosewoodcleaning.netlify.app" 
                      className="text-md text-slate-300 hover:text-slate-100 text-decoration-none d-inline-block transition-colors"
                      target="_blank" 
                      rel="noopener noreferrer"
                    >
                      Rosewood Cleaning
                    </a>
                  </li>
                  <li className="mb-3">
                    <a 
                      href="http://alexgoode.netlify.app/" 
                      className="text-md text-slate-300 hover:text-slate-100 text-decoration-none d-inline-block transition-colors"
                      target="_blank" 
                      rel="noopener noreferrer"
                    >
                      Alex Goode Portfolio
                    </a>
                  </li>
                </ul>
              </div>

              {/* Connect Links */}
              <div className="col-md-4 text-start col-12 footer-section">
                <h6 className="text-lg font-mono font-semibold text-slate-400 border-white uppercase tracking-wider mb-4">
                  Connect
                </h6>
                <ul className="list-unstyled">
                  <li className="mb-3"></li>
                  <li className="mb-3">
                    <a 
                      href="https://instagram.com/maderight.studio" 
                      className="text-md text-slate-300 hover:text-slate-100 text-decoration-none d-inline-block transition-colors"
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
          <div className="col-md-5 col-12 mb-3 mb-md-0">
            <p className="text-sm text-slate-200 mb-0">
              © {year} Made Right Studios — Columbia, South Carolina
            </p>
          </div>
          <div className="col-md-6 col-12  text-md-end">
            <p className="text-sm text-slate-200 mb-0 ">
              hello@maderight.studio
            </p>
          </div>
        </div>

      </div>
    </footer>
  );
}

export default Footer;
