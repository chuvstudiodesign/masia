"use client";

import { useEffect, useRef, useState } from "react";

const CX = 50;
const CY = 50;
const RING = 37;
const CENTER_R = 9;
const NODE_R = 6.5;

function agentPos(angleDeg: number) {
  const rad = (angleDeg * Math.PI) / 180;
  return {
    x: CX + RING * Math.cos(rad),
    y: CY + RING * Math.sin(rad),
  };
}

type Agent = {
  id: string;
  name: string;
  role: string;
  color: string;
  angle: number;
  photo: string;
};

const FAROL = {
  id: "farol",
  name: "Farol",
  role: "Concierge",
  color: "#ec4899",
  photo: "/images/agentes/Farol.jpg",
};

const agents: Agent[] = [
  { id: "maestro",   name: "Maestro",   role: "Orquestrador", color: "#18bf62", angle: 270, photo: "/images/agentes/Maestro.jpg"   },
  { id: "pulse",     name: "Pulse",     role: "Performance",  color: "#06b6d4", angle: 315, photo: "/images/agentes/Pulse.jpg"     },
  { id: "scout",     name: "Scout",     role: "SWOT",         color: "#3b82f6", angle: 0,   photo: "/images/agentes/Scout.jpg"     },
  { id: "focco",     name: "Focco",     role: "OKRs",         color: "#f59e0b", angle: 45,  photo: "/images/agentes/Focco.jpg"     },
  { id: "cifra",     name: "Cifra",     role: "Financeiro",   color: "#10b981", angle: 90,  photo: "/images/agentes/Cifra.jpg"     },
  { id: "closer",    name: "Closer",    role: "Comercial",    color: "#7c3aed", angle: 135, photo: "/images/agentes/Closer.jpg"    },
  { id: "stratego",  name: "Stratego",  role: "Estratégia",   color: "#16a34a", angle: 180, photo: "/images/agentes/Stratego.jpg"  },
  { id: "sentinela", name: "Sentinela", role: "Mercado",      color: "#8B5CF6", angle: 225, photo: "/images/agentes/Sentinela.jpg" },
];

