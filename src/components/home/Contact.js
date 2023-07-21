
// import imagent4 from "../../assets/img/roboto.png";
import imagent4 from "../../assets/img/programacion.jpg";
export function Contact() {
    return (
        <section className="relative  flex  w-full min-h-screen justify-center py-28 ">
            <div className="grid  lg:grid-cols-2 grid-rows-1 h-full w-5/6   ">
                <div className="h-full  w-full place-content-center grid  ">
                    <img src={imagent4} alt="" className=" h-full w-full object-cover overflow-hidden aspect-square lg:rounded-l-3xl rounded-tl-3xl " />

                </div>
                <div className="h-full lg:bg-gradient-to-r  bg-gradient-to-b from-transparent to-blue-500 w-full text-center py-5 lg:rounded-xl rounded-b-3xl text-white">
                    <form>
                        <div className="border-b border-gray-900/10 pb-12 text-white">
                            <h2 className="text-base font-semibold leading-7 ">Profile</h2>
                            <p className="mt-1 text-sm leading-6 ">
                                This information will be displayed publicly so be careful what you share.
                            </p>



                        </div>
                        <div className=" grid grid-rows-3 text-center h-full ">
                            <div className="">
                                <label htmlFor="username" className="block text-sm font-medium leading-6 ">
                                    Nombre
                                </label>
                                <div className="flex justify-center">
                                    <input
                                        type="text"
                                        name="username"
                                        id="username"
                                        autoComplete="username"
                                        className="rounded-xl bg-white py-1.5 pl-1 text-gray-900 placeholder:text-gray-400 focus:ring-0 sm:text-sm sm:leading-6 flex-initial w-64 "
                                        placeholder="Nombre"
                                    />
                                </div>


                            </div>
                            <div>
                                <label htmlFor="email" className="block text-sm font-medium leading-6 ">
                                    Direccion de correo
                                </label>
                                <div className="mt-2">
                                    <input
                                        id="email"
                                        name="email"
                                        type="email"
                                        autoComplete="email"
                                        className="rounded-xl bg-white py-1.5 pl-1 text-gray-900 placeholder:text-gray-400 focus:ring-0 sm:text-sm sm:leading-6 flex-initial w-64 "
                                        placeholder="Email"
                                    />
                                </div>
                            </div>
                            <div className="">
                                <label htmlFor="about" className="block text-sm font-medium leading-6 ">
                                    About
                                </label>
                                <div className="mt-2">
                                    <textarea
                                        id="about"
                                        name="about"
                                        rows={3}
                                        className=" rounded-xl bg-white py-1.5 pl-1 text-gray-900 placeholder:text-gray-400  sm:text-sm sm:leading-6 flex-initial w-64 ring-1 ring-inset  focus:ring-2 focus:ring-inset focus:ring-indigo-600"
                                        defaultValue={''}
                                    />
                                </div>
                            </div>


                        </div>
                    </form>

                </div>

            </div>



        </section>



    )
}

// const [loading, setLoading] = useState(false);
// const [formData, setFormData] = useState({
//     name: "",
//     email: "",
//     subject: "",
//     message: "",
//     phone: "",
// });

// const { name, email, subject, message, phone } = formData;

// const onChange = (e) => setFormData({ ...formData, [e.target.name]: e.target.value });

// const onSubmit = (e) => {
//     e.preventDefault();

//     setLoading(true);

//     // Obtener el token CSRF desde las cookies
//     const csrfToken = getCookie("csrftoken");

//     // Configurar axios para incluir el token CSRF en la solicitud
//     const config = {
//         headers: {
//             "Content-Type": "application/json",
//             "X-CSRFToken": csrfToken,
//         },
//     };
//     const formData = new FormData()
//     formData.append('name', name)
//     formData.append('email', email)
//     formData.append('phone', phone)
//     formData.append('subject', subject)
//     formData.append('message', message)

    
//     const fetchData = async () => {
//         const res = await axios.post(`${process.env.REACT_APP_API_URL}/api/contact/`, formData, config)
//         // const res = await axios.post('https://padillacode.pythonanywhere.com', formData, config)
//         if (res.status === 200) {
//             setLoading(false);
//             setFormData({
//                 name: '',
//                 email: '',
//                 subject: '',
//                 message: '',
//                 phone: '',

//             })
//             alert("Message has been sent.");
//         } else {
//             setLoading(false);
//             alert('Error sending message.')
//         }
//     }

//     fetchData()
// };

// // Función para obtener el valor de una cookie específica por su nombre
// function getCookie(name) {
//     const value = `; ${document.cookie}`;
//     const parts = value.split(`; ${name}=`);
//     if (parts.length === 2) return parts.pop().split(";").shift();
// }
