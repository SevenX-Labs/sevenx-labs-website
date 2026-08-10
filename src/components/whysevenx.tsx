"use client";

import React, { useEffect, useRef, useState } from "react";
import * as THREE from "three";

/* ═══════════════════════════════════════════════════════════════
   WHY SEVENX — Premium Differentiator Section
   High-Contrast, Tight Editorial Layout & Computational Sculpture
   ═══════════════════════════════════════════════════════════════ */

const differentiators = [
  {
    id: "business",
    number: "01",
    label: "BUSINESS-FIRST",
    headline: "We understand the problem before building the solution.",
    body: "Start with business goals, users and requirements — not just a technical specification.",
    node: "PRODUCT",
  },
  {
    id: "production",
    number: "02",
    label: "PRODUCTION-READY",
    headline: "Built for the real world.",
    body: "Security, performance, scalability and clean architecture are considered from the beginning.",
    node: "ENGINEERING",
  },
  {
    id: "modern",
    number: "03",
    label: "MODERN ENGINEERING",
    headline: "The right technology, not simply the latest technology.",
    body: "Use modern web, mobile, cloud and AI technologies where they genuinely improve the product.",
    node: "TECHNOLOGY",
  },
  {
    id: "partnership",
    number: "04",
    label: "LONG-TERM PARTNERSHIP",
    headline: "We don't disappear after launch.",
    body: "Support, maintenance, optimization and continuous improvement as the product grows.",
    node: "GROWTH",
  },
];

/* ─────────── Three.js Computational Sculpture ─────────── */

