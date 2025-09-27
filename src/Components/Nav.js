import React, { useState, useRef, useEffect } from "react";
import { gsap } from "gsap";
import "bootstrap/dist/css/bootstrap.min.css";
import { Link } from "react-router-dom";

function Nav() {
  const [isOpen, setIsOpen] = useState(false);
  const navContentRef = useRef(null);

  useEffect(() => {
    if (isOpen) {
      gsap.fromTo(
        navContentRef.current.children,
        { y: -20, opacity: 0 },
        { y: 0, opacity: 1, stagger: 0.1, duration: 0.4, ease: "power2.out" }
      );
    } else {
      gsap.to(navContentRef.current.children, {
        y: -20,
        opacity: 0,
        stagger: 0.05,
        duration: 0.3,
        ease: "power2.in",
      });
    }
  }, [isOpen]);

  return (
    <nav className="navbar navbar-light bg-slate-100 text-slate-800 flex flex-col text-start">
      {/* Always fixed header row */}
      <div className="container-fluid d-flex justify-content-between align-items-center">
        <Link to="/" className="navbar-brand text-decoration-none text-slate-800">
          Made Right
        </Link>
        <button
          className="navbar-toggler d-block"
          type="button"
          onClick={() => setIsOpen(!isOpen)}
        >
          <span className="navbar-toggler-icon"></span>
        </button>
      </div>
      {/* Collapsible content */}
      <div
        className={`w-100 px-3 mt-2 ${isOpen ? "d-block" : "d-none"}`}
        ref={navContentRef}
      >
        {/* Row 1 */}
        <div className="row mb-3">
          <div className="col-12 text-slate-800 p-3">
            <h4>Links</h4>
            <p className="text-md">
              Check out my work, and other places you can find me!
            </p>
          </div>
        </div>

        {/* Row 2 */}
        <div className="row mb-3">
          <div className="col-lg-4 col-12 text-slate-800 p-3">
            <Link to="/our-process" className="block no-underline text-slate-800">
              <h5>Our Process</h5>
              <p className="text-md">Step by step</p>
            </Link>
          </div>
          <div className="col-lg-4 col-12 text-slate-800 p-3">
            <h5>
              <a href="https://www.linkedin.com/in/alexgoodestudio/" className="block no-underline text-slate-800" target="_blank" rel="noopener noreferrer">
                LinkedIn
              </a>
            </h5>
            <p className="text-md">Lets Connect</p>
          </div>
          <div className="col-lg-4 col-12 text-slate-800 p-3">
            <h5>
              <a href="http://alexgoode.netlify.app/" className="block no-underline text-slate-800" target="_blank" rel="noopener noreferrer">
                Owner
              </a>
            </h5>
            <p className="text-md">
              Alex Goode Portfolio
            </p>
          </div>
        </div>

        {/* Row 3 */}
        <div className="row mb-3">
          <div className="col-lg-4 col-12 text-slate-800 p-3">
            <h5>
              <a href="https://instagram.com/maderight.studio" className="block no-underline text-slate-800" target="_blank" rel="noopener noreferrer">
                Instagram
              </a>
            </h5>
            <p className="text-md">See what I'm doing</p>
          </div>
          <div className="col-lg-4 col-12 text-slate-800 p-3">
            <h5>
              <a href="https://lemichclinic.netlify.app" className="block no-underline text-slate-800" target="_blank" rel="noopener noreferrer">
                The Lemich Clinic
              </a>
            </h5>
            <p className="text-md">Featured: Recent work</p>
          </div>
          <div className="col-lg-4 col-12 text-slate-800 p-3">
            <h5>
              <a href="https://rosewoodcleaning.netlify.app" className="block no-underline text-slate-800" target="_blank" rel="noopener noreferrer">
                Rosewood Cleaning Services
              </a>
            </h5>
            <p className="text-md">Featured: Recent work</p>
          </div>
        </div>
      </div>
    </nav>
  );
}

export default Nav;
