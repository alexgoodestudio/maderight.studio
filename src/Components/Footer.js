import { Link } from "react-router-dom";
import { useRef, useEffect } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { ArrowUpRight } from 'lucide-react';

gsap.registerPlugin(ScrollTrigger);

// Social media icon components
const InstagramIcon = ({ size = 16 }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <rect x="2" y="2" width="20" height="20" rx="5" ry="5"></rect>
    <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path>
    <line x1="17.5" y1="6.5" x2="17.51" y2="6.5"></line>
  </svg>
);

const FacebookIcon = ({ size = 16 }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"></path>
  </svg>
);

function Footer() {
  const year = new Date().getFullYear();
  const footerRef = useRef(null);
  const emailRef = useRef(null);
  const titleRef = useRef(null);
  const subtitleRef = useRef(null);

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

  // Function to resize title to match subtitle width
  useEffect(() => {
    const resizeTitle = () => {
      if (titleRef.current && subtitleRef.current) {
        const subtitleWidth = subtitleRef.current.offsetWidth;
        let fontSize = 72; // Starting font size in pixels

        titleRef.current.style.fontSize = `${fontSize}px`;

        // Gradually reduce font size until title width matches or is less than subtitle width
        while (titleRef.current.offsetWidth > subtitleWidth && fontSize > 20) {
          fontSize -= 1;
          titleRef.current.style.fontSize = `${fontSize}px`;
        }
      }
    };

    // Initial resize
    resizeTitle();

    // Resize on window resize
    window.addEventListener('resize', resizeTitle);

    // Cleanup
    return () => window.removeEventListener('resize', resizeTitle);
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
                className="eighties font-bold mb-3 text-slate-100"
                style={{ whiteSpace: 'nowrap' }}
              >
              🧤 made right
              </h2>
              <p
                ref={subtitleRef}
                className="text-xl tracking-wide text-slate-300 mb-4"
                style={{ whiteSpace: 'nowrap' }}
              >
                <span className="lora font-semibold">Design-First</span> <span className="italic gs">Web Development</span>

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
                  <li className="mb-3">
                    <a
                      href="mailto:hello@maderight.studio"
                      className="text-md text-slate-300 hover:text-slate-100 text-decoration-none d-inline-flex align-items-center gap-2 transition-colors"
                    >
                      Email
                      <ArrowUpRight size={14} strokeWidth={1.5} />
                    </a>
                  </li>
                  <li className="mb-3">
                    <a
                      href="https://instagram.com/maderight.studio"
                      className="text-md text-slate-300 hover:text-slate-100 text-decoration-none d-inline-flex align-items-center gap-2 transition-colors"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <InstagramIcon size={16} />
                      Instagram
                      <ArrowUpRight size={14} strokeWidth={1.5} />
                    </a>
                  </li>
                  <li className="mb-3">
                    <a
                      href="https://www.facebook.com/profile.php?id=61586220357306"
                      className="text-md text-slate-300 hover:text-slate-100 text-decoration-none d-inline-flex align-items-center gap-2 transition-colors"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <FacebookIcon size={16} />
                      Facebook
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
