import React, { useEffect, useState } from "react";

function Question({ question, onAnswered }) {
  const [timeRemaining, setTimeRemaining] = useState(10);

  // add useEffect code
  useEffect(() => {
    const countDown = setTimeout(() => {
      // Decreasng the timer by one
      setTimeRemaining((remainingTime) => remainingTime - 1);

      // setting the condition where the timer hits 0
      if (timeRemaining === 0) {
        setTimeRemaining(10);
        onAnswered(false);
        return;
      }
      else {
        (onAnswered(true));
      }
    }, 1000);
    return (function() {
      clearTimeout(countDown);
    })
  }, [timeRemaining, onAnswered]);

  function handleAnswer(isCorrect) {
    setTimeRemaining(10);
    onAnswered(isCorrect);
  }

  const { id, prompt, answers, correctIndex } = question;

  return (
    <>
      <h1>Question {id}</h1>
      <h3>{prompt}</h3>
      {answers.map((answer, index) => {
        const isCorrect = index === correctIndex;
        return (
          <button key={answer} onClick={() => handleAnswer(isCorrect)}>
            {answer}
          </button>
        );
      })}
      <h5>{timeRemaining} seconds remainingTime</h5>
    </>
  );
}

export default Question;
