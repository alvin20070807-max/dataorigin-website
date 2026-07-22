import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "简介 - DataAgent",
  description: "了解 DataAgent 企业级 AI 员工协作平台的核心能力",
};

export default function ProductPage() {
  return (
    <div className="min-h-screen flex items-center justify-center">
      <div className="text-center space-y-4">
        <h1 className="text-4xl font-bold text-foreground">简介页</h1>
        <p className="text-gray-500">产品核心介绍 — 即将填充内容</p>
      </div>
    </div>
  );
}
