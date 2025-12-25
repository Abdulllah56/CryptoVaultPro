import React, { useState } from 'react';
import { TESTIMONIALS, FAQS } from '../data';
import { SectionHeading, Card } from './UI';
import { Star, ChevronDown, Quote, Building2 } from 'lucide-react';

export const SocialSection: React.FC = () => {
  const [openFaq, setOpenFaq] = useState<number | null>(null);

  return (
    <>
      <section className="py-32 relative bg-dark">
        <div className="container mx-auto px-6">
          <div className="text-center mb-4">
             <span className="text-[10px] font-bold uppercase tracking-[0.4em] text-primary/60">Market Trust</span>
          </div>
          <SectionHeading title="Validated by Professionals" subtitle="Global traders trust CryptoVault Pro for high-stakes performance." />
          <div className="grid md:grid-cols-3 gap-10">
            {TESTIMONIALS.map((t) => (
              <Card key={t.id} className="relative group flex flex-col justify-between">
                <div>
                  <Quote size={40} className="absolute top-6 right-8 text-white/5 group-hover:text-primary/10 transition-colors" />
                  <div className="flex text-primary mb-6 space-x-1">
                    {[...Array(5)].map((_, i) => (
                      <Star key={i} size={14} fill={i < t.rating ? "currentColor" : "none"} strokeWidth={1} />
                    ))}
                  </div>
                  <p className="text-gray-300 mb-8 font-light italic leading-relaxed">"{t.content}"</p>
                </div>
                <div className="flex items-center space-x-4 border-t border-white/5 pt-6">
                  <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center font-bold text-primary text-xs border border-primary/20">
                    <Building2 size={16} />
                  </div>
                  <div>
                    <div className="font-bold text-white text-sm">{t.name}</div>
                    <div className="text-gray-500 text-[10px] font-medium leading-tight mt-1">{t.role}</div>
                  </div>
                </div>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <section className="py-32 bg-dark-lighter">
        <div className="container mx-auto px-6 max-w-4xl">
          <div className="text-center mb-16">
            <span className="text-[10px] font-bold uppercase tracking-[0.4em] text-primary/60 mb-4 block">Knowledge Center</span>
            <h2 className="text-4xl font-bold font-display text-white mb-4 tracking-tight">Frequently asked questions</h2>
            <p className="text-gray-500 font-light max-w-xl mx-auto">Everything you need to know about the platform, security, and onboarding.</p>
          </div>
          <div className="grid gap-4">
            {FAQS.map((faq, idx) => (
              <div 
                key={idx} 
                className={`transition-all duration-500 border rounded-2xl ${openFaq === idx ? 'bg-white/[0.03] border-white/20' : 'bg-transparent border-white/5 hover:border-white/10'}`}
              >
                <button 
                  className="w-full px-8 py-6 text-left flex justify-between items-center focus:outline-none"
                  onClick={() => setOpenFaq(openFaq === idx ? null : idx)}
                >
                  <span className="font-bold text-white tracking-tight">{faq.question}</span>
                  <div className={`w-8 h-8 rounded-full border border-white/10 flex items-center justify-center transition-all ${openFaq === idx ? 'bg-white text-dark rotate-180' : 'bg-transparent'}`}>
                    <ChevronDown size={16} />
                  </div>
                </button>
                <div className={`overflow-hidden transition-all duration-500 ease-in-out ${openFaq === idx ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'}`}>
                  <div className="px-8 pb-8 text-gray-400 font-light leading-relaxed text-sm">
                    {faq.answer}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
};