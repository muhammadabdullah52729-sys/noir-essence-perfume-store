import { useState } from 'react';
import { Instagram, Facebook, Twitter, Youtube, Send } from 'lucide-react';
import { useRouter, type Page } from '@/context/RouterContext';

const links: { label: string; page: Page }[] = [
  { label: 'Home', page: 'home' },
  { label: 'Collection', page: 'collection' },
  { label: 'About', page: 'about' },
  { label: 'Contact', page: 'contact' },
];

const socials = [
  { Icon: Instagram, label: 'Instagram' },
  { Icon: Facebook, label: 'Facebook' },
  { Icon: Twitter, label: 'Twitter' },
  { Icon: Youtube, label: 'YouTube' },
];

export default function Footer() {
  const { navigate } = useRouter();
  const [email, setEmail] = useState('');
  const [subscribed, setSubscribed] = useState(false);

  const subscribe = (e: React.FormEvent) => {
    e.preventDefault();
    if (email) {
      setSubscribed(true);
      setEmail('');
      setTimeout(() => setSubscribed(false), 3000);
    }
  };

  return (
    <footer className="bg-noir-900 border-t border-gold-400/15 pt-20 pb-8 px-5 sm:px-8">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-16">
          {/* Brand */}
          <div className="lg:col-span-1">
            <h3 className="font-serif text-2xl mb-4">
              <span className="gold-text font-semibold">NOIR</span>{' '}
              <span className="text-white/90 font-light">ESSENCE</span>
            </h3>
            <p className="text-sm text-white/50 font-light leading-relaxed">
              Handcrafted luxury fragrances for those who define their own elegance.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-xs tracking-widest2 uppercase text-gold-400 mb-5 font-medium">
              Quick Links
            </h4>
            <ul className="space-y-3">
              {links.map((l) => (
                <li key={l.page}>
                  <button
                    onClick={() => navigate(l.page)}
                    className="text-sm text-white/60 hover:text-gold-300 transition-colors duration-300 font-light"
                  >
                    {l.label}
                  </button>
                </li>
              ))}
            </ul>
          </div>

          {/* Newsletter */}
          <div>
            <h4 className="text-xs tracking-widest2 uppercase text-gold-400 mb-5 font-medium">
              Newsletter
            </h4>
            <p className="text-sm text-white/50 font-light mb-4">
              Join our world for exclusive releases and private events.
            </p>
            <form onSubmit={subscribe} className="flex gap-2">
              <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="Your email"
                className="flex-1 bg-noir-800 border border-white/10 px-4 py-2.5 text-sm text-white placeholder-white/30 focus:border-gold-400/50 focus:outline-none transition-colors"
              />
              <button
                type="submit"
                className="btn-gold px-4 rounded-sm"
                aria-label="Subscribe"
              >
                <Send size={16} />
              </button>
            </form>
            {subscribed && (
              <p className="text-xs text-gold-300 mt-2 animate-fade-in">
                Welcome to Noir Essence.
              </p>
            )}
          </div>

          {/* Social */}
          <div>
            <h4 className="text-xs tracking-widest2 uppercase text-gold-400 mb-5 font-medium">
              Follow Us
            </h4>
            <div className="flex gap-3">
              {socials.map(({ Icon, label }) => (
                <a
                  key={label}
                  href="#"
                  aria-label={label}
                  className="w-10 h-10 rounded-full glass flex items-center justify-center text-white/70 hover:text-gold-400 hover:border-gold-400/40 transition-all duration-300 hover:scale-110"
                >
                  <Icon size={16} />
                </a>
              ))}
            </div>
          </div>
        </div>

        <div className="border-t border-white/5 pt-8 flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-xs text-white/40 font-light tracking-wide">
            © {new Date().getFullYear()} Noir Essence. All rights reserved.
          </p>
          <div className="flex gap-6">
            <a href="#" className="text-xs text-white/40 hover:text-gold-300 transition-colors font-light">
              Privacy Policy
            </a>
            <a href="#" className="text-xs text-white/40 hover:text-gold-300 transition-colors font-light">
              Terms &amp; Conditions
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
