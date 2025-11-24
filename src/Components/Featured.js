// Using plain anchors for external links to open in a new tab
// import Card1 from "./Images/card1.png";
// import Card2 from "./Images/card2.png";
// import Card3 from "./Images/card3.png";
import Vid from "./Images/vid.mov";
import Vid2 from "./Images/vid2.mov";
import Vid3 from "./Images/vid3.mov";

import "./Style.css";

function Featured() {
  const serviceData = [
    {
      title: "The Lemich Clinic",
      subtitle: "Home of Military Mental Health",
      image: Vid,
      description: `Patient-centered mental health care website that reflects their commitment to Norfolk, Virginia's military community.`,
      link: "https://lemich.netlify.app/",
      type: "video",
    },
    {
      title: "Rosewood Cleaning",
      subtitle: "Rosewood Cleaning Services",
      image: Vid3,
      description: `Columbia, South Carolina cleaning service website that showcases Andrew, and Sarah's mission to provide affordable Eco-Friendly house cleaning services.`,
      link: "https://rosewoodcleaning.netlify.app/",
      type: "video",
    },
    {
      title: "Alex Goode Portfolio",
      subtitle: "Full-Stack Developer ",
      image: Vid2,
      description: `Personal web development portfolio for Made Right Studio owner, Alex Goode.`,
      link: "http://alexgoode.netlify.app/",
      type: "video",
    },
  ];

  return (
    <div className="bg-white featured-body">
      {/* Section Header */}
      <header className="text-start mb-5 mb-lg-6">
        <div className="row">
          <div className="col-12 col-lg-8">
            <h2
              className="text-5xl text-lg-6xl gs font-bold mb-3"
              style={{ letterSpacing: '-0.015em', lineHeight: '1.1' }}
            >
              Featured Work.
            </h2>
            <p
              className="text-lg gs text-slate-700 mb-0"
              style={{
                letterSpacing: '-0.01em',
                lineHeight: '1.6',
                maxWidth: '60ch'
              }}
            >
              Recent projects we want to share with you.
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
    className="card-img-top object-cover w-full h-48"
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
                <h3 className="text-4xl eighties spaced-underline-2 text-gray-800 mb-3">
                  <a
                    href={service.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    style={{ color: 'inherit', textDecoration: 'none' }}
                  >
                    {service.title}
                  </a>
                </h3>
                <p className="text-lg gs leading-relaxed text-gray-600">
                  {service.description}
                </p>
              </div>
              <div className="card-footer p-3">
               <div className="flex">
                <a
                  href={service.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="bg-teal-900 font-mono  text-white  no-underline hover:bg-green-950 hover:italic px-4 rounded w-full p-2 text-center"
                >
                  {`View ${service.title}`}
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
