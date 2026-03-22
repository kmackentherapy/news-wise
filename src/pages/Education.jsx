import { useState } from "react";

function Education() {
  const [tab, setTab] = useState("care");

  const colours = {
    care: "#2563eb",        // blue
    protect: "#059669",     // green
    mental: "#7c3aed",      // purple
    real: "#ea580c",        // orange
  };

  const tabStyle = (name) => ({
    padding: "12px 18px",
    borderRadius: "10px",
    border: "none",
    cursor: "pointer",
    fontWeight: "600",
    display: "flex",
    alignItems: "center",
    gap: "8px",
    background: tab === name ? colours[name] : "#e5e7eb",
    color: tab === name ? "white" : "#111827",
    transition: "0.2s",
    fontSize: "1rem",
  });

  return (
    <div style={{ maxWidth: "900px", margin: "0 auto", padding: "20px" }}>
      <h1 style={{ fontSize: "2rem", marginBottom: "25px", textAlign: "center" }}>
        Education Hub
      </h1>

      {/* Tabs */}
      <div
        style={{
          display: "flex",
          gap: "12px",
          flexWrap: "wrap",
          justifyContent: "center",
          marginBottom: "25px",
        }}
      >
        <button style={tabStyle("care")} onClick={() => setTab("care")}>
          🔍 Why should you care?
        </button>

        <button style={tabStyle("protect")} onClick={() => setTab("protect")}>
          🛡️ How can you protect yourself?
        </button>

        <button style={tabStyle("mental")} onClick={() => setTab("mental")}>
          🧠 AI & your mental health
        </button>

        <button style={tabStyle("real")} onClick={() => setTab("real")}>
          🖼️ How to check if media is real?
        </button>
      </div>

      {/* Content Card */}
      <div
        style={{
          background: "white",
          borderRadius: "12px",
          boxShadow: "0 2px 10px rgba(0,0,0,0.08)",
          overflow: "hidden",
        }}
      >
        {/* Coloured Header Bar */}
        <div
          style={{
            height: "10px",
            background: colours[tab],
            width: "100%",
          }}
        ></div>

        {/* Content */}
        <div style={{ padding: "30px", lineHeight: "1.7", color: "#1f2937" }}>
          
          {/* WHY SHOULD YOU CARE */}
          {tab === "care" && (
            <>
              <h2 style={{ marginBottom: "15px" }}>Why should you care?</h2>

              <p>
                Nobody wants another boring lecture about “the dangers of the internet.”  
                But AI is changing things fast, and it’s creating problems that people your age have never had to deal with before.
              </p>

              <p>
                One of the biggest issues is AI‑generated images being used to target teenagers.  
                Some people create fake, inappropriate images and use them to threaten or blackmail others.  
                It’s scary — and it’s exactly why understanding AI matters.
              </p>

              <p>
                AI can also make incredibly realistic fake photos, videos, and articles.  
                Deepfakes can look so real that it becomes hard to know what’s true and what’s completely made up.
              </p>

              <p>
                🎯 <strong>Built‑in bias</strong><br />
                AI learns from human data — and humans have biases.  
                That means AI can accidentally repeat stereotypes or unfair ideas, even when it sounds confident or helpful.
              </p>
            </>
          )}

          {/* PROTECT YOURSELF */}
          {tab === "protect" && (
            <>
              <h2 style={{ marginBottom: "15px" }}>How can you protect yourself?</h2>

              <p>
                You’ve probably heard “be careful what you post” a thousand times — but here’s the real truth:  
                once something is online, it can stay there forever, even on apps that claim it “disappears.”
              </p>

              <p>
                Apps like Snapchat might delete messages from your chat, but images can still stay on their servers for years.  
                So always think twice before sending or posting anything personal.
              </p>

              <p>
                AI‑generated content spreads because people share it without thinking.  
                The best way to fight it is simple: <strong>pause before you share.</strong>  
                Those few seconds give your brain time to decide if something feels off.
              </p>

              <p>
                AI content farms purposely create posts that trigger strong emotions like:
                <br />• Anger  
                <br />• Fear  
                <br />• Outrage  
                <br />• Sadness  
                Emotional posts get more clicks — that’s why they’re made.
              </p>

              <p>
                AI can also create fake profiles to push certain stories or images.  
                If you don’t recognise the account — or it looks brand new — be cautious.
              </p>
            </>
          )}

          {/* MENTAL HEALTH */}
          {tab === "mental" && (
            <>
              <h2 style={{ marginBottom: "15px" }}>AI & your mental health</h2>

              <p>
                <strong>AI is everywhere now, and it can seriously affect how you feel about yourself.</strong>  
                AI‑generated content can influence your confidence, your friendships, and even how you see the world.
              </p>

              <p>
                <strong>AI images often show unrealistic bodies and faces.</strong>  
                Many influencers use AI to make themselves look “perfect.”  
                Comparing yourself to something fake can damage your self‑esteem without you even realising it.
              </p>

              <p>
                <strong>AI can also cause information overload.</strong>  
                When everything online looks real — even when it isn’t — it becomes harder to trust what you see.  
                That confusion can lead to stress and anxiety.
              </p>

              <p>
                <strong>Some AI content is designed to manipulate your emotions.</strong>  
                Certain accounts purposely create posts that make you angry or scared because it keeps you scrolling.  
                That constant emotional pressure can affect your mood.
              </p>
            </>
          )}

          {/* CHECK IF MEDIA IS REAL */}
          {tab === "real" && (
            <>
              <h2 style={{ marginBottom: "15px" }}>How to check if media is real?</h2>

              <p>
                There are lots of ways to spot fake media online — and once you know the signs, it gets much easier.
              </p>

              <p>
                <strong>For Articles:</strong><br />
                • Headlines written in ALL CAPS or with dramatic language are usually clickbait.  
                • Real news includes sources, quotes, or data you can verify.  
                • If a story has no links or the links don’t support the claim, it’s probably fake.  
                • Some websites are satire — they look real but are meant to be jokes.  
                • Use reverse image search to check if photos are edited or taken out of context.  
                • Be aware of your own biases — sometimes we believe things just because they match what we already think.
              </p>

              <p>
                <strong>For Images:</strong><br />
                • Look closely at details like skin texture, hands, eyes, or animal fur — AI still struggles with these.  
                • Check shadows and lighting — AI often creates shadows that don’t make sense.  
                • If you’re still unsure, use a reverse image search to see where the picture came from.
              </p>
            </>
          )}

        </div>
      </div>
    </div>
  );
}

export default Education;