
import { BtnNav } from "./BtnNav";
import { AiOutlineClose, AiOutlineMenu } from 'react-icons/ai';
import { useState } from 'react';
import { Link } from "react-router-dom";
import { useMediaQuery } from '@react-hook/media-query';
import imagent4 from "assets/img/declinado.svg"
import imagent5 from "assets/img/cognibot2.webp"
export default function Navbar() {
    
    const [nav, setNav] = useState(true)
    //     const [Navbar, setNavBar] = useState(false)

    const handleNav = () => {
        setNav(!nav)
    }

    const isMobile = useMediaQuery('(max-width: 1124px)');
    return (
        <div>
            {isMobile ? (
                <div className="  fixed flex md:px-14 px-2   w-screen h-24 z-10 items-center   justify-between bg-cover bg-center bg-no-repeat" style={{ backgroundImage: `url(${imagent4})` }}>

                    {/* <Link to={`/`}><a className="text-4xl font-semibold text-white flex justify-center items-center ">PadillaCode.</a></Link> */}
                    <Link to={`/`} className=" h-20  w-32"> <img src={imagent5} alt="logo"></img></Link>
                    <div onClick={handleNav} className="rounded-full  ">
                        {!nav ? <AiOutlineClose size={30} color="white"  /> : <AiOutlineMenu size={30} color="white" />}
                    </div>
                    {!nav && (
                        <div className="fixed left-0 top-0 w-[80%] lg:w-[60%] h-full border-r rounded-br-[50%] transition-all duration-500 ease-in-out z-10 bg-cover bg-center bg-no-repeat" style={{ backgroundImage: `url(${imagent4})` }}>
                            <div className="uppercase p-4 grid grid-cols-1  text-center content-center h-full justify-items-center">
                                <Link to={`/`} className=" h-20  w-32"> <img src={imagent5} alt="logo"></img></Link>
                                <BtnNav text="Principal" ruta="" />
                                <BtnNav text="Nosotros" ruta="about" />
                                {/* <BtnNav text="Servicios" ruta="service" /> */}
                                <BtnNav text="contacto" ruta="contact" />
                            </div>
                        </div>
                    )}

                </div>
            ) : (
                <nav className="  fixed flex md:px-14 px-2  w-full  h-24 z-10 items-center justify-between bg-cover bg-center bg-no-repeat" style={{ backgroundImage: `url(${imagent4})` }}>


                    <Link to={`/`} className=" h-20  w-32"> <img src={imagent5} alt="logo"></img></Link>
                    <div className="flex items-center ">
                        <BtnNav text="Principal" ruta="" />
                        <BtnNav text="Nosotros" ruta="about" />
                        {/* <BtnNav text="Servicios" ides="service" /> */}
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