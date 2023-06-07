import { BtnSectionAbajo } from "components/home/BtnSection";
import { Twitter } from "components/iconos/RedSocial";
import { connect } from "react-redux";
import { BtnNav } from "./BtnNav";

function Footer() {
    return (
        <section className="h-96 w-full bg-black grid place-items-center ">
            <div className=" h-1/2  grid grid-cols-3 ">
                <div className=" bg-black grid place-items-center  ">
                    <div className="h-32 w-32 bg-black grid place-items-center justify-end  ">
                        <a className="text-4x1 font-semibold text-white ">PadillaCode.</a>
                    </div>

                </div>
                <div className=" grid place-items-center justify-start">
                    <div className="h-32 w-full border-l-8 grid lg:grid-cols-4 grid-flow-row border-l-blue-500 place-items-center ">
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