import { useState } from "react";
import questions from "../data/aiTextQuestions.json";

function AiTextGame() {
  const [current, setCurrent] = useState(0);
  const [selected, setSelected] = useState(null);
  const [showExplanation, setShowExplanation] = useState(false);

  const question = questions[current];

  function handleAnswer(choice) {
    setSelected(choice);
    setShowExplanation(true);
  }

  function nextQuestion() {
    setSelected(null);
    setShowExplanation(false);
    setCurrent((prev) => (prev + 1) % questions.length);
  }

  const buttonStyle = {
    padding: "12px 20px",
    borderRadius: "8px",
    border: "none",
    cursor: "pointer",
    fontWeight: "600",
    background: "#2563eb",
    color: "white",
    transition: "0.2s",
    marginRight: "10px",
  };

  const disabledButtonStyle = {
    ...buttonStyle,
    opacity: 0.6,
    cursor: "default",
  };

  return (
    <div style={{ maxWidth: "700px", margin: "0 auto" }}>
      <h2 style={{ fontSize: "1.6rem", marginBottom: "20px" }}>
        AI Text Detection
      </h2>

      <div
        style={{
          background: "white",
          padding: "25px",
          borderRadius: "12px",
          boxShadow: "0 2px 10px rgba(0,0,0,0.08)",
        }}
      >
        <p
          style={{
            whiteSpace: "pre-wrap",
            fontSize: "1.1rem",
            lineHeight: "1.6",
            marginBottom: "25px",
            color: "#1f2937",
          }}
        >
          {question.text}
        </p>

        <div style={{ marginBottom: "20px" }}>
          <button
            onClick={() => handleAnswer("human")}
            disabled={showExplanation}
            style={showExplanation ? disabledButtonStyle : buttonStyle}
          >
            Human
          </button>

          <button
            onClick={() => handleAnswer("ai")}
            disabled={showExplanation}
            style={showExplanation ? disabledButtonStyle : buttonStyle}
          >
            AI
          </button>
        </div>

        {showExplanation && (
          <div
            style={{
              marginTop: "20px",
              padding: "20px",
              background: "#f3f4f6",
              borderRadius: "10px",
              border: "1px solid #e5e7eb",
            }}
          >
            <h3
              style={{
                fontSize: "1.3rem",
                marginBottom: "10px",
                color:
                  selected === question.answer ? "#059669" : "#dc2626",
              }}
            >
              {selected === question.answer ? "Correct!" : "Incorrect"}
            </h3>

            <p style={{ marginBottom: "15px", lineHeight: "1.5" }}>
              {question.explanation}
            </p>

            <button
              onClick={nextQuestion}
              style={{
                ...buttonStyle,
                background: "#111827",
                marginRight: 0,
              }}
            >
              Next Question
            </button>
          </div>
        )}
      </div>
    </div>
  );
}

export default AiTextGame;