import { Suspense, useEffect, useState } from "react"
import { Canvas } from '@react-three/fiber'

import { OrbitControls, Preload, useGLTF } from "@react-three/drei"

import CanvasLoader from "./loader"

type computersProps = {
    isMobile: boolean
}

const Computers = ({ isMobile }: computersProps) => {
    const computer = useGLTF('/desktop_pc/scene.gltf')

    return (
        <mesh>
            <hemisphereLight intensity={0.15}
                groundColor="block"
            />
            <pointLight intensity={1} />
            <spotLight
                position={[-20, 50, 0]}
                angle={Math.PI * 3 / 4}
                penumbra={1}
                intensity={10000}
                castShadow
                shadow-mapSize={1024}
            />
            <spotLight
                position={[20, 35, 0]}
                angle={Math.PI * 3 / 4}
                penumbra={1}
                intensity={10000}
                castShadow
                shadow-mapSize={1024}
            />
            <primitive object={computer.scene}
                scale={isMobile ? 0.7 : 0.75}
                position={isMobile ? [-2, -3, -2.2] : [-1, -3.25, -1.5]}
                rotation={[-0.01, -0.2, -0.1]}
            />
        </mesh>

    )
}

const ComputerCanvas = () => {
    const [isMobile, setIsMobile] = useState(false)

    useEffect(() => {
        const mediaQuery = window.matchMedia('(max-width: 500px)')
        mediaQuery.addEventListener('change', (e) => {
            setIsMobile(e.matches)
        })
        const handleMediaQueryChange = (e: MediaQueryListEvent) => {
            setIsMobile(e.matches)
        }

        mediaQuery.addEventListener('change', handleMediaQueryChange)
        return () => {
            mediaQuery.removeEventListener('change', handleMediaQueryChange)
        }
    }, [])
    return (
        <Canvas
            camera={{ position: [20, 3, 5], fov: 25 }}
            shadows
            className="w-full h-screen"
            gl={{ preserveDrawingBuffer: true }}
        >
            <Suspense fallback={<CanvasLoader />}>
                <OrbitControls
                    enableZoom={false}
                    maxPolarAngle={Math.PI / 2}
                    minPolarAngle={Math.PI / 2}
                />
                <Computers isMobile={isMobile} />
            </Suspense>
            <Preload all />
        </Canvas>
    )
}

export default ComputerCanvas