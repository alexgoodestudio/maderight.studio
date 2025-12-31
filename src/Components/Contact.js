import { ButtonShape } from './Shapes';
import { ArrowUpRight } from 'lucide-react';

function Contact() {

  const handleContactClick = () => {
    window.location.href = "mailto:hello@maderight.studio";
  };

  return (
    <div className="row  contact">
      <div
        className="col-lg-12 col-12 px-md-3 px-5   bg-slate-50  contact text-dark d-flex flex-column justify-content-center items-center text-center py-5"
      >
        <h3 className="text-4xl  text-slate-900 lora font-bold mb-3">
          Interested in working together?
        </h3>
        <div className='col-md-5'>
 <p className="text-xl  gs  mb-5">
          Made Right is interested in working with you. Send us a brief of what
          you would like done. It works best if you send a budget so we can plan
          accordingly to create within your means.
        </p>
        </div>

        <button
          onClick={handleContactClick}
          className="btn-contact text-decoration-none d-inline-flex align-items-center justify-content-center px-3 text-md font-mono position-relative border-0"
          style={{
            background: 'transparent',
            cursor: 'pointer',
            height: window.innerWidth <= 768 ? "50px" : "60px",
            minWidth: window.innerWidth <= 768 ? "130px" : "150px",
            color: '#4A2D3E'
          }}
        >
          <ButtonShape
            color="#816281"
            width={window.innerWidth <= 768 ? 130 : 150}
            height={window.innerWidth <= 768 ? 50 : 60}
            className="position-absolute top-0 start-0"
            style={{ pointerEvents: 'none' }}
          />
          <span className="position-relative d-flex align-items-center p-2 gap-2 text-white" style={{ zIndex: 1 }}>
            Email
            <ArrowUpRight size={window.innerWidth <= 768 ? 14 : 16} strokeWidth={2} />
          </span>
        </button>
      </div>
    </div>
  );
}

export default Contact;
