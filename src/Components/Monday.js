import { useRef } from "react";
import { gsap } from "gsap";
import "./Style.css";

function Monday() {
  const row1Ref = useRef();
  const row2Ref = useRef();
  const row3Ref = useRef(); 

  const handleHover = (rowRef, hover) => {
    const cards = rowRef.current.querySelectorAll(".flip-card");
    gsap.to(cards, {
      rotateX: hover ? 180 : 0,
      duration: 0.7,
      ease: "power2.inOut",
    });
  };

  return (
    <div className="bg-sky-200 container vh-100 mt-5">
      {/* Row 1 */}
      <div
        className="flip-row mb-4 flip-container row1"
        ref={row1Ref}
        onMouseEnter={() => handleHover(row1Ref, true)}
        onMouseLeave={() => handleHover(row1Ref, false)}
      >
        <div className="flip-card card-1 col-4 br">
          <div className="front br">Front Hello</div>
          <div className="back br">Back Hello</div>
        </div>
        <div className="flip-card card-2 col-8 br">
          <div className="front br">Front Goodbye</div>
          <div className="back br">Back Goodbye</div>
        </div>
      </div>

      {/* Row 2 */}
      <div
        className="flip-row mb-4 flip-container row2"
        ref={row2Ref}
        onMouseEnter={() => handleHover(row2Ref, true)}
        onMouseLeave={() => handleHover(row2Ref, false)}
      >
        <div className="flip-card card-2 col-8 br">
          <div className="front br">Front Hello</div>
          <div className="back br">Back Hello</div>
        </div>
        <div className="flip-card card-1 col-4 br">
          <div className="front br">Front Goodbye</div>
          <div className="back br">Back Goodbye</div>
        </div>
      </div>

      {/* Row 3 */}
      <div
        className="flip-row mb-4 flip-container row3"
        ref={row3Ref}
        onMouseEnter={() => handleHover(row3Ref, true)}
        onMouseLeave={() => handleHover(row3Ref, false)}
      >
        <div className="flip-card card-1 col-4 br">
          <div className="front br">Front Hello</div>
          <div className="back br">Back Hello</div>
        </div>
        <div className="flip-card card-2 col-8 br">
          <div className="front br">Front Goodbye</div>
          <div className="back br">Back Goodbye</div>
        </div>
      </div>
    </div>
  );
}

export default Monday;
