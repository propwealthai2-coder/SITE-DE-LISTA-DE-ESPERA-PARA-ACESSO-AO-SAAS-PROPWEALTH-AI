
import React, { useState, useEffect } from 'react';
import { View } from '../App';
import { useLanguage } from '../context/LanguageContext';

interface CookieBannerProps {
  onNavigate: (view: View) => void;
}

export const CookieBanner: React.FC<CookieBannerProps> = ({ onNavigate }) => {
  const [isVisible, setIsVisible] = useState(false);
  const { t } = useLanguage();

  useEffect(() => {
    const consent = localStorage.getItem('propwealth_cookie_consent');
    if (!consent) {
      const timer = setTimeout(() => setIsVisible(true), 2000);
      return () => clearTimeout(timer);
    }
  }, []);

  const acceptCookies = () => {
    localStorage.setItem('propwealth_cookie_consent', 'true');
    setIsVisible(false);
  };

  const handleLinkClick = (view: View) => (e: React.MouseEvent) => {
    e.preventDefault();
    onNavigate(view);
  };

  if (!isVisible) return null;

  return (
    <div className="fixed bottom-6 left-6 right-6 z-[100] animate-fade-in-up">
      <div className="glass-card border-emerald-500/30 p-6 rounded-2xl flex flex-col md:flex-row items-center justify-between gap-6 shadow-[0_20px_50px_rgba(0,0,0,0.5)] max-w-6xl mx-auto">
        <div className="flex-grow">
          <h5 className="text-white font-bold mb-1 flex items-center gap-2">
            <svg className="w-5 h-5 text-emerald-400" fill="currentColor" viewBox="0 0 20 20">
              <path fillRule="evenodd" d="M2.166 4.999A11.954 11.954 0 0010 1.944 11.954 11.954 0 0017.834 5c.11.65.166 1.32.166 2.001 0 5.225-3.34 9.67-8 11.317C5.34 16.67 2 12.225 2 7c0-.682.057-1.35.166-2.001zm11.541 3.708a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
            </svg>
            {t('cookieTitle')}
          </h5>
          <p className="text-slate-400 text-xs leading-relaxed">
            {t('cookieDesc')} <button onClick={handleLinkClick('terms')} className="text-emerald-400 hover:underline">{t('legalTerms')}</button>.
          </p>
        </div>
        <div className="flex gap-4 shrink-0 w-full md:w-auto">
          <button 
            onClick={acceptCookies}
            className="flex-grow md:flex-grow-0 px-8 py-3 bg-emerald-500 hover:bg-emerald-400 text-slate-950 font-bold rounded-xl transition-all text-sm"
          >
            {t('cookieAccept')}
          </button>
        </div>
      </div>
    </div>
  );
};
