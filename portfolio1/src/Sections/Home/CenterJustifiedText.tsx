import { useEffect, useState } from 'react';
import JustifiedTextDesktop from '../../assets/JustifiedTextDesktop.png';

const CenterJustifiedText = ({ firstTransition, middleTransition, lastTransition }: { firstTransition: boolean, middleTransition: boolean, lastTransition: boolean }) => {

  return (
    <>
    {lastTransition ? null :
      <div className='flex justify-center'>
        <img src={JustifiedTextDesktop} className={`transition-all duration-[600ms] ${firstTransition ? 'invert' : null} ${middleTransition ? 'opacity-0' : 'opacity-100'}`} alt='Justified Text'/>
      </div>
    }
    </>
  );
};

export default CenterJustifiedText;