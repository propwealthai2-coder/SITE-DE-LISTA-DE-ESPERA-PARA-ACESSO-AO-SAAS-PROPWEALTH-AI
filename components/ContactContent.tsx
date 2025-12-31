
import React, { useState } from 'react';
import { View } from '../App';
import { useLanguage } from '../context/LanguageContext';

interface ContactContentProps {
  onNavigate: (view: View) => void;
}

export const ContactContent: React.FC<ContactContentProps> = ({ onNavigate }) => {
  const [formData, setFormData] = useState({ name: '', email: '', subject: '', message: '' });
  const [status, setStatus] = useState<'idle' | 'loading' | 'success' | 'error'>('idle');
  const [errors, setErrors] = useState<Record<string, string>>({});
  const { t } = useLanguage();

  const validate = () => {
    const newErrors: Record<string, string> = {};
    if (!formData.name.trim()) newErrors.name = t('contactErrorRequired');
    if (!formData.email.trim()) {
      newErrors.email = t('contactErrorRequired');
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
      newErrors.email = t('contactErrorEmail');
    }
    if (!formData.subject.trim()) newErrors.subject = t('contactErrorRequired');
    if (!formData.message.trim()) newErrors.message = t('contactErrorRequired');
    
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!validate()) return;

    setStatus('loading');
    // Simulate API call
    setTimeout(() => {
      setStatus('success');
      setFormData({ name: '', email: '', subject: '', message: '' });
    }, 1500);
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
    if (errors[name]) {
      setErrors(prev => {
        const next = { ...prev };
        delete next[name];
        return next;
      });
    }
  };

  const FloatingInput = ({ name, type = 'text', label }: { name: keyof typeof formData, type?: string, label: string }) => {
    const hasError = !!errors[name];
    const isFilled = formData[name].length > 0;

    return (
      <div className="relative w-full group">
        <input
          id={`contact-${String(name)}`}
          name={name}
          type={type}
          value={formData[name]}
          onChange={handleChange}
          aria-invalid={hasError}
          aria-describedby={hasError ? `error-${String(name)}` : undefined}
          className={`
            w-full px-6 pt-7 pb-3 bg-slate-900/50 border rounded-2xl text-white outline-none 
            transition-all duration-300 ease-out placeholder:opacity-0
            ${hasError 
              ? 'border-red-500/50 bg-red-500/5 focus:border-red-500 shadow-[0_0_15px_rgba(239,68,68,0.1)]' 
              : 'border-white/10 focus:border-emerald-500/50 focus:ring-4 focus:ring-emerald-500/5 focus:shadow-[0_0_20px_rgba(16,185,129,0.1)]'
            }
          `}
          placeholder={label}
        />
        <label
          htmlFor={`contact-${String(name)}`}
          className={`
            absolute left-6 pointer-events-none transition-all duration-300
            ${isFilled 
              ? 'top-2.5 text-[10px] uppercase tracking-wider font-bold text-emerald-400' 
              : 'top-5 text-slate-500 group-focus-within:top-2.5 group-focus-within:text-[10px] group-focus-within:uppercase group-focus-within:tracking-wider group-focus-within:font-bold group-focus-within:text-emerald-400'
            }
          `}
        >
          {label}
        </label>
        {hasError && (
          <span id={`error-${String(name)}`} className="absolute -bottom-5 left-2 text-[10px] text-red-400 animate-fade-in font-medium">
            {errors[name]}
          </span>
        )}
      </div>
    );
  };

  return (
    <div className="pt-32 pb-20 md:pt-48 md:pb-32 container mx-auto px-6 max-w-5xl min-h-[70vh] animate-fade-in">
      <div className="flex flex-col md:flex-row gap-16 lg:gap-24">
        <div className="md:w-1/3 space-y-12">
          <div>
            <h1 className="text-4xl md:text-5xl font-black text-white mb-6 flex items-center gap-4">
              <span className="w-2 h-12 bg-gradient-to-b from-emerald-400 to-blue-600 rounded-full"></span>
              {t('contactTitle')}
            </h1>
            <p className="text-slate-400 leading-relaxed font-light">{t('contactSubtitle')}</p>
          </div>

          <div className="space-y-6">
            <div className="group p-6 rounded-2xl bg-slate-900/40 border border-white/5 hover:border-emerald-500/30 transition-all duration-500">
              <div className="w-10 h-10 rounded-xl bg-emerald-500/10 flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
                <svg className="w-5 h-5 text-emerald-400" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" /></svg>
              </div>
              <h3 className="text-white font-bold mb-1 text-sm">{t('contactEmailLabel')}</h3>
              <p className="text-slate-400 text-sm">support@propwealth.ai</p>
            </div>

            <div className="group p-6 rounded-2xl bg-slate-900/40 border border-white/5 hover:border-blue-500/30 transition-all duration-500">
              <div className="w-10 h-10 rounded-xl bg-blue-500/10 flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
                <svg className="w-5 h-5 text-blue-400" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 20l-7-7 7-7M5 20l-7-7 7-7" /></svg>
              </div>
              <h3 className="text-white font-bold mb-1 text-sm">{t('contactPressLabel')}</h3>
              <p className="text-slate-400 text-sm">press@propwealth.ai</p>
            </div>

            {/* LinkedIn Info Card */}
            <a 
              href="https://www.linkedin.com/company/propwealth-ai/about/?viewAsMember=true" 
              target="_blank" 
              rel="noopener noreferrer"
              className="block group p-6 rounded-2xl bg-slate-900/40 border border-white/5 hover:border-blue-400/30 transition-all duration-500"
            >
              <div className="w-10 h-10 rounded-xl bg-blue-400/10 flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
                <svg className="w-5 h-5 text-blue-400" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"/>
                </svg>
              </div>
              <h3 className="text-white font-bold mb-1 text-sm">LinkedIn</h3>
              <p className="text-slate-400 text-sm">@propwealth-ai</p>
            </a>
          </div>
        </div>

        <div className="md:w-2/3">
          {status === 'success' ? (
            <div className="h-full flex flex-col items-center justify-center text-center space-y-6 animate-bounce-in py-12">
              <div className="relative">
                <div className="absolute inset-0 bg-emerald-500/20 blur-2xl rounded-full"></div>
                <div className="relative w-24 h-24 bg-emerald-500/10 border border-emerald-500/50 rounded-full flex items-center justify-center">
                  <svg className="w-12 h-12 text-emerald-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M5 13l4 4L19 7" />
                  </svg>
                </div>
              </div>
              <div>
                <h2 className="text-3xl font-black text-white mb-2">{t('contactSuccessTitle')}</h2>
                <p className="text-slate-400 max-w-sm">{t('contactSuccessText')}</p>
              </div>
              <button 
                onClick={() => setStatus('idle')}
                className="px-8 py-3 bg-slate-800 text-white rounded-xl hover:bg-slate-700 transition-colors border border-white/10 text-sm font-bold"
              >
                {t('contactSendAnother')}
              </button>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-8 glass-card p-8 md:p-10 rounded-[2.5rem] border-white/5 shadow-2xl relative overflow-hidden group/form">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-8">
                <FloatingInput name="name" label={t('contactFormName')} />
                <FloatingInput name="email" type="email" label={t('contactFormEmail')} />
              </div>
              
              <FloatingInput name="subject" label={t('contactFormSubject')} />
              
              <div className="relative group">
                <textarea
                  id="contact-message"
                  name="message"
                  rows={5}
                  value={formData.message}
                  onChange={handleChange}
                  aria-invalid={!!errors.message}
                  className={`
                    w-full px-6 pt-7 pb-3 bg-slate-900/50 border rounded-2xl text-white outline-none 
                    transition-all duration-300 ease-out placeholder:opacity-0 resize-none
                    ${errors.message 
                      ? 'border-red-500/50 bg-red-500/5 focus:border-red-500 shadow-[0_0_15px_rgba(239,68,68,0.1)]' 
                      : 'border-white/10 focus:border-emerald-500/50 focus:ring-4 focus:ring-emerald-500/5'
                    }
                  `}
                  placeholder={t('contactFormMessage')}
                ></textarea>
                <label
                  htmlFor="contact-message"
                  className={`
                    absolute left-6 pointer-events-none transition-all duration-300
                    ${formData.message.length > 0 
                      ? 'top-2.5 text-[10px] uppercase tracking-wider font-bold text-emerald-400' 
                      : 'top-5 text-slate-500 group-focus-within:top-2.5 group-focus-within:text-[10px] group-focus-within:uppercase group-focus-within:tracking-wider group-focus-within:font-bold group-focus-within:text-emerald-400'
                    }
                  `}
                >
                  {t('contactFormMessage')}
                </label>
                {errors.message && (
                  <span className="absolute -bottom-5 left-2 text-[10px] text-red-400 font-medium">{errors.message}</span>
                )}
              </div>

              <div className="pt-4">
                <button 
                  type="submit" 
                  disabled={status === 'loading'} 
                  className="w-full py-5 bg-gradient-to-r from-emerald-500 via-blue-600 to-emerald-500 bg-[length:200%_auto] hover:bg-right transition-all duration-700 text-slate-950 font-black uppercase tracking-[0.2em] rounded-2xl shadow-xl shadow-emerald-500/20 active:scale-[0.98] disabled:opacity-70 flex items-center justify-center gap-3"
                >
                  {status === 'loading' ? (
                    <svg className="animate-spin h-5 w-5 text-slate-950" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24"><circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle><path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path></svg>
                  ) : (
                    <>
                      {t('contactFormSubmit')}
                      <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M14 5l7 7m0 0l-7 7m7-7H3" /></svg>
                    </>
                  )}
                </button>
              </div>
            </form>
          )}
        </div>
      </div>
      
      <div className="mt-24 p-8 rounded-[2.5rem] glass-card border-blue-500/10 flex flex-col md:flex-row items-center justify-between gap-8 group hover:border-blue-500/30 transition-all duration-700">
        <div className="flex items-center gap-6">
          <div className="w-16 h-16 rounded-2xl bg-blue-600/10 flex items-center justify-center shrink-0">
            <svg className="w-8 h-8 text-blue-400" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8.228 9c.549-1.165 2.03-2 3.772-2 2.21 0 4 1.343 4 3 0 1.4-1.278 2.575-3.006 2.907-.542.104-.994.54-.994 1.093m0 3h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" /></svg>
          </div>
          <div>
            <h4 className="text-xl font-black text-white mb-1">{t('contactSupportTitle')}</h4>
            <p className="text-slate-400 text-sm">{t('contactSupportDesc')}</p>
          </div>
        </div>
        <button 
          onClick={() => onNavigate('faq')} 
          className="px-10 py-4 bg-slate-800/50 text-white rounded-2xl hover:bg-slate-700 transition-all border border-white/5 text-sm font-bold uppercase tracking-widest hover:border-emerald-500/30"
        >
          {t('contactViewFaq')}
        </button>
      </div>
    </div>
  );
};
