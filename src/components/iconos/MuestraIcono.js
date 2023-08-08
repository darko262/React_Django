//mostrar iconos de programacion en una pequeña ventana

import { FaPython,FaHtml5,FaCss3 ,FaReact,FaNodeJs, FaBootstrap} from "react-icons/fa"
import { SiCsharp,SiJavascript,SiDjango,SiNvidia,SiTailwindcss} from "react-icons/si"

export function MuestraIcono() {
    return (
        <div className="flex flex-row justify-center items-center  w-4/5 mx-auto flex-wrap">
            <FaPython className=" md:text-8xl text-5xl text-white opacity-30 mx-1 " />
            <FaHtml5 className=" md:text-8xl text-5xl text-white opacity-30 mx-1 " />
            <FaCss3 className=" md:text-8xl text-5xl text-white opacity-30 mx-1 " />
            <FaReact className=" md:text-8xl text-5xl text-white opacity-30 mx-1 " />
            <SiCsharp className=" md:text-8xl text-5xl text-white opacity-30 mx-1 " />
            <SiJavascript className=" md:text-8xl text-5xl text-white opacity-30 mx-1 " />
            <SiDjango className=" md:text-8xl text-5xl text-white opacity-30 mx-1 " />
            <FaNodeJs className=" md:text-8xl text-5xl text-white opacity-30 mx-1 " />
            <SiNvidia className=" md:text-8xl text-5xl text-white opacity-30 mx-1 " />
        
            <SiTailwindcss className=" md:text-8xl text-5xl text-white opacity-30 mx-1 " />
            <FaBootstrap className=" md:text-8xl text-5xl text-white opacity-30 mx-1 " />
            
            
            
        </div>

    )


}