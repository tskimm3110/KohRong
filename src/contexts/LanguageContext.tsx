import React, {
  createContext,
  useContext,
  useState,
  ReactNode,
  useEffect,
} from "react";

interface LanguageContextType {
  language: string;
  setLanguage: (language: string) => void;
  t: (key: string) => string;
}

const LanguageContext = createContext<LanguageContextType | undefined>(
  undefined
);

// Translation data
const translations = {
  km: {
    // Header
    "nav.home": "ទំព័រដើម",
    "nav.destinations": "ទីកន្លែងទេសចរណ៍",
    "nav.blog": "ប្លុក",
    "nav.about": "អំពីយើង",
    "nav.contact": "ទំនាក់ទំនង",
    "nav.investment": "វិនិយោគ",
    "nav.services": "សេវាកម្ម",
    "nav.accommodation": "កន្លែងស្នាក់នៅ",

    // Hero
    "hero.welcome": "ស្វាគមន៍មកកាន់",
    "hero.island": "កោះរ៉ុង កម្ពុជា",
    "hero.subtitle": "កោះដ៏ស្រស់ស្អាតនៅកម្ពុជា",
    "hero.description":
      "ស្វែងយល់អំពីកោះដ៏ស្រស់ស្អាតនេះ តាមរយៈព័ត៌មានពិតប្រាកដពីប្រជាពលរដ្ឋនៅលើកោះ។ រកឃើញកន្លែងដែលស្រស់ស្អាតបំផុង និងបទពិសោធន៍មិនអាចបំភ្លេចបាន។",
    "hero.explore": "ចាប់ផ្តើមស្វែងយល់",
    "hero.watch": "មើលវីដេអូ",
    "hero.articles": "អត្ថបទ",
    "hero.readers": "អ្នកអាន",
    "hero.locations": "ទីកន្លែង",

    // Featured Posts
    "featured.title": "អត្ថបទពិសេស",
    "featured.subtitle": "រឿងរ៉ាវ និងព័ត៌មានថ្មីៗពីកោះរ៉ុង កម្ពុជា",
    "featured.readmore": "អានបន្ត",
    "featured.minutes": "នាទីអាន",
    "featured.badge": "ពិសេស",

    // Categories
    "categories.title": "ប្រភេទអត្ថបទ",
    "categories.subtitle": "ស្វែងរកអត្ថបទតាមប្រភេទដែលអ្នកចាប់អារម្មណ៍",
    "categories.travel": "ការធ្វើដំណើរ",
    "categories.food": "អាហារ",
    "categories.culture": "វប្បធម៌",
    "categories.nature": "ធម្មជាតិ",
    "categories.tips": "គន្លឹះ",
    "categories.accommodation": "កន្លែងស្នាក់នៅ",
    "categories.articles": "អត្ថបទ",
    "categories.viewall": "មើលអត្ថបទទាំងអស់",

    // Newsletter
    "newsletter.title": "កុំឱ្យខកខានព័ត៌មានថ្មី",
    "newsletter.subtitle": "ចុះឈ្មោះទទួលព័ត៌មានថ្មីៗអំពីកោះរ៉ុង កម្ពុជា",
    "newsletter.placeholder": "បញ្ចូលអ៊ីមែលរបស់អ្នក",
    "newsletter.subscribe": "ចុះឈ្មោះ",
    "newsletter.success": "បានចុះឈ្មោះដោយជោគជ័យ!",
    "newsletter.disclaimer":
      "ចូលរួមជាមួយអ្នកទេសចរណ៍ជាង ៥,០០០ នាក់ដែលទុកចិត្តលើយើង។ អាចលុបចេញបានគ្រប់ពេល។",
    "newsletter.subscribers": "អ្នកតាមដាន",
    "newsletter.rating": "ការវាយតម្លៃ",

    // Footer
    "footer.description":
      "ព័ត៌មានពិតប្រាកដអំពីកោះរ៉ុង កម្ពុជា ពីប្រជាពលរដ្ឋនៅលើកោះ។",
    "footer.quicklinks": "តំណភ្ជាប់រហ័ស",
    "footer.contact": "ទំនាក់ទំនង",
    "footer.copyright": "© ២០២៤ កោះរ៉ុង កម្ពុជា។ រក្សាសិទ្ធិគ្រប់យ៉ាង។",
    "footer.madewith": "បង្កើតដោយ",
    "footer.locals": "ប្រជាពលរដ្ឋកោះរ៉ុង",
    "footer.privacy": "គោលការណ៍ភាពឯកជន",
    "footer.terms": "លក្ខខណ្ឌសេវាកម្ម",
    "footer.cookies": "គោលការណ៍ Cookie",
    "footer.sitemap": "ផែនទីគេហទំព័រ",
    "footer.getupdates": "ទទួលព័ត៌មានថ្មី",
    "footer.emailplaceholder": "អ៊ីមែល",
    "footer.blogsubtitle": "ព័ត៌មានគ្រប់យ៉ាងអំពីកោះរ៉ុង",
  },
  en: {
    // Header
    "nav.home": "Home",
    "nav.destinations": "Destinations",
    "nav.blog": "Blog",
    "nav.about": "About",
    "nav.contact": "Contact",
    "nav.investment": "Investment",
    "nav.services": "Services",

    // Hero
    "hero.welcome": "Welcome to",
    "hero.island": "Koh Rong Cambodia",
    "hero.subtitle": "Beautiful Island in Cambodia",
    "hero.description":
      "Discover this beautiful island through authentic information from island residents. Find the most beautiful places and unforgettable experiences.",
    "hero.explore": "Start Exploring",
    "hero.watch": "Watch Videos",
    "hero.articles": "Articles",
    "hero.readers": "Readers",
    "hero.locations": "Locations",

    // Featured Posts
    "featured.title": "Featured Posts",
    "featured.subtitle":
      "Latest stories and information from Koh Rong Cambodia",
    "featured.readmore": "Read More",
    "featured.minutes": "min read",
    "featured.badge": "Featured",

    // Categories
    "categories.title": "Categories",
    "categories.subtitle": "Explore articles by topics that interest you",
    "categories.travel": "Travel",
    "categories.food": "Food",
    "categories.culture": "Culture",
    "categories.nature": "Nature",
    "categories.tips": "Tips",
    "categories.accommodation": "Accommodation",
    "categories.articles": "articles",
    "categories.viewall": "View All Articles",

    // Newsletter
    "newsletter.title": "Never Miss Updates",
    "newsletter.subtitle":
      "Subscribe to receive the latest news about Koh Rong Cambodia",
    "newsletter.placeholder": "Enter your email address",
    "newsletter.subscribe": "Subscribe",
    "newsletter.success": "Successfully subscribed!",
    "newsletter.disclaimer":
      "Join over 5,000 travelers who trust us. Unsubscribe anytime.",
    "newsletter.subscribers": "Subscribers",
    "newsletter.rating": "Rating",

    // Footer
    "footer.description":
      "Authentic information about Koh Rong Cambodia from island residents.",
    "footer.quicklinks": "Quick Links",
    "footer.contact": "Contact",
    "footer.copyright": "© 2024 Koh Rong Cambodia. All rights reserved.",
    "footer.madewith": "Made with",
    "footer.locals": "Koh Rong Citizens",
    "footer.privacy": "Privacy Policy",
    "footer.terms": "Terms of Service",
    "footer.cookies": "Cookie Policy",
    "footer.sitemap": "Sitemap",
    "footer.getupdates": "Get Updates",
    "footer.emailplaceholder": "Email",
    "footer.blogsubtitle": "Everything About Koh Rong",
  },
};

interface LanguageProviderProps {
  children: ReactNode;
}

export const LanguageProvider: React.FC<LanguageProviderProps> = ({
  children,
}) => {
  const [language, setLanguage] = useState<string>("km");

  useEffect(() => {
    document.documentElement.lang = language;
    // Update page title based on language
    document.title =
      language === "km"
        ? "កោះរ៉ុង កម្ពុជា - ស្វាគមន៍មកកាន់កោះដ៏ស្រស់ស្អាត"
        : "Koh Rong Cambodia - Welcome to Beautiful Island";
  }, [language]);

  const t = (key: string): string => {
    const translation = translations[language as keyof typeof translations];
    return translation?.[key as keyof typeof translation] || key;
  };

  return (
    <LanguageContext.Provider value={{ language, setLanguage, t }}>
      {children}
    </LanguageContext.Provider>
  );
};

export const useLanguage = (): LanguageContextType => {
  const context = useContext(LanguageContext);
  if (!context) {
    throw new Error("useLanguage must be used within a LanguageProvider");
  }
  return context;
};
