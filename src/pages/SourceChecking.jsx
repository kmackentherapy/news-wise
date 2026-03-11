import { Link } from "react-router-dom";

function SourceChecking() {
  return (
    <div style={{ maxWidth: "800px", margin: "0 auto" }}>
      <h1 style={{ fontSize: "2rem", marginBottom: "20px" }}>
        Check Your Sources
      </h1>

      <p
        style={{
          fontSize: "1.1rem",
          color: "#4b5563",
          lineHeight: "1.6",
          marginBottom: "30px",
        }}
      >
        Before trusting a piece of information, it’s important to check where it
        came from, who created it, and whether it can be verified. Use this guide
        to evaluate the reliability of news, posts, images, and claims you see online.
      </p>

      <div
        style={{
          background: "white",
          padding: "30px",
          borderRadius: "12px",
          boxShadow: "0 2px 10px rgba(0,0,0,0.08)",
          lineHeight: "1.7",
          color: "#1f2937",
        }}
      >
        <h2>1. Check the Source</h2>
        <p>
          Look at who published the information. Is it a reputable news outlet,
          academic institution, or verified expert? Unknown websites or social
          media accounts with no history are red flags.
        </p>

        <h2 style={{ marginTop: "25px" }}>2. Look for Evidence</h2>
        <p>
          Reliable information cites data, studies, or direct quotes. If a claim
          is made without showing where it came from, be cautious.
        </p>

        <h2 style={{ marginTop: "25px" }}>3. Cross‑Check With Other Sources</h2>
        <p>
          Search for the same information on multiple reputable platforms. If
          only one site is reporting it, especially a low‑credibility one, it
          may be false or misleading.
        </p>

        <h2 style={{ marginTop: "25px" }}>4. Watch for Emotional Manipulation</h2>
        <p>
          Fake or biased content often uses strong emotional language to provoke
          anger, fear, or excitement. Reliable reporting stays factual and calm.
        </p>

        <h2 style={{ marginTop: "25px" }}>5. Check the Date</h2>
        <p>
          Old stories can be reshared to mislead people. Always check when the
          information was published.
        </p>

        <h2 style={{ marginTop: "25px" }}>6. Verify Images</h2>
        <p>
          Images can be edited or taken out of context. Use reverse‑image search
          tools to see where an image originally came from.
        </p>

        <h2 style={{ marginTop: "25px" }}>7. Look for Bias</h2>
        <p>
          Every source has some bias. Ask yourself: What perspective is this
          article coming from? What might be left out?
        </p>
      </div>

      {/* Optional link back to Spot the Fake */}
      <div style={{ textAlign: "center", marginTop: "30px" }}>
        <Link
          to="/spot-the-fake"
          style={{
            padding: "12px 20px",
            background: "#2563eb",
            color: "white",
            borderRadius: "8px",
            textDecoration: "none",
            fontWeight: "600",
          }}
        >
          Try Spot the Fake
        </Link>
      </div>
    </div>
  );
}

export default SourceChecking;