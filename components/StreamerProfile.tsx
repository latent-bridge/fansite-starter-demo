import type { StreamerConfig } from "@/config/streamer.config";

export function StreamerProfile({ config }: { config: StreamerConfig }) {
  return (
    <header className="space-y-3">
      <h1
        className="text-4xl font-bold tracking-tight"
        style={{ color: "var(--brand)" }}
      >
        {config.name}
      </h1>
      <p className="text-sm text-muted">@{config.handle}</p>
      <p className="text-base leading-relaxed max-w-2xl">{config.bio}</p>
    </header>
  );
}
