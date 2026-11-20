import type { Metadata } from "next";
import { Inter, JetBrains_Mono } from "next/font/google";
import { profile } from "@/data/content";
import { tr } from "@/i18n/i18n";
import { LanguageProvider } from "@/i18n/LanguageProvider";
import "./globals.css";

const sans = Inter({ variable: "--font-sans-face", subsets: ["latin", "vietnamese"] });
const mono = JetBrains_Mono({ variable: "--font-mono-face", subsets: ["latin", "vietnamese"] });

const siteTitle = `${profile.name} · ${tr(profile.role, "en")}`;
const siteDescription = tr(profile.tagline, "vi");

export const metadata: Metadata = {
  // Địa chỉ gốc của trang, để ảnh xem trước (og:image) có đường dẫn đầy đủ
  metadataBase: new URL("https://toysideconqueror.pages.dev"),
  title: siteTitle,
  description: siteDescription,
  // Thẻ Open Graph: Messenger, Zalo, Facebook, LinkedIn... đọc các thẻ này để tạo khung xem trước khi gửi link
  openGraph: {
    type: "website",
    url: "/",
    title: siteTitle,
    description: siteDescription,
    siteName: profile.name,
    locale: "vi_VN",
    // Ghi rõ kích thước ảnh để Facebook/Zalo hiện ảnh ngay từ lần đọc đầu tiên
    images: [{ url: profile.avatar, width: 640, height: 640, type: "image/jpeg", alt: profile.name }],
  },
  twitter: {
    card: "summary",
    title: siteTitle,
    description: siteDescription,
    images: [profile.avatar],
  },
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
