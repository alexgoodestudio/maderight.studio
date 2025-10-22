// import React, { useRef, useState } from "react";
// import { gsap } from "gsap";
// import { useGSAP } from "@gsap/react";
// import { ScrollTrigger } from "gsap/ScrollTrigger";

// gsap.registerPlugin(ScrollTrigger);

// const MOTION = {
//   instant: 0.15,
//   quick: 0.3,
//   smooth: 0.5,
//   slow: 0.8,
//   story: .925
// };

// function Opener() {
//   const madeRef = useRef(null);
//   const rightRef = useRef(null);
//   const taglineRef = useRef(null);
//   const sectionRef = useRef(null);
//   const [fontLoaded, setFontLoaded] = useState(false);

//   // Wait for font to load
//   React.useEffect(() => {
//     const loadFont = async () => {
//       try {
//         await document.fonts.load('1em eighties');
//         await document.fonts.ready;
//         setFontLoaded(true);
//       } catch (error) {
//         console.error('Font loading error:', error);
//         setTimeout(() => setFontLoaded(true), 2000);
//       }
//     };

//     loadFont();
//   }, []);

//   useGSAP(() => {
//     if (!fontLoaded) return;

//     // Ensure all refs are ready
//     if (!madeRef.current || !rightRef.current || !taglineRef.current) return;

//     const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    
//     if (prefersReducedMotion) {
//       gsap.set([madeRef.current, rightRef.current, taglineRef.current], { 
//         opacity: 1
//       });
//       return;
//     }

//     // Wait for next frame to ensure elements are rendered
//     requestAnimationFrame(() => {
//       // Double-check refs are still valid
//       if (!madeRef.current || !rightRef.current || !taglineRef.current) return;
      
//       const taglineWords = taglineRef.current.querySelectorAll('.word');
//       const taglineEmphasis = taglineRef.current.querySelectorAll('.emphasis');
      
//       // Ensure tagline elements exist
//       if (taglineWords.length === 0) return;
//       const viewportWidth = window.innerWidth;
//       const verticalOffset = 100;
      
//       const tl = gsap.timeline();

//       gsap.set(madeRef.current, {
//         x: -viewportWidth / 2,
//         y: -verticalOffset,
//         opacity: 1
//       });

//       gsap.set(rightRef.current, {
//         x: viewportWidth / 2,
//         y: verticalOffset,
//         opacity: 1
//       });

//       tl
//         .to(madeRef.current, {
//           x: 0,
//           duration: MOTION.story,
//           ease: 'power3.out'
//         })
//         .to(rightRef.current, {
//           x: 0,
//           duration: MOTION.story,
//           ease: 'power3.out'
//         }, '<')
//         .to(madeRef.current, {
//           y: 0,
//           duration: MOTION.story,
//           ease: 'power3.out'
//         })
//         .to(rightRef.current, {
//           y: 0,
//           duration: MOTION.story,
//           ease: 'power3.out'
//         }, '<')
//         .from(taglineWords, {
//           y: 40,
//           opacity: 0,
//           rotateX: 45,
//           transformOrigin: 'center top',
//           duration: MOTION.smooth,
//           stagger: 0.12,
//           ease: 'power2.out'
//         }, `-=${MOTION.smooth}`)
//         .to(taglineEmphasis, {
//           duration: MOTION.quick,
//           stagger: 0.15,
//           ease: 'power1.inOut'
//         }, `-=${MOTION.instant}`);
      
//       // REVERSIBLE scroll-triggered split animation - randomized directions
//       const madeLetters = madeRef.current.querySelectorAll('.letter');
//       const rightLetters = rightRef.current.querySelectorAll('.letter');
      
//       const splitTl = gsap.timeline({
//         scrollTrigger: {
//           trigger: sectionRef.current,
//           start: 'top 20%',
//           end: 'top top',
//           scrub: 2
//         }
//       });
      
//       madeLetters.forEach((letter) => {
//         const angle = Math.random() * 360; // Random angle 0-360 degrees
//         const distance = viewportWidth * (0.045 + Math.random() * 0.075); // 70% reduction: 0.045-0.12x viewport
//         const x = Math.cos(angle * Math.PI / 180) * distance;
//         const y = Math.sin(angle * Math.PI / 180) * distance;
//         const rotation = Math.random() * 360 - 180; // Random rotation -180 to 180 (half of original)
        
//         splitTl.to(letter, {
//           x: x,
//           y: y,
//           rotation: rotation,
//           ease: 'power2.inOut'
//         }, 0);
//       });
      
