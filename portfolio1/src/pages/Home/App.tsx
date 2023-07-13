import React, { useState } from 'react';
import { createBrowserRouter } from 'react-router-dom';
import CenterJustifiedText from './Sections/CenterJustifiedText';
import Header from './Sections/Header';
import Menu from './Sections/Menu';

const App = () => {

  const [Transition1, setTransition1] = useState(false);

  const handleWebDesign = () => {
    setTransition1(true);
  };


  return (
    <div className="bg-noise min-h-screen min-w-full pt-12">
      <Header transition1={Transition1} />
      <CenterJustifiedText />
      <Menu handleWebDesign={handleWebDesign} />
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
