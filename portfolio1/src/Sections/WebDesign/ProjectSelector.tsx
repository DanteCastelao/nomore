import { AnimatePresence, motion } from 'framer-motion';
import { useState } from 'react';

const ProjectSelector =  ({ firstTransition }: { firstTransition: boolean }) => {
    const [projectSelected, setProjectSelected] = useState("Zone");

    return (
        <AnimatePresence>
            {firstTransition && (
                <motion.div 
                    className='justify-center flex' 
                    initial={{ opacity: 0 }} 
                    animate={{ opacity: 1 }} 
                    exit={{ opacity: 0 }}
                    transition={{ duration: 0.6 }}>

                    <div className='flex-row w-[28%] items-center flex'>
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
                        onClick={() => setProjectSelected("Zone")}
                        className={`w-[50%] h-24 text-center font-Farro ${
                            projectSelected === "Zone"
                            ? "underline text-[60px] text-white transition-all duration-[600ms]"
                            : "text-[50px] text-[#636363]"
                        }`}
                        >
                            ZONE
                        </button>
                    </div>

                </motion.div>
            )}
        </AnimatePresence>
    );
};

export default ProjectSelector;