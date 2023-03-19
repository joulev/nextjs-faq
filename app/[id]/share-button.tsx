"use client";

import { Link, Check } from "lucide-react";
import { useState } from "react";

export default function ShareButton() {
  const [showCopied, setShowCopied] = useState(false);
  const [currentTimeout, setCurrentTimeout] = useState<NodeJS.Timeout | null>(null);
  function copy() {
    if (currentTimeout) clearTimeout(currentTimeout);
    navigator.clipboard.writeText(window.location.href);
    setShowCopied(true);
    setCurrentTimeout(setTimeout(() => setShowCopied(false), 1000));
  }
  return (
    <button onClick={copy} className="flex flex-row gap-2 justify-center">
      {showCopied ? (
        <>
          <Check size="18" /> Copied!
        </>
      ) : (
        <>
          <Link size="18" /> Copy link
        </>
      )}
    </button>
  );
}
