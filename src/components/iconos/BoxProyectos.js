import { Link } from "react-router-dom"
import { useMediaQuery } from '@react-hook/media-query';

import { IconosProgramacion } from "./IconosProgramacion";

export function BoxProyectos({ titulo, logo, parrafo, slug, lenguaje, }) {
    const isMobile = useMediaQuery('(max-width: 1024px)');
    return (
        <Link to={`blog/${slug}`}>
            {isMobile ? (
                <div className=" h-full w-full md:w-10/12 md:mx-auto  bg-slate-700 border-2 border-sky-950 rounded-3xl z-20  backdrop-brightness-125 backdrop-blur-xl">
                    <img src={logo} className=" h-1/2 w-full rounded-3xl ease-in   " alt="imgProyecto"></img>
                    <div className=" text-center   h-full w-full  text-blue-500">
                        <h2 className="text-3xl w-11/12  mx-auto ">{titulo}</h2>
                        <h4 className=" w-11/12  mx-auto h-full ">{parrafo}</h4>

                        <div className="h-1/2 w-full  grid grid-cols-2 gap-4">
                            <div className="flex justify-center items-center">
                                {lenguaje.map((lenguaje, index) => (
                                    <IconosProgramacion key={index} name={lenguaje} />
                                ))}
                            </div>
                            <div className="w-4/5 mx-auto">
                                <Link to={`blog/${slug}`} className="flex justify-center items-center font-mono text-sm text-white uppercase  py-4 rounded-lg border-2 border-white bg-blue-900 shadow-md  my-9">
                                    Ver Mas
                                    <svg xmlns="http://www.w3.org/2000/svg" className="h-3 fill-white ml-5 animate-ping" viewBox="0 0 576 512"><path d="M288 80c-65.2 0-118.8 29.6-159.9 67.7C89.6 183.5 63 226 49.4 256c13.6 30 40.2 72.5 78.6 108.3C169.2 402.4 222.8 432 288 432s118.8-29.6 159.9-67.7C486.4 328.5 513 286 526.6 256c-13.6-30-40.2-72.5-78.6-108.3C406.8 109.6 353.2 80 288 80zM95.4 112.6C142.5 68.8 207.2 32 288 32s145.5 36.8 192.6 80.6c46.8 43.5 78.1 95.4 93 131.1c3.3 7.9 3.3 16.7 0 24.6c-14.9 35.7-46.2 87.7-93 131.1C433.5 443.2 368.8 480 288 480s-145.5-36.8-192.6-80.6C48.6 356 17.3 304 2.5 268.3c-3.3-7.9-3.3-16.7 0-24.6C17.3 208 48.6 156 95.4 112.6zM288 336c44.2 0 80-35.8 80-80s-35.8-80-80-80c-.7 0-1.3 0-2 0c1.3 5.1 2 10.5 2 16c0 35.3-28.7 64-64 64c-5.5 0-10.9-.7-16-2c0 .7 0 1.3 0 2c0 44.2 35.8 80 80 80zm0-208a128 128 0 1 1 0 256 128 128 0 1 1 0-256z"/></svg>
                                </Link>
                            </div>
                        </div>


                    </div>

                </div>

            ) : (
                <div className="w-full lg:w-96  lg:h-72 h-auto rounded-b-3xl group  overflow-hidden flex justify-center relative mb-5 lg:mr-4">

                    <div className=" h-full mr-1 rounded-3xl ">

                        <img src={logo} className=" h-full w-96 rounded-3xl ease-in  duration-500 group-hover:scale-105   " alt="imgProyecto"></img>
                        <div className=" absolute left-0 bottom-0 w-full h-full bg-gradient-to-b from-transparent to-blue-400 rounded-3xl flex justify-center flex-col text-center translate-y-full easy-linear duration-500 md:group-hover:translate-y-0 ">
                            <h2 className="lg:text-4xl text-2xl w-11/12  mx-auto ">{titulo}</h2>

                            <h4 className="text-white w-11/12  mx-auto h-full">{parrafo} </h4>

                            <div className="grid grid-cols-11 place-content-center  absolute bottom-0 pb-6 ">
                                {lenguaje.map((lenguaje, index) => (
                                    <IconosProgramacion key={index} name={lenguaje} />
                                ))}
                            </div>
                            

                        </div>
                    </div>
                </div>
            )}

        </Link>
    );
}