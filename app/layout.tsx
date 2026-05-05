import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "TikTok Sound Trend Detector – Catch Viral Audio Early",
  description: "Identify TikTok audio tracks gaining momentum before they become mainstream trends. Built for creators and agencies."
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <head>
        <script defer src="https://umami.microtool.dev/script.js" data-website-id="9a61f65d-e1f7-4518-8fb4-65ca720e0590"></script>
      </head>
      <body className="bg-[#0d1117] text-[#c9d1d9] antialiased">{children}</body>
    </html>
  );
}
