import { BoxProyectos } from "components/iconos/BoxProyectos";
import { useEffect, useState } from "react";
import { motion } from 'framer-motion'
import axios from 'axios';

export function Recientes() {


    const [proyect, setProyect] = useState([]);
    

    useEffect(() => {
        async function loadProyectos() {
            try {
                const url = 'https://padillacode.pythonanywhere.com/api/blog/list';
                const res = await axios.get(url);
                setProyect(res.data.results.posts);
                
                console.log(res.data.results.posts);
               
            } catch (error) {
                console.log(error.message);
                
                
            }
        }

        loadProyectos();
    }, []);


    return (
        <section className=" w-5/6 min-h-screen  mx-auto   ">
            {/* <Fondo posicion={"top-1/2  "} /> */}
            {/* <Fondo posicion={" right-0"} /> */}
            <div className="container "
            >
                <h2 className="text-center text-3xl md:text-6xl text-white mb-7 font-mono">
                    Proyectos <span className="text-blue-500">Recientes</span>

                </h2>
                <div className="  lg:flex lg:flex-row lg:w-full lg:flex-wrap lg:h-full lg:justify-center "
                >
                    {proyect.map(post => (
                        <motion.div key={post.id}
                            initial={{ opacity: 0, scale: 0.5 }}
                            transition={{ duration: 0.5 }}
                            whileInView={{ opacity: 1, scale: 1 }} 
                            className=" pb-2">
                            

                            <BoxProyectos titulo={post.title} logo={post.thumbnail} parrafo={post.description} slug={post.slug} lenguaje={post.languages.map(language => language.name)}  />

                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
}
