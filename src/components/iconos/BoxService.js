import { IconosProgramacionDos } from "./IconosProgramacion";

export function BoxServiceSombra({ titulo, logo, parrafo }) {
  return (
    <div className="h-96 w-1/2 md:h-96 md:w-1/4   bg-slate-700 border-2 border-sky-950 hover:scale-105 hover:rounded-3xl hover:border-purple-500 transition easy-linear duration-500 delay-100" >
      <div className="h-full rounded-3xl flex flex-col mr-1 w-full justify-center text-center">
        <div className=" h-1/2 w-full">
          <IconosProgramacionDos name={logo} />
        </div>
        <div className=" h-1/2 bg-trasparent  w-full ">
          <h2 className="lg:text-3xl  text-md font-bold text-white">{titulo}</h2>
          <p className="lg:text-sm font-bold text-xs text-sky-300">{parrafo}</p>
        </div>


      </div>
    </div>
  );
}

// export function BoxService({ titulo,logo, parrafo }) {
//     return (
//       <div className=" h-40 w-1/2  lg:h-72 lg:w-1/2 bg-transparent rounded-b-3xl">
//         <div className="h-full w-full rounded-3xl mr-1">
//           <div className=" h-1/2 bg-trasparent flex justify-center">
//             <img src={logo} className=" h-full w-auto"></img>


//           </div>
//           <div className=" h-full bg-trasparent  flex flex-col justify-items-center justify-center text-center bg-gradient-to-b from-transparent to-blue-400 rounded-3xl">
//             <h2 className="lg:text-4xl font-bold text-white">{titulo}</h2>
//             <p className="lg:text-2xl font-bold text-white">{parrafo}</p>
//           </div>
//         </div>
//       </div>
//     );
//   }
