const WebDesignMenu = ({ handleBack, firstTransition, lastTransition }: { handleBack: () => void, firstTransition: boolean, lastTransition: boolean }) => {
    return (
        <>
            {lastTransition ?  
                <div className={`transition-all duration-[600ms] ${firstTransition ? "opacity-100" : "opacity-0"}`}>
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
                </div>
            : null}
        </>
    );
};

export default WebDesignMenu;