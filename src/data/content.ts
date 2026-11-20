// Toàn bộ nội dung của trang nằm ở đây.
//
// Song ngữ: chỗ nào cần dịch thì viết { vi: "...", en: "..." }.
// Chỗ nào giống nhau ở cả hai ngôn ngữ (tên riêng, tên công nghệ, link...) thì để chuỗi thường.
// Chữ cố định của giao diện (tên mục, nút bấm) nằm ở src/i18n/i18n.ts.
//
// Link để "" (chuỗi rỗng) nghĩa là "chưa có": nút/link tương ứng sẽ tự ẩn.

import type { Text } from "@/i18n/i18n";

export const profile = {
  name: "Nguyễn Dương Thiên Ý",
  initials: "TY",
  // Ảnh đại diện nằm trong thư mục public/. File trong public/ được phục vụ ở gốc trang, nên đường dẫn là "/avatar.jpg".
  avatar: "/avatar.jpg",
  role: { vi: "Backend & Cloud Engineer", en: "Backend & Cloud Engineer" } as Text,
  tagline: {
    vi: "Biến ý tưởng thành sản phẩm chạy được, luôn bắt đầu từ góc nhìn của người dùng.",
    en: "I turn ideas into working products, always starting from the user's point of view.",
  } as Text,
  location: { vi: "TP. Hồ Chí Minh", en: "Ho Chi Minh City" } as Text,
  email: "Nguyenyk6@gmail.com",
  cvUrl: "",
};

// Thứ tự các mục trên thanh điều hướng. `id` phải trùng với id của <section>.
export const navItems = ["about", "skills", "projects", "experience", "education", "contact"] as const;
export type SectionId = (typeof navItems)[number];

export const about: { paragraphs: Text[]; facts: { label: Text; value: string }[] } = {
  paragraphs: [
    {
      vi: "Mình là Thiên Ý, sinh viên năm 3 ngành Kỹ thuật Phần mềm tại Đại học FPT TP.HCM, theo đuổi phát triển backend (C#/.NET) và cloud engineering. Mình đã xây các dự án full-stack trong trường, làm nghiên cứu về kiểm thử phần mềm, và điểm mạnh của mình là biến một ý tưởng thành sản phẩm chạy được, luôn đặt mình vào vị trí người dùng khi thiết kế từng tính năng.",
      en: "I'm Thien Y, a third-year Software Engineering student at FPT University HCMC, pursuing backend development (C#/.NET) and cloud engineering. I've built full-stack academic projects and done software testing research, and my strength is turning an idea into a working product, always putting myself in the user's shoes when designing each feature.",
    },
    {
      vi: "Trước đó mình từng là Rạp trưởng toàn thời gian tại Lotte Cinema, nơi mình học cách vận hành, dẫn dắt đội ngũ và chịu trách nhiệm trước kết quả. Hiện tại mình dồn toàn bộ thời gian cho phần mềm và cloud, đang tích lũy kinh nghiệm thực tế với Google Cloud, Microsoft Azure và Docker.",
      en: "Before that I was a full-time Cinema Leader at Lotte Cinema, where I learned to run operations, lead a team and own the results. Today I'm putting all of my time into software and cloud, building hands-on experience with Google Cloud, Microsoft Azure and Docker.",
    },
  ],
  facts: [
    { label: { vi: "GPA / 4.0", en: "GPA / 4.0" }, value: "3.5" },
    { label: { vi: "Học bổng toàn khóa", en: "Full-tuition scholarship" }, value: "100%" },
    { label: { vi: "Google Cloud Skill Badges", en: "Google Cloud Skill Badges" }, value: "17" },
  ],
};

