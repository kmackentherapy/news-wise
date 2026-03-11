import { Link } from "react-router-dom";

function Home() {
  return (
    <div style={{ textAlign: "center", marginTop: "40px" }}>
      <h1 style={{ fontSize: "2.5rem", marginBottom: "15px", color: "#111827" }}>
        Welcome to <span style={{ color: "#2563eb" }}>NewsSense</span>
      </h1>

      <p
        style={{
          fontSize: "1.2rem",
          color: "#4b5563",
          maxWidth: "700px",
          margin: "0 auto 40px",
          lineHeight: "1.6",
        }}
      >
        Learn how to spot fake news, understand media bias, and check sources
        like a pro. Test your skills across multiple interactive challenges.
      </p>

      {/* Button Row */}
      <div
        style={{
          display: "flex",
          justifyContent: "center",
          gap: "20px",
          flexWrap: "wrap",
        }}
      >
        <Link
          to="/spot-the-fake"
          style={{
            padding: "15px 25px",
            background: "#2563eb",
            color: "white",
            borderRadius: "10px",
            textDecoration: "none",
            fontWeight: "600",
            fontSize: "1.1rem",
            boxShadow: "0 2px 8px rgba(0,0,0,0.1)",
            transition: "0.2s",
          }}
        >
          Spot the Fake
        </Link>

        <Link
          to="/different-spin"
          style={{
            padding: "15px 25px",
            background: "white",
            color: "#111827",
            borderRadius: "10px",
            textDecoration: "none",
            fontWeight: "600",
            fontSize: "1.1rem",
            border: "1px solid #e5e7eb",
            boxShadow: "0 2px 8px rgba(0,0,0,0.05)",
            transition: "0.2s",
          }}
        >
          Different Spin
        </Link>

        <Link
          to="/source-checking"
          style={{
            padding: "15px 25px",
            background: "white",
            color: "#111827",
            borderRadius: "10px",
            textDecoration: "none",
            fontWeight: "600",
            fontSize: "1.1rem",
            border: "1px solid #e5e7eb",
            boxShadow: "0 2px 8px rgba(0,0,0,0.05)",
            transition: "0.2s",
          }}
        >
          Check Sources
        </Link>
      </div>
    </div>
  );
}

export default Home;