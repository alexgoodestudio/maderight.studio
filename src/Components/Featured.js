// Using plain anchors for external links to open in a new tab
// import Card1 from "./Images/card1.png";
// import Card2 from "./Images/card2.png";
// import Card3 from "./Images/card3.png";
import Vid from "./Images/1.mp4";
import Vid2 from "./Images/a.mov";
import Vid3 from "./Images/3.mov";

import "./Style.css";

function Featured() {
  const serviceData = [
    {
      title: "The Lemich Clinic",
      subtitle: "Home of Military Mental Health",
      image: Vid,
      description: `Patient-centered military mental health care website that reflects their commitment to Norfolk, Virginia's military community.`,
      link: "https://lemich.netlify.app/",
      type: "video",
      badges: ["SEO Optimized", "3× Conversions"],
    },
    {
      title: "Rosewood Cleaning",
      subtitle: "Rosewood Cleaning Services",
      image: Vid3,
      description: `Columbia, South Carolina cleaning service website that showcases Andrew, and Sarah's mission to provide affordable Eco-Friendly house cleaning services.`,
      link: "https://rosewoodcleaning.netlify.app/",
      type: "video",
      badges: ["SEO Optimized", "Performance +"],
    },
    {
      title: "Alex Goode Portfolio",
      subtitle: "Full-Stack Developer ",
      image: Vid2,
      description: `Personal web development portfolio showcasing interaction design with GSAP for Made Right Studio owner, Alex Goode.`,
      link: "http://alexgoode.netlify.app/",
      type: "video",
      badges: ["SEO Optimized", "Mobile-First"],
    },
  ];

  return (
    <div className="bg-white featured-body">
      {/* Section Header */}
      <header className="text-start mb-5 mb-lg-6">
        <div className="row">
          <div className="col-12 col-lg-5 ">
            <h2
              className="text-5xl font-black lora mb-3 section-heading"
            >
              Recent Work
            </h2>
            <p
              className="text-xl gs pt-4 text-slate-700 mb-0 section-description"
            >
              We work alongside our clients from concept to deployment. We will continue to support you and your website growth after launch with training and maintenance. Check out some of our latest projects!
            </p>
          </div>
        </div>
      </header>

      <div className="row g-4">
        {serviceData.map((service, idx) => (
          <div key={idx} className="col-lg-4 col-md-6">
            <div className="rounded-2xl shadow-md overflow-hidden flex flex-col h-full text-start transition-transform duration-300 hover:-translate-y-1 hover:shadow-lg card-animate">
              {/* Render video OR image */}
{service.type === "video" ? (
  <video
    className="card-img-top w-full h-48"
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
    className="card-img-top object-cover w-full h-48"
    alt={service.subtitle}
  />
)}

              <div className="card-body p-5  flex-grow-1">
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
                  className="bg-teal-900 font-mono  text-white  no-underline hover:bg-green-950 hover:italic px-4 rounded w-full p-2 text-center"
                >
                  {`${service.title}`}
                </a>
              </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Featured;
