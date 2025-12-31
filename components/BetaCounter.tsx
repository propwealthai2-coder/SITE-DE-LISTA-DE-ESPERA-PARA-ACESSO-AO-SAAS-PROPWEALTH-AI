
import React, { useState, useEffect } from 'react';
import { useLanguage } from '../context/LanguageContext';

export const BetaCounter: React.FC = () => {
  const [spots, setSpots] = useState(47);
  const { t } = useLanguage();

  useEffect(() => {
    let timeoutId: number;

    const scheduleDecrement = () => {
      const randomInterval = Math.floor(Math.random() * (40000 - 10000 + 1)) + 10000;
      
      timeoutId = window.setTimeout(() => {
        setSpots(prev => {
          if (prev <= 10) return prev;
          return Math.random() > 0.3 ? prev - 1 : prev;
        });
        scheduleDecrement();
      }, randomInterval);
    };

    scheduleDecrement();
    return () => clearTimeout(timeoutId);
  }, []);

  return (
    <div className="flex items-center gap-2 sm:gap-3">
      <div className="hidden xs:flex flex-col items-end">
        <span className="text-[8px] md:text-[10px] uppercase tracking-widest text-slate-500 font-bold">{t('betaStatus')}</span>
        <span className="text-[10px] md:text-xs text-emerald-400 font-mono">Status: LIVE</span>
      </div>
      <div className="bg-slate-900 border border-white/10 px-3 py-1.5 md:px-4 md:py-2 rounded-full flex items-center gap-2 neon-glow-emerald">
        <span className="relative flex h-1.5 w-1.5 md:h-2 md:w-2">
          <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
          <span className="relative inline-flex rounded-full h-1.5 w-1.5 md:h-2 md:w-2 bg-emerald-500"></span>
        </span>
        <span className="text-xs md:text-sm font-bold text-white whitespace-nowrap">
          {spots} <span className="text-slate-400 font-normal hidden sm:inline">{t('spotsRemaining')}</span>
          <span className="text-slate-400 font-normal sm:hidden">{t('vagas')}</span>
        </span>
      </div>
    </div>
  );
};
