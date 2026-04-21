# fansite-starter — MIDNIGHT OPS

配信者ファンサイトのスターターテンプレート兼デモ。
**MIDNIGHT OPS** デザイン (ダーク × ネオンミント、ミッションブリーフィング風 UI) を Next.js (App Router) + TypeScript + Tailwind CSS v4 で実装。

`apps/sites/kotaruru0603/` (ruru の本番想定サイト) と同じ実装をベースにしており、ここから個別配信者向けにコピーして使う想定。

## 用途

- 新規配信者サイトの立ち上げ時にこのディレクトリをコピーして使う
- それ自体をデモサイトとしてデプロイ可能 (GitHub Pages 想定)
- ライブ配信プラットフォームは **YouTube オンリー** 想定 (Twitch は使わない)

## 立ち上げ手順

### 既存テンプレートのまま動かす (デモ確認)

```bash
pnpm install
pnpm dev    # http://localhost:3000
```

### 新規配信者サイトとして使う

1. このディレクトリをコピー → `apps/sites/<streamer-handle>/`
2. `config/streamer.config.ts` を編集 (チャンネル ID / liveVideoId / ブランド色)
3. `lib/data.ts` の `STREAMER` 値 (name / nameRomaji / handle / bio / stats / games / socials) を実値に置換
4. ブランドコピー (HOME ヒーローや NEXT MISSION 等) を必要に応じて編集
5. `pnpm install && pnpm dev`

## 静的ビルド (GitHub Pages 用)

```bash
pnpm build
# out/ に静的ファイルが生成される
```

サブパスにデプロイする場合は `NEXT_PUBLIC_BASE_PATH` を設定:

```bash
NEXT_PUBLIC_BASE_PATH=/fansite-demo pnpm build
```

## ディレクトリ構成

```
app/
  layout.tsx          全体シェル (Topbar / Footer)
  page.tsx            HOME (ヒーロー + スタッツ + NEXT MISSION + GAMES)
  stream/page.tsx     STREAM (YouTube embed + 本物のライブチャット)
  archive/page.tsx    ARCHIVE (フィルタ ALL / FPS / CHILL)
  schedule/page.tsx   SCHEDULE (WEEK / MONTH 切替)
  goods/page.tsx      GOODS (プレースホルダ画像)
  fanart/page.tsx     FAN ART (Masonry プレースホルダ)
  member/page.tsx     MEMBER (3 tier カード)
components/           Topbar / Footer / LiveBadge / Button / Countdown / YouTubePlayer / YouTubeChat / ...
config/
  streamer.config.ts  配信者設定 (YouTube channelId / liveVideoId)
lib/
  data.ts             ストリーマー情報 + デモ用データ (アーカイブ・グッズ・ファンアート 等)
```

## YouTube 埋め込みの規約配慮

- **プレイヤー iframe は素のまま**、被さる装飾は禁止 (LIVE バッジ・視聴者数・HUD はプレイヤー外の独立パネル)
- **チャットは本物の YouTube ライブチャット iframe** (`live_chat?v=...&embed_domain=<hostname>`) を使用
- 第三者 Cookie 制限で iframe 内ログインが効かないブラウザ向けに **Storage Access API (`requestStorageAccessFor`)** で許可ボタンを提供 (Chromium 系のみ)
- それ以外のブラウザは「YouTube で開く」誘導でフォールバック

## 実装状況 (Phase)

- [x] **Phase A**: 静的サイト骨格 (MIDNIGHT OPS デザイン全 7 ページ + 本物ライブチャット)
- [ ] **Phase B**: Stripe Checkout 連携 (支援ボタンを機能化)
- [ ] **Phase C**: Webhook + 通知 (Cloudflare Workers + Resend)
- [ ] **Phase D**: Stripe Connect での 20% 手数料分割
- [ ] **Phase E**: SDK 抽出 (2 件目構築時に `packages/` へ)

## 既知の制約

- **YouTube オフライン UI**: プラットフォームデフォルトの粗い表示。Phase 2 で軽量検知導入後に改善可能
- **デモ用チャンネル**: `streamer.config.ts` は Lofi Girl の常時ライブを仮設定。実配信者で使う際は差し替え必須
- **ライブチャット送信**: Safari / Firefox では iframe からのログインが第三者 Cookie 制限で動作しない (YouTube 側の制約)

## 関連ドキュメント

- アーキテクチャ全体: `../../architecture.md`
- 本番実装の参考: `../sites/kotaruru0603/` (公開: https://latent-bridge.github.io/kotaruru0603/)
- 事業戦略: `../../../../../../knowledge/industries/live-streaming/strategies/fan-site-service.md`
