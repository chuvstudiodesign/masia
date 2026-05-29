import { Radar3D } from "../components/Radar3D";

export default function Grafico3DPage() {
  return (
    <main className="grafico-3d-page relative min-h-screen overflow-hidden">
      <div
        className="pointer-events-none absolute inset-0 bg-radial-[circle_at_50%_45%] from-white via-[#eef8f1] to-[#d4d4d4]/70"
        aria-hidden="true"
      />
      <Radar3D />
    </main>
  );
}
