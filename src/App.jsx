import { useState } from "react";

function App() {
  const [input, setInput] = useState("");
  const [words, setWords] = useState([]);
  const [constructed, setConstructed] = useState("");

  const handleInputChange = (e) => {
    setInput(e.target.value);
    setWords(e.target.value.trim().split(/\s+/));
  };

  const handleWordClick = (word) => {
    setConstructed((prev) => (prev ? `${prev} ${word}` : word));
  };

  const handleReset = () => {
    setInput("");
    setWords([]);
    setConstructed("");
  };

  return (
    <div className="min-h-screen bg-gray-50 flex flex-col items-center p-6 space-y-6">
      <h1 className="text-3xl font-bold text-center text-purple-700 flex items-center gap-2">
        <span role="img" aria-label="brain">🧠</span> Sentence Constructor
      </h1>

      <textarea
        placeholder="Enter your text here..."
        className="w-full max-w-xl p-4 rounded-md shadow border border-gray-300 resize-none"
        rows="4"
        value={input}
        onChange={handleInputChange}
      ></textarea>

      <div className="flex flex-wrap gap-2 justify-center w-full max-w-xl">
        {words.map((word, index) => (
          <button
            key={index}
            onClick={() => handleWordClick(word)}
            className="bg-blue-500 text-white px-3 py-1 rounded-full shadow hover:bg-blue-600 transition"
          >
            {word}
          </button>
        ))}
      </div>

      <div className="mt-4 p-4 bg-gray-100 rounded shadow min-h-[40px] w-full max-w-xl text-center">
        <strong>Constructed Sentence:</strong> {constructed}
      </div>

      <button
        onClick={handleReset}
        className="bg-red-500 text-white px-4 py-2 rounded hover:bg-red-600 transition"
      >
        Reset
      </button>
    </div>
  );
}

export default App;
