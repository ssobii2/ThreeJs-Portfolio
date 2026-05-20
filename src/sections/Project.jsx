import { Suspense, useState } from "react";
import { myProjects } from "../constants/index.js";
import { Canvas } from "@react-three/fiber";
import { Center, OrbitControls } from "@react-three/drei";
import CanvasLoader from "../components/CanvasLoader";
import DemoComputer from "../components/DemoComputer.jsx";
import useOnScreen from "../hooks/useOnScreen.js";

const projectCount = myProjects.length;

const Project = () => {
  const [selectedProjectIndex, setselectedProjectIndex] = useState(0);
  const currentProject = myProjects[selectedProjectIndex];
  const [ref, isVisible] = useOnScreen({ threshold: 0.1 });

  const handleNavigation = (direction) => {
    setselectedProjectIndex((prevIndex) => {
      if (direction === "previous") {
        return prevIndex === 0 ? projectCount - 1 : prevIndex - 1;
      } else {
        return prevIndex === projectCount - 1 ? 0 : prevIndex + 1;
      }
    });
  };

  return (
    <section className="c-space my-20" ref={ref}>
      <p className="head-text">My Work</p>
      <div className="grid lg:grid-cols-2 grid-cols-1 mt-12 gap-5 w-full">
        <div className="flex flex-col gap-5 relative sm:p-10 py-10 px-5 shadow-2xl shadow-black-200 lg:h-[600px]">
          <div className="absolute top-0 right-0 pointer-events-none">
            <img
              src={currentProject.spotlight}
              alt="spotlight"
              className="w-full h-96 object-cover rounded-xl"
            />
          </div>
          <div
            className="p-3 backdrop-filter backdrop-blur-3xl w-fit rounded-lg"
            style={currentProject.logoStyle}
          >
            <img
              src={currentProject.logo}
              alt="logo"
              className="w-10 h-10 shadow-sm"
            />
          </div>
          <p className="text-white text-2xl font-semibold animatedText mt-5">
            {currentProject.title}
          </p>
          <div className="flex flex-col gap-5 text-white-600 lg:flex-1 lg:min-h-0 lg:overflow-y-auto project-text-scroll">
            <p className="animatedText">{currentProject.desc}</p>
            <p className="animatedText">{currentProject.subdesc}</p>
          </div>
          <div className="flex items-center justify-between flex-wrap gap-5">
            <div className="flex items-center gap-3">
              {currentProject.tags.map((tag, index) => (
                <div key={index} className="tech-logo">
                  <img src={tag.path} alt={tag.name} />
                </div>
              ))}
            </div>
            {currentProject.href !== '#' && (
              <a
                href={currentProject.href}
                target="_blank"
                rel="noreferrer"
                className="flex items-center gap-2 cursor-pointer text-white-600"
              >
                <p>{currentProject.linkLabel ?? 'Check Site'}</p>
                <img src="/assets/arrow-up.png" alt="arrow" className="w-3 h-3" />
              </a>
            )}
          </div>
          <div className="flex justify-between items-center mt-7">
            <button
              className="arrow-btn"
              onClick={() => handleNavigation("previous")}
            >
              <img
                src="/assets/left-arrow.png"
                alt="left arrow"
                className="w-4 h-4"
              />
            </button>
            <button
              className="arrow-btn"
              onClick={() => handleNavigation("next")}
            >
              <img
                src="/assets/right-arrow.png"
                alt="right arrow"
                className="w-4 h-4"
              />
            </button>
          </div>
        </div>

        <div className="border border-black-300 bg-black-200 rounded-lg h-96 md:h-full">
            {isVisible && (
                <Canvas dpr={[1, 1.5]} camera={{ position: [0, 0.8, 5], fov: 75 }}>
                    <ambientLight intensity={Math.PI} />
                    <directionalLight position={[10, 10, 5]} />

                    <Center>
                    <Suspense fallback={<CanvasLoader />}>
                        <group scale={0.0009} position={[0, -1.2, 0]} rotation={[0, Math.PI - 0.1, Math.PI]}>
                        <DemoComputer texture={currentProject.texture} />
                        </group>
                    </Suspense>
                    </Center>
                    <OrbitControls
                      enableZoom={false}
                      minPolarAngle={Math.PI / 2.6}
                      maxPolarAngle={Math.PI / 2}
                      minAzimuthAngle={-0.5}
                      maxAzimuthAngle={0.5}
                    />
                </Canvas>
            )}
        </div>
      </div>
    </section>
  );
};

export default Project;
