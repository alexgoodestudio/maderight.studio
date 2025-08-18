import Opener from "./Opener";
import Mission from "./Mission";
import Banner from "./Banner";
import Services from "./Services";
import Footer from "./Footer";

function Storage(){

    return(
        <div className="bg-white">
           
            <section>
                <Opener/>
                <Mission/>
                <Services/>
                <Banner/>
                <Footer/>
            </section>

        </div>
    )
}

export default Storage;