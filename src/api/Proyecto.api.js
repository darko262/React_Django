import axios from 'axios'

export const getAllProyectos = () =>{
    // return axios.get('http://localhost:8000/api/blog/list') //estp sirve para el react el otro pra el python
    return axios.get('http://127.0.0.1:8000/api/blog/list')
    

}
export const getProyecto = (slug) =>{
    const parametro = slug.slug
    return axios.get(`http://127.0.0.1:8000/api/blog/detail/${parametro}`)
    // return axios.get(`http://localhost:8000/api/blog/detail/${parametro}`)
    

}