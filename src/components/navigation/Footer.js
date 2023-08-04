import { BtnSectionAbajo } from "components/home/BtnSection";
import { BtnSectionAbajoGray } from "components/iconos/IconosProgramacion"

import { connect } from "react-redux";
import { BtnNav } from "./BtnNav";
import Fondo from "components/iconos/Fondo";
import imagent4 from "assets/img/declinado.svg"
import imagent5 from "assets/img/cognibot2.png"

function Footer() {
    return (
        <section className=" h-72  w-full grid place-items-center relative bg-no-repeat bg-cover bg-left" style={{ backgroundImage: `url(${imagent4})` }}>
            {/* <Fondo posicion={" bottom-0 left-1/2  "} /> */}
            <div className="  grid grid-cols-3 ">
                <div className="  grid ">
                    <div className="w-full  grid h-auto place-items-center ">
                        <a href="#" className=" md:h-1/2 md:w-1/2 flex object-contain"> <img src={imagent5} className=" h-auto w-auto mx-auto"></img></a>
                    </div>

                </div>
                <div className=" grid place-items-center justify-start">
                    <div className="lg:h-32 h-full w-full border-l-8 grid lg:grid-cols-3 grid-flow-row border-l-blue-500 place-items-center ">
                        <BtnNav text="Home" ruta="" />
                        <BtnNav text="Nosotros" ruta="about" />
                        {/* <BtnNav text="Servicios" ruta="service" /> */}
                        <BtnNav text="contacto" ruta="contact" />
                    </div>

                </div>
                <div className="w-4/5 mx-auto  grid place-content-center ">
                    <BtnSectionAbajoGray />
                </div>
                {/* <BtnSectionAbajo /> */}

            </div>
        </section>
    )
}

const mapStateToProp = state => ({

})

export default connect(mapStateToProp, {

})(Footer)