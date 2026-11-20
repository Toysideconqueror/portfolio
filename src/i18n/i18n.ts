// Hệ thống song ngữ VI/EN.
// - Chữ cố định của giao diện (nút, tiêu đề mục...) nằm trong `ui` bên dưới.
// - Nội dung cá nhân nằm trong src/data/content.ts, mỗi chuỗi có thể là
//   một chuỗi thường (giống nhau ở cả hai ngôn ngữ, ví dụ "TypeScript")
//   hoặc một cặp { vi: "...", en: "..." }.

export const LANGS = ["vi", "en"] as const;
export type Lang = (typeof LANGS)[number];
export const DEFAULT_LANG: Lang = "vi";

export type Text = string | { vi: string; en: string };

export function isLang(v: unknown): v is Lang {
  return typeof v === "string" && (LANGS as readonly string[]).includes(v);
}

export function tr(text: Text, lang: Lang): string {
  return typeof text === "string" ? text : text[lang];
}

const vi = {
  nav: {
    about: "Giới thiệu",
    skills: "Kỹ năng",
    projects: "Dự án",
    experience: "Kinh nghiệm",
    education: "Học vấn",
    contact: "Liên hệ",
    openMenu: "Mở menu",
    switchTheme: "Chuyển chế độ sáng/tối",
    switchLang: "Chuyển ngôn ngữ",
    home: "Về đầu trang",
  },
  hero: {
    available: "Sẵn sàng cho cơ hội mới",
    greeting: "Xin chào, tôi là",
    viewProjects: "Xem dự án",
    contact: "Liên hệ",
  },
  sections: {
    about: "Về tôi",
    skills: "Kỹ năng kỹ thuật",
    projects: "Dự án nổi bật",
    experience: "Kinh nghiệm",
    education: "Học vấn & thành tích",
    contact: "Liên hệ",
  },
  projects: { image: "Ảnh dự án", demo: "Demo", source: "Mã nguồn" },
  education: { viewCert: "Xem chứng chỉ →" },
  contact: {
    heading: "Cùng làm điều gì đó nhé?",
    body: "Tôi luôn sẵn lòng trò chuyện về dự án, cơ hội việc làm hoặc chỉ đơn giản là chào hỏi.",
    formTitle: "Để lại lời nhắn",
    name: "Tên của bạn",
    namePlaceholder: "Không bắt buộc",
    email: "Email của bạn",
    emailPlaceholder: "ban@vidu.com",
    emailHint: "Tôi sẽ trả lời về địa chỉ này.",
    message: "Lời nhắn",
    messagePlaceholder: "Bạn muốn trao đổi về điều gì?",
    send: "Gửi lời nhắn",
    sending: "Đang gửi...",
    success: "Đã gửi! Tôi sẽ phản hồi qua email của bạn sớm nhất có thể.",
    error: "Gửi chưa được. Bạn thử lại, hoặc gửi mail trực tiếp cho tôi nhé.",
    orEmail: "Hoặc gửi mail trực tiếp",
    subject: "Lời nhắn mới từ portfolio",
  },
};

type Dict = typeof vi;

const en: Dict = {
  nav: {
    about: "About",
    skills: "Skills",
    projects: "Projects",
    experience: "Experience",
    education: "Education",
    contact: "Contact",
    openMenu: "Open menu",
    switchTheme: "Toggle light/dark mode",
    switchLang: "Switch language",
    home: "Back to top",
  },
  hero: {
    available: "Open to new opportunities",
    greeting: "Hi, I'm",
    viewProjects: "View projects",
    contact: "Get in touch",
  },
  sections: {
    about: "About me",
    skills: "Technical skills",
    projects: "Featured projects",
    experience: "Experience",
    education: "Education & achievements",
    contact: "Contact",
  },
  projects: { image: "Project image", demo: "Demo", source: "Source" },
  education: { viewCert: "View certificate →" },
  contact: {
    heading: "Let's build something together?",
    body: "I'm always happy to chat about projects, job opportunities, or just to say hi.",
    formTitle: "Leave a message",
    name: "Your name",
    namePlaceholder: "Optional",
    email: "Your email",
    emailPlaceholder: "you@example.com",
    emailHint: "I'll reply to this address.",
    message: "Message",
    messagePlaceholder: "What would you like to talk about?",
    send: "Send message",
    sending: "Sending...",
    success: "Sent! I'll get back to you by email as soon as I can.",
    error: "Couldn't send it. Please try again, or email me directly.",
    orEmail: "Or email me directly",
    subject: "New message from your portfolio",
  },
};

export const ui: Record<Lang, Dict> = { vi, en };
