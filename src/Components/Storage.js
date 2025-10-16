import Opener from "./Opener";
import ScrollMission from "./ScrollMission";
import Featured from "./Featured";
import Services from "./Services"
import Nav from "./Nav";
import Random from "./Random";
import Contact from "./Contact";
import Stats from "./Stats";

function Storage(){

    return(
        <div className="bg-teal-950">        
            <section>
                <Nav/>
                <Opener/>
                <ScrollMission/>
                <Services/>
                <Featured/>
                <Stats/>
                <Contact/>
                <Random/>
                
            </section>

        </div>
    )
}

export default Storage;