import { StreamerProfile } from "@/components/StreamerProfile";
import { LiveStreamPlayer } from "@/components/LiveStreamPlayer";
import { DonateButton } from "@/components/DonateButton";
import { streamerConfig } from "@/config/streamer.config";

export default function Home() {
  return (
    <main className="max-w-5xl mx-auto px-6 py-12 space-y-16">
      <StreamerProfile config={streamerConfig} />

      <section className="space-y-6">
        <h2 className="text-2xl font-bold">配信</h2>
        <div className="grid md:grid-cols-2 gap-6">
          <LiveStreamPlayer
            platform="youtube"
            channelId={streamerConfig.platforms.youtube.channelId}
          />
          <LiveStreamPlayer
            platform="twitch"
            channelName={streamerConfig.platforms.twitch.channelName}
          />
        </div>
      </section>

      {streamerConfig.donate.enabled && (
        <section className="space-y-6">
          <h2 className="text-2xl font-bold">支援する</h2>
          <DonateButton presets={streamerConfig.donate.presetAmounts} />
        </section>
      )}

      <footer className="text-center text-xs text-muted pt-12 border-t border-border">
        Powered by Fan Site Platform
      </footer>
    </main>
  );
}
