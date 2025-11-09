import { Canvas, useFrame } from "@react-three/fiber";
import { Points, PointMaterial } from "@react-three/drei";
import { useRef, useMemo } from "react";

function Particulas() {
  const ref = useRef();

  const positions = useMemo(() => {
    const p = new Float32Array(6000);
    for (let i = 0; i < p.length; i += 3) {
      // Gera valores controlados (sem risco de NaN)
      p[i] = (Math.random() - 0.5) * 25;
      p[i + 1] = (Math.random() - 0.5) * 25;
      p[i + 2] = (Math.random() - 0.5) * 25;
    }
    return p;
  }, []);

  useFrame((state, delta) => {
    if (!ref.current) return;
    ref.current.rotation.x -= delta / 50;
    ref.current.rotation.y -= delta / 70;
  });

  return (
    <Points ref={ref} positions={positions} stride={3}>
      <PointMaterial
        transparent
        color="#00eaff"
        size={0.03}
        sizeAttenuation
        depthWrite={false}
      />
    </Points>
  );
}

function FundoFuturistico() {
  return (
    <div className="fixed top-0 left-0 w-full h-full -z-10">
      <Canvas camera={{ position: [0, 0, 10], fov: 75 }}>
        <color attach="background" args={["#01010f"]} />
        <fog attach="fog" args={["#01010f", 5, 25]} />

        {/* Luzes sutis para dar vida às partículas */}
        <ambientLight intensity={0.4} />
        <pointLight position={[5, 5, 5]} color="#00ffff" intensity={2} />
        <pointLight position={[-5, -5, -5]} color="#ff00ff" intensity={1.2} />

        <Particulas />
      </Canvas>
    </div>
  );
}

export default FundoFuturistico;
