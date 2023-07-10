import { Instagram, Twitter,Github } from '../iconos/RedSocial'
import { Link } from "react-router-dom"

export function BtnLink({ text }) {
    return (
      <Link to={`/${text}`} className=" uppercase  hover:bg-indigo-700 focus:shadow-outline focus:outline-none text-white text-xs py-3 md:px-5  px-2 rounded">{text}</Link>

    )

}

export function BtnSection({ text }) {
    return (
        <button className="w-40 relative h-14 border-4 border-blue-500 border-ridge outline-none bg-transparent text-white transition duration-100 rounded-md text-base font-bold after:absolute after:bg-black after:-top-2 after:left-2 after:w-11/12 after:h-2/5 after:transition after:duration-500 after:origin-center before:absolute before:bg-black before:top-10 before:left-2 before:w-11/12 before:h-2/5 before:transition before:duration-500 before:origin-center hover:before:scale-0 hover:after:scale-0  hover:shadow-[inset_0px_0px_25px_rgba(0,0,0,0.3)] hover:shadow-blue-500 mr-2" >
            {text}
        </button>

    )

}
export function BtnSectionGray({ text }) {
  return (
      <button className="w-40 relative h-14 border-4 border-blue-500 border-ridge outline-none bg-transparent text-white transition duration-100 rounded-md text-base font-bold after:absolute after:bg-zinc-900  after:-top-2 after:left-2 after:w-11/12 after:h-2/5 after:transition after:duration-500 after:origin-center before:absolute before:bg-zinc-900  before:top-10 before:left-2 before:w-11/12 before:h-2/5 before:transition before:duration-500 before:origin-center hover:before:scale-0 hover:after:scale-0  hover:shadow-[inset_0px_0px_25px_rgba(0,0,0,0.3)] hover:shadow-blue-500 mr-2" >
          {text}
      </button>

  )

}


export function BtnSectionAbajo() {
  return (
    <div className='flex relative'>
      <button className="w-18 h-14 flex items-center justify-center mr-2 ">
        <Instagram className="text-pink-500 hover:text-white bg-white hover:bg-pink-500 rounded-full hover:scale-125  transition hover:pointer" />
      </button>
      <button className="w-18 h-14 flex items-center justify-center mr-2 ">
        <Twitter className="text-sky-500 bg-white rounded-full  hover:scale-125  transition hover:pointer hover:bg-sky-500 hover:text-white" />
      </button>
      <button className="w-18 h-14 flex items-center justify-center mr-2">
        <Github className="text-black bg-white rounded-full  hover:scale-125  transition hover:pointer hover:bg-black hover:text-white" />
      </button>
    </div>
  );
}


// export function BtnSection2({ text }) {
//   return (
//       <button className="h-auto w-auto text-lg px-8 mr-2 py-4 border-none outline-none rounded-md uppercase bg-indigo-900 text-white font-bold transition duration-500 shadow-md hover:bg-gradient-to-r from-indigo-900 via-indigo-700 to-indigo-900 active:scale-95">
//           {text}
//       </button>

//   )

// }