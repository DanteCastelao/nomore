import React from 'react';

const Menu = ({ handleWebDesign, transition1 }: { handleWebDesign: () => void, transition1: boolean }) => {
    return (
        <div className={`flex flex-row gap-10 justify-center mt-32 transition-all duration-[600ms] ${transition1 ? 'opacity-0' : 'opacity-100'}`}>
            <div className="text-base font-IBM-Plex-Sans text-white self-start">Matías Goyret</div>

            <div className="h-8 flex flex-col justify-between self-center">
                <div className="h-[1px] w-44 bg-white self-start"></div>
                <div className="h-[1px] w-44 bg-white self-end"></div>
            </div>

            <div className='gap-2 flex flex-col'>
                <div className="text-base font-IBM-Plex-Sans underline text-white cursor-pointer">
                    <a onClick={handleWebDesign}>UX/UI PORTFOLIO</a>
                </div>
                <div className="text-base font-IBM-Plex-Sans underline text-white cursor-pointer">
                    <a>FASHION PORTFOLIO</a>
                </div>
            </div>
        </div>
    );
};

export default Menu;