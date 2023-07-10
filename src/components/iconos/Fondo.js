//fondo circulares brillantes para las secciones de nuestra pagina


export default function Fondo({ posicion }) {
    return (
        <div className="absolute top-0 h-full  w-3/4 blur-3xl">
            <div className={`absolute md:h-52 md:w-52  h-36 w-36 rounded-full bg-gradient-to-r from-[#38A2D7] to-[#561139] backdrop-brightness-125 backdrop-blur-xl bg-white ${posicion} blur-3xl `}></div>
        </div>


    );
}
