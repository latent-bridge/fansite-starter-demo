"use client";

import { useEffect, useState } from "react";

type Props =
  | { platform: "youtube"; videoId: string }
  | { platform: "twitch"; channelName: string };

export function LiveChatEmbed(props: Props) {
  const [domain, setDomain] = useState<string>("");

  useEffect(() => {
    setDomain(window.location.hostname);
  }, []);

  const label = props.platform === "youtube" ? "YouTube Chat" : "Twitch Chat";

  if (!domain) {
    return (
      <ChatShell label={label}>
        <div className="w-full h-full flex items-center justify-center text-muted text-sm">
          Loading…
        </div>
      </ChatShell>
    );
  }

  const src =
    props.platform === "youtube"
      ? `https://www.youtube.com/live_chat?v=${props.videoId}&embed_domain=${domain}`
      : `https://www.twitch.tv/embed/${props.channelName}/chat?parent=${domain}&darkpopout`;

  return (
    <ChatShell label={label}>
      <iframe src={src} className="w-full h-full" />
    </ChatShell>
  );
}

function ChatShell({
  label,
  children,
}: {
  label: string;
  children: React.ReactNode;
}) {
  return (
    <div className="space-y-2">
      <div className="text-sm text-muted">{label}</div>
      <div className="h-[480px] bg-surface rounded-lg overflow-hidden border border-border">
        {children}
      </div>
    </div>
  );
}
