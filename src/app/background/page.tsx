import { InteractiveNetworkBackground } from "../components/InteractiveNetworkBackground";

export default function BackgroundPage() {
  return (
    <main className="relative min-h-screen overflow-hidden bg-[#f7faf8]">
      <InteractiveNetworkBackground />
      <div
        className="pointer-events-none fixed inset-0 bg-linear-to-b from-[#d4d4d4]/0 to-[#d4d4d4]"
        aria-hidden="true"
      />
    </main>
  );
}
