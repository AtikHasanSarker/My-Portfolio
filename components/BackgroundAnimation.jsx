"use client";
import { useEffect, useRef } from "react";
import * as THREE from "three";

export default function BackgroundAnimation() {
  const canvasRef = useRef(null);

  useEffect(() => {
    if (!canvasRef.current) return;

    const scene = new THREE.Scene();
    const camera = new THREE.PerspectiveCamera(
      75,
      window.innerWidth / window.innerHeight,
      0.2,
      1000
    );

    const renderer = new THREE.WebGLRenderer({
      canvas: canvasRef.current,
      alpha: true,
    });

    renderer.setSize(window.innerWidth, window.innerHeight);
    renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));

    const handleResize = () => {
      camera.aspect = window.innerWidth / window.innerHeight;
      camera.updateProjectionMatrix();
      renderer.setSize(window.innerWidth, window.innerHeight);
    };

    window.addEventListener("resize", handleResize);

    // Particle
    const particlesGeometry = new THREE.BufferGeometry();
    const particlesCount = 2000;
    const posArray = new Float32Array(particlesCount * 3);

    for (let i = 0; i < particlesCount * 3; i++) {
      posArray[i] = (Math.random() - 0.5) * 20;
    }

    particlesGeometry.setAttribute(
      "position",
      new THREE.BufferAttribute(posArray, 3)
    );

    const particlesMaterial = new THREE.PointsMaterial({
      size: 0.02,
    });

    const particlesMesh = new THREE.Points(particlesGeometry, particlesMaterial);
    scene.add(particlesMesh);

    let animationFrameId;

    const animate = () => {
      animationFrameId = requestAnimationFrame(animate);
      particlesMesh.rotation.y += 0.0007;
      particlesMesh.rotation.x += 0.0003;
      renderer.render(scene, camera);
    };

    animate();

    return () => {
      window.removeEventListener("resize", handleResize);
      cancelAnimationFrame(animationFrameId);
      particlesGeometry.dispose();
      particlesMaterial.dispose();
      renderer.dispose();
    };
  }, []);

  return (
    <>
      <canvas id="bg" ref={canvasRef}></canvas>

      {/* all BG design here */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none z-0">
        <div className="absolute top-[-10px] right-[-10px] min-w-[30%] min-h-[30%] rounded-full bg-[#1E1C4F] blur-[120px] opacity-70"></div>
        <div className="absolute top-[400px] left-[-100px] min-w-[30%] min-h-[30%] rounded-full bg-[#141087] blur-[200px] opacity-90"></div>
        <div className="absolute top-[1000px] left-[-100px] min-w-[30%] min-h-[30%] rounded-full bg-[#2c297d] blur-[200px] opacity-70"></div>
        <div className="absolute top-[1600px] right-[-20px] min-w-[30%] min-h-[30%] rounded-full bg-[#5710db] blur-[200px] opacity-90"></div>
        <div className="absolute top-[2100px] left-[200px] min-w-[30%] min-h-[30%] rounded-full bg-[#3d02aa] blur-[120px] opacity-70"></div>
        <div className="absolute top-[2800px] left-[-100px] min-w-[30%] min-h-[30%] rounded-full bg-[#5505eb] blur-[200px] opacity-70"></div>
      </div>

      {/* for animation */}
      <div className="fixed inset-0 overflow-hidden pointer-events-none z-[11]">
        <div className="blob blob1"></div>
        <div className="blob blob2"></div>
        <div className="blob blob3"></div>
      </div>
    </>
  );
}
