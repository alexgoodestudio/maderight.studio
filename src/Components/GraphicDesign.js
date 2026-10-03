import { useState } from 'react';
import Nav from './Nav';

// Automatically picks up every image dropped into Images/graphic_design —
// no code changes needed when new work is added, just add the file.
const imageContext = require.context(
  './Images/graphic_design',
  false,
  /\.(png|jpe?g|gif|webp|svg)$/i
);

const pieces = imageContext.keys().map((key) => ({
  key,
  src: imageContext(key),
  title: key
    .replace('./', '')
    .replace(/\.[^/.]+$/, '')
    .replace(/[-_]/g, ' ')
}));

function GraphicDesign() {
  const [activePiece, setActivePiece] = useState(null);

  return (
    <>
      <Nav />
      <style>{`
        .gd-section {
          padding-block: 5rem;
          background-color: #fafaf9;
          min-height: 60vh;
        }

        .gd-kicker {
          font-size: 0.875rem;
          font-weight: 500;
          text-transform: uppercase;
          letter-spacing: 0.1em;
          color: #0f766e;
          margin-bottom: 0.75rem;
        }

        .gd-heading {
          font-size: 2.5rem;
          font-weight: 600;
          letter-spacing: -0.02em;
          color: #1e293b;
          margin-bottom: 3rem;
        }

        .gd-grid {
          display: grid;
          grid-template-columns: repeat(auto-fill, minmax(280px, 1fr));
          gap: 1.5rem;
        }

        .gd-card {
          border: 1px solid #e2e8f0;
          background: #fff;
          cursor: pointer;
          overflow: hidden;
          transition: box-shadow 0.25s ease, transform 0.25s ease;
        }

        .gd-card:hover {
          box-shadow: 4px 4px 0 rgba(15, 23, 42, 0.08);
          transform: translateY(-2px);
        }

        .gd-card img {
          width: 100%;
          height: 280px;
          object-fit: cover;
          display: block;
        }

        .gd-card-title {
          padding: 0.75rem 1rem;
          font-size: 0.875rem;
          font-weight: 500;
          color: #334155;
          text-transform: capitalize;
          border-top: 1px solid #e2e8f0;
        }

        .gd-empty {
          border: 1px dashed #cbd5e1;
          padding: 3rem;
          text-align: center;
          color: #64748b;
        }

        .gd-lightbox {
          position: fixed;
          inset: 0;
          background: rgba(15, 23, 42, 0.92);
          z-index: 1000;
          display: flex;
          align-items: center;
          justify-content: center;
          padding: 2rem;
          cursor: zoom-out;
        }

        .gd-lightbox img {
          max-width: 100%;
          max-height: 90vh;
          box-shadow: 0 10px 40px rgba(0,0,0,0.4);
        }

        .gd-lightbox-close {
          position: absolute;
          top: 1.5rem;
          right: 1.5rem;
          background: #fff;
          border: 0;
          width: 36px;
          height: 36px;
          border-radius: 50%;
          cursor: pointer;
          font-size: 1.1rem;
          line-height: 1;
        }
      `}</style>

      <section className="gd-section">
        <div className="container">
          <p className="gd-kicker">Selected Work</p>
          <h1 className="gd-heading eighties">Graphic Design</h1>

          {pieces.length === 0 ? (
            <div className="gd-empty">
              Nothing uploaded yet — drop image files into
              {' '}
              <code>src/Components/Images/graphic_design</code>
              {' '}
              and they'll show up here automatically.
            </div>
          ) : (
            <div className="gd-grid">
              {pieces.map((piece) => (
                <div
                  key={piece.key}
                  className="gd-card"
                  onClick={() => setActivePiece(piece)}
                >
                  <img src={piece.src} alt={piece.title} loading="lazy" />
                  <div className="gd-card-title">{piece.title}</div>
                </div>
              ))}
            </div>
          )}
        </div>
      </section>

      {activePiece && (
        <div className="gd-lightbox" onClick={() => setActivePiece(null)}>
          <button
            className="gd-lightbox-close"
            onClick={() => setActivePiece(null)}
            aria-label="Close"
          >
            ✕
          </button>
          <img src={activePiece.src} alt={activePiece.title} />
        </div>
      )}
    </>
  );
}

export default GraphicDesign;
