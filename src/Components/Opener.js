// import React, { useRef } from "react";
// import { gsap } from "gsap";
// import { useGSAP } from "@gsap/react";
// import SplitText from "gsap/SplitText";
// import "./Style.css";

// gsap.registerPlugin(SplitText);

// function Opener() {
//   const madeRef = useRef(null);
//   const rightRef = useRef(null);

//   useGSAP(() => {
//     // Split each word into chars (or lines if you prefer)
//     const madeSplit = new SplitText(madeRef.current, { type: "chars" });
//     const rightSplit = new SplitText(rightRef.current, { type: "chars" });

//     // Animate "Made" up from bottom
//     gsap.from(madeSplit.chars, {
//       y: 100,              // from below
//       clipPath: "inset(100% 0% 0% 0%)", 
//       duration: 1,
//       ease: "power3.out",
//       stagger: 0.05
//     });

//     // Animate "Right" down from top
//     gsap.from(rightSplit.chars, {
//       y: -100,             // from above
//       clipPath: "inset(0% 0% 100% 0%)", 
//       duration: 1,
//       ease: "power3.out",
//       stagger: 0.05,
//       delay: 0.2
//     });

//   }, []);

//   return (
//     <div className="vh-100 d-flex justify-content-center align-items-center">
//       <section className="text-center text-dark">
//         <h1 className="text-12xl text-gray-800">
//           <span ref={madeRef} className="inline-block mr-4">Made</span>
//           <span ref={rightRef} className="inline-block">Right</span>
//         </h1>
//         <h4 className="text-4xl text-gray-600 mb-5">
//           A Creative Web Design and Technology Studio.
//         </h4>
//       </section>
//     </div>
//   );
// }

// export default Opener;


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
    <div className="vh-100 d-flex justify-content-center align-items-center">
      <section className="text-center text-dark">
        <h1 className="text-12xl text-gray-800 flex justify-center gap-4">
          {/* Wrapper matches text size */}
          <span className="inline-block overflow-hidden leading-none">
            <span ref={madeRef} className="inline-block">Made</span>
          </span>
<span className="inline-block overflow-hidden leading-none pb-4">
  <span ref={rightRef} className="inline-block">Right</span>
</span>
        </h1>
        <h4 className="text-4xl text-gray-600 mb-5">
          A Creative Web Design and Technology Studio.
        </h4>
      </section>
    </div>
  );
}

export default Opener;
