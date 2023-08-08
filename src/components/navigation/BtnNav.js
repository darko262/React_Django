import { Link } from "react-router-dom"


export function BtnNav({ text, ruta }) {
  // Verificar si la ruta está definida

 
    return (
      <Link to={`/${ruta}`} className="transition-all ease-in-out duration-150 uppercase hover:border-b-4 hover:border-blue-500 text-white text-sm md:text-xl py-3  mx-4 rounded flex items-center">
        {/* <BsCode className="mx-1"/> */}
        {text}
        {/* <BsCodeSlash className="mx-1" /> */}
      </Link>
    );
 
}

export function BtnNavDos({ text, ruta }) {
  // Verificar si la ruta está definida
  
 
    return (
      <Link to={`/${ruta}`} className=" uppercase    animate-[pulse_1s_ease-in-out_infinite] text-[#043d5a] bg-gradient-to-r from-pink-500 to-violet-500  text-sm md:text-xl py-3 px-2 mx-2 rounded flex items-center">
        {/* <BsCode className="mx-1"/> */}
        
        {text}
        {/* <BsCodeSlash className="mx-1" /> */}
      </Link>
    );
 
}



