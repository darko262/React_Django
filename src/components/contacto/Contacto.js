import { useEffect, useState } from "react"

import axios from "axios";



export function Contactoss() {




    const [enabled, setEnabled] = useState(false)

    const [loading, setLoading] = useState(false)

    const [formData, setFormData] = useState({
        name: '',
        email: '',
        subject: '',
        message: '',
        phone: '',

    });

    const {
        name,
        email,
        subject,
        message,
        phone

    } = formData;

    function getCookie(name) {
        const value = `; ${document.cookie}`;
        const parts = value.split(`; ${name}=`);
        if (parts.length === 2) return parts.pop().split(";").shift();
    }
    const onChange = e => setFormData({ ...formData, [e.target.name]: e.target.value });

    const onSubmit = e => {
        e.preventDefault();


        setLoading(true);
        const csrfToken = getCookie("csrftoken");
        const config = {
            headers: {
                'Content-Type': 'application/json',
                "X-CSRFToken": csrfToken,

            }
        };

        const formData = new FormData()
        formData.append('name', name)
        formData.append('email', email)
        formData.append('phone', phone)
        formData.append('subject', subject)
        formData.append('message', message)


        const fetchData = async () => {
            const res = await axios.post(`${process.env.REACT_APP_API_URL}/api/contact/posts`, formData, config)
            // const res = await axios.post('https://padillacode.pythonanywhere.com', formData, config)
            console.log(res.data);
            console.log(res.status);
            if (res.status === 200) {
                setLoading(false);
                setFormData({
                    name: '',
                    email: '',
                    subject: '',
                    message: '',
                    phone: '',

                    
                })
                
                alert('Message has been sent.')
            } else {
                setLoading(false);
                alert('Error sending message.')
            }
        }
        fetchData()


    }

    return (

        <section id="#contacto">
            <div className="pt-28">
                <div className="relative  bg-slate-700 border-2 border-sky-950 rounded-3xl   backdrop-brightness-125 backdrop-blur-xl md:w-4/5 md:mx-auto">
                    <div className="absolute inset-0">
                        <div className="absolute inset-y-0 left-0 w-1/2 " />
                    </div>
                    <div className="relative mx-auto max-w-7xl lg:grid lg:grid-cols-5">
                        <div className=" py-16 px-4 sm:px-6 lg:col-span-2 lg:px-8 lg:py-24 xl:pr-12">
                            <div className="mx-auto max-w-lg">
                                <h2 className="text-2xl font-bold tracking-tight text-gray-900 sm:text-3xl">
                                    ¡Descubre nuevas posibilidades conmigo!</h2>
                                <p className="mt-3 text-lg leading-6 text-gray-500">
                                    Juntos, crearemos soluciones innovadoras para tu éxito. ¡Contáctame ahora y comencemos a dar vida a tus ideas!
                                </p>
                                <dl className="mt-8 text-base text-gray-500">
                                    <div>
                                        <dt className="sr-only">Postal address</dt>
                                        <dd>

                                            <p>Temuco, Chile</p>
                                        </dd>
                                    </div>
                                    <div className="mt-6">
                                        <dt className="sr-only">Phone number : </dt>
                                        <dd className="flex">
                                            +56988682182

                                        </dd>
                                    </div>
                                    <div className="mt-3">
                                        <dt className="sr-only">Email</dt>
                                        <dd className="flex">
                                            seba.padilla@live.cl

                                        </dd>
                                    </div>
                                </dl>
                                <p className="mt-6 text-base text-gray-500">
                                    ¡Espero con ansias trabajar contigo en proyectos emocionantes!


                                </p>
                            </div>
                        </div>
                        <div className=" py-16 px-4 sm:px-6 lg:col-span-3 lg:py-24 lg:px-8 xl:pl-12">
                            <div className="mx-auto max-w-lg lg:max-w-none">
                                <form onSubmit={e => onSubmit(e)} className="grid grid-cols-1 gap-y-6">
                                    <div>
                                        <label htmlFor="full-name" className="sr-only">
                                            Full name
                                        </label>
                                        <input
                                            type="text"
                                            name="name"
                                            value={name}
                                            required
                                            onChange={e => onChange(e)}
                                            autoComplete="name"
                                            className="block w-full rounded-md border-gray-300 py-3 px-4 placeholder-gray-500 shadow-sm focus:border-orange-500 focus:ring-orange-500"
                                            placeholder="Full name"
                                        />
                                    </div>

                                    <div>
                                        <label htmlFor="email" className="sr-only">
                                            Email
                                        </label>
                                        <input
                                            value={email}
                                            onChange={e => onChange(e)}
                                            name="email"
                                            type="email"
                                            required
                                            className="block w-full rounded-md border-gray-300 py-3 px-4 placeholder-gray-500 shadow-sm focus:border-orange-500 focus:ring-orange-500"
                                            placeholder="Email"
                                        />
                                    </div>

                                    <div>
                                        <label htmlFor="price" className="sr-only">
                                            Phone
                                        </label>
                                        <div className="relative mt-1 rounded-md shadow-sm">
                                            <div className="pointer-events-none absolute inset-y-0 left-0 flex items-center pl-3">
                                                <span className="text-gray-500 sm:text-sm">+</span>
                                            </div>
                                            <input
                                                type="number"
                                                name="phone"
                                                value={phone}
                                                required
                                                onChange={e => onChange(e)}
                                                className="block w-full rounded-md border-gray-300 pl-7 pr-12 focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
                                                placeholder="51 999 123 456"
                                                aria-describedby="price-currency"
                                            />
                                        </div>
                                    </div>

                                    <div>
                                        <label className="sr-only">
                                            Subject
                                        </label>
                                        <input
                                            type="text"
                                            name="subject"
                                            value={subject}
                                            required
                                            onChange={e => onChange(e)}
                                            className="block w-full rounded-md border-gray-300 py-3 px-4 placeholder-gray-500 shadow-sm focus:border-orange-500 focus:ring-orange-500"
                                            placeholder="Subject"
                                        />
                                    </div>

                                    <div>
                                        <label htmlFor="message" className="sr-only">
                                            Message
                                        </label>
                                        <textarea
                                            id="message"
                                            name="message"
                                            value={message}
                                            required
                                            onChange={e => onChange(e)}
                                            rows={4}
                                            className="block w-full rounded-md border-gray-300 py-3 px-4 placeholder-gray-500 shadow-sm focus:border-orange-500 focus:ring-orange-500"
                                            placeholder="Message"
                                            defaultValue={''}
                                        />
                                    </div>


                                    <div className="px-4 py-5 sm:px-6">
                                        <div className="-ml-4 -mt-2 flex flex-wrap items-center justify-between sm:flex-nowrap">

                                            <div className="ml-4 mt-2 flex-shrink-0">
                                                {
                                                    loading ?
                                                        <div
                                                            className="relative inline-flex items-center rounded-md border border-transparent bg-green-600 px-4 py-3 text-lg font-medium text-white shadow-sm hover:bg-orange-700 focus:outline-none focus:ring-2 focus:ring-orange-500 focus:ring-offset-2"
                                                        >

                                                        </div>
                                                        :
                                                        <button
                                                            type="submit"
                                                            className="relative inline-flex items-center rounded-md border border-transparent bg-orange-600 px-4 py-3 text-lg font-medium text-white shadow-sm hover:bg-orange-700 focus:outline-none focus:ring-2 focus:ring-orange-500 focus:ring-offset-2"
                                                        >
                                                            Send Message
                                                        </button>

                                                }
                                            </div>
                                        </div>
                                    </div>
                                </form>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>

    )
}
export default Contactoss