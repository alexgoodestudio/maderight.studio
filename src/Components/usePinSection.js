// usePinSection.js
import { useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/all";
import { useGSAP } from "@gsap/react";

gsap.registerPlugin(ScrollTrigger);

export default function usePinSection() {
  const ref = useRef();

  useGSAP(() => {
    ScrollTrigger.create({
      trigger: ref.current,
      start: "top top",
      end: "bottom top",
      pin: true,
      pinSpacing: false, // removes empty space so next section overlaps
    });
  }, []);

  return ref;
}