//       // Animate each letter in "Right" to fly off in random directions
//       rightLetters.forEach((letter) => {
//         const angle = Math.random() * 360;
//         const distance = viewportWidth * (0.045 + Math.random() * 0.075); // 70% reduction: 0.045-0.12x viewport
//         const x = Math.cos(angle * Math.PI / 180) * distance;
//         const y = Math.sin(angle * Math.PI / 180) * distance;
//         const rotation = Math.random() * 360 - 180; // Random rotation -180 to 180 (half of original)
        
//         splitTl.to(letter, {
//           x: x,
//           y: y,
//           rotation: rotation,
//           ease: 'power2.inOut'
//         }, 0);
//       });
      
//       // Fade out tagline
//       splitTl.to(taglineRef.current, {
//         opacity: 0,
//         y: -50,
//         ease: 'power2.inOut'
//       }, 0);
//     });

//   }, [fontLoaded]);

//   return (
//     <div className="vh-100 bg-teal-950 d-flex justify-content-center align-items-center" style={{ overflow: 'hidden' }}>
//       <section 
//         ref={sectionRef} 
//         className="text-center"
//         style={{ opacity: fontLoaded ? 1 : 0 }}
//       >
//         <h1
//           className="text-opener eighties text-white d-flex justify-content-center"
//           style={{ paddingLeft: "1.25rem", paddingRight: "1.25rem" }}
//         >
//           <span className="d-inline-block">
//             <span ref={madeRef} className="d-inline-block me-lg-5 me-3">
//               <span className="letter d-inline-block">M</span>
//               <span className="letter d-inline-block">a</span>
//               <span className="letter d-inline-block">d</span>
//               <span className="letter d-inline-block">e</span>
//             </span>
//           </span>

//           <span className="d-inline-block">
//             <span ref={rightRef} className="d-inline-block">
//               <span className="letter d-inline-block">R</span>
//               <span className="letter d-inline-block">i</span>
//               <span className="letter d-inline-block">g</span>
//               <span className="letter d-inline-block">h</span>
//               <span className="letter d-inline-block">t</span>
//             </span>
//           </span>
//         </h1>
        
//         <h2 ref={taglineRef} className="text-2xl tracking-wider pt-4 font-light text-white mb-5">
//           <span className="word">An</span>{' '}
//           <span className="word">independent</span>{' '}
//           <span className="word">creative</span>{' '}
//           <span className="word emphasis">web design</span>{' '}
//           <span className="word">and</span>{' '}
//           <span className="word emphasis">technology</span>{' '}
//           <span className="word">studio.</span>
//           <br/>
//           <h2 className=" text-sm tracking-wider mt-3 text-white font-mono">
//             Based in <span className="">Columbia, South Carolina</span>
//           </h2>
//         </h2>
//       </section>
//     </div>
//   );
// }

// export default Opener;

// // import React, { useRef, useState } from "react";
// // import { gsap } from "gsap";
// // import { useGSAP } from "@gsap/react";
// // import { ScrollTrigger } from "gsap/ScrollTrigger";

// // gsap.registerPlugin(ScrollTrigger);

// // const MOTION = {
// //   instant: 0.15,
// //   quick: 0.3,
// //   smooth: 0.5,
// //   slow: 0.8,
// //   story: .925
// // };

// // function Opener() {
// //   const madeRef = useRef(null);
// //   const rightRef = useRef(null);
// //   const taglineRef = useRef(null);
// //   const sectionRef = useRef(null);
// //   const [fontLoaded, setFontLoaded] = useState(false);

// //   // Wait for font to load
// //   React.useEffect(() => {
// //     const loadFont = async () => {
// //       try {
// //         await document.fonts.load('1em eighties');
// //         await document.fonts.ready;
// //         setFontLoaded(true);
// //       } catch (error) {
// //         console.error('Font loading error:', error);
// //         setTimeout(() => setFontLoaded(true), 2000);
// //       }
// //     };

// //     loadFont();
// //   }, []);

// //   useGSAP(() => {
// //     if (!fontLoaded) return;

// //     // Ensure all refs are ready
// //     if (!madeRef.current || !rightRef.current || !taglineRef.current) return;

// //     const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    
// //     if (prefersReducedMotion) {
// //       gsap.set([madeRef.current, rightRef.current, taglineRef.current], { 
// //         opacity: 1
// //       });
// //       return;
// //     }

// //     // Wait for next frame to ensure elements are rendered
// //     requestAnimationFrame(() => {
// //       // Double-check refs are still valid
// //       if (!madeRef.current || !rightRef.current || !taglineRef.current) return;
      