// items là Text: tên công nghệ để chuỗi thường, chỗ nào cần dịch thì dùng { vi, en }.
export const skills: { group: Text; items: Text[] }[] = [
  { group: { vi: "Ngôn ngữ lập trình", en: "Programming languages" }, items: ["C#", "Java", "SQL", "C/C++"] },
  { group: "Cloud & DevOps", items: ["Google Cloud", "Microsoft Azure", "Docker", "Git/GitHub", "Cloudflare Pages"] },
  { group: "Web & Frameworks", items: [".NET", "Java Web", "Next.js", "Tailwind CSS", "HTML5", "CSS3"] },
  { group: { vi: "Cơ sở dữ liệu", en: "Databases" }, items: ["SQL Server", "MySQL"] },
  { group: { vi: "Kiểm thử & Dữ liệu", en: "Testing & Data" }, items: ["JUnit", "JaCoCo", "pytest", "coverage.py", "Postman", "pandas", "SciPy", "Google Colab"] },
  {
    group: { vi: "Môn học nền tảng", en: "Core coursework" },
    items: [
      "OOP",
      { vi: "Cấu trúc dữ liệu & giải thuật", en: "Data Structures & Algorithms" },
      { vi: "Cơ sở dữ liệu", en: "Databases" },
      { vi: "Kiểm thử phần mềm", en: "Software Testing" },
      { vi: "Yêu cầu phần mềm", en: "Software Requirements" },
    ],
  },
  {
    group: { vi: "Ngoại ngữ", en: "Spoken languages" },
    items: [
      { vi: "Tiếng Việt (bản ngữ)", en: "Vietnamese (native)" },
      { vi: "Tiếng Anh (khá, đọc tốt tài liệu kỹ thuật)", en: "English (upper-intermediate, reads technical docs)" },
    ],
  },
];

export const projects: { title: Text; description: Text; tags: string[]; demo: string; repo: string }[] = [
  {
    title: "LegacyVault",
    description: {
      vi: "Nền tảng quản lý di sản số theo cơ chế Dead Man's Switch: chủ sở hữu cất tài sản số vào kho mã hóa, nếu ngừng check-in thì hệ thống tự bàn giao cho người thừa kế qua các bước xác minh. Dự án nhóm môn SWP391, đã chạy thật trên Azure.",
      en: "A digital legacy platform built on a Dead Man's Switch: owners store digital assets in an encrypted vault, and if they stop checking in, the system hands them over to beneficiaries through verified steps. Team project for SWP391, running live on Azure.",
    },
    tags: ["Spring Boot", "Java", "React", "MySQL", "Docker", "Azure"],
    demo: "https://legacyvault.codes",
    repo: "https://github.com/azerc18/legacy-vault",
  },
  {
    title: { vi: "Độ tin cậy của unit test do LLM sinh", en: "Reliability of LLM-generated unit tests" },
    description: {
      vi: "Nghiên cứu nhóm (SWT301) so sánh 6 mô hình LLM trên 646 hàm Java/Python. Mình thiết kế pipeline 3 khâu (sinh test, chạy test và đo coverage, tổng hợp) và phân tích 3.876 kết quả bằng pandas và SciPy.",
      en: "Team research (SWT301) comparing 6 LLMs on 646 Java/Python functions. I designed a 3-stage pipeline (generate tests, run them and measure coverage, aggregate) and analyzed 3,876 results with pandas and SciPy.",
    },
    tags: ["Python", "pandas", "JUnit", "pytest", "LLM"],
    demo: "",
    repo: "https://github.com/Toysideconqueror/llm-unit-test-reliability",
  },
  {
    title: { vi: "SLR: truy vết yêu cầu – mã nguồn, LLM so với IR", en: "SLR: requirements-to-code traceability, LLM vs IR" },
    description: {
      vi: "Tổng quan tài liệu có hệ thống (SWR302), mình là nhóm trưởng: xây dựng search string và tiêu chí chọn bài, sàng lọc 1.577 bài trên IEEE Xplore theo PRISMA, đọc full-text 10 bài và đề xuất hướng fine-tune Llama 3.1 bằng QLoRA.",
      en: "Systematic literature review (SWR302) where I was team lead: built the search string and inclusion criteria, screened 1,577 IEEE Xplore papers following PRISMA, read 10 in full text and proposed fine-tuning Llama 3.1 with QLoRA.",
    },
    tags: ["Research", "PRISMA", "LLM", "Information Retrieval"],
    demo: "",
    repo: "https://github.com/Toysideconqueror/slr-traceability-llm-vs-ir",
  },
];

