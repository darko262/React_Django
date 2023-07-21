
// import imagent4 from "../../assets/img/padillacode.png";
// import imagent4 from "../../assets/img/padillacode2.gif";.
// import imagent4 from "../../assets/img/bg-circu.jpg";
import imagent4 from "../../assets/img/ia2.jpg";
// import { BtnSection, BtnSectionAbajo } from "./BtnSection";
import Typed from 'react-typed';

import { motion } from 'framer-motion'


export function BannerDos() {


    return (
        <section className="relative items-center justify-center flex md:h-screen w-auto  min-h-screen pt-20  bg-cover bg-center" style={{ backgroundImage: `url(${imagent4})`, backgroundRepeat: 'no-repeat' }}>
            <div className=" flex justify-center  items-center md:h-96 md:w-96 h-60 w-60  bg-transparent rounded-xl border-8 border-blue-500 shadow-2xl drop-shadow-2xl">
                <div className="text-center md:pt-8 md:h-80 md:w-11/12 h-48 w-48  bg-blue-900 rounded-xl border-4 border-blue-500 ">
                    <h2 className=" md:text-4xl text-2xl text-white pb-5 font-bold">¡Bienvenido! </h2>
                    <h3 className="md:text-4xl text-xl text-white pb-3 font-bold ">Padilla AI Solutions.</h3>
                            {/* <h4 className="md:text-4xl text-md text-white pb-3 font-bold ">Soluciones</h4> */}
                            <Typed className="md:text-4xl text-xl font-bold text-blue-500 " strings={[' IA<span class="text-white">!</span>',' Frontend<span class="text-white">!</span>', 'Backend<span class="text-white">!</span>']}
                                typeSpeed={100}
                                backSpeed={100}
                                loop ></Typed> 

                </div>



            </div>



            {/* <motion.div
                        initial={{ opacity: 0, scale:0.5 }}
                        transition={{ duration: 0.5 }}
                        whileInView={{ opacity: 1, scale:1 }}
                        _
                        className="flex md:flex-row flex-col w-full h-full">
                        <div className="w-full flex flex-col justify-center items-center h-full md:h-auto text-center px-9">
                            <h2 className="md:text-6xl text-4xl text-white pb-5 font-bold">¡Hola, soy <span className="text-blue-500"> Sebastian</span>!</h2>
                            <h3 className="md:text-4xl text-2xl text-white pb-3 font-bold webkit">Ingeniero Civil Electrónico</h3>
                            <h4 className="md:text-4xl text-2xl text-white pb-3 font-bold ">Programador</h4>
                            <Typed className="text-4xl font-bold text-blue-500 " strings={[' Frontend<span class="text-white">!</span>', 'Backend<span class="text-white">!</span>']}
                                typeSpeed={100}
                                backSpeed={100}
                                loop ></Typed> */}


            {/* <div className="flex  flex-row mt-6">
                                <BtnSection text={"about"} />
                                <BtnSection text={"Contactame"} />
                            </div> */}
            {/* <div className="absolute left-0 bottom-0 px-9">
                                <BtnSectionAbajo />
                            </div>

                        </div>
                        
                    </motion.div> */}

        </section>
    )
}