// //       const taglineWords = taglineRef.current.querySelectorAll('.word');
// //       const taglineEmphasis = taglineRef.current.querySelectorAll('.emphasis');
      
// //       // Ensure tagline elements exist
// //       if (taglineWords.length === 0) return;
// //       const viewportWidth = window.innerWidth;
// //       const isMobile = viewportWidth < 768;
      
// //       const tl = gsap.timeline();

// //       if (isMobile) {
// //         const verticalOffset = 100;
        
// //         gsap.set(madeRef.current, {
// //           x: -viewportWidth / 2,
// //           y: -verticalOffset,
// //           opacity: 1
// //         });

// //         gsap.set(rightRef.current, {
// //           x: viewportWidth / 2,
// //           y: verticalOffset,
// //           opacity: 1
// //         });

// //         tl
// //           .to(madeRef.current, {
// //             x: 0,
// //             duration: MOTION.story,
// //             ease: 'power3.out'
// //           })
// //           .to(rightRef.current, {
// //             x: 0,
// //             duration: MOTION.story,
// //             ease: 'power3.out'
// //           }, '<')
// //           .to(madeRef.current, {
// //             y: 0,
// //             duration: MOTION.story,
// //             ease: 'power3.out'
// //           })
// //           .to(rightRef.current, {
// //             y: 0,
// //             duration: MOTION.story,
// //             ease: 'power3.out'
// //           }, '<')
// //           .from(taglineWords, {
// //             y: 40,
// //             opacity: 0,
// //             rotateX: 45,
// //             transformOrigin: 'center top',
// //             duration: MOTION.smooth,
// //             stagger: 0.12,
// //             ease: 'power2.out'
// //           }, `-=${MOTION.smooth}`)
// //           .to(taglineEmphasis, {
// //             duration: MOTION.quick,
// //             stagger: 0.15,
// //             ease: 'power1.inOut'
// //           }, `-=${MOTION.instant}`);
// //       } else {
// //         const viewportHeight = window.innerHeight;
// //         const edgePadding = 60;
        
// //         const madeRect = madeRef.current.getBoundingClientRect();
// //         const rightRect = rightRef.current.getBoundingClientRect();
        
// //         const madeWidth = madeRect.width;
// //         const madeHeight = madeRect.height;
// //         const rightWidth = rightRect.width;
// //         const rightHeight = rightRect.height;
        
// //         const madeCenterX = madeRect.left + madeWidth / 2;
// //         const madeCenterY = madeRect.top + madeHeight / 2;
// //         const rightCenterX = rightRect.left + rightWidth / 2;
// //         const rightCenterY = rightRect.top + rightHeight / 2;
        
// //         const madeTargetX = edgePadding + madeWidth / 2;
// //         const madeTargetY = edgePadding + madeHeight / 2;
// //         const rightTargetX = viewportWidth - edgePadding - rightWidth / 2;
// //         const rightTargetY = viewportHeight - edgePadding - rightHeight / 2;
        
// //         const madeStartX = madeTargetX - madeCenterX;
// //         const madeStartY = madeTargetY - madeCenterY;
// //         const rightStartX = rightTargetX - rightCenterX;
// //         const rightStartY = rightTargetY - rightCenterY;

// //         gsap.set(madeRef.current, {
// //           x: madeStartX,
// //           y: madeStartY,
// //           opacity: 1
// //         });

// //         gsap.set(rightRef.current, {
// //           x: rightStartX,
// //           y: rightStartY,
// //           opacity: 1
// //         });

// //         tl
// //           .to(madeRef.current, {
// //             y: 0,
// //             duration: MOTION.story,
// //             ease: 'power3.out'
// //           })
// //           .to(rightRef.current, {
// //             y: 0,
// //             duration: MOTION.story,
// //             ease: 'power3.out'
// //           }, '<')
// //           .to(madeRef.current, {
// //             x: 0,
// //             duration: MOTION.story,
// //             ease: 'power3.out'
// //           })
// //           .to(rightRef.current, {
// //             x: 0,
// //             duration: MOTION.story,
// //             ease: 'power3.out'
// //           }, '<')
// //           .from(taglineWords, {
// //             y: 40,
// //             opacity: 0,
// //             rotateX: 45,
// //             transformOrigin: 'center top',
// //             duration: MOTION.smooth,
// //             stagger: 0.12,
// //             ease: 'power2.out'
// //           }, `-=${MOTION.smooth}`)
// //           .to(taglineEmphasis, {
// //             duration: MOTION.quick,
// //             stagger: 0.15,
// //             ease: 'power1.inOut'
// //           }, `-=${MOTION.instant}`);
// //       }
      
