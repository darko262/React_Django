
import imagent3 from "../../assets/img/sebas.webp";
// import { BtnSection, BtnSectionAbajo } from "../home/BtnSection";
import Fondo from "components/iconos/Fondo";
import { useEffect, useState } from "react";

export function BannerAbout() {
    useEffect(() => {
        window.scrollTo(0, 0)
        })
    
    return (
        <section className="  w-11/12 mx-auto lg:h-screen  min-h-screen py-4">

            <div className=" grid grid-rows-1  w-full  h-1/2 ">
                <div className=" flex  justify-center bg-white bg-opacity-10 border border-none p-4 backdrop-blur-3xl  rounded-3xl">
                    <div className=" h-full w-full  flex-col text-white ">
                        <div className="h-full w-fullp-4">
                            {/* Dividir el div en filas */}
                            <div className="grid grid-rows-3 h-full">
                                {/* Fila 1 - Parte superior izquierda */}
                                <div className="flex items-start justify-start">
                                    <p className="text-white text-lg  md:text-4xl ">Universidad De La Frontera</p>
                                </div>

                                {/* Fila 2 - Centro */}
                                <div className="flex items-center justify-center">
                                    <p className="text-white text-2xl md:text-7xl font-mono">Sebastian Padilla</p>
                                </div>

                                {/* Fila 3 - Parte inferior izquierda */}
                                <div className="flex items-end justify-start">
                                    <p className="text-white text-lg md:text-5xl">Ingeniero Civil Electronico</p>
                                </div>
                            </div>
                        </div>

                    </div>
                    <div className="h-full w-full   flex items-center justify-center ">
                        <img src={imagent3} className="h-full w-full md:w-auto rounded-full" alt="Imagen" />
                    </div>

                </div>
            </div>
            <div className="h-1/2 md:w-3/4 w-full mx-auto  text-white  py-10">
               
                <p>
                ¡Hola! 👋

                Soy un ingeniero civil electrónico titulado de la Universidad de la Frontera en Temuco, Chile. Me apasiona la tecnología y tengo experiencia en diversos campos como inteligencia artificial, detección de patrones y programación.

                Durante mi carrera académica y profesional, me he enfocado en aplicar mis conocimientos para desarrollar soluciones innovadoras y eficientes. Mi experiencia en inteligencia artificial me ha permitido abordar problemas complejos y encontrar soluciones creativas mediante algoritmos de aprendizaje automático y análisis de datos.

                También tengo experiencia en programación web, donde he trabajado en el desarrollo de sitios y aplicaciones interactivas que brindan una experiencia única a los usuarios. Me encanta explorar nuevas tecnologías y tendencias en el ámbito del desarrollo web para mantenerme actualizado y ofrecer soluciones modernas y atractivas.

                Como ingeniero, me considero una persona proactiva, orientada a los detalles y apasionada por el aprendizaje continuo. Siempre busco nuevos desafíos y oportunidades para mejorar mis habilidades y conocimientos.

    

                ¡Gracias por visitar mi sitio!
                </p>
            </div>




        </section >

    )
}
