import { Float, useGLTF } from '@react-three/drei'
import { useMediaQuery } from "react-responsive";

const ReactLogo = (props) => {
  const isSmall = useMediaQuery({ maxWidth: 440 });
  const isMobile = useMediaQuery({ maxWidth: 768 });
  const isTablet = useMediaQuery({ minWidth: 768, maxWidth: 1024 });

  const { nodes, materials } = useGLTF('./models/react.glb')
  return (
    <Float floatIntensity={1}>
      <group dispose={null} position={[8, 8, 0]} {...props} scale={isSmall ? 0.3 : isMobile ? 0.3 : isTablet ? 0.3 : 0.4}>
        <mesh
          geometry={nodes['React-Logo_Material002_0'].geometry}
          material={materials['Material.002']}
          position={[0, 0.079, 0.181]}
          rotation={[0, 0, -Math.PI / 2]}
          scale={[0.39, 0.39, 0.5]}
        />
      </group>
    </Float>
  )
}

useGLTF.preload('./models/react.glb')

export default ReactLogo