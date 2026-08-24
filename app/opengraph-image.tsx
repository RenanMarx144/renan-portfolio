import { ImageResponse } from "next/og";

export const alt = "Renan Marques — Senior Software Engineer";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default async function Image() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          padding: "80px",
          background:
            "radial-gradient(circle at 80% 4%, rgba(103,232,182,0.18), transparent 60%), radial-gradient(circle at 15% 20%, rgba(125,211,252,0.12), transparent 60%), #080a0e",
          color: "#f4f7fb",
          fontFamily: "Arial, sans-serif",
        }}
      >
        <div style={{ display: "flex", fontSize: 32, fontWeight: 900, color: "#67e8b6", marginBottom: 28 }}>
          RM.
        </div>
        <div style={{ display: "flex", fontSize: 62, fontWeight: 900, letterSpacing: "-0.03em", lineHeight: 1.05 }}>
          Sistemas complexos.
        </div>
        <div
          style={{
            display: "flex",
            fontSize: 62,
            fontWeight: 500,
            color: "#9da7b8",
            letterSpacing: "-0.03em",
            lineHeight: 1.05,
          }}
        >
          Performance mensurável.
        </div>
        <div style={{ display: "flex", fontSize: 26, color: "#9da7b8", marginTop: 36 }}>
          Senior Software Engineer · Performance · Observabilidade · IA Aplicada
        </div>
      </div>
    ),
    { ...size }
  );
}
