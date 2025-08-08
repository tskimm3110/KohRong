import React, { useState } from 'react';
import { Mail, Send, CheckCircle } from 'lucide-react';
import { useLanguage } from '../contexts/LanguageContext';

const Newsletter = () => {
  const [email, setEmail] = useState('');
  const [isSubscribed, setIsSubscribed] = useState(false);
  const { language, t } = useLanguage();

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (email) {
      setIsSubscribed(true);
      setEmail('');
      setTimeout(() => setIsSubscribed(false), 3000);
    }
  };

  return (
    <section className="py-20 bg-gradient-to-br from-koh-rong-500 via-koh-rong-600 to-blue-700 relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-0 left-0 w-96 h-96 bg-white rounded-full -translate-x-48 -translate-y-48"></div>
        <div className="absolute bottom-0 right-0 w-96 h-96 bg-white rounded-full translate-x-48 translate-y-48"></div>
      </div>

      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
        <div className="bg-white/10 backdrop-blur-lg rounded-3xl p-12 border border-white/20">
          <div className="flex justify-center mb-8">
            <div className="bg-white/20 p-6 rounded-full">
              <Mail className="h-12 w-12 text-white" />
            </div>
          </div>
          
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
            {t('newsletter.title')}
          </h2>
          <p className="text-xl text-blue-100 mb-10 max-w-2xl mx-auto leading-relaxed">
            {t('newsletter.subtitle')}
          </p>

          {!isSubscribed ? (
            <form onSubmit={handleSubmit} className="max-w-md mx-auto">
              <div className="flex flex-col sm:flex-row gap-4">
                <input
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder={t('newsletter.placeholder')}
                  className="flex-1 px-6 py-4 rounded-full text-gray-900 placeholder-gray-500 focus:outline-none focus:ring-4 focus:ring-white/30 bg-white/95 backdrop-blur-sm border border-white/20"
                  required
                />
                <button
                  type="submit"
                  className="bg-white text-koh-rong-600 px-8 py-4 rounded-full font-semibold hover:bg-gray-100 transition-all duration-300 flex items-center justify-center space-x-2 shadow-xl hover:shadow-2xl transform hover:scale-105"
                >
                  <span>{t('newsletter.subscribe')}</span>
                  <Send className="h-5 w-5" />
                </button>
              </div>
            </form>
          ) : (
            <div className="max-w-md mx-auto">
              <div className="bg-green-500/20 border border-green-400/30 rounded-full px-8 py-4 flex items-center justify-center space-x-3">
                <CheckCircle className="h-6 w-6 text-green-300" />
                <span className="text-green-100 font-semibold">
                  {t('newsletter.success')}
                </span>
              </div>
            </div>
          )}

          <p className="text-blue-100 text-sm mt-6 opacity-80">
            {t('newsletter.disclaimer')}
          </p>

          {/* Social Proof */}
          <div className="mt-8 flex items-center justify-center space-x-8 text-blue-100">
            <div className="text-center">
              <div className="text-2xl font-bold">5K+</div>
              <div className="text-sm opacity-80">
                {t('newsletter.subscribers')}
              </div>
            </div>
            <div className="text-center">
              <div className="text-2xl font-bold">50+</div>
              <div className="text-sm opacity-80">
                {t('hero.articles')}
              </div>
            </div>
            <div className="text-center">
              <div className="text-2xl font-bold">4.9★</div>
              <div className="text-sm opacity-80">
                {t('newsletter.rating')}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Newsletter;