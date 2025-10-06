import Opener from "./Opener";
import ScrollMission from "./ScrollMission";
import Featured from "./Featured";
import Services from "./Services"
import Nav from "./Nav";
// import LineMission from "./LineMission";
// import Random from "./Random";
import Contact from "./Contact";
import Stats from "./Stats";

function Storage(){

    return(
        <div className="bg-green-900 ">        
            <section>
                <Nav/>
                <Opener/>
                <ScrollMission/>
                <Services/>
                <Featured/>
                <Stats/>
                {/* <LineMission/> */}
                {/* <Random/> */}
                <Contact/>
                
            </section>

        </div>
    )
}

export default Storage;