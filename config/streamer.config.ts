export const streamerConfig = {
  name: "Demo Streamer",
  handle: "DEMO_STREAMER",
  bio: "ファンサイトスターターテンプレートのデモ。MIDNIGHT OPS デザイン。",
  brandColor: "#a3ffd6",

  platforms: {
    youtube: {
      // デモ用に Lofi Girl の常時ライブを利用
      channelId: "UCSJ4gkVC6NrvII8umztf0Ow",
      liveVideoId: "jfKfPfyJRdk",
    },
  },

  donate: {
    enabled: false,
    presetAmounts: [500, 1000, 3000, 5000],
  },
};

export type StreamerConfig = typeof streamerConfig;
