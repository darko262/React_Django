
import imagent3 from "../../assets/img/sebas.png";
// import { BtnSection, BtnSectionAbajo } from "../home/BtnSection";
import Fondo from "components/iconos/Fondo";

export function BannerAbout() {
    return (
        <section className="relative items-center flex md:h-screen  w-auto  min-h-screen">
            <Fondo posicion={"top-1/2 "} />
            <Fondo posicion={"right-0 "} />
            <div className="flex md:flex-row flex-col w-full h-full">
                <div className="w-full  flex flex-col justify-center  h-full md:h-auto  px-9">
                    <h2 className="text-6xl text-white mb-5 text-center"> Sobre <span className="text-blue-500"> Mi</span></h2>
                    <p className="text-white "> sconocido usó una galería de textos y los mezcló de tal manera que logró hacer un libro de textos especimen. No sólo sobrevivió 500 años, sino que tambien ingresó como texto de relleno en documentos electrónicos, quedando esencialmente igual al original. Fue popularizado en los 60s con la creación de las hojas "Letraset", las cuales contenian pasajes de Lorem Ipsum, y más recientemente con software de autoedición, como por ejemplo Aldus PageMaker, el cual incluye versiones de Lorem Ipsum.</p>



                </div>
                <div className="flex justify-center items-center  w-full h-full ">
                    <img src={imagent3} alt="" className="h-auto w-auto md:h-full grayscale " />
                </div>
            </div>
        </section>

    )
}
