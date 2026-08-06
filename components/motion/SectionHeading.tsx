import { Reveal } from "@/components/motion/Reveal";

interface SectionHeadingProps {
  eyebrow?: string;
  title: string;
  highlight?: string;
  description?: string;
  align?: "center" | "left";
  className?: string;
}

/**
 * Animated section heading:
 *  - mono readout eyebrow ("// 01 · ABOUT")
 *  - condensed uppercase H2 with gradient highlight
 *  - gradient rule + optional description
 */
export function SectionHeading({
  eyebrow,
  title,
  highlight,
  description,
  align = "center",
  className = "",
}: SectionHeadingProps) {
  const centered = align === "center";
  return (
    <div className={`${centered ? "text-center" : "text-left"} ${className}`}>
      {eyebrow && (
        <Reveal direction="fade">
          <p className={`readout mb-4 flex items-center gap-3 ${centered ? "justify-center" : ""}`}>
            <span className="h-px w-8 bg-accent/60" aria-hidden />
            <span className="text-accent">{eyebrow}</span>
            <span className="h-px w-8 bg-accent/60" aria-hidden />
          </p>
        </Reveal>
      )}
      <Reveal direction="up" distance={32}>
        <h2 className="text-4xl font-extrabold leading-[1.05] text-white md:text-5xl lg:text-6xl">
          {title}{" "}
          {highlight && <span className="text-gradient">{highlight}</span>}
        </h2>
      </Reveal>
      <Reveal direction="fade" delay={0.15}>
        <div
          className={`mt-5 flex items-center gap-2 ${centered ? "justify-center" : ""}`}
          aria-hidden
        >
          <span className="h-1 w-16 bg-gradient-to-r from-accent to-indigo-400" />
          <span className="h-1 w-2 bg-accent/50" />
          <span className="h-1 w-2 bg-accent/25" />
        </div>
      </Reveal>
      {description && (
        <Reveal direction="fade" delay={0.25}>
          <p
            className={`mt-6 max-w-2xl text-base text-slate-400 md:text-lg ${
              centered ? "mx-auto" : ""
            }`}
          >
            {description}
          </p>
        </Reveal>
      )}
    </div>
  );
}
