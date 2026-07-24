import { Sparkles, Award, Leaf, ShieldCheck } from 'lucide-react';
import { useRouter } from '@/context/RouterContext';
import { products } from '@/data/products';
import { testimonials } from '@/data/testimonials';
import RippleButton from '@/components/ui/RippleButton';
import ScrollReveal from '@/components/ui/ScrollReveal';
import ProductCard from '@/components/ProductCard';
import Rating from '@/components/ui/Rating';
import { useScrollReveal } from '@/hooks/useScrollReveal';
import { useCountUp } from '@/hooks/useCountUp';

const heroImage = 'https://images.pexels.com/photos/29805437/pexels-photo-29805437.jpeg?auto=compress&cs=tinysrgb&w=1600';

const stats = [
  { value: 25, suffix: '+', label: 'Years of Craft' },
  { value: 150, suffix: 'K', label: 'Happy Clients' },
  { value: 48, suffix: '', label: 'Signature Scents' },
  { value: 32, suffix: '', label: 'Global Awards' },
];

const features = [
  { Icon: Sparkles, title: 'Handcrafted Perfection', text: 'Each fragrance is composed by master perfumers in small, deliberate batches.' },
  { Icon: Leaf, title: 'Rare Natural Ingredients', text: 'Sourced from the finest gardens and forests across the world, never compromised.' },
  { Icon: Award, title: 'Award-Winning Artistry', text: 'Recognized internationally for excellence in olfactory design and composition.' },
  { Icon: ShieldCheck, title: 'Cruelty-Free Luxury', text: 'Vegan, ethically produced, and never tested on animals — elegance with conscience.' },
];

function StatItem({ stat, start }: { stat: typeof stats[number]; start: boolean }) {
  const count = useCountUp(stat.value, 2000, start);
  return (
    <div className="text-center">
      <div className="font-serif text-4xl sm:text-5xl text-gold-300 mb-2">
        {count}{stat.suffix}
      </div>
      <div className="text-xs tracking-widest2 uppercase text-white/50 font-light">{stat.label}</div>
    </div>
  );
}

