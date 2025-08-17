import Opener from "./Opener";
import Mission from "./Mission";
import Monday from "./Monday";
import MotionPath from "./MotionPath";

function Storage(){

    return(
        <div className="bg-white">
            <h1>Holder of components</h1>
            <section>
                <Opener/>
                <Mission/>
                <Monday/>
                <MotionPath/>
            </section>

        </div>
    )
}

export default Storage;