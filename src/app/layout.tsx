import "globals.css";
import { TopNavBar } from "components/TopNavBar";
import { Analytics } from "@vercel/analytics/react";

export const metadata = {
  title: "OpenResume - 免费开源简历生成器与解析器",
  description:
    "OpenResume是一款免费、开源且功能强大的简历生成器，它允许任何人只需简单3步即可创建一份现代专业简历。对于已有简历的人士，OpenResume还提供了简历解析器以帮助测试和确认其在ATS（招聘管理系统）中的可读性。",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>
        <TopNavBar />
        {children}
        <Analytics />
      </body>
    </html>
  );
}
