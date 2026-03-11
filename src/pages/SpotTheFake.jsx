import { Link } from "react-router-dom";
import FakeNewsGame from "../components/FakeNewsGame";

// Reusable style for the mode cards
const modeCardStyle = {
  flex: 1,
  padding: "20px",
  background: "white",
  borderRadius: "12px",
  textAlign: "center",
  textDecoration: "none",
  color: "#1f2937",
  fontWeight: "600",
  boxShadow: "0 2px 8px rgba(0,0,0,0.08)",
  border: "1px solid #e5e7eb",
  transition: "0.2s ease",
};

function SpotTheFake() {
  return (
    <div>
      <h1 style={{ fontSize: "2rem", marginBottom: "10px" }}>Spot the Fake</h1>
      <p style={{ color: "#4b5563", marginBottom: "25px" }}>
        Choose a mode to test your misinformation‑spotting skills.
      </p>

      {/* Mode Selector */}
      <div
        style={{
          display: "flex",
          gap: "20px",
          marginBottom: "40px",
        }}
      >
        <Link to="/spot-the-fake" style={modeCardStyle}>
          Fake News
        </Link>

        <Link to="/ai-text" style={modeCardStyle}>
          AI Text
        </Link>

        <Link to="/ai-image" style={modeCardStyle}>
          AI Image
        </Link>
      </div>

      {/* Game Container */}
      <div
        style={{
          background: "white",
          padding: "30px",
          borderRadius: "12px",
          boxShadow: "0 2px 10px rgba(0,0,0,0.08)",
        }}
      >
        <FakeNewsGame />
      </div>
    </div>
  );
}

export default SpotTheFake;
