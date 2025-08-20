import React, { useState } from "react";
import { LanguageProvider } from "./contexts/LanguageContext";
import Header from "./components/Header";
import Hero from "./components/Hero";
import Footer from "./components/Footer";
import ArticlePage from "./components/ArticlePage";
import AboutPage from "./components/AboutPage";
import DestinationsPage from "./components/DestinationsPage";
import ContactPage from "./components/ContactPage";
import BlogPage from "./components/BlogPage";
import AccommodationPage from "./components/AccommodationPage";
import InvestmentPage from "./components/InvestmentPage";
import ServicesPage from "./components/ServicesPage";
import TermsOfServicePage from "./components/TermsOfServicePage";
import CookiePolicyPage from "./components/CookiePolicyPage";
import PrivacyPolicyPage from "./components/PrivacyPolicyPage";
import { getArticleBySlug, articles } from "./data/articles";
import FollowFacebook from "./components/FollowFacebook";
import SitemapPage from "./components/SitemapPage";
import InvestmentDetailPage from "./components/InvestmentDetailPage";
import ServiceDetailPage from "./components/ServiceDetailPage";
import AccommodationDetailPage from "./components/AccommodationDetailPage";
import FeaturedPosts from "./components/FeaturedPosts";
import TravelGallery from "./components/TravelGallery";
import Categories from "./components/Categories";

interface Accommodation {
  id: number;
  name: string;
  nameEn: string;
  type: string;
  typeEn: string;
  beach: string;
  beachEn: string;
  price: string;
  priceRange: string;
  rating: number;
  reviews: number;
  description: string;
  descriptionEn: string;
  features: string[];
  featuresEn: string[];
  image: string;
  gallery: string[];
  contact: {
    phone: string;
    email: string;
    website?: string;
  };
  coordinates: {
    lat: number;
    lng: number;
  };
  availability: boolean;
}

interface Service {
  id: number;
  name: string;
  nameEn: string;
  description: string;
  descriptionEn: string;
  image: string;
  icon: string;
  details: string;
  detailsEn: string;
}

