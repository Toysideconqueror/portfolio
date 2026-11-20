import type { ElementType, ReactNode } from "react";

type Props = {
  children: ReactNode;
  className?: string;
  as?: ElementType;
  hover?: boolean;
  [key: string]: unknown;
};

export default function GlassCard({ children, className = "", as: Tag = "div", hover = true, ...rest }: Props) {
  return (
    <Tag className={`glass rounded-3xl ${hover ? "glass-hover" : ""} ${className}`} {...rest}>
      {children}
    </Tag>
  );
}
