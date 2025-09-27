import Opener from "./Opener";
import ScrollMission from "./ScrollMission";
import Featured from "./Featured";
import Services from "./Services"
import Nav from "./Nav";
// import LineMission from "./LineMission";
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
                {/* <LineMission/> */}
                {/* <Random/> */}
                <Contact/>
                
            </section>

        </div>
    )
}

export default Storage;