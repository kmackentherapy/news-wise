import AiImageGame from "../components/AiImageGame";

function AiImageDetection() {
  return (
    <div>
      <h1 style={{ fontSize: "2rem", marginBottom: "20px" }}>
        AI Image Detection
      </h1>

      <div
        style={{
          background: "white",
          padding: "30px",
          borderRadius: "12px",
          boxShadow: "0 2px 10px rgba(0,0,0,0.08)",
        }}
      >
        <AiImageGame />
      </div>
    </div>
  );
}

export default AiImageDetection;