import React, { useEffect, useRef } from 'react'
import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'

gsap.registerPlugin(ScrollTrigger)

function Info() {
  const linkRef = useRef(null)
  const bgRef = useRef(null)

  useEffect(() => {
    // Desktop and Mobile: smooth scroll-triggered reveal with natural feel
    gsap.set(bgRef.current, {
      scaleY: 0,
      transformOrigin: 'bottom',
      filter: 'blur(0px)',
      opacity: 1,
    })

    const timeline = gsap.timeline({
      scrollTrigger: {
        trigger: linkRef.current,
        start: 'top 70%',
        end: 'bottom 30%',
        scrub: 1,
      },
    })

    timeline
      .to(bgRef.current, {
        scaleY: 1,
        filter: 'blur(0px)',
        opacity: 1,
        duration: 0.4,
        ease: 'power1.inOut',
      })
      .to(bgRef.current, {
        scaleY: 1,
        filter: 'blur(0px)',
        opacity: 1,
        duration: 0.1,
      })
      .to(bgRef.current, {
        scaleY: 1,
        filter: 'blur(15px)',
        opacity: 0.6,
        duration: 0.15,
        ease: 'power1.in',
      })
      .to(bgRef.current, {
        scaleY: 0,
        filter: 'blur(15px)',
        opacity: 0.2,
        duration: 0.35,
        ease: 'power1.inOut',
      })

    return () => {
      ScrollTrigger.getAll().forEach(trigger => trigger.kill())
    }
  }, [])

  return (
    <div className="row">
      <div className="col-lg-12 col-12 px-0">
        <a
          ref={linkRef}
          href="https://id.iit.edu/id-experience/"
          className="position-relative d-block overflow-hidden text-decoration-none text-dark py-5 px-4 bg-white"
          style={{ outline: 'none' }}
        >
          {/* Background reveal layer */}
          <div
            ref={bgRef}
            className="position-absolute top-0 start-0 w-100 h-100"
            style={{
              backgroundColor: '#adc7ff',
              zIndex: 0,
              willChange: 'transform',
            }}
            aria-hidden="true"
          />

          <span className="visually-hidden">Explore ID Experience</span>

          {/* Content */}
          <div className="position-relative text-center" style={{ zIndex: 1 }}>
            <div
              className="lora fst-italic mb-3"
              style={{
                fontSize: 'clamp(36px, 5vw, 64px)',
                lineHeight: 1,
              }}
              aria-hidden="true"
            >
              who is
            </div>

            <div
              className="fw-bold eighties"
              style={{
                fontSize: 'clamp(42px, 9vw, 115px)',
                lineHeight: 1,
                wordBreak: 'break-word',
              }}
              aria-hidden="true"
            >
              made right

            </div>
          </div>
        </a>
      </div>
    </div>
  )
}

export default Info
