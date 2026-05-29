"use client";

import { useEffect, useRef } from "react";
import type { CSSProperties, PointerEvent } from "react";

const labels = [
  { color: "#ef4444", label: "M", score: 45, x: 260, y: 34 },
  { color: "#eab308", label: "A", score: 35, x: 460, y: 150 },
  { color: "#22c55e", label: "S", score: 50, x: 460, y: 382 },
  { color: "#8b5cf6", label: "I", score: 60, x: 260, y: 498 },
  { color: "#3b82f6", label: "E", score: 55, x: 60, y: 382 },
  { color: "#f97316", label: "F", score: 65, x: 60, y: 150 },
];

const dataPoints = [
  [260, 203],
  [322, 240],
  [348, 318],
  [260, 384],
  [171, 318],
  [163, 234],
];

const axes = [
  [260, 90],
  [437, 192],
  [437, 397],
  [260, 500],
  [83, 397],
  [83, 192],
];

const rings = [70, 115, 160, 205];
const dataShape = dataPoints.map(([x, y]) => `${x},${y}`).join(" ");
const centerState = { glowOpacity: 1, glowX: 50, glowY: 50, x: 0, y: 0 };

function polygonPoints(radius: number) {
  const cx = 260;
  const cy = 295;
  return [
    [cx, cy - radius],
    [cx + radius * 0.866, cy - radius * 0.5],
    [cx + radius * 0.866, cy + radius * 0.5],
    [cx, cy + radius],
    [cx - radius * 0.866, cy + radius * 0.5],
    [cx - radius * 0.866, cy - radius * 0.5],
  ]
    .map(([x, y]) => `${x},${y}`)
    .join(" ");
}

