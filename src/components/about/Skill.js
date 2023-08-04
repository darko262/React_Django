import { BoxSkill } from "components/iconos/BoxSkill";
// import logoss  from "../../assets/img/"
import backen from "../../assets/img/html2.png"
import python from "../../assets/img/python.webp"
import css from "../../assets/img/css.webp"
import react from "../../assets/img/R.webp"
import {motion}from'framer-motion'

export function Skill(){
    return(
        <section className=" min-h-96  py-28">
            <h2 className="text-6xl text-white mb-5 text-center"> My <span className="text-blue-500">Skill</span></h2>
            <motion.div className="grid lg:grid-cols-4  grid-cols-2 sm:mx-36"
            initial={{ opacity: 0, scale:0.5 }}
            transition={{ duration: 0.5 }}
            whileInView={{ opacity: 1, scale:1 }}>
            <BoxSkill logo={backen} progreso={83}/>
            
            <BoxSkill logo={python} progreso={90}/>
            
            <BoxSkill logo={css} progreso={90}/>
            <BoxSkill logo={react}progreso={90}/>
            
            </motion.div>
            

        </section>

    )
}