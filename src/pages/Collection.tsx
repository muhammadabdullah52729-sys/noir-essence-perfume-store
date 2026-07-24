import { useState, useMemo } from 'react';
import { Search } from 'lucide-react';
import { products, categories, type ProductCategory } from '@/data/products';
import ProductCard from '@/components/ProductCard';
import ScrollReveal from '@/components/ui/ScrollReveal';

type Filter = 'All' | ProductCategory;

export default function Collection() {
  const [filter, setFilter] = useState<Filter>('All');
  const [query, setQuery] = useState('');

  const filtered = useMemo(() => {
    return products.filter((p) => {
      const matchesCategory = filter === 'All' || p.category === filter;
      const matchesQuery =
        p.name.toLowerCase().includes(query.toLowerCase()) ||
        p.description.toLowerCase().includes(query.toLowerCase());
      return matchesCategory && matchesQuery;
    });
  }, [filter, query]);

  const filters: Filter[] = ['All', ...categories];

  return (
    <div className="page-enter pt-28 sm:pt-32 pb-20 px-5 sm:px-8">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <ScrollReveal className="text-center mb-12">
          <p className="text-xs tracking-widest2 uppercase text-gold-400 mb-4">The Collection</p>
          <h1 className="font-serif text-4xl sm:text-6xl text-white mb-4">
            Signature <span className="gold-text italic">Fragrances</span>
          </h1>
          <p className="text-white/50 font-light max-w-xl mx-auto">
            Eight handcrafted perfumes, each a distinct expression of luxury and artistry.
          </p>
        </ScrollReveal>

        {/* Search + Filters */}
        <div className="flex flex-col lg:flex-row gap-6 mb-12 items-center justify-between">
          <div className="relative w-full lg:max-w-xs">
            <Search size={18} className="absolute left-4 top-1/2 -translate-y-1/2 text-white/40" />
            <input
              type="text"
              value={query}
              onChange={(e) => setQuery(e.target.value)}
              placeholder="Search fragrances..."
              className="w-full bg-noir-900 border border-white/10 pl-11 pr-4 py-3 text-sm text-white placeholder-white/30 focus:border-gold-400/50 focus:outline-none transition-colors rounded-sm"
            />
          </div>

          <div className="flex flex-wrap gap-2 justify-center">
            {filters.map((f) => (
              <button
                key={f}
                onClick={() => setFilter(f)}
                className={`px-5 py-2.5 text-xs tracking-widest2 uppercase font-light rounded-sm transition-all duration-300 ${
                  filter === f
                    ? 'btn-gold'
                    : 'border border-white/10 text-white/60 hover:border-gold-400/40 hover:text-gold-300'
                }`}
              >
                {f}
              </button>
            ))}
          </div>
        </div>

        {/* Grid */}
        {filtered.length === 0 ? (
          <div className="text-center py-20">
            <p className="text-white/40 font-light">No fragrances found. Try a different search.</p>
          </div>
        ) : (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
            {filtered.map((p, i) => (
              <ScrollReveal key={p.id} delay={i * 80}>
                <ProductCard product={p} />
              </ScrollReveal>
            ))}
          </div>
        )}
      </div>
    </div>
  );
}
