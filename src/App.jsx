import React, { useState } from "react";
import SentenceScreen from "./components/SentenceScreen";
import FeedbackScreen from "./components/FeedbackScreen";
import ResultScreen from "./components/ResultScreen";

const questions = [
  {
    id: 1,
    sentenceParts: [" The ", " athlete’s rigorous training regimen ", " her to overcome numerous obstacles, ", " her previous records and ", " a new standard in the sport. "],
    answer: [" Dedicated ", " Enabled ", " Shattering "],
  },
  {
    id: 2,
    sentenceParts: ["Technology ", " the way we communicate, ", " barriers and ", " global collaboration. "],
    answer: ["has transformed", "breaking", "enabling"],
  },
  {
    id: 3,
    sentenceParts: ["The ", " cat ", " quickly ", " on the couch. "],
    answer: ["fluffy", "jumped", "and sat"],
  },
  {
    id: 4,
    sentenceParts: ["She ", " to finish her project, ", " the deadline by ", " hours."],
    answer: ["managed", "beating", "three"],
  },
  {
    id: 5,
    sentenceParts: ["Reading ", " a person’s knowledge, ", " vocabulary and ", " skills."],
    answer: ["expands", "enhances", "thinking"],
  },
  {
    id: 6,
    sentenceParts: ["Hard work and ", " the foundation for ", " and lasting success."],
    answer: ["perseverance", "achievement", "meaningful"],
  },
  {
    id: 7,
    sentenceParts: ["The festival ", " joy, ", " and a sense of ", " among the community."],
    answer: ["brought", "laughter", "togetherness"],
  },
  {
    id: 8,
    sentenceParts: ["Music ", " emotions, ", " memories and ", " healing."],
    answer: ["evokes", "triggers", "offers"],
  },
  {
    id: 9,
    sentenceParts: ["The ", " mountain peak was ", " with snow, ", " a breathtaking view."],
    answer: ["distant", "covered", "offering"],
  },
  {
    id: 10,
    sentenceParts: ["A balanced diet ", " physical health, ", " energy levels and ", " productivity."],
    answer: ["supports", "boosts", "improves"],
  }
];


function App() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [userAnswers, setUserAnswers] = useState([]);
  const [showFeedback, setShowFeedback] = useState(false);
  const [showResult, setShowResult] = useState(false);

  const handleSubmit = (userAnswer) => {
    const correct = JSON.stringify(userAnswer) === JSON.stringify(questions[currentIndex].answer);
    setUserAnswers([
      ...userAnswers,
      {
        question: questions[currentIndex],
        userAnswer,
        isCorrect: correct,
      },
    ]);
    setShowFeedback(true);
  };

  const handleNext = () => {
    if (currentIndex + 1 === questions.length) {
      setShowResult(true);
    } else {
      setCurrentIndex(currentIndex + 1);
      setShowFeedback(false);
    }
  };

  const handleFinish = () => {
    setShowFeedback(false);
    setShowResult(true);
  };

  return (
<div className="min-h-screen bg-[#ffe5b4] flex items-center justify-center p-4">
{!showResult ? (
        showFeedback ? (
          <FeedbackScreen
            data={userAnswers[currentIndex]}
            onNext={handleNext}
            isLast={currentIndex + 1 === questions.length}
            onFinish={handleFinish}
          />
        ) : (
          <SentenceScreen
            key={questions[currentIndex].id}
            sentenceParts={questions[currentIndex].sentenceParts}
            correctAnswer={questions[currentIndex].answer}
            onSubmit={handleSubmit}
            currentNumber={currentIndex + 1}
            total={questions.length}
          />
        )
      ) : (
        <ResultScreen results={userAnswers} />
      )}
    </div>
  );
}

export default App;
