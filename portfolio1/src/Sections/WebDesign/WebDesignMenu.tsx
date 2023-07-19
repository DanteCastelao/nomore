import { AnimatePresence, motion } from 'framer-motion';

const WebDesignMenu = ({ handleBack, firstTransition }: { handleBack: () => void, firstTransition: boolean }) => {
    return (
        <AnimatePresence>
            {firstTransition && (
            <motion.div
                className='flex flex-col justify-center'
                initial={{ opacity: 0 }} 
                animate={{ opacity: 1 }} 
                exit={{ opacity: 0 }}
                transition={{ duration: 0.6 }}>

                <div className="flex justify-center mt-14">
                    <button className="text-[16px] font-IBM-Plex-San text-white underline">
                        ENTER
                    </button>
                </div>
                <div className="flex justify-center mt-14">
                    <div className="w-full">
                        <button onClick={handleBack} className="w-[50%] text-[16px] font-IBM-Plex-Sans text-white underline">
                            BACK
                        </button>
                        <button className="w-[50%] text-[16px] font-IBM-Plex-San text-white underline">
                            FASHION PORTFOLIO
                        </button>
                    </div>
                </div>
                
            </motion.div>
            )}
        </AnimatePresence>
    );
};

export default WebDesignMenu;