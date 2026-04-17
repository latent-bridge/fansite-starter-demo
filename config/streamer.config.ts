export const streamerConfig = {
  name: "Live Stream Demo",
  handle: "livedemo",
  bio: "実際のライブ配信を埋め込んだデモ表示。YouTube は Lofi Girl の 24/7 ライブ配信、Twitch は xQc のチャンネルを表示しています。",
  brandColor: "#7c6fbd",

  platforms: {
    youtube: {
      // Lofi Girl - 24時間365日ライブ配信
      channelId: "UCSJ4gkVC6NrvII8umztf0Ow",
    },
    twitch: {
      // xQc - トップ配信者
      channelName: "xqc",
    },
  },

  donate: {
    enabled: true,
    presetAmounts: [500, 1000, 3000, 5000],
  },
};

export type StreamerConfig = typeof streamerConfig;
