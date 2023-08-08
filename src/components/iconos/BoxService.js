import { IconosProgramacionDos } from "./IconosProgramacion";

export function BoxServiceSombra({ titulo, logo, parrafo }) {
  return (
    <div className="h-96 w-1/2 md:h-[26rem] md:w-1/4   bg-slate-700 border-2 border-sky-950 hover:scale-105 hover:rounded-3xl hover:border-purple-500 transition easy-linear duration-500 delay-100" >
      <div className="h-full rounded-3xl flex flex-col mr-1 w-full justify-center text-center">
        <div className=" h-1/3 w-full">
          <IconosProgramacionDos name={logo} />
        </div>
        <div className=" h-full bg-trasparent  w-full ">
          <h2 className="lg:text-xl  text-lg font-bold text-white">{titulo}</h2>
          <p className="lg:text-sm font-bold text-xs text-sky-300  w-11/12 mx-auto lg:my-5">{parrafo}</p>
        </div>


      </div>
    </div>
  );
}

