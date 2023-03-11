import { useFBX } from "@react-three/drei";

const Model = () => {
  const fbx = useFBX("rocket.fbx");
  const fbx2 = useFBX("iwa3.fbx");

  fbx.rotation.set(0, 0, -0.5);
  fbx.position.set(0, -3, 0);
  fbx2.position.set(0, -7, 0);
  // if (isDesktopOrLaptop) {
  //   // fbx.position.set(10, 0, -0.5);
  //   // fbx.quaternion.set(0, 0, 0, 0);
  //   fbx.position.set(0, -3, 0);
  //   // fbx.rotation.set(0, 0, 0);

  //   fbx2.position.set(0, -7, 0);
  //   // fbx2.position.set(10, -7, 0);
  // } else {
  //   fbx2.position.set(0, -7, 0);
  // }

  return (
    <>
      <primitive object={fbx} scale={0.1} />;
      <primitive object={fbx2} scale={0.05} />;
    </>
  );
};

export default Model;
