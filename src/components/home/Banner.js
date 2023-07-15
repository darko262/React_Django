
// import imagent4 from "../../assets/img/padillacode.png";
 import imagent4 from "../../assets/img/padillacode2.gif";
// import imagent4 from "../../assets/img/fondo2.svg";
import { BtnSection, BtnSectionAbajo } from "./BtnSection";
import Typed from 'react-typed';

import { motion } from 'framer-motion'


export function Banner() {

    
    return (
        <section className="relative items-center flex md:h-screen bg-black w-auto  min-h-screen pt-20 md:pt-0">
          
                    <motion.div
                        initial={{ opacity: 0, scale:0.5 }}
                        transition={{ duration: 0.5 }}
                        whileInView={{ opacity: 1, scale:1 }}
                        _
                        className="flex md:flex-row flex-col w-full h-full">
                        <div className="w-full bg-black flex flex-col justify-center items-center h-full md:h-auto text-center px-9">
                            <h2 className="md:text-6xl text-4xl text-white pb-5 font-bold">¡Hola, soy <span className="text-blue-500"> Sebastian</span>!</h2>
                            <h3 className="md:text-4xl text-2xl text-white pb-3 font-bold webkit">Ingeniero Civil Electrónico</h3>
                            <h4 className="md:text-4xl text-2xl text-white pb-3 font-bold ">Programador</h4>
                            <Typed className="text-4xl font-bold text-blue-500 " strings={[' Frontend<span class="text-white">!</span>', 'Backend<span class="text-white">!</span>']}
                                typeSpeed={100}
                                backSpeed={100}
                                loop ></Typed>


                            <div className="flex  flex-row mt-6">
                                <BtnSection text={"about"} />
                                <BtnSection text={"Contactame"} />
                            </div>
                            <div className="absolute left-0 bottom-0 px-9">
                                <BtnSectionAbajo />
                            </div>

                        </div>
                        <div className=" relative flex justify-center items-center  w-full h-full bg-cover bg-center"style={{ backgroundImage: `url(${imagent4})`, backgroundRepeat: 'no-repeat' }}>
                            {/* <img src={imagent4} alt="" className=" relative h-auto w-auto md:h-96 md:w-full lg:h-full lg:w-full " /> */}
                            {/* <div className="absolute w-96 h-96 bg-black rounded-full mask " style={{ mask: `url(${imagent4})`, webkitmask:`url(${imagent4})`}}></div> */}
                            {/* <div className="absolute w-96 h-96 bg-black rounded-full mask" ></div> */}

                        </div>
                    </motion.div>
                
        </section>

                
    )
}
