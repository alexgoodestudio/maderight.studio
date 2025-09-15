import Typewriter from "./TypeWriter";

function Services() {
  return (
    <div className="bg-white services text-black px-5 py-5">
      <h2 className="text-3xl font-bold mb-6 text-start ">What We Do.</h2>
          <section className="border br pb-3 pt-4 px-4 d-flex "><Typewriter/></section>
      <ul className="list-disc mt-5 text-start list-inside space-y-2">
        <li className="text-2xl">Front-End Development</li>
        <li className="text-2xl">Back-End Development</li>
        <li className="text-2xl">REST API Development</li>
        <li className="text-2xl">Creative Web Design</li>
        <li className="text-2xl">Interactive Design</li>
        <li className="text-2xl">Search Engine Optimization</li>
        <li className="text-2xl">UX/UI Design</li>
        <li className="text-2xl">Digital Consulting</li>
      </ul>
    </div>
  );
}

export default Services;
