"use client";

import { useEffect, useRef } from "react";
import { AgentesNetwork3D, type AgentesNetwork3DHandle } from "../components/AgentesNetwork3D";

export default function Agentes2Page() {
  const network3DRef = useRef<AgentesNetwork3DHandle>(null);

  useEffect(() => {
    function onMove(e: PointerEvent) {
      network3DRef.current?.onMove(e.clientX, e.clientY);
    }
    function onLeave(e: PointerEvent) {
      // only return to center when the pointer actually exits the viewport
      if (
        e.clientX <= 0 ||
        e.clientY <= 0 ||
        e.clientX >= window.innerWidth ||
        e.clientY >= window.innerHeight
      ) {
        network3DRef.current?.onLeave();
      }
    }
    document.addEventListener("pointermove", onMove);
    document.addEventListener("pointerleave", onLeave);
    return () => {
      document.removeEventListener("pointermove", onMove);
      document.removeEventListener("pointerleave", onLeave);
    };
  }, []);

  return (
    <main className="grafico-3d-page grid min-h-screen place-items-center px-6 py-12 overflow-hidden">
      <div className="w-full max-w-[525px]">
        <AgentesNetwork3D ref={network3DRef} />
      </div>
    </main>
  );
}
