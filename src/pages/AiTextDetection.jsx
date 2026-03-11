import AiTextGame from "../components/AiTextGame";

function AiTextDetection() {
  return (
    <div>
      <h1 style={{ fontSize: "2rem", marginBottom: "20px" }}>
        AI Text Detection
      </h1>

      <div
        style={{
          background: "white",
          padding: "30px",
          borderRadius: "12px",
          boxShadow: "0 2px 10px rgba(0,0,0,0.08)",
        }}
      >
        <AiTextGame />
      </div>
    </div>
  );
}

export default AiTextDetection;