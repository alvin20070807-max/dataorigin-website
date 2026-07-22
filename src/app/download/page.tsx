import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "下载 - DataAgent",
  description: "下载 DataAgent 客户端",
};

export default function DownloadPage() {
  return (
    <div className="min-h-screen flex items-center justify-center">
      <div className="text-center space-y-4">
        <h1 className="text-4xl font-bold text-foreground">下载页</h1>
        <p className="text-gray-500">客户端下载 — 即将填充内容</p>
      </div>
    </div>
  );
}
