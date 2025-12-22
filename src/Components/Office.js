import OfficeImage from "./Images/one-min.jpg";

function Office() {
  return (
    <section className="bg-yellow py-lg-5 px-lg-5 py-4 px-4 row">
      <div className="col-md-6">
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
      <div className="col-md-6">
        <p
          className="text-gray-700 gs mt-4 text-xl text-start px-lg-3 py-lg-3"
          style={{
            letterSpacing: '-0.01em',
            lineHeight: '1.6'
          }}
        >
          Made Right Studio is just me, working from home in my free time,
          developing and designing websites. I live in the
          Rosewood-Shandon neighborhood of Columbia, South Carolina, and work
          full-time stocking shelves at Whole Foods Market. After hours, I'm
          building and designing websites combining what I learned from Promineo Tech's Front End
          Development Program and Thinkful's Full-Stack Engineering Immersion
          that I completed between 2021-2023, with four years of graphic design
          experience. The goal is to create design-first websites that have the technical execution of top-performing websites.
          help local businesses connect with their customers.
        </p>
      </div>
    </section>
  );
}

export default Office;
