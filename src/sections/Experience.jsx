import { Canvas } from "@react-three/fiber";
import { workExperiences } from "../constants/index.js";
import { Suspense, useState } from "react";
import { OrbitControls } from "@react-three/drei";
import CanvasLoader from "../components/CanvasLoader";
import Developer from "../components/Developer.jsx";
import useOnScreen from "../hooks/useOnScreen.js";

const Experience = () => {
  const [animationName, setanimationName] = useState("idle");
  const [ref, isVisible] = useOnScreen({ threshold: 0.1 });

  return (
    <section className="c-space my-20" id="work" ref={ref}>
      <div className="w-full text-white-600">
        <h3 className="head-text">My Work Experience</h3>

        <div className="work-container">
          <div className="work-canvas">
            {isVisible && (
              <Canvas>
                <ambientLight intensity={7} />
                <spotLight position={[10, 10, 10]} angle={0.15} penumbra={1} />
                <directionalLight position={[10, 10, 10]} intensity={1} />
                <OrbitControls enableZoom={false} maxPolarAngle={Math.PI / 2} />
                <Suspense fallback={<CanvasLoader />}>
                  <Developer position-y={-3} scale={3} animationName={animationName} />
                </Suspense>
              </Canvas>
            )}
          </div>

          <div className="work-content">
            <div className="sm:py-10 py-5 sm:px-5 px-2.5">
              {workExperiences.map(
                ({ id, name, pos, duration, title, animation, icon }) => (
                  <div
                    key={id}
                    className="work-content_container group"
                    onPointerOut={() => setanimationName("idle")}
                    onPointerOver={() =>
                      setanimationName(animation.toLocaleLowerCase())
                    }
                    onClick={() =>
                      setanimationName(animation.toLocaleLowerCase())
                    }
                  >
                    <div className="flex flex-col h-full justify-start items-center py-2">
                      <div className="work-content_logo">
                        <img src={icon} alt="logo" className="w-full h-full" />
                      </div>
                      <div className="work-content_bar" />
                    </div>

                    <div className="sm:p-5 px-2.5 py-5">
                      <p className="font-bold text-white-800">{name}</p>
                      <p className="text-sm mb-5">
                        {pos} -- {duration}
                      </p>
                      <p className="group-hover:text-white transition ease-in-out duration-500">
                        {title}
                      </p>
                    </div>
                  </div>
                )
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Experience;
