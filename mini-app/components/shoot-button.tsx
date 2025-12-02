"use client";

import { Button } from "@/components/ui/button";

export default function ShootButton({ onShoot }: { onShoot: () => void }) {
  return <Button onClick={onShoot}>Shoot</Button>;
}
