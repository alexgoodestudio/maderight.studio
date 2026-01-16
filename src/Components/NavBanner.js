import { useRef, useEffect } from "react";

function NavBanner() {
  const textRef = useRef();
  const containerRef = useRef();

  const services = [
    "Web Development",
    "Web Design",
    "SEO",
    "Content Management",
    "Interaction Design",
    "Performance Optimization",
    "Responsive Design",
    "Full-Stack Solutions",
  ];

  useEffect(() => {
    if (!textRef.current) return;

    let animationFrameId;
    let scrollPosition = 0;

    const animate = () => {
      scrollPosition -= 0.5; // Smooth, purposeful speed
      textRef.current.style.transform = `translateX(${scrollPosition}px)`;

      // Reset when scrolled enough
      if (Math.abs(scrollPosition) >= textRef.current.scrollWidth / 2) {
        scrollPosition = 0;
      }

      animationFrameId = requestAnimationFrame(animate);
    };

    animate();

    return () => cancelAnimationFrame(animationFrameId);
  }, []);

  const isMobile = typeof window !== 'undefined' && window.innerWidth <= 768;

  return (
    <header
      ref={containerRef}
      className="position-relative overflow-hidden"
      role="banner"
      aria-label="Services banner"
      style={{
        marginTop: isMobile ? '2rem' : '3rem',
        marginBottom: isMobile ? '1rem' : '2rem',
        transform: 'rotate(-1deg)',
        transformOrigin: 'center'
      }}
    >
      {/* Bold ribbon background with hand-drawn feel */}
      <div
        style={{
          position: 'relative',
          backgroundColor: '#134e4a',
          padding: isMobile ? '14px 0' : '18px 0',
          borderTop: '1px solid rgba(255,255,255,0.08)',
          borderBottom: '1px solid rgba(255,255,255,0.08)',
          boxShadow: '0 2px 8px rgba(0,0,0,0.15)'
        }}
      >
        {/* Scrolling text container */}
        <div
          ref={textRef}
          className="eighties"
          style={{
            display: 'inline-flex',
            alignItems: 'center',
            gap: isMobile ? '3rem' : '4rem',
            whiteSpace: 'nowrap',
            willChange: 'transform'
          }}
        >
          {/* Repeat services 4 times for seamless loop */}
          {[...Array(4)].map((_, repeatIndex) => (
            <div
              key={repeatIndex}
              style={{
                display: 'inline-flex',
                alignItems: 'center',
                gap: isMobile ? '3rem' : '4rem'
              }}
            >
              {services.map((service, index) => (
                <div
                  key={`${repeatIndex}-${index}`}
                  style={{
                    display: 'inline-flex',
                    alignItems: 'center',
                    gap: isMobile ? '3rem' : '4rem'
                  }}
                >
                  <span
                    style={{
                      fontSize: isMobile ? '14px' : '16px',
                      fontWeight: '500',
                      letterSpacing: '0.02em',
                      color: '#ffffff',
                      textTransform: 'none'
                    }}
                  >
                    {service}
                  </span>
                  <span
                    style={{
                      fontSize: isMobile ? '10px' : '12px',
                      color: '#99f6e4',
                      fontWeight: '400'
                    }}
                  >
                    ∙
                  </span>
                </div>
              ))}
            </div>
          ))}
        </div>
      </div>
    </header>
  );
}

export default NavBanner;
