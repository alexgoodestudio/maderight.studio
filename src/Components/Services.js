import { Link } from "react-router-dom";
import Card1 from "./Images/card1.png";
import Card2 from "./Images/card2.png";
import Card3 from "./Images/card3.png";
import "./Style.css";

function Services() {
  const serviceData = [
    {
      title: "The Lemich Clinic",
      subtitle: "One-Time Clean",
      image: Card1,
      description: `Our work with The Lemich Clinic focused on creating a modern, patient-centered website that reflects their commitment to care. We combined clean design with intuitive navigation and mobile optimization, ensuring a seamless experience for every visitor. From brand alignment to technical performance, this project highlights our ability to transform healthcare services into engaging, trustworthy digital experiences.`,
      link: "https://lemichclinic-front-end.onrender.com/",
    },
    {
      title: "Recurring Cleaning Services",
      subtitle: "Recurring Clean",
      image: Card2,
      description: `Our Recurring Cleaning service offers weekly, bi-weekly, or monthly
        cleaning schedules to fit your lifestyle. It's designed for those
        who desire continual cleanliness and order in their homes. This
        service includes regular cleaning tasks such as dusting, vacuuming,
        mopping, and bathroom sanitization, ensuring your home remains a
        consistently clean and healthy environment. Our use of eco-friendly
        products means each visit not only cleans but also protects your
        home.`,
      link: "/neatfreak/request",
    },
    {
      title: "Need help moving?",
      subtitle: "Moving In/Out Clean",
      image: Card3,
      description: `Our Moving In and Out Cleaning services are tailored for those
        transitioning to a new home or vacating an old one. This service
        ensures that your new space is pristine and welcoming or that your
        previous home is left in impeccable condition. Our team will
        thoroughly clean kitchens, bathrooms, living areas, and bedrooms,
        focusing on areas often overlooked during regular cleaning. This
        service not only aids in a stress-free move but also helps in
        securing deposit returns for rentals.`,
      link: "/neatfreak/request",
    },
  ];

  return (
    <div className="bg-purple-200 py-5 px-5">
      <h1 className="text-gray-800 text-start mb-5">Featured Work:</h1>
      <div className="bg-purple-100 mb-4 text-gray-800 br"> 

      </div>
      <div className="row g-4">
        {serviceData.map((service, idx) => (
          <div key={idx} className="col-lg-4 col-md-6">
            <div className="bg-purple-200 rounded-2xl shadow-md overflow-hidden flex flex-col h-full text-start transition-transform duration-300 hover:-translate-y-1 hover:shadow-lg card-animate">
              <img
                src={service.image}
                className="card-img-top object-cover w-full h-48"
                alt={service.subtitle}
              />
              <div className="card-body p-5 flex-grow-1">
                <h3 className="text-lg font-semibold text-gray-800 mb-2">
                  {service.title}
                </h3>
                <p className="text-md leading-relaxed text-gray-600">
                  {service.description}
                </p>
              </div>
              <div className="card-footer p-3">
                <Link
                  to={service.link}
                  className="btn btn-outline-secondary w-full p-2 text-center"
                >
                  Visit
                </Link>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Services;
