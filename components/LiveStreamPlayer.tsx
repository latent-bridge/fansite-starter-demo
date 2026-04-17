"use client";

import { useEffect, useState } from "react";

type Props =
  | { platform: "youtube"; channelId: string; liveVideoId?: string }
  | { platform: "twitch"; channelName: string };

export function LiveStreamPlayer(props: Props) {
  const [parentDomain, setParentDomain] = useState<string>("");

  useEffect(() => {
    setParentDomain(window.location.hostname);
  }, []);

  const label = props.platform === "youtube" ? "YouTube" : "Twitch";

  if (props.platform === "twitch" && !parentDomain) {
    return (
      <PlayerShell label={label}>
        <div className="w-full h-full flex items-center justify-center text-muted text-sm">
          Loading…
        </div>
      </PlayerShell>
    );
  }

  const src =
    props.platform === "youtube"
      ? props.liveVideoId
        ? `https://www.youtube.com/embed/${props.liveVideoId}`
        : `https://www.youtube.com/embed/live_stream?channel=${props.channelId}`
      : `https://player.twitch.tv/?channel=${props.channelName}&parent=${parentDomain}`;

  return (
    <PlayerShell label={label}>
      <iframe
        src={src}
        className="w-full h-full"
        allowFullScreen
        allow="autoplay; encrypted-media; fullscreen"
      />
    </PlayerShell>
  );
}

function PlayerShell({
  label,
  children,
}: {
  label: string;
  children: React.ReactNode;
}) {
  return (
    <div className="space-y-2">
      <div className="text-sm text-muted">{label}</div>
      <div className="aspect-video bg-black rounded-lg overflow-hidden border border-border">
        {children}
      </div>
    </div>
  );
}
