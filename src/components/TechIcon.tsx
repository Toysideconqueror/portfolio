// Logo nhận diện của công cụ / ngôn ngữ / nền tảng, hiển thị cạnh tên.
//
// Vì sao luôn đúng màu theme: các icon của react-icons là SVG vẽ bằng `currentColor`,
// tức là "lấy màu chữ của phần tử cha". Chữ trên trang dùng màu --fg (đen ở theme sáng,
// trắng ở theme tối) hoặc --muted (xám), nên logo tự đổi màu theo, không cần CSS riêng.
//
// Thêm logo mới: tìm tên icon ở https://react-icons.github.io/react-icons rồi thêm 1 dòng
// vào `icons` bên dưới (khóa viết thường, trùng với chữ hiển thị trong content.ts).
// Tên nào không có trong bảng thì component trả về null: chỉ hiện chữ, không bị lỗi.

import type { IconType } from "react-icons";
import { FaEnvelope, FaJava, FaLinkedin } from "react-icons/fa";
import { FaMicrosoft } from "react-icons/fa6";
import {
  SiCloudflarepages,
  SiCoursera,
  SiCplusplus,
  SiCss,
  SiDocker,
  SiDotnet,
  SiGithub,
  SiGoogle,
  SiGooglecloud,
  SiGooglecolab,
  SiHtml5,
  SiJunit5,
  SiNextdotjs,
  SiPandas,
  SiPostman,
  SiPytest,
  SiPython,
  SiReact,
  SiScipy,
  SiSpringboot,
  SiTailwindcss,
} from "react-icons/si";
import { TbBrandCSharp, TbBrandMysql } from "react-icons/tb";
import { VscAzure } from "react-icons/vsc";

// Phần lớn lấy từ bộ Simple Icons (Si). Một số hãng (Microsoft, Oracle, LinkedIn) đã rút logo
// khỏi Simple Icons, nên lấy từ bộ khác: Tabler (Tb), Font Awesome (Fa), VS Code (Vsc).
const icons: Record<string, IconType> = {
  // Ngôn ngữ
  "c#": TbBrandCSharp,
  java: FaJava,
  "c/c++": SiCplusplus,
  python: SiPython,
  // Cloud & DevOps
  "google cloud": SiGooglecloud,
  "microsoft azure": VscAzure,
  azure: VscAzure,
  docker: SiDocker,
  "git/github": SiGithub,
  "cloudflare pages": SiCloudflarepages,
  // Web & Frameworks
  ".net": SiDotnet,
  "java web": FaJava,
  "next.js": SiNextdotjs,
  "tailwind css": SiTailwindcss,
  html5: SiHtml5,
  css3: SiCss,
  "spring boot": SiSpringboot,
  react: SiReact,
  // Cơ sở dữ liệu
  // SQL Server không có logo đơn sắc đẹp ở cỡ nhỏ, nên dùng logo Microsoft (hãng phát triển).
  "sql server": FaMicrosoft,
  mysql: TbBrandMysql,
  // Kiểm thử & Dữ liệu
  junit: SiJunit5,
  pytest: SiPytest,
  postman: SiPostman,
  pandas: SiPandas,
  scipy: SiScipy,
  "google colab": SiGooglecolab,
  // Tổ chức / nền tảng học
  "gdgoc fptu hcm": SiGoogle,
  coursera: SiCoursera,
  // Liên hệ
  github: SiGithub,
  linkedin: FaLinkedin,
  email: FaEnvelope,
};

// Tìm icon theo tên. Với chuỗi kiểu "IBM · Coursera" thì thử từng phần, ưu tiên phần cuối.
function find(name: string): IconType | undefined {
  const key = name.trim().toLowerCase();
  if (icons[key]) return icons[key];
  const parts = key.split("·").map((s) => s.trim()).reverse();
  for (const p of parts) if (icons[p]) return icons[p];
  return undefined;
}

export function hasTechIcon(name: string) {
  return find(name) !== undefined;
}

export default function TechIcon({ name, className = "" }: { name: string; className?: string }) {
  const Icon = find(name);
  if (!Icon) return null;
  // aria-hidden: chữ đứng cạnh đã nói tên rồi, trình đọc màn hình không cần đọc logo lần nữa.
  return <Icon aria-hidden focusable={false} className={`shrink-0 ${className}`} />;
}
