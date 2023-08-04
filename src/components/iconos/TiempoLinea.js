import { VerticalTimeline, VerticalTimelineElement } from "react-vertical-timeline-component"
import 'react-vertical-timeline-component/style.min.css';
import { FaPython, FaReact } from 'react-icons/fa'
import { SiCsharp, SiNvidia } from 'react-icons/si'



export function LineaDeTiempo({ imagen }) {
    return (
        <VerticalTimeline lineColor="white">
            <VerticalTimelineElement
                className="vertical-timeline-element--work"
                contentStyle={{ background: 'rgb(86,17,57)', color: '#fff' }}

                date="Septiembre 2022 - Presente"
                contentArrowStyle={{ borderRight: '7px solid  rgb(86,17,57)' }}
                iconStyle={{ background: 'rgb(86,17,57)', color: '#fff' }}

                icon={<FaReact />}


            >
                <h3 className="vertical-timeline-element-title ">Ingeniero</h3>
                <h4 className="vertical-timeline-element-subtitle ">Temuco, CL</h4>
                <p className="">
                Exploración de programación web con énfasis en automatización utilizando Python y el framework Django. Integración de interfaces interactivas con React para proyectos más dinámicos y eficientes.
                </p>
            </VerticalTimelineElement>
            <VerticalTimelineElement
                className="vertical-timeline-element--work"
                contentStyle={{ background: 'rgb(33, 150, 243)', color: '#fff' }}
                contentArrowStyle={{ borderRight: '7px solid  rgb(33, 150, 243)' }}
                date="Marzo 2022 - Junio 2022"
                iconStyle={{ background: 'rgb(33, 150, 243)', color: '#fff' }}
                icon={<FaPython />}


            >
                <h3 className="vertical-timeline-element-title">Investigador Asociado</h3>
                <h4 className="vertical-timeline-element-subtitle">Lautaro, CL</h4>
                <p>

                    En EAGON LAUTARO S.A, marzo a junio 2022, se concluyó un proyecto de detección de anomalías en chapa de madera, se implementó detección de humo en calderas y se realizó web scraping para mejorar eficiencia y control en producción.
                </p>
            </VerticalTimelineElement>
            <VerticalTimelineElement
                className="vertical-timeline-element--work"
                contentStyle={{ background: 'rgb(86,17,57)', color: '#fff' }}

                date="Noviembre 2021 - Marzo 2022"
                contentArrowStyle={{ borderRight: '7px solid  rgb(86,17,57)' }}
                iconStyle={{ background: 'rgb(86,17,57)', color: '#fff' }}

                icon={<SiNvidia />}


            >
                <h3 className="vertical-timeline-element-title ">Investigador Asociado</h3>
                <h4 className="vertical-timeline-element-subtitle ">Lautaro, CL</h4>
                <p className="">
                    Lideré investigación y desarrollo de prototipo IA para detectar defectos en chapas de madera, logrando una segregación precisa basada en la calidad. Identificamos todas las calidades requeridas por EAGON LAUTARO, obteniendo un 80% de precisión en la clasificación y demostrando eficiencia en la automatización de categorización en madera contrachapada.
                </p>
            </VerticalTimelineElement>
            <VerticalTimelineElement
                className="vertical-timeline-element--work"
                contentStyle={{ background: 'rgb(33, 150, 243)', color: '#fff' }}
                contentArrowStyle={{ borderRight: '7px solid  rgb(33, 150, 243)' }}
                date="Abril 2021 - Agosto 2021"
                iconStyle={{ background: 'rgb(33, 150, 243)', color: '#fff' }}
                icon={<SiCsharp />}


            >
                <h3 className="vertical-timeline-element-title">Investigador Asociado</h3>
                <h4 className="vertical-timeline-element-subtitle">Temuco, CL</h4>
                <p>

                Proyecto médico centrado en la creación de un sistema de adquisición y gestión de datos de sensores. Junto a un equipo liderado por un anestesista, creamos un modelo predictivo de umbrales de dolor en trabajo de parto, sentando bases para futuras investigaciones y mejoras en la anestesia en este contexto.
                </p>
            </VerticalTimelineElement>
        </VerticalTimeline>
    );
}



//   export function LineaDeTiempo({ imagen }) {
//     return (
//       <div className="relative border-l-blue-500 h-52 w-4/5 border-l-8 ">
//         <div className="absolute h-14 w-14 top-20 -left-8 rounded-full ">
//           <img src={imagen} className="w-full h-full" alt=""></img>
//         </div>
//         <div className="text-center flex items-center justify-center h-full ml-5">
//           <p className="text-white">
//             No sólo sobrevivió 500 años, sino que tambien ingresó como texto de relleno en documentos electrónicos,
//             quedando esencialmente igual al original. Fue popularizado en los 60s con la creación de las hojas
//             "Letraset", las cuales contenian pasajes de Lorem Ipsum, y más recientemente con software de autoedición,
//             como por ejemplo Aldus PageMaker, el cual incluye versiones de Lorem Ipsum.
//           </p>
//         </div>
//       </div>
//     );
//   }
