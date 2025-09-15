function Contact() {
  const handleContactClick = () => {
    // Opens email app with prefilled "to" address
    window.location.href = "mailto:alexgoode2@gmail.com";
  };

  return (
    <div className="row contact">
      <div className="col-lg-12 col-12 bg-slate-100 contact text-dark d-flex flex-column justify-content-center items-center text-center p-4">
        <h3 className="mb-3">Interested in working together?</h3>
        <p className="text-lg contact-body mb-4">
          Made Right is interested in working with you. Send us a brief of what
          you would like done. It works best if you send a budget so I can plan
          accordingly to create within your means.
        </p>
        <button
          onClick={handleContactClick}
          className="btn-contact bg-orange-900 px-4 py-2 text-sm text-white rounded-lg"
        >
          Contact
        </button>
      </div>
    </div>
  );
}

export default Contact;
