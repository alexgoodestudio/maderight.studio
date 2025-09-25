import Footer from "./Footer";
import Banner from "./Banner";
import Nav from "./Nav";

 function OurProcess() {
  return (
    <section className=" text-dark">
      <Nav />
      <div className="mb-5">
        <div className="text-center mb-5">
          <h2 className="heading-primary text-11xl">Our Process</h2>
          <p className="body-primary max-w-2xl mx-auto mb-5">
            Our approach is simple: clear strategy, modular design, and
            performance-driven development that puts your team in control.
          </p>
        </div>

        <div className="row">
          <div className="col-md-6 mb-5">
            <h3 className="text-2xl font-semibold mb-3">1. Discovery</h3>
            <p className="body-primary">
              We start by learning about your goals, your brand, and your
              audience.
            </p>
          </div>

          <div className="col-md-6 mb-5">
            <h3 className="text-2xl font-semibold mb-3">2. Design System</h3>
            <p className="body-primary">
              We create reusable building blocks that make your site flexible
              and easy to grow.
            </p>
          </div>

          <div className="col-md-6 mb-5">
            <h3 className="text-2xl font-semibold mb-3">3. Design</h3>
            <p className="body-primary">
              Clean layouts, strong typography, and thoughtful details bring the
              system to life.
            </p>
          </div>

          <div className="col-md-6 mb-5">
            <h3 className="text-2xl font-semibold mb-3">4. Development</h3>
            <p className="body-primary">
              We build for speed and accessibility using modern tools and smooth
              interactions.
            </p>
          </div>

          <div className="col-md-12">
            <h3 className="text-2xl font-semibold mb-3">5. Launch</h3>
            <p className="body-primary">
              Once live, your team can update content and create new pages
              whenever you need.
            </p>
          </div>
        </div>
      </div>
      <div className="mt-5">
      <Banner/>
      </div>
      <Footer />
    </section>
  );
}
export default OurProcess;