import Globe from "react-globe.gl";

const GlobeView = () => (
  <Globe
    height={326}
    width={326}
    backgroundColor="rgba(0, 0, 0, 0)"
    backgroundImageOpacity={0.5}
    showAtmosphere
    showGraticules
    globeImageUrl="//unpkg.com/three-globe/example/img/earth-night.jpg"
  />
);

export default GlobeView;
