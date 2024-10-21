"use client";

import { Heart } from "lucide-react";

export default function EventBlockImageButtons() {
  return (
    <div
      className="absolute bottom-2 right-2 items-center gap-3 flex"
      onClick={(e) => {
        e.preventDefault();
        e.stopPropagation();
      }}
    >
      <div className="px-2 py-2 bg-background/90 rounded-full backdrop-blur text-sm supports-[backdrop-filter]:bg-background/60">
        Купить билет
      </div>
      <div className="px-2 py-2 bg-background/90 rounded-full backdrop-blur supports-[backdrop-filter]:bg-background/60">
        <Heart size={20} />
      </div>
    </div>
  );
}
