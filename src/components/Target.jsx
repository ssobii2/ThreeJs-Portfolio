import { useRef } from "react"
import gsap from "gsap"
import { useGSAP } from "@gsap/react"
import { useMediaQuery } from "react-responsive";

const Target = (props) => {
  const isSmall = useMediaQuery({ maxWidth: 440 });
  const isMobile = useMediaQuery({ maxWidth: 768 });
  const isTablet = useMediaQuery({ minWidth: 768, maxWidth: 1024 });
  
  const targetRef = useRef();

  useGSAP(() => {
    gsap.to(targetRef.current.position, {
        y: targetRef.current.position.y + 0.5,
        duration: 1.5,
        repeat: -1,
        yoyo: true,
    })
  })

  return (
    <group {...props} ref={targetRef} rotation={[0, Math.PI / 5, 0]} scale={isSmall ? 1 : isMobile ? 1.2 : isTablet ? 1.3 : 1.5}>
        <mesh position={[0, 1, 0]}>
            <cylinderGeometry args={[0.05, 0.05, 2, 32]} />
            <meshStandardMaterial color="#333" />
        </mesh>
        <mesh position={[0, 2, 0]} rotation={[Math.PI / 2, 0, 0]}>
            <cylinderGeometry args={[0.5, 0.5, 0.1, 32]} />
            <meshStandardMaterial color="orange" />
        </mesh>
        <mesh position={[0, 2, 0.06]} rotation={[Math.PI / 2, 0, 0]}>
            <cylinderGeometry args={[0.3, 0.3, 0.05, 32]} />
            <meshStandardMaterial color="white" />
        </mesh>
        <mesh position={[0, 2, 0.1]} rotation={[Math.PI / 2, 0, 0]}>
            <cylinderGeometry args={[0.1, 0.1, 0.05, 32]} />
            <meshStandardMaterial color="red" />
        </mesh>
    </group>
  )
}

export default Target