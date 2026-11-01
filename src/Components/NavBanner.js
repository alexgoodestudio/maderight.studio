import squiggle from "./Images/c.png";
import smiley from "./Images/j.png";
import square from "./Images/i.png";

const TAGLINE = "Stand out in the Age of AI with Design-First Engineering";

// Dividers cycle in this order. The per-group item count is a multiple of the
// number of dividers, so the pattern stays unbroken where the loop restarts.
const DIVIDERS = [
  { src: squiggle, className: "" },
  { src: smiley, className: "" },
  { src: square, className: "nav-banner-img-spin" }
];
const ITEMS_PER_GROUP = DIVIDERS.length * 2;

// One half of the marquee. Two identical halves are rendered and the track
// slides left by exactly 50%, so the loop is seamless.
function Group({ hidden }) {
  return (
    <div className="nav-banner-group" aria-hidden={hidden || undefined}>
      {[...Array(ITEMS_PER_GROUP)].map((_, i) => {
        const divider = DIVIDERS[i % DIVIDERS.length];
        return (
          <div key={i} className="nav-banner-item">
            <span className="nav-banner-text">{TAGLINE}</span>
            <img
              src={divider.src}
              alt=""
              className={`nav-banner-img ${divider.className}`}
            />
          </div>
        );
      })}
    </div>
  );
}

// Crooked (rotated) version of the tagline banner.
function NavBanner() {
  return (
    <header
      className="nav-banner"
      role="banner"
      aria-label={TAGLINE}
    >
      <style>{`
        .nav-banner {
          position: relative;
          overflow: hidden;
          margin-top: 2rem;
          margin-bottom: 1rem;
          transform: rotate(-1deg);
          transform-origin: center;
        }

        .nav-banner-bar {
          overflow: hidden;
          background-color: #134e4a;
          border-top: 1px solid rgba(255, 255, 255, 0.08);
          border-bottom: 1px solid rgba(255, 255, 255, 0.08);
          box-shadow: 0 2px 8px rgba(0, 0, 0, 0.15);
          padding: 12px 0;
        }

        .nav-banner-track {
          display: flex;
          width: max-content;
          white-space: nowrap;
          will-change: transform;
          animation: nav-banner-scroll 90s linear infinite;
        }

        .nav-banner-group,
        .nav-banner-item {
          display: inline-flex;
          align-items: center;
          gap: 4rem;
        }

        /* Keeps the gap between the last item of a group and the next group */
        .nav-banner-group {
          padding-right: 4rem;
        }

        .nav-banner-text {
          font-size: 18px;
          font-weight: 500;
          letter-spacing: 0.1em;
          line-height: 1.5;
          color: #ffffff;
        }

        /* Dividers are taller than the text line but use negative margins, so they
           never make the banner taller; they sit inside the bar's vertical padding. */
        .nav-banner-img {
          display: block;
          height: 32px;
          width: auto;
          margin-block: -2.5px;
          flex-shrink: 0;
        }

        /* Square: fades/scales in, spins one way, then back the other way, fades out */
        .nav-banner-img-spin {
          animation: nav-banner-spin 7s ease-in-out infinite;
        }

        @media (min-width: 769px) {
          .nav-banner {
            margin-top: 3rem;
            margin-bottom: 2rem;
          }

          .nav-banner-bar {
            padding: 16px 0;
          }

          .nav-banner-group,
          .nav-banner-item {
            gap: 6rem;
          }

          .nav-banner-group {
            padding-right: 6rem;
          }

          .nav-banner-text {
            font-size: 20px;
          }

          .nav-banner-img {
            height: 38px;
            margin-block: -4px;
          }
        }

        @keyframes nav-banner-scroll {
          from { transform: translateX(0); }
          to { transform: translateX(-50%); }
        }

        @keyframes nav-banner-spin {
          0%   { opacity: 0; transform: scale(0.4) rotate(-60deg); }
          15%  { opacity: 1; transform: scale(1) rotate(0deg); }
          40%  { opacity: 1; transform: scale(1) rotate(90deg); }
          65%  { opacity: 1; transform: scale(1) rotate(-90deg); }
          85%  { opacity: 1; transform: scale(1) rotate(0deg); }
          100% { opacity: 0; transform: scale(0.4) rotate(60deg); }
        }

        @media (prefers-reduced-motion: reduce) {
          .nav-banner-track,
          .nav-banner-img-spin {
            animation: none;
          }
        }
      `}</style>

      <div className="nav-banner-bar">
        <div className="nav-banner-track eighties">
          <Group />
          <Group hidden />
        </div>
      </div>
    </header>
  );
}

export default NavBanner;
