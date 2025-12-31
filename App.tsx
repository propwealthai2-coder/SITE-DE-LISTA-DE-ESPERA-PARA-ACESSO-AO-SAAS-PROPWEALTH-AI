
import React, { useState, useEffect, useRef } from 'react';
import { Hero } from './components/Hero';
import { Features } from './components/Features';
import { Testimonials } from './components/Testimonials';
import { Footer } from './components/Footer';
import { BackgroundEffect } from './components/BackgroundEffect';
import { BetaCounter } from './components/BetaCounter';
import { LegalContent } from './components/LegalContent';
import { ContactContent } from './components/ContactContent';
import { FAQContent } from './components/FAQContent';
import { CookieBanner } from './components/CookieBanner';
import { useLanguage } from './context/LanguageContext';

export type View = 'home' | 'terms' | 'privacy' | 'contact' | 'faq' | 'cookies';

const App: React.FC = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [currentView, setCurrentView] = useState<View>('home');
  const { language, setLanguage, t } = useLanguage();
  const [isLangOpen, setIsLangOpen] = useState(false);
  const langRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [currentView]);

  // Click outside logic for language selector
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (langRef.current && !langRef.current.contains(event.target as Node)) {
        setIsLangOpen(false);
      }
    };

    if (isLangOpen) {
      document.addEventListener('mousedown', handleClickOutside);
    } else {
      document.removeEventListener('mousedown', handleClickOutside);
    }

    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, [isLangOpen]);

  const navigateTo = (view: View) => {
    setCurrentView(view);
  };

  const languages = [
    { code: 'en', name: 'English', flag: '🇺🇸' },
    { code: 'pt', name: 'Português', flag: '🇧🇷' },
    { code: 'es', name: 'Español', flag: '🇪🇸' },
    { code: 'fr', name: 'Français', flag: '🇫🇷' },
    { code: 'it', name: 'Italiano', flag: '🇮🇹' },
    { code: 'zh', name: '中文', flag: '🇨🇳' },
  ];

  return (
    <div className="relative min-h-screen selection:bg-emerald-500/30 selection:text-emerald-200">
      <BackgroundEffect />
      
      <header className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${isScrolled || currentView !== 'home' ? 'py-2 bg-slate-950/80 backdrop-blur-md border-b border-white/5 shadow-2xl' : 'py-6 bg-transparent'}`}>
        <div className="container mx-auto px-6 flex justify-between items-center">
          <div 
            className="flex items-center gap-3 cursor-pointer group" 
            onClick={() => navigateTo('home')}
          >
            <div className="w-10 h-10 relative transition-transform duration-300 group-hover:scale-110">
              <img 
                src="https://ik.imagekit.io/PropWealthAI/PropWealth%20AI%20/logo%20ofial%20propwealth%202%20-%20Copia%20(1)%20-%20Copia.png" 
                alt="PropWealth Logo" 
                className="w-full h-full object-contain drop-shadow-[0_0_12px_rgba(16,185,129,0.4)]"
              />
            </div>
            <span className="text-xl font-extrabold tracking-tight bg-clip-text text-transparent bg-gradient-to-r from-white to-slate-400">
              PropWealth<span className="text-emerald-400">.ai</span>
            </span>
          </div>
          
          <div className="flex items-center gap-4 md:gap-8">
            {/* Language Selector */}
            <div className="relative" ref={langRef}>
              <button 
                onClick={() => setIsLangOpen(!isLangOpen)}
                className="flex items-center gap-2 px-3 py-1.5 rounded-full bg-white/5 border border-white/10 text-xs font-bold hover:bg-white/10 transition-all"
              >
                <span>{languages.find(l => l.code === language)?.flag}</span>
                <span className="hidden sm:inline uppercase">{language}</span>
                <svg className={`w-3 h-3 transition-transform ${isLangOpen ? 'rotate-180' : ''}`} fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" /></svg>
              </button>
              
              {isLangOpen && (
                <div className="absolute top-full right-0 mt-2 w-40 glass-card rounded-xl border-white/10 overflow-hidden shadow-2xl animate-fade-in-up">
                  {languages.map((lang) => (
                    <button
                      key={lang.code}
                      onClick={() => {
                        setLanguage(lang.code as any);
                        setIsLangOpen(false);
                      }}
                      className={`w-full px-4 py-2.5 text-left text-xs font-medium flex items-center gap-3 hover:bg-emerald-500/10 transition-colors ${language === lang.code ? 'text-emerald-400 bg-emerald-500/5' : 'text-slate-400'}`}
                    >
                      <span>{lang.flag}</span>
                      {lang.name}
                    </button>
                  ))}
                </div>
              )}
            </div>

            {currentView === 'home' ? (
              <BetaCounter />
            ) : (
              <button 
                onClick={() => navigateTo('home')}
                className="text-sm font-bold text-emerald-400 hover:text-white transition-colors flex items-center gap-2"
              >
                ← {t('backBtn')}
              </button>
            )}
          </div>
        </div>
      </header>

      <main>
        {currentView === 'home' ? (
          <>
            <Hero />
            <Features />
            <Testimonials />
          </>
        ) : currentView === 'contact' ? (
          <ContactContent onNavigate={navigateTo} />
        ) : currentView === 'faq' ? (
          <FAQContent />
        ) : (
          <LegalContent view={currentView} />
        )}
      </main>

      <Footer onNavigate={navigateTo} />
      <CookieBanner onNavigate={navigateTo} />
    </div>
  );
};

export default App;
