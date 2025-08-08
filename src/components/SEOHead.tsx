import React from 'react';
import { useLanguage } from '../contexts/LanguageContext';

interface SEOHeadProps {
  title?: string;
  description?: string;
  keywords?: string;
  image?: string;
  url?: string;
  type?: string;
  article?: {
    author?: string;
    publishedTime?: string;
    modifiedTime?: string;
    section?: string;
    tags?: string[];
  };
}

const SEOHead: React.FC<SEOHeadProps> = ({
  title,
  description,
  keywords,
  image = "https://images.pexels.com/photos/1659438/pexels-photo-1659438.jpeg?auto=compress&cs=tinysrgb&w=1200",
  url = "https://www.kohrong-cambodia.com",
  type = "website",
  article
}) => {
  const { language } = useLanguage();

  const defaultTitle = language === 'km' 
    ? 'កោះរ៉ុង កម្ពុជា - ព័ត៌មានពិតប្រាកដពីប្រជាពលរដ្ឋកោះ'
    : 'Koh Rong Cambodia - Authentic Information from Island Residents';

  const defaultDescription = language === 'km'
    ? 'ស្វែងយល់អំពីកោះដ៏ស្រស់ស្អាតនេះតាមរយៈព័ត៌មានពិតប្រាកដពីប្រជាពលរដ្ឋនៅលើកោះ។ ការណែនាំទេសចរណ៍, កន្លែងស្នាក់នៅ, សេវាកម្ម និងបទពិសោធន៍ពិតប្រាកដ'
    : 'Discover this beautiful island through authentic information from island residents. Tourism guides, accommodation, services, and real experiences';

  const finalTitle = title ? `${title} | ${defaultTitle}` : defaultTitle;
  const finalDescription = description || defaultDescription;

  React.useEffect(() => {
    // Update document title
    document.title = finalTitle;

    // Update meta description
    const metaDescription = document.querySelector('meta[name="description"]');
    if (metaDescription) {
      metaDescription.setAttribute('content', finalDescription);
    }

    // Update Open Graph meta tags
    const ogTitle = document.querySelector('meta[property="og:title"]');
    if (ogTitle) {
      ogTitle.setAttribute('content', finalTitle);
    }

    const ogDescription = document.querySelector('meta[property="og:description"]');
    if (ogDescription) {
      ogDescription.setAttribute('content', finalDescription);
    }

    const ogImage = document.querySelector('meta[property="og:image"]');
    if (ogImage) {
      ogImage.setAttribute('content', image);
    }

    const ogUrl = document.querySelector('meta[property="og:url"]');
    if (ogUrl) {
      ogUrl.setAttribute('content', url);
    }

    const ogType = document.querySelector('meta[property="og:type"]');
    if (ogType) {
      ogType.setAttribute('content', type);
    }

    // Update Twitter meta tags
    const twitterTitle = document.querySelector('meta[property="twitter:title"]');
    if (twitterTitle) {
      twitterTitle.setAttribute('content', finalTitle);
    }

    const twitterDescription = document.querySelector('meta[property="twitter:description"]');
    if (twitterDescription) {
      twitterDescription.setAttribute('content', finalDescription);
    }

    const twitterImage = document.querySelector('meta[property="twitter:image"]');
    if (twitterImage) {
      twitterImage.setAttribute('content', image);
    }

    // Update keywords if provided
    if (keywords) {
      const metaKeywords = document.querySelector('meta[name="keywords"]');
      if (metaKeywords) {
        metaKeywords.setAttribute('content', keywords);
      }
    }

    // Update canonical URL
    const canonical = document.querySelector('link[rel="canonical"]');
    if (canonical) {
      canonical.setAttribute('href', url);
    }

    // Update language attributes
    document.documentElement.lang = language;

    // Add article-specific meta tags if provided
    if (article && type === 'article') {
      // Add or update article meta tags
      const addOrUpdateMeta = (property: string, content: string) => {
        let meta = document.querySelector(`meta[property="${property}"]`);
        if (!meta) {
          meta = document.createElement('meta');
          meta.setAttribute('property', property);
          document.head.appendChild(meta);
        }
        meta.setAttribute('content', content);
      };

      if (article.author) {
        addOrUpdateMeta('article:author', article.author);
      }
      if (article.publishedTime) {
        addOrUpdateMeta('article:published_time', article.publishedTime);
      }
      if (article.modifiedTime) {
        addOrUpdateMeta('article:modified_time', article.modifiedTime);
      }
      if (article.section) {
        addOrUpdateMeta('article:section', article.section);
      }
      if (article.tags) {
        article.tags.forEach(tag => {
          const tagMeta = document.createElement('meta');
          tagMeta.setAttribute('property', 'article:tag');
          tagMeta.setAttribute('content', tag);
          document.head.appendChild(tagMeta);
        });
      }
    }

    // Add structured data for current page
    const addStructuredData = (data: any) => {
      const script = document.createElement('script');
      script.type = 'application/ld+json';
      script.textContent = JSON.stringify(data);
      document.head.appendChild(script);
    };

    // Clean up function
    return () => {
      // Remove any dynamically added meta tags when component unmounts
      const dynamicMetas = document.querySelectorAll('meta[data-dynamic="true"]');
      dynamicMetas.forEach(meta => meta.remove());
    };
  }, [finalTitle, finalDescription, image, url, type, keywords, language, article]);

  return null; // This component doesn't render anything
};

export default SEOHead;