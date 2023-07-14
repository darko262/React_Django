

import backen from "../../assets/img/otro.jpg"
import { BoxProyectos } from "components/iconos/BoxProyectos";
import { getAllProyectos } from "api/Proyecto.api";
import { useEffect, useState } from "react";
import { motion } from 'framer-motion'
import Fondo from "components/iconos/Fondo";




export function Recientes() {

    // const [proyect, setProyect] = useState([]);
    // // const [languages, setLanguages] = useState([]);

    // useEffect(() => {
    //     async function loadProyectos() {
    //         const res = await getAllProyectos();

    //         setProyect(res.data.results.posts)
    //         // setProyect(res.data.results.posts)

    //         console.log(res.data.results.posts);
    //     }
    //     loadProyectos();
    // }, []);
    const [proyect, setProyect] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
        async function loadProyectos() {
            try {
                const res = await getAllProyectos();
                setProyect(res.data.results.posts);
                setLoading(false);
               
            } catch (error) {
                setError(error.message);
                setLoading(false);
            }
        }

        loadProyectos();
    }, []);

    // if (loading) {
    //     return <div>Loading...</div>;
    // }

    // if (error) {
    //     return <div>Error: {error}</div>;
    // }




    return (
        <section className="w-auto min-h-screen  md:px-20 relative ">
            <Fondo posicion={"top-1/2  "} />
            <Fondo posicion={" right-0"} />
            <motion.div className="container z-10 "
            >
                <h2 className="text-center text-3xl md:text-6xl text-white mb-7">
                    Proyectos <span className="text-blue-500">Recientes</span>

                </h2>
                <motion.div className="lg:flex lg:flex-row lg:w-full lg:flex-wrap lg:h-full lg:justify-center z-10 "
                >
                    {proyect.map(post => (
                        <motion.div key={post.id}
                            initial={{ opacity: 0, scale: 0.5 }}
                            transition={{ duration: 0.5 }}
                            whileInView={{ opacity: 1, scale: 1 }} >

                            <BoxProyectos titulo={post.title} logo={post.thumbnail} parrafo={post.description} slug={post.slug} lenguaje={post.languages.map(language => language.name)} />
                            {/* <BoxProyectos titulo={post.title} logo={backen} parrafo={post.description} slug={post.slug}  lenguaje={[post.languages.name]}/> */}

                        </motion.div>


                        // <div key={post.id} >
                        //     <BoxProyectos titulo={post.title} logo={post.thumbnail} />
                        // </div>
                    ))}
                </motion.div>
            </motion.div>
        </section>
    );
}
