
import Footer from "../../components/navigation/Footer"
import Navbar from "../../components/navigation/Navbar"
import Layouts from "../../hocs/layouts/Layouts"
import imagent4 from "assets/img/cognibot2.webp"
import { BannerAbout } from "components/about/BannerAbout"
import { Skill } from "components/about/Skill"
import { Experiencia } from "components/about/Experiencia"
import { Helmet } from 'react-helmet-async';

function Sobremi() {
    return (
        <Layouts>
            <Helmet>
                <title>CogniBot | About us</title>
                <meta name="description" content="Agencia de software y marketing digital Chile. Servicios de creacion de pagina web y desarrollo de aplicaciones." />
                <meta name="keywords" content='agencia de software, agencia de marketing, creacion de pagina web, chile' />
                <meta name="robots" content='all' />
                <link rel="canonical" href="https://www.cognibot.dev" />
                <meta name="author" content='Cognibot' />
                <meta name="publisher" content='Cognibot' />

                {/* Social Media Tags */}
                <meta property="og:title" content='Cognibot | Software Agency' />
                <meta property="og:description" content='Agencia de software y marketing digital Chile. Servicios de creacion de pagina web y desarrollo de aplicaciones.' />
                <meta property="og:url" href="https://www.cognibot.dev" />
                <meta property="og:image" content={imagent4} />

                <meta name="twitter:title" content='Cognibot | Software Agency' />
                <meta
                    name="twitter:description"
                    content='Agencia de software y marketing digital Chile. Servicios de creacion de pagina web y desarrollo de aplicaciones.'
                />
                <meta name="twitter:image" content={imagent4} />
                <meta name="twitter:card" content="summary_large_image" />
            </Helmet>
            <Navbar />
            <div className="pt-24 ">
                <BannerAbout />
                <Skill />
                <Experiencia />

                <Footer />
            </div>

        </Layouts>
    )
}
export default Sobremi