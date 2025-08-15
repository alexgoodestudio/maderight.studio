import Dashboard from "./Dashboard";
import Mission from "./Mission";
import Monday from "./Monday";

function Storage(){

    return(
        <div className="bg-dark">
            <h1>Holder of components</h1>
            <section>
                <Dashboard/>
                <Mission/>
                <Monday/>
            </section>

        </div>
    )
}

export default Storage;