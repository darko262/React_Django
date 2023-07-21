
import Footer from "../../components/navigation/Footer"
import Navbar from "../../components/navigation/Navbar"
import Layouts from "../../hocs/layouts/Layouts"

import { BannerAbout } from "components/about/BannerAbout"
import { Skill } from "components/about/Skill"
import { Experiencia } from "components/about/Experiencia"

function Sobremi() {
    return (
        <Layouts>
            <Navbar />
            <div className="pt-24 ">
            <BannerAbout />
            <Skill/>
            <Experiencia/>
            {/* <section className="section">
                    
                </section> */}
            {/* <div className="pt-28 lg:pt-0"> */}
            <Footer />
            </div>
            {/* </div> */}
        </Layouts>
    )
}
export default Sobremi