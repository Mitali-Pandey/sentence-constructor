import React from "react";

const ResultScreen = ({ results }) => {
  const score = results.filter((r) => r.isCorrect).length;

  return (
    <div className="bg-white p-6 rounded shadow-md w-full max-w-3xl relative">
      {/* ❌ Exit button */}
      <button
        onClick={() => window.location.reload()}
        className="absolute top-4 right-4 text-red-600 hover:text-red-800 text-xl font-bold"
        title="Exit Quiz"
      >
        ❌
      </button>

      <h2 className="text-2xl font-bold mb-4 text-center">Final Results</h2>
      <p className="text-center text-lg mb-6 font-semibold">
        Your Score: {score} / {results.length}
      </p>

      <div className="space-y-4">
        {results.map((entry, index) => (
          <div key={index} className="p-4 border rounded bg-gray-50">
            <h3 className="font-semibold mb-1">Question {index + 1}</h3>
            <p>
              <strong>Your Answer:</strong>{" "}
              <span className={entry.isCorrect ? "text-green-600" : "text-red-600"}>
                {entry.userAnswer.join(" ")} {entry.isCorrect ? "✅" : "❌"}
              </span>
            </p>
            {!entry.isCorrect && (
              <p>
                <strong>Correct Answer:</strong>{" "}
                <span className="text-blue-600">{entry.question.answer.join(" ")}</span>
              </p>
            )}
          </div>
        ))}
      </div>
    </div>
  );
};

export default ResultScreen;
