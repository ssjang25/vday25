import { Canvas } from "@react-three/fiber";
import { Computer } from "./ComputerPage";
import "../styles/Model.css";
import { OrbitControls, Environment } from "@react-three/drei";
import { useNavigate } from "react-router-dom";

function Model() {
  const navigate = useNavigate();
  const handleClick = () => {
    navigate("/passcode-required");
  };
  return (
    <div className="computer-container">
      <Canvas
        dpr={[1, 2]}
        style={{
          width: "100%",
          height: "100%",
        }}
      >
        <Environment preset="studio" />
        <OrbitControls />
        <Computer
          onPointerOver={() => (document.body.style.cursor = "pointer")}
          onPointerOut={() => (document.body.style.cursor = "auto")}
          onClick={handleClick}
          position={[0, 0.1, 0]}
          scale={[3, 3, 3]}
        />
      </Canvas>
    </div>
  );
}

export default Model;
