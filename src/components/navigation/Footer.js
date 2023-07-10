import { BtnSectionAbajo } from "components/home/BtnSection";

import { connect } from "react-redux";
import { BtnNav } from "./BtnNav";
import Fondo from "components/iconos/Fondo";

function Footer() {
    return (
        <section className="h-96 w-full grid place-items-center relative ">
            <Fondo posicion={" bottom-0 left-1/2  "} />
            <div className=" h-1/2  grid grid-cols-3 ">
                <div className="  grid place-items-center  ">
                    <div className="w-full  grid place-items-center lg:justify-end  ">
                        <h3 className="text-4x1 font-semibold text-white ">PadillaCode.</h3>
                    </div>

                </div>
                <div className=" grid place-items-center justify-start">
                    <div className="lg:h-32 h-full w-full border-l-8 grid lg:grid-cols-4 grid-flow-row border-l-blue-500 place-items-center ">
                        <BtnNav text="Home" />
                        <BtnNav text="Sombre mi" />
                        <BtnNav text="Servicios" />
                        <BtnNav text="Contacto" />
                    </div>

                </div>
                <div className=" grid place-items-center">
                    <BtnSectionAbajo />
                </div>
            </div>
        </section>
    )
}

const mapStateToProp = state => ({

})

export default connect(mapStateToProp, {

})(Footer)