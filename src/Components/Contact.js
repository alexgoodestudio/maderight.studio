import { useRef, useEffect } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { ButtonShape, BRAND_COLORS } from './Shapes';
import { ArrowUpRight } from 'lucide-react';

gsap.registerPlugin(ScrollTrigger);

function Contact() {
  const headingRef = useRef(null);

  useEffect(() => {
    gsap.fromTo(
      headingRef.current,
      {
        opacity: 0,
        y: 20,
      },
      {
        opacity: 1,
        y: 0,
        duration: 1.2,
        ease: 'power2.out',
        scrollTrigger: {
          trigger: headingRef.current,
          start: 'top 80%',
          end: 'top 60%',
          scrub: 1,
        },
      }
    );

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
        className="col-lg-12 col-12  bg-slate-50  contact text-dark d-flex flex-column justify-content-center items-center text-center py-5"
        style={{ paddingLeft: '30px', paddingRight: '30px' }}
      >
        <h3 ref={headingRef} className="text-4xl  text-slate-900 lora font-bold mb-3">
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
          className="btn-contact text-md font-mono text-sky-50 px-5 py-3 position-relative border-0"
          style={{
            background: 'transparent',
            cursor: 'pointer'
          }}
        >
          <ButtonShape
            color={BRAND_COLORS.buttonPurple}
            width={150}
            height={60}
            className="position-absolute top-0 start-0"
            style={{ pointerEvents: 'none' }}
          />
          <span className="position-relative d-flex align-items-center gap-2" style={{ zIndex: 1 }}>
            Email
            <ArrowUpRight size={16} strokeWidth={2} />
          </span>
        </button>
      </div>
    </div>
  );
}

export default Contact;
