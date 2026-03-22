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

      {/* --- NEW SECTION YOU REQUESTED --- */}
      <div
        style={{
          maxWidth: "800px",
          margin: "0 auto",
          textAlign: "left",
          background: "white",
          padding: "30px",
          borderRadius: "12px",
          boxShadow: "0 2px 10px rgba(0,0,0,0.08)",
          lineHeight: "1.7",
          color: "#1f2937",
        }}
      >
        <h2 style={{ fontSize: "1.6rem", marginBottom: "15px" }}>
          The Rise of Deepfakes and AI Media
        </h2>

        <p>
          In the age of deepfake and AI‑generated videos, how safe is the media
          of you online?
        </p>

        <p>
          Do you think you can spot fake articles or videos created by AI?
          Technology has advanced so quickly that even experts can struggle to
          tell the difference.
        </p>

        <p>Look at how far AI videos have come in just a few years:</p>

        {/* YouTube Short Embed */}
        <div style={{ margin: "20px 0", textAlign: "center" }}>
          <iframe
            width="300"
            height="533"
            src="https://www.youtube.com/embed/bFga88JqJPw"
            title="YouTube Short"
            frameBorder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
            style={{ borderRadius: "12px" }}
          ></iframe>
        </div>

        <p>
          Teenagers are often the first to adapt to new technology, just like
          when social media first emerged. They’re also some of the best at
          noticing the difference between real and fake media online — but even
          they are being challenged as companies get smarter about making
          convincing content.
        </p>

        <p style={{ fontWeight: "600", marginTop: "20px" }}>
          Are you up to the challenge of telling the difference between AI and
          real?
        </p>
      </div>

      {/* Buttons */}
      <div
        style={{
          display: "flex",
          justifyContent: "center",
          gap: "20px",
          flexWrap: "wrap",
          marginTop: "40px",
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
          }}
        >
          Check Sources
        </Link>
      </div>
    </div>
  );
}

export default Home;
