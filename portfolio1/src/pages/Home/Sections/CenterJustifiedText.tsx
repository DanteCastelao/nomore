import React, { useEffect, useRef, useState } from 'react';
import JustifiedTextDesktop from '../../../assets/JustifiedTextDesktop.png';

const CenterJustifiedText = ({ transition1 }: { transition1: boolean }) => {

  const [transition2, setTransition2] = useState(false);

  useEffect(() => {
    if (transition1) {
      setTimeout(() => {
        setTransition2(true)
      }, 600);
    }
  }, [transition1]);

  return (
    <div className='flex justify-center'>
      <img src={JustifiedTextDesktop} className={`transition-all duration-[600ms] ${transition1 ? 'invert' : null} ${transition2 ? 'opacity-0' : null}`} alt='Justified Text'/>
    </div>
  );
};

export default CenterJustifiedText;