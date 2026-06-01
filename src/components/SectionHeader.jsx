export default function SectionHeader({ eyebrow, title, text, align = 'center' }) {
  const centered = align === 'center';

  return (
    <div className={`mx-auto mb-12 max-w-3xl ${centered ? 'text-center' : 'text-left'}`}>
      {eyebrow ? <p className="eyebrow mb-4">{eyebrow}</p> : null}
      <h2 className="text-balance text-3xl font-semibold tracking-tight text-white sm:text-4xl lg:text-5xl">{title}</h2>
      {text ? <p className="mt-5 text-lg leading-8 text-slate-400">{text}</p> : null}
    </div>
  );
}
