import { VerticalTimeline, VerticalTimelineElement } from "react-vertical-timeline-component"
import 'react-vertical-timeline-component/style.min.css';
import { FaPython, FaReact } from 'react-icons/fa'
import { SiCsharp, SiNvidia } from 'react-icons/si'



export function LineaDeTiempo() {
    return (
        <VerticalTimeline >
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



