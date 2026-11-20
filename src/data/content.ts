// Toàn bộ nội dung của trang nằm ở đây. Thay nội dung mẫu bằng thông tin thật của bạn.

export const profile = {
  name: "Nguyễn Văn A",
  role: "Software Developer",
  tagline: "Xây dựng sản phẩm web gọn gàng, nhanh và dễ dùng.",
  location: "Việt Nam",
  email: "you@example.com",
  cvUrl: "#",
};

export const navItems = [
  { id: "about", label: "About" },
  { id: "skills", label: "Skills" },
  { id: "projects", label: "Projects" },
  { id: "experience", label: "Experience" },
  { id: "education", label: "Education" },
  { id: "contact", label: "Contact" },
];

export const about = {
  paragraphs: [
    "Đây là đoạn giới thiệu mẫu. Hãy viết vài câu về bạn: bạn là ai, bạn đang làm gì và điều gì khiến bạn hứng thú với công nghệ.",
    "Đoạn thứ hai có thể nói về cách bạn làm việc, những giá trị bạn theo đuổi, hoặc mục tiêu sắp tới.",
  ],
  facts: [
    { label: "Năm kinh nghiệm", value: "2+" },
    { label: "Dự án", value: "10+" },
    { label: "Chứng chỉ", value: "5" },
  ],
};

export const skills = [
  { group: "Ngôn ngữ", items: ["TypeScript", "JavaScript", "Python", "SQL"] },
  { group: "Frontend", items: ["React", "Next.js", "Tailwind CSS", "HTML/CSS"] },
  { group: "Backend", items: ["Node.js", "Express", "PostgreSQL", "REST API"] },
  { group: "Công cụ", items: ["Git", "Docker", "Figma", "Linux"] },
];

export const projects = [
  {
    title: "Dự án mẫu 1",
    description: "Mô tả ngắn về dự án: vấn đề nó giải quyết và vai trò của bạn.",
    tags: ["Next.js", "TypeScript"],
    demo: "#",
    repo: "#",
  },
  {
    title: "Dự án mẫu 2",
    description: "Mô tả ngắn về dự án: vấn đề nó giải quyết và vai trò của bạn.",
    tags: ["React", "Node.js"],
    demo: "#",
    repo: "#",
  },
  {
    title: "Dự án mẫu 3",
    description: "Mô tả ngắn về dự án: vấn đề nó giải quyết và vai trò của bạn.",
    tags: ["Python", "Data"],
    demo: "#",
    repo: "#",
  },
];

export const experience = [
  {
    role: "Vị trí công việc",
    company: "Tên công ty",
    period: "2024 – Hiện tại",
    points: ["Thành tựu hoặc trách nhiệm chính thứ nhất.", "Thành tựu hoặc trách nhiệm chính thứ hai."],
  },
  {
    role: "Thực tập sinh",
    company: "Tên công ty",
    period: "2023 – 2024",
    points: ["Thành tựu hoặc trách nhiệm chính thứ nhất.", "Thành tựu hoặc trách nhiệm chính thứ hai."],
  },
];

export const education = [
  {
    school: "Tên trường đại học",
    degree: "Cử nhân Công nghệ thông tin",
    period: "2020 – 2024",
  },
];

// Chứng chỉ Coursera: dán link chia sẻ (coursera.org/share/...) vào `url`
export const achievements = [
  { title: "Tên chứng chỉ 1", issuer: "Coursera", year: "2025", url: "#" },
  { title: "Tên chứng chỉ 2", issuer: "Coursera", year: "2025", url: "#" },
  { title: "Giải thưởng / thành tích", issuer: "Đơn vị trao", year: "2024", url: "#" },
];

export const socials = [
  { label: "GitHub", url: "https://github.com/Toysideconqueror" },
  { label: "LinkedIn", url: "#" },
  { label: "Email", url: "mailto:you@example.com" },
];
