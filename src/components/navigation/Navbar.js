
import { BtnNav } from "./BtnNav";
import { AiOutlineClose, AiOutlineMenu } from 'react-icons/ai';
import { useState, useEffect } from 'react';
import { BtnSectionAbajo } from "components/home/BtnSection";
import { Link } from "react-router-dom"
export default function Navbar() {
    const [nav, setNav] = useState(true)
    const [Navbar, setNavBar] = useState(false)

    const handleNav = () => {
        setNav(!nav)
    }
    useEffect(() => {
        let prevScrollPos = window.pageYOffset;

        const handleScroll = () => {
            const currentScrollPos = window.pageYOffset;
            const isScrolledDown = prevScrollPos >= 300;

            console.log(isScrolledDown)

            prevScrollPos = currentScrollPos;
            if (isScrolledDown === true) {
                setNavBar(true);

            } else {
                setNavBar(false);
            }
        };

        window.addEventListener('scroll', handleScroll);

        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, []);

    const Cambio = () => {
        return (
            <div className=" h-22  fixed flex justify-end md:px-14 px-2 bg-transparent md:w-full w-full z-50 items-center transition-all duration-500 ease-in-out delay-300">
                <div className={Navbar ? " h-10 w-10 md:h-16 md:w-16 bg-blue-500  flex items-center justify-center rounded-full transition-all duration-500 ease-in-out":"md:hidden  h-8 w-8 flex items-center justify-center rounded-full transition-all duration-500 ease-in-out"}>
                    
                    <div onClick={handleNav} className="rounded-full   object-contain transition-all duration-500 ease-in-out">
                        {!nav ? <AiOutlineClose size={30} color="white" speed={20} className=" object-contain"/> : <AiOutlineMenu  size={30} color="white" />}
                    </div>
                    <div className={!nav ? "fixed left-0 top-0 w-[80%] lg:w-[60%] h-full border-r rounded-br-[50%] bg-zinc-900 transition-all duration-500 ease-in-out" : "fixed left-[-100%] "}>
                        <div className="uppercase p-4 grid grid-cols-1 justify-center text-center content-center h-full">
                            <Link to={`blog/`}><a className="text-4xl font-semibold text-white flex justify-center items-center ">PadillaCode.</a></Link>
                            <BtnNav text="Home" />
                            <BtnNav text="Sobre mí" />
                            <BtnNav text="Servicios" />
                            <BtnNav text="Contacto" />
                            <div className="py-10 justify-center w-full flex">
                                <BtnSectionAbajo />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        );
    };
    
    


    return (
        <nav className={Navbar ? (<Cambio />)
            : ' py-10 shadow-md fixed flex justify-between md:px-14 px-2 bg-transparent md:w-full w-full z-50 items-center transition-all duration-500 ease-in-out  delay-300'}>
            <Link to={`/`}><a className="text-4xl font-semibold text-white flex justify-center items-center ">PadillaCode.</a></Link>
            <div className="hidden  md:flex md:items-center order-3 md:order-1">
                <BtnNav text="Home" />
                <BtnNav text="Sombre mi" />
                <BtnNav text="Servicios" />
                <BtnNav text="Contacto" />
            </div>
            <Cambio />
        </nav>
    )
}

// const mapStateToProp = state => ({

// })

// export default connect(mapStateToProp, {

// })(Navbar)