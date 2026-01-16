import { ButtonShape, BRAND_COLORS } from './Shapes';
import { ArrowUpRight } from 'lucide-react';
import { useState } from 'react';

function Contact() {
  const [isButtonHovered, setIsButtonHovered] = useState(false);

  const handleContactClick = () => {
    window.location.href = "mailto:hello@maderight.studio";
  };

  return (
    <div className="row  contact">
      <div
        className="col-lg-12 col-12 px-md-3 px-5   bg-slate-50  contact text-dark d-flex flex-column justify-content-center items-center text-center py-5"
      >
        <h3 className="text-lg-3xl text-4xl text-start text-slate-900 lora font-bold mb-3">
          Interested in working together?
        </h3>
        <div className='col-md-5' style={{ maxWidth: window.innerWidth <= 768 ? '100%' : '500px' }}>
 <p
          className={`gs ${window.innerWidth <= 768 ? 'mb-5 text-start' : 'text-justify text-lg mt-4 mb-5'}`}
          style={window.innerWidth <= 768 ? {
            color: '#1e293b',
            fontSize: '1rem',
            lineHeight: '1.7',
            letterSpacing: '-0.01em',
            wordSpacing: '0.35rem',
         
          } : {
            color: '#374151',
            letterSpacing: "0em",
            lineHeight: "1.6",
           
          }}
        >
          <span className='lora font-semibold'>Made Right</span> is interested in working with you. Send us a brief of what
          you would like done. It works best if you send a budget so we can plan
          accordingly to create within your means.
        </p>
        </div>

        <button
          onClick={handleContactClick}
          onMouseEnter={() => setIsButtonHovered(true)}
          onMouseLeave={() => setIsButtonHovered(false)}
          className="btn-contact text-decoration-none d-inline-flex align-items-center justify-content-center text-md font-mono position-relative border-0 text-white"
          style={{
            background: 'transparent',
            cursor: 'pointer',
            height: window.innerWidth <= 768 ? '50px' : '60px',
            minWidth: window.innerWidth <= 768 ? '150px' : '180px',
            padding: window.innerWidth <= 768 ? '0 1rem' : '0 3rem',
            transform: isButtonHovered ? 'translateY(-2px)' : 'translateY(0)',
            transition: 'transform 0.2s ease'
          }}
        >
          <ButtonShape
            color={BRAND_COLORS.tealDark}
            width={window.innerWidth <= 768 ? 150 : 180}
            height={window.innerWidth <= 768 ? 50 : 60}
            className="position-absolute top-0 start-0 button-shape"
          />
          <span className="position-relative d-flex align-items-center gap-2 button-text" style={{ zIndex: 1 }}>
            Email
            <ArrowUpRight size={window.innerWidth <= 768 ? 14 : 16} strokeWidth={2} />
          </span>
        </button>
      </div>
    </div>
  );
}

export default Contact;
