import { useRef } from "react";

function NavBanner() {
  const textRef = useRef();
  const containerRef = useRef();

  const bannerText = "Web Design\u00A0\u00A0•\u00A0\u00A0Web Development\u00A0\u00A0•\u00A0\u00A0SEO\u00A0\u00A0•\u00A0\u00A0Content Management Systems\u00A0\u00A0•\u00A0\u00A0Interaction Design\u00A0\u00A0•\u00A0\u00A0";

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
        {bannerText.repeat(10)}
      </span>
    </header>
  );
}

export default NavBanner;
