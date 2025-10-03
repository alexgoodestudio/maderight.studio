import React, { useRef } from "react";
import { gsap } from "gsap";
import { useGSAP } from "@gsap/react";
import "./Style.css";

function Opener() {
  const madeRef = useRef(null);
  const rightRef = useRef(null);
  //   const handleContactClick = () => {
  //   // Opens email app with prefilled "to" address
  //   window.location.href = "mailto:alexgoode2@gmail.com";
  // };

  useGSAP(() => {
    // Bounce in "Made"
    gsap.from(madeRef.current, {
      y: 200,
      duration: 1.5,
      ease: "bounce.out",
    });

    // Bounce in "Right" slightly delayed
    gsap.from(rightRef.current, {
      y: -200,
      duration: 1.5,
      ease: "bounce.out",
      delay: 0.2,
    });
  }, []);

  return (
    <div className="vh-100 bg-green-900 d-flex justify-content-center align-items-center">
      <section className="text-center text-dark">
        <h1
          className="text-opener eighties text-white d-flex justify-content-center"
          style={{ paddingLeft: "1.25rem", paddingRight: "1.25rem" }}
        >
          <span
            className="d-inline-block"
            style={{ overflow: "hidden", lineHeight: "1" }}
          >
            <span ref={madeRef} className="d-inline-block me-lg-5 me-3">
              Made
            </span>
          </span>

          <span
            className="d-inline-block pb-4"
            style={{ overflow: "hidden", lineHeight: "1" }}
          >
            <span ref={rightRef} className="d-inline-block">
              Right
            </span>
          </span>
        </h1>
        <h4 className="text-3xl light text-white mb-5">
          An independent creative web design and technology studio.
        </h4>
                {/* <button
          onClick={handleContactClick}
          className="btn-contact bg-teal-600 px-5 mt-5 py-3 text-lg text-white font-medium rounded-lg"
        >
         Hello.
        </button> */}
      </section>
    </div>
  );
}

export default Opener;
