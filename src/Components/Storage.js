import Opener from "./Opener";
import Mission from "./Mission";
import Monday from "./Monday";
import MotionPath from "./MotionPath";

function Storage(){

    return(
        <div className="bg-white">
           
            <section>
                <Opener/>
                <Mission/>
                <MotionPath/>
                <Monday/>
            </section>

        </div>
    )
}

export default Storage;