import { ShoppingBag } from 'lucide-react';
import type { Product } from '@/data/products';
import { useCart } from '@/context/CartContext';
import Badge from '@/components/ui/Badge';
import Rating from '@/components/ui/Rating';

export default function ProductCard({ product }: { product: Product }) {
  const { add } = useCart();

  return (
    <div className="card-lift group bg-noir-900 border border-white/5 rounded-sm overflow-hidden flex flex-col">
      <div className="img-zoom relative aspect-[4/5] overflow-hidden">
        <img
          src={product.image}
          alt={product.name}
          loading="lazy"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-noir-950/80 via-transparent to-transparent" />
        <div className="absolute top-4 left-4 z-10">
          <Badge badge={product.badge} />
        </div>
        <button
          onClick={() => add(product)}
          className="absolute bottom-4 left-4 right-4 btn-gold py-3 text-xs tracking-widest2 uppercase font-medium rounded-sm flex items-center justify-center gap-2 opacity-0 translate-y-4 group-hover:opacity-100 group-hover:translate-y-0 transition-all duration-500"
        >
          <ShoppingBag size={15} />
          Add to Cart
        </button>
      </div>

      <div className="p-5 flex flex-col flex-1">
        <div className="flex items-start justify-between gap-2 mb-2">
          <h3 className="font-serif text-xl text-white leading-tight">{product.name}</h3>
          <span className="font-serif text-xl text-gold-300 whitespace-nowrap">${product.price}</span>
        </div>
        <p className="text-sm text-white/50 font-light leading-relaxed mb-3 flex-1">
          {product.description}
        </p>
        <Rating value={product.rating} />
      </div>
    </div>
  );
}
