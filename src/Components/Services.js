import Typewriter from "./TypeWriter";

function Services() {
  return (
    <div className="bg-amber-950 vh-100 text-white px-5 py-5">
      <h2 className="text-3xl font-bold mb-6 text-start ">What We Do.</h2>
          <section className="border br pb-3 pt-4 px-4 d-flex"><Typewriter/></section>
      <ul className="list-disc mt-5 text-start list-inside space-y-2">
        <li className="text-4xl">Front-End Development</li>
        <li className="text-4xl">Back-End Development</li>
        <li className="text-4xl">REST API Development</li>
        <li className="text-4xl">Creative Web Design</li>
        <li className="text-4xl">Interactive Design</li>
        <li className="text-4xl">SEO</li>
        <li className="text-4xl">Digital Consulting</li>
      </ul>
    </div>
  );
}

export default Services;
