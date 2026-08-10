"use client";

import { useEffect, useRef } from "react";
import * as THREE from "three";

interface SevenX3DLogoProps {
  isReady?: boolean;
}

export default function SevenX3DLogo({ isReady = true }: SevenX3DLogoProps) {
  const containerRef = useRef<HTMLDivElement>(null);
  const isReadyRef = useRef(isReady);

  useEffect(() => {
    isReadyRef.current = isReady;
  }, [isReady]);

  useEffect(() => {
    const container = containerRef.current;
    if (!container) return;

    // ═══════════════════════════════════════════════════════
    // 1. SCENE SETUP — Local on Mobile/Tablet, Fullscreen on Desktop
    // ═══════════════════════════════════════════════════════
    const scene = new THREE.Scene();
    const isMobileInit = window.innerWidth < 1024;
    let w = isMobileInit ? 260 : window.innerWidth;
    let h = isMobileInit ? 220 : window.innerHeight;

    const camera = new THREE.PerspectiveCamera(40, w / h, 0.1, 3000);
    camera.position.set(0, 0, isMobileInit ? 440 : 750);

    const renderer = new THREE.WebGLRenderer({
      alpha: true,
      antialias: true,
      powerPreference: "high-performance",
    });
    renderer.setSize(w, h);
    renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
    renderer.setClearColor(0x000000, 0);
    container.appendChild(renderer.domElement);

    scene.add(new THREE.AmbientLight(0xffffff, 1.5));

    const logoGroup = new THREE.Group();
    scene.add(logoGroup);

    // ═══════════════════════════════════════════════════════
    // 2. INTERACTION & SCROLL STATE
    // ═══════════════════════════════════════════════════════
    const mouse = {
      xScreen: 0.5,
      yScreen: 0.5,
      localWorldX: 0,
      localWorldY: 0,
      inside: false,
    };

    let currentScrollRatio = 0;
    let smoothScrollRatio = 0;

    const handleScroll = () => {
      const rawScrollY = window.scrollY;
      const aboutEl = document.getElementById("about");
      const targetDist = aboutEl ? aboutEl.offsetTop : window.innerHeight * 0.8;
      currentScrollRatio = Math.min(1, Math.max(0, rawScrollY / Math.max(1, targetDist)));
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    handleScroll();

    let triggerScatterFn: (() => void) | null = null;

    const handleMouseMove = (e: MouseEvent) => {
      mouse.xScreen = e.clientX / window.innerWidth;
      mouse.yScreen = e.clientY / window.innerHeight;

      const logoScreenX = ((logoGroup.position.x / 400) + 0.5) * window.innerWidth;
      const logoScreenY = ((-logoGroup.position.y / 300) + 0.5) * window.innerHeight;
      const dist = Math.hypot(e.clientX - logoScreenX, e.clientY - logoScreenY);

      mouse.inside = dist < 220;
      mouse.localWorldX = ((e.clientX - logoScreenX) / window.innerWidth) * 700;
      mouse.localWorldY = -((e.clientY - logoScreenY) / window.innerHeight) * 700;
    };

    const handleMouseLeave = () => {
      mouse.inside = false;
    };

    const handleClick = () => {
      if (mouse.inside && triggerScatterFn) {
        triggerScatterFn();
      }
    };

    const handleContextMenu = (e: MouseEvent) => {
      e.preventDefault();
    };

    window.addEventListener("mousemove", handleMouseMove);
    window.addEventListener("mouseleave", handleMouseLeave);
    window.addEventListener("click", handleClick);
    window.addEventListener("contextmenu", handleContextMenu);

    let animFrameId: number;

    // ═══════════════════════════════════════════════════════
    // 3. DYNAMIC ANCHOR PROJECTION (Screen -> Three.js World Coordinates)
    // ═══════════════════════════════════════════════════════
    const getAnchorWorldPos = (id: string, fallbackX: number, fallbackY: number) => {
      const el = document.getElementById(id);
      if (!el) return { x: fallbackX, y: fallbackY };

      const rect = el.getBoundingClientRect();
      if (rect.width === 0 || rect.height === 0) return { x: fallbackX, y: fallbackY };

      const cx = rect.left + rect.width / 2;
      const cy = rect.top + rect.height / 2;

      const ndcX = (cx / window.innerWidth) * 2 - 1;
      const ndcY = -(cy / window.innerHeight) * 2 + 1;

      const vFOV = (40 * Math.PI) / 180;
      const visibleHeight = 2 * Math.tan(vFOV / 2) * 750;
      const visibleWidth = visibleHeight * (window.innerWidth / window.innerHeight);

      const worldX = (ndcX * visibleWidth) / 2;
      const worldY = (ndcY * visibleHeight) / 2;

      return { x: worldX, y: worldY };
    };

    // ═══════════════════════════════════════════════════════
    // 4. SAMPLE LOGO.PNG & BUILD MULTI-SHAPE TARGET SYSTEM
    // ═══════════════════════════════════════════════════════
    const img = new Image();
    img.src = "/logo.png";
    img.crossOrigin = "Anonymous";

    img.onload = () => {
      const S = 300;
      const offscreen = document.createElement("canvas");
      offscreen.width = S;
      offscreen.height = S;
      const ctx = offscreen.getContext("2d", { willReadFrequently: true })!;
      ctx.drawImage(img, 0, 0, S, S);
      const imgData = ctx.getImageData(0, 0, S, S);
      const px = imgData.data;

      const isLogo = (x: number, y: number): boolean => {
        if (x < 0 || x >= S || y < 0 || y >= S) return false;
        const idx = (y * S + x) * 4;
        const r = px[idx],
          g = px[idx + 1],
          b = px[idx + 2];
        return !(r > 215 && g > 215 && b > 215);
      };

      const isAccent = (x: number, y: number): boolean => {
        const idx = (y * S + x) * 4;
        const r = px[idx],
          g = px[idx + 1],
          b = px[idx + 2];
        return !(r < 60 && g < 60 && b < 60);
      };

      const isBoundaryEdge = (x: number, y: number): boolean => {
        const neighbors = [
          [-2, 0],
          [2, 0],
          [0, -2],
          [0, 2],
        ];
        for (const [dx, dy] of neighbors) {
          if (!isLogo(x + dx, y + dy)) return true;
        }
        return false;
      };

      interface ParticleTarget {
        x: number;
        y: number;
        z: number;
        r: number;
        g: number;
        b: number;
        isEdge: boolean;
        isAccent: boolean;
        size: number;
      }

      const targets: ParticleTarget[] = [];
      const scale = 1.35;

      const edgeStep = 2.4;
      const interiorStep = 4.0;

      for (let sy = 0; sy < S; sy += 2.0) {
        for (let sx = 0; sx < S; sx += 2.0) {
          const ix = Math.floor(sx);
          const iy = Math.floor(sy);

          if (!isLogo(ix, iy)) continue;

          const edge = isBoundaryEdge(ix, iy);
          const accent = isAccent(ix, iy);

          if (!edge && !accent) {
            if (ix % Math.floor(interiorStep) !== 0 || iy % Math.floor(interiorStep) !== 0) {
              continue;
            }
          } else if (edge && !accent) {
            if (ix % Math.floor(edgeStep) !== 0 && iy % Math.floor(edgeStep) !== 0) {
              continue;
            }
          }

          const worldX = (ix - S / 2) * scale;
          const worldY = (S / 2 - iy) * scale;
          const idx = (iy * S + ix) * 4;

          let baseR: number, baseG: number, baseB: number;
          if (accent) {
            baseR = Math.min(1, (px[idx] / 255) * 1.6);
            baseG = Math.min(1, (px[idx + 1] / 255) * 1.6);
            baseB = Math.min(1, (px[idx + 2] / 255) * 1.6);
          } else {
            baseR = 0.08;
            baseG = 0.08;
            baseB = 0.10;
          }

          const depthLayers = edge
            ? [20, 10, 0, -10, -20]
            : accent
            ? [14, 0, -14]
            : [16, 0, -16];

          for (const zOffset of depthLayers) {
            if (!edge && !accent && zOffset < 0 && Math.random() > 0.35) continue;

            let r = baseR;
            let g = baseG;
            let b = baseB;

            if (!accent) {
              if (zOffset > 5) {
                const isRim = edge && (worldY > 0 || worldX < 0);
                const bright = isRim ? 0.22 : 0.12;
                r = bright;
                g = bright;
                b = bright + 0.03;
              } else if (zOffset < -5) {
                r = 0.04;
                g = 0.04;
                b = 0.06;
              } else {
                r = 0.07;
                g = 0.07;
                b = 0.09;
              }
            }

            targets.push({
              x: worldX,
              y: worldY,
              z: zOffset + (Math.random() - 0.5) * 2,
              r,
              g,
              b,
              isEdge: edge,
              isAccent: accent,
              size: accent ? 5.0 : edge ? 4.2 : 3.4,
            });
          }
        }
      }

      // Orbiting atmospheric particles (~35)
      for (let i = 0; i < 35; i++) {
        const angle = Math.random() * Math.PI * 2;
        const rad = 180 + Math.random() * 80;
        const isCyan = Math.random() > 0.5;

        targets.push({
          x: Math.cos(angle) * rad,
          y: Math.sin(angle) * rad,
          z: (Math.random() - 0.5) * 120,
          r: isCyan ? 0.0 : 0.5,
          g: isCyan ? 0.8 : 0.2,
          b: isCyan ? 0.95 : 0.8,
          isEdge: false,
          isAccent: true,
          size: 3.4,
        });
      }

      const N = targets.length;

      // ─── SHAPE 1: 3D SevenX Logo (Hero) ──────────────────
      const targSevenX = new Float32Array(N * 3);
      for (let i = 0; i < N; i++) {
        targSevenX[i * 3] = targets[i].x;
        targSevenX[i * 3 + 1] = targets[i].y;
        targSevenX[i * 3 + 2] = targets[i].z;
      }

      // ─── SHAPE 2: 3D Globe Sphere (Mid-scroll Transition) ──
      const targGlobe = new Float32Array(N * 3);
      for (let i = 0; i < N; i++) {
        const i3 = i * 3;
        const tx = targets[i].x;
        const ty = targets[i].y;
        const tz = targets[i].z;
        const dist = Math.hypot(tx, ty, tz) || 1;
        const sphereR = 160 + Math.sin(i * 0.9) * 8;

        targGlobe[i3] = (tx / dist) * sphereR;
        targGlobe[i3 + 1] = (ty / dist) * sphereR;
        targGlobe[i3 + 2] = (tz / dist) * sphereR;
      }

      // ─── SHAPE 3: 3D Code Symbol </> (About Section) ──────
      const targArch = new Float32Array(N * 3);

      for (let i = 0; i < N; i++) {
        const i3 = i * 3;
        const tx = targets[i].x;
        const ty = targets[i].y;
        const tz = targets[i].z;

        let cx = 0, cy = 0, cz = (Math.random() - 0.5) * 6;

        const normX = (tx + 150) / 300;

        if (normX < 0.38) {
          // Left bracket '<'
          const t = (ty + 150) / 300;
          if (t > 0.5) {
            const u = (t - 0.5) / 0.5;
            cx = -65 + (-165 - (-65)) * u;
            cy = 105 + (0 - 105) * u;
          } else {
            const u = t / 0.5;
            cx = -165 + (-65 - (-165)) * u;
            cy = 0 + (-105 - 0) * u;
          }
        } else if (normX < 0.62) {
          // Slash '/'
          const u = (ty + 150) / 300;
          cx = -30 + (30 - (-30)) * u;
          cy = -120 + (120 - (-120)) * u;
        } else {
          // Right bracket '>'
          const t = (ty + 150) / 300;
          if (t > 0.5) {
            const u = (t - 0.5) / 0.5;
            cx = 65 + (165 - 65) * u;
            cy = 105 + (0 - 105) * u;
          } else {
            const u = t / 0.5;
            cx = 165 + (65 - 165) * u;
            cy = 0 + (-105 - 0) * u;
          }
        }

        cz = tz * 0.8 + (Math.random() - 0.5) * 8;

        targArch[i3] = cx * 1.15;
        targArch[i3 + 1] = cy * 1.15;
        targArch[i3 + 2] = cz;
      }

      // ─── GPU BUFFER SETUP ───────────────────────────────
      const geo = new THREE.BufferGeometry();
      const pos = new Float32Array(N * 3);
      const initP = new Float32Array(N * 3);
      const currTargP = new Float32Array(N * 3);
      const cols = new Float32Array(N * 3);
      const seeds = new Float32Array(N);

      const generateScatter = () => {
        for (let i = 0; i < N; i++) {
          const i3 = i * 3;
          seeds[i] = Math.random();

          const sx = (Math.random() - 0.5) * 1600;
          const sy = (Math.random() - 0.5) * 1100;
          const sz = (Math.random() - 0.5) * 700;

          initP[i3] = sx;
          initP[i3 + 1] = sy;
          initP[i3 + 2] = sz;

          currTargP[i3] = targets[i].x;
          currTargP[i3 + 1] = targets[i].y;
          currTargP[i3 + 2] = targets[i].z;

          cols[i3] = targets[i].r;
          cols[i3 + 1] = targets[i].g;
          cols[i3 + 2] = targets[i].b;
        }
      };

      generateScatter();

      geo.setAttribute("position", new THREE.BufferAttribute(pos, 3));
      geo.setAttribute("color", new THREE.BufferAttribute(cols, 3));

      // ─── CRISP OPAQUE PARTICLE TEXTURE ─────────────────
      const tc = document.createElement("canvas");
      tc.width = 64;
      tc.height = 64;
      const tctx = tc.getContext("2d")!;
      const grad = tctx.createRadialGradient(32, 32, 0, 32, 32, 32);
      grad.addColorStop(0, "rgba(0,0,0,1)");
      grad.addColorStop(0.45, "rgba(0,0,0,0.95)");
      grad.addColorStop(0.75, "rgba(0,0,0,0.3)");
      grad.addColorStop(1, "rgba(0,0,0,0)");
      tctx.fillStyle = grad;
      tctx.fillRect(0, 0, 64, 64);

      const mat = new THREE.PointsMaterial({
        size: 4.8,
        vertexColors: true,
        map: new THREE.CanvasTexture(tc),
        transparent: true,
        blending: THREE.NormalBlending,
        depthWrite: false,
        opacity: 0.95,
      });

      logoGroup.add(new THREE.Points(geo, mat));

      // ═══════════════════════════════════════════════════════
      // 5. ANIMATION LOOP — DYNAMIC ANCHOR PROJECTION & MORPH
      // ═══════════════════════════════════════════════════════
      const DRIFT_END = 0.3;
      let assemblyStartTime: number | null = null;

      triggerScatterFn = () => {
        generateScatter();
        assemblyStartTime = performance.now();
      };

      const animate = () => {
        animFrameId = requestAnimationFrame(animate);
        const now = performance.now();

        if (!isReadyRef.current) {
          assemblyStartTime = null;
        } else if (assemblyStartTime === null) {
          assemblyStartTime = now;
        }

        const elapsed =
          assemblyStartTime !== null ? (now - assemblyStartTime) * 0.001 : 0;

        smoothScrollRatio += (currentScrollRatio - smoothScrollRatio) * 0.08;

        // Dynamic Viewport Target Projections (Guarantees ZERO overlap on ALL zoom levels / screen sizes)
        const heroPos = getAnchorWorldPos("hero-logo-anchor", 280, 30);
        const aboutPos = getAnchorWorldPos("about-logo-anchor", -310, -40);

        // Fixed Stable 3D Orientation
        logoGroup.rotation.y = -0.15 + Math.sin(elapsed * 0.4) * 0.08;
        logoGroup.rotation.x = 0.08;

        // Dynamic Responsive Scale based on screen width & zoom level
        const isMobile = window.innerWidth < 1024;
        const responsiveScale = window.innerWidth < 768 ? 0.52 : window.innerWidth < 1024 ? 0.70 : 1.0;
        logoGroup.scale.setScalar(responsiveScale);

        if (isMobile) {
          // ── MOBILE & TABLET: Centered with full clearance ──
          logoGroup.visible = true;
          logoGroup.position.set(0, 0, 0);
          logoGroup.scale.setScalar(0.65);

          const pArray = geo.attributes.position.array as Float32Array;
          for (let i = 0; i < N; i++) {
            const i3 = i * 3;
            const s = seeds[i];
            const t = targets[i];

            const tx = targSevenX[i3];
            const ty = targSevenX[i3 + 1];
            const tz = targSevenX[i3 + 2];

            const breath = Math.sin(elapsed * 1.2 + s * 7) * (t.isAccent ? 1.4 : 0.7);
            pArray[i3] = tx + breath * 0.4;
            pArray[i3 + 1] = ty + breath * 0.4;
            pArray[i3 + 2] = tz;
          }

          geo.attributes.position.needsUpdate = true;
          renderer.render(scene, camera);
          return;
        } else {
          // ── DESKTOP & LAPTOP ONLY: Full 3-Stage Cinematic Movie (Hero -> Globe -> About) ──
          logoGroup.visible = true;

          if (smoothScrollRatio <= 0.01) {
            // Stage 1: Lock onto Hero Right Column Anchor (#hero-logo-anchor)
            logoGroup.position.x = heroPos.x;
            logoGroup.position.y = heroPos.y;

            for (let i = 0; i < N; i++) {
              const i3 = i * 3;
              currTargP[i3] = targSevenX[i3];
              currTargP[i3 + 1] = targSevenX[i3 + 1];
              currTargP[i3 + 2] = targSevenX[i3 + 2];
            }
          } else if (smoothScrollRatio <= 0.50) {
            // Stage 2: Hero -> Mid-scroll Globe Sphere (Center-Right clearance path)
            const t = smoothScrollRatio / 0.50;
            const easeT = Math.sin((t * Math.PI) / 2);

            const midX = (heroPos.x + aboutPos.x) / 2 + 100;
            const midY = (heroPos.y + aboutPos.y) / 2;

            logoGroup.position.x = heroPos.x + (midX - heroPos.x) * easeT;
            logoGroup.position.y = heroPos.y + (midY - heroPos.y) * easeT;

            for (let i = 0; i < N; i++) {
              const i3 = i * 3;
              const sx = targSevenX[i3];
              const sy = targSevenX[i3 + 1];
              const sz = targSevenX[i3 + 2];

              const gx = targGlobe[i3];
              const gy = targGlobe[i3 + 1];
              const gz = targGlobe[i3 + 2];

              currTargP[i3] = sx + (gx - sx) * easeT;
              currTargP[i3 + 1] = sy + (gy - sy) * easeT;
              currTargP[i3 + 2] = sz + (gz - sz) * easeT;
            }
          } else {
            // Stage 3: Mid-scroll -> Lock onto About Left Column Anchor (#about-logo-anchor)
            const t = (smoothScrollRatio - 0.50) / 0.50;
            const easeT = Math.sin((t * Math.PI) / 2);

            const midX = (heroPos.x + aboutPos.x) / 2 + 100;
            const midY = (heroPos.y + aboutPos.y) / 2;

            logoGroup.position.x = midX + (aboutPos.x - midX) * easeT;
            logoGroup.position.y = midY + (aboutPos.y - midY) * easeT;

            for (let i = 0; i < N; i++) {
              const i3 = i * 3;
              const gx = targGlobe[i3];
              const gy = targGlobe[i3 + 1];
              const gz = targGlobe[i3 + 2];

              const ax = targArch[i3];
              const ay = targArch[i3 + 1];
              const az = targArch[i3 + 2];

              currTargP[i3] = gx + (ax - gx) * easeT;
              currTargP[i3 + 1] = gy + (ay - gy) * easeT;
              currTargP[i3 + 2] = gz + (az - gz) * easeT;
            }
          }
        }

        // Floating motion
        const floatY = assemblyStartTime !== null && elapsed > 2.2
          ? Math.sin(elapsed * 0.8) * 6
          : 0;
        logoGroup.position.y += floatY;

        const pArray = geo.attributes.position.array as Float32Array;

        for (let i = 0; i < N; i++) {
          const i3 = i * 3;
          const s = seeds[i];
          const t = targets[i];

          const sx = initP[i3];
          const sy = initP[i3 + 1];
          const sz = initP[i3 + 2];

          const tx = currTargP[i3];
          const ty = currTargP[i3 + 1];
          const tz = currTargP[i3 + 2];

          const assemblyDelay = (t.isEdge ? 0 : 0.4) + s * 0.2;
          const particleStartTime = DRIFT_END + assemblyDelay;
          const particleDuration = 1.5 + s * 0.3;

          let rawProgress = Math.max(
            0,
            (elapsed - particleStartTime) / particleDuration
          );
          rawProgress = Math.min(1, rawProgress);
          const ease = 1 - Math.pow(1 - rawProgress, 4);

          let cx = sx + (tx - sx) * ease;
          let cy = sy + (ty - sy) * ease;
          let cz = sz + (tz - sz) * ease;

          if (rawProgress >= 1) {
            const breath = Math.sin(elapsed * 1.2 + s * 7) * (t.isAccent ? 1.4 : 0.7);
            cx += breath * 0.4;
            cy += breath * 0.4;
          }

          // Mouse repulsion ONLY when cursor is actually hovering directly over 3D object
          if (mouse.inside && ease > 0.7) {
            const dx = cx - mouse.localWorldX;
            const dy = cy - mouse.localWorldY;
            const dSq = dx * dx + dy * dy;
            const repelRadius = 60;

            if (dSq < repelRadius * repelRadius && dSq > 1) {
              const d = Math.sqrt(dSq);
              const strength = (1 - d / repelRadius) * 16;
              cx += (dx / d) * strength;
              cy += (dy / d) * strength;
            }
          }

          pArray[i3] = cx;
          pArray[i3 + 1] = cy;
          pArray[i3 + 2] = cz;
        }

        geo.attributes.position.needsUpdate = true;
        renderer.render(scene, camera);
      };

      animate();
    };

    // ═══════════════════════════════════════════════════════
    // 6. RESPONSIVE RESIZE & CLEANUP
    // ═══════════════════════════════════════════════════════
    const handleResize = () => {
      const isMobileNow = window.innerWidth < 1024;
      w = isMobileNow ? 260 : window.innerWidth;
      h = isMobileNow ? 220 : window.innerHeight;
      camera.aspect = w / h;
      camera.position.set(0, 0, isMobileNow ? 440 : 750);
      camera.updateProjectionMatrix();
      renderer.setSize(w, h);
    };

    window.addEventListener("resize", handleResize);

    return () => {
      cancelAnimationFrame(animFrameId);
      window.removeEventListener("scroll", handleScroll);
      window.removeEventListener("mousemove", handleMouseMove);
      window.removeEventListener("mouseleave", handleMouseLeave);
      window.removeEventListener("resize", handleResize);
      window.removeEventListener("click", handleClick);
      window.removeEventListener("contextmenu", handleContextMenu);
      if (container.contains(renderer.domElement)) {
        container.removeChild(renderer.domElement);
      }
      renderer.dispose();
    };
  }, []);

  return (
    <div
      ref={containerRef}
      className="w-full h-full relative lg:fixed lg:inset-0 pointer-events-none z-20 select-none overflow-hidden flex items-center justify-center"
      onContextMenu={(e) => e.preventDefault()}
    />
  );
}
