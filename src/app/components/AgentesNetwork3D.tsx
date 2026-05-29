"use client";

import { forwardRef, useEffect, useImperativeHandle, useRef, useState } from "react";

export type AgentesNetwork3DHandle = {
  onMove: (clientX: number, clientY: number) => void;
  onLeave: () => void;
};

const CX = 50;
const CY = 50;
const RING = 37;
const CENTER_R = 9;
const NODE_R = 6.5;

function agentPos(angleDeg: number) {
  const rad = (angleDeg * Math.PI) / 180;
  return { x: CX + RING * Math.cos(rad), y: CY + RING * Math.sin(rad) };
}

type Agent = {
  id: string;
  name: string;
  role: string;
  color: string;
  bg: string;
  angle: number;
  photo: string;
};

const FAROL = {
  id: "farol",
  name: "Farol",
  role: "Concierge",
  color: "#ec4899",
  bg: "transparent",
  photo: "/images/agentes-nobg/Farol.png",
};

const agents: Agent[] = [
  { id: "maestro",   name: "Maestro",   role: "Orquestrador", color: "#18bf62", bg: "transparent", angle: 270, photo: "/images/agentes-nobg/Maestro.png"   },
  { id: "pulse",     name: "Pulse",     role: "Performance",  color: "#06b6d4", bg: "transparent", angle: 315, photo: "/images/agentes-nobg/Pulse.png"     },
  { id: "scout",     name: "Scout",     role: "SWOT",         color: "#3b82f6", bg: "transparent", angle: 0,   photo: "/images/agentes-nobg/Scout.png"     },
  { id: "focco",     name: "Focco",     role: "OKRs",         color: "#f59e0b", bg: "transparent", angle: 45,  photo: "/images/agentes-nobg/Focco.png"     },
  { id: "cifra",     name: "Cifra",     role: "Financeiro",   color: "#10b981", bg: "transparent", angle: 90,  photo: "/images/agentes-nobg/Cifra.png"     },
  { id: "closer",    name: "Closer",    role: "Comercial",    color: "#7c3aed", bg: "transparent", angle: 135, photo: "/images/agentes-nobg/Closer.png"    },
  { id: "stratego",  name: "Stratego",  role: "Estratégia",   color: "#16a34a", bg: "transparent", angle: 180, photo: "/images/agentes-nobg/Stratego.png"  },
  { id: "sentinela", name: "Sentinela", role: "Mercado",      color: "#8B5CF6", bg: "transparent", angle: 225, photo: "/images/agentes-nobg/Sentinela.png" },
];

const centerState = { x: 0, y: 0, glowX: 50, glowY: 50, glowOpacity: 0 };

