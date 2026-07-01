"use client";

import { useEffect, useRef, useCallback } from "react";
import { useSpring, MotionValue } from "framer-motion";

const VOID = "#05070F";
const GOLD_LIGHT = "#E5BA73";
const GOLD_DARK = "#C5A880";
const SAPPHIRE_DEEP = "#1A365D";
const SAPPHIRE_BRIGHT = "#2B6CB0";

interface Point {
  x: number;
  y: number;
}

interface Node {
  star: Point;
  phoenix: Point;
  phase: number;
  speed: number;
  radius: number;
}

interface Edge {
  from: number;
  to: number;
  weight: number;
}

function lerp(a: number, b: number, t: number): number {
  return a + (b - a) * t;
}

function lerpPoint(a: Point, b: Point, t: number): Point {
  return { x: lerp(a.x, b.x, t), y: lerp(a.y, b.y, t) };
}

function easeInOutCubic(t: number): number {
  return t < 0.5 ? 4 * t * t * t : 1 - Math.pow(-2 * t + 2, 3) / 2;
}

function buildStarNodes(count: number, radius: number): Point[] {
  const points: Point[] = [];
  const inner = radius * 0.38;
  for (let i = 0; i < count; i++) {
    const angle = (i / count) * Math.PI * 2 - Math.PI / 2;
    const r = i % 2 === 0 ? radius : inner;
    points.push({
      x: Math.cos(angle) * r,
      y: Math.sin(angle) * r,
    });
  }
  return points;
}

function buildPhoenixNodes(): Point[] {
  return [
    { x: 0, y: -0.72 },       // crown
    { x: -0.08, y: -0.55 },   // head L
    { x: 0.08, y: -0.55 },    // head R
    { x: 0, y: -0.38 },       // neck
    { x: -0.14, y: -0.22 },   // shoulder L
    { x: 0.14, y: -0.22 },    // shoulder R
    { x: -0.55, y: -0.35 },   // wing tip upper L
    { x: 0.55, y: -0.35 },    // wing tip upper R
    { x: -0.72, y: 0.05 },    // wing mid L
    { x: 0.72, y: 0.05 },     // wing mid R
    { x: -0.58, y: 0.42 },    // wing lower L
    { x: 0.58, y: 0.42 },     // wing lower R
    { x: -0.22, y: 0.18 },    // body L
    { x: 0.22, y: 0.18 },     // body R
    { x: 0, y: 0.35 },        // torso
    { x: -0.18, y: 0.58 },    // tail feather L
    { x: 0, y: 0.72 },        // tail center
    { x: 0.18, y: 0.58 },     // tail feather R
    { x: -0.32, y: 0.48 },    // tail arc L
    { x: 0.32, y: 0.48 },     // tail arc R
    { x: 0, y: -0.62 },       // beak tip
    { x: -0.38, y: -0.12 },   // wing inner L
    { x: 0.38, y: -0.12 },    // wing inner R
    { x: -0.45, y: 0.28 },    // wing fold L
    { x: 0.45, y: 0.28 },     // wing fold R
  ];
}

function buildConstellationEdges(nodeCount: number): Edge[] {
  const edges: Edge[] = [];
  for (let i = 0; i < nodeCount; i++) {
    const next = (i + 1) % nodeCount;
    edges.push({ from: i, to: next, weight: 1 });
    const skip = (i + Math.floor(nodeCount / 2)) % nodeCount;
    if (skip !== i && skip !== next) {
      edges.push({ from: i, to: skip, weight: 0.5 });
    }
  }
  return edges;
}

