# fansite-starter

配信者ファンサイトのスターターテンプレート兼デモ。Phase A の実装。

## 用途

- 新規配信者サイトの立ち上げ時にこのディレクトリをコピーして使う
- それ自体をデモサイトとしてデプロイ可能(GitHub Pages 想定)

## 立ち上げ手順

### 既存テンプレートのまま動かす(デモ確認)

```bash
pnpm install
pnpm dev         # http://localhost:3000
```

### 新規配信者サイトとして使う

1. このディレクトリをコピー → `apps/sites/<streamer-handle>/`
2. `config/streamer.config.ts` を編集(配信者名・チャンネルID・色等)
3. `pnpm install && pnpm dev`

## 静的ビルド(GitHub Pages 用)

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
app/                   Next.js App Router
  layout.tsx           html 骨格、ブランド色注入
  page.tsx             トップページ (Profile + Live + Donate)
  globals.css          Tailwind v4 + CSS変数
components/
  StreamerProfile.tsx  プロフィール表示
  LiveStreamPlayer.tsx YouTube/Twitch iframe 埋め込み
  DonateButton.tsx     支援ボタン (Phase A はプレースホルダ)
config/
  streamer.config.ts   配信者ごとの設定 (ここを書き換える)
```

## 実装状況 (Phase)

- [x] **Phase A**: 静的サイト骨格(プロフィール・ライブ埋め込み・支援ボタンプレースホルダ)
- [ ] **Phase B**: Stripe Checkout 連携(支援ボタンを機能化)
- [ ] **Phase C**: Webhook + 通知(Cloudflare Workers + Resend)
- [ ] **Phase D**: Stripe Connect での 20% 手数料分割
- [ ] **Phase E**: SDK 抽出(2件目構築時に `packages/` へ)

## 既知の制約

- **Twitch iframe**: `parent` パラメータに現在のホスト名を使うため、クライアントサイドで一度レンダリング後に表示(Loading… 一瞬表示)
- **YouTube オフライン UI**: プラットフォームデフォルトの粗い表示。Phase 2 で軽量検知導入後に改善可能
- **デモ用チャンネル**: YouTube/Twitch 公式チャンネルを仮設定。実際の配信者で使う際は差し替え必須

## 関連ドキュメント

- アーキテクチャ全体: `../../architecture.md`
- 事業戦略: `../../../../../../knowledge/industries/live-streaming/strategies/fan-site-service.md`
