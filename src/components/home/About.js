
import { MuestraIcono } from "components/iconos/MuestraIcono";

import {  BoxServiceSombra } from "components/iconos/BoxService";
import { motion } from 'framer-motion'

export function About() {
    return (
        <section className=" relative sm:pb-8 min-h-screen    py-4 ">

            {/* <div className="absolute  h-12 w-full bg-black backdrop-brightness-125 blur-xl  ">

                </div> */}


            <div className="absolute top-1/2 h-56 w-56  blur-3xl">
                <div className=" h-52 w-52 rounded-full bg-gradient-to-r from-[#32c061] to-[#0b3d04] backdrop-brightness-125 backdrop-blur-xl "></div>


            </div>
            <MuestraIcono />
            <h2 className=" text-5xl text-center text-white font-mono py-11">Nuestros servicios</h2>

            <div className=" w-4/5 mx-auto h-full flex flex-row  flex-wrap  justify-center items-end  lg:pt-0  ">
                <BoxServiceSombra logo="repar" titulo="Hola" parrafo="asjdojasdoasjasdj" />
                <BoxServiceSombra logo="Python" titulo="Hola" parrafo="as asdasdj" />
                <BoxServiceSombra logo="css" titulo="Hola" parrafo="asjdojasdoasj sadas  asdsadasdasdasaasdj" />
                <BoxServiceSombra logo="Python" titulo="Hola" parrafo="asjdojasdoasjasdj sad sa asd sad  sad asd asdasdasd asds" />
                
                

            </div>


            {/* <div className="absolute h-56 w-56  top-0 right-0   rounded-bl-full bg-transparent backdrop-blur-md border-l-8  border-red-500">
                <div className="absolute h-32 w-32 top-0 right-0   rounded-bl-full bg-gradient-to-t from-red-900 via-red-700 to-red-500 backdrop-blur-md ">



                </div>


            </div>

            <motion.div
                initial={{ opacity: 0, scale: 0.5 }}
                transition={{ duration: 0.5 }}
                whileInView={{ opacity: 1, scale: 1 }}>
                <h2 className="text-center text-6xl text-white mb-5"> Sobre <span className="text-blue-500"> Mi</span></h2>
                <div className=" relative h-60 w-60 bg-white  m-auto rounded-full mb-14">
                    <div className="pt-0 w-full h-full bg-blue-500 rounded-full ">
                        <img src={imagent4} alt="about" className="object-contain h-22 w-22 absolute left-1 rounded-full " />
                    </div>
                </div>
                <div className="">
                    <h2 className="text-4xl text-white pb-3 font-bold webkit text-center">Ingeniero Civil Electrónico</h2>
                    <div className="flex md:flex-row flex-col pt-5">
                        <div className="flex md:w-1/2 mx-5">
                            <p className="text-white"> sconocido usó una galería de textos y los mezcló de tal manera que logró hacer un libro de textos especimen. No sólo sobrevivió 500 años, sino que tambien ingresó como texto de relleno en documentos electrónicos, quedando esencialmente igual al original. Fue popularizado en los 60s con la creación de las hojas "Letraset", las cuales contenian pasajes de Lorem Ipsum, y más recientemente con software de autoedición, como por ejemplo Aldus PageMaker, el cual incluye versiones de Lorem Ipsum.</p>
                        </div>
                        <div className="flex  md:w-1/2 w-full justify-center items-center pt-4 sm:pt-0" >
                            <BtnSectionGray text="Sobre mi" />
                        </div>

                    </div>
                </div>

            </motion.div> */}

        </section>



    )
}