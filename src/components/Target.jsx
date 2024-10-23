import { useGLTF } from "@react-three/drei"
import { useRef } from "react"
import gsap from "gsap"
import { useGSAP } from "@gsap/react"
import { useMediaQuery } from "react-responsive";

const Target = (props) => {
  const isSmall = useMediaQuery({ maxWidth: 440 });
  const isMobile = useMediaQuery({ maxWidth: 768 });
  const isTablet = useMediaQuery({ minWidth: 768, maxWidth: 1024 });
  
  const targetRef = useRef();
  const { scene } = useGLTF("https://vazxmixjsiawhamofees.supabase.co/storage/v1/object/public/models/target-stand/model.gltf");

  useGSAP(() => {
    gsap.to(targetRef.current.position, {
        y: targetRef.current.position.y + 0.5,
        duration: 1.5,
        repeat: -1,
        yoyo: true,
    })
  })

  return (
    <mesh {...props} ref={targetRef} rotation={[0, Math.PI / 5, 0]} scale={isSmall ? 1 : isMobile ? 1.2 : isTablet ? 1.3 : 1.5}>
        <primitive object={scene} />
    </mesh>
  )
}

export default Target