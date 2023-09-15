"use client";

import { Check, Copy } from "lucide-react";
import { useState } from "react";

export function CopyButton({ className }: { className?: string }) {
  const [showCopied, setShowCopied] = useState(false);
  const [currentTimeout, setCurrentTimeout] = useState<NodeJS.Timeout | null>(null);
  function copy() {
    if (currentTimeout) clearTimeout(currentTimeout);
    navigator.clipboard.writeText(window.location.href);
    setShowCopied(true);
    setCurrentTimeout(setTimeout(() => setShowCopied(false), 1000));
  }
  return (
    <button onClick={copy} className={className}>
      {showCopied ? (
        <>
          <Check className="nd-inline nd-w-4 nd-h-4 nd-mr-2" />
          Copied!
        </>
      ) : (
        <>
          <Copy className="nd-inline nd-w-4 nd-h-4 nd-mr-2" />
          Copy link
        </>
      )}
    </button>
  );
}
