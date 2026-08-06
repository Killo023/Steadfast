import type { ReactNode } from "react";

interface MarqueeProps {
  children: ReactNode;
  className?: string;
  speed?: string;
  ariaLabel?: string;
  reverse?: boolean;
}

/** Infinite horizontal marquee. Children are duplicated for a seamless loop. */
export function Marquee({
  children,
  className = "",
  speed = "32s",
  ariaLabel,
  reverse = false,
}: MarqueeProps) {
  return (
    <div className={`overflow-hidden whitespace-nowrap ${className}`} aria-label={ariaLabel}>
      <div
        className="marquee-track"
        style={{ animationDuration: speed, animationDirection: reverse ? "reverse" : "normal" }}
      >
        <div className="flex items-center shrink-0">{children}</div>
        <div className="flex items-center shrink-0" aria-hidden>
          {children}
        </div>
      </div>
    </div>
  );
}
