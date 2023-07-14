import React from 'react';
import JustifiedTextDesktop from '../../../assets/JustifiedTextDesktop.png';

const CenterJustifiedText = ({ transition1 }: { transition1: boolean }) => {

  return (
    <div className='flex justify-center'>
      <img src={JustifiedTextDesktop} className={`transition-all duration-[600ms] ${transition1 ? 'invert' : null}`} alt='Justified Text'/>
    </div>
  );
};

export default CenterJustifiedText;