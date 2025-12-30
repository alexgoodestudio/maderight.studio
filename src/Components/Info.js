import React, { useEffect, useRef } from 'react'
import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'

gsap.registerPlugin(ScrollTrigger)

function Info() {
  const linkRef = useRef(null)
  const bgRef = useRef(null)

  useEffect(() => {
    // Set initial state for background
    gsap.set(bgRef.current, {
      scaleY: 0,
      transformOrigin: 'bottom',
    })

    // Full screen scroll-triggered reveal for all screen sizes
    ScrollTrigger.create({
      trigger: linkRef.current,
      start: 'top center',
      end: 'bottom center',
      onEnter: () => {
        gsap.to(bgRef.current, {
          scaleY: 1,
          duration: 0.6,
          ease: 'power1.inOut',
        })
      },
      onLeave: () => {
        gsap.to(bgRef.current, {
          scaleY: 0,
          duration: 0.6,
          ease: 'power1.inOut',
        })
      },
      onEnterBack: () => {
        gsap.to(bgRef.current, {
          scaleY: 1,
          duration: 0.6,
          ease: 'power1.inOut',
        })
      },
      onLeaveBack: () => {
        gsap.to(bgRef.current, {
          scaleY: 0,
          duration: 0.6,
          ease: 'power1.inOut',
        })
      },
    })

    return () => {
      ScrollTrigger.getAll().forEach(trigger => trigger.kill())
    }
  }, [])

  const handleMouseEnter = () => {
    // Disabled - using scroll effect for all screen sizes
  }

  const handleMouseLeave = () => {
    // Disabled - using scroll effect for all screen sizes
  }

  return (
    <div className="row ">
      <div className="col-lg-12 col-12 px-0">
        <a
          ref={linkRef}
          href="/about"
          className="position-relative d-block overflow-hidden text-decoration-none text-dark py-5 px-4 bg-white"
          style={{ outline: 'none' }}
          onMouseEnter={handleMouseEnter}
          onMouseLeave={handleMouseLeave}
        >
          {/* Background reveal layer */}
          <div
            ref={bgRef}
            className="position-absolute top-0 start-0 w-100 h-100 bg-yellow"
            style={{
              zIndex: 0,
              willChange: 'transform',
            }}
            aria-hidden="true"
          />


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