export function AgentesNetwork({ grid = true }: { grid?: boolean }) {
  const [hovered, setHovered] = useState<string | null>(null);
  const [visible, setVisible] = useState(false);
  const rootRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const el = rootRef.current;
    if (!el) return;
    const obs = new IntersectionObserver(
      ([entry]) => { if (entry.isIntersecting) { setVisible(true); obs.disconnect(); } },
      { threshold: 0.15 }
    );
    obs.observe(el);
    return () => obs.disconnect();
  }, []);

  const hoveredAgent = agents.find((a) => a.id === hovered) ?? null;
  const badgeAgent = hoveredAgent ?? FAROL;

  return (
    <div
      ref={rootRef}
      className="flex flex-col gap-3"
      style={{
        opacity: visible ? 1 : 0,
        transform: visible ? "translateY(0px)" : "translateY(14px)",
        transition: "opacity 0.65s ease-out, transform 0.65s ease-out",
      }}
    >
      {/* Network */}
      <div className="relative w-full" style={{ aspectRatio: "1" }}>

        {/* Grid background */}
        {grid && (
          <div
            className="absolute inset-0 rounded-3xl overflow-hidden"
            style={{
              backgroundImage:
                "linear-gradient(rgba(15,23,42,0.04) 1px, transparent 1px), linear-gradient(90deg, rgba(15,23,42,0.04) 1px, transparent 1px)",
              backgroundSize: "8% 8%",
            }}
            aria-hidden="true"
          />
        )}

        {/* Center glow */}
        <div
          className="absolute rounded-full pointer-events-none"
          style={{
            left: "15%", top: "15%", width: "70%", height: "70%",
            background: hoveredAgent
              ? `radial-gradient(circle, ${hoveredAgent.color}22 0%, transparent 65%)`
              : "radial-gradient(circle, rgba(236,72,153,0.14) 0%, transparent 65%)",
            filter: "blur(18px)",
            transition: "background 0.3s ease",
          }}
          aria-hidden="true"
        />

        {/* SVG: outer ring + connecting lines */}
        <svg
          className="absolute inset-0 w-full h-full"
          viewBox="0 0 100 100"
          style={{ pointerEvents: "none" }}
          aria-hidden="true"
        >
          {/* Outer ring */}
          <circle
            cx={CX} cy={CY} r={RING}
            fill="none"
            stroke={hovered === "maestro" ? "#18bf6255" : "rgba(236,72,153,0.15)"}
            strokeWidth={hovered === "maestro" ? "0.5" : "0.35"}
            strokeDasharray={hovered === "maestro" ? "none" : "1.4 1.4"}
            style={{
              transition: "stroke 0.3s ease, stroke-width 0.3s ease, opacity 0.5s ease 0.1s",
              opacity: visible ? 1 : 0,
            }}
          />

          {/* Connecting lines */}
          {agents.map((agent, i) => {
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
                style={{
                  transition: `stroke 0.2s ease, stroke-opacity 0.2s ease, stroke-width 0.2s ease, opacity 0.4s ease ${0.18 + i * 0.055}s`,
                  opacity: visible ? 1 : 0,
                }}
              />
            );
          })}
        </svg>

        {/* Center: Farol */}
        <div
          className="absolute flex flex-col items-center"
          style={{
            left: `${CX - CENTER_R}%`,
            top: `${CY - CENTER_R}%`,
            width: `${CENTER_R * 2}%`,
            opacity: visible ? 1 : 0,
            transition: "opacity 0.5s ease 0.05s",
          }}
        >
          <div
            className="w-full rounded-full overflow-hidden"
            style={{
              aspectRatio: "1",
              boxShadow:
                "0 0 0 3px rgba(236,72,153,0.35), 0 0 0 7px rgba(236,72,153,0.12), 0 8px 28px rgba(236,72,153,0.25)",
            }}
          >
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              src={FAROL.photo}
              alt="Farol"
              style={{ width: "100%", height: "100%", objectFit: "cover", objectPosition: "top center" }}
            />
          </div>
          <p
            className="mt-6 text-center font-bold uppercase tracking-widest leading-none"
            style={{ fontSize: "clamp(0.49rem, 1.39vw, 0.7rem)", color: FAROL.color, letterSpacing: "0.08em" }}
          >
            FAROL · CONCIERGE
          </p>
        </div>

        {/* Outer agent nodes */}
        {agents.map((agent, i) => {
          const { x, y } = agentPos(agent.angle);
          const active = hovered === agent.id;
          return (
            <div
              key={agent.id}
              className="absolute cursor-pointer"
              style={{
                left: `${x - NODE_R}%`,
                top: `${y - NODE_R}%`,
                width: `${NODE_R * 2}%`,
                zIndex: active ? 10 : 1,
                transform: active ? "scale(1.22)" : "scale(1)",
                transformOrigin: "center",
                transition: `transform 0.25s cubic-bezier(0.34, 1.56, 0.64, 1), opacity 0.45s ease ${0.22 + i * 0.065}s`,
                opacity: visible ? 1 : 0,
              }}
              onMouseEnter={() => setHovered(agent.id)}
              onMouseLeave={() => setHovered(null)}
            >
              <div
                className="w-full rounded-full overflow-hidden"
                style={{
                  aspectRatio: "1",
                  border: `2px solid ${agent.color}`,
                  boxShadow: active
                    ? `0 6px 22px ${agent.color}55, 0 0 0 4px ${agent.color}28`
                    : `0 3px 12px ${agent.color}28, 0 0 0 3px ${agent.color}14`,
                  transition: "box-shadow 0.2s ease",
                }}
              >
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img
                  src={agent.photo}
                  alt={agent.name}
                  style={{ width: "100%", height: "100%", objectFit: "cover", objectPosition: "top center" }}
                />
              </div>
            </div>
          );
        })}
      </div>

      {/* Badge */}
      <div
        className="flex justify-center"
        style={{
          opacity: visible ? 1 : 0,
          transition: "opacity 0.45s ease 0.62s",
        }}
      >
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
}
