import { useState } from 'react';

const ProjectSelector =  ({ firstTransition, lastTransition }: { firstTransition: boolean, lastTransition: boolean }) => {
    const [projectSelected, setProjectSelected] = useState("Zone");

    return (
        <>
            {lastTransition ?
                <div className='justify-center flex'>
                    <div className={`flex-row w-[28%] items-center flex transition-all duration-[600ms] ${firstTransition ? "opacity-1" : "opacity-0 invisible"}`}>
                        <button
                        onClick={() => setProjectSelected("Picto")}
                        className={`w-[50%] h-24 text-center font-Farro ${
                            projectSelected === "Picto"
                            ? "underline text-[60px] text-white transition-all duration-[600ms]"
                            : "text-[50px] text-[#636363]"
                        }`}
                        >
                            PICTO
                        </button>
                        <button
                        onClick={() => setProjectSelected("Picto")}
                        className={`w-[50%] h-24 text-center font-Farro ${
                            projectSelected === "Zone"
                            ? "underline text-[60px] text-white transition-all duration-[600ms]"
                            : "text-[50px] text-[#636363]"
                        }`}
                        >
                            ZONE
                        </button>
                    </div>
                </div>
            : null}
        </>
    );
};

export default ProjectSelector;
