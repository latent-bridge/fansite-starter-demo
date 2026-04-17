"use client";

import { useState } from "react";

export function DonateButton({ presets }: { presets: number[] }) {
  const [message, setMessage] = useState<string | null>(null);

  const handleClick = (amount: number) => {
    setMessage(`¥${amount.toLocaleString()} の支援機能は現在準備中です(Phase B で実装予定)`);
    window.setTimeout(() => setMessage(null), 4000);
  };

  return (
    <div className="space-y-4">
      <div className="flex flex-wrap gap-3">
        {presets.map((amount) => (
          <button
            key={amount}
            onClick={() => handleClick(amount)}
            className="px-6 py-3 rounded-lg font-medium text-white border border-border transition hover:opacity-80"
            style={{ backgroundColor: "var(--brand)" }}
          >
            ¥{amount.toLocaleString()}
          </button>
        ))}
      </div>
      {message && <p className="text-sm text-muted">{message}</p>}
    </div>
  );
}
