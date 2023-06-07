export function BoxProyectos({ titulo, logo, parrafo }) {
    return (
        <div className="w-full lg:w-1/3 lg:h-72 h-auto rounded-b-3xl group  overflow-hidden flex justify-center relative mb-5">
            <div className=" h-full mr-1 rounded-3xl ">
                <img src={logo} className=" h-full w-full rounded-3xl ease-in  duration-500 group-hover:scale-110 hover:rounded-lg "></img>
                <div className=" absolute left-0 bottom-0 w-full h-full bg-gradient-to-b from-transparent to-blue-400 rounded-3xl flex justify-center flex-col text-center translate-y-full easy-linear duration-500 md:group-hover:translate-y-0 ">
                
                </div>

            </div>
        </div>
    );
}