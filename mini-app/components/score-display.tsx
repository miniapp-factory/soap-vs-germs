"use client";

export default function ScoreDisplay({ score }: { score: number }) {
  return <p className="text-xl">Score: {score}</p>;
}
