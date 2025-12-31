
import React, { useState, useEffect } from 'react';
import { useLanguage } from '../context/LanguageContext';

export const FAQContent: React.FC = () => {
  const [activeIndex, setActiveIndex] = useState<number | null>(null);
  const [visibleIndices, setVisibleIndices] = useState<number[]>([]);
  const { t } = useLanguage();

  const faqs = [
    { question: t('faq1Q'), answer: t('faq1A') },
    { question: t('faq2Q'), answer: t('faq2A') },
    { question: t('faq3Q'), answer: t('faq3A') },
    { question: t('faq4Q'), answer: t('faq4A') }
  ];

  useEffect(() => {
    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          const index = Number(entry.target.getAttribute('data-index'));
          setVisibleIndices((prev) => Array.from(new Set([...prev, index])));
        }
      });
    }, { threshold: 0.1 });
    document.querySelectorAll('.faq-item').forEach((item) => observer.observe(item));
    return () => observer.disconnect();
  }, []);

  return (
    <div className="pt-32 pb-20 md:pt-48 md:pb-32 container mx-auto px-6 max-w-3xl min-h-[70vh] animate-fade-in">
      <div className="text-center mb-16">
        <h1 className="text-4xl md:text-5xl font-extrabold text-white mb-4">{t('faqTitle')}</h1>
        <p className="text-slate-400">{t('faqSubtitle')}</p>
      </div>
      <div className="space-y-4">
        {faqs.map((faq, idx) => (
          <div key={idx} data-index={idx} className={`faq-item glass-card rounded-2xl border-white/5 overflow-hidden transition-all duration-300 ${activeIndex === idx ? 'border-emerald-500/30' : ''} ${visibleIndices.includes(idx) ? 'animate-fade-in-up' : 'reveal-hidden'}`} style={{ animationDelay: `${idx * 100}ms` }}>
            <button onClick={() => setActiveIndex(activeIndex === idx ? null : idx)} className="w-full px-8 py-6 flex items-center justify-between text-left group">
              <span className={`font-bold transition-colors ${activeIndex === idx ? 'text-emerald-400' : 'text-white group-hover:text-emerald-400'}`}>{faq.question}</span>
              <svg className={`w-5 h-5 transition-transform duration-300 ${activeIndex === idx ? 'rotate-180 text-emerald-400' : 'text-slate-600'}`} fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" /></svg>
            </button>
            <div className={`px-8 transition-all duration-300 ease-in-out ${activeIndex === idx ? 'max-h-60 pb-8 opacity-100' : 'max-h-0 opacity-0'}`}><p className="text-slate-400 leading-relaxed text-sm">{faq.answer}</p></div>
          </div>
        ))}
      </div>
    </div>
  );
};
