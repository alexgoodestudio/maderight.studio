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
    const textWidth = el.offsetWidth / 3; // Divide by 3 since we repeat text 3 times

    // Seamless infinite scroll - animate from right to left
    // Start at -textWidth and animate to 0, creating seamless loop
    gsap.fromTo(el,
      { x: -textWidth },
      {
        x: 0,
        duration: 20,
        ease: "none",
        repeat: -1
      }
    );
  }, [isMobile]);

  const bannerText = "Web Design • Web Development • SEO • Content Management Systems • Interaction Design • ";

  return (
    <header
      ref={containerRef}
      className="position-relative overflow-hidden"
      role="banner"
      aria-label="Site information banner"
      style={{
        height: isMobile ? '40px' : 'auto',
        backgroundColor: '#BB879D',
        color: '#1E1435'
      }}
    >
      {isMobile ? (
        <span
          ref={textRef}
          className="position-absolute text-xs font-mono nav-banner-text d-inline-block"
          style={{
            whiteSpace: 'nowrap',
            paddingTop: '12px',
            paddingBottom: '12px',
            color: '#1E1435'
          }}
        >
          {bannerText.repeat(3)}
        </span>
      ) : (
        <p className="text-xs font-mono pb-3 pt-3 mb-0 nav-banner-text text-center" style={{ color: '#1E1435' }}>
          Web Design <span className="mx-1"> • </span> Web Development <span className="mx-1"> • </span> SEO + AEO <span className="mx-1"> • </span> Content Management Systems <span className="mx-1"> • </span> Interaction Design <span className="mx-1"> • </span> Full-Stack Solutions
        </p>
      )}
    </header>
  );
}

export default NavBanner;
