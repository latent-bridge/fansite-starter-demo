export const streamerConfig = {
  name: "Demo Streamer",
  handle: "demo",
  bio: "これは fansite-starter テンプレートのデモ表示です。実際の配信者サイトを立ち上げる際は、このファイルを書き換えてください。",
  brandColor: "#7c6fbd",

  platforms: {
    youtube: {
      // デモ用: YouTube公式チャンネル。本番は配信者のチャンネルIDに置き換え
      channelId: "UCBR8-60-B28hp2BmDPdntcQ",
    },
    twitch: {
      // デモ用: Twitch公式チャンネル。本番は配信者のチャンネル名に置き換え
      channelName: "twitch",
    },
  },

  donate: {
    enabled: true,
    presetAmounts: [500, 1000, 3000, 5000],
  },
};

export type StreamerConfig = typeof streamerConfig;