function buildPhoenixEdges(): Edge[] {
  return [
    { from: 0, to: 20, weight: 1 },
    { from: 0, to: 1, weight: 0.8 },
    { from: 0, to: 2, weight: 0.8 },
    { from: 1, to: 3, weight: 1 },
    { from: 2, to: 3, weight: 1 },
    { from: 3, to: 4, weight: 1 },
    { from: 3, to: 5, weight: 1 },
    { from: 4, to: 21, weight: 0.9 },
    { from: 5, to: 22, weight: 0.9 },
    { from: 21, to: 6, weight: 1 },
    { from: 22, to: 7, weight: 1 },
    { from: 6, to: 8, weight: 1 },
    { from: 7, to: 9, weight: 1 },
    { from: 8, to: 10, weight: 0.9 },
    { from: 9, to: 11, weight: 0.9 },
    { from: 10, to: 18, weight: 0.7 },
    { from: 11, to: 19, weight: 0.7 },
    { from: 4, to: 12, weight: 0.8 },
    { from: 5, to: 13, weight: 0.8 },
    { from: 12, to: 14, weight: 1 },
    { from: 13, to: 14, weight: 1 },
    { from: 14, to: 15, weight: 0.9 },
    { from: 14, to: 16, weight: 1 },
    { from: 14, to: 17, weight: 0.9 },
    { from: 15, to: 16, weight: 0.6 },
    { from: 16, to: 17, weight: 0.6 },
    { from: 12, to: 23, weight: 0.5 },
    { from: 13, to: 24, weight: 0.5 },
    { from: 21, to: 23, weight: 0.4 },
    { from: 22, to: 24, weight: 0.4 },
    { from: 8, to: 23, weight: 0.3 },
    { from: 9, to: 24, weight: 0.3 },
    { from: 18, to: 15, weight: 0.5 },
    { from: 19, to: 17, weight: 0.5 },
  ];
}

function buildParticles(count: number): { x: number; y: number; size: number; phase: number; speed: number }[] {
  const particles = [];
  for (let i = 0; i < count; i++) {
    particles.push({
      x: (Math.random() - 0.5) * 2,
      y: (Math.random() - 0.5) * 2,
      size: Math.random() * 1.2 + 0.3,
      phase: Math.random() * Math.PI * 2,
      speed: Math.random() * 0.3 + 0.1,
    });
  }
  return particles;
}

interface AstarteCanvasProps {
  scrollProgress: MotionValue<number>;
}

