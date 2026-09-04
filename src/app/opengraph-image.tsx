import { ImageResponse } from "next/og";

// Necessário para `output: export` — a imagem é gerada no build.
export const dynamic = "force-static";

export const size = { width: 1200, height: 630 };
export const contentType = "image/png";
export const alt =
  "Gabriel e Souza Advogados e Associados | Advocacia Trabalhista e Previdenciária";

export default function OpengraphImage() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          alignItems: "flex-start",
          justifyContent: "center",
          background: "#1b1b1b",
          padding: "80px",
        }}
      >
        <div
          style={{
            width: 96,
            height: 8,
            background: "#D4AF37",
            marginBottom: 48,
          }}
        />
        <div
          style={{
            fontSize: 64,
            fontWeight: 800,
            color: "#F5F5F0",
            lineHeight: 1.1,
            letterSpacing: "-0.02em",
          }}
        >
          GABRIEL &amp; SOUZA
        </div>
        <div
          style={{
            fontSize: 32,
            fontWeight: 600,
            color: "#D4AF37",
            marginTop: 24,
          }}
        >
          Advocacia Trabalhista e Previdenciária
        </div>
        <div
          style={{
            fontSize: 24,
            fontWeight: 400,
            color: "#A0A0A0",
            marginTop: 16,
          }}
        >
          Brasília/DF
        </div>
      </div>
    ),
    { ...size }
  );
}