function EngineeringCore({
  hoveredIdx,
}: {
  hoveredIdx: number;
}) {
  const mountRef = useRef<HTMLDivElement>(null);
  const hoveredRef = useRef(hoveredIdx);

  useEffect(() => {
    hoveredRef.current = hoveredIdx;
  }, [hoveredIdx]);

  useEffect(() => {
    const container = mountRef.current;
    if (!container) return;

    let disposed = false;

    const scene = new THREE.Scene();
    const camera = new THREE.PerspectiveCamera(
      42,
      container.clientWidth / container.clientHeight,
      1,
      1200
    );
    camera.position.set(0, 0, 420);

    const renderer = new THREE.WebGLRenderer({ alpha: true, antialias: true });
    renderer.setSize(container.clientWidth, container.clientHeight);
    renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
    container.appendChild(renderer.domElement);

    // Lighting — restrained, clean
    const ambientLight = new THREE.AmbientLight(0xffffff, 0.85);
    scene.add(ambientLight);

    const dirLight1 = new THREE.DirectionalLight(0x3b82f6, 1.2);
    dirLight1.position.set(200, 250, 200);
    scene.add(dirLight1);

    const dirLight2 = new THREE.DirectionalLight(0x7c3aed, 0.8);
    dirLight2.position.set(-200, -150, 180);
    scene.add(dirLight2);

    const mainGroup = new THREE.Group();
    scene.add(mainGroup);

    // ── Central Core: Icosahedron wireframe ──
    const coreGeo = new THREE.IcosahedronGeometry(32, 1);
    const coreEdges = new THREE.EdgesGeometry(coreGeo);
    const coreLineMat = new THREE.LineBasicMaterial({
      color: 0x2563eb,
      transparent: true,
      opacity: 0.75,
    });
    const coreWireframe = new THREE.LineSegments(coreEdges, coreLineMat);
    mainGroup.add(coreWireframe);

    // Inner glowing sphere
    const innerGeo = new THREE.SphereGeometry(16, 32, 32);
    const innerMat = new THREE.MeshStandardMaterial({
      color: 0x3b82f6,
      emissive: 0x2563eb,
      emissiveIntensity: 0.45,
      metalness: 0.8,
      roughness: 0.2,
      transparent: true,
      opacity: 0.7,
    });
    const innerSphere = new THREE.Mesh(innerGeo, innerMat);
    mainGroup.add(innerSphere);

    // ── Four orbital principle rings ──
    const nodeColors = [0x2563eb, 0x0891b2, 0x7c3aed, 0x059669];
    const nodePositions = [
      new THREE.Vector3(-110, 70, 20),   // BUSINESS / PRODUCT
      new THREE.Vector3(110, 65, -15),   // ENGINEERING
      new THREE.Vector3(100, -70, 25),   // TECHNOLOGY
      new THREE.Vector3(-100, -75, -10),  // GROWTH
    ];

    // Node spheres
    const nodeMeshes: THREE.Mesh[] = [];
    const nodeGlows: THREE.Mesh[] = [];
    nodePositions.forEach((pos, idx) => {
      const nodeGeo = new THREE.SphereGeometry(9, 24, 24);
      const nodeMat = new THREE.MeshStandardMaterial({
        color: nodeColors[idx],
        emissive: nodeColors[idx],
        emissiveIntensity: 0.4,
        metalness: 0.85,
        roughness: 0.15,
        transparent: true,
        opacity: 0.9,
      });
      const nodeMesh = new THREE.Mesh(nodeGeo, nodeMat);
      nodeMesh.position.copy(pos);
      mainGroup.add(nodeMesh);
      nodeMeshes.push(nodeMesh);

      // Glow ring around node
      const glowGeo = new THREE.TorusGeometry(16, 1.2, 8, 48);
      const glowMat = new THREE.MeshBasicMaterial({
        color: nodeColors[idx],
        transparent: true,
        opacity: 0.35,
      });
      const glowMesh = new THREE.Mesh(glowGeo, glowMat);
      glowMesh.position.copy(pos);
      mainGroup.add(glowMesh);
      nodeGlows.push(glowMesh);
    });

    // ── Connection lines from core to each node ──
    const connectionLines: THREE.Line[] = [];
    nodePositions.forEach((pos, idx) => {
      const points: THREE.Vector3[] = [];
      const segments = 40;
      for (let i = 0; i <= segments; i++) {
        const t = i / segments;
        const mid = new THREE.Vector3(
          pos.x * 0.4 + Math.sin(t * Math.PI) * (idx % 2 === 0 ? 25 : -25),
          pos.y * 0.4 + Math.cos(t * Math.PI) * 15,
          pos.z * 0.5 + Math.sin(t * Math.PI * 2) * 10
        );
        const pt = new THREE.Vector3().lerpVectors(
          new THREE.Vector3(0, 0, 0),
          pos,
          t
        );
        pt.add(mid.clone().multiplyScalar(Math.sin(t * Math.PI) * 0.3));
        points.push(pt);
      }
      const lineGeo = new THREE.BufferGeometry().setFromPoints(points);
      const lineMat = new THREE.LineBasicMaterial({
        color: nodeColors[idx],
        transparent: true,
        opacity: 0.4,
      });
      const line = new THREE.Line(lineGeo, lineMat);
      mainGroup.add(line);
      connectionLines.push(line);
    });

    // ── Outer orbital ring (subtle) ──
    const orbitGeo = new THREE.TorusGeometry(145, 0.8, 8, 120);
    const orbitMat = new THREE.MeshBasicMaterial({
      color: 0x2563eb,
      transparent: true,
      opacity: 0.2,
    });
    const orbitRing = new THREE.Mesh(orbitGeo, orbitMat);
    orbitRing.rotation.x = Math.PI * 0.45;
    mainGroup.add(orbitRing);

    const orbitGeo2 = new THREE.TorusGeometry(125, 0.6, 8, 100);
    const orbitMat2 = new THREE.MeshBasicMaterial({
      color: 0x7c3aed,
      transparent: true,
      opacity: 0.15,
    });
    const orbitRing2 = new THREE.Mesh(orbitGeo2, orbitMat2);
    orbitRing2.rotation.x = Math.PI * 0.6;
    orbitRing2.rotation.y = Math.PI * 0.3;
    mainGroup.add(orbitRing2);

    // ── Floating micro-particles ──
    const particleCount = 240;
    const pGeo = new THREE.BufferGeometry();
    const pPositions = new Float32Array(particleCount * 3);
    const pColors = new Float32Array(particleCount * 3);

    for (let i = 0; i < particleCount; i++) {
      const r = 60 + Math.random() * 110;
      const theta = Math.random() * Math.PI * 2;
      const phi = Math.acos(2 * Math.random() - 1);
      pPositions[i * 3] = r * Math.sin(phi) * Math.cos(theta);
      pPositions[i * 3 + 1] = r * Math.sin(phi) * Math.sin(theta);
      pPositions[i * 3 + 2] = r * Math.cos(phi);

      const c = new THREE.Color(
        [0x2563eb, 0x0891b2, 0x7c3aed, 0x059669][Math.floor(Math.random() * 4)]
      );
      pColors[i * 3] = c.r;
      pColors[i * 3 + 1] = c.g;
      pColors[i * 3 + 2] = c.b;
    }

    pGeo.setAttribute("position", new THREE.BufferAttribute(pPositions, 3));
    pGeo.setAttribute("color", new THREE.BufferAttribute(pColors, 3));

    // Soft radial particle texture
    const pCanvas = document.createElement("canvas");
    pCanvas.width = 32;
    pCanvas.height = 32;
    const pCtx = pCanvas.getContext("2d")!;
    const pGrad = pCtx.createRadialGradient(16, 16, 0, 16, 16, 16);
    pGrad.addColorStop(0, "rgba(255,255,255,1)");
    pGrad.addColorStop(0.5, "rgba(255,255,255,0.7)");
    pGrad.addColorStop(1, "rgba(255,255,255,0)");
    pCtx.fillStyle = pGrad;
    pCtx.fillRect(0, 0, 32, 32);

    const pMat = new THREE.PointsMaterial({
      size: 3.5,
      vertexColors: true,
      map: new THREE.CanvasTexture(pCanvas),
      transparent: true,
      opacity: 0.65,
      blending: THREE.NormalBlending,
      depthWrite: false,
    });
    const particles = new THREE.Points(pGeo, pMat);
    mainGroup.add(particles);

    // ── Mouse interaction ──
    const mouse = { x: 0, y: 0, targetX: 0, targetY: 0 };
    const onMouseMove = (e: MouseEvent) => {
      const rect = container.getBoundingClientRect();
      mouse.targetX = ((e.clientX - rect.left) / rect.width - 0.5) * 2;
      mouse.targetY = ((e.clientY - rect.top) / rect.height - 0.5) * 2;
    };
    window.addEventListener("mousemove", onMouseMove, { passive: true });

    // ── Animation Loop ──
    let frameId: number;
    const clock = new THREE.Clock();

    const animate = () => {
      if (disposed) return;
      frameId = requestAnimationFrame(animate);

      try {
        const t = clock.getElapsedTime();
        const hIdx = hoveredRef.current;

        // Mouse smoothing
        mouse.x += (mouse.targetX - mouse.x) * 0.05;
        mouse.y += (mouse.targetY - mouse.y) * 0.05;

        // Core rotation
        coreWireframe.rotation.y = t * 0.25;
        coreWireframe.rotation.x = t * 0.15;
        innerSphere.rotation.y = -t * 0.2;

        // Orbit rings
        orbitRing.rotation.z = t * 0.1;
        orbitRing2.rotation.z = -t * 0.08;

        // Particle slow orbit
        particles.rotation.y = t * 0.04;
        particles.rotation.x = Math.sin(t * 0.2) * 0.06;

        // Node hover reactions
        for (let i = 0; i < 4; i++) {
          const isActive = hIdx === i;
          const nodeMat = nodeMeshes[i].material as THREE.MeshStandardMaterial;
          const glowMat = nodeGlows[i].material as THREE.MeshBasicMaterial;
          const lineMat = connectionLines[i].material as THREE.LineBasicMaterial;

          const targetEmissive = isActive ? 0.9 : 0.4;
          nodeMat.emissiveIntensity +=
            (targetEmissive - nodeMat.emissiveIntensity) * 0.08;

          const targetScale = isActive ? 1.4 : 1.0;
          const s = nodeMeshes[i].scale.x;
          nodeMeshes[i].scale.setScalar(s + (targetScale - s) * 0.08);

          const targetGlow = isActive ? 0.8 : 0.35;
          glowMat.opacity += (targetGlow - glowMat.opacity) * 0.08;
          nodeGlows[i].rotation.z = t * (isActive ? 1.8 : 0.4);

          const targetLineOp = isActive ? 0.85 : 0.4;
          lineMat.opacity += (targetLineOp - lineMat.opacity) * 0.08;

          const basePos = nodePositions[i];
          const floatY = Math.sin(t * 1.0 + i * 1.5) * 3;
          nodeMeshes[i].position.y = basePos.y + floatY;
          nodeGlows[i].position.y = basePos.y + floatY;
        }

        // Group tilt from mouse
        mainGroup.rotation.y = t * 0.1 + mouse.x * 0.2;
        mainGroup.rotation.x = Math.sin(t * 0.4) * 0.05 - mouse.y * 0.15;
        mainGroup.position.y = Math.sin(t * 1.5) * 4;

        renderer.render(scene, camera);
      } catch (err) {
        console.warn("WhySevenX 3D error:", err);
      }
    };

    animate();

    const onResize = () => {
      if (!container || disposed) return;
      camera.aspect = container.clientWidth / container.clientHeight;
      camera.updateProjectionMatrix();
      renderer.setSize(container.clientWidth, container.clientHeight);
    };
    window.addEventListener("resize", onResize);

    return () => {
      disposed = true;
      cancelAnimationFrame(frameId);
      window.removeEventListener("resize", onResize);
      window.removeEventListener("mousemove", onMouseMove);
      if (container.contains(renderer.domElement)) {
        container.removeChild(renderer.domElement);
      }
      coreGeo.dispose();
      coreEdges.dispose();
      coreLineMat.dispose();
      innerGeo.dispose();
      innerMat.dispose();
      orbitGeo.dispose();
      orbitMat.dispose();
      orbitGeo2.dispose();
      orbitMat2.dispose();
      pGeo.dispose();
      pMat.dispose();
      renderer.dispose();
    };
  }, []);

  return (
    <div
      ref={mountRef}
      className="w-full h-full pointer-events-none"
    />
  );
}

