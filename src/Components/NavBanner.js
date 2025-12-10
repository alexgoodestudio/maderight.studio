import { useRef, useEffect, useState } from "react";
import { gsap } from "gsap";
import { useGSAP } from "@gsap/react";

function NavBanner() {
  const textRef = useRef();
  const containerRef = useRef();
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth <= 768);
    };

    checkMobile();
    window.addEventListener('resize', checkMobile);
    return () => window.removeEventListener('resize', checkMobile);
  }, []);

  useGSAP(() => {
    if (!isMobile || !textRef.current) return;

    const el = textRef.current;
    const textWidth = el.offsetWidth / 10; // Divide by 10 since we repeat text 10 times

    // Start from off-screen left
    gsap.set(el, { x: -textWidth });

    // Animate to the right, looping every time one full cycle completes
    gsap.to(el, {
      x: 0,
      duration: 15,
      ease: "linear",
      repeat: -1,
      modifiers: {
        x: gsap.utils.unitize(x => parseFloat(x) % textWidth)
      }
    });
  }, [isMobile]);

  const bannerText = "Web Design • Web Development • SEO • Content Management Systems • Interaction Design • ";

  return (
    <header
      ref={containerRef}
      className="bg-nav-banner text-slate-800 position-relative overflow-hidden"
      role="banner"
      aria-label="Site information banner"
      style={{ height: isMobile ? '40px' : 'auto' }}
    >
      {isMobile ? (
        <span
          ref={textRef}
          className="position-absolute text-xs font-mono nav-banner-text d-inline-block"
          style={{
            whiteSpace: 'nowrap',
            paddingTop: '12px',
            paddingBottom: '12px'
          }}
        >
          {bannerText.repeat(10)}
        </span>
      ) : (
        <p className="text-xs font-mono pb-3 pt-3 mb-0 nav-banner-text text-center">
          Web Design <span className="mx-1"> • </span> Web Development <span className="mx-1"> • </span> SEO <span className="mx-1"> • </span> Content Management Systems <span className="mx-1"> • </span> Interaction Design
        </p>
      )}
    </header>
  );
}

export default NavBanner;
