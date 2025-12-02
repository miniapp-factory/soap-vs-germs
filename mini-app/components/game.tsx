"use client";

import { useState } from "react";
import StartScreen from "./start-screen";
import Shooter from "./shooter";
import Hoop from "./hoop";
import ShootButton from "./shoot-button";
import MathQuestion from "./math-question";
import ScoreDisplay from "./score-display";

export default function Game() {
  const [started, setStarted] = useState(false);
  const [score, setScore] = useState(0);
  const [question, setQuestion] = useState<string | null>(null);
  const [answer, setAnswer] = useState<string>("");
  const [message, setMessage] = useState<string | null>(null);

  const generateQuestion = () => {
    const ops = ["+", "-", "*", "/"];
    const op = ops[Math.floor(Math.random() * ops.length)];
    let a: number, b: number, result: number;
    if (op === "/") {
      b = Math.floor(Math.random() * 10) + 1;
      result = Math.floor(Math.random() * 10) + 1;
      a = b * result;
    } else {
      a = Math.floor(Math.random() * 20) + 1;
      b = Math.floor(Math.random() * 20) + 1;
      if (op === "+") result = a + b;
      else if (op === "-") result = a - b;
      else result = a * b;
    }
    setQuestion(`${a} ${op} ${b}`);
    setAnswer("");
    setMessage(null);
  };

  const handleShoot = () => {
    generateQuestion();
  };

  const handleAnswer = (userAnswer: string) => {
    if (!question) return;
    const correct = eval(question).toString();
    if (userAnswer.trim() === correct) {
      setScore((s) => s + 1);
      setMessage("Correct! +1 point");
    } else {
      setMessage(`Wrong! The answer was ${correct}`);
    }
    setQuestion(null);
  };

  if (!started) {
    return <StartScreen onStart={() => setStarted(true)} />;
  }

  return (
    <div className="flex flex-col items-center gap-4">
      <ScoreDisplay score={score} />
      <div className="relative w-64 h-64">
        <Shooter />
        <Hoop />
      </div>
      <ShootButton onShoot={handleShoot} />
      {question && (
        <MathQuestion
          question={question}
          answer={answer}
          onChange={setAnswer}
          onSubmit={handleAnswer}
        />
      )}
      {message && <p className="text-lg">{message}</p>}
    </div>
  );
}
