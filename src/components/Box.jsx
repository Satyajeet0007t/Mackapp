const Box = ({
  position = [0, 0, 0],
  scale = 1,
  materialColor = "#ffffff",
}) => {
  return (
    <mesh position={position} scale={scale}>
      <boxGeometry args={[1, 1, 1]} />
      <meshStandardMaterial color={materialColor} />
    </mesh>
  );
};

export default Box;
