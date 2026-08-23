export default function PageHero({ eyebrow, title, description, image }) {
  return (
    <section className="relative bg-primary text-white overflow-hidden">
      {image && (
        <div className="absolute inset-0">
          <img src={image} alt="" className="w-full h-full object-cover opacity-30" />
          <div className="absolute inset-0 bg-gradient-to-b from-primary/90 via-primary/85 to-primary" />
        </div>
      )}
      <div className="relative max-w-5xl mx-auto px-4 md:px-6 py-20 md:py-28 text-center">
        {eyebrow && (
          <div className="text-xs md:text-sm uppercase tracking-wider font-heading font-bold text-gold mb-5">
            {eyebrow}
          </div>
        )}
        <h1 className="font-heading font-black text-4xl md:text-5xl lg:text-6xl leading-[1.05] tracking-tight uppercase text-balance">
          {title}
        </h1>
        <div className="w-16 h-1 bg-gold mx-auto mt-6" />
        {description && (
          <p className="mt-8 text-base md:text-lg leading-relaxed max-w-2xl mx-auto text-white/90 text-balance">
            {description}
          </p>
        )}
      </div>
    </section>
  );
}