const TAGLINE = "Stand Out in the Digital Age with Design-First Web Engineering";

// One half of the marquee. Two identical halves are rendered and the track
// slides left by exactly 50%, so the loop is seamless.
function Group({ hidden }) {
  return (
    <div className="tagline-banner-group" aria-hidden={hidden || undefined}>
      {[...Array(4)].map((_, i) => (
        <div key={i} className="tagline-banner-item">
          <span className="tagline-banner-text">{TAGLINE}</span>
          <span className="tagline-banner-dot">∙</span>
        </div>
      ))}
    </div>
  );
}

function TaglineBanner() {
  return (
    <header
      className="tagline-banner"
      role="banner"
      aria-label={TAGLINE}
    >
      <style>{`
        .tagline-banner {
          overflow: hidden;
          background-color: #134e4a;
          border-top: 1px solid rgba(255, 255, 255, 0.08);
          border-bottom: 1px solid rgba(255, 255, 255, 0.08);
          box-shadow: 0 2px 8px rgba(0, 0, 0, 0.15);
          padding: 12px 0;
        }

        .tagline-banner-track {
          display: flex;
          width: max-content;
          white-space: nowrap;
          will-change: transform;
          animation: tagline-banner-scroll 60s linear infinite;
        }

        .tagline-banner-group,
        .tagline-banner-item {
          display: inline-flex;
          align-items: center;
        }

        .tagline-banner-group,
        .tagline-banner-item {
          gap: 4rem;
        }

        /* Keeps the gap between the last item of a group and the next group */
        .tagline-banner-group {
          padding-right: 4rem;
        }

        .tagline-banner-text {
          font-size: 18px;
          font-weight: 500;
          letter-spacing: 0.1em;
          color: #ffffff;
        }

        .tagline-banner-dot {
          font-size: 14px;
          color: #99f6e4;
        }

        @media (min-width: 769px) {
          .tagline-banner {
            padding: 16px 0;
          }

          .tagline-banner-group,
          .tagline-banner-item {
            gap: 6rem;
          }

          .tagline-banner-group {
            padding-right: 6rem;
          }

          .tagline-banner-text {
            font-size: 20px;
          }

          .tagline-banner-dot {
            font-size: 16px;
          }
        }

        @keyframes tagline-banner-scroll {
          from { transform: translateX(0); }
          to { transform: translateX(-50%); }
        }

        @media (prefers-reduced-motion: reduce) {
          .tagline-banner-track {
            animation: none;
          }
        }
      `}</style>

      <div className="tagline-banner-track eighties">
        <Group />
        <Group hidden />
      </div>
    </header>
  );
}

export default TaglineBanner;
