import { Target, Eye, Gem, Heart, Globe, Award } from 'lucide-react';
import ScrollReveal from '@/components/ui/ScrollReveal';
import { useScrollReveal } from '@/hooks/useScrollReveal';
import { useCountUp } from '@/hooks/useCountUp';

const heroImage = 'https://images.pexels.com/photos/31707005/pexels-photo-31707005.jpeg?auto=compress&cs=tinysrgb&w=1600';

const stats = [
  { value: 25, suffix: '+', label: 'Years of Heritage' },
  { value: 48, suffix: '', label: 'Signature Scents' },
  { value: 32, suffix: '', label: 'Global Awards' },
  { value: 150, suffix: 'K', label: 'Loyal Patrons' },
];

const values = [
  { Icon: Gem, title: 'Artisanal Craft', text: 'Every bottle is a result of meticulous artistry, composed over months of refinement.' },
  { Icon: Heart, title: 'Passion & Soul', text: 'We pour our hearts into every drop, believing fragrance is the most personal art form.' },
  { Icon: Globe, title: 'Ethical Sourcing', text: 'Ingredients gathered with respect for nature and the communities that cultivate them.' },
  { Icon: Award, title: 'Uncompromising Quality', text: 'We never settle. Each scent must meet the highest standard of olfactory excellence.' },
];

const timeline = [
  { year: '1999', title: 'The Beginning', text: 'Founded in a small Parisian atelier with a single vision: redefine luxury fragrance.' },
  { year: '2005', title: 'First Award', text: 'Noir Absolu wins the International Fragrance Prize, putting us on the global map.' },
  { year: '2012', title: 'Global Expansion', text: 'Maisons open in Milan, Tokyo, and New York, sharing our craft with the world.' },
  { year: '2018', title: 'Sustainability Pledge', text: 'Committed to 100% ethically sourced, cruelty-free ingredients across all lines.' },
  { year: '2024', title: 'A New Era', text: 'Launched our Limited Edition collection, blending heritage with modern artistry.' },
];

function StatItem({ stat, start }: { stat: typeof stats[number]; start: boolean }) {
  const count = useCountUp(stat.value, 2000, start);
  return (
    <div className="text-center">
      <div className="font-serif text-4xl sm:text-5xl text-gold-300 mb-2">{count}{stat.suffix}</div>
      <div className="text-xs tracking-widest2 uppercase text-white/50 font-light">{stat.label}</div>
    </div>
  );
}

