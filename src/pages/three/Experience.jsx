import {
    Float,
    Octahedron,
    RoundedBox,
    Torus,
} from "@react-three/drei";
import { Canvas } from "@react-three/fiber";
import { Perf } from "r3f-perf";
import { Suspense, useRef } from "react";

const Experience = () => {

    const groupRef = useRef(null);

    // const handleScroll = () => {
    //     if(groupRef.current){
    //         groupRef.current.position.y = (window.scrollY/window.innerHeight) * 10;
    //     }
    //   };

    // useEffect(() => {
    //     window.addEventListener('scroll', handleScroll);
    //     return () => {
    //       window.removeEventListener('scroll', handleScroll);
    //     };
    //   }, []);
    return (
        <div className="absolute top-0 left-0 w-full h-full pointer-events-none -z-10">
            <Canvas>
            <color attach="background" args={["black"]} />
                <Perf position={'top-left'}></Perf>
                <Suspense>
                <group ref={groupRef}>
                    <group position={[0,0,0]}>
                    <Float
                        speed={2}
                        rotationIntensity={3}
                        floatIntensity={1}
                        floatingRange={[-0.5, 0.5]}
                    >
                        <RoundedBox
                            args={[1, 1, 1]}
                            position={[-2, 0, 0]}
                            rotation={[0, Math.PI * 0.15, 0]}
                            radius={0.2}
                            smoothness={4}
                            bevelSegments={4}
                            creaseAngle={0.4}
                        >
                            <meshBasicMaterial color="#805300" wireframe/>
                        </RoundedBox>
                    </Float>
                    <Float
                        speed={1}
                        rotationIntensity={6}
                        floatIntensity={5}
                        floatingRange={[-0.5, 0.5]}
                    >
                        <Octahedron args={[1, 1, 1]} position={[0, 1, 0]}>
                            <meshBasicMaterial
                                color="#805300"
                                wireframe
                            />
                        </Octahedron>
                    </Float>
                    <Float
                        speed={1}
                        rotationIntensity={3}
                        floatIntensity={2}
                        floatingRange={[-0.05, 0.5]}
                    >
                        <Torus
                            args={[10, 3, 16, 30]}
                            position={[2, -1, 0]}
                            rotation={[0, -Math.PI * 0.1, 0]}
                            scale={0.075}
                        >
                            <meshBasicMaterial
                                color="#805300"
                                wireframe
                            />
                        </Torus>
                    </Float>
                    </group>
                    </group>
                </Suspense>
            </Canvas>
        </div>
    );
};

export default Experience;
