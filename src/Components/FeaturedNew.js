// Using plain anchors for external links to open in a new tab
// import Card1 from "./Images/card1.png";
// import Card2 from "./Images/card2.png";
// import Card3 from "./Images/card3.png";
import { useRef, useState, useEffect } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";
import { ArrowUpRight } from 'lucide-react';
import { BRAND_COLORS } from "./Shapes";
import Vid from "./Images/z.mov";
import Vid2 from "./Images/a.mov";
import Vid3 from "./Images/1.mov";

import "./Style.css";

gsap.registerPlugin(ScrollTrigger);

function Featured() {
  const cardsRef = useRef([]);
  const [isMobile, setIsMobile] = useState(() => {
    if (typeof window !== 'undefined') {
      return window.innerWidth <= 768;
    }
    return false;
  });

  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth <= 768);
    };
    checkMobile();
    window.addEventListener('resize', checkMobile);
    return () => window.removeEventListener('resize', checkMobile);
  }, []);
  const serviceData = [
    {
      title: "The Lemich Clinic",
      subtitle: "Home of Military Mental Health",
      image: Vid,
      description: `Patient-centered military mental health care website that reflects their commitment to Norfolk, Virginia's military community.`,
      link: "https://lemich.netlify.app/",
      type: "video",
      badges: ["SEO Optimized", "Human-Centered Design"],
      bgColor: BRAND_COLORS.purple,
    },
    {
      title: "Rosewood Cleaning",
      subtitle: "Rosewood Cleaning Services",
      image: Vid3,
      description: `Columbia, South Carolina cleaning service website that showcases their mission to provide Eco-Friendly house cleaning services.`,
      link: "https://rosewoodcleaning.netlify.app/",
      type: "video",
      badges: ["SEO Optimized", "Performance +"],
      bgColor: BRAND_COLORS.coral,
    },
    {
      title: "My Portfolio",
      subtitle: "Full-Stack Developer ",
      image: Vid2,
      description: `Personal web development portfolio showcasing interaction design with GSAP for Made Right Studio owner, Alex Goode.`,
      link: "http://alexgoode.netlify.app/",
      type: "video",
      badges: ["SEO Optimized", "Mobile-First"],
      bgColor: BRAND_COLORS.tealDark,
    },
  ];

  // Slide up and fade in animation for cards on mobile - matching Plank.co style
  useGSAP(() => {
    const isMobile = window.innerWidth <= 768;

    if (!isMobile) return;

    cardsRef.current.forEach((card, index) => {
      if (!card) return;

      // Set initial state - minimal slide distance
      gsap.set(card, { y: 50, opacity: 0 });


      ScrollTrigger.create({
        trigger: card,
        start: "top 90%",
        once: true,
        onEnter: () => {
          gsap.to(card, {
            y: 0,
            opacity: 1,
            duration: 0.4, // 400ms like Plank.co
            ease: "power1.out", // Simple ease-out
            delay: index * 0.1, // Stagger: 0ms, 100ms, 200ms
          });
        },
      });
    });
  }, []);

  return (
    <div className="bg-white featured-body">
      <div className="container-fluid px-1 px-lg-4">
        {/* Section Header */}
        <header className="text-start mb-5 mb-lg-6">
          <div className="row">
            <div className="col-12 col-lg-5 ">
              <h2
                className="text-4xl font-black lora mb-3 section-heading"
              >
                Recent Work
              </h2>
              <p
                className="text-xl gs pt-4 text-slate-700 mb-0 section-description"
              >
                We  collaborate with our clients from concept to deployment. We will continue to support you and your website growth after launch with training and maintenance. 
              </p>
            </div>
          </div>
        </header>

        <div className="row g-4">
        {serviceData.map((service, idx) => (
          <div key={idx} className="col-lg-4 col-md-6">
            {/* Outer colored card container */}
            <div
              ref={el => cardsRef.current[idx] = el}
              className="rounded-3 p-3 h-100"
              style={{
                backgroundColor: service.bgColor,
                ...(isMobile ? { opacity: 0, transform: 'translateY(50px)' } : {})
              }}
            >
              {/* Inner white card at 95% width (97% on mobile) */}
              <div
                className="rounded-2xl shadow-md overflow-hidden d-flex flex-column text-start transition-transform duration-300 hover:-translate-y-1 hover:shadow-lg h-100 mx-auto"
                style={{ width: isMobile ? '97%' : '95%', backgroundColor: '#f1f5f9' }}
              >
                {/* Render video OR image */}
                {service.type === "video" ? (
                  <video
                    className="card-img-top w-full h-72"
                    style={{ objectFit: 'cover', objectPosition: 'top' }}
                    autoPlay
                    muted
                    loop
                    playsInline
                  >
                    <source src={service.image.replace('.mov', '.webm')} type="video/webm" />
                    <source src={service.image} type="video/mp4" />
                  </video>
                ) : (
                  <img
                    src={service.image}
                    className="card-img-top object-cover w-full h-72"
                    alt={service.subtitle}
                  />
                )}

                <div className="card-body px-lg-5 py-lg-4 py-4 px-4 flex-grow-1">
                  <h3 className="text-2xl lora font-semibold spaced-underline-2 text-gray-800 mb-3">
                    <a
                      href={service.link}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="unstyled-link"
                    >
                      {service.title}
                    </a>
                  </h3>
                  <p className="text-lg gs leading-relaxed text-gray-600">
                    {service.description}
                  </p>

                  {/* Badges */}
                  {service.badges && service.badges.length > 0 && (
                    <div className="flex flex-wrap gap-2 mt-4">
                      {service.badges.map((badge, badgeIdx) => (
                        <span
                          key={badgeIdx}
                          className="text-xs uppercase gs text-slate-600 px-3 py-1 rounded-full border border-slate-300 whitespace-nowrap"
                          style={{ letterSpacing: '0.15em' }}
                        >
                          {badge}
                        </span>
                      ))}
                    </div>
                  )}
                </div>
                <div className="card-footer p-3">
                  <div className="flex">
                    <a
                      href={service.link}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="font-mono text-slate-800 no-underline hover:italic px-4 rounded w-full p-2 d-flex align-items-center justify-content-center gap-2 border border-slate-400"
                    >
                      {`${service.title}`}
                      <ArrowUpRight size={16} strokeWidth={2} />
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
      </div>
    </div>
  );
}

export default Featured;
