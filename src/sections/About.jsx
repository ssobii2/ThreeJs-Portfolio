import Globe from "react-globe.gl";
import Button from "../components/Button";
import { useState } from "react";
import { useMediaQuery } from "react-responsive";

const About = () => {
  const [hasCopied, setHasCopied] = useState(false);
  const isMobile = useMediaQuery({ maxWidth: 768 });
  const globeSize = isMobile ? 200 : 326;

  const handleCopy = () => {
    navigator.clipboard.writeText("subhanimran4@gmail.com");
    setHasCopied(true);
    setTimeout(() => {
      setHasCopied(false);
    }, 2000);
  };

  return (
    <section className="c-space my-20" id="about">
      <div className="grid xl:grid-cols-3 xl:grid-rows-6 md:grid-cols-2 grid-cols-1 gap-5 h-full">
        <div className="col-span-1 xl:row-span-3">
          <div className="grid-container">
            <img
              src="/assets/grid1.png"
              alt="grid-1"
              className="w-full sm:h-[276px] h-48 object-contain"
            />

            <div>
              <p className="grid-headtext">Hi, I am Muhammad Subhan</p>
              <p className="grid-subtext">
                With over 2 years of experience, I have honed my skills in frontend
                and basic backend development.
              </p>
            </div>
          </div>
        </div>
        <div className="col-span-1 xl:row-span-3">
          <div className="grid-container">
            <img
              src="/assets/grid2.png"
              alt="grind-2"
              className="w-full sm:h-[276px] h-48 object-contain"
            />

            <div>
              <p className="grid-headtext">Tech Stack</p>
              <p className="grid-subtext">
                I specialize in JavaScript/PHP with a focus on React and
                Laravel ecosystems.
              </p>
            </div>
          </div>
        </div>

        <div className="col-span-1 xl:row-span-4">
          <div className="grid-container">
            <div className="rounded-3xl w-full sm:h-[326px] h-[220px] flex justify-center items-center overflow-hidden">
              <Globe
                height={globeSize}
                width={globeSize}
                backgroundColor="rgba(0, 0, 0, 0)"
                backgroundImageOpacity={0.5}
                showAtmosphere
                showGraticules
                globeImageUrl="//unpkg.com/three-globe/example/img/earth-night.jpg"
                bumpImageUrl="//unpkg.com/three-globe/example/img/earth-topology.png"
              />
            </div>
            <div>
              <p className="grid-headtext">
                I work Remotely across most timezones.
              </p>
              <p className="grid-subtext">
                I'm based in Pakistan, with remote work available.
              </p>
              <a href="#contact" className="w-fit">
                <Button name="Contact Me" isBeam containerClass="w-full mt-5 sm:mt-10" />
              </a>
            </div>
          </div>
        </div>

        <div className="xl:col-span-2 xl:row-span-3">
          <div className="grid-container">
            <img
              src="/assets/grid3.png"
              alt="grid-3"
              className="w-full sm:h-[266px] h-48 object-contain"
            />
            <div>
              <p className="grid-headtext">My Passion for Coding</p>
              <p className="grid-subtext">
                I love solving problems and building things through code. Coding
                isn't just my profession - it is my passion.
              </p>
            </div>
          </div>
        </div>

        <div className="xl:col-span-1 xl:row-span-2">
          <div className="grid-container">
            <img
              src="/assets/grid4.png"
              alt="grid-4"
              className="w-full md:h-[126px] sm:h-[276px] h-40 object-cover sm:object-top"
            />
            <div className="space-y-2">
              <p className="grid-subtext text-center">Contact me</p>
              <div className="copy-container" onClick={handleCopy}>
                <img
                  src={hasCopied ? "assets/tick.svg" : "assets/copy.svg"}
                  alt="copy"
                />
                <p className="lg:text-xl md:text-lg text-base font-medium text-gray_gradient text-white">
                  subhanimran4@gmail.com
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
