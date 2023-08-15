
import { BannerPrincipal } from "components/iconos/BannerBlog";
import { useEffect, useState } from "react";
import DOMPurify from 'dompurify'
import { IconosProgramacion } from "components/iconos/IconosProgramacion";
import axios from 'axios';

export function BannerBlog(slug) {
    const [proyect, setProyect] = useState([]);
    const [category, setCategory] = useState([]);
    const [languages, setLanguages] = useState([]);



    useEffect(() => {
        window.scrollTo(0, 0)
        async function loadProyectos() {
            try {
                const parametro = slug.slug
                const url = `https://www.cognibot.dev/api/blog/detail/${parametro}`;
                const res = await axios.get(url);


                setProyect(res.data.post);

                setCategory(res.data.post.category);
                setLanguages(res.data.post.languages);
                
                // console.log(res.data.post.languages)

            } catch (error) {
                console.log(error.message);


            }


        }
        loadProyectos();
    }, [slug.slug]);
    return (
        <div >
            <BannerPrincipal title={proyect.title} description={proyect.description} published={proyect.published} time_read={proyect.time_read} imagent4={proyect.thumbnail} />
            <div className="relative isolate overflow-hidden bg-white px-6 py-0 lg:overflow-visible lg:px-0 pt-4 ">

                <div className="absolute inset-0 -z-10 overflow-hidden">
                    <svg className="absolute left-[max(50%,25rem)] top-0 h-[64rem] w-[128rem] -translate-x-1/2 stroke-gray-200 [mask-image:radial-gradient(64rem_64rem_at_top,white,transparent)]" aria-hidden="true">
                        <defs>
                            <pattern id="e813992c-7d03-4cc4-a2bd-151760b470a0" width="200" height="200" x="50%" y="-1" patternUnits="userSpaceOnUse">
                                <path d="M100 200V.5M.5 .5H200" fill="none" />
                            </pattern>
                        </defs>
                        <svg x="50%" y="-1" className="overflow-visible fill-gray-50">
                            <path d="M-100.5 0h201v201h-201Z M699.5 0h201v201h-201Z M499.5 400h201v201h-201Z M-300.5 600h201v201h-201Z" stroke-width="0" />
                        </svg>
                        <rect width="100%" height="100%" stroke-width="0" fill="url(#e813992c-7d03-4cc4-a2bd-151760b470a0)" />
                    </svg>
                </div>
                <div className="mx-auto grid max-w-2xl grid-cols-1 gap-x-8 gap-y-16 lg:mx-0 lg:max-w-none lg:grid-cols-2 lg:items-start lg:gap-y-10">
                    <div className="lg:col-span-2 lg:col-start-1 lg:row-start-1 lg:mx-auto lg:grid lg:w-full lg:max-w-7xl lg:grid-cols-2 lg:gap-x-8 lg:px-8">
                        <div className="lg:pr-4">
                            <div className="lg:max-w-lg text-center">
                                <h3 className="text-base font-semibold leading-7 text-blue-500">{category.name},

                                </h3>

                                <h1 className="mt-2 text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">{proyect.title}</h1>
                                <p className="mt-6 text-xl leading-8 text-gray-700">{proyect.description}</p>

                            </div>
                        </div>
                    </div>
                    <div className="-ml-12 -mt-12 p-12 lg:sticky lg:top-4 lg:col-start-2 lg:row-span-2 lg:row-start-1 lg:overflow-hidden">
                        {proyect.media_file ? (
                            <video className="w-[20rem] max-w-none rounded-xl bg-gray-900 shadow-xl ring-1 ring-gray-400/10 sm:w-[30rem]">
                                <source src={proyect.media_file} type="video/mp4" />
                                Tu navegador no soporta el elemento de video.
                            </video>
                        ) : (
                            <img className="w-[20rem] max-w-none rounded-xl bg-gray-900 shadow-xl ring-1 ring-gray-400/10 sm:w-[30rem]" src={proyect.thumbnail} alt="imagen" />
                            
                        )}
                    </div>

                    <div className="lg:col-span-2 lg:col-start-1 lg:row-start-2 lg:mx-auto lg:grid lg:w-full lg:max-w-7xl lg:grid-cols-2 lg:gap-x-8 lg:px-8">
                        <div className="lg:pr-4">
                            <div className="max-w-xl text-base leading-7 text-gray-700 lg:max-w-lg pb-20">

                                <p dangerouslySetInnerHTML={{ __html: DOMPurify.sanitize(proyect.content) }} />


                            </div>
                            <h3 className=" text-blue-500 pb-10"> Lenguajes de programacion utilizados:</h3>
                            <div className="min-h-20 lg:h-10 w-full bg-transparent grid grid-cols-6 place-content-center  pb-6">

                                {languages.map((language) => (
                                    <div className="h-full lg:w-10 w-20 " key={language.id}>

                                        <IconosProgramacion name={language.name} />


                                    </div>
                                ))}
                            </div>

                        </div>

                    </div>


                </div>
            </div >
        </div>


    )
}