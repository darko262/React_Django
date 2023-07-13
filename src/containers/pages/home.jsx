import { Banner } from "components/home/Banner"
import Footer from "../../components/navigation/Footer"
import Navbar from "../../components/navigation/Navbar"
import Layouts from "../../hocs/layouts/Layouts"
import { About } from "components/home/About"
import { Servicios } from "components/home/Service"
import { Recientes } from "components/home/Proyectos"
import { Referencia } from "components/home/Referencia"
import { Contact } from "components/home/Contact"
import { BannerDos } from "components/home/BannerDos"
import { BannerTres } from "components/home/BannerTres"

function Home() {
    return (
        // <AnimatePresence>
        <Layouts >
            <Navbar />
            {/* <div className="sm:pt-24 pt-0"> */}
            <BannerTres />
            <About />
            {/* <Servicios /> */}
            <Recientes />
            {/* <Referencia /> */}
            <Contact/>
            {/* <section className="section">
                    
                </section> */}
            {/* <div className="pt-28 lg:pt-0"> */}
            {/* <Footer /> */}
            {/* </div> */}
            {/* </div> */}
        </Layouts>
        // {/* </AnimatePresence> */}
    )
}
export default Home