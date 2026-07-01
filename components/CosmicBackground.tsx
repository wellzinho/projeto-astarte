"use client";

import { useEffect, useRef } from "react";
import { useScroll, useSpring, MotionValue } from "framer-motion";

const VOID = "#05070F";

interface Point {
  x: number;
  y: number;
}

function buildStar(radius: number, count: number): Point[] {
  const pts: Point[] = [];
  const inner = radius * 0.38;
  for (let i = 0; i < count; i++) {
    const a = (i / count) * Math.PI * 2 - Math.PI / 2;
    const r = i % 2 === 0 ? radius : inner;
    pts.push({ x: Math.cos(a) * r, y: Math.sin(a) * r });
  }
  return pts;
}

function buildPhoenix(): Point[] {
  return [
    { x: 0, y: -0.7 },
    { x: -0.1, y: -0.52 },
    { x: 0.1, y: -0.52 },
    { x: 0, y: -0.35 },
    { x: -0.15, y: -0.2 },
    { x: 0.15, y: -0.2 },
    { x: -0.55, y: -0.32 },
    { x: 0.55, y: -0.32 },
    { x: -0.7, y: 0.05 },
    { x: 0.7, y: 0.05 },
    { x: -0.55, y: 0.4 },
    { x: 0.55, y: 0.4 },
    { x: -0.2, y: 0.15 },
    { x: 0.2, y: 0.15 },
    { x: 0, y: 0.32 },
    { x: -0.16, y: 0.55 },
    { x: 0, y: 0.68 },
    { x: 0.16, y: 0.55 },
  ];
}

interface CosmicBackgroundProps {
  scrollProgress?: MotionValue<number>;
  className?: string;
}

export default function CosmicBackground({
  scrollProgress: externalProgress,
  className = "",
}: CosmicBackgroundProps) {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const progressRef = useRef(0);
  const timeRef = useRef(0);
  const rafRef = useRef(0);

  const { scrollYProgress } = useScroll();
  const smoothProgress = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
  });
  const activeProgress = externalProgress ?? smoothProgress;

  useEffect(() => {
    const unsub = activeProgress.on("change", (v) => {
      progressRef.current = v;
    });
    return unsub;
  }, [activeProgress]);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d", { alpha: false });
    if (!ctx) return;

    const star = buildStar(0.5, 10);
    const phoenix = buildPhoenix();
    const particles = Array.from({ length: 60 }, () => ({
      x: (Math.random() - 0.5) * 2,
      y: (Math.random() - 0.5) * 2,
      phase: Math.random() * Math.PI * 2,
      speed: Math.random() * 0.2 + 0.05,
      size: Math.random() * 1 + 0.3,
    }));

    const resize = () => {
      const dpr = Math.min(window.devicePixelRatio || 1, 2);
      canvas.width = window.innerWidth * dpr;
      canvas.height = window.innerHeight * dpr;
      canvas.style.width = `${window.innerWidth}px`;
      canvas.style.height = `${window.innerHeight}px`;
      ctx.setTransform(dpr, 0, 0, dpr, 0, 0);
    };

    resize();
    window.addEventListener("resize", resize);

    const draw = () => {
      const w = window.innerWidth;
      const h = window.innerHeight;
      const cx = w / 2;
      const cy = h * 0.45;
      const scale = Math.min(w, h) * 0.34;
      const scroll = progressRef.current;
      const morph = scroll < 0.15 ? scroll / 0.15 : 1;
      timeRef.current += 0.006;

      ctx.fillStyle = VOID;
      ctx.fillRect(0, 0, w, h);

      const density = 1 - scroll * 0.6;
      const lineAlpha = 0.12 + (1 - scroll) * 0.18;

      // Particles
      const particleCount = Math.floor(particles.length * density);
      for (let i = 0; i < particleCount; i++) {
        const p = particles[i];
        const drift = Math.sin(timeRef.current * p.speed + p.phase) * 0.015;
        const px = cx + (p.x + drift) * scale * 1.3;
        const py = cy + (p.y + drift * 0.5) * scale * 1.3;
        const a = 0.1 + Math.sin(timeRef.current + p.phase) * 0.06;
        ctx.beginPath();
        ctx.arc(px, py, p.size, 0, Math.PI * 2);
        ctx.fillStyle = i % 2 === 0 ? `rgba(229,186,115,${a})` : `rgba(43,108,176,${a * 0.7})`;
        ctx.fill();
      }

      // Morph nodes
      const nodes: Point[] = [];
      const maxN = Math.max(star.length, phoenix.length);
      for (let i = 0; i < maxN; i++) {
        const s = star[i % star.length];
        const p = phoenix[i % phoenix.length];
        const breathe = Math.sin(timeRef.current * 0.4 + i) * 0.01;
        nodes.push({
          x: cx + (s.x + (p.x - s.x) * morph * 0.3 + breathe) * scale,
          y: cy + (s.y + (p.y - s.y) * morph * 0.3 + breathe) * scale,
        });
      }

      // Edges
      for (let i = 0; i < nodes.length; i++) {
        const next = (i + 1) % nodes.length;
        const skip = (i + Math.floor(nodes.length / 2)) % nodes.length;
        for (const j of [next, skip]) {
          if (i === j) continue;
          const a = nodes[i];
          const b = nodes[j];
          const mx = (a.x + b.x) / 2;
          const my = (a.y + b.y) / 2;
          const dx = b.x - a.x;
          const dy = b.y - a.y;
          const isGold = i % 2 === 0;
          const grad = ctx.createLinearGradient(a.x, a.y, b.x, b.y);
          const alpha = lineAlpha * density;
          if (isGold) {
            grad.addColorStop(0, `rgba(229,186,115,${alpha})`);
            grad.addColorStop(1, `rgba(197,168,128,${alpha * 0.5})`);
          } else {
            grad.addColorStop(0, `rgba(26,54,93,${alpha})`);
            grad.addColorStop(1, `rgba(43,108,176,${alpha * 0.7})`);
          }
          ctx.beginPath();
          ctx.moveTo(a.x, a.y);
          ctx.quadraticCurveTo(
            mx - dy * 0.08,
            my + dx * 0.08,
            b.x,
            b.y
          );
          ctx.strokeStyle = grad;
          ctx.lineWidth = 0.5;
          ctx.stroke();
        }
      }

      // Node dots
      for (let i = 0; i < nodes.length; i++) {
        const n = nodes[i];
        const glow = 0.25 + Math.sin(timeRef.current + i) * 0.1;
        ctx.beginPath();
        ctx.arc(n.x, n.y, 1.2, 0, Math.PI * 2);
        ctx.fillStyle = i % 2 === 0 ? `rgba(229,186,115,${glow})` : `rgba(43,108,176,${glow})`;
        ctx.fill();
      }

      rafRef.current = requestAnimationFrame(draw);
    };

    rafRef.current = requestAnimationFrame(draw);
    return () => {
      cancelAnimationFrame(rafRef.current);
      window.removeEventListener("resize", resize);
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      className={`fixed inset-0 z-0 pointer-events-none ${className}`}
      aria-hidden="true"
    />
  );
}
