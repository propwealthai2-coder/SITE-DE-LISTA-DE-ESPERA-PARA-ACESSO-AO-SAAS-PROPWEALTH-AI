
import React, { useEffect, useRef, useState } from 'react';
import { useLanguage } from '../context/LanguageContext';

export const Testimonials: React.FC = () => {
  const [visibleItems, setVisibleItems] = useState<number[]>([]);
  const sectionRef = useRef<HTMLElement>(null);
  const { t } = useLanguage();

  const testimonialList = [
    {
      name: t('t1Name'),
      role: t('t1Role'),
      quote: t('t1Quote'),
      avatar: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?fit=crop&w=256&h=256&q=80'
    },
    {
      name: t('t2Name'),
      role: t('t2Role'),
      quote: t('t2Quote'),
      avatar: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?fit=crop&w=256&h=256&q=80'
    },
    {
      name: t('t3Name'),
      role: t('t3Role'),
      quote: t('t3Quote'),
      avatar: 'https://images.unsplash.com/photo-1522529599102-193c0d76b5b6?fit=crop&w=256&h=256&q=80'
    }
  ];

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const index = Number(entry.target.getAttribute('data-index'));
            setVisibleItems((prev) => Array.from(new Set([...prev, index])));
          }
        });
      },
      { threshold: 0.1 }
    );

    const cards = document.querySelectorAll('.testimonial-card');
    cards.forEach((card) => observer.observe(card));

    return () => observer.disconnect();
  }, []);

  return (
    <section id="testimonials" className="py-24 relative" ref={sectionRef}>
      <div className="container mx-auto px-6 relative z-10">
        <div className="text-center mb-16">
          <h3 className="text-3xl md:text-5xl font-bold text-white mb-6">{t('testimonialsTitle')}</h3>
          <p className="text-slate-400 max-w-xl mx-auto">
            {t('testimonialsDesc')}
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {testimonialList.map((item, idx) => (
            <div 
              key={idx}
              data-index={idx}
              className={`testimonial-card p-8 rounded-3xl glass-card flex flex-col items-start transition-all duration-700 hover:scale-[1.02] ${
                visibleItems.includes(idx) ? 'animate-fade-in-up' : 'reveal-hidden'
              }`}
              style={{ animationDelay: `${idx * 150}ms` }}
            >
              <div className="flex items-center gap-4 mb-6">
                <img src={item.avatar} alt={item.name} className="w-12 h-12 rounded-full border border-emerald-500/30 object-cover shadow-lg" />
                <div>
                  <h4 className="text-white font-bold">{item.name}</h4>
                  <p className="text-emerald-400 text-xs uppercase tracking-wider">{item.role}</p>
                </div>
              </div>
              <p className="text-slate-300 italic leading-relaxed">
                "{item.quote}"
              </p>
              <div className="mt-6 flex text-emerald-400">
                {[...Array(5)].map((_, i) => (
                  <svg key={i} className="w-4 h-4 fill-current" viewBox="0 0 20 20">
                    <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                  </svg>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
