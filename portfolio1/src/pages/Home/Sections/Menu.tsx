import React from 'react';

const Menu = ({ handleWebDesign }: { handleWebDesign: () => void }) => {
    return (
        <div className="flex items-center flex-row gap-10 justify-center mt-32">
            <div className="text-base font-IBM-Plex-Sans text-white font-sans">Matías Goyret</div>

            <div className="h-8 flex flex-col justify-between">
                <div className="h-[1px] w-44 bg-white self-start"></div>
                <div className="h-[1px] w-44 bg-white self-end"></div>
            </div>

            <div>
                <div className="text-base font-IBM-Plex-Sans underline text-white font-sans cursor-pointer">
                    <a onClick={handleWebDesign}>UX/UI PORTFOLIO</a>
                </div>
                <div className="text-base font-IBM-Plex-Sans underline text-white font-sans cursor-pointer">
                    <a>FASHION PORTFOLIO</a>
                </div>
            </div>
        </div>
    );
};

export default Menu;