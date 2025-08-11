import Dashboard from "./Dashboard";
import Mission from "./Mission";

function Storage(){

    return(
        <div className="bg-dark">
            <h1>Holder of components</h1>
            <section>
                <Dashboard/>
                <Mission/>
            </section>

        </div>
    )
}

export default Storage;