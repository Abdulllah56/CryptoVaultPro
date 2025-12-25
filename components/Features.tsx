import React from 'react';
import { FEATURES, HOW_IT_WORKS_STEPS } from '../data';
import { SectionHeading, Card, Button } from './UI';
import { Shield, Server, Lock, FileCheck, Layers, Cpu } from 'lucide-react';

export const FeaturesSection: React.FC = () => {
  return (
    <>
      <section id="features" className="py-32 relative">
        <div className="container mx-auto px-6">
          <div className="text-center mb-4">
             <span className="text-[10px] font-bold uppercase tracking-[0.4em] text-primary/60">Trading Power</span>
          </div>
          <SectionHeading 
            title="The Professional Edge" 
            subtitle="Harness the same infrastructure that global quantitative firms rely on daily." 
          />
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {FEATURES.map((feature, idx) => (
              <Card key={idx} className="hover:-translate-y-2">
                <div className="w-12 h-12 rounded-xl bg-white/5 flex items-center justify-center mb-8 border border-white/10 group-hover:border-primary/50 transition-colors">
                  <feature.icon className="w-6 h-6 text-primary group-hover:text-white transition-colors" />
                </div>
                <h3 className="text-xl font-bold text-white mb-4 tracking-tight">{feature.title}</h3>
                <p className="text-gray-400 font-light leading-relaxed text-sm">{feature.description}</p>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <section className="py-32 bg-[#080b11] border-y border-white/5 relative overflow-hidden">
        <div className="absolute top-0 right-0 w-[400px] h-[400px] bg-primary/5 rounded-full blur-[120px]"></div>
        
        <div className="container mx-auto px-6">
          <div className="grid lg:grid-cols-2 gap-20 items-center">
            <div className="order-2 lg:order-1">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                {[
                  { icon: Layers, title: "Vault Architecture", desc: "Redundant sharding protocols for multi-signature storage." },
                  { icon: Cpu, title: "Engine Performance", desc: "Proprietary matching engine capable of 500k ops/sec." },
                  { icon: Lock, title: "Quantum-Resistant", desc: "Encryption standards prepared for next-gen computation." },
                  { icon: FileCheck, title: "Real-time Audits", desc: "Continuous on-chain verification of all reserves." }
                ].map((item, i) => (
                  <Card key={i} className="p-6 border-white/5 bg-white/[0.02]">
                    <item.icon size={24} className="text-primary mb-4" />
                    <h4 className="text-white font-bold mb-2 text-base">{item.title}</h4>
                    <p className="text-gray-500 text-xs leading-relaxed">{item.desc}</p>
                  </Card>
                ))}
              </div>
            </div>
            
            <div className="order-1 lg:order-2 space-y-6">
              <div className="inline-block px-3 py-1 rounded-full bg-primary/10 border border-primary/20 text-primary text-[10px] font-bold uppercase tracking-widest">
                Bank-Grade Security
              </div>
              <h2 className="text-5xl font-bold font-display text-white tracking-tighter leading-tight">
                Built Like a <br />Fortress.
              </h2>
              <p className="text-gray-400 font-light text-lg leading-relaxed">
                In the digital frontier, security isn't just a feature—it's the foundation. CryptoVault Pro implements military-grade HSMs (Hardware Security Modules) and cold-storage strategies that are physically air-gapped from the network.
              </p>
              <div className="pt-4 flex items-center space-x-6">
                <Button variant="outline" className="h-12 px-8">Read Security Whitepaper</Button>
                <div className="flex -space-x-3">
                  {['ISO', 'SOC', 'KAP', 'GD'].map((label, i) => (
                    <div key={i} className="w-10 h-10 rounded-full border-2 border-dark bg-gray-800 flex items-center justify-center text-[10px] font-bold text-gray-300">
                      {label}
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};