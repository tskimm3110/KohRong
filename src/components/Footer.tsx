import React from "react";
import { MapPin, Mail, Phone, MapIcon, Heart, Globe } from "lucide-react";
import { useLanguage } from "../contexts/LanguageContext";

export interface FooterProps {
  onTermsClick?: () => void;
  onCookiesClick?: () => void;
  onPrivacyClick?: () => void;
  onSitemapClick?: () => void;
  onAccommodationClick?: () => void;
  onServicesClick?: () => void;
  onInvestmentClick?: () => void;
  onHomeClick?: () => void;
  onDestinationsClick?: () => void;
  onBlogClick?: () => void;
  onAboutClick?: () => void;
  onContactClick?: () => void;
}

const Footer: React.FC<FooterProps> = ({
  onTermsClick,
  onCookiesClick,
  onPrivacyClick,
  onSitemapClick,
  onAccommodationClick,
  onServicesClick,
  onInvestmentClick,
  onHomeClick,
  onDestinationsClick,
  onBlogClick,
  onAboutClick,
  onContactClick,
}) => {
  const { language, t } = useLanguage();

  const getContactInfo = () => {
    if (language === "km") {
      return {
        address: "កោះរ៉ុង\nខេត្តព្រះសីហនុ កម្ពុជា",
        email: "chhaileang27@gmail.com",
        phone: "010 820 486 / 097 56 86 425",
        website: "www.kohrong-cambodia.com",
      };
    } else {
      return {
        address: "Koh Rong Island\nSihanoukville Province, Cambodia",
        email: "chhaileang27@gmail.com",
        phone: "010 820 486 / 097 56 86 425",
        website: "www.kohrong-cambodia.com",
      };
    }
  };

  const contactInfo = getContactInfo();

  const socialLinks = [
    {
      name: "Facebook",
      url: "https://web.facebook.com/kohrongshvcambodia",
      color: "hover:bg-blue-600",
      icon: (
        <svg className="h-5 w-5" fill="currentColor" viewBox="0 0 24 24">
          <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z" />
        </svg>
      ),
    },
    {
      name: "Instagram",
      url: "https://www.instagram.com/kohrongcambodiashv?igsh=MTMweXN3Y2R6dWU2bw%3D%3D&utm_source=qr",
      color: "hover:bg-pink-600",
      icon: (
        <svg className="h-5 w-5" fill="currentColor" viewBox="0 0 24 24">
          <path d="M12.017 0C5.396 0 .029 5.367.029 11.987c0 6.62 5.367 11.987 11.988 11.987 6.62 0 11.987-5.367 11.987-11.987C24.014 5.367 18.637.001 12.017.001zM8.449 16.988c-1.297 0-2.448-.49-3.323-1.297C4.198 14.895 3.708 13.744 3.708 12.447s.49-2.448 1.418-3.323c.875-.807 2.026-1.297 3.323-1.297s2.448.49 3.323 1.297c.928.875 1.418 2.026 1.418 3.323s-.49 2.448-1.418 3.244c-.875.807-2.026 1.297-3.323 1.297zm7.83-9.781c-.49 0-.875-.385-.875-.875s.385-.875.875-.875.875.385.875.875-.385.875-.875.875zm-4.262 1.297c-1.297 0-2.345 1.048-2.345 2.345s1.048 2.345 2.345 2.345 2.345-1.048 2.345-2.345-1.048-2.345-2.345-2.345z" />
        </svg>
      ),
    },
    {
      name: "TikTok",
      url: "https://www.tiktok.com/@koh.rong.cambodia?_t=ZS-8yhR489SGyO&_r=1",
      color: "hover:bg-gray-800",
      icon: (
        <svg className="h-5 w-5" fill="currentColor" viewBox="0 0 24 24">
          <path d="M12.525.02c1.31-.02 2.61-.01 3.91-.02.08 1.53.63 3.09 1.75 4.17 1.12 1.11 2.7 1.62 4.24 1.79v4.03c-1.44-.05-2.89-.35-4.2-.97-.57-.26-1.1-.59-1.62-.93-.01 2.92.01 5.84-.02 8.75-.08 1.4-.54 2.79-1.35 3.94-1.31 1.92-3.58 3.17-5.91 3.21-1.43.08-2.86-.31-4.08-1.03-2.02-1.19-3.44-3.37-3.65-5.71-.02-.5-.03-1-.01-1.49.18-1.9 1.12-3.72 2.58-4.96 1.66-1.44 3.98-2.13 6.15-1.72.02 1.48-.04 2.96-.04 4.44-.99-.32-2.15-.23-3.02.37-.63.41-1.11 1.04-1.36 1.75-.21.51-.15 1.07-.14 1.61.24 1.64 1.82 3.02 3.5 2.87 1.12-.01 2.19-.66 2.77-1.61.19-.33.4-.67.41-1.06.1-1.79.06-3.57.07-5.36.01-4.03-.01-8.05.02-12.07z" />
        </svg>
      ),
    },
    {
      name: "YouTube",
      url: "https://youtube.com/@chhaileangchen6864?si=7H9HehCOBCzI2L1p",
      color: "hover:bg-red-600",
      icon: (
        <svg className="h-5 w-5" fill="currentColor" viewBox="0 0 24 24">
          <path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z" />
        </svg>
      ),
    },
    {
      name: "Telegram",
      url: "https://t.me/chhaileang_chen",
      color: "hover:bg-blue-500",
      icon: (
        <svg className="h-5 w-5" fill="currentColor" viewBox="0 0 24 24">
          <path d="M11.944 0A12 12 0 0 0 0 12a12 12 0 0 0 12 12 12 12 0 0 0 12-12A12 12 0 0 0 12 0a12 12 0 0 0-.056 0zm4.962 7.224c.1-.002.321.023.465.14a.506.506 0 0 1 .171.325c.016.093.036.306.02.472-.18 1.898-.962 6.502-1.36 8.627-.168.9-.499 1.201-.82 1.23-.696.065-1.225-.46-1.9-.902-1.056-.693-1.653-1.124-2.678-1.8-1.185-.78-.417-1.21.258-1.91.177-.184 3.247-2.977 3.307-3.23.007-.032.014-.15-.056-.212s-.174-.041-.249-.024c-.106.024-1.793 1.14-5.061 3.345-.48.33-.913.49-1.302.48-.428-.008-1.252-.241-1.865-.44-.752-.245-1.349-.374-1.297-.789.027-.216.325-.437.893-.663 3.498-1.524 5.83-2.529 6.998-3.014 3.332-1.386 4.025-1.627 4.476-1.635z" />
        </svg>
      ),
    },
  ];

  return (
    <footer className="bg-gray-900 text-white relative overflow-hidden">
      <div className="absolute inset-0 opacity-5">
        <div className="absolute top-0 left-0 w-96 h-96 bg-koh-rong-500 rounded-full -translate-x-48 -translate-y-48"></div>
        <div className="absolute bottom-0 right-0 w-96 h-96 bg-koh-rong-500 rounded-full translate-x-48 translate-y-48"></div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 relative z-10">
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          <div className="lg:col-span-1">
            <div className="flex items-center space-x-3 mb-6">
              <div className="bg-gradient-to-r from-koh-rong-500 to-koh-rong-600 p-3 rounded-xl">
                <MapPin className="h-8 w-8 text-white" />
              </div>
              <div>
                <h3 className="text-2xl font-bold">
                  {language === "km" ? "កោះរ៉ុង កម្ពុជា" : "Koh Rong Cambodia"}
                </h3>
                <p className="text-sm text-gray-400">
                  {t("footer.blogsubtitle")}
                </p>
              </div>
            </div>
            <p className="text-gray-400 mb-6 leading-relaxed">
              {t("footer.description")}
            </p>
            <div className="flex space-x-4">
              {socialLinks.map((social) => (
                <a
                  key={social.name}
                  href={social.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={`bg-gray-800 p-3 rounded-full ${social.color} transition-colors duration-300 group`}
                  title={social.name}
                >
                  <div className="group-hover:scale-110 transition-transform">
                    {social.icon}
                  </div>
                </a>
              ))}
            </div>
          </div>

          <div>
            <h3 className="text-lg font-semibold mb-6 text-koh-rong-300">
              {t("footer.quicklinks")}
            </h3>
            <ul className="space-y-3">
              <li>
                <button
                  onClick={onHomeClick}
                  className="text-gray-400 hover:text-white transition-colors duration-300 hover:translate-x-1 transform inline-block"
                >
                  {t("nav.home")}
                </button>
              </li>
              <li>
                <button
                  onClick={onDestinationsClick}
                  className="text-gray-400 hover:text-white transition-colors duration-300 hover:translate-x-1 transform inline-block"
                >
                  {t("nav.destinations")}
                </button>
              </li>
              <li>
                <button
                  onClick={onBlogClick}
                  className="text-gray-400 hover:text-white transition-colors duration-300 hover:translate-x-1 transform inline-block"
                >
                  {t("nav.blog")}
                </button>
              </li>
              <li>
                <button
                  onClick={onAboutClick}
                  className="text-gray-400 hover:text-white transition-colors duration-300 hover:translate-x-1 transform inline-block"
                >
                  {t("nav.about")}
                </button>
              </li>
              <li>
                <button
                  onClick={onContactClick}
                  className="text-gray-400 hover:text-white transition-colors duration-300 hover:translate-x-1 transform inline-block"
                >
                  {t("nav.contact")}
                </button>
              </li>
              <li>
                <button
                  onClick={onPrivacyClick}
                  className="text-gray-400 hover:text-white transition-colors duration-300 hover:translate-x-1 transform inline-block"
                >
                  {t("footer.privacy")}
                </button>
              </li>
              <li>
                <button
                  onClick={onAccommodationClick}
                  className="text-gray-400 hover:text-white transition-colors duration-300 hover:translate-x-1 transform inline-block"
                >
                  {t("nav.accommodation")}
                </button>
              </li>
              <li>
                <button
                  onClick={onServicesClick}
                  className="text-gray-400 hover:text-white transition-colors duration-300 hover:translate-x-1 transform inline-block"
                >
                  {t("nav.services")}
                </button>
              </li>
              <li>
                <button
                  onClick={onInvestmentClick}
                  className="text-gray-400 hover:text-white transition-colors duration-300 hover:translate-x-1 transform inline-block"
                >
                  {t("nav.investment")}
                </button>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="text-lg font-semibold mb-6 text-koh-rong-300">
              {t("footer.contact")}
            </h3>
            <div className="space-y-4">
              <div className="flex items-center space-x-3 group">
                <Mail className="h-5 w-5 text-koh-rong-400 group-hover:scale-110 transition-transform" />
                <a
                  href="mailto:chhaileang27@gmail.com"
                  className="text-gray-400 group-hover:text-white transition-colors"
                >
                  {contactInfo.email}
                </a>
              </div>
              <div className="flex items-center space-x-3 group">
                <Phone className="h-5 w-5 text-koh-rong-400 group-hover:scale-110 transition-transform" />
                <a
                  href="tel:010820486"
                  className="text-gray-400 group-hover:text-white transition-colors"
                >
                  {contactInfo.phone}
                </a>
              </div>
              <div className="flex items-start space-x-3 group">
                <MapIcon className="h-5 w-5 text-koh-rong-400 mt-1 group-hover:scale-110 transition-transform" />
                <span
                  className="text-gray-400 group-hover:text-white transition-colors"
                  style={{ whiteSpace: "pre-line" }}
                >
                  {contactInfo.address}
                </span>
              </div>
              <div className="flex items-center space-x-3 group">
                <Globe className="h-5 w-5 text-koh-rong-400 group-hover:scale-110 transition-transform" />
                <span className="text-gray-400 group-hover:text-white transition-colors">
                  {contactInfo.website}
                </span>
              </div>
            </div>
          </div>
        </div>

        <div className="border-t border-gray-800 mt-12 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <p className="text-gray-400 text-sm flex items-center">
              {t("footer.copyright")}
              <Heart className="h-4 w-4 text-red-500 mx-2" />
              {t("footer.madewith")}
              <span className="text-koh-rong-400 ml-1">
                {t("footer.locals")}
              </span>
            </p>
            <div className="flex space-x-6 mt-4 md:mt-0">
              <button
                onClick={onTermsClick}
                className="text-gray-400 hover:text-white text-sm transition-colors"
              >
                {t("footer.terms")}
              </button>
              <button
                onClick={onCookiesClick}
                className="text-gray-400 hover:text-white text-sm transition-colors"
              >
                {t("footer.cookies")}
              </button>
              <button
                onClick={onSitemapClick}
                className="text-gray-400 hover:text-white text-sm transition-colors"
              >
                {t("footer.sitemap")}
              </button>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
