import { Link } from "react-router-dom";
import { useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { ArrowUpRight } from 'lucide-react';

gsap.registerPlugin(ScrollTrigger);

function Footer() {
  const year = new Date().getFullYear();
  const footerRef = useRef(null);
  const emailRef = useRef(null);

  // Email hover animation - text color and underline
  const handleEmailHover = () => {
    gsap.to(emailRef.current, {
      color: '#FFF7AF', // Yellow on hover
      duration: 0.3,
      ease: 'power2.out',
    });
  };

  const handleEmailLeave = () => {
    gsap.to(emailRef.current, {
      color: '#ffffff', // White as default
      duration: 0.3,
      ease: 'power2.out',
    });
  };

  return (
    <footer ref={footerRef} className="bg-teal-950 text-slate-100 pt-32 pb-8 ">
      <div className="container-fluid px-4 px-lg-5">
        
        {/* Primary Content Grid */}
        <div className="row mb-5 pb-5 border-bottom border-slate-700">
          
          {/* Studio Statement */}
          <div className="col-lg-5 col-12 mb-5 mb-lg-0 footer-section d-flex justify-content-center align-items-center">
            <div className="text-center">
              <h2
                className="text-6xl eighties font-bold mb-4 text-slate-100"
              >
                Made Right
              </h2>
              <p className="text-xl tracking-wide text-slate-300">
                <span className="lora">Design-First</span> <span className="italic">Web Development</span> Studio

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
                      className="text-md text-slate-300 hover:text-slate-100 text-decoration-none d-inline-flex align-items-center gap-2 transition-colors"
                    >
                      Home
                      <ArrowUpRight size={14} strokeWidth={1.5} />
                    </Link>
                  </li>
                  <li className="mb-3">
                    <Link
                      to="/our-process"
                      className="text-md text-slate-300 hover:text-slate-100 text-decoration-none d-inline-flex align-items-center gap-2 transition-colors"
                    >
                      Our Process
                      <ArrowUpRight size={14} strokeWidth={1.5} />
                    </Link>
                  </li>
                  <li className="mb-3">
                    <Link
                      to="/about"
                      className="text-md text-slate-300 hover:text-slate-100 text-decoration-none d-inline-flex align-items-center gap-2 transition-colors"
                    >
                      About
                      <ArrowUpRight size={14} strokeWidth={1.5} />
                    </Link>
                  </li>
                  <li className="mb-3">
                    <Link
                      to="/team"
                      className="text-md text-slate-300 hover:text-slate-100 text-decoration-none d-inline-flex align-items-center gap-2 transition-colors"
                    >
                      Team
                      <ArrowUpRight size={14} strokeWidth={1.5} />
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
                      href="https://lemich.netlify.app"
                      className="text-md text-slate-300 hover:text-slate-100 text-decoration-none d-inline-flex align-items-center gap-2 transition-colors"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      The Lemich Clinic
                      <ArrowUpRight size={14} strokeWidth={1.5} />
                    </a>
                  </li>
                  <li className="mb-3">
                    <a
                      href="https://rosewoodcleaning.netlify.app"
                      className="text-md text-slate-300 hover:text-slate-100 text-decoration-none d-inline-flex align-items-center gap-2 transition-colors"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      Rosewood Cleaning
                      <ArrowUpRight size={14} strokeWidth={1.5} />
                    </a>
                  </li>
                  <li className="mb-3">
                    <a
                      href="http://alexgoode.netlify.app/"
                      className="text-md text-slate-300 hover:text-slate-100 text-decoration-none d-inline-flex align-items-center gap-2 transition-colors"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      Alex Goode Portfolio
                      <ArrowUpRight size={14} strokeWidth={1.5} />
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
                      className="text-md text-slate-300 hover:text-slate-100 text-decoration-none d-inline-flex align-items-center gap-2 transition-colors"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      Instagram
                      <ArrowUpRight size={14} strokeWidth={1.5} />
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
          <div className="col-md-6 col-12 text-md-end">
            <a
              href="mailto:hello@maderight.studio"
              ref={emailRef}
              className="text-sm mb-0 d-inline-block email-link"
              onMouseEnter={handleEmailHover}
              onMouseLeave={handleEmailLeave}
              style={{
                cursor: 'pointer',
                userSelect: 'none',
                color: '#ffffff',
                textDecoration: 'none',
                borderBottom: '2px solid #FFF7AF',
                transition: 'border-bottom 0.3s ease'
              }}
            >
              hello@maderight.studio
            </a>
          </div>
        </div>

      </div>
    </footer>
  );
}

export default Footer;
