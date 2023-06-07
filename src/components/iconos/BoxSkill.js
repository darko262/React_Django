export function BoxSkill({ logo }) {
    return (
        <div className="md:h-60 md:w-60 h-40 w-40 relative group">
            <img src={logo} className=" h-full w-auto grayscale brightness-50 group-hover:grayscale-0 group-hover:brightness-100"></img>
            <div className="absolute h-14 w-20 md:h-28 md:w-28 bottom-0 right-0 " >
                <svg height={100} width={100}>
                    <circle r={40} cx={50} cy={50} pathLength={100} className="stroke-2 fill-gray-500 stroke-white "></circle>

                </svg>

            </div>

        </div>

    )
}




