
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



        <section className="relative md:h-screen h-screen  ">
            {/* <h1 className="uppercase text-9xl font-black bg-clip-text text-transparent  justify-center flex w-full absolute top-1/4 z-0 bg-auto bg-top " style={{ backgroundImage: `url(${imagent6})`, backgroundRepeat: 'no-repeat' }}>padillacode</h1> */}

            <Fondo posicion={"top-1/2 "} />

            {/* <div className="absolute top-0 h-56 w-56  blur-3xl">
                <div className="absolute h-52 w-52 rounded-full bg-gradient-to-r from-[#38A2D7] to-[#561139] backdrop-brightness-125 backdrop-blur-xl bg-white"></div>
            </div> */}
            {/* <div className="absolute   h-full  w-full    flex items-end ">
                <div className="absolute  h-12 w-full  bg-black backdrop-brightness-125 backdrop-blur-xl blur-xl"></div>
            </div> */}

            <div className="flex lg:flex-row flex-col w-full h-full relative  ">
                <div className="w-full flex flex-col justify-center items-center  lg:h-2/3 h-3/4 lg:my-auto  md:mt-48 mt-32 text-center px-9 z-20">
                    {/* Realizar un fondo transparente */}
                    <div className="w-full h-full bg-white bg-opacity-10 border border-none p-4 backdrop-blur-3xl rounded-3xl flex flex-col justify-center">
                        <h2 className="md:text-[6rem] text-4xl text-[#38A2D7] md:pb-10 pb-2 font-bold uppercase">
                            Padilla<span className="text-[#b93e86] uppercase">ia</span>
                        </h2>
                        <h3 className="md:text-[6rem] text-4xl text-[#38A2D7] md:pb-10 pb-5 font-bold uppercase">Solutions</h3>
                        <p className="md:text-[1.5rem] text-sm text-white ">
                            Programación y Soluciones de Inteligencia Artificial para Mejorar tu Presencia Digital.
                        </p>
                        {/* <div className="flex flex-row mt-6 w-full h-1/3   justify-center items-end">
                            <BtnSection text={"about"} />
                            <BtnSection text={"Contactame"} />
                        </div> */}
                    </div>
                </div>


                <div className="flex flex-col items-center justify-end h-full w-full">
                    <div className="lg:h-5/6  h-full">
                        <img className="h-full w-full object-cover animate-bounce" src={imagent4} alt="" />
                    </div>
                </div>

                {/* <div className="flex flex-col relative h-full w-full  border-none  " >
                    <div className="bg-cover  bg-center  lg:h-3/4 h-full mt-auto    border-none  animate-bounce  z-10 overflow-hidden " style={{ backgroundImage: `url(${imagent4})`, backgroundRepeat: 'no-repeat' }}></div>
                        <div className="absolute flex justify-center  items-end  h-full w-full  blur-3xl ">
                            <div className="absolute  h-4/5  w-4/5 rounded-full bg-gradient-to-r   from-[#38A2D7] to-[#561139] backdrop-brightness-125 backdrop-blur-xl bg-white"></div>
                        </div>
                    
                </div> */}

            </div>
            {/*  */}


            {/* <div className="absolute h-56 w-56  bottom-0 right-0   rounded-tl-full bg-transparent  border-l-8  border-red-500 brightness-125 ">
        //             <div className="absolute h-32 w-32 bottom-0 right-0   rounded-tl-full bg-gradient-to-b from-red-900 via-red-700 to-red-500 ">



        //             </div>

        </div>
        //         </div> */}
            {/* <div className=" h-3/4 w-1/2 mx-auto rounded-full  bg-center  bg-cover " >
        //             <div className="flex flex-row h-96 w-1/2 mx-auto lg:bg-contain  bg-auto bg-top z-10" style={{ backgroundImage: `url(${imagent4})`, backgroundRepeat: 'no-repeat' }}>



        //             </div>
        //         </div> */}




        </section>


    )
}
