import { useState } from 'react';
import { Mail, Phone, MapPin, Clock, Check, Send } from 'lucide-react';
import ScrollReveal from '@/components/ui/ScrollReveal';
import RippleButton from '@/components/ui/RippleButton';

const heroImage = 'https://images.pexels.com/photos/18031847/pexels-photo-18031847.jpeg?auto=compress&cs=tinysrgb&w=1600';

const contactInfo = [
  { Icon: MapPin, label: 'Visit Us', value: '12 Rue de la Paix, 75002 Paris, France' },
  { Icon: Phone, label: 'Call Us', value: '+33 1 42 86 28 00' },
  { Icon: Mail, label: 'Email Us', value: 'concierge@noiressence.com' },
];

const hours = [
  { day: 'Monday — Friday', time: '10:00 AM — 8:00 PM' },
  { day: 'Saturday', time: '10:00 AM — 9:00 PM' },
  { day: 'Sunday', time: '11:00 AM — 6:00 PM' },
];

export default function Contact() {
  const [form, setForm] = useState({ name: '', email: '', subject: '', message: '' });
  const [submitted, setSubmitted] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
    setForm({ name: '', email: '', subject: '', message: '' });
    setTimeout(() => setSubmitted(false), 5000);
  };

  return (
    <div className="page-enter">
      {/* Hero */}
      <section className="relative h-[50vh] min-h-[360px] flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0">
          <img src={heroImage} alt="Contact Noir Essence" className="w-full h-full object-cover animate-scale-in" />
          <div className="absolute inset-0 bg-gradient-to-b from-noir-950/80 via-noir-950/60 to-noir-950" />
        </div>
        <div className="relative z-10 text-center px-5">
          <p className="text-xs sm:text-sm tracking-widest2 uppercase text-gold-300 mb-6 animate-fade-down" style={{ animationDelay: '0.2s', opacity: 0, animationFillMode: 'forwards' }}>
            Get in Touch
          </p>
          <h1 className="font-serif text-4xl sm:text-6xl text-white leading-[1.1] animate-fade-up" style={{ animationDelay: '0.4s', opacity: 0, animationFillMode: 'forwards' }}>
            Contact <span className="gold-shimmer italic">Us</span>
          </h1>
        </div>
      </section>

      {/* Contact section */}
      <section className="py-20 sm:py-28 px-5 sm:px-8">
        <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Form */}
          <ScrollReveal>
            <div className="glass p-8 sm:p-10 rounded-sm">
              <h2 className="font-serif text-3xl text-white mb-2">Send a Message</h2>
              <p className="text-white/50 font-light text-sm mb-8">
                We would be delighted to hear from you. Our concierge responds within 24 hours.
              </p>

              {submitted && (
                <div className="mb-6 flex items-center gap-3 bg-gold-400/10 border border-gold-400/30 px-4 py-3 rounded-sm animate-fade-in">
                  <Check size={18} className="text-gold-400" />
                  <span className="text-sm text-gold-300 font-light">
                    Thank you. Your message has been received.
                  </span>
                </div>
              )}

              <form onSubmit={handleSubmit} className="space-y-5">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                  <div>
                    <label className="block text-xs tracking-widest2 uppercase text-white/50 mb-2 font-light">Name</label>
                    <input
                      type="text"
                      name="name"
                      value={form.name}
                      onChange={handleChange}
                      required
                      className="w-full bg-noir-800 border border-white/10 px-4 py-3 text-sm text-white placeholder-white/30 focus:border-gold-400/50 focus:outline-none transition-colors rounded-sm"
                      placeholder="Your full name"
                    />
                  </div>
                  <div>
                    <label className="block text-xs tracking-widest2 uppercase text-white/50 mb-2 font-light">Email</label>
                    <input
                      type="email"
                      name="email"
                      value={form.email}
                      onChange={handleChange}
                      required
                      className="w-full bg-noir-800 border border-white/10 px-4 py-3 text-sm text-white placeholder-white/30 focus:border-gold-400/50 focus:outline-none transition-colors rounded-sm"
                      placeholder="you@email.com"
                    />
                  </div>
                </div>
                <div>
                  <label className="block text-xs tracking-widest2 uppercase text-white/50 mb-2 font-light">Subject</label>
                  <input
                    type="text"
                    name="subject"
                    value={form.subject}
                    onChange={handleChange}
                    required
                    className="w-full bg-noir-800 border border-white/10 px-4 py-3 text-sm text-white placeholder-white/30 focus:border-gold-400/50 focus:outline-none transition-colors rounded-sm"
                    placeholder="How can we help?"
                  />
                </div>
                <div>
                  <label className="block text-xs tracking-widest2 uppercase text-white/50 mb-2 font-light">Message</label>
                  <textarea
                    name="message"
                    value={form.message}
                    onChange={handleChange}
                    required
                    rows={5}
                    className="w-full bg-noir-800 border border-white/10 px-4 py-3 text-sm text-white placeholder-white/30 focus:border-gold-400/50 focus:outline-none transition-colors rounded-sm resize-none"
                    placeholder="Tell us more..."
                  />
                </div>
                <RippleButton type="submit" className="w-full sm:w-auto flex items-center justify-center gap-2">
                  <Send size={15} />
                  Send Message
                </RippleButton>
              </form>
            </div>
          </ScrollReveal>

          {/* Info + Hours + Map */}
          <ScrollReveal delay={100}>
            <div className="space-y-6">
              {/* Contact info */}
              <div className="glass p-8 rounded-sm">
                <h3 className="font-serif text-2xl text-white mb-6">Contact Information</h3>
                <div className="space-y-5">
                  {contactInfo.map((c) => (
                    <div key={c.label} className="flex items-start gap-4">
                      <div className="w-11 h-11 flex-shrink-0 rounded-full border border-gold-400/30 flex items-center justify-center text-gold-400">
                        <c.Icon size={18} strokeWidth={1.5} />
                      </div>
                      <div>
                        <div className="text-xs tracking-widest2 uppercase text-white/40 mb-1">{c.label}</div>
                        <div className="text-sm text-white/80 font-light">{c.value}</div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              {/* Business hours */}
              <div className="glass p-8 rounded-sm">
                <div className="flex items-center gap-3 mb-6">
                  <Clock size={20} className="text-gold-400" strokeWidth={1.5} />
                  <h3 className="font-serif text-2xl text-white">Business Hours</h3>
                </div>
                <div className="space-y-3">
                  {hours.map((h) => (
                    <div key={h.day} className="flex justify-between items-center py-2 border-b border-white/5 last:border-0">
                      <span className="text-sm text-white/60 font-light">{h.day}</span>
                      <span className="text-sm text-gold-300 font-light">{h.time}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Map placeholder */}
              <div className="glass rounded-sm overflow-hidden h-64 relative">
                <div className="absolute inset-0 bg-gradient-to-br from-noir-800 to-noir-950 flex items-center justify-center">
                  <div className="text-center">
                    <MapPin size={36} className="text-gold-400/60 mx-auto mb-3" strokeWidth={1} />
                    <p className="text-white/40 text-sm font-light">12 Rue de la Paix, Paris</p>
                    <p className="text-white/30 text-xs font-light mt-1">Google Maps Integration</p>
                  </div>
                </div>
                <div className="absolute inset-0 opacity-20" style={{
                  backgroundImage: 'linear-gradient(rgba(212,175,55,0.1) 1px, transparent 1px), linear-gradient(90deg, rgba(212,175,55,0.1) 1px, transparent 1px)',
                  backgroundSize: '40px 40px',
                }} />
              </div>
            </div>
          </ScrollReveal>
        </div>
      </section>
    </div>
  );
}
