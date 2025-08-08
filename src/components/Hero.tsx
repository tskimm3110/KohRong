import React from 'react';
import { ArrowRight, Play, MapPin, Calendar, Users } from 'lucide-react';
import { useLanguage } from '../contexts/LanguageContext';

const Hero = () => {
  const { language, t } = useLanguage();

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background Image with Overlay */}
      <div 
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{
          backgroundImage: "url('/hero-bg.jpg')"
        }}
      >
        <div className="absolute inset-0 bg-gradient-to-b from-black/50 via-black/30 to-black/60"></div>
      </div>

      {/* Content */}
      <div className="relative z-10 text-center text-white max-w-5xl mx-auto px-4">
        <div className="mb-6">
          <div className="inline-flex items-center space-x-2 bg-white/10 backdrop-blur-sm rounded-full px-4 py-2 mb-6">
            <MapPin className="h-4 w-4 text-koh-rong-300" />
            <span className="text-sm font-medium">{t('hero.subtitle')}</span>
          </div>
        </div>

        <h1 className="text-5xl md:text-7xl lg:text-8xl font-bold mb-8 leading-[1.1] tracking-tight">
          <span className="block mb-2">{t('hero.welcome')}</span>
          <span className="block text-transparent bg-clip-text bg-gradient-to-r from-koh-rong-300 via-blue-300 to-purple-300 leading-[1.2] py-2">
            {t('hero.island')}
          </span>
        </h1>

        <p className="text-xl md:text-2xl mb-8 text-gray-200 max-w-3xl mx-auto leading-relaxed">
          {t('hero.description')}
        </p>
        
        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-12">
          <button className="group bg-gradient-to-r from-koh-rong-500 to-koh-rong-600 hover:from-koh-rong-600 hover:to-koh-rong-700 text-white px-8 py-4 rounded-full font-semibold text-lg transition-all duration-300 transform hover:scale-105 flex items-center space-x-2 shadow-xl">
            <span>{t('hero.explore')}</span>
            <ArrowRight className="h-5 w-5 group-hover:translate-x-1 transition-transform" />
          </button>
          
          <button className="group border-2 border-white/80 text-white hover:bg-white hover:text-gray-900 px-8 py-4 rounded-full font-semibold text-lg transition-all duration-300 flex items-center space-x-2 backdrop-blur-sm">
            <Play className="h-5 w-5 group-hover:scale-110 transition-transform" />
            <span>{t('hero.watch')}</span>
          </button>
        </div>

        {/* Stats */}
        <div className="grid grid-cols-3 gap-8 max-w-2xl mx-auto">
          <div className="text-center">
            <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-4">
              <Calendar className="h-8 w-8 text-koh-rong-300 mx-auto mb-2" />
              <div className="text-2xl font-bold">50+</div>
              <div className="text-sm text-gray-300">
                {t('hero.articles')}
              </div>
            </div>
          </div>
          <div className="text-center">
            <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-4">
              <Users className="h-8 w-8 text-koh-rong-300 mx-auto mb-2" />
              <div className="text-2xl font-bold">10K+</div>
              <div className="text-sm text-gray-300">
                {t('hero.readers')}
              </div>
            </div>
          </div>
          <div className="text-center">
            <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-4">
              <MapPin className="h-8 w-8 text-koh-rong-300 mx-auto mb-2" />
              <div className="text-2xl font-bold">25+</div>
              <div className="text-sm text-gray-300">
                {t('hero.locations')}
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
        <div className="w-6 h-10 border-2 border-white/60 rounded-full flex justify-center">
          <div className="w-1 h-3 bg-white/60 rounded-full mt-2 animate-pulse"></div>
        </div>
      </div>
    </section>
  );
};

export default Hero;