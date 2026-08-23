export default function SectionHeading({ eyebrow, title, description, align = 'left', light = false }) {
  const alignClass = align === 'center' ? 'text-center mx-auto' : 'text-left';
  return (
    <div className={`${alignClass} max-w-3xl ${align === 'center' ? 'mx-auto' : ''}`}>
      {eyebrow && (
        <div className={`text-xs uppercase tracking-[0.3em] mb-5 ${light ? 'text-white/70' : 'text-accent'}`}>
          — {eyebrow}
        </div>
      )}
      <h2 className={`font-serif text-4xl md:text-5xl lg:text-[3.25rem] leading-[1.05] font-light text-balance ${light ? 'text-white' : 'text-foreground'}`}>
        {title}
      </h2>
      {description && (
        <p className={`mt-6 text-lg leading-relaxed font-light text-balance ${light ? 'text-white/80' : 'text-muted-foreground'}`}>
          {description}
        </p>
      )}
    </div>
  );
}