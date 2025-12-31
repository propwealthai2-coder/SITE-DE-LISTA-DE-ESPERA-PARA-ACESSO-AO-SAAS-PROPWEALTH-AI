
import React from 'react';
import { View } from '../App';
import { useLanguage } from '../context/LanguageContext';

interface LegalContentProps {
  view: View;
}

export const LegalContent: React.FC<LegalContentProps> = ({ view }) => {
  const { t, language } = useLanguage();

  const getLocalizedTitle = () => {
    if (view === 'terms') return t('legalTerms');
    if (view === 'privacy') return t('legalPrivacy');
    return t('legalCookies');
  };

  const sections = [
    { heading: t('legalSection1Heading'), text: t('legalSection1Text') },
    { heading: t('legalSection2Heading'), text: t('legalSection2Text') },
    { heading: t('legalSection3Heading'), text: t('legalSection3Text') }
  ];

  return (
    <div className="pt-32 pb-20 md:pt-48 md:pb-32 container mx-auto px-6 max-w-4xl min-h-[70vh] animate-fade-in">
      <h1 className="text-4xl md:text-5xl font-extrabold text-white mb-12 flex items-center gap-4">
        <span className="w-2 h-12 bg-emerald-500 rounded-full"></span>
        {getLocalizedTitle()}
      </h1>
      
      <div className="space-y-12">
        {sections.map((section, idx) => (
          <div key={idx} className="glass-card p-8 rounded-2xl border-white/5">
            <h2 className="text-xl font-bold text-emerald-400 mb-4">{section.heading}</h2>
            <p className="text-slate-400 leading-relaxed font-light">{section.text}</p>
          </div>
        ))}

        <div className="p-8 rounded-2xl bg-amber-500/5 border border-amber-500/20">
          <h2 className="text-xl font-bold text-amber-400 mb-4 flex items-center gap-2">
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.268 17c-.77 1.333.192 3 1.732 3z" />
            </svg>
            {t('legalResultsTitle')}
          </h2>
          <p className="text-slate-400 text-sm leading-relaxed italic">
            {t('legalResultsText')}
          </p>
        </div>
      </div>
      
      <div className="mt-16 p-8 rounded-2xl bg-blue-500/5 border border-blue-500/20 text-center">
        <p className="text-slate-500 text-sm">
          {t('legalLastUpdate')}: {new Date().toLocaleDateString(language === 'zh' ? 'zh-CN' : language)}
        </p>
      </div>
    </div>
  );
};
