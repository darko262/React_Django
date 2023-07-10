
export function BoxSkill({ logo,progreso }) {
    return (
        <div className="md:h-60 md:w-60 h-40 w-40 relative group ">
            <img src={logo} className=" h-full w-auto grayscale brightness-50 group-hover:grayscale-0 group-hover:brightness-100"></img>
            <div className="absolute h-14 w-20 md:h-28 md:w-28 bottom-0 right-0 z-50 " >
                <div className="relative">
                <svg height={100} width={100}>
                    <circle r={45} cx={50} cy={50} pathLength={100} className="stroke-2 fill-gray-500 opacity-50 text-black "> </circle>
                    <circle r={45} cx={50} cy={50} pathLength={100} style={{ strokeWidth: '5', fill: 'none', stroke: '#3b82f6', strokeDasharray: `${progreso} 100` ,transform:'rotate(-90deg)',transformOrigin:'50%' }}></circle>
                </svg>
                <span className="text-white absolute top-0 left-0 right-0 bottom-0 flex justify-center items-center ">{progreso}%</span>
                </div>
            </div>

        </div>

    )
}




