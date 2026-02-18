'use client';

import Copied from '@/components/svgs/Copied';
import Copy from '@/components/svgs/Copy';
import React, { useState } from 'react';

interface CodeCopyButtonProps {
  code: string;
}

export function CodeCopyButton({ code }: CodeCopyButtonProps) {
  const [copied, setCopied] = useState(false);

  const handleCopy = async () => {
    try {
      await navigator.clipboard.writeText(code);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    } catch {
      // fallback
    }
  };

  return (
    <button
      onClick={handleCopy}
      aria-label={copied ? 'Copied!' : 'Copy code'}
      className="absolute right-2 top-2 rounded p-1.5 text-muted-foreground opacity-0 transition-opacity hover:text-foreground group-hover:opacity-100"
    >
      {copied ? <Copied className="h-4 w-4" /> : <Copy className="h-4 w-4" />}
    </button>
  );
}
