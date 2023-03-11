import { Suspense, useEffect } from "react";
import { OrbitControls, PerspectiveCamera, Stars } from "@react-three/drei";
import { Canvas } from "@react-three/fiber";
import styles from "./style.module.css";
import dynamic from "next/dynamic";
import Link from "next/link";
import { useMediaQuery } from "react-responsive";

const Model = dynamic(() => import("../2022_3_11/Model"));

const DrawCanvas = () => {
  const isDesktop = useMediaQuery({ minWidth: 992 });
  const isTablet = useMediaQuery({ minWidth: 640, maxWidth: 991 });
  const isMobile = useMediaQuery({ maxWidth: 639 });

  console.log(isDesktop, isMobile);

  return (
    <>
      <div className={isDesktop ? styles.bgDesktop : null} />
      <div className={isTablet ? styles.bgTablet : null} />
      <div className={isMobile ? styles.bgMobile : null} />
      {/* <div className={isDesktop && styles.bgDesktop} /> */}
      {/* <div className={isMobile && styles.bgModile} /> */}
      {/* <div className={isDesktop && styles.desktop}> */}
      {/* <div className={isMobile && styles.mobile}> */}
      {/* <div style={isDesktop ? { width: "600px", height: "400px" } : null}> */}
      {/* <div style={isMobile ? { width: "280px", height: "140px" } : null}> */}
      <h1 className={styles.h1}>
        Get Started <span style={{ fontSize: "0.4em" }}>with</span>
        <br />
        <span>WebApp</span>
      </h1>
      <Canvas linear shadows className={styles.canvas}>
        <fog attach="fog" args={["#272730", 16, 30]} />
        <ambientLight args={["#ffffff", 1]} />

        <PerspectiveCamera makeDefault position={[0, 0, 16]} fov={75}>
          <pointLight intensity={1} position={[0, 0, -10]} />
          <spotLight
            castShadow
            intensity={2.25}
            angle={0.2}
            penumbra={1}
            position={[-25, 20, -15]}
            shadow-mapSize={[1024, 1024]}
            shadow-bias={-0.0001}
          />
        </PerspectiveCamera>

        <Suspense fallback={null}>
          <Model className={styles.model} />
        </Suspense>
        <OrbitControls
          autoRotate
          enablePan={false}
          enableZoom={false}
          maxPolarAngle={Math.PI / 2}
          minPolarAngle={Math.PI / 2}
        />
        <Stars radius={500} depth={50} count={1000} factor={10} />
      </Canvas>
      {/* </div> */}
      {/* </div> */}
      {/* <div className={styles.layer} /> */}
    </>
  );
};

export default DrawCanvas;
