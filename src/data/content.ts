// Toàn bộ nội dung của trang nằm ở đây. Thay nội dung mẫu bằng thông tin thật của bạn.
//
// Song ngữ: chỗ nào cần dịch thì viết { vi: "...", en: "..." }.
// Chỗ nào giống nhau ở cả hai ngôn ngữ (tên riêng, tên công nghệ, link...) thì để chuỗi thường.
// Chữ cố định của giao diện (tên mục, nút bấm) nằm ở src/i18n/i18n.ts.

import type { Text } from "@/i18n/i18n";

export const profile = {
  name: "Nguyễn Văn A",
  initials: "TY",
  role: { vi: "Lập trình viên phần mềm", en: "Software Developer" } as Text,
  tagline: {
    vi: "Xây dựng sản phẩm web gọn gàng, nhanh và dễ dùng.",
    en: "I build clean, fast and easy-to-use web products.",
  } as Text,
  location: { vi: "Việt Nam", en: "Vietnam" } as Text,
  email: "you@example.com",
  cvUrl: "#",
};

// Thứ tự các mục trên thanh điều hướng. `id` phải trùng với id của <section>.
export const navItems = ["about", "skills", "projects", "experience", "education", "contact"] as const;
export type SectionId = (typeof navItems)[number];

export const about: { paragraphs: Text[]; facts: { label: Text; value: string }[] } = {
  paragraphs: [
    {
      vi: "Đây là đoạn giới thiệu mẫu. Hãy viết vài câu về bạn: bạn là ai, bạn đang làm gì và điều gì khiến bạn hứng thú với công nghệ.",
      en: "This is a sample introduction. Write a few sentences about yourself: who you are, what you do, and what excites you about technology.",
    },
    {
      vi: "Đoạn thứ hai có thể nói về cách bạn làm việc, những giá trị bạn theo đuổi, hoặc mục tiêu sắp tới.",
      en: "The second paragraph can describe how you work, the values you care about, or your next goals.",
    },
  ],
  facts: [
    { label: { vi: "Năm kinh nghiệm", en: "Years of experience" }, value: "2+" },
    { label: { vi: "Dự án", en: "Projects" }, value: "10+" },
    { label: { vi: "Chứng chỉ", en: "Certificates" }, value: "5" },
  ],
};

export const skills: { group: Text; items: string[] }[] = [
  { group: { vi: "Ngôn ngữ", en: "Languages" }, items: ["TypeScript", "JavaScript", "Python", "SQL"] },
  { group: "Frontend", items: ["React", "Next.js", "Tailwind CSS", "HTML/CSS"] },
  { group: "Backend", items: ["Node.js", "Express", "PostgreSQL", "REST API"] },
  { group: { vi: "Công cụ", en: "Tools" }, items: ["Git", "Docker", "Figma", "Linux"] },
];

const sampleDesc: Text = {
  vi: "Mô tả ngắn về dự án: vấn đề nó giải quyết và vai trò của bạn.",
  en: "A short description: the problem it solves and your role in it.",
};

export const projects: { title: Text; description: Text; tags: string[]; demo: string; repo: string }[] = [
  { title: { vi: "Dự án mẫu 1", en: "Sample project 1" }, description: sampleDesc, tags: ["Next.js", "TypeScript"], demo: "#", repo: "#" },
  { title: { vi: "Dự án mẫu 2", en: "Sample project 2" }, description: sampleDesc, tags: ["React", "Node.js"], demo: "#", repo: "#" },
  { title: { vi: "Dự án mẫu 3", en: "Sample project 3" }, description: sampleDesc, tags: ["Python", "Data"], demo: "#", repo: "#" },
];

const samplePoints: Text[] = [
  { vi: "Thành tựu hoặc trách nhiệm chính thứ nhất.", en: "First key achievement or responsibility." },
  { vi: "Thành tựu hoặc trách nhiệm chính thứ hai.", en: "Second key achievement or responsibility." },
];

export const experience: { role: Text; company: string; period: Text; points: Text[] }[] = [
  {
    role: { vi: "Vị trí công việc", en: "Job title" },
    company: "Company name",
    period: { vi: "2024 – Hiện tại", en: "2024 – Present" },
    points: samplePoints,
  },
  {
    role: { vi: "Thực tập sinh", en: "Intern" },
    company: "Company name",
    period: "2023 – 2024",
    points: samplePoints,
  },
];

export const education: { school: Text; degree: Text; period: string }[] = [
  {
    school: { vi: "Tên trường đại học", en: "University name" },
    degree: { vi: "Cử nhân Công nghệ thông tin", en: "B.Sc. in Information Technology" },
    period: "2020 – 2024",
  },
];

// Chứng chỉ Coursera: dán link chia sẻ (coursera.org/share/...) vào `url`
export const achievements: { title: Text; issuer: Text; year: string; url: string }[] = [
  { title: { vi: "Tên chứng chỉ 1", en: "Certificate name 1" }, issuer: "Coursera", year: "2025", url: "#" },
  { title: { vi: "Tên chứng chỉ 2", en: "Certificate name 2" }, issuer: "Coursera", year: "2025", url: "#" },
  { title: { vi: "Giải thưởng / thành tích", en: "Award / achievement" }, issuer: { vi: "Đơn vị trao", en: "Issuer" }, year: "2024", url: "#" },
];

export const socials = [
  { label: "GitHub", url: "https://github.com/Toysideconqueror" },
  { label: "LinkedIn", url: "#" },
  { label: "Email", url: "mailto:you@example.com" },
];
