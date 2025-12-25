import React, { useState, useEffect } from 'react';
import { Navigation } from './components/Navigation';
import { Hero } from './components/Hero';
import { MarketBoard } from './components/MarketBoard';
import { FeaturesSection } from './components/Features';
import { SocialSection } from './components/Social';
import { Footer } from './components/Footer';
import { INITIAL_COINS } from './data';
import { CryptoCoin } from './types';

const TrustBanner = () => (
  <div className="bg-dark border-b border-white/5 py-12">
    <div className="container mx-auto px-6">
      <div className="text-center mb-8">
        <span className="text-[10px] uppercase tracking-[0.4em] font-bold text-gray-500">As seen in global financial media</span>
      </div>
      <div className="flex flex-wrap justify-center items-center gap-10 md:gap-20 opacity-40 grayscale hover:grayscale-0 transition-all duration-700">
        {['Forbes', 'Bloomberg', 'TechCrunch', 'Coindesk', 'Reuters'].map(brand => (
           <span key={brand} className="text-xl md:text-2xl font-bold font-display text-white tracking-tight">{brand}</span>
        ))}
      </div>
      <div className="mt-12 pt-8 border-t border-white/5 text-center">
        <p className="text-gray-400 text-sm font-light">Trusted by over <span className="text-white font-bold">2M+ users</span> and <span className="text-white font-bold">500+ institutional clients</span> worldwide.</p>
      </div>
    </div>
  </div>
);

const App: React.FC = () => {
  const [coins, setCoins] = useState<CryptoCoin[]>(INITIAL_COINS);

  useEffect(() => {
    const interval = setInterval(() => {
      setCoins(currentCoins => 
        currentCoins.map(coin => {
          const change = (Math.random() - 0.5) * (coin.price * 0.005);
          const newPrice = coin.price + change;
          const newHistory = [...coin.history.slice(1), newPrice];
          const newChange24h = coin.change24h + (Math.random() - 0.5) * 0.1;
          
          return {
            ...coin,
            price: newPrice,
            change24h: Number(newChange24h.toFixed(2)),
            history: newHistory
          };
        })
      );
    }, 3000);

    return () => clearInterval(interval);
  }, []);

  return (
    <main className="min-h-screen bg-dark text-white selection:bg-primary/30 selection:text-white">
      <Navigation coins={coins} />
      <Hero />
      <TrustBanner />
      <MarketBoard coins={coins} />
      <FeaturesSection />
      <SocialSection />
      <Footer />
    </main>
  );
};

export default App;