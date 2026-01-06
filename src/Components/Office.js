import OfficeImage from "./Images/one-min-min.jpg";

function Office() {
  return (
    <section className="bg-white py-lg-5 px-lg-5 ms-lg-3 py-lg-4 pt-5 px-4 row">

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
          className={`gs ${window.innerWidth <= 768 ? 'mt-5  text-start' : ' text-start mt-lg-3 text-xl px-lg-4 py-lg-1'}`}
          style={window.innerWidth <= 768 ? {
            color: '#1e293b',
            fontSize: '1rem',
            lineHeight: '1.7',
            letterSpacing: '-0.01em',
            wordSpacing: '0.35rem'
          } : {
            color: '#374151',
            letterSpacing: "0em",
            lineHeight: "1.6"
          }}
        >
          <span className="lora font-bold">Made Right Studio</span> is just me, Alex Goode,
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
