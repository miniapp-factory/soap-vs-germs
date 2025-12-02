"use client";

import { Button } from "@/components/ui/button";

export default function StartScreen({ onStart }: { onStart: () => void }) {
  return (
    <div className="flex flex-col items-center gap-4">
      <h1 className="text-3xl font-bold">Basketball Math Challenge</h1>
      <Button onClick={onStart}>Start Game</Button>
    </div>
  );
}
