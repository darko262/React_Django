export function BannerPrincipal({title , description, published ,  time_read, imagent4}){
    return(
        <section className="h-1/2 bg-cover bg-no-repeat bg-center drop-shadow-2xl rounded-b-xl"style={{ backgroundImage: `url(${imagent4})` }}>
            <div className=" h-96">
                <div className=" flex justify-center items-center flex-col h-full text-white backdrop-blur-sm font-mono">
                    <h2 className=" text-4xl">{title}</h2>
                    <h4>{description}</h4>
                    <h6 className="text-2xl">  Tiempo de lectura {time_read} minutos</h6>
                </div>

            </div>
        </section>
    )
}