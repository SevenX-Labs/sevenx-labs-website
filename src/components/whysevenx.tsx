"use client";

import React, { useEffect, useRef, useState, useCallback } from "react";
import * as THREE from "three";

/* ═══════════════════════════════════════════════════════════════
   WHY SEVENX — Premium Differentiator Section
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

const comparisons = [
  { trad: "Takes requirements", svx: "Understands the problem" },
  { trad: "Builds features", svx: "Builds products" },
  { trad: "Focuses on delivery", svx: "Focuses on outcomes" },
  { trad: "Launches and leaves", svx: "Builds long-term" },
  { trad: "Uses familiar tools", svx: "Chooses the right technology" },
];

/* ─────────── Three.js Computational Sculpture ─────────── */

function EngineeringCore({
  hoveredIdx,
  containerRef,
}: {
  hoveredIdx: number;
  containerRef: React.RefObject<HTMLDivElement | null>;
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
      40,
      container.clientWidth / container.clientHeight,
      1,
      1200
    );
    camera.position.set(0, 0, 480);

    const renderer = new THREE.WebGLRenderer({ alpha: true, antialias: true });
    renderer.setSize(container.clientWidth, container.clientHeight);
    renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
    container.appendChild(renderer.domElement);

    // Lighting — restrained, sophisticated
    const ambientLight = new THREE.AmbientLight(0xffffff, 0.6);
    scene.add(ambientLight);

    const dirLight1 = new THREE.DirectionalLight(0x3b82f6, 0.6);
    dirLight1.position.set(200, 250, 200);
    scene.add(dirLight1);

    const dirLight2 = new THREE.DirectionalLight(0x7c3aed, 0.4);
    dirLight2.position.set(-200, -150, 180);
    scene.add(dirLight2);

    const mainGroup = new THREE.Group();
    scene.add(mainGroup);

    // ── Central Core: Icosahedron wireframe ──
    const coreGeo = new THREE.IcosahedronGeometry(28, 1);
    const coreEdges = new THREE.EdgesGeometry(coreGeo);
    const coreLineMat = new THREE.LineBasicMaterial({
      color: 0x3b82f6,
      transparent: true,
      opacity: 0.5,
    });
    const coreWireframe = new THREE.LineSegments(coreEdges, coreLineMat);
    mainGroup.add(coreWireframe);

    // Inner glowing sphere
    const innerGeo = new THREE.SphereGeometry(14, 32, 32);
    const innerMat = new THREE.MeshStandardMaterial({
      color: 0x3b82f6,
      emissive: 0x3b82f6,
      emissiveIntensity: 0.25,
      metalness: 0.9,
      roughness: 0.3,
      transparent: true,
      opacity: 0.35,
    });
    const innerSphere = new THREE.Mesh(innerGeo, innerMat);
    mainGroup.add(innerSphere);

    // ── Four orbital principle rings ──
    const nodeColors = [0x3b82f6, 0x06b6d4, 0x7c3aed, 0x10b981];
    const nodePositions = [
      new THREE.Vector3(-105, 75, 20),   // BUSINESS / PRODUCT
      new THREE.Vector3(105, 60, -15),    // ENGINEERING
      new THREE.Vector3(95, -70, 25),     // TECHNOLOGY
      new THREE.Vector3(-95, -80, -10),   // GROWTH
    ];

    // Node spheres
    const nodeMeshes: THREE.Mesh[] = [];
    const nodeGlows: THREE.Mesh[] = [];
    nodePositions.forEach((pos, idx) => {
      // Node sphere
      const nodeGeo = new THREE.SphereGeometry(7, 24, 24);
      const nodeMat = new THREE.MeshStandardMaterial({
        color: nodeColors[idx],
        emissive: nodeColors[idx],
        emissiveIntensity: 0.15,
        metalness: 0.8,
        roughness: 0.2,
        transparent: true,
        opacity: 0.7,
      });
      const nodeMesh = new THREE.Mesh(nodeGeo, nodeMat);
      nodeMesh.position.copy(pos);
      mainGroup.add(nodeMesh);
      nodeMeshes.push(nodeMesh);

      // Glow ring around node
      const glowGeo = new THREE.TorusGeometry(14, 0.6, 8, 48);
      const glowMat = new THREE.MeshBasicMaterial({
        color: nodeColors[idx],
        transparent: true,
        opacity: 0.0,
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
        // Curved bezier-like path from center to node
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
        pt.add(
          mid.clone().multiplyScalar(Math.sin(t * Math.PI) * 0.3)
        );
        points.push(pt);
      }
      const lineGeo = new THREE.BufferGeometry().setFromPoints(points);
      const lineMat = new THREE.LineBasicMaterial({
        color: nodeColors[idx],
        transparent: true,
        opacity: 0.18,
      });
      const line = new THREE.Line(lineGeo, lineMat);
      mainGroup.add(line);
      connectionLines.push(line);
    });

    // ── Outer orbital ring (subtle) ──
    const orbitGeo = new THREE.TorusGeometry(140, 0.35, 8, 120);
    const orbitMat = new THREE.MeshBasicMaterial({
      color: 0x3b82f6,
      transparent: true,
      opacity: 0.08,
    });
    const orbitRing = new THREE.Mesh(orbitGeo, orbitMat);
    orbitRing.rotation.x = Math.PI * 0.45;
    mainGroup.add(orbitRing);

    const orbitGeo2 = new THREE.TorusGeometry(120, 0.3, 8, 100);
    const orbitMat2 = new THREE.MeshBasicMaterial({
      color: 0x7c3aed,
      transparent: true,
      opacity: 0.06,
    });
    const orbitRing2 = new THREE.Mesh(orbitGeo2, orbitMat2);
    orbitRing2.rotation.x = Math.PI * 0.6;
    orbitRing2.rotation.y = Math.PI * 0.3;
    mainGroup.add(orbitRing2);

    // ── Floating micro-particles ──
    const particleCount = 300;
    const pGeo = new THREE.BufferGeometry();
    const pPositions = new Float32Array(particleCount * 3);
    const pColors = new Float32Array(particleCount * 3);

    for (let i = 0; i < particleCount; i++) {
      const r = 60 + Math.random() * 120;
      const theta = Math.random() * Math.PI * 2;
      const phi = Math.acos(2 * Math.random() - 1);
      pPositions[i * 3] = r * Math.sin(phi) * Math.cos(theta);
      pPositions[i * 3 + 1] = r * Math.sin(phi) * Math.sin(theta);
      pPositions[i * 3 + 2] = r * Math.cos(phi);

      const c = new THREE.Color(
        [0x3b82f6, 0x06b6d4, 0x7c3aed, 0x10b981][
          Math.floor(Math.random() * 4)
        ]
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
    pGrad.addColorStop(0.4, "rgba(255,255,255,0.6)");
    pGrad.addColorStop(1, "rgba(255,255,255,0)");
    pCtx.fillStyle = pGrad;
    pCtx.fillRect(0, 0, 32, 32);

    const pMat = new THREE.PointsMaterial({
      size: 2.5,
      vertexColors: true,
      map: new THREE.CanvasTexture(pCanvas),
      transparent: true,
      opacity: 0.45,
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

    // ── Animation ──
    let frameId: number;
    const clock = new THREE.Clock();

    const animate = () => {
      if (disposed) return;
      frameId = requestAnimationFrame(animate);

      try {
        const t = clock.getElapsedTime();
        const hIdx = hoveredRef.current;

        // Mouse smooth
        mouse.x += (mouse.targetX - mouse.x) * 0.04;
        mouse.y += (mouse.targetY - mouse.y) * 0.04;

        // Core rotation
        coreWireframe.rotation.y = t * 0.2;
        coreWireframe.rotation.x = t * 0.12;
        innerSphere.rotation.y = -t * 0.15;

        // Orbit rings
        orbitRing.rotation.z = t * 0.08;
        orbitRing2.rotation.z = -t * 0.06;

        // Particle slow orbit
        particles.rotation.y = t * 0.03;
        particles.rotation.x = Math.sin(t * 0.15) * 0.05;

        // Node hover reactions
        for (let i = 0; i < 4; i++) {
          const isActive = hIdx === i;
          const nodeMat = nodeMeshes[i].material as THREE.MeshStandardMaterial;
          const glowMat = nodeGlows[i].material as THREE.MeshBasicMaterial;
          const lineMat = connectionLines[i].material as THREE.LineBasicMaterial;

          // Emissive intensity
          const targetEmissive = isActive ? 0.8 : 0.15;
          nodeMat.emissiveIntensity +=
            (targetEmissive - nodeMat.emissiveIntensity) * 0.06;

          // Node opacity
          const targetNodeOpacity = isActive ? 1.0 : 0.7;
          nodeMat.opacity += (targetNodeOpacity - nodeMat.opacity) * 0.06;

          // Node scale
          const targetScale = isActive ? 1.5 : 1.0;
          const s = nodeMeshes[i].scale.x;
          const newS = s + (targetScale - s) * 0.06;
          nodeMeshes[i].scale.setScalar(newS);

          // Glow ring opacity
          const targetGlow = isActive ? 0.45 : 0.0;
          glowMat.opacity += (targetGlow - glowMat.opacity) * 0.06;
          nodeGlows[i].rotation.z = t * (isActive ? 1.5 : 0.3);

          // Connection line opacity
          const targetLineOp = isActive ? 0.6 : 0.18;
          lineMat.opacity += (targetLineOp - lineMat.opacity) * 0.06;

          // Node float
          const basePos = nodePositions[i];
          const floatY = Math.sin(t * 0.8 + i * 1.5) * 3;
          nodeMeshes[i].position.y = basePos.y + floatY;
          nodeGlows[i].position.y = basePos.y + floatY;

          // Partnership (idx 3): expand outward
          if (i === 3 && isActive) {
            const expand = 1.12;
            const ex = basePos.x * expand;
            const ey = (basePos.y + floatY) * expand;
            const ez = basePos.z * expand;
            nodeMeshes[i].position.set(ex, ey, ez);
            nodeGlows[i].position.set(ex, ey, ez);
          }
        }

        // Core pulse on hover
        const corePulse = hIdx >= 0 ? 0.35 : 0.25;
        innerMat.emissiveIntensity +=
          (corePulse - innerMat.emissiveIntensity) * 0.04;

        // Group tilt from mouse
        mainGroup.rotation.y = t * 0.08 + mouse.x * 0.15;
        mainGroup.rotation.x = Math.sin(t * 0.3) * 0.04 - mouse.y * 0.1;
        mainGroup.position.y = Math.sin(t * 1.2) * 3;

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
      // Dispose geometries
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
      style={{ minHeight: 380 }}
    />
  );
}

/* ─────────── Main Component ─────────── */

export default function WhySevenX() {
  const sectionRef = useRef<HTMLElement>(null);
  const [hoveredIdx, setHoveredIdx] = useState(-1);
  const [revealed, setRevealed] = useState(false);
  const visualRef = useRef<HTMLDivElement>(null);

  // Scroll-linked reveal
  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) setRevealed(true);
      },
      { threshold: 0.12 }
    );
    if (sectionRef.current) observer.observe(sectionRef.current);
    return () => observer.disconnect();
  }, []);

  return (
    <section
      ref={sectionRef}
      id="why-sevenx"
      className="relative w-full py-28 lg:py-40 bg-[#FAF9F6] text-zinc-900 border-t border-black/[0.06] overflow-hidden font-sans select-none"
    >
      {/* Background: Architectural Grid & Ambient Glow */}
      <div className="absolute inset-0 pointer-events-none z-0">
        <div className="absolute top-1/3 right-0 w-[700px] h-[700px] bg-gradient-to-bl from-blue-100/15 via-cyan-50/10 to-transparent rounded-full blur-3xl" />
        <div className="absolute bottom-0 left-0 w-[600px] h-[600px] bg-gradient-to-tr from-violet-100/10 to-transparent rounded-full blur-3xl" />
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#00000004_1px,transparent_1px),linear-gradient(to_bottom,#00000004_1px,transparent_1px)] bg-[size:64px_64px]" />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-6 md:px-12 lg:px-16">
        {/* ═══ HERO COMPOSITION: Asymmetric Left Text + Right 3D ═══ */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center mb-32">
          {/* LEFT: Editorial Header */}
          <div
            className={`lg:col-span-5 flex flex-col items-start gap-7 transition-all duration-[1200ms] ease-out ${
              revealed
                ? "opacity-100 translate-y-0"
                : "opacity-0 translate-y-12"
            }`}
          >
            {/* Label */}
            <div className="flex items-center gap-3">
              <span className="px-3.5 py-1 bg-black/[0.04] text-[#3B82F6] text-[10.5px] font-mono font-bold uppercase tracking-[0.3em] rounded-full border border-blue-200/60 flex items-center gap-2">
                <span className="w-1.5 h-1.5 rounded-full bg-[#3B82F6] animate-pulse" />
                WHY SEVENX
              </span>
              <span className="h-px flex-1 bg-gradient-to-r from-blue-400/20 to-transparent max-w-[120px]" />
            </div>

            {/* Headline */}
            <h2 className="font-general text-[2.6rem] sm:text-5xl md:text-[3.6rem] font-extrabold text-black leading-[1.02] tracking-tight uppercase">
              ENGINEERING
              <br />
              THAT THINKS
              <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#3B82F6] via-blue-500 to-violet-500">
                BEYOND CODE.
              </span>
            </h2>

            {/* Supporting text */}
            <p className="text-slate-500 text-base md:text-lg leading-relaxed font-normal max-w-md">
              We combine product thinking, engineering expertise and long-term
              partnership to build software that delivers real business value.
            </p>

            {/* Thin separator */}
            <div className="w-16 h-px bg-gradient-to-r from-blue-400/40 to-transparent" />
          </div>

          {/* RIGHT: 3D Computational Sculpture */}
          <div
            ref={visualRef}
            className={`lg:col-span-7 relative h-[380px] sm:h-[420px] lg:h-[480px] transition-all duration-[1600ms] ease-out delay-300 ${
              revealed
                ? "opacity-100 translate-x-0"
                : "opacity-0 translate-x-16"
            }`}
          >
            {/* Node labels positioned around the 3D object */}
            <div className="absolute inset-0 pointer-events-none z-10">
              {/* PRODUCT — top-left area */}
              <span
                className={`absolute top-[12%] left-[5%] text-[10px] font-mono font-bold uppercase tracking-[0.2em] transition-all duration-700 ${
                  hoveredIdx === 0
                    ? "text-blue-500 opacity-100 scale-105"
                    : "text-slate-400/50 opacity-60"
                }`}
              >
                PRODUCT
              </span>
              {/* ENGINEERING — top-right */}
              <span
                className={`absolute top-[14%] right-[8%] text-[10px] font-mono font-bold uppercase tracking-[0.2em] transition-all duration-700 ${
                  hoveredIdx === 1
                    ? "text-cyan-500 opacity-100 scale-105"
                    : "text-slate-400/50 opacity-60"
                }`}
              >
                ENGINEERING
              </span>
              {/* TECHNOLOGY — bottom-right */}
              <span
                className={`absolute bottom-[18%] right-[10%] text-[10px] font-mono font-bold uppercase tracking-[0.2em] transition-all duration-700 ${
                  hoveredIdx === 2
                    ? "text-violet-500 opacity-100 scale-105"
                    : "text-slate-400/50 opacity-60"
                }`}
              >
                TECHNOLOGY
              </span>
              {/* GROWTH — bottom-left */}
              <span
                className={`absolute bottom-[15%] left-[8%] text-[10px] font-mono font-bold uppercase tracking-[0.2em] transition-all duration-700 ${
                  hoveredIdx === 3
                    ? "text-emerald-500 opacity-100 scale-105"
                    : "text-slate-400/50 opacity-60"
                }`}
              >
                GROWTH
              </span>
            </div>

            <EngineeringCore
              hoveredIdx={hoveredIdx}
              containerRef={visualRef}
            />
          </div>
        </div>

        {/* ═══ DIFFERENTIATORS: Editorial Sequence ═══ */}
        <div className="relative mb-32">
          {/* Vertical timeline line (desktop) */}
          <div className="hidden lg:block absolute left-[60px] top-0 bottom-0 w-px bg-gradient-to-b from-blue-300/25 via-violet-300/15 to-transparent" />

          <div className="flex flex-col gap-0">
            {differentiators.map((d, idx) => (
              <div
                key={d.id}
                className={`group relative transition-all duration-[900ms] ease-out ${
                  revealed
                    ? "opacity-100 translate-y-0"
                    : "opacity-0 translate-y-10"
                }`}
                style={{
                  transitionDelay: revealed ? `${600 + idx * 180}ms` : "0ms",
                }}
                onMouseEnter={() => setHoveredIdx(idx)}
                onMouseLeave={() => setHoveredIdx(-1)}
              >
                {/* Row */}
                <div className="relative flex items-start gap-6 lg:gap-10 py-10 lg:py-14 cursor-default">
                  {/* Number column */}
                  <div className="relative flex-shrink-0 w-[60px] lg:w-[120px] flex flex-col items-center">
                    {/* Timeline dot */}
                    <div
                      className={`hidden lg:flex w-3 h-3 rounded-full border-2 transition-all duration-500 ${
                        hoveredIdx === idx
                          ? "border-blue-500 bg-blue-500 shadow-[0_0_12px_rgba(59,130,246,0.35)]"
                          : "border-slate-300 bg-white"
                      }`}
                    />
                    {/* Number */}
                    <span
                      className={`mt-4 lg:mt-6 text-[2.2rem] lg:text-[3rem] font-extrabold font-general leading-none tracking-tight transition-colors duration-500 ${
                        hoveredIdx === idx
                          ? "text-blue-500"
                          : "text-slate-200"
                      }`}
                    >
                      {d.number}
                    </span>
                  </div>

                  {/* Content */}
                  <div className="flex-1 max-w-2xl">
                    {/* Label */}
                    <span
                      className={`text-[10.5px] font-mono font-bold uppercase tracking-[0.25em] transition-colors duration-500 ${
                        hoveredIdx === idx
                          ? "text-blue-500"
                          : "text-slate-400"
                      }`}
                    >
                      {d.label}
                    </span>

                    {/* Headline */}
                    <h3
                      className={`mt-3 font-general text-xl sm:text-2xl lg:text-[1.7rem] font-extrabold leading-[1.15] tracking-tight transition-colors duration-500 ${
                        hoveredIdx === idx ? "text-black" : "text-slate-700"
                      }`}
                    >
                      {d.headline}
                    </h3>

                    {/* Body */}
                    <p
                      className={`mt-3 text-sm sm:text-base leading-relaxed max-w-lg transition-all duration-500 ${
                        hoveredIdx === idx
                          ? "text-slate-600 translate-x-0"
                          : "text-slate-400"
                      }`}
                    >
                      {d.body}
                    </p>

                    {/* Active indicator line */}
                    <div
                      className={`mt-5 h-px transition-all duration-700 ease-out ${
                        hoveredIdx === idx
                          ? "w-16 bg-gradient-to-r from-blue-400 to-transparent"
                          : "w-0 bg-transparent"
                      }`}
                    />
                  </div>
                </div>

                {/* Separator */}
                {idx < differentiators.length - 1 && (
                  <div className="ml-[60px] lg:ml-[120px] h-px bg-black/[0.05]" />
                )}
              </div>
            ))}
          </div>
        </div>

        {/* ═══ COMPARISON STRIP ═══ */}
        <div
          className={`relative max-w-3xl mx-auto transition-all duration-[1200ms] ease-out delay-500 ${
            revealed ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
          }`}
        >
          {/* Header */}
          <div className="flex items-center justify-between mb-8">
            <span className="text-[10px] font-mono font-bold uppercase tracking-[0.3em] text-slate-400">
              TRADITIONAL AGENCY
            </span>
            <span className="text-[10px] font-mono font-bold uppercase tracking-[0.3em] text-blue-500">
              SEVENX
            </span>
          </div>

          {/* Thin top border */}
          <div className="h-px bg-black/[0.08] mb-0" />

          {/* Comparison rows */}
          {comparisons.map((c, idx) => (
            <div
              key={idx}
              className="group flex items-center justify-between py-4 border-b border-black/[0.05] transition-all duration-300 hover:bg-blue-50/30 hover:px-4 cursor-default"
            >
              <span className="text-sm text-slate-400 font-normal transition-colors group-hover:text-slate-500 flex-1">
                {c.trad}
              </span>
              {/* Center divider */}
              <div className="mx-6 flex items-center gap-2">
                <span className="w-4 h-px bg-slate-200" />
                <span className="w-1 h-1 rounded-full bg-slate-300" />
                <span className="w-4 h-px bg-slate-200" />
              </div>
              <span className="text-sm text-black font-semibold transition-colors group-hover:text-blue-600 flex-1 text-right">
                {c.svx}
              </span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
