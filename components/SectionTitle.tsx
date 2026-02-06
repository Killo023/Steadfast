interface SectionTitleProps {
  children: React.ReactNode;
  className?: string;
}

export function SectionTitle({ children, className = "" }: SectionTitleProps) {
  return (
    <div className={className}>
      <h2 className="text-3xl font-bold uppercase tracking-[0.15em] text-white md:text-4xl lg:text-5xl">
        {children}
      </h2>
      <div className="mt-4 h-1.5 w-20 bg-gradient-to-r from-accent to-accent-muted" aria-hidden />
    </div>
  );
}
