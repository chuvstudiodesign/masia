"use client";

import { useRef } from "react";
import { AgentesNetwork3D, type AgentesNetwork3DHandle } from "../components/AgentesNetwork3D";

export default function Agentes2Page() {
  const network3DRef = useRef<AgentesNetwork3DHandle>(null);

  return (
    <main
      className="grafico-3d-page grid min-h-screen place-items-center px-6 py-12 overflow-hidden"
      onPointerMove={(e) => network3DRef.current?.onMove(e.clientX, e.clientY)}
      onPointerLeave={() => network3DRef.current?.onLeave()}
    >
      <div className="w-full max-w-[525px]">
        <AgentesNetwork3D ref={network3DRef} />
      </div>
    </main>
  );
}