export const experience: { role: Text; company: string; period: Text; points: Text[] }[] = [
  {
    role: { vi: "Thành viên", en: "Member" },
    company: "GDGoC FPTU HCM",
    period: { vi: "09/2025 – Hiện tại", en: "09/2025 – Present" },
    points: [
      {
        vi: "Thành viên tích cực của câu lạc bộ Google Developer Groups on Campus tại Đại học FPT TP.HCM.",
        en: "Active member of Google Developer Groups on Campus at FPT University HCMC.",
      },
      {
        vi: "Tham gia chương trình QuanQuanGDP thông qua CLB.",
        en: "Joined the QuanQuanGDP program through the club.",
      },
    ],
  },
  {
    role: { vi: "Supervisor → Rạp trưởng (Cinema Leader)", en: "Supervisor → Cinema Leader" },
    company: "Lotte Cinema Vietnam",
    period: "07/2026 – 10/2026",
    points: [
      {
        vi: "Vào làm Supervisor tại rạp Moonlight (Thủ Đức), được lên Rạp trưởng ngay sau 2 tháng thử việc, phụ trách toàn bộ vận hành của một rạp trong chuỗi Lotte Cinema trên cả nước.",
        en: "Joined as Supervisor at the Moonlight Cinema (Thu Duc) and was promoted to Cinema Leader right after the 2-month probation, running the full operation of one cinema in Lotte Cinema's nationwide chain.",
      },
      {
        vi: "Được Tổng Giám đốc ủy quyền đại diện chi nhánh làm việc với cơ quan chức năng (PCCC, an toàn thực phẩm, thuế), ký hợp đồng lao động với nhân viên và làm việc với ban quản lý tòa nhà.",
        en: "Authorized by the General Director to represent the branch with authorities (fire safety, food safety, tax), sign labor contracts with staff and work with building management.",
      },
      {
        vi: "Chủ động nghỉ việc vào cuối 10/2026 để tập trung cho việc học và sự nghiệp phát triển phần mềm.",
        en: "Left voluntarily at the end of 10/2026 to focus on my studies and software development career.",
      },
    ],
  },
];

export const education: { school: Text; degree: Text; period: Text }[] = [
  {
    school: { vi: "Đại học FPT TP.HCM", en: "FPT University HCMC" },
    degree: {
      vi: "Cử nhân Kỹ thuật Phần mềm · GPA 3.5/4.0 · Học bổng 100% toàn khóa học",
      en: "B.Sc. in Software Engineering · GPA 3.5/4.0 · 100% full-tuition scholarship",
    },
    period: { vi: "09/2024 – Hiện tại", en: "09/2024 – Present" },
  },
];

// Chứng chỉ: dán link chia sẻ vào `url`. Để "" thì thẻ hiển thị nhưng không bấm được.
export const achievements: { title: Text; issuer: Text; year: string; url: string }[] = [
  { title: { vi: "Học bổng toàn phần 100% toàn khóa", en: "100% full-tuition scholarship" }, issuer: { vi: "Đại học FPT", en: "FPT University" }, year: "2024", url: "" },
  { title: "Google Cloud Skill Badges (17)", issuer: "Google Cloud", year: "", url: "https://www.skills.google/public_profiles/fa706d52-26e1-42c6-8d44-f658ada925d8" },
  { title: "Web Design for Everybody", issuer: "University of Michigan · Coursera", year: "", url: "https://coursera.org/verify/specialization/1ZBIAS5SLBMH" },
  { title: "UX Research and Design", issuer: "University of Michigan · Coursera", year: "", url: "https://coursera.org/share/7359a02162113b52ea3a223e39880ed5" },
  { title: "Generative AI Fundamentals", issuer: "IBM · Coursera", year: "", url: "https://coursera.org/verify/specialization/S5IPGAI4CNSJ" },
  { title: "Academic Skills for University Success", issuer: "University of Sydney · Coursera", year: "", url: "https://coursera.org/verify/specialization/FJZAM4AKEYN1" },
];

export const socials = [
  { label: "GitHub", url: "https://github.com/Toysideconqueror" },
  { label: "LinkedIn", url: "https://www.linkedin.com/in/thieny-iter" },
  { label: "Email", url: "mailto:Nguyenyk6@gmail.com" },
];