export default function Home() {
  const { navigate } = useRouter();
  const { ref: statsRef, visible: statsVisible } = useScrollReveal<HTMLDivElement>();
  const featured = products.slice(0, 4);

  return (
    <div className="page-enter">
      {/* Hero */}
      <section className="relative h-screen min-h-[640px] flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0">
          <img src={heroImage} alt="Luxury perfume" className="w-full h-full object-cover animate-scale-in" />
          <div className="absolute inset-0 bg-gradient-to-b from-noir-950/70 via-noir-950/50 to-noir-950" />
          <div className="absolute inset-0 bg-noir-950/30" />
        </div>

        <div className="relative z-10 text-center px-5 max-w-4xl mx-auto">
          <p className="text-xs sm:text-sm tracking-widest2 uppercase text-gold-300 mb-6 animate-fade-down" style={{ animationDelay: '0.2s', opacity: 0, animationFillMode: 'forwards' }}>
            Maison de Parfum · Est. 1999
          </p>
          <h1 className="font-serif text-4xl sm:text-6xl lg:text-7xl text-white leading-[1.1] mb-8 animate-fade-up" style={{ animationDelay: '0.4s', opacity: 0, animationFillMode: 'forwards' }}>
            Luxury Fragrances For<br />
            <span className="gold-shimmer italic">Timeless Elegance</span>
          </h1>
          <p className="text-base sm:text-lg text-white/70 font-light max-w-2xl mx-auto mb-10 leading-relaxed animate-fade-up" style={{ animationDelay: '0.6s', opacity: 0, animationFillMode: 'forwards' }}>
            Experience handcrafted perfumes that define confidence, sophistication and unforgettable moments.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center animate-fade-up" style={{ animationDelay: '0.8s', opacity: 0, animationFillMode: 'forwards' }}>
            <RippleButton onClick={() => navigate('collection')}>Explore Collection</RippleButton>
            <RippleButton variant="outline" onClick={() => navigate('about')}>Discover Our Story</RippleButton>
          </div>
        </div>

        <div className="absolute bottom-8 left-1/2 -translate-x-1/2 z-10">
          <div className="w-px h-12 bg-gradient-to-b from-gold-400/0 via-gold-400/50 to-gold-400/0 animate-pulse" />
        </div>
      </section>

      {/* Stats */}
      <section ref={statsRef} className="py-20 sm:py-28 px-5 sm:px-8 bg-noir-950 border-y border-white/5">
        <div className="max-w-6xl mx-auto grid grid-cols-2 lg:grid-cols-4 gap-10">
          {stats.map((s) => (
            <StatItem key={s.label} stat={s} start={statsVisible} />
          ))}
        </div>
      </section>

      {/* Featured */}
      <section className="py-20 sm:py-28 px-5 sm:px-8">
        <div className="max-w-7xl mx-auto">
          <ScrollReveal className="text-center mb-14">
            <p className="text-xs tracking-widest2 uppercase text-gold-400 mb-4">Curated Selection</p>
            <h2 className="font-serif text-3xl sm:text-5xl text-white mb-4">Featured Luxury Perfumes</h2>
            <p className="text-white/50 font-light max-w-xl mx-auto">
              Discover our most coveted fragrances, each a masterpiece of olfactory artistry.
            </p>
          </ScrollReveal>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {featured.map((p, i) => (
              <ScrollReveal key={p.id} delay={i * 100}>
                <ProductCard product={p} />
              </ScrollReveal>
            ))}
          </div>

          <div className="text-center mt-14">
            <RippleButton variant="outline" onClick={() => navigate('collection')}>
              View Full Collection
            </RippleButton>
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="py-20 sm:py-28 px-5 sm:px-8 bg-noir-900 border-y border-white/5">
        <div className="max-w-7xl mx-auto">
          <ScrollReveal className="text-center mb-14">
            <p className="text-xs tracking-widest2 uppercase text-gold-400 mb-4">The Noir Difference</p>
            <h2 className="font-serif text-3xl sm:text-5xl text-white">Why Choose Us</h2>
          </ScrollReveal>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {features.map((f, i) => (
              <ScrollReveal key={f.title} delay={i * 100}>
                <div className="glass p-8 rounded-sm h-full text-center card-lift">
                  <div className="w-14 h-14 mx-auto mb-6 rounded-full border border-gold-400/30 flex items-center justify-center text-gold-400">
                    <f.Icon size={24} strokeWidth={1.5} />
                  </div>
                  <h3 className="font-serif text-xl text-white mb-3">{f.title}</h3>
                  <p className="text-sm text-white/50 font-light leading-relaxed">{f.text}</p>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-20 sm:py-28 px-5 sm:px-8">
        <div className="max-w-7xl mx-auto">
          <ScrollReveal className="text-center mb-14">
            <p className="text-xs tracking-widest2 uppercase text-gold-400 mb-4">Words of Elegance</p>
            <h2 className="font-serif text-3xl sm:text-5xl text-white">Customer Testimonials</h2>
          </ScrollReveal>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {testimonials.map((t, i) => (
              <ScrollReveal key={t.id} delay={i * 100}>
                <div className="glass p-7 rounded-sm h-full flex flex-col card-lift">
                  <Rating value={t.rating} className="mb-4" />
                  <p className="text-sm text-white/70 font-light italic leading-relaxed flex-1 mb-6">
                    "{t.quote}"
                  </p>
                  <div className="flex items-center gap-3 pt-4 border-t border-white/5">
                    <img src={t.avatar} alt={t.name} className="w-10 h-10 rounded-full object-cover border border-gold-400/30" />
                    <div>
                      <div className="font-serif text-base text-white">{t.name}</div>
                      <div className="text-xs text-gold-300/70 font-light">{t.role}</div>
                    </div>
                  </div>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* Newsletter */}
      <section className="relative py-24 px-5 sm:px-8 overflow-hidden">
        <div className="absolute inset-0">
          <img
            src="https://images.pexels.com/photos/31771395/pexels-photo-31771395.jpeg?auto=compress&cs=tinysrgb&w=1600"
            alt=""
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-noir-950/85" />
        </div>
        <div className="relative z-10 max-w-2xl mx-auto text-center">
          <ScrollReveal>
            <p className="text-xs tracking-widest2 uppercase text-gold-400 mb-4">Join the Maison</p>
            <h2 className="font-serif text-3xl sm:text-5xl text-white mb-4">
              Subscribe to Our World
            </h2>
            <p className="text-white/60 font-light mb-8 max-w-md mx-auto">
              Be the first to discover new fragrances, private events, and exclusive offers reserved for our members.
            </p>
            <form
              onSubmit={(e) => e.preventDefault()}
              className="flex flex-col sm:flex-row gap-3 max-w-md mx-auto"
            >
              <input
                type="email"
                placeholder="Enter your email"
                className="flex-1 bg-white/5 border border-white/15 px-5 py-3.5 text-sm text-white placeholder-white/30 focus:border-gold-400/50 focus:outline-none transition-colors rounded-sm"
              />
              <RippleButton type="submit">Subscribe</RippleButton>
            </form>
          </ScrollReveal>
        </div>
      </section>

      {/* CTA */}
      <section className="py-24 px-5 sm:px-8 bg-gradient-to-b from-noir-950 to-noir-900">
        <div className="max-w-3xl mx-auto text-center">
          <ScrollReveal>
            <h2 className="font-serif text-3xl sm:text-5xl text-white mb-6">
              Begin Your <span className="gold-text italic">Signature Scent</span>
            </h2>
            <p className="text-white/60 font-light mb-10 max-w-lg mx-auto">
              Explore the collection and find the fragrance that becomes part of your story.
            </p>
            <RippleButton onClick={() => navigate('collection')}>Shop Now</RippleButton>
          </ScrollReveal>
        </div>
      </section>
    </div>
  );
}
