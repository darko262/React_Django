import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

import { faQuoteLeft } from '@fortawesome/free-solid-svg-icons'
import { faQuoteRight } from '@fortawesome/free-solid-svg-icons'
import imagent3 from "../../assets/img/porta3.webp"

import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";


export function Referencia() {
    const settings = {
        dots: true,
        infinite: true,
        arrows: true,
        speed: 500,
        slidesToShow: 1,
        adaptiveHeight: false,
        slidesToScroll: 1,
        responsive: [
            {
                breakpoint: 1024,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1,
                    infinite: true,
                    arrows: false,
                    dots: true
                }
            },
            {
                breakpoint: 600,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1,
                    initialSlide: 1,
                    arrows: false,
                    dots: false
                }
            },
            {
                breakpoint: 480,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1,
                    arrows: false,
                    dots: false
                }
            }
        ]



    };
    return (
        <section className="h-full  py-28 md:py-9  lg:py-28">
            <h2 className="text-3xl md:text-6xl  text-white md:mb-32  mb-12 text-center font-mono "> Experiencias <span className="text-blue-500">Satisfechas</span></h2>
            <div className='  w-3/4 lg:w-2/4 mx-auto h-full'>
                <Slider {...settings}>
                    <div>
                        <div className=" grid grid-cols-1 gap-4 mx-4" alt="Slide 1">
                            <div className="  w-full h-full   ">
                                <FontAwesomeIcon className="text-blue-500 lg:text-6xl text-4xl " icon={faQuoteLeft} />
                                <p className="text-white relative"> Estamos encantados con la página web creada por tu equipo. Con su atención meticulosa a los detalles, combinada con una excelente ejecución, dio como resultado una plataforma que realmente refleja nuestra visión y valores. ¡Gracias por hacer que nuestra presencia en línea sea excepcional!.<FontAwesomeIcon className="text-blue-500 lg:text-5xl md:text-3xl text-2x1 absolute right-0" icon={faQuoteRight} /></p>

                            </div>
                            <div className="  w-full  h-10  rounded-2xl   justify-center  items-center flex">
                                <img src={imagent3} className="h-full w-10   bg-gradient-to-b from-slate-500 to-blue-500 rounded-2xl "></img>
                                <div className='text-white ml-4 '>
                                    <h3 className=' text-white'> Cecilia Alvarez</h3>
                                    <h4 className='' >SmartPet</h4>
                                </div>


                            </div>


                        </div>
                    </div>
                    <div>
                        <div>
                            <div className=" grid grid-cols-1 gap-4" alt="Slide 2">
                                <div className="  w-full h-full   ">
                                    <FontAwesomeIcon className="text-blue-500 lg:text-6xl text-4xl " icon={faQuoteLeft} />
                                    <p className="text-white relative"> "El equipo superó nuestras expectativas con la página web. Su creatividad y profesionalismo se reflejan en cada detalle, desde el diseño hasta la funcionalidad. Estamos emocionados de presentar nuestra marca en esta plataforma de alta calidad. ¡Gran trabajo!.<FontAwesomeIcon className="text-blue-500 lg:text-5xl md:text-3xl text-2x1 absolute right-0" icon={faQuoteRight} /></p>

                                </div>
                                <div className="  w-full  h-10  rounded-2xl   justify-center  items-center flex">
                                    <img src={imagent3} className="h-full w-10   bg-gradient-to-b from-slate-500 to-blue-500 rounded-2xl "></img>
                                    <div className='text-white ml-4 '>
                                        <h3 className=' text-white'> Nombre</h3>
                                        <h4 className='' >Empresa</h4>
                                    </div>


                                </div>


                            </div>
                        </div>
                    </div>
                    {/* <div>
                        <div className=" flex justify-center " alt="Slide 1">
                            <div className="lg:h-96 lg:w-1/2  w-3/4 relative rounded-2xl "  >
                                <div className=" lg:absolute w-full lg:h-96 lg:w-56 h-44 lg:-left-16 rounded-2xl lg:bg-gradient-to-b lg:from-slate-500 lg:to-blue-500 flex justify-center ">
                                    <img src={imagent3} className="lg:h-72 h-full w-52 lg:absolute lg:top-14 bg-gradient-to-b from-slate-500 to-blue-500 rounded-2xl lg:bg-gradient-to-b lg:from-tranparent lg:to-transparent"></img>


                                </div>
                                <div className=" lg:absolute lg:left-44 top-0 md:mx-6  w-full h-full   ">
                                    <FontAwesomeIcon className="text-blue-500 lg:text-6xl text-4xl " icon={faQuoteLeft} />
                                    <p className="text-white relative"> sconocido usó una galería de textos y los mezcló de tal manera que logró hacer un libro de textos especimen. No sólo sobrevivió 500 años, sino que tambien ingresó como texto de relleno en documentos electrónicos, quedando esencialmente igual al original. Fue popularizado en los 60s con la creación de las hojas "Letraset", las cuales contenian pasajes de Lorem Ipsum, y más recientemente con software de autoedición, como por ejemplo Aldus PageMaker, el cual incluye versiones de Lorem Ipsum.<FontAwesomeIcon className="text-blue-500 lg:text-5xl md:text-3xl text-2x1 absolute right-0" icon={faQuoteRight} /></p>

                                </div>



                            </div>
                        </div>

                    </div> */}


                </Slider>
            </div>

            {
            /* <div className=" h-full">
            <CarouselComponent imagen={imagent3} />
            </div> */}
            {/* <CarouselComponent image={imagent32} /> */}

        </section>

    )
}