export const AgentesNetwork3D = forwardRef<AgentesNetwork3DHandle, object>(
function AgentesNetwork3D(_, ref) {
  const [hovered, setHovered] = useState<string | null>(null);
  const wrapRef = useRef<HTMLDivElement>(null);
  const containerRef = useRef<HTMLDivElement>(null);
  const animRef = useRef<number | null>(null);
  const leaveTimerRef = useRef<ReturnType<typeof setTimeout> | null>(null);
  const hoverLeaveTimerRef = useRef<ReturnType<typeof setTimeout> | null>(null);
  const currentRef = useRef({ ...centerState });
  const targetRef = useRef({ ...centerState });
  const returningRef = useRef(false);

  const hoveredAgent = agents.find((a) => a.id === hovered) ?? null;
  const badgeAgent = hoveredAgent ?? FAROL;

  function applyMotion(x: number, y: number, glowX: number, glowY: number, glowOpacity: number) {
    const el = wrapRef.current;
    if (!el) return;
    el.style.setProperty("--rot-y",         `${x * 22}deg`);
    el.style.setProperty("--rot-x",         `${-y * 16}deg`);
    el.style.setProperty("--glow-x",        `${glowX}%`);
    el.style.setProperty("--glow-y",        `${glowY}%`);
    el.style.setProperty("--glow-opacity",  `${glowOpacity}`);
    el.style.setProperty("--glow-shift-x",  `${x * -20}px`);
    el.style.setProperty("--glow-shift-y",  `${y * -15}px`);
    el.style.setProperty("--floor-x",       `${x * -10}px`);
    el.style.setProperty("--floor-y",       `${y * -5}px`);
    el.style.setProperty("--svg-x",         `${x * 4}px`);
    el.style.setProperty("--svg-y",         `${y * 3}px`);
    el.style.setProperty("--agent-x",       `${x * 10}px`);
    el.style.setProperty("--agent-y",       `${y * 8}px`);
    // photo shifts AGAINST the frame → peephole/buraco effect
    el.style.setProperty("--img-x",         `${x * -13}px`);
    el.style.setProperty("--img-y",         `${y * -10}px`);
    el.style.setProperty("--center-x",      `${x * 17}px`);
    el.style.setProperty("--center-y",      `${y * 13}px`);
    // center photo also shifts to show depth
    el.style.setProperty("--cimg-x",        `${x * -9}px`);
    el.style.setProperty("--cimg-y",        `${y * -7}px`);
  }

  function tick() {
    const cur = currentRef.current;
    const tgt = targetRef.current;
    const speed = returningRef.current ? 0.07 : 0.2;

    cur.x          += (tgt.x          - cur.x)          * speed;
    cur.y          += (tgt.y          - cur.y)          * speed;
    cur.glowX      += (tgt.glowX      - cur.glowX)      * speed;
    cur.glowY      += (tgt.glowY      - cur.glowY)      * speed;
    cur.glowOpacity+= (tgt.glowOpacity- cur.glowOpacity)* speed;

    applyMotion(cur.x, cur.y, cur.glowX, cur.glowY, cur.glowOpacity);

    const done =
      Math.abs(tgt.x - cur.x) < 0.0008 &&
      Math.abs(tgt.y - cur.y) < 0.0008 &&
      Math.abs(tgt.glowX - cur.glowX) < 0.08 &&
      Math.abs(tgt.glowY - cur.glowY) < 0.08 &&
      Math.abs(tgt.glowOpacity - cur.glowOpacity) < 0.004;

    if (done) {
      currentRef.current = { ...tgt };
      applyMotion(tgt.x, tgt.y, tgt.glowX, tgt.glowY, tgt.glowOpacity);
      animRef.current = null;
      return;
    }
    animRef.current = requestAnimationFrame(tick);
  }

  function startMotion() {
    if (animRef.current !== null) return;
    animRef.current = requestAnimationFrame(tick);
  }

  function handlePointerMove(clientX: number, clientY: number) {
    if (leaveTimerRef.current) {
      clearTimeout(leaveTimerRef.current);
      leaveTimerRef.current = null;
    }
    const rect = containerRef.current?.getBoundingClientRect();
    if (!rect) return;
    const x = (clientX - rect.left) / rect.width - 0.5;
    const y = (clientY - rect.top) / rect.height - 0.5;
    const dist = Math.hypot(x, y);
    const glowOpacity = Math.max(0, Math.min(1, 1 - (dist - 0.14) / (0.36 - 0.14)));
    returningRef.current = false;
    targetRef.current = { x, y, glowX: (x + 0.5) * 100, glowY: (y + 0.5) * 100, glowOpacity };
    startMotion();
  }

  function handlePointerLeave() {
    leaveTimerRef.current = setTimeout(() => {
      leaveTimerRef.current = null;
      returningRef.current = true;
      targetRef.current = { ...centerState };
      startMotion();
    }, 80);
  }

  useImperativeHandle(ref, () => ({
    onMove: handlePointerMove,
    onLeave: handlePointerLeave,
  }));

  useEffect(() => () => {
    if (animRef.current) cancelAnimationFrame(animRef.current);
    if (leaveTimerRef.current) clearTimeout(leaveTimerRef.current);
    if (hoverLeaveTimerRef.current) clearTimeout(hoverLeaveTimerRef.current);
  }, []);

  return (
    <div className="flex flex-col gap-3">
      {/* 3D Scene */}
      <div
        ref={containerRef}
        className="relative w-full"
        style={{ aspectRatio: "1", perspective: "1300px" }}
      >
        {/* Wrap — rotates in 3D, carries all CSS vars */}
        <div
          ref={wrapRef}
          className="absolute inset-0"
          style={{
            transformStyle: "preserve-3d",
            transform: "rotateX(var(--rot-x, 0deg)) rotateY(var(--rot-y, 0deg))",
            willChange: "transform",
          } as React.CSSProperties}
        >
          {/* ── Floor shadow ── */}
          <div
            style={{
              position: "absolute",
              left: "18%", top: "68%", width: "64%", height: "16%",
              background: "radial-gradient(ellipse, rgba(15,23,42,0.18), transparent 70%)",
              borderRadius: "50%",
              filter: "blur(16px)",
              transform: "translate3d(var(--floor-x, 0px), var(--floor-y, 0px), -120px) rotateX(72deg)",
            } as React.CSSProperties}
            aria-hidden="true"
          />

          {/* ── Glow ── */}
          <div
            style={{
              position: "absolute",
              inset: "-40%",
              background: "radial-gradient(circle at var(--glow-x, 50%) var(--glow-y, 50%), rgba(236,72,153,calc(0.22 * var(--glow-opacity, 0))), transparent 28%)",
              filter: "blur(10px)",
              transform: "translate3d(var(--glow-shift-x, 0px), var(--glow-shift-y, 0px), -80px)",
            } as React.CSSProperties}
            aria-hidden="true"
          />

          {/* ── SVG: outer ring + lines ── */}
          <svg
            viewBox="0 0 100 100"
            style={{
              position: "absolute",
              inset: 0,
              width: "100%",
              height: "100%",
              overflow: "visible",
              transform: "translate3d(var(--svg-x, 0px), var(--svg-y, 0px), 0px)",
              pointerEvents: "none",
            } as React.CSSProperties}
            aria-hidden="true"
          >
            <circle
              cx={CX} cy={CY} r={RING}
              fill="none"
              stroke={hovered === "maestro" ? "#18bf6255" : "rgba(236,72,153,0.18)"}
              strokeWidth={hovered === "maestro" ? "0.55" : "0.4"}
              strokeDasharray={hovered === "maestro" ? "none" : "1.4 1.4"}
              style={{ transition: "stroke 0.3s ease, stroke-width 0.3s ease" }}
            />
            {agents.map((agent) => {
              const { x, y } = agentPos(agent.angle);
              const active = hovered === agent.id;
              return (
                <line
                  key={agent.id}
                  x1={CX} y1={CY} x2={x} y2={y}
                  stroke={active ? agent.color : "rgba(148,163,184,0.22)"}
                  strokeWidth={active ? "0.6" : "0.28"}
                  strokeOpacity={active ? 1 : 0.7}
                  strokeDasharray={active ? "none" : "1.2 1"}
                  style={{ transition: "stroke 0.2s, stroke-opacity 0.2s, stroke-width 0.2s" }}
                />
              );
            })}
          </svg>

          {/* ── Outer agents ── */}
          {agents.map((agent) => {
            const { x, y } = agentPos(agent.angle);
            const active = hovered === agent.id;
            const z = active ? 58 : 32;
            return (
              <div
                key={agent.id}
                style={{
                  position: "absolute",
                  left: `${x - NODE_R}%`,
                  top: `${y - NODE_R}%`,
                  width: `${NODE_R * 2}%`,
                  transform: `translate3d(var(--agent-x, 0px), var(--agent-y, 0px), ${z}px) scale(${active ? 1.18 : 1})`,
                  transition: "transform 0.25s cubic-bezier(0.34, 1.56, 0.64, 1)",
                  zIndex: active ? 10 : 1,
                  cursor: "pointer",
                } as React.CSSProperties}
                onMouseEnter={() => {
                  if (hoverLeaveTimerRef.current) {
                    clearTimeout(hoverLeaveTimerRef.current);
                    hoverLeaveTimerRef.current = null;
                  }
                  setHovered(agent.id);
                }}
                onMouseLeave={() => {
                  hoverLeaveTimerRef.current = setTimeout(() => {
                    hoverLeaveTimerRef.current = null;
                    setHovered(null);
                  }, 60);
                }}
              >
                {/* Agent drop shadow */}
                <div
                  style={{
                    position: "absolute",
                    inset: "10%",
                    borderRadius: "50%",
                    background: `radial-gradient(circle, ${agent.color}40, transparent 70%)`,
                    filter: "blur(6px)",
                    transform: "translateY(30%) translateZ(-12px) scaleX(0.85)",
                  }}
                  aria-hidden="true"
                />
                <div
                  style={{
                    width: "100%",
                    aspectRatio: "1",
                    borderRadius: "50%",
                    overflow: "hidden",
                    position: "relative",
                    background: agent.bg,
                    border: `2px solid ${agent.color}`,
                    boxShadow: active
                      ? `0 8px 28px ${agent.color}55, 0 0 0 4px ${agent.color}28`
                      : `0 4px 14px ${agent.color}30, 0 0 0 3px ${agent.color}18`,
                    transition: "box-shadow 0.2s ease",
                  }}
                >
                  {/* eslint-disable-next-line @next/next/no-img-element */}
                  <img
                    src={agent.photo}
                    alt={agent.name}
                    style={{
                      position: "absolute",
                      width: "105%",
                      height: "105%",
                      top: "50%",
                      left: "50%",
                      objectFit: "cover",
                      objectPosition: "center",
                      transform: "translate(calc(-50% + var(--img-x, 0px)), calc(-40% + var(--img-y, 0px)))",
                    } as React.CSSProperties}
                  />
                </div>
              </div>
            );
          })}

          {/* ── Center: Farol ── */}
          <div
            style={{
              position: "absolute",
              left: `${CX - CENTER_R}%`,
              top: `${CY - CENTER_R}%`,
              width: `${CENTER_R * 2}%`,
              transform: "translate3d(var(--center-x, 0px), var(--center-y, 0px), 80px)",
            } as React.CSSProperties}
          >
            {/* Farol glow ring */}
            <div
              style={{
                position: "absolute",
                inset: "-20%",
                borderRadius: "50%",
                background: "radial-gradient(circle, rgba(236,72,153,0.28), transparent 65%)",
                filter: "blur(8px)",
              }}
              aria-hidden="true"
            />
            <div
              style={{
                width: "100%",
                aspectRatio: "1",
                borderRadius: "50%",
                overflow: "hidden",
                position: "relative",
                background: FAROL.bg,
                boxShadow:
                  "0 0 0 3px rgba(236,72,153,0.4), 0 0 0 7px rgba(236,72,153,0.14), 0 10px 34px rgba(236,72,153,0.32)",
              }}
            >
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                src={FAROL.photo}
                alt="Farol"
                style={{
                  position: "absolute",
                  width: "105%",
                  height: "105%",
                  top: "50%",
                  left: "50%",
                  objectFit: "cover",
                  objectPosition: "center",
                  transform: "translate(calc(-50% + var(--cimg-x, 0px)), calc(-40% + var(--cimg-y, 0px)))",
                } as React.CSSProperties}
              />
            </div>
            <p
              className="text-center font-bold uppercase leading-none"
              style={{
                marginTop: "clamp(6px, 2.4%, 14px)",
                fontSize: "clamp(0.49rem, 1.39vw, 0.7rem)",
                color: FAROL.color,
                letterSpacing: "0.08em",
              }}
            >
              FAROL · CONCIERGE
            </p>
          </div>
        </div>
      </div>

      {/* Badge */}
      <div className="flex justify-center">
        <div
          className="flex items-center gap-2 border px-3 py-1.5 backdrop-blur"
          style={{
            borderRadius: "10px",
            background: "rgba(255,255,255,0.88)",
            borderColor: `${badgeAgent.color}45`,
            boxShadow: `0 2px 14px ${badgeAgent.color}20`,
            transition: "border-color 0.25s ease, box-shadow 0.25s ease",
          }}
        >
          <div
            className="size-6 shrink-0 rounded-full overflow-hidden"
            style={{ border: `1.5px solid ${badgeAgent.color}` }}
          >
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              src={badgeAgent.photo}
              alt={badgeAgent.name}
              style={{ width: "100%", height: "100%", objectFit: "cover", objectPosition: "top center" }}
            />
          </div>
          <p
            className="text-[11px] font-bold uppercase tracking-[0.1em] leading-none"
            style={{ color: badgeAgent.color, transition: "color 0.2s ease" }}
          >
            {badgeAgent.name} · {badgeAgent.role}
          </p>
        </div>
      </div>
    </div>
  );
});
