import { useEffect, useState } from 'react';
import { createBrowserRouter } from 'react-router-dom';
import CenterJustifiedText from './Home/CenterJustifiedText';
import Header from './Home/Header';
import Menu from './Home/Menu';
import ProjectSelector from './WebDesign/ProjectSelector';
import WebDesignMenu from './WebDesign/WebDesignMenu';

const App = () => {

  const [transition1, setTransition1] = useState(false);
  const [transition2, setTransition2] = useState(false);
  const [transition3, setTransition3] = useState(false);

  useEffect(() => {
    if (transition1) {
      setTimeout(() => {
        setTransition2(true)
        setTimeout(() => {
          setTransition3(true)
        }, 600);
      }, 600);
    }
  }, [transition1]);

  const handleWebDesign = () => {
    setTransition1(true);
  };

  const handleBack = () => {
      setTransition3(false);
      setTimeout(() => {
        setTransition2(false)
        setTimeout(() => {
          setTransition1(false)
        }, 600);
      }, 600);
  };

  return (
    <div className="bg-noise min-h-screen min-w-full pt-12">
      <Header transition={transition1} />
      <CenterJustifiedText firstTransition={transition1} secondTransition={transition2}/>
      <ProjectSelector firstTransition={transition3}/>
      <Menu handleWebDesign={handleWebDesign} firstTransition={transition1}/>
      <WebDesignMenu handleBack={handleBack} firstTransition={transition3}/>
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