export function Radar3D() {
  const animationRef = useRef<number | null>(null);
  const currentRef = useRef({ ...centerState });
  const isReturningRef = useRef(false);
  const targetRef = useRef({ ...centerState });
  const wrapRef = useRef<HTMLDivElement>(null);

  function applyMotion(x: number, y: number, glowX: number, glowY: number, glowOpacity: number) {
    const element = wrapRef.current;
    if (!element) return;

    element.style.setProperty("--rotate-y", `${x * 24}deg`);
    element.style.setProperty("--rotate-x", `${-y * 18}deg`);
    element.style.setProperty("--glow-shift-x", `${x * -18}px`);
    element.style.setProperty("--glow-shift-y", `${y * -14}px`);
    element.style.setProperty("--floor-shift-x", `${x * -12}px`);
    element.style.setProperty("--floor-shift-y", `${y * -6}px`);
    element.style.setProperty("--shadow-x", `${x * -8}px`);
    element.style.setProperty("--shadow-y", `${y * -6}px`);
    element.style.setProperty("--grid-x", `${x * -4}px`);
    element.style.setProperty("--grid-y", `${y * -3}px`);
    element.style.setProperty("--fill-x", `${x * 5}px`);
    element.style.setProperty("--fill-y", `${y * 4}px`);
    element.style.setProperty("--line-x", `${x * 11}px`);
    element.style.setProperty("--line-y", `${y * 8}px`);
    element.style.setProperty("--line-shadow-x", `${x * -5}px`);
    element.style.setProperty("--line-shadow-y", `${y * 4}px`);
    element.style.setProperty("--dot-x", `${x * 16}px`);
    element.style.setProperty("--dot-y", `${y * 13}px`);
    element.style.setProperty("--dot-shadow-x", `${x * -6}px`);
    element.style.setProperty("--dot-shadow-y", `${y * 5}px`);
    element.style.setProperty("--label-x", `${x * 7}px`);
    element.style.setProperty("--label-y", `${y * 6}px`);
    element.style.setProperty("--glow-x", `${glowX}%`);
    element.style.setProperty("--glow-y", `${glowY}%`);
    element.style.setProperty("--glow-opacity", `${glowOpacity}`);
  }

  function tick() {
    const current = currentRef.current;
    const target = targetRef.current;
    const speed = isReturningRef.current ? 0.075 : 0.22;

    current.x += (target.x - current.x) * speed;
    current.y += (target.y - current.y) * speed;
    current.glowX += (target.glowX - current.glowX) * speed;
    current.glowY += (target.glowY - current.glowY) * speed;
    current.glowOpacity += (target.glowOpacity - current.glowOpacity) * speed;

    applyMotion(current.x, current.y, current.glowX, current.glowY, current.glowOpacity);

    const done =
      Math.abs(target.x - current.x) < 0.0008 &&
      Math.abs(target.y - current.y) < 0.0008 &&
      Math.abs(target.glowX - current.glowX) < 0.08 &&
      Math.abs(target.glowY - current.glowY) < 0.08 &&
      Math.abs(target.glowOpacity - current.glowOpacity) < 0.004;

    if (done) {
      currentRef.current = { ...target };
      applyMotion(target.x, target.y, target.glowX, target.glowY, target.glowOpacity);
      animationRef.current = null;
      return;
    }

    animationRef.current = requestAnimationFrame(tick);
  }

  function startMotion() {
    if (animationRef.current !== null) return;
    animationRef.current = requestAnimationFrame(tick);
  }

  function handlePointerMove(event: PointerEvent<HTMLDivElement>) {
    const element = wrapRef.current;
    if (!element) return;

    const rect = event.currentTarget.getBoundingClientRect();
    const x = (event.clientX - rect.left) / rect.width - 0.5;
    const y = (event.clientY - rect.top) / rect.height - 0.5;
    const distance = Math.hypot(x, y);
    const fadeStart = 0.16;
    const fadeEnd = 0.38;
    const glowOpacity = Math.max(0, Math.min(1, 1 - (distance - fadeStart) / (fadeEnd - fadeStart)));

    element.classList.add("is-interacting");
    isReturningRef.current = false;
    targetRef.current = {
      glowOpacity,
      glowX: (x + 0.5) * 100,
      glowY: (y + 0.5) * 100,
      x,
      y,
    };
    startMotion();
  }

  function handlePointerLeave() {
    const element = wrapRef.current;
    if (!element) return;

    element.classList.remove("is-interacting");
    isReturningRef.current = true;
    targetRef.current = { ...centerState };
    startMotion();
  }

  useEffect(() => {
    return () => {
      if (animationRef.current !== null) {
        cancelAnimationFrame(animationRef.current);
      }
    };
  }, []);

  return (
    <div
      className="radar-3d-scene"
      onPointerLeave={handlePointerLeave}
      onPointerMove={handlePointerMove}
    >
      <div className="radar-3d-wrap" ref={wrapRef}>
        <div className="radar-3d-glow" />
        <div className="radar-3d-floor" />

        <svg
          className="radar-3d-layer radar-3d-shadow-layer"
          viewBox="0 0 520 540"
          aria-hidden="true"
        >
          <polygon
            className="radar-3d-base-plate"
            points={polygonPoints(205)}
          />
          <polygon
            className="radar-3d-base-plate radar-3d-base-plate-small"
            points={dataShape}
          />
        </svg>

        <svg className="radar-3d-layer radar-3d-grid-layer" viewBox="0 0 520 540" aria-hidden="true">
          <defs>
            <filter id="gridDepth3d" x="-20%" y="-20%" width="140%" height="140%">
              <feDropShadow dx="0" dy="18" floodColor="#0f172a" floodOpacity="0.08" stdDeviation="10" />
            </filter>
          </defs>
          <g className="radar-3d-grid" filter="url(#gridDepth3d)">
            {rings.map((radius, index) => (
              <polygon
                fill="none"
                key={radius}
                points={polygonPoints(radius)}
                stroke="rgba(112, 128, 145, 0.22)"
                strokeWidth={index === rings.length - 1 ? 2.1 : 1.55}
              />
            ))}

            {axes.map(([x, y], index) => (
              <line
                key={`${x}-${y}`}
                stroke="rgba(112, 128, 145, 0.18)"
                strokeWidth="1.45"
                x1="260"
                x2={x}
                y1="295"
                y2={y}
                style={{ "--delay": `${index * 0.05}s` } as CSSProperties}
              />
            ))}
          </g>
        </svg>

        <svg
          className="radar-3d-layer radar-3d-fill-layer"
          viewBox="0 0 520 540"
          aria-hidden="true"
        >
          <defs>
            <linearGradient id="radarFill3d" x1="0%" x2="100%" y1="0%" y2="100%">
              <stop offset="0%" stopColor="#facc15" stopOpacity="0.28" />
              <stop offset="42%" stopColor="#86efac" stopOpacity="0.26" />
              <stop offset="100%" stopColor="#93c5fd" stopOpacity="0.3" />
            </linearGradient>
            <filter id="fillShadow3d" x="-35%" y="-35%" width="170%" height="170%">
              <feDropShadow dx="0" dy="22" floodColor="#0f172a" floodOpacity="0.15" stdDeviation="18" />
            </filter>
          </defs>
          <polygon
            className="radar-3d-fill"
            fill="url(#radarFill3d)"
            filter="url(#fillShadow3d)"
            points={dataShape}
          />
        </svg>

        <svg
          className="radar-3d-layer radar-3d-line-layer"
          viewBox="0 0 520 540"
          role="img"
          aria-label="Gráfico radar MASI 3D"
        >
          <polygon
            className="radar-3d-line"
            fill="none"
            points={dataShape}
            stroke="#ef4444"
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="5.5"
          />
        </svg>

        <svg className="radar-3d-layer radar-3d-dot-layer" viewBox="0 0 520 540" aria-hidden="true">
          {dataPoints.map(([x, y], index) => (
            <g
              className="radar-3d-dot"
              key={`${x}-${y}`}
              style={{ "--delay": `${0.72 + index * 0.09}s` } as CSSProperties}
            >
              <circle cx={x} cy={y} fill="#ffffff" r="10.8" />
              <circle cx={x} cy={y} fill={labels[index].color} r="8.2" />
            </g>
          ))}
        </svg>

        <div className="radar-3d-label-layer" aria-hidden="true">
          {labels.map((item, index) => {
            const left = `${(item.x / 520) * 100}%`;
            const top = `${(item.y / 540) * 100}%`;

            return (
              <div
                className="radar-3d-label"
                key={item.label}
                style={
                  {
                    "--delay": `${0.5 + index * 0.06}s`,
                    "--label-color": item.color,
                    left,
                    top,
                  } as CSSProperties
                }
              >
                <span>{item.label}</span>
                <strong>{item.score}</strong>
              </div>
            );
          })}
        </div>

        <div className="radar-3d-depth-lines" aria-hidden="true">
          {dataPoints.map(([x, y], index) => (
            <span
              key={`${x}-${y}-depth`}
              style={
                {
                  "--delay": `${0.75 + index * 0.08}s`,
                  left: `${(x / 520) * 100}%`,
                  top: `${(y / 540) * 100}%`,
                } as CSSProperties
              }
            />
          ))}
        </div>
      </div>
    </div>
  );
}
