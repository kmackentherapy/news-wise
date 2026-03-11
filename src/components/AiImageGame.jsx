import { useState } from "react";
import questions from "../data/aiImageQuestions.json";

function AiImageGame() {
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

  return (
    <div style={{ maxWidth: "600px", margin: "0 auto" }}>
      <h2>AI Image Detection</h2>

      <img
        src={question.image}
        alt="test"
        style={{ width: "100%", borderRadius: "8px", marginBottom: "15px" }}
      />

      <div style={{ marginTop: "20px" }}>
        <button
          onClick={() => handleAnswer("real")}
          disabled={showExplanation}
          style={{ marginRight: "10px" }}
        >
          Real
        </button>

        <button
          onClick={() => handleAnswer("ai")}
          disabled={showExplanation}
        >
          AI
        </button>
      </div>

      {showExplanation && (
        <div
          style={{
            marginTop: "20px",
            padding: "15px",
            background: "#f0f0f0",
            borderRadius: "8px"
          }}
        >
          <h3>
            {selected === question.answer ? "Correct!" : "Incorrect"}
          </h3>
          <p>{question.explanation}</p>

          <button onClick={nextQuestion} style={{ marginTop: "10px" }}>
            Next Question
          </button>
        </div>
      )}
    </div>
  );
}

export default AiImageGame;