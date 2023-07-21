import { LineaDeTiempo } from "components/iconos/TiempoLinea";
import python from "../../assets/img/python.png"
// import backen from "../../assets/img/html2.png"
<icon icon={python}/>
export function Experiencia(){
    return(
        <section className="min-h-screen  py-28 w-full">
           <h2 className="text-6xl text-white mb-5 text-center"> Mi <span className="text-blue-500">Experiencia</span></h2>
           <div className="grid grid-cols-1  place-items-center">
           <LineaDeTiempo imagen={python}/>
           
           </div>

        </section>

    )
}