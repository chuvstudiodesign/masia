"use client";

import { useEffect, useRef } from "react";

type NodePoint = {
  baseX: number;
  baseY: number;
  drift: number;
  phase: number;
  vx: number;
  vy: number;
  x: number;
  y: number;
};

function seededRandom(seed: number) {
  let value = seed % 2147483647;
  return () => {
    value = (value * 16807) % 2147483647;
    return (value - 1) / 2147483646;
  };
}

export function InteractiveNetworkBackground() {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const surface = canvas;

    const context = surface.getContext("2d");
    if (!context) return;
    const ctx = context;

    const random = seededRandom(29);
    const nodes: NodePoint[] = [];
    const mouse = { active: false, x: 0, y: 0 };
    let width = 0;
    let height = 0;
    let frame = 0;
    let animationId = 0;

    function createNodes() {
      nodes.length = 0;
      const count = Math.max(64, Math.min(130, Math.floor((width * height) / 18500)));

      for (let i = 0; i < count; i += 1) {
        const cluster = random();
        const baseX =
          cluster < 0.28
            ? random() * width * 0.26
            : cluster < 0.56
              ? width * 0.28 + random() * width * 0.32
              : cluster < 0.78
                ? width * 0.68 + random() * width * 0.3
                : random() * width;
        const baseY =
          cluster < 0.28
            ? height * 0.52 + random() * height * 0.45
            : cluster < 0.56
              ? random() * height * 0.88
              : cluster < 0.78
                ? random() * height
                : random() * height;

        nodes.push({
          baseX,
          baseY,
          drift: 8 + random() * 24,
          phase: random() * Math.PI * 2,
          vx: (random() - 0.5) * 0.18,
          vy: (random() - 0.5) * 0.18,
          x: baseX,
          y: baseY,
        });
      }
    }

    function resize() {
      const dpr = Math.min(window.devicePixelRatio || 1, 2);
      width = window.innerWidth;
      height = window.innerHeight;
      surface.width = Math.floor(width * dpr);
      surface.height = Math.floor(height * dpr);
      surface.style.width = `${width}px`;
      surface.style.height = `${height}px`;
      ctx.setTransform(dpr, 0, 0, dpr, 0, 0);
      createNodes();
    }

    function drawSoftGlow() {
      const glowA = ctx.createRadialGradient(
        width * 0.25,
        height * 0.76,
        0,
        width * 0.25,
        height * 0.76,
        width * 0.2,
      );
      glowA.addColorStop(0, "rgba(168, 85, 247, 0.08)");
      glowA.addColorStop(1, "rgba(168, 85, 247, 0)");
      ctx.fillStyle = glowA;
      ctx.fillRect(0, 0, width, height);

      const glowB = ctx.createRadialGradient(
        width * 0.82,
        height * 0.58,
        0,
        width * 0.82,
        height * 0.58,
        width * 0.22,
      );
      glowB.addColorStop(0, "rgba(59, 130, 246, 0.06)");
      glowB.addColorStop(1, "rgba(59, 130, 246, 0)");
      ctx.fillStyle = glowB;
      ctx.fillRect(0, 0, width, height);
    }

    function animate() {
      frame += 1;
      ctx.clearRect(0, 0, width, height);
      ctx.fillStyle = "#f7faf8";
      ctx.fillRect(0, 0, width, height);
      drawSoftGlow();

      for (const node of nodes) {
        const pulseX =
          Math.sin(frame * 0.008 + node.phase) * node.drift +
          Math.sin(frame * 0.002 + node.baseY * 0.006) * 12;
        const pulseY =
          Math.cos(frame * 0.007 + node.phase * 1.3) * node.drift +
          Math.cos(frame * 0.0025 + node.baseX * 0.006) * 10;
        node.x += (node.baseX + pulseX - node.x) * 0.032 + node.vx;
        node.y += (node.baseY + pulseY - node.y) * 0.032 + node.vy;

        if (node.x < -40) node.baseX = width + 40;
        if (node.x > width + 40) node.baseX = -40;
        if (node.y < -40) node.baseY = height + 40;
        if (node.y > height + 40) node.baseY = -40;

        if (mouse.active) {
          const dx = node.x - mouse.x;
          const dy = node.y - mouse.y;
          const distance = Math.sqrt(dx * dx + dy * dy);
          if (distance < 170 && distance > 0.01) {
            const force = (1 - distance / 170) * 3.5;
            node.x += (dx / distance) * force;
            node.y += (dy / distance) * force;
          }
        }
      }

      for (let i = 0; i < nodes.length; i += 1) {
        for (let j = i + 1; j < nodes.length; j += 1) {
          const a = nodes[i];
          const b = nodes[j];
          const dx = a.x - b.x;
          const dy = a.y - b.y;
          const distance = Math.sqrt(dx * dx + dy * dy);

          if (distance < 155) {
            const breathing = 0.82 + Math.sin(frame * 0.018 + i * 0.7 + j * 0.3) * 0.18;
            const opacity = (1 - distance / 155) * 0.22 * breathing;
            ctx.strokeStyle = `rgba(30, 190, 105, ${opacity})`;
            ctx.lineWidth = 0.72 + breathing * 0.12;
            ctx.beginPath();
            ctx.moveTo(a.x, a.y);
            ctx.lineTo(b.x, b.y);
            ctx.stroke();
          }
        }
      }

      if (mouse.active) {
        for (const node of nodes) {
          const dx = node.x - mouse.x;
          const dy = node.y - mouse.y;
          const distance = Math.sqrt(dx * dx + dy * dy);
          if (distance < 230) {
            const opacity = (1 - distance / 230) * 0.42;
            ctx.strokeStyle = `rgba(24, 191, 98, ${opacity})`;
            ctx.lineWidth = 1;
            ctx.beginPath();
            ctx.moveTo(mouse.x, mouse.y);
            ctx.lineTo(node.x, node.y);
            ctx.stroke();
          }
        }
      }

      for (const node of nodes) {
        const dx = node.x - mouse.x;
        const dy = node.y - mouse.y;
        const nearMouse = mouse.active && Math.sqrt(dx * dx + dy * dy) < 120;
        ctx.fillStyle = nearMouse ? "rgba(24, 191, 98, 0.9)" : "rgba(24, 191, 98, 0.55)";
        ctx.beginPath();
        ctx.arc(node.x, node.y, nearMouse ? 3.1 : 2.1, 0, Math.PI * 2);
        ctx.fill();
      }

      animationId = requestAnimationFrame(animate);
    }

    function onPointerMove(event: PointerEvent) {
      mouse.active = true;
      mouse.x = event.clientX;
      mouse.y = event.clientY;
    }

    function onPointerLeave() {
      mouse.active = false;
    }

    resize();
    animate();
    window.addEventListener("resize", resize);
    window.addEventListener("pointermove", onPointerMove);
    window.addEventListener("pointerleave", onPointerLeave);

    return () => {
      cancelAnimationFrame(animationId);
      window.removeEventListener("resize", resize);
      window.removeEventListener("pointermove", onPointerMove);
      window.removeEventListener("pointerleave", onPointerLeave);
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      className="fixed inset-0 h-screen w-screen"
      aria-label="Fundo interativo com linhas e pontos conectados"
    />
  );
}
