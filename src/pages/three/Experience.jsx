import {
    Circle,
    Float,
    Lathe,
    Octahedron,
    Ring,
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
        <div className="absolute top-0 left-0 w-full h-full pointer-events-none -z-10 hidden lg:block">
            <Canvas>
                <color attach="background" args={["black"]} />
                {/* <Perf position={'top-left'}></Perf> */}
                <Suspense>
                    <group ref={groupRef}>
                        <group position={[0, 0, 0]}>
                            <Float
                                speed={2}
                                rotationIntensity={3}
                                floatIntensity={1}
                                floatingRange={[-0.5, 0.5]}
                            >
                                <RoundedBox
                                    args={[1, 1, 1]}
                                    position={[-2, -1.5, 0]}
                                    rotation={[0, Math.PI * 0.15, 0]}
                                    smoothness={1}
                                    bevelSegments={1}
                                    scale={0.75}
                                >
                                    <meshBasicMaterial
                                        color="#FAB972"
                                        wireframe
                                    />
                                </RoundedBox>
                            </Float>
                            <Float
                                speed={1}
                                rotationIntensity={5}
                                floatIntensity={0}
                                floatingRange={[-0.5, 0.5]}
                            >
                                <Lathe position={[0, 3, 0]} scale={1}>
                                    <meshBasicMaterial
                                        color="#FAB972"
                                        wireframe
                                    />
                                </Lathe>
                            </Float>
                            <Float
                                speed={2}
                                rotationIntensity={3}
                                floatIntensity={1}
                                floatingRange={[-0.4, 0.4]}
                            >
                                <Lathe position={[2, -1, 0]} scale={0.5}>
                                    <meshBasicMaterial
                                        color="#FAB972"
                                        wireframe
                                    />
                                </Lathe>
                                <Octahedron
                                    args={[1, 1, 1]}
                                    position={[2, -1, 0]}
                                    scale={0.5}
                                >
                                    <meshBasicMaterial
                                        color="#FAB972"
                                        wireframe
                                    />
                                </Octahedron>
                            </Float>
                        </group>
                    </group>
                </Suspense>
            </Canvas>
        </div>
    );
};

export default Experience;
