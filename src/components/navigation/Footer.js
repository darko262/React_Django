
import { BtnSectionAbajoGray } from "components/iconos/IconosProgramacion"

import { connect } from "react-redux";
import { BtnNav } from "./BtnNav";

import imagent4 from "assets/img/declinado.svg"
import imagent5 from "assets/img/cognibot2.webp"

function Footer() {
    return (
        <section className=" h-72  w-full grid place-items-center relative bg-no-repeat bg-cover bg-left" style={{ backgroundImage: `url(${imagent4})` }}>

            <div className="  grid grid-cols-3 ">
                <div className="  grid ">
                    <div className="w-full  grid h-auto place-items-center ">
                        <a href="/" className=" h-20  w-32"> <img src={imagent5} alt="logo"></img></a>
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