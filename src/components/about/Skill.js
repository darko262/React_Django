import { BoxSkill } from "components/iconos/BoxSkill";
// import logoss  from "../../assets/img/"
import backen from "../../assets/img/html2.png"
import python from "../../assets/img/python.png"
import css from "../../assets/img/css.png"

export function Skill(){
    return(
        <section className=" min-h-96 bg-zinc-900 py-28">
            <h2 className="text-6xl text-white mb-5 text-center"> Mi <span className="text-blue-500">Skill</span></h2>
            <div className="grid lg:grid-cols-4  grid-cols-2 sm:mx-36">
            <BoxSkill logo={backen}/>
            
            <BoxSkill logo={python}/>
            
            <BoxSkill logo={css}/>
            <BoxSkill logo={backen}/>
            
            </div>
            

        </section>

    )
}