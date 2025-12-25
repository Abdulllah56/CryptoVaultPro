import { ChartCandlestick, Zap, ShieldCheck, Percent, Smartphone, Headphones, UserPlus, CreditCard, TrendingUp } from 'lucide-react';
import { CryptoCoin, Feature, Testimonial, FAQItem } from './types';

export const INITIAL_COINS: CryptoCoin[] = [
  { 
    id: 'btc', 
    symbol: 'BTC', 
    name: 'Bitcoin', 
    price: 64230.50, 
    change24h: 2.4, 
    history: [62000, 62500, 61800, 63000, 63500, 64230],
    logoUrl: 'https://raw.githubusercontent.com/spothq/cryptocurrency-icons/master/128/color/btc.png'
  },
  { 
    id: 'eth', 
    symbol: 'ETH', 
    name: 'Ethereum', 
    price: 3450.20, 
    change24h: 1.8, 
    history: [3200, 3300, 3250, 3400, 3420, 3450],
    logoUrl: 'https://raw.githubusercontent.com/spothq/cryptocurrency-icons/master/128/color/eth.png'
  },
  { 
    id: 'bnb', 
    symbol: 'BNB', 
    name: 'Binance Coin', 
    price: 590.15, 
    change24h: -0.5, 
    history: [600, 595, 598, 592, 588, 590],
    logoUrl: 'https://raw.githubusercontent.com/spothq/cryptocurrency-icons/master/128/color/bnb.png'
  },
  { 
    id: 'sol', 
    symbol: 'SOL', 
    name: 'Solana', 
    price: 145.80, 
    change24h: 5.2, 
    history: [130, 135, 132, 140, 142, 145],
    logoUrl: 'https://raw.githubusercontent.com/spothq/cryptocurrency-icons/master/128/color/sol.png'
  },
  { 
    id: 'ada', 
    symbol: 'ADA', 
    name: 'Cardano', 
    price: 0.45, 
    change24h: 0.9, 
    history: [0.42, 0.43, 0.43, 0.44, 0.44, 0.45],
    logoUrl: 'https://raw.githubusercontent.com/spothq/cryptocurrency-icons/master/128/color/ada.png'
  },
];

export const FEATURES: Feature[] = [
  { title: "Optimize Strategy", description: "Utilize institutional indicators and real-time order flow analytics.", icon: ChartCandlestick },
  { title: "Deposit Instantly", description: "Fund accounts via global bank wires or multi-chain crypto transfers.", icon: Zap },
  { title: "Secure Assets", description: "Store your wealth in air-gapped, multi-signature cold storage vaults.", icon: ShieldCheck },
  { title: "Reduce Overhead", description: "Maximize returns with industry-lowest 0.1% maker/taker trading fees.", icon: Percent },
  { title: "Trade Everywhere", description: "Monitor your portfolio via our award-winning native mobile experience.", icon: Smartphone },
  { title: "Access Expertise", description: "Receive 24/7 priority assistance from our elite institutional support desk.", icon: Headphones }
];

export const HOW_IT_WORKS_STEPS = [
  { id: 1, title: "Create Account", description: "Sign up in 2 minutes with zero initial deposit.", icon: UserPlus },
  { id: 2, title: "Verify Identity", description: "Complete secure KYC to unlock full trading limits.", icon: CreditCard },
  { id: 3, title: "Deploy Capital", description: "Execute trades across 150+ high-liquidity pairs.", icon: TrendingUp }
];

export const TESTIMONIALS: Testimonial[] = [
  { id: 1, name: "Michael Chen", role: "Quant Portfolio Manager @ Apex Capital", content: "The matching engine's 0.05ms latency is consistent even during high-volatility events. It's the only retail platform we trust for our arbitrage strategies.", rating: 5 },
  { id: 2, name: "Sarah Johnson", role: "Chief Investment Officer @ BlockVenture", content: "Their focus on air-gapped security and daily reserve audits sets a new industry standard. Finally, a platform that understands institutional risk management.", rating: 5 },
  { id: 3, name: "David Smith", role: "Senior Arbitrage Trader @ Delta Hedge", content: "Seamless API integration and deep order books. The spread consistency on BTC/ETH pairs is superior to most Tier-1 global exchanges.", rating: 5 }
];

export const FAQS: FAQItem[] = [
  { question: "How is my capital secured?", answer: "We utilize multi-layer security including FIPS 140-2 Level 3 certified HSMs for key management and 98% of assets stored in cold-storage vaults." },
  { question: "What are the trading fees?", answer: "Our fee structure is transparent. Standard trading fees start at 0.1%, with significant volume-based discounts for institutional partners." },
  { question: "Is CryptoVault Pro regulated?", answer: "Yes, we maintain full compliance with global financial regulations, including MSB registration and strict AML/KYC protocols." },
  { question: "How long do withdrawals take?", answer: "Crypto withdrawals are processed within 10 minutes. Fiat bank transfers typically settle within 1-3 business days depending on the jurisdiction." }
];