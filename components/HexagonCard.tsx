import { type ReactNode } from "react";

interface HexagonCardProps {
  children: ReactNode;
  className?: string;
  border?: boolean;
}

export function HexagonCard({ children, className = "", border = true }: HexagonCardProps) {
  return (
    <div
      className={`modern-card p-6 ${border ? "" : "border-0"} ${className}`}
    >
      {children}
    </div>
  );
}
