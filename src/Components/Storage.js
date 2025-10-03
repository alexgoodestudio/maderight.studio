import Opener from "./Opener";
import ScrollMission from "./ScrollMission";
import Featured from "./Featured";
import Services from "./Services"
import Nav from "./Nav";
// import LineMission from "./LineMission";
// import Random from "./Random";
import Contact from "./Contact";
// import NavBanner from "./NavBanner";

function Storage(){

    return(
        <div className="bg-green-900 ">        
            <section>
                {/* <NavBanner/> */}
                <Nav/>
                <Opener/>
                <ScrollMission/>
                <Services/>
                <Featured/>
                {/* <LineMission/> */}
                {/* <Random/> */}
                <Contact/>
                
            </section>

        </div>
    )
}

export default Storage;