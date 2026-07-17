import Link from 'next/link';

interface ListingCardProps {
  id: string;
  title: string;
  category: string;
  date: string;
  readTime: string;
  excerpt: string;
  image: string;
  linkPrefix: string;
}

export default function ListingCard({ id, title, category, date, readTime, excerpt, image, linkPrefix }: ListingCardProps) {
  return (
    <article className="glass-panel rounded-xl overflow-hidden glass-panel-hover transition-all duration-300 flex flex-col group cursor-pointer h-full">
      <div className="relative image-zoom-container bg-surface-container border-b border-white/5 aspect-video overflow-hidden">
        <img src={image} alt={category} className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105" />
        <div className="absolute top-4 left-4">
          <span className="px-3 py-1 bg-[#101415]/80 backdrop-blur-md text-on-surface border border-white/10 rounded-full font-label-md text-[10px] uppercase tracking-wider">
            {category}
          </span>
        </div>
      </div>
      <div className="p-6 flex flex-col flex-grow">
        <div className="text-on-surface-variant text-xs mb-3 flex items-center justify-between">
          <span>{date}</span>
          <span>{readTime}</span>
        </div>
        <h3 className="font-headline-md text-[18px] font-semibold text-on-surface mb-3 group-hover:text-primary transition-colors leading-snug">
          {title}
        </h3>
        <p className="font-body-md text-sm text-on-surface-variant mb-6 flex-grow line-clamp-3">
          {excerpt}
        </p>
        <Link href={`${linkPrefix}${id}`} className="mt-auto inline-flex items-center gap-2 text-primary font-label-md text-sm group-hover:gap-3 transition-all duration-300">
          Read More <span className="material-symbols-outlined text-[18px]">arrow_forward</span>
        </Link>
      </div>
    </article>
  );
}
