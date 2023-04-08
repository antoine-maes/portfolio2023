import React from "react";

export default function Box(props) {
  return (
    <mesh {...props} recieveShadow={true} castShadow={true}>
      <boxBufferGeometry />
      <meshPhysicalMaterial  color={"white"} />
    </mesh>
  );
}
