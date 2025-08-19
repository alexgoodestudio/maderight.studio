import "./Style.css"

function Opener(){
  return(
    <div className="bg-purple-200  vh-100 d-flex justify-content-center align-items-center">
        
      <section className="text-center text-dark">
        <h1 className="text-6xl text-gray-800">Made Right</h1>
        <h4 className="text-3xl text-gray-600">A Creative Web Design and Technology Studio</h4>
        <button className="btn-call px-3 mt-2">Call Us!</button>
        <button className="btn-email px-3 mt-2">Email Us!</button>
        {/*  <p>This section will have the initial useGSAP animation similar to Self Aware Studio's "This Corner" website Opener load screen </p> */}
      </section>
    </div>
  )
}

export default Opener;
