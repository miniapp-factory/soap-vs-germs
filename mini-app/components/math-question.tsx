"use client";

import { useState } from "react";

export default function MathQuestion({
  question,
  answer,
  onChange,
  onSubmit,
}: {
  question: string;
  answer: string;
  onChange: (value: string) => void;
  onSubmit: (value: string) => void;
}) {
  const [input, setInput] = useState(answer);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    onSubmit(input);
  };

  return (
    <form onSubmit={handleSubmit} className="flex flex-col items-center gap-2">
      <label className="text-lg">{question} = ?</label>
      <input
        type="text"
        value={input}
        onChange={(e) => {
          setInput(e.target.value);
          onChange(e.target.value);
        }}
        className="border rounded px-2 py-1"
      />
      <button type="submit" className="mt-2">
        Submit
      </button>
    </form>
  );
}
