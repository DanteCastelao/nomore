import React, { useState, useEffect } from 'react';
import './App.css';
import { createBrowserRouter } from 'react-router-dom';
import FashionPage from './FashionPage';
import WebDesignPage from './WebDesignPage';


const App = () => {
  const [firstTransition, setFirstTransition] = useState(false);
  const [secondTransition, setSecondTransition] = useState(false);
  const [thirdTransition, setThirdTransition] = useState(false);

  const handlePortfolioClick = () => {
    setFirstTransition(true);
    setTimeout(() => {
      setSecondTransition(true);
    }
    , 600);
    setTimeout(() => {
      setThirdTransition(true);
    }
    , 1200);
  };

  return (
    <div className="bg-noise min-h-screen min-w-full">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com"/>
        <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin/>
        <link href="https://fonts.googleapis.com/css2?family=Farro&display=swap" rel="stylesheet"/>
      </head>

      <div className="pt-12 bg-noise h-full">
        <p className="text-center mb-12">

          <span
            className={`font-sans uppercase text-white ${
              secondTransition ? 'transition-all duration-[600ms] opacity-100' : 'opacity-0 mr-[50px] absolute'
            }`}
          >
            UX/UI
          </span>

          <span
            className={`font-sans uppercase text-white ${
              secondTransition ? 'transition-all duration-[600ms] ml-[50px] opacity-0 absolute' : 'opacity-100'
            }`}
          >
            Creative Director
          </span>
        
        </p>

        {thirdTransition ? <WebDesignPage /> : (
          <>
          <p
            className={`text-[90px] font-sans w-[51%] text-justify mx-[24.5%] leading-none ${
              firstTransition ? 'transition-colors duration-[600ms] text-black' : 'text-white'
            }`}
          >
            CREATING SINCE 20&#8209;20. UX - UI DESIGNER. FASHION COLLEGE - STUDENT. CREATIVE-DIRECTOR...
          </p>

          {firstTransition ? null : (
            <div className="flex items-center flex-row gap-10 justify-center mt-32">
              <div className="text-base text-white font-sans">Matías Goyret</div>

              <div className="h-8 flex flex-col justify-between">
                <div className="h-[1px] w-44 bg-white self-start"></div>
                <div className="h-[1px] w-44 bg-white self-end"></div>
              </div>

              <div>
                <div className="text-base underline text-white font-sans cursor-pointer">
                  <a onClick={handlePortfolioClick}>UX/UI PORTFOLIO</a>
                </div>
                <div className="text-base underline text-white font-sans cursor-pointer">
                  <a>FASHION PORTFOLIO</a>
                </div>
              </div>
            </div>
          )}
          </>
        )}
      </div>
    </div>
  );
};

export default App;


const router = createBrowserRouter([
  {
    path: '/',
    element: <App />,
  }
]);

export { router };
