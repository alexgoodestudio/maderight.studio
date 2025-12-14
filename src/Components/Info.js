import React, { useEffect, useRef } from 'react'
import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'

gsap.registerPlugin(ScrollTrigger)

function Info() {
  const linkRef = useRef(null)
  const bgRef = useRef(null)

  useEffect(() => {
    const mm = gsap.matchMedia()

    // Desktop: hover-driven reveal
    mm.add('(min-width: 768px)', () => {
      gsap.set(bgRef.current, {
        scaleY: 0,
        transformOrigin: 'bottom',
      })

      const onEnter = () =>
        gsap.to(bgRef.current, {
          scaleY: 1,
          duration: 0.7,
          ease: 'power4.out',
        })

      const onLeave = () =>
        gsap.to(bgRef.current, {
          scaleY: 0,
          duration: 0.7,
          ease: 'power4.in',
        })

      const el = linkRef.current
      el.addEventListener('mouseenter', onEnter)
      el.addEventListener('mouseleave', onLeave)

      return () => {
        el.removeEventListener('mouseenter', onEnter)
        el.removeEventListener('mouseleave', onLeave)
      }
    })

    // Mobile: scroll-triggered reveal at mid viewport
    mm.add('(max-width: 767px)', () => {
      gsap.set(bgRef.current, {
        scaleY: 0,
        transformOrigin: 'bottom',
      })

      gsap.to(bgRef.current, {
        scaleY: 1,
        ease: 'power4.out',
        scrollTrigger: {
          trigger: linkRef.current,
          start: 'top 60%',
          end: 'top 40%',
          scrub: true,
        },
      })
    })

    return () => mm.revert()
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
