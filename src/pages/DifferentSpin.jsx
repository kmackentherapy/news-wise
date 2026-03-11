import { useState } from "react";
import data from "../data/differentSpin.json";

function DifferentSpin() {
  const [current, setCurrent] = useState(0);
  const article = data[current];

  function nextArticle() {
    setCurrent((prev) => (prev + 1) % data.length);
  }

  return (
    <div style={{ maxWidth: "800px", margin: "0 auto" }}>
      <h1 style={{ fontSize: "2rem", marginBottom: "20px" }}>
        Different Spin: How Headlines Shape Perception
      </h1>

      <p
        style={{
          fontSize: "1.1rem",
          color: "#4b5563",
          marginBottom: "30px",
          lineHeight: "1.6",
        }}
      >
        The same story can be framed in different ways depending on the writer’s
        goals, audience, or bias. Compare the two headlines below — both describe
        the same article, but they create very different impressions.
      </p>

      <div
        style={{
          background: "white",
          padding: "25px",
          borderRadius: "12px",
          boxShadow: "0 2px 10px rgba(0,0,0,0.08)",
          marginBottom: "30px",
        }}
      >
        <h2 style={{ marginBottom: "10px" }}>Original Article</h2>
        <p style={{ lineHeight: "1.6", color: "#1f2937" }}>{article.article}</p>
      </div>

      <div
        style={{
          display: "flex",
          gap: "20px",
          flexWrap: "wrap",
          marginBottom: "30px",
        }}
      >
        <div
          style={{
            flex: 1,
            background: "white",
            padding: "20px",
            borderRadius: "12px",
            boxShadow: "0 2px 10px rgba(0,0,0,0.08)",
            minWidth: "250px",
          }}
        >
          <h3 style={{ color: "#059669", marginBottom: "10px" }}>
            Positive Spin
          </h3>
          <p style={{ lineHeight: "1.6" }}>{article.headline_positive}</p>
        </div>

        <div
          style={{
            flex: 1,
            background: "white",
            padding: "20px",
            borderRadius: "12px",
            boxShadow: "0 2px 10px rgba(0,0,0,0.08)",
            minWidth: "250px",
          }}
        >
          <h3 style={{ color: "#dc2626", marginBottom: "10px" }}>
            Negative Spin
          </h3>
          <p style={{ lineHeight: "1.6" }}>{article.headline_negative}</p>
        </div>
      </div>

      <div style={{ textAlign: "center" }}>
        <button
          onClick={nextArticle}
          style={{
            padding: "12px 20px",
            background: "#2563eb",
            color: "white",
            borderRadius: "8px",
            border: "none",
            fontWeight: "600",
            cursor: "pointer",
          }}
        >
          Next Example
        </button>
      </div>
    </div>
  );
}

export default DifferentSpin;