
import Footer from "../../components/navigation/Footer"
import Navbar from "../../components/navigation/Navbar"
import Layouts from "../../hocs/layouts/Layouts"
import { About } from "components/home/About"
import { Recientes } from "components/home/Proyectos"
import { Referencia } from "components/home/Referencia"
import { Contact } from "components/home/ContactDos"
import { BannerTres } from "components/home/BannerTres"

function Home() {
    return (
       
        <Layouts >
            <Navbar />
            <BannerTres />
            <About />
            <Recientes />
            <Referencia />
            <Contact/>
            <Footer />
        
        </Layouts>
        
    )
}
export default Home