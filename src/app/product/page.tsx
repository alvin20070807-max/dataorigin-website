import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "简介 - DataAgent",
  description: "了解 DataAgent 企业级 AI 员工协作平台的核心能力",
};

export default function ProductPage() {
  return (
    <section className="relative flex min-h-screen items-center justify-center bg-gradient-to-br from-blue-50 via-indigo-50 to-purple-50 px-6">
      <div className="mx-auto max-w-3xl text-center space-y-8">
        <h1 className="text-4xl font-extrabold tracking-tight text-gray-900 sm:text-5xl md:text-6xl">
          DataAgent — 让 AI 成为你的数字员工团队
        </h1>
        <p className="mx-auto max-w-xl text-lg text-gray-600 sm:text-xl">
          一站式 AI 员工协作平台，帮助企业快速构建、部署和管理智能化工作流，释放团队生产力。
        </p>
        <div className="flex flex-col items-center gap-4 sm:flex-row sm:justify-center">
          <a
            href="/login"
            className="inline-flex items-center justify-center rounded-lg bg-blue-600 px-8 py-3 text-base font-semibold text-white shadow-md transition hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2"
          >
            免费试用
          </a>
          <a
            href="#features"
            className="inline-flex items-center justify-center rounded-lg border-2 border-blue-600 px-8 py-3 text-base font-semibold text-blue-600 transition hover:bg-blue-50 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2"
          >
            了解更多
          </a>
        </div>
      </div>
    </section>
  );
}
