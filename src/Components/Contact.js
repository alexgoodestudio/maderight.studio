import React from 'react';

function Contact() {
  const handleContactClick = () => {
    window.location.href = "mailto:hello@maderight.studio";
  };

  return (
    <div className="row contact">
      <div className="col-lg-12 col-12 bg-slate-50  contact text-dark d-flex flex-column justify-content-center items-center text-center p-4">
        <h3 className="text-5xl text-teal-900 eighties font-bold mb-3">
          Interested in working together?
        </h3>
        <p className="text-xl contact-body gs text-start mb-5">
          Made Right is interested in working with you. Send us a brief of what
          you would like done. It works best if you send a budget so we can plan
          accordingly to create within your means.
        </p>
        <button
          onClick={handleContactClick}
          className="btn-contact text-lg font-mono bg-teal-900 text-sky-50 px-5 py-3 rounded"
        >
          Email
        </button>
      </div>
    </div>
  );
}

export default Contact;
