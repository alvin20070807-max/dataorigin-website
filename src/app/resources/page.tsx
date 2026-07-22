import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "资源 - DataAgent",
  description: "文档、博客、案例",
};

export default function ResourcesPage() {
  return (
    <div className="min-h-screen flex items-center justify-center">
      <div className="text-center space-y-4">
        <h1 className="text-4xl font-bold text-foreground">资源页</h1>
        <p className="text-gray-500">文档与案例 — 即将填充内容</p>
      </div>
    </div>
  );
}
