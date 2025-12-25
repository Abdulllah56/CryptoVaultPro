import React, { useEffect, useState } from 'react';
import { ArrowRight, ChevronRight, PlayCircle, Zap, Activity } from 'lucide-react';
import { Button } from './UI';

export const Hero: React.FC = () => {
  const [chartPath, setChartPath] = useState("M0 160 Q 100 150, 150 100 T 300 120 T 450 40 T 600 60");
  
  // Subtle animation for the hero chart to make it feel alive
  useEffect(() => {
    const interval = setInterval(() => {
      const offset = Math.sin(Date.now() / 1000) * 10;
      setChartPath(`M0 160 Q 100 ${150 + offset}, 150 ${100 - offset} T 300 ${120 + offset} T 450 ${40 - offset} T 600 ${60 + offset}`);
    }, 100);
    return () => clearInterval(interval);
  }, []);

  return (
    <section className="relative min-h-[95vh] pt-40 pb-24 overflow-hidden flex items-center">
      {/* Cinematic Background Elements */}
      <div className="absolute inset-0 z-0">
        <div className="absolute top-[-10%] left-[-5%] w-[500px] h-[500px] bg-primary/10 rounded-full blur-[160px] animate-pulse-glow"></div>
        <div className="absolute bottom-[5%] right-[-5%] w-[600px] h-[600px] bg-secondary/5 rounded-full blur-[180px] animate-pulse-glow" style={{ animationDelay: '2s' }}></div>
        
        <div 
          className="absolute inset-0 opacity-[0.15]" 
          style={{ 
            backgroundImage: `linear-gradient(#1e293b 1px, transparent 1px), linear-gradient(90deg, #1e293b 1px, transparent 1px)`,
            backgroundSize: '80px 80px',
            maskImage: 'radial-gradient(ellipse at center, black, transparent 80%)'
          }}
        ></div>
      </div>

      <div className="container mx-auto px-6 relative z-10">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <div className="text-center lg:text-left space-y-8 animate-reveal">
            <div className="inline-flex items-center space-x-3 bg-white/5 border border-white/10 rounded-full pl-2 pr-4 py-1.5 backdrop-blur-xl">
              <span className="bg-primary text-[10px] font-bold px-2 py-0.5 rounded-full tracking-widest uppercase">New</span>
              <span className="text-xs text-gray-300 font-medium tracking-tight">Institutional Gateway 2.0 is now live</span>
              <ChevronRight size={14} className="text-gray-500" />
            </div>

            <h1 className="text-6xl lg:text-[5.5rem] font-bold font-display text-white leading-[1] tracking-tighter">
              Precision <br />
              <span className="text-transparent bg-clip-text premium-gradient neon-text">Engineering</span> <br />
              For Your Wealth
            </h1>

            <p className="text-gray-400 text-lg lg:text-xl max-w-xl mx-auto lg:mx-0 leading-relaxed font-light">
              Don't just trade. Architect your future with institutional-grade algorithms and multi-layer security protocols built for the modern era.
            </p>

            <div className="flex flex-col sm:flex-row items-center justify-center lg:justify-start space-y-5 sm:space-y-0 sm:space-x-6 pt-4">
              <Button className="w-full sm:w-auto h-16 px-10 text-lg group shadow-2xl">
                Create Free Account 
                <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </Button>
              <Button variant="outline" className="w-full sm:w-auto h-16 px-10 text-lg group">
                <PlayCircle className="mr-2 w-5 h-5 text-primary" />
                View Platform Demo
              </Button>
            </div>
            
            <div className="flex items-center justify-center lg:justify-start space-x-8 pt-8 opacity-40">
              <div className="text-center lg:text-left">
                <div className="text-2xl font-bold font-display tracking-tight">$4.2B+</div>
                <div className="text-[10px] uppercase tracking-[0.2em] font-semibold text-gray-400">Volume (24h)</div>
              </div>
              <div className="h-8 w-px bg-white/20"></div>
              <div className="text-center lg:text-left">
                <div className="text-2xl font-bold font-display tracking-tight">0.05ms</div>
                <div className="text-[10px] uppercase tracking-[0.2em] font-semibold text-gray-400">Execution Latency</div>
              </div>
            </div>
          </div>

          {/* Interactive Mockup */}
          <div className="relative group perspective-1000 hidden lg:block animate-float">
            <div className="absolute -inset-1 bg-gradient-to-r from-primary to-secondary rounded-2xl blur opacity-20 group-hover:opacity-40 transition duration-1000 group-hover:duration-200"></div>
            <div className="glass-card rounded-2xl overflow-hidden relative border border-white/20">
              {/* Terminal Header */}
              <div className="bg-[#0f172a]/80 h-10 border-b border-white/5 flex items-center px-4 justify-between">
                <div className="flex space-x-1.5">
                  <div className="w-2.5 h-2.5 rounded-full bg-red-500/40"></div>
                  <div className="w-2.5 h-2.5 rounded-full bg-yellow-500/40"></div>
                  <div className="w-2.5 h-2.5 rounded-full bg-green-500/40"></div>
                </div>
                <div className="flex items-center space-x-2">
                  <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse"></span>
                  <div className="text-[9px] font-mono text-white/40 uppercase tracking-widest">cvp-secure-terminal (LIVE)</div>
                </div>
                <div className="w-10"></div>
              </div>
              
              <div className="p-8 space-y-6 bg-dark/40">
                <div className="flex justify-between items-start">
                  <div>
                    <div className="flex items-center space-x-2 mb-1">
                      <Activity size={12} className="text-primary/60" />
                      <h3 className="text-gray-500 text-[10px] font-bold uppercase tracking-widest">Live Market Data</h3>
                    </div>
                    <div className="text-4xl font-mono font-bold tracking-tighter text-white">BTC/USD</div>
                  </div>
                  <div className="text-right">
                    <div className="text-2xl font-mono text-emerald-400 tabular-nums tracking-tighter">$64,230.50</div>
                    <div className="text-[11px] font-bold text-emerald-400/60 flex items-center justify-end">
                      <Zap size={10} className="mr-1" /> Latency &lt;50ms
                    </div>
                  </div>
                </div>

                <div className="h-48 relative overflow-hidden rounded-lg bg-white/[0.02] border border-white/5">
                  <div className="absolute top-2 left-4 text-[9px] font-mono text-white/20 z-10">1m Interval • Real-time Stream</div>
                  <svg className="absolute inset-0 w-full h-full" preserveAspectRatio="none">
                    <path 
                      d={chartPath} 
                      fill="none" 
                      stroke="#0ea5e9" 
                      strokeWidth="2.5" 
                      className="opacity-80 transition-all duration-300" 
                    />
                    <path 
                      d={`${chartPath} V200 H0 Z`} 
                      fill="url(#hero-gradient)" 
                      className="opacity-10 transition-all duration-300" 
                    />
                    <defs>
                      <linearGradient id="hero-gradient" x1="0" y1="0" x2="0" y2="1">
                        <stop offset="0%" stopColor="#0ea5e9" />
                        <stop offset="100%" stopColor="transparent" />
                      </linearGradient>
                    </defs>
                  </svg>
                  <div className="absolute top-[40px] right-[100px] w-2 h-2 bg-primary rounded-full shadow-[0_0_15px_#0ea5e9] animate-ping"></div>
                </div>

                <div className="grid grid-cols-2 gap-4">
                  <button className="bg-emerald-500/10 border border-emerald-500/20 py-3 rounded-xl text-center group/btn hover:bg-emerald-500/20 transition-all">
                    <div className="text-[9px] uppercase text-emerald-500/60 font-black tracking-widest mb-0.5">Quick Execution</div>
                    <div className="text-lg font-bold text-emerald-400 group-hover/btn:scale-105 transition-transform">BUY MARKET</div>
                  </button>
                  <button className="bg-primary/10 border border-primary/20 py-3 rounded-xl text-center group/btn hover:bg-primary/20 transition-all">
                    <div className="text-[9px] uppercase text-primary/60 font-black tracking-widest mb-0.5">Stop Loss</div>
                    <div className="text-lg font-bold text-primary group-hover/btn:scale-105 transition-transform">SET LIMIT</div>
                  </button>
                </div>
                
                <div className="flex items-center justify-between text-[10px] text-gray-600 font-mono pt-2">
                  <div className="flex space-x-4">
                    <span>VOL: 124.5 BTC</span>
                    <span>H: 64,500.20</span>
                    <span>L: 63,120.00</span>
                  </div>
                  <div className="text-primary/40">MATCHING ENGINE v4.1</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
