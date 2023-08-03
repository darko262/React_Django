import { Link } from "react-router-dom"
import{ AiOutlineLeft, AiOutlineRight} from "react-icons/ai"
import{ BsSlash } from "react-icons/bs"


export function BtnNav({ text, ruta ,ides}) {
  // Verificar si la ruta está definida
  const baseUrl = window.location.origin;
 
    return (
      <Link to={`/${ruta}`} className="transition-shadow duration-700 hover:duration-150 uppercase hover:border-b-4 hover:border-blue-500 text-white text-sm md:text-xl py-3 md:px-5 px-2 rounded flex items-center">
        <AiOutlineLeft />
        {text}
        <AiOutlineRight />
      </Link>
    );
 
}


