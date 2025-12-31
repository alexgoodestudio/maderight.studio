import { useRef, useEffect, useState } from "react";

function NavBanner() {
  const textRef = useRef();
  const containerRef = useRef();
  const [isMobile, setIsMobile] = useState(() => {
    // Initialize with actual window width on first render
    if (typeof window !== 'undefined') {
      return window.innerWidth <= 768;
    }
    return false;
  });

  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth <= 768);
    };

    checkMobile();
    window.addEventListener('resize', checkMobile);
    return () => window.removeEventListener('resize', checkMobile);
  }, []);

  const bannerText = "Web Design • Web Development • SEO • Content Management Systems • Interaction Design • ";

  return (
    <header
      ref={containerRef}
      className="position-relative overflow-hidden"
      role="banner"
      aria-label="Site information banner"
      style={{
        height: isMobile ? '40px' : 'auto',
        backgroundColor: '#FFF7AF'
      }}
    >
      {/* Mobile scrolling banner - always rendered */}
      <span
        ref={textRef}
        className="position-absolute text-xs font-mono nav-banner-text d-inline-block nav-banner-scroll"
        style={{
          left: 0,
          top: 0,
          whiteSpace: 'nowrap',
          paddingTop: '12px',
          paddingBottom: '12px',
          color: '#000000',
          display: isMobile ? 'inline-block' : 'none'
        }}
      >
        {bannerText.repeat(3)}
      </span>

      {/* Desktop static banner */}
      <p
        className="text-xs font-mono pb-3 pt-3 mb-0 nav-banner-text text-center"
        style={{
          color: '#000000',
          display: isMobile ? 'none' : 'block'
        }}
      >
        Web Design <span className="mx-1"> • </span> Web Development <span className="mx-1"> • </span> SEO + AEO <span className="mx-1"> • </span> Content Management Systems <span className="mx-1"> • </span> Interaction Design <span className="mx-1"> • </span> Full-Stack Solutions
      </p>
    </header>
  );
}

export default NavBanner;
