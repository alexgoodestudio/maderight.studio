import Opener from "./Opener";
import ScrollMission from "./ScrollMission";
import Banner from "./Banner";
import Featured from "./Featured";
import Footer from "./Footer";
import Services from "./Services"
import Nav from "./Nav";
import LineMission from "./LineMission";
// import Random from "./Random";
import Contact from "./Contact";

function Storage(){

    return(
        <div className="bg-white">        
            <section>
                <Nav/>
                <Opener/>
                <ScrollMission/>
                <Services/>
                <Featured/>
                <LineMission/>
                {/* <Random/> */}
                <Contact/>
                <Banner/>
                <Footer/>
            </section>

        </div>
    )
}

export default Storage;