export default function About() {
  const { ref: statsRef, visible: statsVisible } = useScrollReveal<HTMLDivElement>();

  return (
    <div className="page-enter">
      {/* Hero */}
      <section className="relative h-[60vh] min-h-[420px] flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0">
          <img src={heroImage} alt="Noir Essence atelier" className="w-full h-full object-cover animate-scale-in" />
          <div className="absolute inset-0 bg-gradient-to-b from-noir-950/80 via-noir-950/60 to-noir-950" />
        </div>
        <div className="relative z-10 text-center px-5 max-w-3xl mx-auto">
          <p className="text-xs sm:text-sm tracking-widest2 uppercase text-gold-300 mb-6 animate-fade-down" style={{ animationDelay: '0.2s', opacity: 0, animationFillMode: 'forwards' }}>
            Our Story
          </p>
          <h1 className="font-serif text-4xl sm:text-6xl text-white leading-[1.1] animate-fade-up" style={{ animationDelay: '0.4s', opacity: 0, animationFillMode: 'forwards' }}>
            The Art of <span className="gold-shimmer italic">Timeless Scent</span>
          </h1>
        </div>
      </section>

      {/* History */}
      <section className="py-20 sm:py-28 px-5 sm:px-8">
        <div className="max-w-4xl mx-auto">
          <ScrollReveal className="text-center mb-16">
            <p className="text-xs tracking-widest2 uppercase text-gold-400 mb-4">Since 1999</p>
            <h2 className="font-serif text-3xl sm:text-5xl text-white mb-8">Our Heritage</h2>
            <p className="text-white/60 font-light text-lg leading-relaxed">
              Noir Essence was born from a singular belief: that fragrance is the most intimate form of art.
              Founded in a modest Parisian atelier, we began with one perfumer, one vision, and an
              uncompromising dedication to craft. Today, our scents are worn across the globe — yet
              every bottle is still composed by hand, one note at a time.
            </p>
          </ScrollReveal>
        </div>
      </section>

      {/* Mission & Vision */}
      <section className="py-20 sm:py-28 px-5 sm:px-8 bg-noir-900 border-y border-white/5">
        <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-8">
          <ScrollReveal>
            <div className="glass p-10 rounded-sm h-full card-lift">
              <div className="w-14 h-14 mb-6 rounded-full border border-gold-400/30 flex items-center justify-center text-gold-400">
                <Target size={24} strokeWidth={1.5} />
              </div>
              <h3 className="font-serif text-2xl text-white mb-4">Our Mission</h3>
              <p className="text-white/60 font-light leading-relaxed">
                To create fragrances that become part of people's most treasured memories —
                handcrafted scents that define confidence, sophistication, and individuality without compromise.
              </p>
            </div>
          </ScrollReveal>
          <ScrollReveal delay={100}>
            <div className="glass p-10 rounded-sm h-full card-lift">
              <div className="w-14 h-14 mb-6 rounded-full border border-gold-400/30 flex items-center justify-center text-gold-400">
                <Eye size={24} strokeWidth={1.5} />
              </div>
              <h3 className="font-serif text-2xl text-white mb-4">Our Vision</h3>
              <p className="text-white/60 font-light leading-relaxed">
                To be the world's most revered maison of luxury fragrance — setting the standard
                for artisanal excellence, ethical craftsmanship, and timeless olfactory artistry for generations to come.
              </p>
            </div>
          </ScrollReveal>
        </div>
      </section>

      {/* Stats */}
      <section ref={statsRef} className="py-20 sm:py-28 px-5 sm:px-8">
        <div className="max-w-6xl mx-auto grid grid-cols-2 lg:grid-cols-4 gap-10">
          {stats.map((s) => (
            <StatItem key={s.label} stat={s} start={statsVisible} />
          ))}
        </div>
      </section>

      {/* Values */}
      <section className="py-20 sm:py-28 px-5 sm:px-8 bg-noir-900 border-y border-white/5">
        <div className="max-w-7xl mx-auto">
          <ScrollReveal className="text-center mb-14">
            <p className="text-xs tracking-widest2 uppercase text-gold-400 mb-4">What We Stand For</p>
            <h2 className="font-serif text-3xl sm:text-5xl text-white">Brand Values</h2>
          </ScrollReveal>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {values.map((v, i) => (
              <ScrollReveal key={v.title} delay={i * 100}>
                <div className="text-center group">
                  <div className="w-16 h-16 mx-auto mb-6 rounded-full border border-gold-400/30 flex items-center justify-center text-gold-400 transition-all duration-500 group-hover:border-gold-400 group-hover:scale-110">
                    <v.Icon size={26} strokeWidth={1.5} />
                  </div>
                  <h3 className="font-serif text-xl text-white mb-3">{v.title}</h3>
                  <p className="text-sm text-white/50 font-light leading-relaxed">{v.text}</p>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* Craftsmanship */}
      <section className="py-20 sm:py-28 px-5 sm:px-8 overflow-hidden">
        <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <ScrollReveal>
            <div className="img-zoom rounded-sm overflow-hidden aspect-[4/3]">
              <img
                src="https://images.pexels.com/photos/8796322/pexels-photo-8796322.jpeg?auto=compress&cs=tinysrgb&w=1000"
                alt="Perfume craftsmanship"
                className="w-full h-full object-cover"
              />
            </div>
          </ScrollReveal>
          <ScrollReveal delay={100}>
            <div>
              <p className="text-xs tracking-widest2 uppercase text-gold-400 mb-4">The Craft</p>
              <h2 className="font-serif text-3xl sm:text-5xl text-white mb-6">
                Luxury <span className="gold-text italic">Craftsmanship</span>
              </h2>
              <p className="text-white/60 font-light leading-relaxed mb-6">
                Each Noir Essence fragrance is composed by master perfumers who have spent decades
                perfecting their art. From the first drop of essential oil to the final seal,
                every step is performed by hand in our atelier.
              </p>
              <p className="text-white/60 font-light leading-relaxed">
                We source rare ingredients from across the globe — Bulgarian rose, Indonesian oud,
                Calabrian bergamot — and blend them in small batches to ensure each bottle meets
                our exacting standard. This is not mass production. This is mastery.
              </p>
            </div>
          </ScrollReveal>
        </div>
      </section>

      {/* Timeline */}
      <section className="py-20 sm:py-28 px-5 sm:px-8 bg-noir-900 border-y border-white/5">
        <div className="max-w-4xl mx-auto">
          <ScrollReveal className="text-center mb-16">
            <p className="text-xs tracking-widest2 uppercase text-gold-400 mb-4">Our Journey</p>
            <h2 className="font-serif text-3xl sm:text-5xl text-white">The Noir Timeline</h2>
          </ScrollReveal>
          <div className="relative">
            <div className="absolute left-4 sm:left-1/2 top-0 bottom-0 w-px bg-gradient-to-b from-gold-400/0 via-gold-400/40 to-gold-400/0 sm:-translate-x-1/2" />
            <div className="space-y-12">
              {timeline.map((item, i) => (
                <ScrollReveal key={item.year} delay={i * 80}>
                  <div className={`relative flex items-start gap-6 sm:gap-0 ${i % 2 === 0 ? 'sm:flex-row-reverse' : ''}`}>
                    <div className="absolute left-4 sm:left-1/2 w-3 h-3 rounded-full bg-gold-400 ring-4 ring-gold-400/20 -translate-x-1/2 mt-2" />
                    <div className="sm:w-1/2" />
                    <div className="flex-1 sm:w-1/2 pl-12 sm:pl-0 sm:px-10">
                      <div className="glass p-6 rounded-sm card-lift">
                        <div className="font-serif text-2xl text-gold-300 mb-2">{item.year}</div>
                        <h3 className="font-serif text-xl text-white mb-2">{item.title}</h3>
                        <p className="text-sm text-white/50 font-light leading-relaxed">{item.text}</p>
                      </div>
                    </div>
                  </div>
                </ScrollReveal>
              ))}
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