// //       // REVERSIBLE scroll-triggered split animation - randomized directions
// //       const madeLetters = madeRef.current.querySelectorAll('.letter');
// //       const rightLetters = rightRef.current.querySelectorAll('.letter');
      
// //       const splitTl = gsap.timeline({
// //         scrollTrigger: {
// //           trigger: sectionRef.current,
// //           start: 'top 20%',
// //           end: 'top top',
// //           scrub: 2
// //         }
// //       });
      
// //       madeLetters.forEach((letter) => {
// //         const angle = Math.random() * 360; // Random angle 0-360 degrees
// //         const distance = viewportWidth * (0.045 + Math.random() * 0.075); // 70% reduction: 0.045-0.12x viewport
// //         const x = Math.cos(angle * Math.PI / 180) * distance;
// //         const y = Math.sin(angle * Math.PI / 180) * distance;
// //         const rotation = Math.random() * 360 - 180; // Random rotation -180 to 180 (half of original)
        
// //         splitTl.to(letter, {
// //           x: x,
// //           y: y,
// //           rotation: rotation,
// //           ease: 'power2.inOut'
// //         }, 0);
// //       });
      
// //       // Animate each letter in "Right" to fly off in random directions
// //       rightLetters.forEach((letter) => {
// //         const angle = Math.random() * 360;
// //         const distance = viewportWidth * (0.045 + Math.random() * 0.075); // 70% reduction: 0.045-0.12x viewport
// //         const x = Math.cos(angle * Math.PI / 180) * distance;
// //         const y = Math.sin(angle * Math.PI / 180) * distance;
// //         const rotation = Math.random() * 360 - 180; // Random rotation -180 to 180 (half of original)
        
// //         splitTl.to(letter, {
// //           x: x,
// //           y: y,
// //           rotation: rotation,
// //           ease: 'power2.inOut'
// //         }, 0);
// //       });
      
// //       // Fade out tagline
// //       splitTl.to(taglineRef.current, {
// //         opacity: 0,
// //         y: -50,
// //         ease: 'power2.inOut'
// //       }, 0);
// //     });

// //   }, [fontLoaded]);

// //   return (
// //     <div className="vh-100 bg-teal-950 d-flex justify-content-center align-items-center" style={{ overflow: 'hidden' }}>
// //       <section 
// //         ref={sectionRef} 
// //         className="text-center"
// //         style={{ opacity: fontLoaded ? 1 : 0 }}
// //       >
// //         <h1
// //           className="text-opener eighties text-white d-flex justify-content-center"
// //           style={{ paddingLeft: "1.25rem", paddingRight: "1.25rem" }}
// //         >
// //           <span className="d-inline-block">
// //             <span ref={madeRef} className="d-inline-block me-lg-5 me-3">
// //               <span className="letter d-inline-block">M</span>
// //               <span className="letter d-inline-block">a</span>
// //               <span className="letter d-inline-block">d</span>
// //               <span className="letter d-inline-block">e</span>
// //             </span>
// //           </span>

// //           <span className="d-inline-block">
// //             <span ref={rightRef} className="d-inline-block">
// //               <span className="letter d-inline-block">R</span>
// //               <span className="letter d-inline-block">i</span>
// //               <span className="letter d-inline-block">g</span>
// //               <span className="letter d-inline-block">h</span>
// //               <span className="letter d-inline-block">t</span>
// //             </span>
// //           </span>
// //         </h1>
        
// //         <h2 ref={taglineRef} className="text-2xl tracking-wider pt-4 font-light text-white mb-5">
// //           <span className="word">An</span>{' '}
// //           <span className="word">independent</span>{' '}
// //           <span className="word">creative</span>{' '}
// //           <span className="word emphasis">web design</span>{' '}
// //           <span className="word">and</span>{' '}
// //           <span className="word emphasis">technology</span>{' '}
// //           <span className="word">studio.</span>
// //           <br/>
// //           <h2 className=" text-sm tracking-wider mt-3 text-white font-mono">
// //             Based in <span className="">Columbia, South Carolina</span>
// //           </h2>
// //         </h2>
// //       </section>
// //     </div>
// //   );
// // }

// // export default Opener;


import React, { useRef, useState } from "react";
import { gsap } from "gsap";
import { useGSAP } from "@gsap/react";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const MOTION = {
  instant: 0.15,
  quick: 0.3,
  smooth: 0.5,
  slow: 0.8,
  story: .925
};

