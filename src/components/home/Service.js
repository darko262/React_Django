import { BoxService, BoxServiceSombra } from "components/iconos/BoxService";
import imagent from "../../assets/img/logomid23.png";
import { BtnSection, BtnSectionAbajo } from "./BtnSection";
import backen from "../../assets/img/backe.png"
export function Servicios() {
    return (
      <section className="max-h-screen lg:min-h-screen w-full bg-black py-28 lg:py-14 md:px-9 ">
        <h2 className="text-center text-6xl text-white mb-5"> Mis<span className="text-blue-500"> Servicios</span></h2>
        <div className="flex md:flex-row flex-col w-full h-full ">
          <div className="md:w-1/2 w-full flex flex-col justify-center items-center justify-items-center  text-center">
            <h2 className="text-4xl text-white pb-5">Innovación en cada línea de código</h2>
          
            <BtnSection text="Contactame" />
          </div>
          <div className="md:w-1/2 w-full h-full flex flex-row justify-center items-center pt-8 lg:pt-0">
            <div className="flex flex-row  flex-wrap">
              <BoxService logo={backen} titulo="Hola" parrafo="asjdojasdoasjasdj" />
              <BoxServiceSombra logo={backen} titulo="Hola" parrafo="asjdojasdoasjasdj" />
              <BoxServiceSombra logo={backen} titulo="Hola" parrafo="asjdojasdoasjasdj" />
              <BoxService logo={backen} titulo="Hola" parrafo="asjdojasdoasjasdj" />
            </div>
          </div>
        </div>
      </section>
    );
  }
  