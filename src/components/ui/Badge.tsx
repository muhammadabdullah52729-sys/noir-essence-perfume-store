import type { ProductBadge } from '@/data/products';

const badgeStyles: Record<ProductBadge, string> = {
  'New': 'bg-gold-400 text-noir-950',
  'Bestseller': 'bg-noir-900 text-gold-400 border border-gold-400/40',
  'Limited Edition': 'bg-gradient-to-r from-gold-600 to-gold-400 text-noir-950',
};

export default function Badge({ badge }: { badge: ProductBadge }) {
  return (
    <span
      className={`px-3 py-1 text-[10px] font-medium tracking-widest2 uppercase rounded-sm ${badgeStyles[badge]}`}
    >
      {badge}
    </span>
  );
}
