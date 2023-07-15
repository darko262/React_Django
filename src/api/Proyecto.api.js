import axios from 'axios'

export const getAllProyectos = () =>{
    
    return axios.get(`https://padillacode.pythonanywhere.com/api/blog/list`)
    

}
export const getProyecto = (slug) =>{
    const parametro = slug.slug
    return axios.get(`https://padillacode.pythonanywhere.com/api/blog/detail/${parametro}`)
    
    

}
