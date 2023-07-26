//mostrar iconos de programacion en una pequeña ventana

import { FaPython,FaHtml5,FaCss3 ,FaReact,FaNodeJs,FaRaspberryPi,FaMicrochip} from "react-icons/fa"
import { SiCsharp,SiJavascript,SiDjango,SiNvidia} from "react-icons/si"

export function MuestraIcono() {
    return (
        <div className="flex flex-row justify-center items-center  w-4/5 mx-auto flex-wrap">
            <FaPython className=" md:text-8xl text-5xl text-white opacity-30 lg:mr-6 " />
            <FaHtml5 className=" md:text-8xl text-5xl text-white opacity-30 lg:mr-6 " />
            <FaCss3 className=" md:text-8xl text-5xl text-white opacity-30 lg:mr-6 " />
            <FaReact className=" md:text-8xl text-5xl text-white opacity-30 lg:mr-6 " />
            <SiCsharp className=" md:text-8xl text-5xl text-white opacity-30 lg:mr-6 " />
            <SiJavascript className=" md:text-8xl text-5xl text-white opacity-30 lg:mr-6 " />
            <SiDjango className=" md:text-8xl text-5xl text-white opacity-30 lg:mr-6 " />
            <FaNodeJs className=" md:text-8xl text-5xl text-white opacity-30 lg:mr-6 " />
            <SiNvidia className=" md:text-8xl text-5xl text-white opacity-30 lg:mr-6 " />
            <FaRaspberryPi className=" md:text-8xl text-5xl text-white opacity-30 lg:mr-6 " />
            {/* <FaMicrochip className=" md:text-8xl text-5xl text-white opacity-30 lg:mr-6 " /> */}
            
            
        </div>

    )


}