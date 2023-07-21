
// import imagent4 from "../../assets/img/padillacode.png";
// import imagent4 from "../../assets/img/padillacode2.gif";
import imagent4 from "../../assets/img/cerebro.png";
import imagent5 from "../../assets/img/progfondo.jpg";
import imagent6 from "../../assets/img/bg-circu.jpg";
import { BtnSection, BtnSectionAbajo } from "./BtnSection";
import Typed from 'react-typed';

import { motion } from 'framer-motion'
import Fondo from "components/iconos/Fondo";


export function BannerTres() {


    return (

        <section className="relative min-h-screen  lg:h-screen ">
            <div className="flex lg:flex-row flex-col w-full  lg:h-full min-h-screen  ">
                <div className="w-full flex flex-col justify-center items-center  lg:h-2/3 h-full lg:my-auto  md:mt-48 mt-32 text-center px-9  z-[1] ">

                    <div className="w-full h-full bg-white bg-opacity-10 border border-none p-4 backdrop-blur-3xl rounded-3xl flex flex-col justify-center">
                        <h2 className="md:text-[6rem] text-4xl text-[#38A2D7] md:pb-10 pb-2 font-bold uppercase">
                            Padilla<span className="text-[#b93e86] uppercase">ia</span>
                        </h2>
                        <h3 className="md:text-[6rem] text-4xl text-[#38A2D7] md:pb-10 pb-5 font-bold uppercase">Solutions</h3>
                        <p className="md:text-[1.5rem] text-sm text-white ">
                            Programación y Soluciones de Inteligencia Artificial para Mejorar tu Presencia Digital.
                        </p>

                    </div>
                </div>
                <div className="flex flex-col items-center justify-end h-full w-full ">
                    <div className="lg:h-5/6  h-full">
                        <img className="h-full w-full object-cover animate-bounce" src={imagent4} alt="" />
                    </div>
                </div>
            </div>
            <Fondo posicion={"top-1/2 "} />
        </section>


    )
}
