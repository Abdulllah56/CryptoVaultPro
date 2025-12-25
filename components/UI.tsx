import React, { useRef, useState } from 'react';

export const Button: React.FC<React.ButtonHTMLAttributes<HTMLButtonElement> & { variant?: 'primary' | 'secondary' | 'outline' }> = ({ 
  children, 
  className = '', 
  variant = 'primary', 
  ...props 
}) => {
  const baseStyles = "relative overflow-hidden font-bold rounded-xl transition-all duration-500 active:scale-[0.98] flex items-center justify-center whitespace-nowrap";
  
  const variants = {
    primary: "bg-white text-dark hover:bg-white/95 shadow-[0_20px_40px_rgba(255,255,255,0.1)] hover:shadow-[0_25px_50px_rgba(255,255,255,0.2)]",
    secondary: "bg-dark-lighter text-white border border-white/10 hover:border-white/30 hover:bg-white/5 shadow-xl",
    outline: "bg-transparent text-white border border-white/10 hover:border-white/30 hover:bg-white/5 backdrop-blur-sm"
  };

  return (
    <button className={`${baseStyles} ${variants[variant]} ${className}`} {...props}>
      <span className="relative z-10 flex items-center">{children}</span>
      {variant === 'primary' && (
        <span className="absolute inset-0 bg-gradient-to-r from-transparent via-white/40 to-transparent translate-x-[-200%] group-hover:translate-x-[200%] transition-transform duration-1000 ease-in-out"></span>
      )}
    </button>
  );
};

export const SectionHeading: React.FC<{ title: string; subtitle?: string; align?: 'left' | 'center' }> = ({ title, subtitle, align = 'center' }) => (
  <div className={`mb-16 ${align === 'center' ? 'text-center' : 'text-left'}`}>
    <div className={`flex items-center space-x-4 mb-4 ${align === 'center' ? 'justify-center' : ''}`}>
      <div className="h-px w-8 bg-primary/40"></div>
      <span className="text-[10px] font-bold uppercase tracking-[0.4em] text-primary/60">Platform Intelligence</span>
      <div className="h-px w-8 bg-primary/40"></div>
    </div>
    <h2 className="text-4xl md:text-5xl font-bold font-display text-white mb-6 leading-[1.1] tracking-tight">{title}</h2>
    {subtitle && <p className="text-gray-400 text-lg max-w-2xl mx-auto font-light leading-relaxed">{subtitle}</p>}
  </div>
);

export const Card: React.FC<{ children: React.ReactNode; className?: string }> = ({ children, className = '' }) => {
  const cardRef = useRef<HTMLDivElement>(null);
  const [coords, setCoords] = useState({ x: 0, y: 0 });

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!cardRef.current) return;
    const rect = cardRef.current.getBoundingClientRect();
    setCoords({
      x: e.clientX - rect.left,
      y: e.clientY - rect.top,
    });
  };

  return (
    <div 
      ref={cardRef}
      onMouseMove={handleMouseMove}
      style={{ '--x': `${coords.x}px`, '--y': `${coords.y}px` } as any}
      className={`glass-card spotlight-card rounded-2xl p-8 transition-all duration-500 border border-white/5 hover:border-white/20 group cursor-default ${className}`}
    >
      <div className="relative z-10">{children}</div>
    </div>
  );
};
