import React, { useState } from 'react';
import { LanguageProvider } from './contexts/LanguageContext';
import Header from './components/Header';
import Hero from './components/Hero';
import FeaturedPosts from './components/FeaturedPosts';
import TravelGallery from './components/TravelGallery';
import Categories from './components/Categories';
import Newsletter from './components/Newsletter';
import Footer from './components/Footer';
import ArticlePage from './components/ArticlePage';
import AboutPage from './components/AboutPage';
import DestinationsPage from './components/DestinationsPage';
import ContactPage from './components/ContactPage';
import BlogPage from './components/BlogPage';
import AccommodationPage from './components/AccommodationPage';
import InvestmentPage from './components/InvestmentPage';
import ServicesPage from './components/ServicesPage';
import TermsOfServicePage from './components/TermsOfServicePage';
import CookiePolicyPage from './components/CookiePolicyPage';
import PrivacyPolicyPage from './components/PrivacyPolicyPage';
import { getArticleBySlug, articles } from './data/articles';

function App() {
  const [currentView, setCurrentView] = useState<'home' | 'article' | 'about' | 'destinations' | 'contact' | 'blog' | 'accommodation' | 'investment' | 'services' | 'terms' | 'cookies' | 'privacy'>('home');
  const [selectedArticle, setSelectedArticle] = useState<number | null>(null);

  const handleArticleClick = (articleId: number) => {
    setSelectedArticle(articleId);
    setCurrentView('article');
    window.scrollTo(0, 0);
  };

  const handleAboutClick = () => {
    setCurrentView('about');
    window.scrollTo(0, 0);
  };

  const handleDestinationsClick = () => {
    setCurrentView('destinations');
    window.scrollTo(0, 0);
  };

  const handleContactClick = () => {
    setCurrentView('contact');
    window.scrollTo(0, 0);
  };

  const handleBlogClick = () => {
    setCurrentView('blog');
    window.scrollTo(0, 0);
  };

  const handleAccommodationClick = () => {
    setCurrentView('accommodation');
    window.scrollTo(0, 0);
  };

  const handleInvestmentClick = () => {
    setCurrentView('investment');
    window.scrollTo(0, 0);
  };

  const handleServicesClick = () => {
    setCurrentView('services');
    window.scrollTo(0, 0);
  };

  const handleTermsClick = () => {
    setCurrentView('terms');
    window.scrollTo(0, 0);
  };

  const handleCookiesClick = () => {
    setCurrentView('cookies');
    window.scrollTo(0, 0);
  };

  const handlePrivacyClick = () => {
    setCurrentView('privacy');
    window.scrollTo(0, 0);
  };

  const handleBackToHome = () => {
    setCurrentView('home');
    setSelectedArticle(null);
    window.scrollTo(0, 0);
  };

  const article = selectedArticle ? articles.find(a => a.id === selectedArticle) : null;

  return (
    <LanguageProvider>
      <div className="min-h-screen bg-white">
        <Header 
          onAboutClick={handleAboutClick}
          onDestinationsClick={handleDestinationsClick}
          onContactClick={handleContactClick}
          onBlogClick={handleBlogClick}
          onAccommodationClick={handleAccommodationClick}
          onInvestmentClick={handleInvestmentClick}
          onServicesClick={handleServicesClick}
          onHomeClick={handleBackToHome}
        />
        
        {currentView === 'home' ? (
          <>
            <Hero />
            <FeaturedPosts onArticleClick={handleArticleClick} />
            <TravelGallery onArticleClick={handleArticleClick} />
            <Categories />
            <Newsletter />
            <Footer 
              onTermsClick={handleTermsClick}
              onCookiesClick={handleCookiesClick}
              onPrivacyClick={handlePrivacyClick}
            />
          </>
        ) : currentView === 'about' ? (
          <AboutPage onBack={handleBackToHome} />
        ) : currentView === 'destinations' ? (
          <DestinationsPage onBack={handleBackToHome} onAccommodationClick={handleAccommodationClick} />
        ) : currentView === 'contact' ? (
          <ContactPage onBack={handleBackToHome} />
        ) : currentView === 'blog' ? (
          <BlogPage onBack={handleBackToHome} onArticleClick={handleArticleClick} />
        ) : currentView === 'accommodation' ? (
          <AccommodationPage onBack={handleBackToHome} />
        ) : currentView === 'investment' ? (
          <InvestmentPage onBack={handleBackToHome} />
        ) : currentView === 'services' ? (
          <ServicesPage onBack={handleBackToHome} />
        ) : currentView === 'terms' ? (
          <TermsOfServicePage onBack={handleBackToHome} />
        ) : currentView === 'cookies' ? (
          <CookiePolicyPage onBack={handleBackToHome} />
        ) : currentView === 'privacy' ? (
          <PrivacyPolicyPage onBack={handleBackToHome} />
        ) : (
          article && (
            <ArticlePage 
              article={article} 
              onBack={handleBackToHome}
            />
          )
        )}
      </div>
    </LanguageProvider>
  );
}

export default App;