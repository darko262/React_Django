
import { MuestraIcono } from "components/iconos/MuestraIcono";

import {  BoxServiceSombra } from "components/iconos/BoxService";
import { motion } from 'framer-motion'

export function About() {
    return (
        <section className=" relative sm:pb-8 min-h-screen    py-4 ">

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


           

        </section>



    )
}