import { BoxService, BoxServiceSombra } from "components/iconos/BoxService";
import imagent from "../../assets/img/logomid23.png";
import { BtnSection, BtnSectionAbajo } from "./BtnSection";
import backen from "../../assets/img/porta1.webp"
import { BoxProyectos } from "components/iconos/BoxProyectos";
// export function Recientes() {
//     return (
//       <section className="w-full h-screen bg-zinc-900 py-3.5 md:px-20">
//         <div className="container">
//           <h2 className="text-center text-3xl md:text-6xl text-white mb-7">
//             Proyectos <span className="text-blue-500">Recientes</span>
//           </h2>
  
//           <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
//             <BoxProyectos logo={backen} />
//             <BoxProyectos logo={backen} />
//             <BoxProyectos logo={backen} />
            
//           </div>
//         </div>
//       </section>
//     );
//   }
  


export function Recientes() {
    return (
        <section className="w-auto min-h-screen bg-zinc-900 py-28 md:px-20 ">
            <div className="container ">
                <h2 className="text-center text-3xl md:text-6xl text-white mb-7">
                    Proyectos <span className="text-blue-500">Recientes</span>
                </h2>

                <div className="flex lg:flex-row w-full flex-wrap h-full">
                    <BoxProyectos logo={backen} />
                    <BoxProyectos logo={backen} />
                    <BoxProyectos logo={backen} />
                    <BoxProyectos logo={backen} />
                    <BoxProyectos logo={backen} />
                    <BoxProyectos logo={backen} />
                    <BoxProyectos logo={backen} />
                    
                    

                </div>
            </div>
        </section>
    );
}