// <div id="default-carousel" class="relative w-full" data-carousel="slide">
//                 <div class="relative h-56 overflow-hidden rounded-lg md:h-96">
{/* <div className=" lg:absolute lg:h-96 w-full  h-44 lg:-left-16 lg:-top-16 rounded-2xl lg:bg-gradient-to-b lg:from-slate-500 lg:to-blue-500 justify-center flex">
                        <img src={imagent3} className="lg:h-72 h-full w-52 lg:absolute lg:top-14 bg-gradient-to-b from-slate-500 to-blue-500 rounded-2xl5"></img> */}
//                     <div class="hidden duration-700 ease-in-out" data-carousel-item>
//                         <img  src={imagent3} alt=""className="absolute block w-full -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2 " />
//                     </div>
//                     <div class="hidden duration-700 ease-in-out" data-carousel-item>
//                         <img  src={imagent3} alt=""className="absolute block w-full -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2  " />
//                     </div>

//                 </div>
//             </div>

// export function Referencia() {
//     var settings = {
//         dots: true,
//         infinite: true,
//         speed: 500,
//         slidesToShow: 1,
//         slidesToScroll: 1

//     };
//     return (
//         <section className="min-h-screen md:min-h-96 bg-black py-28 ">
//             <h2 className="text-6xl text-white md:mb-32  mb-12 text-center "> Mis <span className="text-blue-500">Referencias</span></h2>
//             <Slider {...settings}>
//                 <div >
//                     <div className=" flex justify-center " alt="Slide 1">
//                         <div className="md:h-96 md:w-1/2  h-32 w-full relative rounded-2xl "  >
//                             <div className=" md:absolute md:h-96 w-full  md:w-56 h-44 md:-left-16 rounded-2xl md:bg-gradient-to-b md:from-slate-500 md:to-blue-500 flex justify-center ">
//                                 <img src={imagent3} className="md:h-72 h-full w-52 md:absolute md:top-14 bg-gradient-to-b from-slate-500 to-blue-500 rounded-2xl md:bg-gradient-to-b md:from-tranparent md:to-transparent"></img>


//                             </div>
//                             <div className=" md:absolute md:left-44 top-0 mx-6 md:top-0 md:w-2/3">
//                                 <FontAwesomeIcon className="text-blue-500 md:text-6xl text-4xl " icon={faQuoteLeft} />
//                                 <p className="text-white "> sconocido usó una galería de textos y los mezcló de tal manera que logró hacer un libro de textos especimen. No sólo sobrevivió 500 años, sino que tambien ingresó como texto de relleno en documentos electrónicos, quedando esencialmente igual al original. Fue popularizado en los 60s con la creación de las hojas "Letraset", las cuales contenian pasajes de Lorem Ipsum, y más recientemente con software de autoedición, como por ejemplo Aldus PageMaker, el cual incluye versiones de Lorem Ipsum.</p>
//                                 <FontAwesomeIcon className="text-blue-500 md:text-6xl text-4xl absolute right-0" icon={faQuoteRight} />
//                             </div>



//                         </div>
//                     </div>
//                 </div>
//                 <div >
//                     <div className=" flex justify-center " alt="Slide 2">
//                         <div className="md:h-96 md:w-1/2  h-32 w-full relative rounded-2xl "  >
//                             <div className=" md:absolute md:h-96 w-full  md:w-56 h-44 md:-left-16 rounded-2xl md:bg-gradient-to-b md:from-slate-500 md:to-blue-500 flex justify-center ">
//                                 <img src={imagent32} className="md:h-72 h-full w-52 md:absolute md:top-14 bg-gradient-to-b from-slate-500 to-blue-500 rounded-2xl md:bg-gradient-to-b md:from-tranparent md:to-transparent"></img>


//                             </div>
//                             <div className=" md:absolute md:left-44 top-0 mx-6 md:top-0 md:w-2/3">
//                                 <FontAwesomeIcon className="text-blue-500 md:text-6xl text-4xl " icon={faQuoteLeft} />
//                                 <p className="text-white "> sconocido usó una galería de textos y los mezcló de tal manera que logró hacer un libro de textos especimen. No sólo sobrevivió 500 años, sino que tambien ingresó como texto de relleno en documentos electrónicos, quedando esencialmente igual al original. Fue popularizado en los 60s con la creación de las hojas "Letraset", las cuales contenian pasajes de Lorem Ipsum, y más recientemente con software de autoedición, como por ejemplo Aldus PageMaker, el cual incluye versiones de Lorem Ipsum.</p>
//                                 <FontAwesomeIcon className="text-blue-500 md:text-6xl text-4xl absolute right-0" icon={faQuoteRight} />
//                             </div>



//                         </div>
//                     </div>
//                 </div>


//             </Slider>


//             {
//             /* <div className=" h-full">
//             <CarouselComponent imagen={imagent3} />
//             </div> */}
//             {/* <CarouselComponent image={imagent32} /> */}

//         </section>

//     )
// }