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
          className={`gs ${window.innerWidth <= 768 ? 'mt-5  text-start text-lg' : ' text-start mt-lg-3 text-lg px-lg-4 py-lg-1'}`}
          style={window.innerWidth <= 768 ? {
            color: '#1e293b',
          
            lineHeight: '1.7',
            letterSpacing: '-0.01em',
            wordSpacing: '0.35rem'
          } : {
            color: '#374151',
            letterSpacing: "0em",
            lineHeight: "1.6"
          }}
        >
          <span className="lora font-bold">Made Right Studio</span> 
           is based in the Rosewood
          neighborhood of Columbia, South Carolina, and is run by Alex Goode, a developer, designer, and full time engineering student at Midlands Technical College. He has completed Community College of Philadelphia's Front End Software Development Program, as well as Thinkful's Full-Stack Software Engineering Immersion Program.
         

        </p>
      </div>
    </section>
  );
}

export default Office;
