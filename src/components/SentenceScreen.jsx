import React, { useState } from "react";

const SentenceScreen = ({ sentenceParts, correctAnswer, onSubmit, currentNumber, total }) => {
  const [blanks, setBlanks] = useState(Array(correctAnswer.length).fill(null));
  const [options, setOptions] = useState([...correctAnswer].sort(() => Math.random() - 0.5));

  const handleDrop = (e, i) => {
    const word = e.dataTransfer.getData("text");
    if (!blanks.includes(word)) {
      const newBlanks = [...blanks];
      newBlanks[i] = word;
      setBlanks(newBlanks);
      setOptions(options.filter((w) => w !== word));
    }
  };

  const handleDragStart = (e, word) => {
    e.dataTransfer.setData("text", word);
  };

  return (
    <div className="bg-white p-6 rounded-xl shadow-xl w-full max-w-2xl relative font-sans">
      {/* ❌ Close button */}
      <button
        onClick={() => window.location.reload()}
        className="absolute top-4 right-4 text-red-600 hover:text-red-800 text-xl font-bold"
        title="Close Quiz"
      >
        ❌
      </button>

      <h2 className="text-2xl font-bold mb-6 text-center text-gray-800">
        Question {currentNumber} of {total}
      </h2>

      {/* Sentence with blanks */}
      <p className="mb-8 text-lg text-center leading-relaxed text-gray-700">
        {sentenceParts.map((part, i) => (
          <span key={i}>
            {part}{" "}
            {i < correctAnswer.length && (
              <span
                onDragOver={(e) => e.preventDefault()}
                onDrop={(e) => handleDrop(e, i)}
                className="inline-block w-28 min-h-[32px] border-b-2 border-black text-center font-semibold text-blue-700 mx-2"
              >
                {blanks[i] || "_____"}
              </span>
            )}
          </span>
        ))}
      </p>

      {/* Options Box */}
      <div className="border border-blue-300 bg-blue-50 p-4 rounded-md mb-6 shadow-sm">
        <h4 className="font-semibold mb-3 text-left text-gray-700">Drag & Drop Options:</h4>
        <div className="flex flex-wrap gap-4 justify-center">
          {options.map((word, i) => (
            <div
              key={i}
              draggable
              onDragStart={(e) => handleDragStart(e, word)}
              className="px-6 py-3 bg-white text-blue-800 border border-blue-400 rounded-lg shadow-md font-medium text-base cursor-move hover:bg-blue-100 transition-all"
            >
              {word}
            </div>
          ))}
        </div>
      </div>

      {/* Submit button */}
      <button
        onClick={() => onSubmit(blanks)}
        disabled={blanks.includes(null)}
        className="bg-green-600 text-white px-6 py-3 rounded-md hover:bg-green-700 disabled:opacity-50 block mx-auto text-lg font-semibold transition"
      >
        Submit
      </button>
    </div>
  );
};

export default SentenceScreen;
