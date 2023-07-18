import React, { useEffect, useRef, useState } from "react";
import VideoDisplay from "../Components/VideoDisplay";

function WebDesignPage() {
  const [projectSelected, setProjectSelected] = useState<string>("Zone");
  const [transition, setTransition] = useState<number>(0);
  const lastDivRef = useRef<HTMLDivElement>(null);

  const handleProjectClick = (project: string): void => {
    setProjectSelected(project);
  };

  const handleEnterClick = (): void => {
    setTransition(1);
    setTimeout(() => {
      setTransition(2);
    }, 600);
    setTimeout(() => {
      setTransition(3);
    }, 1200);
  };

  const handleBackClick = (): void => {
    setTransition(0);
  };

  const handleHomeClick = (): void => {
    setTransition(0);
  };

  useEffect(() => {
    if (transition === 3 && lastDivRef.current) {
      lastDivRef.current.scrollIntoView({ behavior: "smooth" });
    }
  }, [transition]);

  return (
    <div>
      {transition === 2 || transition === 3 ? (
        <button
          onClick={handleBackClick}
          className="font-sans uppercase text-white fixed left-1/2 translate-x-[-50%] z-10"
        >
          BACK TO PORTFOLIO
        </button>
      ) : (
        <div>
          <p className="text-center mb-2">
            <span
              className={`font-sans uppercase text-white ${
                transition === 1
                  ? "transition-all duration-[600ms] opacity-0"
                  : "opacity-100"
              }`}
            >
              UX/UI
            </span>
          </p>

          <div className="flex justify-center">
            <div
              className={`flex-row w-[28%] items-center flex transition-all duration-[600ms] ${
                transition === 0 ? "opacity-1" : "opacity-0"
              }`}
            >
              <button
                onClick={() => handleProjectClick("Zone")}
                className={`w-[50%] h-24 text-center font-sans ${
                  projectSelected === "Zone"
                    ? "underline text-[60px] text-white transition-all duration-[600ms]"
                    : "text-[50px] text-[#636363]"
                }`}
              >
                ZONE
              </button>
              <button
                onClick={() => handleProjectClick("Picto")}
                className={`w-[50%] h-24 text-center font-sans ${
                  projectSelected === "Picto"
                    ? "underline text-[60px] text-white transition-all duration-[600ms]"
                    : "text-[50px] text-[#636363]"
                }`}
              >
                PICTO
              </button>
            </div>
          </div>
        </div>
      )}
      <div className={`justify-center flex ${transition === 2 || transition === 3 ? "" : "mt-10"}`}>
        <div className={`${transition === 2 || transition === 3 ? "w-[80%] transition-all duration-[600ms]" : "w-[40%]"}`}>
          <VideoDisplay videoSrc={projectSelected === "Zone" ? "./video1.mp4" : "./video2.mp4"} />
        </div>
      </div>
      
      {transition === 3 ? (
        <div ref={lastDivRef} className="justify-center flex mt-28 h-[50vh] bg-noise-x">
          <div className="w-[20%] leading-tight">
            <p className="text-center text-white uppercase font-sans">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore
              magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo
              consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.
              Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
            </p>
          </div>
        </div>
      ) : null}
    </div>
  );
}

export default WebDesignPage;