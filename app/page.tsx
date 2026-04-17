import { StreamerProfile } from "@/components/StreamerProfile";
import { LiveStreamPlayer } from "@/components/LiveStreamPlayer";
import { LiveChatEmbed } from "@/components/LiveChatEmbed";
import { DonateButton } from "@/components/DonateButton";
import { streamerConfig } from "@/config/streamer.config";

export default function Home() {
  const { youtube, twitch } = streamerConfig.platforms;

  return (
    <main className="max-w-6xl mx-auto px-6 py-12 space-y-16">
      <StreamerProfile config={streamerConfig} />

      <section className="space-y-4">
        <h2 className="text-2xl font-bold">YouTube</h2>
        <div className="grid md:grid-cols-[1fr_360px] gap-4">
          <LiveStreamPlayer
            platform="youtube"
            channelId={youtube.channelId}
            liveVideoId={youtube.liveVideoId}
          />
          {youtube.liveVideoId && (
            <LiveChatEmbed platform="youtube" videoId={youtube.liveVideoId} />
          )}
        </div>
      </section>

      <section className="space-y-4">
        <h2 className="text-2xl font-bold">Twitch</h2>
        <div className="grid md:grid-cols-[1fr_360px] gap-4">
          <LiveStreamPlayer
            platform="twitch"
            channelName={twitch.channelName}
          />
          <LiveChatEmbed platform="twitch" channelName={twitch.channelName} />
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
