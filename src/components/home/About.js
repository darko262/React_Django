import imagent from "../../assets/img/logomid23.png";
import imagent2 from "../../assets/img/seba22.png";
import imagent3 from "../../assets/img/seba.gif";
import imagent4 from "../../assets/img/terminator3.gif";
import { BtnSection, BtnSectionGray } from "./BtnSection";
export function About() {
    return (
        <section className=" md:px-9 sm:pb-8 min-h-screen bg-zinc-900 py-28 ">
            <h2 className="text-center text-6xl text-white mb-5"> Sobre <span className="text-blue-500"> Mi</span></h2>
            <div className=" relative h-60 w-60 bg-white  m-auto rounded-full mb-14">
                <div className="pt-0 w-full h-full bg-blue-500 rounded-full ">
                    <img src={imagent4} alt="about"  className="object-contain h-full w-full absolute left-1 rounded-full "/>
                </div>
            </div>
            <div className="">
            <h2 className="text-4xl text-white pb-3 font-bold webkit text-center">Ingeniero Civil Electrónico</h2>
                <div className="flex md:flex-row flex-col pt-5">
                    <div className="flex md:w-1/2 mx-5">
                        <p className="text-white"> sconocido usó una galería de textos y los mezcló de tal manera que logró hacer un libro de textos especimen. No sólo sobrevivió 500 años, sino que tambien ingresó como texto de relleno en documentos electrónicos, quedando esencialmente igual al original. Fue popularizado en los 60s con la creación de las hojas "Letraset", las cuales contenian pasajes de Lorem Ipsum, y más recientemente con software de autoedición, como por ejemplo Aldus PageMaker, el cual incluye versiones de Lorem Ipsum.</p>
                    </div>
                    <div className="flex  md:w-1/2 w-full justify-center items-center pt-4 sm:pt-0" >
                        <BtnSectionGray text="Sobre mi" />
                    </div>

                </div>
            </div>



        </section>



    )
}