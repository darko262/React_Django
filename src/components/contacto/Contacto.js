import { useEffect, useState } from "react"

import axios from "axios";



export function Contactoss() {

    const [formData, setFormData] = useState({
        name: '',
        email: '',
        message: '',
    });

    const { name, email, message } = formData;
    

    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            const response = await axios.post(
                `${process.env.REACT_APP_API_URL}/api/contact/posts`,
                formData,
                
            );
            console.log(response.data); // Muestra la respuesta del servidor
            alert('El formulario se ha enviado correctamente.');
        } catch (error) {
            console.error(error);
            alert('Hubo un error al enviar el formulario.');
        }
    };

    return (
        <form onSubmit={handleSubmit}>
            <div className="text-white">
                <label >Nombre:</label>
                <input
                    type="text"
                    name="name"
                    value={name}
                    onChange={handleChange}
                    required
                />
            </div>
            <div>
                <label>Email:</label>
                <input
                    type="email"
                    name="email"
                    value={email}
                    onChange={handleChange}
                    required
                />
            </div>
            <div>
                <label>Mensaje:</label>
                <textarea
                    name="message"
                    value={message}
                    onChange={handleChange}
                    required
                />
            </div>
            <button className="text-white" type="submit">Enviar</button>
        </form>
    );
};

export default Contactoss