import OfficeImage from "./Images/one-min-min.jpg";

function Office() {
  return (
    <section className="bg-white py-lg-5 px-lg-5 py-lg-4 pt-5 px-4 row">

      <div className="col-md-7 py-lg-4 pe-lg-5">
        <img
          src={OfficeImage}
          alt="Office"
          className=" h-auto rounded-3xl "
          style={{
            display: "block",
            objectFit: "cover",
          }}
        />
      </div>
      <div className="col-md-4">
        <p
          className="text-gray-700 gs mt-5 mt-lg-3 text-xl text-justify  px-lg-4 py-lg-1"
          style={{
            letterSpacing: "0em",
            lineHeight: "1.6",
          }}
        >
          Made Right Studio is just me, Alex Goode,
          developing and designing websites in my free time. I live in the Rosewood
          neighborhood of Columbia, South Carolina, and work full-time stocking
          shelves at Whole Foods Market. After hours, I'm building and designing
          websites combining what I learned from Promineo Tech's Front End
          Development Program and Thinkful's Full-Stack Engineering Immersion
          Program that I completed between 2021-2023. With four years prior of
          graphic design experience, my goal is to create design-first websites
          that have the technical execution of top-performing websites, helping
          local businesses connect with their customers.
        </p>
      </div>
    </section>
  );
}

export default Office;
