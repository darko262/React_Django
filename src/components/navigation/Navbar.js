
import { BtnNav } from "./BtnNav";
import { AiOutlineClose, AiOutlineMenu } from 'react-icons/ai';
import { useState, useEffect } from 'react';
import { BtnSectionAbajo } from "components/home/BtnSection";
import { Link } from "react-router-dom"
import Fondo from "components/iconos/Fondo";
import { useMediaQuery } from '@react-hook/media-query';
import imagent4 from "assets/img/declinado.svg"
import imagent5 from "assets/img/cognibot2.png"
export default function Navbar() {
    const baseUrl = window.location.origin;
    const [nav, setNav] = useState(true)
    //     const [Navbar, setNavBar] = useState(false)

    const handleNav = () => {
        setNav(!nav)
    }

    const isMobile = useMediaQuery('(max-width: 1124px)');
    return (
        <div>
            {isMobile ? (
                <div className="  fixed flex md:px-14 px-2  w-full  h-24 z-10 items-center   justify-between bg-cover bg-center bg-no-repeat" style={{ backgroundImage: `url(${imagent4})` }}>
                    {/* <Fondo posicion={" bottom-0 left-1/2  "} /> */}
                    {/* <Link to={`/`}><a className="text-4xl font-semibold text-white flex justify-center items-center ">PadillaCode.</a></Link> */}
                    <a href="#" className=" h-full flex object-contain"> <img src={imagent5} className=" h-auto w-full "></img></a>
                    <div onClick={handleNav} className="rounded-full   object-contain transition-all duration-500 ease-in-out">
                        {!nav ? <AiOutlineClose size={30} color="white" speed={20} className=" object-contain" /> : <AiOutlineMenu size={30} color="white" />}
                    </div>
                    {!nav && (
                        <div className="fixed left-0 top-0 w-[80%] lg:w-[60%] h-full border-r rounded-br-[50%] transition-all duration-500 ease-in-out z-10 bg-cover bg-center bg-no-repeat" style={{ backgroundImage: `url(${imagent4})` }}>
                            <div className="uppercase p-4 grid grid-cols-1 justify-center text-center content-center h-full">
                                <Link to={`blog/`}><a className="text-4xl font-semibold text-white flex justify-center items-center ">PadillaCode.</a></Link>
                                <BtnNav text="Home" ruta="" />
                                <BtnNav text="Nosotros" ruta="about" />
                                <BtnNav text="Servicios" ruta="service" />
                                <BtnNav text="contacto" ruta="contact" />
                            </div>
                        </div>
                    )}

                </div>
            ) : (
                <nav className="  fixed flex md:px-14 px-2  w-full  h-24 z-10 items-center justify-between bg-cover bg-center bg-no-repeat" style={{ backgroundImage: `url(${imagent4})` }}>


                    <a href="/" className=" h-full flex object-contain"> <img src={imagent5} className=" h-full w-full "></img></a>
                    <div className="flex items-center order-1">
                        <BtnNav text="Home" ruta="" />
                        <BtnNav text="Nosotros" ruta="about"  />
                        <BtnNav text="Servicios" ides="service" />
                        <BtnNav text="contacto" ruta="contact" />
                    </div>


                </nav>
            )}


        </div>
    )
}


// const mapStateToProp = state => ({

// })

// export default connect(mapStateToProp, {

// })(Navbar)