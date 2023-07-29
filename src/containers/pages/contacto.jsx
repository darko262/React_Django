import Footer from "../../components/navigation/Footer"
import Navbar from "../../components/navigation/Navbar"
import Layouts from "../../hocs/layouts/Layouts"

// import { useParams } from "react-router-dom";
import { Contactoss } from "components/contacto/Contacto"

function Contacto() {
    // const { slug } = useParams();
    // console.log(slug);
    
    return (
        
        <Layouts>
            <Navbar />
            <Contactoss/>
            
            <Footer />
            
            {/* </div> */}
        </Layouts>
    )
}
export default Contacto