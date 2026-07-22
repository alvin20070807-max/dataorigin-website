import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "登录 - DataAgent",
  description: "登录 DataAgent",
};

export default function LoginPage() {
  return (
    <div className="min-h-screen flex items-center justify-center">
      <div className="text-center space-y-4">
        <h1 className="text-4xl font-bold text-foreground">登录页</h1>
        <p className="text-gray-500">用户登录 — 即将填充内容</p>
      </div>
    </div>
  );
}
