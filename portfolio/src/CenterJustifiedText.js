import React, { useEffect } from 'react';

const CenterJustifiedText = () => {
  useEffect(() => {
    const textElement = document.getElementById('justified-text');
    const containerWidth = document.getElementById('container').offsetWidth;
    const textWidth = document.getElementById('justified-text').offsetWidth;
    const marginLeft = (containerWidth - textWidth) / 2;
    console.log(marginLeft)
    textElement.style.marginLeft = `${marginLeft}px`;
  }, []);

  return (
    <div id="container" className="w-[51%]">
      <p id="justified-text" className="text-[90px] font-sans text-justify leading-tight text-white">
        CREATING SINCE 20&#8209;20. UX - UI DESIGNER. FASHION COLLEGE - STUDENT. CREATIVE-DIRECTOR...
      </p>
    </div>
  );
};

export default CenterJustifiedText;
