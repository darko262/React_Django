import { BoxSkill } from "components/iconos/BoxSkill";
import backen from "../../assets/img/html2.png"
import python from "../../assets/img/python.webp"
import css from "../../assets/img/css.webp"
import react from "../../assets/img/R.webp"
import { motion } from 'framer-motion'

export function Skill() {
    const skills = [
        { logo: backen, progreso: 83 },
        { logo: python, progreso: 90 },
        { logo: css, progreso: 90 },
        { logo: react, progreso: 90 }
      ];
    return (
        <section className=" min-h-96  py-28">
            <h2 className="text-6xl text-white mb-5 text-center"> My <span className="text-blue-500">Skill</span></h2>
            <div className="grid lg:grid-cols-4 grid-cols-2 sm:mx-36"
                >
                {skills.map((skill, index) => (
                    <motion.div key={index} initial={{ opacity: 0 , scale: 0.5 }} transition={{ duration: 1, delay: index * 0.2 }} whileInView={{ opacity: 1, scale: 1 }}>
                        <BoxSkill logo={skill.logo} progreso={skill.progreso} />
                    </motion.div>
                ))}
            </div>


        </section>

    )
}