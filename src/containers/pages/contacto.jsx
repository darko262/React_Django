import Footer from "../../components/navigation/Footer"
import Navbar from "../../components/navigation/Navbar"
import Layouts from "../../hocs/layouts/Layouts"
import { Helmet } from 'react-helmet-async';
import imagent4 from "assets/img/cognibot2.webp"

// import { useParams } from "react-router-dom";
import { Contactoss } from "components/contacto/Contacto"

function Contacto() {
    // const { slug } = useParams();
    // console.log(slug);
    
    return (
        
        <Layouts>
             <Helmet>
                <title>CogniBot | Contact us</title>
                <meta name="description" content="Somos una agencia de software y marketing digital en Chile, especializada en desarrollo frontend y backend para sitios web, análisis de datos, proyectos electrónicos y soluciones basadas en inteligencia artificial. Transformamos tus ideas en realidad." />
                <meta name="keywords" content='agencia de software, agencia de marketing, creacion de pagina web, chile' />
                <meta name="robots" content='all' />
                <link rel="canonical" href="https://www.cognibot.dev" />
                <meta name="author" content='Cognibot' />
                <meta name="publisher" content='Cognibot' />

                {/* Social Media Tags */}
                <meta property="og:title" content='Cognibot | Software Agency' />
                <meta property="og:description" content='Somos una agencia de software y marketing digital en Chile, especializada en desarrollo frontend y backend para sitios web, análisis de datos, proyectos electrónicos y soluciones basadas en inteligencia artificial. Transformamos tus ideas en realidad.' />
                <meta property="og:url" href="https://www.cognibot.dev" />
                <meta property="og:image" content={imagent4} />

                <meta name="twitter:title" content='Cognibot | Software Agency' />
                <meta
                    name="twitter:description"
                    content='Somos una agencia de software y marketing digital en Chile, especializada en desarrollo frontend y backend para sitios web, análisis de datos, proyectos electrónicos y soluciones basadas en inteligencia artificial. Transformamos tus ideas en realidad.'
                />
                <meta name="twitter:image" content={imagent4} />
                <meta name="twitter:card" content="summary_large_image" />
            </Helmet>
            <Navbar />
            <Contactoss/>
            
            <Footer />
            
            {/* </div> */}
        </Layouts>
    )
}
export default Contacto