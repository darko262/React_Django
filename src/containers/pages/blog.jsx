import Footer from "../../components/navigation/Footer"
import Navbar from "../../components/navigation/Navbar"
import Layouts from "../../hocs/layouts/Layouts"

import { BannerBlog } from "components/blog/BannerBlog"
import { useParams } from "react-router-dom";

function Blog() {
    const { slug } = useParams();
    // console.log(slug);
    
    return (
        
        <Layouts>
            <Navbar />
            
            <div className=" pt-20">
            
            <BannerBlog slug={slug}/>
            {/* <Experiencia/> */}
            {/* <section className="section">
                    
                </section> */}
            {/* <div className="pt-28 lg:pt-0"> */}
            
            <Footer />
            </div>
            {/* </div> */}
        </Layouts>
    )
}
export default Blog