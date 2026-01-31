import React, { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';
import { Button } from './UI';
import { CryptoCoin } from '../types';

interface NavigationProps {
  coins: CryptoCoin[];
}

export const Navigation: React.FC<NavigationProps> = ({ coins }) => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header className="fixed top-0 left-0 right-0 z-[100]">
      <div className={`transition-all duration-500 ease-in-out ${isScrolled || isMobileMenuOpen ? 'bg-dark/80 backdrop-blur-xl border-b border-white/5 py-4' : 'bg-transparent py-6'}`}>
        <div className="container mx-auto px-6">
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-4 group cursor-pointer">
              <img src="/favicon.ico" alt="CryptoVault Pro Logo" className="w-11 h-11 rounded-xl group-hover:scale-105 transition-transform duration-500" />
              <div className="flex flex-col">
                <span className="text-xl font-bold font-display text-white tracking-tighter leading-none">
                  CryptoVault <span className="text-primary-400">Pro</span>
                </span>
                <span className="text-[8px] uppercase tracking-[0.3em] font-bold text-gray-500 mt-1">Institutional v2.4</span>
              </div>
            </div>

            <nav className="hidden lg:flex items-center space-x-10">
              {['Markets', 'Institutions', 'Security', 'Academy'].map((item) => (
                <a
                  key={item}
                  href={`#${item.toLowerCase()}`}
                  className="text-xs uppercase tracking-[0.2em] font-bold text-gray-400 hover:text-white transition-colors"
                >
                  {item}
                </a>
              ))}
            </nav>

            <div className="hidden lg:flex items-center space-x-6">
              <button className="text-xs uppercase tracking-widest font-bold text-gray-400 hover:text-white transition-colors">Client Login</button>
              <Button className="h-11 px-6 text-sm">Join the Elite</Button>
            </div>

            <button className="lg:hidden text-white p-2" onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}>
              {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu Overlay */}
      <div className={`lg:hidden fixed inset-0 z-[-1] bg-dark transition-transform duration-500 ${isMobileMenuOpen ? 'translate-y-0' : '-translate-y-full'}`}>
        <div className="pt-32 px-6 space-y-8">
          {['Markets', 'Institutions', 'Security', 'Academy'].map((item) => (
            <a key={item} href={`#${item.toLowerCase()}`} className="block text-4xl font-bold font-display text-white" onClick={() => setIsMobileMenuOpen(false)}>
              {item}
            </a>
          ))}
          <div className="pt-8 border-t border-white/5 space-y-6">
            <Button className="w-full h-16 text-lg">Create Account</Button>
            <button className="w-full text-center text-gray-400 font-bold uppercase tracking-widest">Sign In</button>
          </div>
        </div>
      </div>

      {/* Ticker Tape */}
      <div className={`bg-dark border-y border-white/5 py-1.5 overflow-hidden relative z-[101] transition-all duration-500 ${isScrolled ? 'opacity-100 translate-y-0' : 'opacity-0 -translate-y-full'}`}>
        <div className="flex animate-scroll whitespace-nowrap items-center">
          {[...coins, ...coins, ...coins].map((coin, idx) => (
            <div key={`${coin.id}-${idx}`} className="flex items-center space-x-4 mx-10 min-w-[160px]">
              <div className="w-5 h-5 rounded-full overflow-hidden flex-shrink-0 bg-white/10 p-0.5">
                <img src={coin.logoUrl} alt={coin.symbol} className="w-full h-full object-contain grayscale brightness-125" />
              </div>
              <span className="text-[10px] font-black text-gray-600 uppercase tracking-widest">{coin.symbol}</span>
              <span className="text-xs font-mono font-bold text-white">${coin.price.toLocaleString(undefined, { maximumFractionDigits: 2 })}</span>
              <span className={`text-[10px] font-bold ${coin.change24h >= 0 ? 'text-emerald-500' : 'text-rose-500'}`}>
                {coin.change24h >= 0 ? '↑' : '↓'} {Math.abs(coin.change24h)}%
              </span>
            </div>
          ))}
        </div>
      </div>
    </header>
  );
};