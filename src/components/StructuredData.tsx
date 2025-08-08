import React from 'react';
import { useLanguage } from '../contexts/LanguageContext';

interface StructuredDataProps {
  type: 'article' | 'breadcrumb' | 'faq' | 'howto' | 'review' | 'product' | 'service';
  data: any;
}

const StructuredData: React.FC<StructuredDataProps> = ({ type, data }) => {
  const { language } = useLanguage();

  React.useEffect(() => {
    const script = document.createElement('script');
    script.type = 'application/ld+json';
    script.id = `structured-data-${type}`;
    
    let structuredData;

    switch (type) {
      case 'article':
        structuredData = {
          "@context": "https://schema.org",
          "@type": "Article",
          "headline": data.title,
          "description": data.description,
          "image": data.image,
          "author": {
            "@type": "Person",
            "name": data.author || "ឆៃលាង",
            "alternateName": data.author || "Chailang"
          },
          "publisher": {
            "@type": "Organization",
            "name": "កោះរ៉ុង កម្ពុជា",
            "logo": {
              "@type": "ImageObject",
              "url": "https://www.kohrong-cambodia.com/logo.png"
            }
          },
          "datePublished": data.publishedTime,
          "dateModified": data.modifiedTime || data.publishedTime,
          "mainEntityOfPage": {
            "@type": "WebPage",
            "@id": data.url
          },
          "inLanguage": language,
          "about": {
            "@type": "Place",
            "name": "កោះរ៉ុង",
            "alternateName": "Koh Rong Island"
          }
        };
        break;

      case 'breadcrumb':
        structuredData = {
          "@context": "https://schema.org",
          "@type": "BreadcrumbList",
          "itemListElement": data.items.map((item: any, index: number) => ({
            "@type": "ListItem",
            "position": index + 1,
            "name": item.name,
            "item": item.url
          }))
        };
        break;

      case 'faq':
        structuredData = {
          "@context": "https://schema.org",
          "@type": "FAQPage",
          "mainEntity": data.questions.map((q: any) => ({
            "@type": "Question",
            "name": q.question,
            "acceptedAnswer": {
              "@type": "Answer",
              "text": q.answer
            }
          }))
        };
        break;

      case 'howto':
        structuredData = {
          "@context": "https://schema.org",
          "@type": "HowTo",
          "name": data.name,
          "description": data.description,
          "image": data.image,
          "totalTime": data.totalTime,
          "estimatedCost": data.estimatedCost,
          "supply": data.supplies?.map((supply: string) => ({
            "@type": "HowToSupply",
            "name": supply
          })),
          "tool": data.tools?.map((tool: string) => ({
            "@type": "HowToTool",
            "name": tool
          })),
          "step": data.steps.map((step: any, index: number) => ({
            "@type": "HowToStep",
            "position": index + 1,
            "name": step.name,
            "text": step.text,
            "image": step.image
          }))
        };
        break;

      case 'review':
        structuredData = {
          "@context": "https://schema.org",
          "@type": "Review",
          "itemReviewed": {
            "@type": data.itemType || "Place",
            "name": data.itemName
          },
          "reviewRating": {
            "@type": "Rating",
            "ratingValue": data.rating,
            "bestRating": "5"
          },
          "author": {
            "@type": "Person",
            "name": data.author
          },
          "reviewBody": data.reviewBody,
          "datePublished": data.datePublished
        };
        break;

      case 'service':
        structuredData = {
          "@context": "https://schema.org",
          "@type": "Service",
          "name": data.name,
          "description": data.description,
          "provider": {
            "@type": "Organization",
            "name": data.providerName || "កោះរ៉ុង កម្ពុជា"
          },
          "areaServed": {
            "@type": "Place",
            "name": "កោះរ៉ុង, កម្ពុជា"
          },
          "serviceType": data.serviceType,
          "offers": data.offers?.map((offer: any) => ({
            "@type": "Offer",
            "price": offer.price,
            "priceCurrency": offer.currency || "USD",
            "description": offer.description
          }))
        };
        break;

      default:
        structuredData = data;
    }

    script.textContent = JSON.stringify(structuredData);
    document.head.appendChild(script);

    return () => {
      const existingScript = document.getElementById(`structured-data-${type}`);
      if (existingScript) {
        document.head.removeChild(existingScript);
      }
    };
  }, [type, data, language]);

  return null;
};

export default StructuredData;