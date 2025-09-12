import React, { useRef } from "react";
import { gsap } from "gsap";
import { useGSAP } from "@gsap/react";
import "./Style.css";

function Opener() {
  const madeRef = useRef(null);
  const rightRef = useRef(null);

  useGSAP(() => {
    gsap.from(madeRef.current, {
      y: 200,       // slide up
      duration: 1.25,
      ease: "power3.out"
    });

    gsap.from(rightRef.current, {
      y: -200,      // slide down
      duration: 1.25,
      ease: "power3.out",
      delay: 0.2
    });
  }, []);

  return (
    <div className="vh-100 opener-container  bg-opener d-flex justify-content-center align-items-center">
      <section className="text-center text-dark">
        <h1 className="text-opener eighties text-white flex justify-center px-5">
          
          {/* Wrapper matches text size */}
          <span className="inline-block overflow-hidden leading-none ">
            <span ref={madeRef} className="inline-block me-lg-5 me-3">Made</span>
          </span>

          <span className="inline-block overflow-hidden leading-none pb-4">
            <span ref={rightRef} className="inline-block">Right</span>
          </span>
        </h1>
        <h4 className="text-xl text-white mb-5">
          A Creative Web Design and Technology Studio.
        </h4>
      </section>
    </div>
  );
}

export default Opener;
