import { useRef, type ButtonHTMLAttributes, type ReactNode } from 'react';

interface RippleButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  children: ReactNode;
  variant?: 'gold' | 'outline' | 'dark';
  className?: string;
}

export default function RippleButton({
  children,
  variant = 'gold',
  className = '',
  onClick,
  ...props
}: RippleButtonProps) {
  const btnRef = useRef<HTMLButtonElement>(null);

  const handleClick = (e: React.MouseEvent<HTMLButtonElement>) => {
    const btn = btnRef.current;
    if (btn) {
      const rect = btn.getBoundingClientRect();
      const size = Math.max(rect.width, rect.height);
      const ripple = document.createElement('span');
      ripple.className = 'ripple';
      ripple.style.width = ripple.style.height = `${size}px`;
      ripple.style.left = `${e.clientX - rect.left - size / 2}px`;
      ripple.style.top = `${e.clientY - rect.top - size / 2}px`;
      btn.appendChild(ripple);
      setTimeout(() => ripple.remove(), 600);
    }
    onClick?.(e);
  };

  const base = 'relative overflow-hidden px-8 py-3.5 text-xs font-medium tracking-widest2 uppercase rounded-sm transition-all duration-400';
  const variants = {
    gold: 'btn-gold',
    outline: 'btn-outline-gold',
    dark: 'bg-noir-900 text-gold-400 border border-gold-400/30 hover:border-gold-400 hover:bg-noir-800',
  };

  return (
    <button
      ref={btnRef}
      onClick={handleClick}
      className={`${base} ${variants[variant]} ${className}`}
      {...props}
    >
      {children}
    </button>
  );
}
