import { useRef } from 'react';
import { Canvas, useFrame } from '@react-three/fiber';
import { OrbitControls, Float, MeshWobbleMaterial, Html } from '@react-three/drei';
import { Code, Terminal, Sparkles, Cpu } from 'lucide-react';

function Laptop3DModel() {
  const groupRef = useRef();
  const screenRef = useRef();

  useFrame((state) => {
    const t = state.clock.getElapsedTime();
    if (groupRef.current) {
      groupRef.current.rotation.y = Math.sin(t / 4) * 0.2;
      groupRef.current.rotation.x = Math.cos(t / 4) * 0.08;
      groupRef.current.position.y = Math.sin(t / 2) * 0.1;
    }
  });

  return (
    <group ref={groupRef} position={[0, -0.6, 0]} scale={1.1}>
      {/* Laptop Base Keyboard Section */}
      <mesh position={[0, 0, 0]}>
        <boxGeometry args={[3.2, 0.15, 2.2]} />
        <meshStandardMaterial color="#1E1B2E" roughness={0.3} metalness={0.8} />
      </mesh>

      {/* Keyboard Trackpad */}
      <mesh position={[0, 0.08, 0.6]}>
        <boxGeometry args={[0.9, 0.01, 0.6]} />
        <meshStandardMaterial color="#2E2A45" roughness={0.2} metalness={0.9} />
      </mesh>

      {/* Keyboard Key Area */}
      <mesh position={[0, 0.08, -0.3]}>
        <boxGeometry args={[2.8, 0.02, 1.1]} />
        <meshStandardMaterial color="#120E22" roughness={0.5} />
      </mesh>

      {/* Laptop Screen Hinge */}
      <mesh position={[0, 0.1, -1.05]}>
        <cylinderGeometry args={[0.08, 0.08, 2.8, 16]} rotation={[0, 0, Math.PI / 2]} />
        <meshStandardMaterial color="#7C3AED" roughness={0.2} metalness={0.9} />
      </mesh>

      {/* Laptop Screen Frame */}
      <group position={[0, 1.25, -1.05]} rotation={[-0.15, 0, 0]}>
        <mesh ref={screenRef}>
          <boxGeometry args={[3.2, 2.3, 0.08]} />
          <meshStandardMaterial color="#120F24" roughness={0.3} metalness={0.8} />
        </mesh>

        {/* Display Screen Glow Inner Face */}
        <mesh position={[0, 0, 0.045]}>
          <planeGeometry args={[3.0, 2.1]} />
          <meshBasicMaterial color="#0A0817" />
        </mesh>

        {/* Screen Content HTML Overlay */}
        <Html
          transform
          wrapperClass="laptop-screen-content"
          position={[0, 0, 0.05]}
          distanceFactor={1.5}
        >
          <div className="w-[420px] h-[280px] bg-slate-950/90 rounded-lg border border-purple-500/40 p-4 text-xs font-mono text-purple-300 shadow-2xl flex flex-col justify-between backdrop-blur-md select-none overflow-hidden">
            {/* Window Bar */}
            <div className="flex items-center justify-between border-b border-purple-900/50 pb-2 mb-2">
              <div className="flex space-x-1.5">
                <span className="w-2.5 h-2.5 rounded-full bg-rose-500 inline-block"></span>
                <span className="w-2.5 h-2.5 rounded-full bg-amber-500 inline-block"></span>
                <span className="w-2.5 h-2.5 rounded-full bg-emerald-500 inline-block"></span>
              </div>
              <span className="text-[10px] text-cyan-400 font-semibold tracking-wide flex items-center gap-1">
                <Code className="w-3 h-3" /> ammara.dev
              </span>
            </div>

            {/* Simulated Code Lines */}
            <div className="space-y-1.5 opacity-90 text-[11px] font-mono leading-tight">
              <p className="text-purple-400">
                <span className="text-pink-400">const</span> engineer = <span className="text-cyan-300">new</span> Developer(&#123;
              </p>
              <p className="pl-4 text-emerald-300">
                name: <span className="text-amber-200">&apos;Ammara Lohani&apos;</span>,
              </p>
              <p className="pl-4 text-emerald-300">
                stack: [<span className="text-cyan-300">&apos;React&apos;</span>, <span className="text-cyan-300">&apos;Node&apos;</span>, <span className="text-cyan-300">&apos;MongoDB&apos;</span>],
              </p>
              <p className="pl-4 text-emerald-300">
                passion: <span className="text-amber-200">&apos;Building Scalable Apps&apos;</span>,
              </p>
              <p className="pl-4 text-purple-300">
                status: <span className="text-pink-400">&apos;Ready to innovate&apos;</span>
              </p>
              <p className="text-purple-400">&#125;);</p>
              <p className="text-cyan-400 animate-pulse pt-1">
                &gt; engineer.compileAmazingWebApps(); <span className="inline-block w-1.5 h-3 bg-cyan-400 ml-1"></span>
              </p>
            </div>

            {/* Bottom Glow Status */}
            <div className="flex items-center justify-between text-[9px] text-slate-400 border-t border-purple-900/40 pt-1.5">
              <span className="text-purple-400 flex items-center gap-1">
                <Cpu className="w-3 h-3" /> 60 FPS | React 19 + 3D
              </span>
              <span className="text-emerald-400 font-semibold">ONLINE</span>
            </div>
          </div>
        </Html>
      </group>

      {/* Floating Ambient Cubes & Tech Elements around laptop */}
      <Float speed={2} rotationIntensity={1.5} floatIntensity={2}>
        <mesh position={[-2.2, 1.2, 0.5]}>
          <boxGeometry args={[0.4, 0.4, 0.4]} />
          <MeshWobbleMaterial color="#7C3AED" factor={0.6} speed={2} roughness={0.1} />
        </mesh>
      </Float>

      <Float speed={2.5} rotationIntensity={2} floatIntensity={1.8}>
        <mesh position={[2.2, 0.8, -0.2]}>
          <icosahedronGeometry args={[0.3, 0]} />
          <MeshWobbleMaterial color="#06B6D4" factor={0.8} speed={3} roughness={0.2} />
        </mesh>
      </Float>

      <Float speed={1.8} rotationIntensity={1.2} floatIntensity={2.2}>
        <mesh position={[2.0, 1.8, 0.4]}>
          <torusGeometry args={[0.25, 0.08, 16, 32]} />
          <meshStandardMaterial color="#EC4899" roughness={0.1} metalness={0.9} />
        </mesh>
      </Float>
    </group>
  );
}

export default function LaptopCanvas() {
  return (
    <div className="w-full h-[420px] md:h-[520px] relative cursor-grab active:cursor-grabbing select-none">
      <Canvas
        camera={{ position: [0, 0, 5.5], fov: 45 }}
        gl={{ antialias: true, alpha: true }}
      >
        <ambientLight intensity={0.7} />
        <directionalLight position={[10, 10, 5]} intensity={1.2} color="#A855F7" />
        <pointLight position={[-5, -5, -5]} intensity={0.8} color="#06B6D4" />
        <pointLight position={[0, 2, 2]} intensity={1.5} color="#EC4899" />
        
        <Laptop3DModel />
        
        <OrbitControls
          enableZoom={false}
          enablePan={false}
          maxPolarAngle={Math.PI / 2}
          minPolarAngle={Math.PI / 3}
          rotateSpeed={0.5}
        />
      </Canvas>
    </div>
  );
}
