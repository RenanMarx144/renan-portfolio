import type { Metadata, Viewport } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Renan Marques | Senior Software Engineer",
  description:
    "Engenharia de software com foco em performance, escalabilidade, observabilidade e IA aplicada. Estudos de caso em diagnóstico de produção, modernização de legados e entrega assistida por IA.",
  keywords: [
    "Senior Software Engineer",
    "Performance Engineering",
    "Scalability",
    "Grafana",
    "OpenTelemetry",
    "Applied AI",
    "FastAPI",
    "Laravel",
    "Node.js",
    "React",
  ],
  authors: [{ name: "Renan Marques Fontana" }],
  openGraph: {
    title: "Renan Marques | Senior Software Engineer",
    description:
      "Performance, escalabilidade, observabilidade e IA aplicada para sistemas complexos.",
    type: "website",
    locale: "pt_BR",
  },
};

export const viewport: Viewport = {
  themeColor: "#080a0e",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt-BR">
      <body>{children}</body>
    </html>
  );
}
