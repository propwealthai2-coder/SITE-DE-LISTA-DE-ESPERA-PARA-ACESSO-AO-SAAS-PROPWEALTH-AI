
import React, { useState, useEffect } from 'react';
import { useLanguage } from '../context/LanguageContext';

export const Hero: React.FC = () => {
  const [email, setEmail] = useState('');
  const [submitted, setSubmitted] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [isFadingOut, setIsFadingOut] = useState(false);
  const [error, setError] = useState('');
  const [scrollProgress, setScrollProgress] = useState(0);
  const { t } = useLanguage();

  const investorAvatars = [
    'https://images.unsplash.com/photo-1534528741775-53994a69daeb?fit=crop&w=64&h=64&q=80',
    'https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?fit=crop&w=64&h=64&q=80',
    'https://images.unsplash.com/photo-1531123897727-8f129e1688ce?fit=crop&w=64&h=64&q=80',
    'https://images.unsplash.com/photo-1522529599102-193c0d76b5b6?fit=crop&w=64&h=64&q=80'
  ];

  useEffect(() => {
    const handleScroll = () => {
      // Normalize scroll between 0 and 800px for a smoother parallax feel
      const progress = Math.min(window.scrollY / 800, 1);
      setScrollProgress(progress);
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const validateEmail = (email: string) => {
    const regex = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    if (!email) return { valid: false, message: 'Invalid email' };
    const lowered = email.toLowerCase().trim();
    if (!regex.test(lowered)) return { valid: false, message: 'Invalid email' };
    return { valid: true, message: '' };
  };

  useEffect(() => {
    let fadeTimeout: number;
    let resetTimeout: number;
    if (submitted) {
      fadeTimeout = window.setTimeout(() => setIsFadingOut(true), 9200);
      resetTimeout = window.setTimeout(() => {
        setSubmitted(false);
        setIsFadingOut(false);
        setEmail('');
      }, 10000);
    }
    return () => { 
      clearTimeout(fadeTimeout); 
      clearTimeout(resetTimeout); 
    };
  }, [submitted]);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const check = validateEmail(email);
    if (!check.valid) {
      setError(check.message);
      return;
    }
    setError('');
    setIsLoading(true);
    setTimeout(() => {
      setIsLoading(false);
      setSubmitted(true);
    }, 1500);
  };

  // Helper to render words with delay and parallax effects
  const renderAnimatedTitle = () => {
    const title = t('heroTitle');
    const sentences = title.split('. ');
    let wordCounter = 0;

    return sentences.map((sentence, sIdx) => {
      const isLastSentence = sIdx === sentences.length - 1;
      const isFirstSentence = sIdx === 0;
      const words = sentence.split(' ');
      
      const sentenceContent = words.map((word, wIdx) => {
        wordCounter++;
        // Calculate a unique parallax speed for each word to create depth
        const parallaxFactor = 15 + (wordCounter % 4) * 25;
        const translateY = -scrollProgress * parallaxFactor;
        const blur = scrollProgress * 15;
        const opacity = Math.max(0, 1 - scrollProgress * 1.8);

        return (
          <span 
            key={`${sIdx}-${wIdx}`} 
            className="inline-block animate-reveal-word will-change-transform" 
            style={{ 
              animationDelay: `${wordCounter * 70}ms`,
              transform: `translateY(${translateY}px)`,
              opacity: opacity,
              filter: `blur(${blur}px)`,
              transition: 'transform 0.1s ease-out, filter 0.1s ease-out, opacity 0.1s ease-out'
            }}
          >
            {word}&nbsp;
          </span>
        );
      });

      return (
        <React.Fragment key={sIdx}>
          {isFirstSentence ? (
            <span className="bg-clip-text text-transparent bg-gradient-to-r from-emerald-400 via-blue-400 to-emerald-400 bg-[length:200%_auto] animate-gradient-shift">
              {sentenceContent}.
            </span>
          ) : (
            <>{sentenceContent}{!isLastSentence ? '. ' : ''}</>
          )}
          {isFirstSentence && <br className="hidden sm:block" />}
        </React.Fragment>
      );
    });
  };

  return (
    <section className="relative pt-24 pb-16 md:pt-48 md:pb-32 overflow-hidden px-4 sm:px-6 perspective-1000">
      {/* Dynamic Scroll-Reacting Backgrounds */}
      <div 
        className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full max-w-[800px] h-[400px] bg-emerald-500/20 blur-[140px] -z-10 rounded-full transition-all duration-300 ease-out pointer-events-none"
        style={{
          opacity: 0.3 + (scrollProgress * 0.4),
          transform: `translate(-50%, -50%) scale(${1 + scrollProgress * 0.3}) translateY(${scrollProgress * 150}px)`,
          filter: `blur(${120 + scrollProgress * 60}px)`
        }}
      ></div>
      <div 
        className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full max-w-[600px] h-[300px] bg-blue-600/20 blur-[100px] -z-10 rounded-full transition-all duration-300 ease-out pointer-events-none"
        style={{
          opacity: scrollProgress * 0.5,
          transform: `translate(-50%, -50%) scale(${0.8 + scrollProgress * 0.5}) rotate(${scrollProgress * 45}deg)`,
        }}
      ></div>

      <div className="container mx-auto relative z-10 text-center">
        <div 
          className="inline-flex items-center gap-2 px-3 py-1.5 md:px-4 md:py-2 rounded-full bg-slate-900/50 border border-emerald-500/30 mb-6 md:mb-8 animate-fade-in-up transition-transform duration-300"
          style={{ transform: `translateY(${-scrollProgress * 40}px)`, opacity: 1 - scrollProgress * 2 }}
        >
          <div className="flex -space-x-1.5 md:-space-x-2">
            {investorAvatars.map((url, i) => (
              <img key={i} src={url} alt="Investor" className="w-5 h-5 md:w-6 md:h-6 rounded-full border-2 border-slate-950 object-cover" />
            ))}
          </div>
          <span className="text-[10px] md:text-sm font-medium text-emerald-300">
            {t('heroWaitlist')}
          </span>
        </div>

        <h1 
          className="text-3xl sm:text-5xl md:text-6xl lg:text-7xl font-extrabold leading-[1.1] tracking-tight text-white mb-6 min-h-[3em] perspective-1000"
        >
          {renderAnimatedTitle()}
        </h1>
        
        <p 
          className="max-w-2xl mx-auto text-base sm:text-lg md:text-xl text-slate-400 mb-8 md:mb-10 leading-relaxed font-light px-2 sm:px-0 transition-all duration-300"
          style={{ transform: `translateY(${-scrollProgress * 60}px)`, opacity: 1 - scrollProgress * 1.5 }}
        >
          {t('heroSubtitle')}
        </p>

        {!submitted ? (
          <div 
            className="max-w-xl mx-auto w-full transition-all duration-300"
            style={{ transform: `translateY(${-scrollProgress * 80}px)`, opacity: 1 - scrollProgress * 1.2 }}
          >
            <form 
              onSubmit={handleSubmit} 
              className={`flex flex-col gap-3 p-2 md:p-2.5 rounded-2xl bg-slate-900/50 backdrop-blur-md border transition-all duration-500 
                focus-within:-translate-y-2 focus-within:border-emerald-500/40 focus-within:shadow-[0_0_50px_rgba(16,185,129,0.2)]
                ${error ? 'border-red-500/50 shadow-[0_0_20px_rgba(239,68,68,0.15)]' : 'border-white/10'} 
                glass-card`}
            >
              <div className="relative flex-grow flex items-center">
                <div className="absolute left-4 text-slate-500 pointer-events-none">
                  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                  </svg>
                </div>
                <input 
                  type="email" 
                  inputMode="email"
                  placeholder={t('heroPlaceholder')} 
                  value={email} 
                  onChange={(e) => { setEmail(e.target.value); if (error) setError(''); }} 
                  disabled={isLoading} 
                  className="w-full pl-12 pr-12 py-4 bg-transparent text-white outline-none rounded-xl focus:ring-2 focus:ring-emerald-500/50 transition-all placeholder:text-slate-600 disabled:opacity-50 text-base" 
                />
              </div>
              <button 
                type="submit" 
                disabled={isLoading} 
                className="w-full py-4 bg-gradient-to-r from-emerald-500 to-blue-600 hover:from-emerald-400 hover:to-blue-500 text-slate-950 font-bold rounded-xl transition-all shadow-xl shadow-emerald-500/20 hover:scale-[1.03] hover:shadow-[0_0_25px_rgba(16,185,129,0.4)] active:scale-[0.98] whitespace-nowrap flex items-center justify-center disabled:opacity-50 disabled:cursor-wait text-base md:text-lg"
              >
                {isLoading ? "..." : t('heroCTA')}
              </button>
            </form>
            <p className="text-[10px] text-slate-600 mt-4 leading-relaxed max-w-lg mx-auto">
              {t('heroPrivacyNote')}
            </p>
            {error && <p className="text-red-400 text-xs md:text-sm font-medium mt-3 animate-pulse px-2">{error}</p>}
          </div>
        ) : (
          <div className={`p-6 md:p-10 rounded-3xl bg-emerald-500/10 border border-emerald-500/50 max-w-xl mx-auto text-center transition-all duration-1000 ${isFadingOut ? 'animate-fade-out opacity-0' : 'animate-bounce-in opacity-100'}`}>
            <h2 className="text-emerald-400 font-bold text-xl md:text-2xl mb-2">🚀 {t('heroSuccessTitle')}</h2>
            <p className="text-slate-400 text-sm md:text-base">{t('heroSuccessText')}</p>
          </div>
        )}
      </div>
    </section>
  );
};
