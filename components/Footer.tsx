import React from 'react';
import { Shield, Twitter, Facebook, Linkedin, Globe, ArrowRight } from 'lucide-react';
import { Button } from './UI';

export const Footer: React.FC = () => {
  return (
    <>
      <section className="py-32 relative overflow-hidden bg-dark-lighter border-t border-white/5 text-center">
        <div className="container mx-auto px-6 relative z-10 max-w-4xl">
          <h2 className="text-5xl md:text-7xl font-bold font-display text-white mb-8 tracking-tighter leading-tight">
            Start your <span className="text-primary-400">crypto journey.</span>
          </h2>
          <div className="flex flex-col items-center space-y-6">
            <Button className="h-18 px-12 py-5 text-xl group w-full sm:w-auto">
              Create Free Account
              <ArrowRight className="ml-2 group-hover:translate-x-1 transition-transform" />
            </Button>
            <div className="space-y-2">
              <p className="text-sm text-gray-400 font-light">Create a free account in 2 minutes • No minimum deposit</p>
              <div className="flex items-center justify-center space-x-4">
                <span className="flex items-center text-[10px] text-emerald-400 font-bold uppercase tracking-widest">
                  <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 mr-2 animate-pulse"></span>
                  Systems Operational
                </span>
                <span className="w-1 h-1 bg-white/20 rounded-full"></span>
                <span className="text-[10px] text-gray-500 font-bold uppercase tracking-widest">v2.4.0 Secure</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      <footer className="bg-[#050810] pt-24 pb-12 border-t border-gray-900">
        <div className="container mx-auto px-6">
          <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-5 gap-12 mb-20">
            <div className="col-span-2 lg:col-span-2">
              <div className="flex items-center space-x-4 mb-8">
                <img src="/favicon.ico" alt="CryptoVault Pro Logo" className="w-11 h-11 rounded-xl" />
                <div className="flex flex-col">
                  <span className="text-2xl font-bold text-white tracking-tighter leading-none">
                    CryptoVault <span className="text-primary-400">Pro</span>
                  </span>
                  <span className="text-[8px] uppercase tracking-[0.3em] font-bold text-gray-500 mt-1">Institutional v2.4</span>
                </div>
              </div>
              <p className="text-gray-400 font-light mb-8 max-w-sm leading-relaxed">
                The preferred execution venue for institutional crypto trading. Built with precision, secured by architecture.
              </p>
              <div className="flex space-x-5">
                {[Twitter, Facebook, Linkedin, Globe].map((Icon, i) => (
                  <a key={i} href="#" className="w-10 h-10 rounded-full bg-white/5 border border-white/5 flex items-center justify-center text-gray-400 hover:text-white hover:border-primary/40 transition-all duration-300">
                    <Icon size={18} />
                  </a>
                ))}
              </div>
            </div>

            <div className="col-span-1">
              <h4 className="text-white font-bold mb-6 text-sm uppercase tracking-widest">Platform</h4>
              <ul className="space-y-4 text-sm text-gray-500">
                {['Markets', 'Institutions', 'API Docs', 'Security'].map(link => (
                  <li key={link}><a href="#" className="hover:text-primary transition-colors">{link}</a></li>
                ))}
              </ul>
            </div>

            <div className="col-span-1">
              <h4 className="text-white font-bold mb-6 text-sm uppercase tracking-widest">Resources</h4>
              <ul className="space-y-4 text-sm text-gray-500">
                {['Academy', 'Help Center', 'Fees', 'Status'].map(link => (
                  <li key={link}><a href="#" className="hover:text-primary transition-colors">{link}</a></li>
                ))}
              </ul>
            </div>

            <div className="col-span-1">
              <h4 className="text-white font-bold mb-6 text-sm uppercase tracking-widest">Legal</h4>
              <ul className="space-y-4 text-sm text-gray-500">
                {['Privacy', 'Terms', 'Risk Disclosure', 'Regulatory'].map(link => (
                  <li key={link}><a href="#" className="hover:text-primary transition-colors">{link}</a></li>
                ))}
              </ul>
            </div>
          </div>
          <div className="pt-8 border-t border-white/5 text-[11px] text-gray-600 font-mono flex flex-col md:flex-row justify-between items-center uppercase tracking-widest space-y-4 md:space-y-0">
            <div>&copy; {new Date().getFullYear()} CryptoVault Pro Institutional Inc.</div>
            <div className="flex space-x-6">
              <span>GDPR Compliant</span>
              <span>SOC2 Certified</span>
              <span>ISO 27001</span>
            </div>
          </div>
        </div>
      </footer>
    </>
  );
};