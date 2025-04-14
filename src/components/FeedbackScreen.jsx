import React from "react";

const FeedbackScreen = ({ data, onNext, isLast, onFinish }) => {
  return (
    <div className="bg-white p-6 rounded shadow-md w-full max-w-lg text-center">
      <h2 className={`text-2xl font-bold mb-4 ${data.isCorrect ? "text-green-600" : "text-red-600"}`}>
        {data.isCorrect ? "✅ Correct Answer" : "❌ Incorrect Answer"}
      </h2>

      <p className="mb-2">
        <strong>Your Answer:</strong> {data.userAnswer.join(" ")}
      </p>

      {!data.isCorrect && (
        <p className="mb-4">
          <strong>Correct Answer:</strong> {data.question.answer.join(" ")}
        </p>
      )}

      <button
        onClick={isLast ? onFinish : onNext}
        className="bg-blue-600 text-white px-6 py-2 rounded hover:bg-blue-700"
      >
        {isLast ? "Go to Results" : "Next Question"}
      </button>
    </div>
  );
};

export default FeedbackScreen;
