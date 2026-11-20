import type { Metadata } from "next";
import { Inter, JetBrains_Mono } from "next/font/google";
import { profile } from "@/data/content";
import { tr } from "@/i18n/i18n";
import { LanguageProvider } from "@/i18n/LanguageProvider";
import "./globals.css";

const sans = Inter({ variable: "--font-sans-face", subsets: ["latin", "vietnamese"] });
const mono = JetBrains_Mono({ variable: "--font-mono-face", subsets: ["latin", "vietnamese"] });

export const metadata: Metadata = {
  title: `${profile.name} · ${tr(profile.role, "en")}`,
  description: tr(profile.tagline, "vi"),
};

// Đặt theme trước khi trang hiển thị để không bị nháy màu
const themeScript = `(function(){try{var t=localStorage.getItem('theme');var d=t?t==='dark':window.matchMedia('(prefers-color-scheme: dark)').matches;if(d)document.documentElement.classList.add('dark');}catch(e){}})();`;

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="vi" suppressHydrationWarning>
      <head>
        <script dangerouslySetInnerHTML={{ __html: themeScript }} />
      </head>
      <body className={`${sans.variable} ${mono.variable} font-sans antialiased`}>
        <LanguageProvider>{children}</LanguageProvider>
      </body>
    </html>
  );
}