export default function AstarteCanvas({ scrollProgress }: AstarteCanvasProps) {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const mouseRef = useRef({ x: 0.5, y: 0.5, active: false });
  const rafRef = useRef<number>(0);
  const timeRef = useRef(0);
  const progressRef = useRef(0);

  const smoothProgress = useSpring(scrollProgress, {
    stiffness: 100,
    damping: 30,
  });

  const initSystem = useCallback(() => {
    const starPoints = buildStarNodes(10, 0.55);
    const phoenixPoints = buildPhoenixNodes();
    const maxNodes = Math.max(starPoints.length, phoenixPoints.length);

    const nodes: Node[] = [];
    for (let i = 0; i < maxNodes; i++) {
      const star = starPoints[i % starPoints.length];
      const phoenix = phoenixPoints[i % phoenixPoints.length];
      nodes.push({
        star,
        phoenix,
        phase: Math.random() * Math.PI * 2,
        speed: Math.random() * 0.4 + 0.2,
        radius: Math.random() * 1.5 + 1,
      });
    }

    const starEdges = buildConstellationEdges(starPoints.length);
    const phoenixEdges = buildPhoenixEdges();
    const particles = buildParticles(80);

    return { nodes, starEdges, phoenixEdges, particles, starPoints, phoenixPoints };
  }, []);

  const systemRef = useRef(initSystem());

  useEffect(() => {
    const unsubscribe = smoothProgress.on("change", (v) => {
      progressRef.current = v;
    });
    return unsubscribe;
  }, [smoothProgress]);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext("2d", { alpha: false });
    if (!ctx) return;

    const resize = () => {
      const dpr = Math.min(window.devicePixelRatio || 1, 2);
      const w = window.innerWidth;
      const h = window.innerHeight;
      canvas.width = w * dpr;
      canvas.height = h * dpr;
      canvas.style.width = `${w}px`;
      canvas.style.height = `${h}px`;
      ctx.setTransform(dpr, 0, 0, dpr, 0, 0);
    };

    const handleMouse = (e: MouseEvent) => {
      mouseRef.current = {
        x: e.clientX / window.innerWidth,
        y: e.clientY / window.innerHeight,
        active: true,
      };
    };

    const handleTouch = (e: TouchEvent) => {
      if (e.touches.length > 0) {
        mouseRef.current = {
          x: e.touches[0].clientX / window.innerWidth,
          y: e.touches[0].clientY / window.innerHeight,
          active: true,
        };
      }
    };

    const handleLeave = () => {
      mouseRef.current.active = false;
    };

    resize();
    window.addEventListener("resize", resize);
    window.addEventListener("mousemove", handleMouse);
    window.addEventListener("touchmove", handleTouch, { passive: true });
    window.addEventListener("mouseleave", handleLeave);

    const { nodes, starEdges, phoenixEdges, particles } = systemRef.current;

    const draw = () => {
      const w = window.innerWidth;
      const h = window.innerHeight;
      const cx = w / 2;
      const cy = h / 2;
      const scale = Math.min(w, h) * 0.38;

      const rawProgress = progressRef.current;
      const morphT = easeInOutCubic(rawProgress);
      timeRef.current += 0.008;

      ctx.fillStyle = VOID;
      ctx.fillRect(0, 0, w, h);

      // Ambient particles
      for (const p of particles) {
        const drift = Math.sin(timeRef.current * p.speed + p.phase) * 0.02;
        const px = cx + (p.x + drift) * scale * 1.4;
        const py = cy + (p.y + drift * 0.5) * scale * 1.4;
        const alpha = 0.15 + Math.sin(timeRef.current * p.speed * 2 + p.phase) * 0.1;
        const isGold = p.phase > Math.PI;
        ctx.beginPath();
        ctx.arc(px, py, p.size, 0, Math.PI * 2);
        ctx.fillStyle = isGold
          ? `rgba(229, 186, 115, ${alpha})`
          : `rgba(43, 108, 176, ${alpha * 0.8})`;
        ctx.fill();
      }

      // Compute current node positions
      const positions: Point[] = nodes.map((node, i) => {
        const base = lerpPoint(node.star, node.phoenix, morphT);
        const breathe =
          Math.sin(timeRef.current * node.speed + node.phase) * 0.012 *
          (1 - Math.abs(morphT - 0.5) * 0.5);
        const swirl =
          Math.cos(timeRef.current * 0.3 + i * 0.4) * 0.008 * (1 - morphT * 0.3);

        let mx = 0;
        let my = 0;
        if (mouseRef.current.active) {
          const dx = mouseRef.current.x - 0.5;
          const dy = mouseRef.current.y - 0.5;
          const dist = Math.sqrt(dx * dx + dy * dy);
          const influence = Math.max(0, 1 - dist * 2) * 0.04;
          mx = dx * influence;
          my = dy * influence;
        }

        return {
          x: cx + (base.x + breathe + swirl + mx) * scale,
          y: cy + (base.y + breathe * 0.8 + swirl + my) * scale,
        };
      });

      // Interpolate edges
      const edgeBlend = morphT;
      const activeEdges: { from: number; to: number; weight: number; isGold: boolean }[] = [];

      for (const e of starEdges) {
        if (edgeBlend < 0.5) {
          activeEdges.push({
            ...e,
            weight: e.weight * (1 - edgeBlend * 2),
            isGold: false,
          });
        }
      }
      for (const e of phoenixEdges) {
        if (edgeBlend >= 0.3) {
          activeEdges.push({
            ...e,
            weight: e.weight * Math.min(1, (edgeBlend - 0.3) / 0.7),
            isGold: true,
          });
        }
      }

      // Cross-fade connecting edges during morph
      if (edgeBlend > 0.2 && edgeBlend < 0.8) {
        const crossCount = 6;
        for (let i = 0; i < crossCount; i++) {
          const fi = Math.floor((i / crossCount) * nodes.length);
          const ti = Math.floor(((i + crossCount / 2) / crossCount) * nodes.length) % nodes.length;
          activeEdges.push({
            from: fi,
            to: ti,
            weight: 0.15 * Math.sin(edgeBlend * Math.PI),
            isGold: edgeBlend > 0.5,
          });
        }
      }

      // Draw edges as fluid curves
      for (const edge of activeEdges) {
        if (edge.weight < 0.05) continue;
        const from = positions[edge.from % positions.length];
        const to = positions[edge.to % positions.length];
        if (!from || !to) continue;

        const midX = (from.x + to.x) / 2;
        const midY = (from.y + to.y) / 2;
        const dx = to.x - from.x;
        const dy = to.y - from.y;
        const perpX = -dy * 0.15 * Math.sin(timeRef.current + edge.from);
        const perpY = dx * 0.15 * Math.cos(timeRef.current + edge.to);

        const alpha = edge.weight * (0.35 + Math.sin(timeRef.current * 2 + edge.from) * 0.1);

        const gradient = ctx.createLinearGradient(from.x, from.y, to.x, to.y);
        if (edge.isGold) {
          gradient.addColorStop(0, `rgba(229, 186, 115, ${alpha})`);
          gradient.addColorStop(0.5, `rgba(197, 168, 128, ${alpha * 1.2})`);
          gradient.addColorStop(1, `rgba(229, 186, 115, ${alpha * 0.7})`);
        } else {
          gradient.addColorStop(0, `rgba(26, 54, 93, ${alpha})`);
          gradient.addColorStop(0.5, `rgba(43, 108, 176, ${alpha * 1.3})`);
          gradient.addColorStop(1, `rgba(26, 54, 93, ${alpha * 0.6})`);
        }

        ctx.beginPath();
        ctx.moveTo(from.x, from.y);
        ctx.quadraticCurveTo(midX + perpX, midY + perpY, to.x, to.y);
        ctx.strokeStyle = gradient;
        ctx.lineWidth = 0.6 + edge.weight * 0.4;
        ctx.stroke();
      }

      // Draw node glows
      for (let i = 0; i < positions.length; i++) {
        const pos = positions[i];
        const node = nodes[i];
        const glow = 0.3 + Math.sin(timeRef.current * node.speed * 1.5 + node.phase) * 0.2;
        const isGoldNode = morphT > 0.5 ? i % 3 !== 0 : i % 2 === 0;

        const grad = ctx.createRadialGradient(pos.x, pos.y, 0, pos.x, pos.y, node.radius * 3);
        if (isGoldNode) {
          grad.addColorStop(0, `rgba(229, 186, 115, ${glow})`);
          grad.addColorStop(1, "rgba(229, 186, 115, 0)");
        } else {
          grad.addColorStop(0, `rgba(43, 108, 176, ${glow * 0.8})`);
          grad.addColorStop(1, "rgba(43, 108, 176, 0)");
        }

        ctx.beginPath();
        ctx.arc(pos.x, pos.y, node.radius * 3, 0, Math.PI * 2);
        ctx.fillStyle = grad;
        ctx.fill();

        ctx.beginPath();
        ctx.arc(pos.x, pos.y, node.radius * 0.5, 0, Math.PI * 2);
        ctx.fillStyle = isGoldNode
          ? `rgba(229, 186, 115, ${0.6 + glow * 0.3})`
          : `rgba(43, 108, 176, ${0.5 + glow * 0.3})`;
        ctx.fill();
      }

      // Outer orbital ring
      const ringRadius = scale * (0.75 + Math.sin(timeRef.current * 0.5) * 0.02);
      ctx.beginPath();
      ctx.arc(cx, cy, ringRadius, 0, Math.PI * 2);
      ctx.strokeStyle = `rgba(26, 54, 93, ${0.08 + morphT * 0.06})`;
      ctx.lineWidth = 0.5;
      ctx.stroke();

      rafRef.current = requestAnimationFrame(draw);
    };

    rafRef.current = requestAnimationFrame(draw);

    return () => {
      cancelAnimationFrame(rafRef.current);
      window.removeEventListener("resize", resize);
      window.removeEventListener("mousemove", handleMouse);
      window.removeEventListener("touchmove", handleTouch);
      window.removeEventListener("mouseleave", handleLeave);
    };
  }, [initSystem]);

  return (
    <canvas
      ref={canvasRef}
      className="fixed inset-0 z-0 pointer-events-none"
      aria-hidden="true"
    />
  );
}
