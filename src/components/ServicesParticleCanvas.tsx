"use client";

import React, { useEffect, useRef } from "react";
import * as THREE from "three";

interface ServicesParticleCanvasProps {
  activeIdx: number;
}

export default function ServicesParticleCanvas({ activeIdx }: ServicesParticleCanvasProps) {
  const mountRef = useRef<HTMLDivElement>(null);
  const activeIdxRef = useRef(activeIdx);

  useEffect(() => {
    activeIdxRef.current = activeIdx;
  }, [activeIdx]);

  useEffect(() => {
    const container = mountRef.current;
    if (!container) return;

    // ─── 1. SCENE, CAMERA & RENDERER ───
    const scene = new THREE.Scene();
    const camera = new THREE.PerspectiveCamera(
      45,
      container.clientWidth / container.clientHeight,
      1,
      1000
    );
    camera.position.set(0, 0, 420);

    const renderer = new THREE.WebGLRenderer({ alpha: true, antialias: true });
    renderer.setSize(container.clientWidth, container.clientHeight);
    renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
    container.appendChild(renderer.domElement);

    // ─── 2. LIGHTING FOR REALISTIC 3D SHADING ───
    const ambientLight = new THREE.AmbientLight(0xffffff, 0.8);
    scene.add(ambientLight);

    const dirLight1 = new THREE.DirectionalLight(0x3b82f6, 2.0); // Electric Blue Light
    dirLight1.position.set(200, 300, 200);
    scene.add(dirLight1);

    const dirLight2 = new THREE.DirectionalLight(0x8b5cf6, 1.5); // Purple Accent Light
    dirLight2.position.set(-200, -200, 150);
    scene.add(dirLight2);

    // ─── 3. MASTER GRAPHICS GROUPS ───
    const mainGroup = new THREE.Group();
    scene.add(mainGroup);

    // Group containers for 3D meshes per service
    const meshesGroup = new THREE.Group();
    mainGroup.add(meshesGroup);

    // ─── 4. BUILD REALISTIC 3D MESH OBJECTS PER SERVICE ───

    // --- SERVICE 0: Product Engineering (3D Tech Box & Code Frame) ---
    const group0 = new THREE.Group();
    
    // Wireframe Tech Box Frame
    const boxGeo = new THREE.BoxGeometry(260, 170, 70);
    const boxEdges = new THREE.EdgesGeometry(boxGeo);
    const boxLineMat = new THREE.LineBasicMaterial({ color: 0x3b82f6, transparent: true, opacity: 0.35 });
    const boxLines = new THREE.LineSegments(boxEdges, boxLineMat);
    group0.add(boxLines);

    // Outer corner glowing nodes
    const cornerGeo = new THREE.SphereGeometry(4, 16, 16);
    const cornerMat = new THREE.MeshStandardMaterial({ color: 0x06b6d4, emissive: 0x06b6d4, emissiveIntensity: 0.8 });
    const corners = [
      [-130, 85, 35], [130, 85, 35], [130, -85, 35], [-130, -85, 35],
      [-130, 85, -35], [130, 85, -35], [130, -85, -35], [-130, -85, -35]
    ];
    corners.forEach(([cx, cy, cz]) => {
      const mesh = new THREE.Mesh(cornerGeo, cornerMat);
      mesh.position.set(cx, cy, cz);
      group0.add(mesh);
    });

    group0.visible = true;
    meshesGroup.add(group0);

    // --- SERVICE 1: AI & Intelligent Systems (3D Neural Core & Glowing Nucleus) ---
    const group1 = new THREE.Group();

    // Outer Neural Mesh (Icosahedron Wireframe)
    const icoGeo = new THREE.IcosahedronGeometry(85, 2);
    const icoEdges = new THREE.EdgesGeometry(icoGeo);
    const icoLineMat = new THREE.LineBasicMaterial({ color: 0x8b5cf6, transparent: true, opacity: 0.45 });
    const icoLines = new THREE.LineSegments(icoEdges, icoLineMat);
    group1.add(icoLines);

    // Inner Glowing Core Sphere
    const coreGeo = new THREE.SphereGeometry(38, 32, 32);
    const coreMat = new THREE.MeshStandardMaterial({
      color: 0x7c3aed,
      emissive: 0x6d28d9,
      emissiveIntensity: 0.9,
      roughness: 0.2,
      transparent: true,
      opacity: 0.85,
    });
    const coreMesh = new THREE.Mesh(coreGeo, coreMat);
    group1.add(coreMesh);

    // Orbital Neural Synaptic Rings
    const ringGeo1 = new THREE.TorusGeometry(125, 1.2, 16, 100);
    const ringMat1 = new THREE.MeshBasicMaterial({ color: 0x06b6d4, transparent: true, opacity: 0.6 });
    const ring1 = new THREE.Mesh(ringGeo1, ringMat1);
    ring1.rotation.x = Math.PI / 3;
    group1.add(ring1);

    group1.visible = false;
    meshesGroup.add(group1);

    // --- SERVICE 2: Cloud Infrastructure (3D Cloud Mesh & DevOps Orbit Rings) ---
    const group2 = new THREE.Group();

    // 4 Merged Cloud Spheres (Volumetric Shaded Cloud)
    const cloudMat = new THREE.MeshStandardMaterial({
      color: 0x0284c7,
      emissive: 0x0369a1,
      emissiveIntensity: 0.4,
      roughness: 0.3,
      transparent: true,
      opacity: 0.5,
    });
    const cloudSpheres = [
      { r: 52, x: 0, y: 15, z: 0 },
      { r: 42, x: -50, y: -8, z: 0 },
      { r: 38, x: 50, y: -5, z: 0 },
      { r: 34, x: 5, y: -18, z: 18 },
    ];
    cloudSpheres.forEach((s) => {
      const g = new THREE.SphereGeometry(s.r, 24, 24);
      const m = new THREE.Mesh(g, cloudMat);
      m.position.set(s.x, s.y, s.z);
      group2.add(m);
    });

    // Horizontal DevOps Concentric Orbit Rings
    const devRingGeo = new THREE.TorusGeometry(130, 1.5, 16, 100);
    const devRingMat = new THREE.MeshBasicMaterial({ color: 0x38bdf8, transparent: true, opacity: 0.7 });
    const devRing = new THREE.Mesh(devRingGeo, devRingMat);
    devRing.rotation.x = Math.PI / 2.3;
    devRing.position.y = -45;
    group2.add(devRing);

    group2.visible = false;
    meshesGroup.add(group2);

    // --- SERVICE 3: GTM & Product Strategy (3D Rocket Launch & Target Radar) ---
    const group3 = new THREE.Group();

    // 3D Metallic Rocket Fuselage
    const rocketMat = new THREE.MeshStandardMaterial({
      color: 0x2563eb,
      metalness: 0.8,
      roughness: 0.2,
      emissive: 0x1d4ed8,
      emissiveIntensity: 0.5,
    });
    // Rocket Cone
    const coneGeo = new THREE.ConeGeometry(22, 65, 32);
    const coneMesh = new THREE.Mesh(coneGeo, rocketMat);
    coneMesh.position.y = 35;
    group3.add(coneMesh);
    // Rocket Body
    const bodyGeo = new THREE.CylinderGeometry(22, 22, 70, 32);
    const bodyMesh = new THREE.Mesh(bodyGeo, rocketMat);
    bodyMesh.position.y = -30;
    group3.add(bodyMesh);

    // Concentric Target Radar Ring
    const radarGeo = new THREE.TorusGeometry(125, 1.5, 16, 100);
    const radarMat = new THREE.MeshBasicMaterial({ color: 0xe11d48, transparent: true, opacity: 0.65 });
    const radarMesh = new THREE.Mesh(radarGeo, radarMat);
    group3.add(radarMesh);

    group3.visible = false;
    meshesGroup.add(group3);

    // --- SERVICE 4: Enterprise Modernization (3D Encrypted Shield & Core Gem) ---
    const group4 = new THREE.Group();

    // Central 3D Octahedron Core Gem
    const gemGeo = new THREE.OctahedronGeometry(42, 0);
    const gemMat = new THREE.MeshStandardMaterial({
      color: 0x6d28d9,
      emissive: 0x7c3aed,
      emissiveIntensity: 0.8,
      metalness: 0.5,
      roughness: 0.2,
    });
    const gemMesh = new THREE.Mesh(gemGeo, gemMat);
    gemMesh.position.y = 10;
    group4.add(gemMesh);

    // Gem Wireframe Overlay
    const gemEdges = new THREE.EdgesGeometry(gemGeo);
    const gemLineMat = new THREE.LineBasicMaterial({ color: 0x818cf8, linewidth: 2 });
    const gemLines = new THREE.LineSegments(gemEdges, gemLineMat);
    gemLines.position.y = 10;
    group4.add(gemLines);

    // Protective Energy Barrier Ring
    const shieldRingGeo = new THREE.TorusGeometry(135, 1.5, 16, 100);
    const shieldRingMat = new THREE.MeshBasicMaterial({ color: 0x4338ca, transparent: true, opacity: 0.6 });
    const shieldRing = new THREE.Mesh(shieldRingGeo, shieldRingMat);
    group4.add(shieldRing);

    group4.visible = false;
    meshesGroup.add(group4);

    // ─── Group 5: SEO, Analytics & Strategy (3D Bar Chart & Target Rings) ───
    const group5 = new THREE.Group();

    // 3D Bar 1
    const bar1Geo = new THREE.BoxGeometry(18, 55, 18);
    const bar1Mat = new THREE.MeshStandardMaterial({ color: 0x3b82f6, metalness: 0.8, roughness: 0.2 });
    const bar1 = new THREE.Mesh(bar1Geo, bar1Mat);
    bar1.position.set(-36, -20, 0);
    group5.add(bar1);

    // 3D Bar 2
    const bar2Geo = new THREE.BoxGeometry(18, 90, 18);
    const bar2Mat = new THREE.MeshStandardMaterial({ color: 0x8b5cf6, metalness: 0.8, roughness: 0.2 });
    const bar2 = new THREE.Mesh(bar2Geo, bar2Mat);
    bar2.position.set(0, -2, 0);
    group5.add(bar2);

    // 3D Bar 3
    const bar3Geo = new THREE.BoxGeometry(18, 125, 18);
    const bar3Mat = new THREE.MeshStandardMaterial({ color: 0x06b6d4, metalness: 0.8, roughness: 0.2 });
    const bar3 = new THREE.Mesh(bar3Geo, bar3Mat);
    bar3.position.set(36, 15, 0);
    group5.add(bar3);

    // Dynamic Target Ring
    const targetRingGeo = new THREE.TorusGeometry(130, 2, 16, 100);
    const targetRingMat = new THREE.MeshBasicMaterial({ color: 0x3b82f6, transparent: true, opacity: 0.5 });
    const targetRing = new THREE.Mesh(targetRingGeo, targetRingMat);
    group5.add(targetRing);

    group5.visible = false;
    meshesGroup.add(group5);

    const meshGroups = [group0, group1, group2, group3, group4, group5];

    // ─── 5. HIGH DENSITY 3D MORPHING PARTICLE CLOUD (N = 2000) ───
    const N = 2000;

    // Helper palette setup for 6 service categories
    const servicePalettes = [
      // 0: Web & Mobile Engineering
      { primary: new THREE.Color("#2563EB"), secondary: new THREE.Color("#06B6D4"), highlight: new THREE.Color("#38BDF8") },
      // 1: AI Automation & ML Agents
      { primary: new THREE.Color("#7C3AED"), secondary: new THREE.Color("#06B6D4"), highlight: new THREE.Color("#C084FC") },
      // 2: Cloud Ops & Infrastructure
      { primary: new THREE.Color("#0284C7"), secondary: new THREE.Color("#0D9488"), highlight: new THREE.Color("#38BDF8") },
      // 3: Brand Design & Motion (Logo Design & Animation)
      { primary: new THREE.Color("#EC4899"), secondary: new THREE.Color("#8B5CF6"), highlight: new THREE.Color("#F43F5E") },
      // 4: E-Commerce & Enterprise CRM
      { primary: new THREE.Color("#2563EB"), secondary: new THREE.Color("#4338CA"), highlight: new THREE.Color("#818CF8") },
      // 5: SEO, Analytics & Strategy
      { primary: new THREE.Color("#2563EB"), secondary: new THREE.Color("#E11D48"), highlight: new THREE.Color("#F43F5E") },
    ];

    // Shape 0: Complete 3D Code Symbol </> & Wireframe Frame
    const shapeCode = new Float32Array(N * 3);
    const colorsCode = new Float32Array(N * 3);
    const pal0 = servicePalettes[0];

    for (let i = 0; i < N; i++) {
      const i3 = i * 3;
      const p = i / N;
      let x = 0, y = 0, z = (Math.random() - 0.5) * 35;
      let col = pal0.primary;

      if (p < 0.32) {
        // Complete '<' Bracket (Top AND Bottom strokes!)
        const u = p / 0.32;
        if (u < 0.5) {
          // Top stroke from (-130, 0) to (-70, 75)
          const t = u / 0.5;
          x = -130 + 60 * t;
          y = 0 + 75 * t;
          col = pal0.primary;
        } else {
          // Bottom stroke from (-130, 0) to (-70, -75)
          const t = (u - 0.5) / 0.5;
          x = -130 + 60 * t;
          y = 0 - 75 * t;
          col = pal0.secondary;
        }
        z += (Math.random() - 0.5) * 15;
      } else if (p < 0.48) {
        // Center Slash '/'
        const u = (p - 0.32) / 0.16;
        x = -30 + 60 * u;
        y = -90 + 180 * u;
        z += (Math.random() - 0.5) * 15;
        col = pal0.highlight;
      } else if (p < 0.80) {
        // Complete '>' Bracket (Top AND Bottom strokes!)
        const u = (p - 0.48) / 0.32;
        if (u < 0.5) {
          // Top stroke from (70, 75) to (130, 0)
          const t = u / 0.5;
          x = 70 + 60 * t;
          y = 75 - 75 * t;
          col = pal0.secondary;
        } else {
          // Bottom stroke from (70, -75) to (130, 0)
          const t = (u - 0.5) / 0.5;
          x = 70 + 60 * t;
          y = -75 + 75 * t;
          col = pal0.primary;
        }
        z += (Math.random() - 0.5) * 15;
      } else {
        // Bounding Box Ambient Grid Nodes
        const u = (p - 0.80) / 0.20;
        const angle = u * Math.PI * 2;
        const rad = 145;
        x = Math.cos(angle) * rad;
        y = Math.sin(angle) * rad;
        z = (Math.random() - 0.5) * 60;
        col = pal0.highlight;
      }

      shapeCode[i3] = x;
      shapeCode[i3 + 1] = y;
      shapeCode[i3 + 2] = z;

      colorsCode[i3] = col.r;
      colorsCode[i3 + 1] = col.g;
      colorsCode[i3 + 2] = col.b;
    }

    // Shape 1: AI Brain Cortex
    const shapeAI = new Float32Array(N * 3);
    const colorsAI = new Float32Array(N * 3);
    const pal1 = servicePalettes[1];

    for (let i = 0; i < N; i++) {
      const i3 = i * 3;
      const p = i / N;
      let x = 0, y = 0, z = 0;
      let col = pal1.primary;

      if (p < 0.70) {
        const theta = Math.random() * Math.PI * 2;
        const phi = Math.random() * Math.PI;
        const side = i % 2 === 0 ? 1 : -1;
        const r = 82 + Math.sin(theta * 4) * 8 + Math.cos(phi * 5) * 6;
        x = Math.sin(phi) * Math.cos(theta) * r + side * 28;
        y = Math.cos(phi) * r * 0.95;
        z = Math.sin(phi) * Math.sin(theta) * (r * 0.75);
        col = side === 1 ? pal1.primary : pal1.secondary;
      } else if (p < 0.85) {
        const u = (p - 0.70) / 0.15;
        const angle = u * Math.PI * 2;
        const r = 24 + Math.random() * 15;
        x = (Math.random() - 0.5) * 40;
        y = Math.sin(angle) * r;
        z = Math.cos(angle) * r;
        col = pal1.highlight;
      } else {
        const u = (p - 0.85) / 0.15;
        const angle = u * Math.PI * 2;
        x = Math.cos(angle) * 135;
        y = Math.sin(angle) * 35;
        z = Math.sin(angle) * 135;
        col = pal1.secondary;
      }

      shapeAI[i3] = x;
      shapeAI[i3 + 1] = y;
      shapeAI[i3 + 2] = z;

      colorsAI[i3] = col.r;
      colorsAI[i3 + 1] = col.g;
      colorsAI[i3 + 2] = col.b;
    }

    // Shape 2: Cloud Data Network
    const shapeCloud = new Float32Array(N * 3);
    const colorsCloud = new Float32Array(N * 3);
    const pal2 = servicePalettes[2];

    for (let i = 0; i < N; i++) {
      const i3 = i * 3;
      const p = i / N;
      let cx = 0, cy = 0, cz = 0;
      let col = pal2.primary;

      if (p < 0.65) {
        const lobe = Math.floor(Math.random() * 4);
        const u = Math.random() * Math.PI * 2;
        const v = Math.random() * Math.PI;
        let rad = 50, ox = 0, oy = 0;
        if (lobe === 0) { rad = 55; ox = 0; oy = 15; col = pal2.primary; }
        else if (lobe === 1) { rad = 45; ox = -50; oy = -8; col = pal2.secondary; }
        else if (lobe === 2) { rad = 40; ox = 50; oy = -5; col = pal2.highlight; }
        else { rad = 36; ox = 5; oy = -18; col = pal2.primary; }
        cx = ox + Math.sin(v) * Math.cos(u) * rad;
        cy = oy + Math.cos(v) * rad;
        cz = Math.sin(v) * Math.sin(u) * (rad * 0.7);
      } else {
        const u = (p - 0.65) / 0.35;
        const angle = u * Math.PI * 2;
        const ring = i % 2 === 0 ? 125 : 150;
        cx = Math.cos(angle) * ring;
        cy = -45 + Math.sin(angle * 2) * 8;
        cz = Math.sin(angle) * (ring * 0.5);
        col = ring === 125 ? pal2.secondary : pal2.highlight;
      }

      shapeCloud[i3] = cx;
      shapeCloud[i3 + 1] = cy;
      shapeCloud[i3 + 2] = cz;

      colorsCloud[i3] = col.r;
      colorsCloud[i3 + 1] = col.g;
      colorsCloud[i3 + 2] = col.b;
    }

    // Shape 3: Rocket Target Radar
    const shapeRocket = new Float32Array(N * 3);
    const colorsRocket = new Float32Array(N * 3);
    const pal3 = servicePalettes[3];

    for (let i = 0; i < N; i++) {
      const i3 = i * 3;
      const p = i / N;
      let rx = 0, ry = 0, rz = 0;
      let col = pal3.primary;

      if (p < 0.45) {
        const isOuter = p < 0.28;
        const u = isOuter ? p / 0.28 : (p - 0.28) / 0.17;
        const angle = u * Math.PI * 2;
        const rad = isOuter ? 130 : 80;
        rx = Math.cos(angle) * rad;
        ry = Math.sin(angle) * rad;
        rz = (Math.random() - 0.5) * 12;
        col = isOuter ? pal3.primary : pal3.secondary;
      } else if (p < 0.80) {
        const u = (p - 0.45) / 0.35;
        const h = u * 170 - 75;
        const rad = (1 - u) * 46;
        const angle = Math.random() * Math.PI * 2;
        rx = Math.cos(angle) * rad;
        ry = h;
        rz = Math.sin(angle) * rad;
        col = u > 0.7 ? pal3.secondary : pal3.highlight;
      } else {
        const u = (p - 0.80) / 0.20;
        const spread = u * 45;
        rx = (Math.random() - 0.5) * spread;
        ry = -75 - u * 65;
        rz = (Math.random() - 0.5) * spread;
        col = pal3.secondary;
      }

      shapeRocket[i3] = rx;
      shapeRocket[i3 + 1] = ry;
      shapeRocket[i3 + 2] = rz;

      colorsRocket[i3] = col.r;
      colorsRocket[i3 + 1] = col.g;
      colorsRocket[i3 + 2] = col.b;
    }

    // Shape 4: Encrypted Shield Core
    const shapeShield = new Float32Array(N * 3);
    const colorsShield = new Float32Array(N * 3);
    const pal4 = servicePalettes[4];

    for (let i = 0; i < N; i++) {
      const i3 = i * 3;
      const p = i / N;
      let sx = 0, sy = 0, sz = (Math.random() - 0.5) * 20;
      let col = pal4.primary;

      if (p < 0.65) {
        const u = p / 0.65;
        if (u < 0.30) {
          const t = u / 0.30;
          sx = -105 + t * 210;
          sy = 105;
        } else if (u < 0.65) {
          const t = (u - 0.30) / 0.35;
          sx = -105 + t * 105;
          sy = 105 - Math.pow(t, 1.3) * 215;
        } else {
          const t = (u - 0.65) / 0.35;
          sx = 105 - t * 105;
          sy = 105 - Math.pow(t, 1.3) * 215;
        }
        sz += (Math.random() - 0.5) * 15;
        col = u < 0.30 ? pal4.highlight : pal4.primary;
      } else if (p < 0.85) {
        const u = (p - 0.65) / 0.20;
        const angle = Math.random() * Math.PI * 2;
        const rad = Math.random() * 38;
        sx = Math.cos(angle) * rad;
        sy = 15 + Math.sin(angle) * rad;
        sz = (Math.random() - 0.5) * 35;
        col = pal4.secondary;
      } else {
        const u = (p - 0.85) / 0.15;
        const angle = u * Math.PI * 2;
        sx = Math.cos(angle) * 145;
        sy = Math.sin(angle) * 145;
        sz = Math.sin(angle * 2) * 30;
        col = pal4.highlight;
      }

      shapeShield[i3] = sx;
      shapeShield[i3 + 1] = sy - 10;
      shapeShield[i3 + 2] = sz;

      colorsShield[i3] = col.r;
      colorsShield[i3 + 1] = col.g;
      colorsShield[i3 + 2] = col.b;
    }

    // Shape 5: SEO, Analytics & Growth Graph
    const shapeAnalytics = new Float32Array(N * 3);
    const colorsAnalytics = new Float32Array(N * 3);
    const pal5 = servicePalettes[5];

    for (let i = 0; i < N; i++) {
      const i3 = i * 3;
      const p = i / N;
      let sx = 0, sy = 0, sz = (Math.random() - 0.5) * 35;
      let col = pal5.primary;

      if (p < 0.45) {
        // Upward Growth Spline Curve
        const t = p / 0.45;
        sx = -120 + t * 240;
        sy = -70 + Math.pow(t, 1.8) * 160;
        sz = Math.sin(t * Math.PI * 3) * 20;
        col = pal5.highlight;
      } else if (p < 0.75) {
        // Analytics Bar Pillars
        const u = (p - 0.45) / 0.30;
        const barIdx = Math.min(Math.floor(u * 4), 3);
        const barHeights = [40, 75, 110, 145];
        const barH = barHeights[barIdx];
        const barX = -80 + barIdx * 52;
        sx = barX + (Math.random() - 0.5) * 24;
        sy = -60 + Math.random() * barH;
        sz = (Math.random() - 0.5) * 24;
        col = barIdx % 2 === 0 ? pal5.primary : pal5.secondary;
      } else {
        // Radar Circle Orbit
        const u = (p - 0.75) / 0.25;
        const angle = u * Math.PI * 2;
        const rad = 130 + Math.sin(u * 10) * 10;
        sx = Math.cos(angle) * rad;
        sy = Math.sin(angle) * rad * 0.7;
        sz = Math.sin(angle * 3) * 30;
        col = pal5.secondary;
      }

      shapeAnalytics[i3] = sx;
      shapeAnalytics[i3 + 1] = sy;
      shapeAnalytics[i3 + 2] = sz;

      colorsAnalytics[i3] = col.r;
      colorsAnalytics[i3 + 1] = col.g;
      colorsAnalytics[i3 + 2] = col.b;
    }

    const shapes = [shapeCode, shapeAI, shapeCloud, shapeRocket, shapeShield, shapeAnalytics];
    const shapeColors = [colorsCode, colorsAI, colorsCloud, colorsRocket, colorsShield, colorsAnalytics];

    // Geometry Buffer
    const particleGeo = new THREE.BufferGeometry();
    const positions = new Float32Array(N * 3);
    const colors = new Float32Array(N * 3);

    for (let i = 0; i < N * 3; i++) {
      positions[i] = shapeCode[i];
      colors[i] = colorsCode[i];
    }

    particleGeo.setAttribute("position", new THREE.BufferAttribute(positions, 3));
    particleGeo.setAttribute("color", new THREE.BufferAttribute(colors, 3));

    // High Quality Soft Glowing Radial Canvas Texture
    const createParticleTexture = () => {
      const tc = document.createElement("canvas");
      tc.width = 64;
      tc.height = 64;
      const tctx = tc.getContext("2d")!;
      const grad = tctx.createRadialGradient(32, 32, 0, 32, 32, 32);
      grad.addColorStop(0, "rgba(255, 255, 255, 1)");
      grad.addColorStop(0.35, "rgba(255, 255, 255, 0.9)");
      grad.addColorStop(0.70, "rgba(255, 255, 255, 0.35)");
      grad.addColorStop(1, "rgba(255, 255, 255, 0)");
      tctx.fillStyle = grad;
      tctx.fillRect(0, 0, 64, 64);
      return new THREE.CanvasTexture(tc);
    };

    const particleMat = new THREE.PointsMaterial({
      size: 5.5,
      vertexColors: true,
      map: createParticleTexture(),
      transparent: true,
      opacity: 0.95,
      blending: THREE.NormalBlending,
      depthWrite: false,
    });

    const particles = new THREE.Points(particleGeo, particleMat);
    mainGroup.add(particles);

    // ─── 6. MOUSE INTERACTION STATE ───
    const mouse = { x: 0, y: 0, targetX: 0, targetY: 0 };
    const handleMouseMove = (e: MouseEvent) => {
      const rect = container.getBoundingClientRect();
      const cx = rect.left + rect.width / 2;
      const cy = rect.top + rect.height / 2;
      mouse.targetX = (e.clientX - cx) / (rect.width / 2);
      mouse.targetY = (e.clientY - cy) / (rect.height / 2);
    };

    window.addEventListener("mousemove", handleMouseMove, { passive: true });

    // ─── 7. ANIMATION LOOP ───
    let animationFrameId: number;
    let disposed = false;
    const clock = new THREE.Clock();

    const animate = () => {
      if (disposed) return;
      animationFrameId = requestAnimationFrame(animate);

      try {
        const elapsedTime = clock.getElapsedTime();

        const rawIdx = typeof activeIdxRef.current === "number" ? activeIdxRef.current : 0;
        const currentIdx = Math.min(shapes.length - 1, Math.max(0, Math.floor(rawIdx)));
        
        // Toggle visibility of 3D mesh groups
        meshGroups.forEach((grp, idx) => {
          if (grp) grp.visible = idx === currentIdx;
        });

        const targetShape = shapes[currentIdx] || shapes[0];
        const targetColors = shapeColors[currentIdx] || shapeColors[0];

        const posAttr = particleGeo.attributes.position as THREE.BufferAttribute;
        const colAttr = particleGeo.attributes.color as THREE.BufferAttribute;
        if (!posAttr || !colAttr) return;

        const posArray = posAttr.array as Float32Array;
        const colArray = colAttr.array as Float32Array;
        if (!posArray || !colArray || !targetShape || !targetColors) return;

        // Mouse Smooth Dampening
        mouse.x += (mouse.targetX - mouse.x) * 0.05;
        mouse.y += (mouse.targetY - mouse.y) * 0.05;

        // Morphing Lerp (Positions & Colors)
        const limit = Math.min(N * 3, posArray.length, targetShape.length);
        for (let i = 0; i < limit; i++) {
          posArray[i] += (targetShape[i] - posArray[i]) * 0.08;
          colArray[i] += (targetColors[i] - colArray[i]) * 0.08;
        }
        posAttr.needsUpdate = true;
        colAttr.needsUpdate = true;

        // Continuous 3D Mesh Animations
        if (coreMesh) {
          coreMesh.rotation.y = elapsedTime * 0.5;
          coreMesh.rotation.x = elapsedTime * 0.3;
        }
        if (ring1) ring1.rotation.z = elapsedTime * 0.4;
        if (devRing) devRing.rotation.z = elapsedTime * 0.3;
        if (radarMesh) radarMesh.rotation.z = elapsedTime * 0.5;
        if (gemMesh) gemMesh.rotation.y = elapsedTime * 0.6;
        if (gemLines) gemLines.rotation.y = elapsedTime * 0.6;
        if (targetRing) targetRing.rotation.z = elapsedTime * 0.4;

        // Group Rotation & Interactive Tilt
        mainGroup.rotation.y = elapsedTime * 0.25 + mouse.x * 0.4;
        mainGroup.rotation.x = Math.sin(elapsedTime * 0.4) * 0.08 - mouse.y * 0.3;
        mainGroup.position.y = Math.sin(elapsedTime * 1.6) * 6;

        renderer.render(scene, camera);
      } catch (err) {
        console.warn("Particle canvas render error:", err);
      }
    };

    animate();

    // Resize Handler
    const handleResize = () => {
      if (!container) return;
      camera.aspect = container.clientWidth / container.clientHeight;
      camera.updateProjectionMatrix();
      renderer.setSize(container.clientWidth, container.clientHeight);
    };

    window.addEventListener("resize", handleResize);

    return () => {
      disposed = true;
      cancelAnimationFrame(animationFrameId);
      window.removeEventListener("resize", handleResize);
      window.removeEventListener("mousemove", handleMouseMove);
      if (container.contains(renderer.domElement)) {
        container.removeChild(renderer.domElement);
      }
      particleGeo.dispose();
      particleMat.dispose();
      boxGeo.dispose();
      boxEdges.dispose();
      boxLineMat.dispose();
      cornerGeo.dispose();
      cornerMat.dispose();
      icoGeo.dispose();
      icoEdges.dispose();
      icoLineMat.dispose();
      coreGeo.dispose();
      coreMat.dispose();
      ringGeo1.dispose();
      ringMat1.dispose();
      cloudMat.dispose();
      devRingGeo.dispose();
      devRingMat.dispose();
      rocketMat.dispose();
      coneGeo.dispose();
      bodyGeo.dispose();
      radarGeo.dispose();
      radarMat.dispose();
      gemGeo.dispose();
      gemMat.dispose();
      gemEdges.dispose();
      gemLineMat.dispose();
      shieldRingGeo.dispose();
      shieldRingMat.dispose();
      renderer.dispose();
    };
  }, []);

  return (
    <div
      ref={mountRef}
      className="relative w-full h-[360px] sm:h-[400px] md:h-[440px] flex items-center justify-center pointer-events-none"
    />
  );
}

