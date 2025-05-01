import { ImageResponse } from "next/og";

// Route segment config
export const runtime = "edge";

// Image metadata
export const size = {
  width: 512,
  height: 512,
};
export const contentType = "image/png";

// Image generation
export default function Icon() {
  // Morning colors - using the morning theme as default for favicon
  const primary = "#FF6B6B";
  const secondary = "#FFD166";

  return new ImageResponse(
    (
      <div
        style={{
          fontSize: 24,
          width: "100%",
          height: "100%",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          borderRadius: "50%",
          background: `linear-gradient(135deg, ${primary} 0%, ${secondary} 100%)`,
        }}
      >
        <div
          style={{
            width: "70%",
            height: "70%",
            borderRadius: "50%",
            background: "rgba(0, 0, 0, 0.3)",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
          }}
        >
          <div
            style={{
              fontSize: 200,
              color: "white",
              fontWeight: "bold",
            }}
          >
            WW
          </div>
        </div>
      </div>
    ),
    { ...size }
  );
}
