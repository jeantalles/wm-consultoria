import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "WM Consultoria — Esquadrias, Fachadas e Revestimentos",
  description:
    "Especialistas em análise e desenvolvimento de projetos de esquadrias de alumínio, fachadas e revestimentos. Mais de 40 anos de experiência aplicada ao seu projeto.",
  openGraph: {
    title: "WM Consultoria — Esquadrias, Fachadas e Revestimentos",
    description:
      "Analisamos, especificamos e validamos cada detalhe técnico de esquadrias de alumínio, fachadas e revestimentos para construtoras e incorporadoras em todo o Brasil.",
    locale: "pt_BR",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="pt-BR">
      <body>{children}</body>
    </html>
  );
}
