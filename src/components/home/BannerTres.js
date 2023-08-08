
import imagent4 from "../../assets/img/cerebrMejor.webp";
import { BtnSectionAbajoGray } from "components/iconos/IconosProgramacion";
import { useEffect } from "react";



export function BannerTres() {
    useEffect(() => {
        window.scrollTo(0, 0)
        })
    


    return (

        <section className="relative min-h-screen  lg:h-screen ">
            <div className="flex lg:flex-row flex-col w-full  lg:h-full min-h-screen  ">
                <div className="w-full flex flex-col justify-center items-center  lg:h-2/3 h-full lg:my-auto  md:mt-48 mt-32 text-center px-9  z-[1] ">

                    <div className="w-full h-full bg-white bg-opacity-10 border border-none p-4 backdrop-blur-3xl rounded-3xl flex flex-col justify-center ">
                        <h2 className="md:text-[4rem] text-[2rem] bg-clip-text text-transparent bg-gradient-to-r from-[#043d5a] to-[#38A2D7]  font-bold uppercase">
                            Cogni <span className="bg-clip-text text-transparent bg-gradient-to-r from-pink-500 to-violet-500 uppercase">bot</span>
                        </h2>
                        <h3 className="md:text-[4rem] text-[2rem] bg-clip-text text-transparent bg-gradient-to-r from-[#38A2D7] to-[#043d5a]  font-bold uppercase">Solutions</h3>
                        <p className="text-[1.5rem]  text-white ">
                            Programación y Soluciones de Inteligencia Artificial para Mejorar tu Presencia Digital.
                        </p>
                        <div className="w-4/5 mx-auto   ">
                            <BtnSectionAbajoGray />
                        </div>

                    </div>
                </div>
                <div className="flex flex-col items-center justify-end h-full w-full ">
                    <div className="lg:h-5/6  h-full">
                        <img className="h-full w-full object-cover animate-bounce" src={imagent4} alt="" />
                    </div>
                </div>
            </div>
            
        </section>


    )
}
