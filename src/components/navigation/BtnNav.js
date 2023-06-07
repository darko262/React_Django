import { Link } from "react-router-dom"

export function BtnNav({text}) {
    return (
        // <button className="block uppercase mx-auto shadow bg-indigo-800 hover:bg-indigo-700 focus:shadow-outline focus:outline-none text-white text-xs py-3 px-10 rounded">{text}</button>
        <Link to={`/${text}`} className=" uppercase  hover:bg-blue-500 focus:shadow-outline focus:outline-none text-white text-xl py-3 md:px-5  px-2 rounded">{text}</Link>
    
        )

}

