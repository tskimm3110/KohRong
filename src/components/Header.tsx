import React, { useState } from 'react';
import { Menu, X, MapPin, Search, Globe, Home, TrendingUp, ShoppingBag } from 'lucide-react';
import { useLanguage } from '../contexts/LanguageContext';

interface HeaderProps {
  onAboutClick?: () => void;
  onDestinationsClick?: () => void;
  onContactClick?: () => void;
  onBlogClick?: () => void;
  onAccommodationClick?: () => void;
  onInvestmentClick?: () => void;
  onServicesClick?: () => void;
  onHomeClick?: () => void;
}

const Header: React.FC<HeaderProps> = ({ 
  onAboutClick, 
  onDestinationsClick, 
  onContactClick, 
  onBlogClick,
  onAccommodationClick,
  onInvestmentClick,
  onServicesClick,
  onHomeClick 
}) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isSearchOpen, setIsSearchOpen] = useState(false);
  const [searchTerm, setSearchTerm] = useState('');
  const { language, setLanguage, t } = useLanguage();

  const toggleLanguage = () => {
    setLanguage(language === 'km' ? 'en' : 'km');
  };

  const handleHomeClick = () => {
    if (onHomeClick) {
      onHomeClick();
    }
    setIsMenuOpen(false);
  };

  const handleSearchToggle = () => {
    setIsSearchOpen(!isSearchOpen);
    if (!isSearchOpen) {
      // Focus on search input when opened
      setTimeout(() => {
        const searchInput = document.getElementById('search-input');
        if (searchInput) {
          searchInput.focus();
        }
      }, 100);
    }
  };

  const handleSearchSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (searchTerm.trim()) {
      // Navigate to blog page with search term
      if (onBlogClick) {
        onBlogClick();
      }
      // You can pass the search term to the blog page here
      console.log('Searching for:', searchTerm);
      setIsSearchOpen(false);
      setSearchTerm('');
    }
  };

  const handleSearchClose = () => {
    setIsSearchOpen(false);
    setSearchTerm('');
  };

  return (
    <header className="bg-white shadow-lg sticky top-0 z-50 backdrop-blur-sm bg-white/95">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <button 
            onClick={handleHomeClick}
            className="flex items-center space-x-3 hover:opacity-80 transition-opacity"
          >
            <div className="bg-gradient-to-r from-koh-rong-500 to-koh-rong-600 p-2 rounded-xl">
              <MapPin className="h-6 w-6 text-white" />
            </div>
            <div>
              <h1 className="text-xl font-bold text-gray-900">
                {language === 'km' ? 'កោះរ៉ុង កម្ពុជា' : 'Koh Rong Cambodia'}
              </h1>
            </div>
          </button>

          {/* Desktop Navigation - Reordered according to request */}
          <nav className="hidden md:flex items-center space-x-6">
            {/* 1. ទំព័រដើម */}
            <button 
              onClick={handleHomeClick}
              className="text-gray-700 hover:text-koh-rong-600 transition-colors font-medium"
            >
              {t('nav.home')}
            </button>
            
            {/* 2. ទីកន្លែងទេសចរណ៍ */}
            <button 
              onClick={onDestinationsClick}
              className="text-gray-700 hover:text-koh-rong-600 transition-colors font-medium"
            >
              {t('nav.destinations')}
            </button>
            
            {/* 3. ប្លុក */}
            <button 
              onClick={onBlogClick}
              className="text-gray-700 hover:text-koh-rong-600 transition-colors font-medium"
            >
              {t('nav.blog')}
            </button>
            
            {/* 4. កន្លែងស្នាក់នៅ */}
            <button 
              onClick={onAccommodationClick}
              className="text-gray-700 hover:text-koh-rong-600 transition-colors font-medium flex items-center space-x-1"
            >
              <Home className="h-4 w-4" />
              <span>{language === 'km' ? 'កន្លែងស្នាក់នៅ' : 'Accommodation'}</span>
            </button>
            
            {/* 5. សេវាកម្ម */}
            <button 
              onClick={onServicesClick}
              className="text-gray-700 hover:text-koh-rong-600 transition-colors font-medium flex items-center space-x-1"
            >
              <ShoppingBag className="h-4 w-4" />
              <span>{language === 'km' ? 'សេវាកម្ម' : 'Services'}</span>
            </button>
            
            {/* 6. ការវិនិយោគ */}
            <button 
              onClick={onInvestmentClick}
              className="text-gray-700 hover:text-koh-rong-600 transition-colors font-medium flex items-center space-x-1"
            >
              <TrendingUp className="h-4 w-4" />
              <span>{t('nav.investment')}</span>
            </button>
            
            {/* 7. អំពីយើង */}
            <button 
              onClick={onAboutClick}
              className="text-gray-700 hover:text-koh-rong-600 transition-colors font-medium"
            >
              {t('nav.about')}
            </button>
            
            {/* 8. ទំនាក់ទំនង */}
            <button 
              onClick={onContactClick}
              className="text-gray-700 hover:text-koh-rong-600 transition-colors font-medium"
            >
              {t('nav.contact')}
            </button>
          </nav>

          {/* Search and Language Toggle - Optimized */}
          <div className="hidden md:flex items-center space-x-3">
            <button 
              onClick={handleSearchToggle}
              className="p-2 text-gray-600 hover:text-koh-rong-600 transition-colors relative"
              title={language === 'km' ? 'ស្វែងរក' : 'Search'}
            >
              <Search className="h-5 w-5" />
            </button>
            <button 
              onClick={toggleLanguage}
              className="flex items-center space-x-2 px-3 py-2 rounded-lg border border-gray-200 hover:bg-gray-50 hover:border-koh-rong-300 transition-all duration-300 group"
              title={language === 'km' ? 'Switch to English' : 'ប្តូរទៅភាសាខ្មែរ'}
            >
              <Globe className="h-4 w-4 text-gray-600 group-hover:text-koh-rong-600 transition-colors" />
              <div className="flex items-center space-x-1">
                <span className="text-sm">
                  {language === 'km' ? '🇰🇭' : '🇺🇸'}
                </span>
                <span className="text-sm font-medium text-gray-700 group-hover:text-koh-rong-600 transition-colors">
                  {language === 'km' ? 'ខ្មែរ' : 'EN'}
                </span>
              </div>
            </button>
          </div>

          {/* Mobile menu button */}
          <button
            className="md:hidden p-2 text-gray-600"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </button>
        </div>

        {/* Search Overlay */}
        {isSearchOpen && (
          <div className="absolute top-full left-0 right-0 bg-white shadow-xl border-t z-50">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
              <form onSubmit={handleSearchSubmit} className="relative">
                <div className="flex items-center space-x-4">
                  <div className="flex-1 relative">
                    <Search className="absolute left-4 top-1/2 transform -translate-y-1/2 h-5 w-5 text-gray-400" />
                    <input
                      id="search-input"
                      type="text"
                      value={searchTerm}
                      onChange={(e) => setSearchTerm(e.target.value)}
                      placeholder={language === 'km' ? 'ស្វែងរកអត្ថបទ, ទីកន្លែង, សេវាកម្ម...' : 'Search articles, places, services...'}
                      className="w-full pl-12 pr-4 py-4 text-lg border border-gray-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-koh-rong-500 focus:border-transparent transition-all"
                      autoComplete="off"
                    />
                  </div>
                  <button
                    type="submit"
                    className="bg-gradient-to-r from-koh-rong-500 to-koh-rong-600 hover:from-koh-rong-600 hover:to-koh-rong-700 text-white px-8 py-4 rounded-xl font-semibold transition-all duration-300 transform hover:scale-105"
                  >
                    {language === 'km' ? 'ស្វែងរក' : 'Search'}
                  </button>
                  <button
                    type="button"
                    onClick={handleSearchClose}
                    className="p-4 text-gray-400 hover:text-gray-600 transition-colors"
                  >
                    <X className="h-5 w-5" />
                  </button>
                </div>
              </form>
              
              {/* Search Suggestions */}
              <div className="mt-6">
                <h3 className="text-sm font-semibold text-gray-700 mb-3">
                  {language === 'km' ? 'ការស្វែងរកពេញនិយម:' : 'Popular searches:'}
                </h3>
                <div className="flex flex-wrap gap-2">
                  {[
                    language === 'km' ? 'ទូកល្បឿនលឿន' : 'Speed boat',
                    language === 'km' ? 'កន្លែងស្នាក់នៅ' : 'Accommodation',
                    language === 'km' ? 'ឆ្នេរសុខសាន្ត' : 'Sok San Beach',
                    language === 'km' ? 'ម្ហូបអាហារ' : 'Food',
                    language === 'km' ? 'ជួលម៉ូតូ' : 'Motorbike rental',
                    language === 'km' ? 'ទេសចរណ៍' : 'Tourism'
                  ].map((suggestion, index) => (
                    <button
                      key={index}
                      onClick={() => {
                        setSearchTerm(suggestion);
                        handleSearchSubmit(new Event('submit') as any);
                      }}
                      className="bg-gray-100 hover:bg-koh-rong-100 text-gray-700 hover:text-koh-rong-700 px-3 py-1 rounded-full text-sm transition-colors"
                    >
                      {suggestion}
                    </button>
                  ))}
                </div>
              </div>
            </div>
          </div>
        )}

        {/* Mobile Navigation - Same order */}
        {isMenuOpen && (
          <div className="md:hidden py-4 border-t">
            <nav className="flex flex-col space-y-4">
              {/* 1. ទំព័រដើម */}
              <button 
                onClick={handleHomeClick}
                className="text-gray-700 hover:text-koh-rong-600 transition-colors font-medium text-left"
              >
                {t('nav.home')}
              </button>
              
              {/* 2. ទីកន្លែងទេសចរណ៍ */}
              <button 
                onClick={() => {
                  onDestinationsClick?.();
                  setIsMenuOpen(false);
                }}
                className="text-gray-700 hover:text-koh-rong-600 transition-colors font-medium text-left"
              >
                {t('nav.destinations')}
              </button>
              
              {/* 3. ប្លុក */}
              <button 
                onClick={() => {
                  onBlogClick?.();
                  setIsMenuOpen(false);
                }}
                className="text-gray-700 hover:text-koh-rong-600 transition-colors font-medium text-left"
              >
                {t('nav.blog')}
              </button>
              
              {/* 4. កន្លែងស្នាក់នៅ */}
              <button 
                onClick={() => {
                  onAccommodationClick?.();
                  setIsMenuOpen(false);
                }}
                className="text-gray-700 hover:text-koh-rong-600 transition-colors font-medium text-left flex items-center space-x-2"
              >
                <Home className="h-4 w-4" />
                <span>{language === 'km' ? 'កន្លែងស្នាក់នៅ' : 'Accommodation'}</span>
              </button>
              
              {/* 5. សេវាកម្ម */}
              <button 
                onClick={() => {
                  onServicesClick?.();
                  setIsMenuOpen(false);
                }}
                className="text-gray-700 hover:text-koh-rong-600 transition-colors font-medium text-left flex items-center space-x-2"
              >
                <ShoppingBag className="h-4 w-4" />
                <span>{language === 'km' ? 'សេវាកម្ម' : 'Services'}</span>
              </button>
              
              {/* 6. ការវិនិយោគ */}
              <button 
                onClick={() => {
                  onInvestmentClick?.();
                  setIsMenuOpen(false);
                }}
                className="text-gray-700 hover:text-koh-rong-600 transition-colors font-medium text-left flex items-center space-x-2"
              >
                <TrendingUp className="h-4 w-4" />
                <span>{t('nav.investment')}</span>
              </button>
              
              {/* 7. អំពីយើង */}
              <button 
                onClick={() => {
                  onAboutClick?.();
                  setIsMenuOpen(false);
                }}
                className="text-gray-700 hover:text-koh-rong-600 transition-colors font-medium text-left"
              >
                {t('nav.about')}
              </button>
              
              {/* 8. ទំនាក់ទំនង */}
              <button 
                onClick={() => {
                  onContactClick?.();
                  setIsMenuOpen(false);
                }}
                className="text-gray-700 hover:text-koh-rong-600 transition-colors font-medium text-left"
              >
                {t('nav.contact')}
              </button>
              
              {/* Search for Mobile */}
              <button 
                onClick={() => {
                  handleSearchToggle();
                  setIsMenuOpen(false);
                }}
                className="text-gray-700 hover:text-koh-rong-600 transition-colors font-medium text-left flex items-center space-x-2"
              >
                <Search className="h-4 w-4" />
                <span>{language === 'km' ? 'ស្វែងរក' : 'Search'}</span>
              </button>
              
              <button 
                onClick={toggleLanguage}
                className="flex items-center space-x-2 text-gray-700 hover:text-koh-rong-600 transition-colors font-medium w-fit p-2 rounded-lg border border-gray-200 hover:bg-gray-50"
              >
                <Globe className="h-4 w-4" />
                <span className="text-sm">
                  {language === 'km' ? '🇺🇸' : '🇰🇭'}
                </span>
                <span className="text-sm">
                  {language === 'km' ? 'English' : 'ខ្មែរ'}
                </span>
              </button>
            </nav>
          </div>
        )}
      </div>
    </header>
  );
};

export default Header;