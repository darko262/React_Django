import { FaQuoteLeft, FaQuoteRight} from "react-icons/fa"
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
                                <FaQuoteLeft className="text-blue-500 lg:text-6xl text-4xl "/>
                                <p className="text-white relative"> Estamos encantados con la página web creada por tu equipo. Con su atención meticulosa a los detalles, combinada con una excelente ejecución, dio como resultado una plataforma que realmente refleja nuestra visión y valores. ¡Gracias por hacer que nuestra presencia en línea sea excepcional!.<FaQuoteRight className="text-blue-500 lg:text-5xl md:text-3xl text-2x1 absolute right-0"/></p>

                            </div>
                            <div className="  w-full  h-10  rounded-2xl   justify-center  items-center flex">
                                <img src={imagent3} className="h-full w-10   bg-gradient-to-b from-slate-500 to-blue-500 rounded-2xl "alt="imgReferencia"></img>
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
                                <FaQuoteLeft className="text-blue-500 lg:text-6xl text-4xl "/>
                                    <p className="text-white relative"> "El equipo superó nuestras expectativas con la página web. Su creatividad y profesionalismo se reflejan en cada detalle, desde el diseño hasta la funcionalidad. Estamos emocionados de presentar nuestra marca en esta plataforma de alta calidad. ¡Gran trabajo!.<FaQuoteRight className="text-blue-500 lg:text-5xl md:text-3xl text-2x1 absolute right-0"/></p>

                                </div>
                                <div className="  w-full  h-10  rounded-2xl   justify-center  items-center flex">
                                    <img src={imagent3} className="h-full w-10   bg-gradient-to-b from-slate-500 to-blue-500 rounded-2xl " alt="imgReferencia"></img>
                                    <div className='text-white ml-4 '>
                                        <h3 className=' text-white'> Nombre</h3>
                                        <h4 className='' >Empresa</h4>
                                    </div>


                                </div>


                            </div>
                        </div>
                    </div>

                </Slider>
            </div>
        </section>

    )
}