/* ─────────── Main Component ─────────── */

export default function WhySevenX() {
  const [hoveredIdx, setHoveredIdx] = useState(-1);

  return (
    <section
      id="why-sevenx"
      className="relative w-full py-20 lg:py-28 bg-[#FAF9F6] text-zinc-900 border-t border-black/[0.06] overflow-hidden font-sans select-none"
    >
      {/* Background: Architectural Grid & Ambient Glow */}
      <div className="absolute inset-0 pointer-events-none z-0">
        <div className="absolute top-1/3 right-0 w-[700px] h-[700px] bg-gradient-to-bl from-blue-100/20 via-cyan-50/15 to-transparent rounded-full blur-3xl" />
        <div className="absolute bottom-0 left-0 w-[600px] h-[600px] bg-gradient-to-tr from-violet-100/15 to-transparent rounded-full blur-3xl" />
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#00000005_1px,transparent_1px),linear-gradient(to_bottom,#00000005_1px,transparent_1px)] bg-[size:64px_64px]" />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-6 md:px-12 lg:px-16">
        
        {/* ═══ HERO COMPOSITION: Asymmetric Left Text + Right 3D Sculpture ═══ */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-8 items-center mb-14 lg:mb-16">
          
          {/* LEFT: Editorial Header */}
          <div className="lg:col-span-6 flex flex-col items-start gap-6">
            {/* Label */}
            <div className="flex items-center gap-3">
              <span className="px-3.5 py-1 bg-black/[0.04] text-[#3B82F6] text-[10.5px] font-mono font-bold uppercase tracking-[0.3em] rounded-full border border-blue-200/60 flex items-center gap-2">
                <span className="w-1.5 h-1.5 rounded-full bg-[#3B82F6] animate-pulse" />
                WHY SEVENX
              </span>
              <span className="h-px w-20 bg-gradient-to-r from-blue-400/30 to-transparent" />
            </div>

            {/* Headline */}
            <h2 className="font-general text-4xl sm:text-5xl md:text-[3.4rem] font-extrabold text-black leading-[1.05] tracking-tight uppercase">
              ENGINEERING
              <br />
              THAT THINKS
              <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#3B82F6] via-blue-600 to-purple-600">
                BEYOND CODE.
              </span>
            </h2>

            {/* Supporting text */}
            <p className="text-slate-600 text-base md:text-lg leading-relaxed font-normal max-w-lg">
              We combine product thinking, engineering expertise and long-term
              partnership to build software that delivers real business value.
            </p>
          </div>

          {/* RIGHT: 3D Computational Sculpture */}
          <div className="lg:col-span-6 relative h-[320px] sm:h-[360px] lg:h-[380px] w-full flex items-center justify-center">
            {/* Node labels positioned around the 3D object */}
            <div className="absolute inset-0 pointer-events-none z-10">
              {/* PRODUCT — top-left */}
              <span
                className={`absolute top-[10%] left-[8%] px-2.5 py-1 rounded-full text-[11px] font-mono font-bold uppercase tracking-wider transition-all duration-300 ${
                  hoveredIdx === 0
                    ? "bg-blue-600 text-white shadow-md scale-105"
                    : "bg-white/90 text-slate-700 border border-black/[0.08] shadow-sm"
                }`}
              >
                PRODUCT
              </span>
              {/* ENGINEERING — top-right */}
              <span
                className={`absolute top-[12%] right-[8%] px-2.5 py-1 rounded-full text-[11px] font-mono font-bold uppercase tracking-wider transition-all duration-300 ${
                  hoveredIdx === 1
                    ? "bg-cyan-600 text-white shadow-md scale-105"
                    : "bg-white/90 text-slate-700 border border-black/[0.08] shadow-sm"
                }`}
              >
                ENGINEERING
              </span>
              {/* TECHNOLOGY — bottom-right */}
              <span
                className={`absolute bottom-[12%] right-[10%] px-2.5 py-1 rounded-full text-[11px] font-mono font-bold uppercase tracking-wider transition-all duration-300 ${
                  hoveredIdx === 2
                    ? "bg-violet-600 text-white shadow-md scale-105"
                    : "bg-white/90 text-slate-700 border border-black/[0.08] shadow-sm"
                }`}
              >
                TECHNOLOGY
              </span>
              {/* GROWTH — bottom-left */}
              <span
                className={`absolute bottom-[10%] left-[10%] px-2.5 py-1 rounded-full text-[11px] font-mono font-bold uppercase tracking-wider transition-all duration-300 ${
                  hoveredIdx === 3
                    ? "bg-emerald-600 text-white shadow-md scale-105"
                    : "bg-white/90 text-slate-700 border border-black/[0.08] shadow-sm"
                }`}
              >
                GROWTH
              </span>
            </div>

            <EngineeringCore hoveredIdx={hoveredIdx} />
          </div>
        </div>

        {/* ═══ DIFFERENTIATORS: Editorial Timeline Sequence ═══ */}
        <div className="relative border-t border-black/[0.08] pt-6">
          {/* Vertical timeline line for desktop */}
          <div className="hidden lg:block absolute left-[44px] top-6 bottom-6 w-[2px] bg-gradient-to-b from-blue-400/30 via-slate-200 to-transparent" />

          <div className="flex flex-col">
            {differentiators.map((d, idx) => (
              <div
                key={d.id}
                className="group relative cursor-default transition-all duration-300 hover:bg-white/60 rounded-2xl p-4 lg:p-6"
                onMouseEnter={() => setHoveredIdx(idx)}
                onMouseLeave={() => setHoveredIdx(-1)}
              >
                <div className="flex items-start gap-6 lg:gap-10">
                  
                  {/* Number & Timeline Dot column */}
                  <div className="relative shrink-0 flex flex-col items-center">
                    {/* Timeline Node Dot */}
                    <div
                      className={`hidden lg:flex w-3.5 h-3.5 rounded-full border-2 transition-all duration-300 ${
                        hoveredIdx === idx
                          ? "border-blue-600 bg-blue-600 shadow-[0_0_12px_rgba(37,99,235,0.5)] scale-125"
                          : "border-slate-300 bg-white"
                      }`}
                    />
                    {/* Number */}
                    <span
                      className={`font-general font-extrabold text-2xl sm:text-3xl lg:text-4xl tracking-tight mt-2 transition-colors duration-300 ${
                        hoveredIdx === idx ? "text-blue-600" : "text-slate-400 group-hover:text-black"
                      }`}
                    >
                      {d.number}
                    </span>
                  </div>

                  {/* Content Block */}
                  <div className="flex-1 flex flex-col gap-2">
                    <span
                      className={`text-[11px] font-mono font-bold uppercase tracking-[0.25em] transition-colors duration-300 ${
                        hoveredIdx === idx ? "text-blue-600" : "text-slate-500"
                      }`}
                    >
                      {d.label}
                    </span>

                    <h3
                      className={`font-general text-xl sm:text-2xl font-extrabold tracking-tight transition-colors duration-300 ${
                        hoveredIdx === idx ? "text-blue-600" : "text-black"
                      }`}
                    >
                      {d.headline}
                    </h3>

                    <p className="text-slate-600 text-sm sm:text-base leading-relaxed max-w-2xl font-normal">
                      {d.body}
                    </p>
                  </div>

                </div>

                {/* Subtle row bottom line */}
                {idx < differentiators.length - 1 && (
                  <div className="mt-6 border-b border-black/[0.05]" />
                )}
              </div>
            ))}
          </div>
        </div>

      </div>
    </section>
  );
}
