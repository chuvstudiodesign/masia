import { AgentesNetwork } from "../components/AgentesNetwork";

export default function Agentes3DPage() {
  return (
    <main className="grafico-3d-page grid min-h-screen place-items-center px-6 py-12">
      <div className="w-full max-w-[525px]">
        <AgentesNetwork grid={false} />
      </div>
    </main>
  );
}
