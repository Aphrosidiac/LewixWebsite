"use client";

import { useState, useEffect, useCallback } from "react";

const chars = "ABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789";

export function TextScramble({
  text,
  className,
}: {
  text: string;
  className?: string;
}) {
  const [display, setDisplay] = useState(text);
  const [isHovering, setIsHovering] = useState(false);

  const scramble = useCallback(() => {
    let iteration = 0;
    const interval = setInterval(() => {
      setDisplay(
        text
          .split("")
          .map((char, i) => {
            if (char === " ") return " ";
            if (i < iteration) return text[i];
            return chars[Math.floor(Math.random() * chars.length)];
          })
          .join("")
      );
      iteration += 0.5;
      if (iteration >= text.length) {
        setDisplay(text);
        clearInterval(interval);
      }
    }, 30);
    return () => clearInterval(interval);
  }, [text]);

  useEffect(() => {
    if (isHovering) {
      const cleanup = scramble();
      return cleanup;
    } else {
      setDisplay(text);
    }
  }, [isHovering, scramble, text]);

  return (
    <span
      onMouseEnter={() => setIsHovering(true)}
      onMouseLeave={() => setIsHovering(false)}
      className={`relative inline-block ${className ?? ""}`}
    >
      {/* Invisible original text holds the width */}
      <span className="invisible">{text}</span>
      {/* Scrambled text overlaid on top */}
      <span className="absolute inset-0">{display}</span>
    </span>
  );
}
