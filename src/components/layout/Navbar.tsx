import { useEffect, useState } from 'react';
import { Menu, X, ShoppingBag } from 'lucide-react';
import { useRouter, type Page } from '@/context/RouterContext';
import { useCart } from '@/context/CartContext';

const navItems: { label: string; page: Page }[] = [
  { label: 'Home', page: 'home' },
  { label: 'Collection', page: 'collection' },
  { label: 'About', page: 'about' },
  { label: 'Contact', page: 'contact' },
];

export default function Navbar() {
  const { page, navigate } = useRouter();
  const { count, openCart } = useCart();
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    onScroll();
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  const go = (p: Page) => {
    navigate(p);
    setMobileOpen(false);
  };

  return (
    <>
      <header
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
          scrolled
            ? 'glass py-3 shadow-lg shadow-black/30'
            : 'bg-transparent py-5'
        }`}
      >
        <nav className="max-w-7xl mx-auto px-5 sm:px-8 flex items-center justify-between">
          <button
  onClick={() => go('home')}
  className="flex items-center gap-3"
>
  <img
    src="/logo.png"
    alt="Noir Essence Logo"
    className="h-10 w-auto"
  />

  <div className="font-serif text-2xl sm:text-3xl tracking-wide leading-none">
    <span className="gold-text font-semibold">NOIR</span>{' '}
    <span className="text-white/90 font-light">ESSENCE</span>
  </div>
</button>

          <div className="hidden md:flex items-center gap-10">
            {navItems.map((item) => (
              <button
                key={item.page}
                onClick={() => go(item.page)}
                className={`text-xs tracking-widest2 uppercase font-light transition-colors duration-300 relative group ${
                  page === item.page ? 'text-gold-400' : 'text-white/80 hover:text-gold-300'
                }`}
              >
                {item.label}
                <span
                  className={`absolute -bottom-1.5 left-0 h-px bg-gold-400 transition-all duration-400 ${
                    page === item.page ? 'w-full' : 'w-0 group-hover:w-full'
                  }`}
                />
              </button>
            ))}
          </div>

          <div className="flex items-center gap-4">
            <button
              onClick={openCart}
              className="relative text-white/90 hover:text-gold-400 transition-colors duration-300"
              aria-label="Open cart"
            >
              <ShoppingBag size={20} />
              {count > 0 && (
                <span className="absolute -top-2 -right-2 bg-gold-400 text-noir-950 text-[10px] font-semibold w-4 h-4 rounded-full flex items-center justify-center">
                  {count}
                </span>
              )}
            </button>
            <button
              onClick={() => setMobileOpen(true)}
              className="md:hidden text-white/90 hover:text-gold-400 transition-colors"
              aria-label="Open menu"
            >
              <Menu size={22} />
            </button>
          </div>
        </nav>
      </header>

      {/* Mobile menu */}
      <div
        className={`fixed inset-0 z-[60] md:hidden transition-all duration-500 ${
          mobileOpen ? 'opacity-100 pointer-events-auto' : 'opacity-0 pointer-events-none'
        }`}
      >
        <div
          className="absolute inset-0 bg-noir-950/95 backdrop-blur-xl"
          onClick={() => setMobileOpen(false)}
        />
        <div
          className={`absolute right-0 top-0 h-full w-72 glass border-l border-gold-400/15 p-8 flex flex-col transition-transform duration-500 ${
            mobileOpen ? 'translate-x-0' : 'translate-x-full'
          }`}
        >
          <button
            onClick={() => setMobileOpen(false)}
            className="self-end text-white/70 hover:text-gold-400 mb-10"
            aria-label="Close menu"
          >
            <X size={24} />
          </button>
          {navItems.map((item, i) => (
            <button
              key={item.page}
              onClick={() => go(item.page)}
              className={`text-left font-serif text-2xl py-3 border-b border-white/5 transition-all duration-500 ${
                page === item.page ? 'text-gold-400' : 'text-white/80'
              }`}
              style={{ transitionDelay: `${i * 60}ms` }}
            >
              {item.label}
            </button>
          ))}
        </div>
      </div>
    </>
  );
}
