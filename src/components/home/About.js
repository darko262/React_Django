
import { MuestraIcono } from "components/iconos/MuestraIcono";
import {  BoxServiceSombra } from "components/iconos/BoxService";


export function About() {
    return (
        <section className=" relative sm:pb-8 min-h-screen   py-4 " id="service">
            <MuestraIcono />
            <h2 className=" text-3xl md:text-6xl text-center text-white font-mono py-11">Servicios <span className="text-blue-500"> Innovadores</span></h2>

            <div className=" w-4/5 mx-auto h-full flex flex-row  flex-wrap  justify-center items-end ">
                <BoxServiceSombra logo="react" titulo="Sitios Web Personalizados para tu Éxito" parrafo="Creamos sitios web únicos y adaptados a tus necesidades, brindando una experiencia excepcional a tus usuarios. Potencia tu éxito en línea con nuestro desarrollo web a medida." />
                <BoxServiceSombra logo="Python"titulo="Experiencia Completa para tu Sitio Web" parrafo=" Interfaces atractivas. Backend sólido. Éxito asegurado." />
                <BoxServiceSombra logo="ia" titulo="Innovación Tecnológica y SEO Efectivo" parrafo=" Asesoría en innovación tecnológica para el crecimiento y la eficiencia, y estrategias de SEO para mejorar la visibilidad y el rendimiento en línea. Tu éxito digital comienza aquí." />
                <BoxServiceSombra logo="re" titulo="Automatización e Innovación para el Éxito" parrafo="Impulsa tu negocio con nuestra automatización inteligente y soluciones innovadoras. Libera tiempo y recursos, enfócate en la creatividad y prepárate para un futuro exitoso." />

            </div>
        </section>
    )
}