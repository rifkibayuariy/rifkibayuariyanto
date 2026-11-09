export default function SectionTitle({
  title,
  tag,
}: {
  title: string;
  tag?: string;
}) {
  return (
    <div className="mb-10 text-center group">
      {tag && (
        <span className="inline-block px-3 py-1 text-[11px] font-mono font-bold tracking-wider text-[#0d9488] bg-[#e6faf5] rounded-full uppercase mb-3 shadow-2xs">
          {tag}
        </span>
      )}
      <h2 className="text-3xl sm:text-4xl lg:text-5xl font-redhat font-bold text-slate-900 tracking-tight">
        {title}
      </h2>
      <div className="w-10 h-1 bg-[#20e9bd] rounded-full mx-auto mt-3 transition-all duration-400 ease-[cubic-bezier(0.16,1,0.3,1)] group-hover:w-20" />
    </div>
  );
}
