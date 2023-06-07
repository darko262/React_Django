import { Carousel } from 'react-responsive-carousel';
import 'react-responsive-carousel/lib/styles/carousel.min.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faEnvelope } from '@fortawesome/free-solid-svg-icons'
import { faQuoteLeft } from '@fortawesome/free-solid-svg-icons'
import { faQuoteRight } from '@fortawesome/free-solid-svg-icons'

export function CarouselComponent({ imagen }) {
    return (
        <Carousel showArrows={true} showStatus={false} showThumbs={true} infiniteLoop={true} dynamicHeight={true}>
            <div>
                <div className=" flex justify-center w-full " alt="Slide 1">
                    <div className="md:h-64 md:w-1/2  h-32 w-full relative rounded-2xl "  >
                        <div className=" md:absolute md:h-96 w-full  md:w-56 h-44 md:-left-16 lg:-top-16 md:top-0 rounded-2xl md:bg-gradient-to-b md:from-slate-500 md:to-blue-500 flex justify-center ">
                            <img src={imagen} className="md:h-72 h-full w-52 md:absolute md:top-14 bg-gradient-to-b from-slate-500 to-blue-500 rounded-2xl md:bg-gradient-to-b md:from-tranparent md:to-transparent"></img>


                        </div>
                        <div className=" md:absolute md:left-44 top-0 mx-6 md:-top-9 md:w-2/3">
                            <FontAwesomeIcon className="text-blue-500 md:text-6xl text-4xl " icon={faQuoteLeft} />
                            <p className="text-white "> sconocido usó una galería de textos y los mezcló de tal manera que logró hacer un libro de textos especimen. No sólo sobrevivió 500 años, sino que tambien ingresó como texto de relleno en documentos electrónicos, quedando esencialmente igual al original. Fue popularizado en los 60s con la creación de las hojas "Letraset", las cuales contenian pasajes de Lorem Ipsum, y más recientemente con software de autoedición, como por ejemplo Aldus PageMaker, el cual incluye versiones de Lorem Ipsum.</p>
                            <FontAwesomeIcon className="text-blue-500 md:text-6xl text-4xl absolute right-0" icon={faQuoteRight} />
                        </div>



                    </div>
                </div>
            </div>
            <div>
                <div className=" flex justify-center w-full " alt="Slide 2">
                    <div className="md:h-64 md:w-1/2  h-32 w-full relative rounded-2xl "  >
                        <div className=" md:absolute md:h-96 w-full  md:w-56 h-44 md:-left-16 lg:-top-16 md:top-0 rounded-2xl md:bg-gradient-to-b md:from-slate-500 md:to-blue-500 flex justify-center ">
                            <img src={imagen} className="md:h-72 h-full w-52 md:absolute md:top-14 bg-gradient-to-b from-slate-500 to-blue-500 rounded-2xl md:bg-gradient-to-b md:from-tranparent md:to-transparent"></img>


                        </div>
                        <div className=" md:absolute md:left-44 top-0 mx-6 md:-top-9 md:w-2/3">
                            <FontAwesomeIcon className="text-blue-500 md:text-6xl text-4xl " icon={faQuoteLeft} />
                            <p className="text-white "> sconocido usó una galería de textos y los mezcló de tal manera que logró hacer un libro de textos especimen. No sólo sobrevivió 500 años, sino que tambien ingresó como texto de relleno en documentos electrónicos, quedando esencialmente igual al original. Fue popularizado en los 60s con la creación de las hojas "Letraset", las cuales contenian pasajes de Lorem Ipsum, y más recientemente con software de autoedición, como por ejemplo Aldus PageMaker, el cual incluye versiones de Lorem Ipsum.</p>
                            <FontAwesomeIcon className="text-blue-500 md:text-6xl text-4xl absolute right-0" icon={faQuoteRight} />
                        </div>



                    </div>
                </div>
            </div>




        </Carousel>
    );
}
