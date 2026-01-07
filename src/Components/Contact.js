import { ButtonShape, BRAND_COLORS } from './Shapes';
import { ArrowUpRight } from 'lucide-react';
import { useRef, useEffect, useState } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

function Contact() {
  const headingRef = useRef(null);
  const [isButtonHovered, setIsButtonHovered] = useState(false);

  useEffect(() => {
    if (headingRef.current) {
      const words = headingRef.current.querySelectorAll('.word');

      // Set initial state
      gsap.set(words, { opacity: 1, y: 0 });

      gsap.from(words, {
        scrollTrigger: {
          trigger: headingRef.current,
          start: 'top 80%',
          once: true
        },
        y: 20,
        opacity: 0,
        stagger: 0.08,
        duration: 0.5,
        ease: 'back.out(1.4)'
      });
    }

    return () => {
      ScrollTrigger.getAll().forEach(trigger => trigger.kill());
    };
  }, []);

  const handleContactClick = () => {
    window.location.href = "mailto:hello@maderight.studio";
  };

  return (
    <div className="row  contact">
      <div
        className="col-lg-12 col-12 px-md-3 px-5   bg-slate-50  contact text-dark d-flex flex-column justify-content-center items-center text-center py-5"
      >
        <h3 ref={headingRef} className="text-4xl  text-slate-900 lora font-bold mb-3 position-relative">
          <span className="word d-inline-block me-2">Interested</span>
          <span className="word d-inline-block me-2">in</span>
          <span className="word d-inline-block me-2">working</span>
          <span className="word d-inline-block me-2">together?</span>
        </h3>
        <div className='col-md-5' style={{ maxWidth: window.innerWidth <= 768 ? '100%' : '500px' }}>
 <p
          className={`gs ${window.innerWidth <= 768 ? 'mb-5 text-justify' : 'text-justify text-xl mb-5'}`}
          style={window.innerWidth <= 768 ? {
            color: '#1e293b',
            fontSize: '1rem',
            lineHeight: '1.7',
            letterSpacing: '-0.01em',
            wordSpacing: '0.35rem',
            paddingLeft: '0'
          } : {
            color: '#374151',
            letterSpacing: "0em",
            lineHeight: "1.6",
            paddingLeft: '3rem'
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
