interface SectionTitleProps {
  children: React.ReactNode;
  className?: string;
}

export function SectionTitle({ children, className = "" }: SectionTitleProps) {
  return (
    <h2 className={`text-3xl font-bold uppercase tracking-wide text-white md:text-4xl lg:text-5xl ${className}`}>
      {children}
    </h2>
  );
}
