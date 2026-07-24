import { Star } from 'lucide-react';

interface RatingProps {
  value: number;
  size?: number;
  className?: string;
}

export default function Rating({ value, size = 14, className = '' }: RatingProps) {
  return (
    <div className={`flex items-center gap-0.5 ${className}`}>
      {[1, 2, 3, 4, 5].map((i) => (
        <Star
          key={i}
          size={size}
          className={
            i <= Math.round(value)
              ? 'fill-gold-400 text-gold-400'
              : 'fill-none text-gold-400/30'
          }
        />
      ))}
      <span className="ml-1.5 text-xs text-gold-300/80 font-light">{value.toFixed(1)}</span>
    </div>
  );
}