function Opener() {
  const madeRef = useRef(null);
  const rightRef = useRef(null);
  const taglineRef = useRef(null);
  const sectionRef = useRef(null);
  const [fontLoaded, setFontLoaded] = useState(false);

  // Wait for font to load
  React.useEffect(() => {
    const loadFont = async () => {
      try {
        await document.fonts.load('1em eighties');
        await document.fonts.ready;
        setFontLoaded(true);
      } catch (error) {
        console.error('Font loading error:', error);
        setTimeout(() => setFontLoaded(true), 2000);
      }
    };

    loadFont();
  }, []);

  useGSAP(() => {
    if (!fontLoaded) return;

    // Ensure all refs are ready
    if (!madeRef.current || !rightRef.current || !taglineRef.current) return;

    const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    
    if (prefersReducedMotion) {
      gsap.set([madeRef.current, rightRef.current, taglineRef.current], { 
        opacity: 1
      });
      return;
    }

    // Wait for next frame to ensure elements are rendered
    requestAnimationFrame(() => {
      // Double-check refs are still valid
      if (!madeRef.current || !rightRef.current || !taglineRef.current) return;
      
      const taglineWords = taglineRef.current.querySelectorAll('.word');
      const taglineEmphasis = taglineRef.current.querySelectorAll('.emphasis');
      
      // Ensure tagline elements exist
      if (taglineWords.length === 0) return;
      const viewportWidth = window.innerWidth;
      const verticalOffset = 100;
      
      const tl = gsap.timeline();

      gsap.set(madeRef.current, {
        x: -viewportWidth / 2,
        y: -verticalOffset,
        opacity: 1
      });

      gsap.set(rightRef.current, {
        x: viewportWidth / 2,
        y: verticalOffset,
        opacity: 1
      });

      tl
        .to(madeRef.current, {
          x: 0,
          duration: MOTION.story,
          ease: 'power3.out'
        })
        .to(rightRef.current, {
          x: 0,
          duration: MOTION.story,
          ease: 'power3.out'
        }, '<')
        .to(madeRef.current, {
          y: 0,
          duration: MOTION.story,
          ease: 'power3.out'
        })
        .to(rightRef.current, {
          y: 0,
          duration: MOTION.story,
          ease: 'power3.out'
        }, '<')
        .from(taglineWords, {
          y: 40,
          opacity: 0,
          rotateX: 45,
          transformOrigin: 'center top',
          duration: MOTION.smooth,
          stagger: 0.12,
          ease: 'power2.out'
        }, `-=${MOTION.smooth}`)
        .to(taglineEmphasis, {
          duration: MOTION.quick,
          stagger: 0.15,
          ease: 'power1.inOut'
        }, `-=${MOTION.instant}`);
    });

  }, [fontLoaded]);

  return (
    <div className="vh-100 bg-teal-950 d-flex justify-content-center align-items-center" style={{ overflow: 'hidden' }}>
      <section 
        ref={sectionRef} 
        className="text-center"
        style={{ opacity: fontLoaded ? 1 : 0 }}
      >
        <h1
          className="text-opener eighties text-white d-flex justify-content-center"
          style={{ paddingLeft: "1.25rem", paddingRight: "1.25rem" }}
        >
          <span className="d-inline-block">
            <span ref={madeRef} className="d-inline-block me-lg-5 me-3">
              <span className="letter d-inline-block">M</span>
              <span className="letter d-inline-block">a</span>
              <span className="letter d-inline-block">d</span>
              <span className="letter d-inline-block">e</span>
            </span>
          </span>

          <span className="d-inline-block">
            <span ref={rightRef} className="d-inline-block">
              <span className="letter d-inline-block">R</span>
              <span className="letter d-inline-block">i</span>
              <span className="letter d-inline-block">g</span>
              <span className="letter d-inline-block">h</span>
              <span className="letter d-inline-block">t</span>
            </span>
          </span>
        </h1>
        
        <h2 ref={taglineRef} className="text-2xl tracking-wider pt-4 font-light text-white mb-5">
          <span className="word">An</span>{' '}
          <span className="word">independent</span>{' '}
          <span className="word">creative</span>{' '}
          <span className="word emphasis">web design</span>{' '}
          <span className="word">and</span>{' '}
          <span className="word emphasis">technology</span>{' '}
          <span className="word">studio.</span>
          <br/>
          <h2 className=" text-sm tracking-wider mt-3 text-white font-mono">
            Based in <span className="">Columbia, South Carolina</span>
          </h2>
        </h2>
      </section>
    </div>
  );
}

export default Opener;