import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Renan Marques | Senior Software Engineer",
  description:
    "Software Engineering, performance, scalability, observability and applied AI. Case studies in production diagnostics, legacy modernization and AI-assisted delivery.",
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
      "Performance, scalability, observability and applied AI for complex software systems.",
    type: "website",
  },
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
