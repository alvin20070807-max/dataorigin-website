import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "定价 - DataAgent",
  description: "选择适合你团队的方案",
};

export default function PricingPage() {
  return (
    <div className="min-h-screen flex items-center justify-center">
      <div className="text-center space-y-4">
        <h1 className="text-4xl font-bold text-foreground">定价页</h1>
        <p className="text-gray-500">方案与价格 — 即将填充内容</p>
      </div>
    </div>
  );
}
