import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "ループ君 | LINE復習サポート",
  description:
    "授業の受けっぱなしはもったいない。LINEで簡単に復習できるサポートサービス「ループ君」",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ja">
      <body className="antialiased">{children}</body>
    </html>
  );
}
