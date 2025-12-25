import React from 'react';
import { ArrowUpRight, ArrowDownRight } from 'lucide-react';
import { AreaChart, Area, ResponsiveContainer, YAxis } from 'recharts';
import { CryptoCoin } from '../types';
import { Button } from './UI';

interface MarketBoardProps {
  coins: CryptoCoin[];
}

export const MarketBoard: React.FC<MarketBoardProps> = ({ coins }) => {
  return (
    <section id="markets" className="py-24 bg-dark-lighter relative border-y border-white/5">
      <div className="container mx-auto px-6">
        <div className="flex flex-col md:flex-row items-end justify-between mb-12">
           <div className="mb-6 md:mb-0">
             <div className="flex items-center space-x-2 text-primary text-[10px] font-bold uppercase tracking-[0.3em] mb-4">
               <span className="w-1.5 h-1.5 rounded-full bg-primary animate-pulse"></span>
               <span>Real-time prices from leading liquidity venues</span>
             </div>
             <h2 className="text-4xl font-bold font-display text-white tracking-tight">Institutional Markets</h2>
             <p className="text-gray-500 font-light mt-2">Access professional liquidity pools with deep order books across 150+ pairs.</p>
           </div>
           <Button variant="outline" className="h-12 px-8">View Full Exchange</Button>
        </div>

        <div className="overflow-x-auto scrollbar-hide">
          <div className="min-w-[950px] glass-card rounded-2xl overflow-hidden shadow-2xl border border-white/10">
             <div className="grid grid-cols-12 bg-white/[0.03] px-8 py-5 text-[10px] font-bold text-gray-500 uppercase tracking-[0.2em] border-b border-white/5">
               <div className="col-span-3">Asset</div>
               <div className="col-span-2">Last Price</div>
               <div className="col-span-2">24h Change</div>
               <div className="col-span-1">Spread</div>
               <div className="col-span-2">7D Trend</div>
               <div className="col-span-2 text-right">Execution</div>
             </div>

             <div className="divide-y divide-white/5">
               {coins.map((coin) => (
                 <div key={coin.id} className="grid grid-cols-12 px-8 py-6 items-center hover:bg-white/[0.02] transition-colors group cursor-pointer">
                   <div className="col-span-3 flex items-center space-x-4">
                     <div className="w-10 h-10 rounded-full bg-white/[0.03] p-2 flex items-center justify-center border border-white/10 group-hover:border-primary/40 transition-all duration-500 overflow-hidden">
                        <img src={coin.logoUrl} alt={coin.name} className="w-full h-full object-contain grayscale group-hover:grayscale-0 transition-all duration-500 scale-90 group-hover:scale-100" />
                     </div>
                     <div>
                       <span className="block font-bold text-white text-base tracking-tight">{coin.name}</span>
                       <span className="text-xs font-mono text-gray-500 uppercase tracking-widest">{coin.symbol}</span>
                     </div>
                   </div>
                   <div className="col-span-2 font-mono text-white text-lg tracking-tighter">
                     ${coin.price.toLocaleString(undefined, { minimumFractionDigits: 2, maximumFractionDigits: 2 })}
                   </div>
                   <div className="col-span-2">
                     <span className={`inline-flex items-center px-3 py-1.5 rounded-lg text-xs font-bold ${coin.change24h >= 0 ? 'text-emerald-400 bg-emerald-400/5 border border-emerald-400/10' : 'text-rose-400 bg-rose-400/5 border border-rose-400/10'}`}>
                       {coin.change24h >= 0 ? <ArrowUpRight size={14} className="mr-1" /> : <ArrowDownRight size={14} className="mr-1" />}
                       {Math.abs(coin.change24h)}%
                     </span>
                   </div>
                   <div className="col-span-1">
                     <span className="text-[10px] font-bold text-gray-400 border border-white/10 px-2 py-1 rounded bg-white/5 whitespace-nowrap">
                       0.01% Fee
                     </span>
                   </div>
                   <div className="col-span-2 h-10 pr-6">
                     <ResponsiveContainer width="100%" height="100%">
                       <AreaChart data={coin.history.map((val, i) => ({ val, i }))}>
                         <defs>
                            <linearGradient id={`gradient-${coin.id}`} x1="0" y1="0" x2="0" y2="1">
                              <stop offset="5%" stopColor={coin.change24h >= 0 ? '#10b981' : '#ef4444'} stopOpacity={0.2}/>
                              <stop offset="95%" stopColor={coin.change24h >= 0 ? '#10b981' : '#ef4444'} stopOpacity={0}/>
                            </linearGradient>
                         </defs>
                         <YAxis hide domain={['dataMin', 'dataMax']} />
                         <Area 
                          type="monotone" 
                          dataKey="val" 
                          stroke={coin.change24h >= 0 ? '#10b981' : '#ef4444'} 
                          fill={`url(#gradient-${coin.id})`} 
                          strokeWidth={2} 
                          isAnimationActive={false} 
                        />
                       </AreaChart>
                     </ResponsiveContainer>
                   </div>
                   <div className="col-span-2 text-right">
                     <Button variant="outline" className="h-10 px-6 text-[10px] uppercase tracking-widest font-black group-hover:bg-primary group-hover:text-white group-hover:border-primary">Trade</Button>
                   </div>
                 </div>
               ))}
             </div>
          </div>
        </div>
      </div>
    </section>
  );
};