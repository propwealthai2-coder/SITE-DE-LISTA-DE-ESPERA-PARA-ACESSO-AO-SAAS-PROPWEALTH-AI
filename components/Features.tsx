
import React from 'react';
import { useLanguage } from '../context/LanguageContext';

export const Features: React.FC = () => {
  const { t } = useLanguage();

  const featureList = [
    {
      title: t('feat1Title'),
      description: t('feat1Desc'),
      icon: (
        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13.828 10.172a4 4 0 00-5.656 0l-4 4a4 4 0 105.656 5.656l1.102-1.101m-.758-4.899a4 4 0 005.656 0l4-4a4 4 0 00-5.656-5.656l-1.1 1.1" />
        </svg>
      ),
      color: 'emerald'
    },
    {
      title: t('feat2Title'),
      description: t('feat2Desc'),
      icon: (
        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
        </svg>
      ),
      color: 'blue'
    },
    {
      title: t('feat3Title'),
      description: t('feat3Desc'),
      icon: (
        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
        </svg>
      ),
      color: 'emerald'
    }
  ];

  return (
    <section id="features" className="py-24 relative overflow-hidden">
      <div className="container mx-auto px-6 relative z-10">
        <div className="text-center mb-16">
          <h2 className="text-emerald-400 font-bold uppercase tracking-widest text-sm mb-4">{t('featureBadge')}</h2>
          <h3 className="text-3xl md:text-5xl font-bold text-white mb-6">{t('featureTitle')}</h3>
          <p className="text-slate-400 max-w-xl mx-auto">
            {t('featureDesc')}
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {featureList.map((feature, idx) => (
            <div 
              key={idx}
              className="group p-8 rounded-3xl glass-card transition-all duration-500 hover:-translate-y-2 hover:border-emerald-500/30"
            >
              <div className={`w-12 h-12 rounded-xl flex items-center justify-center mb-6 transition-all duration-300 ${
                feature.color === 'emerald' 
                ? 'bg-emerald-500/20 text-emerald-400 group-hover:bg-emerald-500 group-hover:text-slate-950' 
                : 'bg-blue-500/20 text-blue-400 group-hover:bg-blue-500 group-hover:text-slate-950'
              }`}>
                {feature.icon}
              </div>
              <h4 className="text-xl font-bold text-white mb-4 transition-colors group-hover:text-emerald-400">
                {feature.title}
              </h4>
              <p className="text-slate-400 leading-relaxed text-sm">
                {feature.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