function App() {
  const [currentView, setCurrentView] = useState<
    | "home"
    | "article"
    | "about"
    | "destinations"
    | "contact"
    | "blog"
    | "accommodation"
    | "investment"
    | "services"
    | "terms"
    | "cookies"
    | "privacy"
    | "sitemap"
    | "categoryArticles"
    | "investmentDetail"
    | "serviceDetail"
    | "accommodationDetail"
  >("home");
  const [selectedArticle, setSelectedArticle] = useState<number | null>(null);
  const [selectedCategoryId, setSelectedCategoryId] = useState<number | null>(
    null
  );
  const [selectedInvestment, setSelectedInvestment] = useState<any>(null);
  const [selectedService, setSelectedService] = useState<Service | null>(null);
  const [selectedAccommodationItem, setSelectedAccommodationItem] =
    useState<Accommodation | null>(null);

  const handleViewInvestmentDetails = (opportunity: any) => {
    setSelectedInvestment(opportunity);
    setCurrentView("investmentDetail");
    window.scrollTo(0, 0);
  };

  const handleBackToInvestments = () => {
    setCurrentView("investment");
    setSelectedInvestment(null);
    window.scrollTo(0, 0);
  };

  const handleServiceSelect = (service: Service) => {
    setSelectedService(service);
    setCurrentView("serviceDetail");
    window.scrollTo(0, 0);
  };

  const handleBackToServices = () => {
    setCurrentView("services");
    setSelectedService(null);
    window.scrollTo(0, 0);
  };

  const handleArticleClick = (articleId: number) => {
    setSelectedArticle(articleId);
    setCurrentView("article");
    window.scrollTo(0, 0);
  };

  const handleCategoryClick = (categoryId: number) => {
    setSelectedCategoryId(categoryId);
    setCurrentView("categoryArticles");
    window.scrollTo(0, 0);
  };

  const handleAboutClick = () => {
    setCurrentView("about");
    window.scrollTo(0, 0);
  };

  const handleDestinationsClick = () => {
    setCurrentView("destinations");
    window.scrollTo(0, 0);
  };

  const handleContactClick = () => {
    setCurrentView("contact");
    window.scrollTo(0, 0);
  };

  const handleBlogClick = () => {
    setCurrentView("blog");
    window.scrollTo(0, 0);
  };

  const handleAccommodationClick = () => {
    setCurrentView("accommodation");
    window.scrollTo(0, 0);
  };

  const handleInvestmentClick = () => {
    setCurrentView("investment");
    window.scrollTo(0, 0);
  };

  const handleServicesClick = () => {
    setCurrentView("services");
    window.scrollTo(0, 0);
  };

  const handleTermsClick = () => {
    setCurrentView("terms");
    window.scrollTo(0, 0);
  };

  const handleCookiesClick = () => {
    setCurrentView("cookies");
    window.scrollTo(0, 0);
  };

  const handlePrivacyClick = () => {
    setCurrentView("privacy");
    window.scrollTo(0, 0);
  };

  const handleSitemapClick = () => {
    setCurrentView("sitemap");
    window.scrollTo(0, 0);
  };

  const handleBackToHome = () => {
    setCurrentView("home");
    setSelectedArticle(null);
    setSelectedCategoryId(null);
    setSelectedInvestment(null);
    setSelectedService(null);
    setSelectedAccommodationItem(null);
    window.scrollTo(0, 0);
  };

  const handleAccommodationItemClick = (accommodation: Accommodation) => {
    setSelectedAccommodationItem(accommodation);
    setCurrentView("accommodationDetail");
    window.scrollTo(0, 0);
  };

  const handleBackToAccommodation = () => {
    setCurrentView("accommodation");
    setSelectedAccommodationItem(null);
    window.scrollTo(0, 0);
  };

  const article = selectedArticle
    ? articles.find((a) => a.id === selectedArticle)
    : null;

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

        {currentView === "home" ? (
          <>
            <Hero onExploreClick={handleBlogClick} />
            <FeaturedPosts onArticleClick={handleArticleClick} />
            <TravelGallery onArticleClick={handleArticleClick} />
            {/* <Categories onCategoryClick={handleCategoryClick} /> */}
            <FollowFacebook />
            <Footer
              onTermsClick={handleTermsClick}
              onCookiesClick={handleCookiesClick}
              onPrivacyClick={handlePrivacyClick}
              onSitemapClick={handleSitemapClick}
              onAccommodationClick={handleAccommodationClick}
              onServicesClick={handleServicesClick}
              onInvestmentClick={handleInvestmentClick}
              onHomeClick={handleBackToHome}
              onDestinationsClick={handleDestinationsClick}
              onBlogClick={handleBlogClick}
              onAboutClick={handleAboutClick}
              onContactClick={handleContactClick}
            />
          </>
        ) : currentView === "about" ? (
          <AboutPage onBack={handleBackToHome} />
        ) : currentView === "destinations" ? (
          <DestinationsPage
            onBack={handleBackToHome}
            onAccommodationClick={handleAccommodationClick}
          />
        ) : currentView === "contact" ? (
          <ContactPage onBack={handleBackToHome} />
        ) : currentView === "blog" ? (
          <BlogPage
            onBack={handleBackToHome}
            onArticleClick={handleArticleClick}
          />
        ) : currentView === "accommodation" ? (
          <AccommodationPage
            onBack={handleBackToHome}
            onAccommodationItemClick={handleAccommodationItemClick}
          />
        ) : currentView === "accommodationDetail" &&
          selectedAccommodationItem ? (
          <AccommodationDetailPage
            accommodation={selectedAccommodationItem}
            onBack={handleBackToAccommodation}
          />
        ) : currentView === "investment" ? (
          <InvestmentPage
            onBack={handleBackToHome}
            onViewDetails={handleViewInvestmentDetails}
          />
        ) : currentView === "investmentDetail" ? (
          <InvestmentDetailPage
            opportunity={selectedInvestment}
            onBack={handleBackToInvestments}
          />
        ) : currentView === "services" ? (
          <ServicesPage
            onBack={handleBackToHome}
            onServiceSelect={handleServiceSelect}
          />
        ) : currentView === "serviceDetail" && selectedService ? (
          <ServiceDetailPage
            service={selectedService}
            onBack={handleBackToServices}
          />
        ) : currentView === "terms" ? (
          <TermsOfServicePage onBack={handleBackToHome} />
        ) : currentView === "cookies" ? (
          <CookiePolicyPage onBack={handleBackToHome} />
        ) : currentView === "privacy" ? (
          <PrivacyPolicyPage onBack={handleBackToHome} />
        ) : currentView === "sitemap" ? (
          <SitemapPage onBack={handleBackToHome} />
        ) : (
          article && <ArticlePage article={article} onBack={handleBackToHome} />
        )}
      </div>
    </LanguageProvider>
  );
}

export default App;
