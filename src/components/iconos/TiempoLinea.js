import { VerticalTimeline, VerticalTimelineElement } from "react-vertical-timeline-component"
import 'react-vertical-timeline-component/style.min.css';
import { faUserAstronaut } from '@fortawesome/free-solid-svg-icons'

export function LineaDeTiempo({ imagen }) {
    return (
        <VerticalTimeline lineColor="white">
            <VerticalTimelineElement
                className="vertical-timeline-element--work"
                contentStyle={{ background: 'rgb(33, 150, 243)', color: '#fff' }}
                contentArrowStyle={{ borderRight: '7px solid  rgb(33, 150, 243)' }}
                date="2011 - present"
                iconStyle={{ background: 'rgb(33, 150, 243)', color: '#fff' }}
               

            >
                <h3 className="vertical-timeline-element-title">Creative Director</h3>
                <h4 className="vertical-timeline-element-subtitle">Miami, FL</h4>
                <p>
                    Creative Direction, User Experience, Visual Design, Project Management, Team Leadinggfsdfdsdsfs
                </p>
            </VerticalTimelineElement>
            <VerticalTimelineElement
                className="vertical-timeline-element--work"
                date="2010 - 2011"
                iconStyle={{ background: 'rgb(33, 150, 243)', color: '#fff' }}


            >
                <h3 className="vertical-timeline-element-title">Art Director</h3>
                <h4 className="vertical-timeline-element-subtitle">San Francisco, CA</h4>
                <p>
                    Creative Direction, User Experience, Visual Design, SEO, Online Marketing
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
