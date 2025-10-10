import React, { useRef } from 'react';
import { useGSAP } from '@gsap/react';
import gsap from 'gsap';

const MOTION = {
  instant: 0.15,
  quick: 0.3,
  smooth: 0.5,
  slow: 0.8,
  story: 1.2
};

function Contact() {
  const waveRef = useRef(null);

  useGSAP(() => {
    const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    
    if (prefersReducedMotion) return;

    gsap.to(waveRef.current, {
      rotation: 20,
      transformOrigin: 'bottom center',
      duration: MOTION.smooth,
      ease: 'power1.inOut',
      yoyo: true,
      repeat: -1,
      repeatDelay: 0.8
    });
  }, []);

  const handleContactClick = () => {
    window.location.href = "mailto:alexgoode2@gmail.com";
  };

  return (
    <div className="row contact">
      <div className="col-lg-12 col-12 bg-slate-100 contact text-dark d-flex flex-column justify-content-center items-center text-center p-4">
        <h3 className="mb-3 d-flex align-items-center justify-content-center gap-3">

          Interested in working together?
        </h3>
        <p className="text-lg contact-body mb-4">
          Made Right is interested in working with you. Send us a brief of what
          you would like done. It works best if you send a budget so I can plan
          accordingly to create within your means.
        </p>
        <button
          onClick={handleContactClick}
          className="btn-contact font-mono bg-orange-900 px-4 py-3 text-sm text-white rounded"
        >
          Contact Us
        </button>
      </div>
    </div>
  );
}

export default Contact;