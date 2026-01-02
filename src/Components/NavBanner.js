import { useRef } from "react";

function NavBanner() {
  const textRef = useRef();
  const containerRef = useRef();

  const bannerText = "Web Design • Web Development • SEO • Content Management Systems • Interaction Design • ";

  return (
    <header
      ref={containerRef}
      className="position-relative overflow-hidden"
      role="banner"
      aria-label="Site information banner"
      style={{
        height: '40px',
        backgroundColor: '#FFF7AF'
      }}
    >
      {/* Scrolling banner - shown on all screen sizes */}
      <span
        ref={textRef}
        className="position-absolute text-xs font-mono nav-banner-text d-inline-block nav-banner-scroll-right"
        style={{
          left: 0,
          top: 0,
          whiteSpace: 'nowrap',
          paddingTop: '12px',
          paddingBottom: '12px',
          color: '#000000'
        }}
      >
        {bannerText.repeat(3)}
      </span>
    </header>
  );
}

export default NavBanner;
