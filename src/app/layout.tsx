import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "MASI IA | Mentoria empresarial com inteligência artificial",
  description:
    "A MASI IA aplica o método MASI para diagnosticar sua empresa, organizar prioridades, sugerir ações e acompanhar a execução com agentes especializados.",
  openGraph: {
    title: "MASI IA | Mentoria empresarial com inteligência artificial",
    description:
      "Transforme diagnóstico empresarial em prioridades, OKRs, ações e acompanhamento com apoio de agentes de IA.",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="pt-BR"
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col">{children}</body>
    </html>
  );
}
