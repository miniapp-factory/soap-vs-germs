"use client";

export default function Shooter() {
  return (
    <div className="absolute bottom-0 left-1/2 transform -translate-x-1/2">
      <svg width="50" height="50" viewBox="0 0 50 50">
        <circle cx="25" cy="25" r="20" fill="#ffcc00" />
      </svg>
    </div>
  );
}
