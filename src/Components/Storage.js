import Opener from "./Opener";
import ScrollMission from "./ScrollMission";
import Banner from "./Banner";
import Featured from "./Featured";
import Footer from "./Footer";
import Services from "./Services"
import Nav from "./Nav";
import LineMission from "./LineMission";

function Storage(){

    return(
        <div className="bg-white">        
            <section>
                <Nav/>
                <Opener/>
                <ScrollMission/>
                <Services/>
                <LineMission/>
                <Featured/>
                <Banner/>
                <Footer/>
            </section>

        </div>
    )
}

export default Storage;