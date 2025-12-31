
import React from 'react';
import { View } from '../App';
import { useLanguage } from '../context/LanguageContext';

interface FooterProps {
  onNavigate: (view: View) => void;
}

export const Footer: React.FC<FooterProps> = ({ onNavigate }) => {
  const { t } = useLanguage();
  
  const handleNavClick = (view: View) => (e: React.MouseEvent) => {
    e.preventDefault();
    onNavigate(view);
  };

  const handleTestimonialsClick = (e: React.MouseEvent) => {
    e.preventDefault();
    onNavigate('home');
    setTimeout(() => {
      const element = document.getElementById('testimonials');
      if (element) {
        element.scrollIntoView({ behavior: 'smooth' });
      }
    }, 100);
  };

  const handleFeaturesClick = (e: React.MouseEvent) => {
    e.preventDefault();
    onNavigate('home');
    setTimeout(() => {
      const element = document.getElementById('features');
      if (element) {
        element.scrollIntoView({ behavior: 'smooth' });
      }
    }, 100);
  };

  return (
    <footer className="py-16 border-t border-white/5 bg-slate-950/80 backdrop-blur-sm">
      <div className="container mx-auto px-6">
        <div className="flex flex-col md:flex-row justify-between items-start gap-12 mb-12">
          <div className="max-w-sm">
            <div 
              className="flex items-center gap-3 cursor-pointer mb-6 group"
              onClick={handleNavClick('home')}
            >
              <div className="w-8 h-8 transition-transform duration-300 group-hover:scale-110">
                <img 
                  src="https://ik.imagekit.io/PropWealthAI/PropWealth%20AI%20/logo%20ofial%20propwealth%202%20-%20Copia%20(1)%20-%20Copia.png" 
                  alt="PropWealth Logo" 
                  className="w-full h-full object-contain"
                />
              </div>
              <span className="font-bold text-white tracking-tight text-lg">PropWealth<span className="text-emerald-400">.ai</span></span>
            </div>
            <p className="text-slate-500 text-sm leading-relaxed mb-6">
              {t('footerDesc')}
            </p>
            <div className="flex gap-4">
              <a 
                href="https://x.com/propwealth_ai" 
                target="_blank" 
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center hover:bg-emerald-500/20 hover:text-emerald-400 transition-all border border-white/10 group"
                aria-label="X (Twitter)"
              >
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M18.901 1.153h3.68l-8.04 9.19L24 22.846h-7.406l-5.8-7.584-6.638 7.584H.474l8.6-9.83L0 1.154h7.594l5.243 6.932L18.901 1.153zM17.61 20.644h2.039L6.486 3.24H4.298l13.312 17.404z"/>
                </svg>
              </a>
              <a 
                href="https://www.linkedin.com/company/propwealth-ai/about/?viewAsMember=true" 
                target="_blank" 
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center hover:bg-blue-500/20 hover:text-blue-400 transition-all border border-white/10 group"
                aria-label="LinkedIn"
              >
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"/>
                </svg>
              </a>
            </div>
          </div>

          <div className="grid grid-cols-2 sm:grid-cols-2 gap-x-12 gap-y-8">
            <div>
              <h4 className="text-white font-bold mb-4 text-sm uppercase tracking-widest">{t('navLabel')}</h4>
              <ul className="space-y-3 text-sm text-slate-500">
                <li><button onClick={handleFeaturesClick} className="hover:text-emerald-400 transition-colors">{t('navFeatures')}</button></li>
                <li><button onClick={handleTestimonialsClick} className="hover:text-emerald-400 transition-colors">{t('navTestimonials')}</button></li>
                <li><button onClick={handleNavClick('faq')} className="hover:text-emerald-400 transition-colors">{t('navFAQ')}</button></li>
                <li><button onClick={handleNavClick('contact')} className="hover:text-emerald-400 transition-colors">{t('navContact')}</button></li>
              </ul>
            </div>
            <div>
              <h4 className="text-white font-bold mb-4 text-sm uppercase tracking-widest">{t('legalLabel')}</h4>
              <ul className="space-y-3 text-sm text-slate-500">
                <li><button onClick={handleNavClick('terms')} className="hover:text-emerald-400 transition-colors">{t('legalTerms')}</button></li>
                <li><button onClick={handleNavClick('privacy')} className="hover:text-emerald-400 transition-colors">{t('legalPrivacy')}</button></li>
                <li><button onClick={handleNavClick('cookies')} className="hover:text-emerald-400 transition-colors">{t('legalCookies')}</button></li>
              </ul>
            </div>
          </div>
        </div>

        <div className="pt-12 border-t border-white/5 space-y-8 text-center md:text-left">
          <div className="max-w-4xl mx-auto md:mx-0">
            <h5 className="text-xs font-bold text-slate-400 mb-3 uppercase tracking-tighter">{t('disclaimerTitle')}:</h5>
            <p className="text-[10px] md:text-xs text-slate-600 leading-relaxed italic">
              {t('disclaimerText')}
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};
