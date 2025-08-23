import Opener from "./Opener";
import Mission from "./Mission";
import Banner from "./Banner";
import Featured from "./Featured";
import Footer from "./Footer";
import Services from "./Services"
import Nav from "./Nav";

function Storage(){

    return(
        <div className="bg-white">
           
            <section>
                <Nav/>
                <Opener/>
                <Mission/>
                <Services/>
                <Featured/>
                <Banner/>
                <Footer/>
            </section>

        </div>
    )
}

export default Storage;