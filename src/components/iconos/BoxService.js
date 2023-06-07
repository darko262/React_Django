export function BoxServiceSombra({ titulo,logo, parrafo }) {
    return (
      <div className="h-40 w-1/2 lg:h-72 lg:w-1/2 bg-transparent  rounded-3xl ">
        <div className="h-full rounded-3xl  mr-1">
          <div className=" h-1/2 bg-trasparent flex justify-center">
            <img src={logo} className=" h-full w-auto"></img>


          </div>
          <div className=" h-1/2 bg-trasparent  flex flex-col justify-items-center justify-center text-center">
            <h2 className="lg:text-4xl font-bold text-white">{titulo}</h2>
            <h3 className="lg:text-2xl font-bold text-white">{parrafo}</h3>
          </div>
        </div>
      </div>
    );
  }
  
export function BoxService({ titulo,logo, parrafo }) {
    return (
      <div className=" h-40 w-1/2  lg:h-72 lg:w-1/2 bg-transparent rounded-b-3xl">
        <div className="h-full w-full rounded-3xl mr-1">
          <div className=" h-1/2 bg-trasparent flex justify-center">
            <img src={logo} className=" h-full w-auto"></img>


          </div>
          <div className=" h-1/2 bg-trasparent  flex flex-col justify-items-center justify-center text-center bg-gradient-to-b from-transparent to-blue-400 rounded-3xl">
            <h2 className="lg:text-4xl font-bold text-white">{titulo}</h2>
            <h3 className="lg:text-2xl font-bold text-white">{parrafo}</h3>
          </div>
        </div>
      </div>
    );
  }
  