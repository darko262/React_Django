
import { useEffect, useState } from "react"
import { BtnNavDos } from "../navigation/BtnNav";

import { Link } from "react-router-dom";
import axios from "axios";



export function Contact() {





    
    return (

        <section id="#contacto">
            <div className="pt-28">
                <div className="relative  bg-slate-700 border-2 border-sky-950 rounded-3xl   backdrop-brightness-125 backdrop-blur-xl md:w-4/5  lg:w-1/2 md:mx-auto">
                    <div className="absolute inset-0">
                        <div className="absolute inset-y-0 left-0 w-1/2 " />
                    </div>
                    <div className="relative mx-auto max-w-7xl ">
                        <div className=" py-16 px-4 sm:px-6 ">
                            <div className="mx-auto max-w-lg">
                                <h2 className="text-2xl font-bold tracking-tight text-gray-900 sm:text-3xl">
                                    ¡Descubre nuevas posibilidades conmigo!</h2>
                                <p className="mt-3 text-lg leading-6 text-gray-200">
                                    Juntos, crearemos soluciones innovadoras para tu éxito. ¡Contáctame ahora y comencemos a dar vida a tus ideas!
                                </p>
                                <dl className="mt-8 text-base text-gray-200">
                                    <div>
                                        <dt className="sr-only">Postal address</dt>
                                        <dd>

                                            <p>Temuco, Chile</p>
                                        </dd>
                                    </div>
                                    <div className="mt-6">
                                        <dt className="sr-only">Phone number : </dt>
                                        <dd className="flex">
                                            +56988682182

                                        </dd>
                                    </div>
                                    <div className="mt-3">
                                        <dt className="sr-only">Email</dt>
                                        <dd className="flex">
                                            seba.padilla@live.cl

                                        </dd>
                                    </div>
                                </dl>
                                <p className="mt-6 text-base text-gray-200">
                                    ¡Espero con ansias trabajar contigo en proyectos emocionantes!


                                </p>
                            </div>
                        </div>
                        <div className=" py-16 px-4 sm:px-6 ">
                            <div className="mx-auto  flex justify-center">
                            <BtnNavDos text="Escribeme aqui" ruta="contact" />

                            
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>

    )
}
export default Contact