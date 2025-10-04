import { Link } from "react-router-dom";
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
      description: `Our work with The Lemich Clinic focused on creating a modern, patient-centered website that reflects their commitment to care. We combined clean design with intuitive navigation and mobile optimization, ensuring a seamless experience for every visitor. From brand alignment to technical performance, this project highlights our ability to transform healthcare services into engaging, trustworthy digital experiences.`,
      link: "https://lemichclinic.netlify.app/",
      type: "video",
    },
    {
      title: "Rosewood Cleaning Services",
      subtitle: "Rosewood Cleaning Services",
      image: Vid3,
      description: `Rosewood Cleaning Services’ website is a React project showcasing advanced GSAP animations, including ScrollTrigger and timeline effects. The site is fully responsive, styled with Bootstrap and Tailwind, and emphasizes both interactivity and visual appeal.`,
      link: "https://rosewoodcleaning.netlify.app/",
      type: "video",
    },
    {
      title: "Full-Stack Developer | Alex Goode",
      subtitle: "Full-Stack Developer Portfolio",
      image: Vid2,
      description: `Portfolio | Alex Goode showcases modern, user-focused web development projects with an emphasis on interactive, engaging interfaces. Combining clean, responsive design with carefully crafted micro-interactions, each project highlights both creativity and technical expertise. From React-based front-end development to full-stack solutions with Node, Express, and PostgreSQL, this portfolio demonstrates a strong commitment to building functional, visually compelling digital experiences that help businesses grow and users enjoy seamless, intuitive interactions.`,
      link: "http://alexgoode.netlify.app/",
      type: "video",
    },
  ];

  return (
    <div className="bg-white featured-body">
      <h1 className="text-gray-800 text-3xl font-bold text-start mb-5">Featured Work:</h1>

      <div className="row g-4">
        {serviceData.map((service, idx) => (
          <div key={idx} className="col-lg-4 col-md-6">
            <div className="rounded-2xl shadow-md overflow-hidden flex flex-col h-full text-start transition-transform duration-300 hover:-translate-y-1 hover:shadow-lg card-animate">
              {/* Render video OR image */}
              {service.type === "video" ? (
                <video
                  src={service.image}
                  className="card-img-top object-cover w-full h-48"
                  autoPlay
                  muted
                  loop
                  playsInline
                />
              ) : (
                <img
                  src={service.image}
                  className="card-img-top object-cover w-full h-48"
                  alt={service.subtitle}
                />
              )}

              <div className="card-body p-5 flex-grow-1">
                <h3 className="text-lg font-semibold text-gray-800 mb-2">
                  {service.title}
                </h3>
                <p className="text-md leading-relaxed text-gray-600">
                  {service.description}
                </p>
              </div>
              <div className="card-footer p-3">
               <div className="flex">
  <Link
    to={service.link}
    className="bg-green-900 font-mono  text-white  no-underline hover:bg-green-950 hover:italic px-4 rounded w-full p-2 text-center"
  >
    View Project
  </Link>
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
