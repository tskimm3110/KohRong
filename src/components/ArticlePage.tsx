import React from "react";
import {
  ArrowLeft,
  Calendar,
  User,
  Clock,
  Eye,
  Heart,
  MessageCircle,
  Share2,
} from "lucide-react";
import { useLanguage } from "../contexts/LanguageContext";
import { Article } from "../data/articles";

interface ArticlePageProps {
  article: Article;
  onBack: () => void;
}

const ArticlePage: React.FC<ArticlePageProps> = ({ article, onBack }) => {
  const { language, t } = useLanguage();

  const formatContent = (content: string) => {
    return content.split("\n").map((paragraph, index) => {
      // Handle images
      if (paragraph.includes("![") && paragraph.includes("](")) {
        const imageMatch = paragraph.match(/!\[(.*?)\]\((.*?)\)/);
        if (imageMatch) {
          const [, altText, imageUrl] = imageMatch;
          return (
            <div key={index} className="my-8">
              <img
                src={imageUrl}
                alt={altText}
                className="w-full h-64 md:h-80 object-cover rounded-2xl shadow-lg"
              />
              {altText && (
                <p className="text-center text-sm text-gray-600 mt-3 italic">
                  {altText}
                </p>
              )}
            </div>
          );
        }
      }

      if (paragraph.startsWith("# ")) {
        return (
          <h1
            key={index}
            className="text-4xl md:text-5xl font-bold text-gray-900 mb-8 leading-tight"
          >
            {paragraph.replace("# ", "")}
          </h1>
        );
      } else if (paragraph.startsWith("## ")) {
        return (
          <h2
            key={index}
            className="text-2xl md:text-3xl font-bold text-gray-800 mb-6 mt-12 leading-tight"
          >
            {paragraph.replace("## ", "")}
          </h2>
        );
      } else if (paragraph.startsWith("### ")) {
        return (
          <h3
            key={index}
            className="text-xl md:text-2xl font-bold text-gray-700 mb-4 mt-8 leading-tight"
          >
            {paragraph.replace("### ", "")}
          </h3>
        );
      } else if (paragraph.startsWith("**") && paragraph.endsWith("**")) {
        return (
          <p
            key={index}
            className="text-lg font-semibold text-gray-800 mb-4 leading-relaxed"
          >
            {paragraph.replace(/\*\*/g, "")}
          </p>
        );
      } else if (paragraph.startsWith("- ")) {
        return (
          <li
            key={index}
            className="text-gray-700 mb-2 ml-6 leading-relaxed list-disc"
          >
            {paragraph.replace("- ", "")}
          </li>
        );
      } else if (paragraph.trim() === "") {
        return <div key={index} className="mb-4"></div>;
      } else {
        return (
          <p key={index} className="text-gray-700 mb-6 leading-relaxed text-lg">
            {paragraph}
          </p>
        );
      }
    });
  };

  const handleShare = async () => {
    const shareData = {
      title: language === "km" ? article.title : article.titleEn,
      text: "Check out this article!",
      url: window.location.href, // This gets the current page's URL
    };

    try {
      if (navigator.share) {
        await navigator.share(shareData);
      } else {
        await navigator.clipboard.writeText(shareData.url);
        alert("Link copied to clipboard!");
      }
    } catch (err) {
      console.error("Share failed:", err);
    }
  };

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <div className="bg-white shadow-sm sticky top-16 z-40">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
          <button
            onClick={onBack}
            className="flex items-center space-x-2 text-gray-600 hover:text-koh-rong-600 transition-colors group"
          >
            <ArrowLeft className="h-5 w-5 group-hover:-translate-x-1 transition-transform" />
            <span className="font-medium">
              {language === "km" ? "ត្រលប់ទៅទំព័រដើម" : "Back to Home"}
            </span>
          </button>
        </div>
      </div>

      {/* Article Content */}
      <article className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        {/* Hero Image */}
        <div className="relative mb-12 rounded-3xl overflow-hidden shadow-2xl">
          <img
            src={article.image}
            alt={language === "km" ? article.title : article.titleEn}
            className="w-full h-96 md:h-[500px] object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent"></div>

          {/* Category Badge */}
          <div className="absolute top-6 left-6">
            <span className="bg-gradient-to-r from-koh-rong-500 to-koh-rong-600 text-white px-4 py-2 rounded-full text-sm font-semibold shadow-lg">
              {language === "km" ? article.category : article.categoryEn}
            </span>
          </div>

          {/* Featured Badge */}
          {article.featured && (
            <div className="absolute top-6 right-6">
              <span className="bg-white/90 backdrop-blur-sm text-gray-800 px-4 py-2 rounded-full text-sm font-semibold shadow-lg">
                {t("featured.badge")}
              </span>
            </div>
          )}
        </div>

        {/* Article Header */}
        <header className="mb-12">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 mb-8 leading-tight">
            {language === "km" ? article.title : article.titleEn}
          </h1>

          {/* Article Meta */}
          <div className="flex flex-wrap items-center gap-6 text-gray-600 mb-8">
            <div className="flex items-center space-x-2">
              <User className="h-5 w-5" />
              <span className="font-medium">
                {language === "km" ? article.author : article.authorEn}
              </span>
            </div>
            <div className="flex items-center space-x-2">
              <Calendar className="h-5 w-5" />
              <span>{language === "km" ? article.date : article.dateEn}</span>
            </div>
            <div className="flex items-center space-x-2">
              <Clock className="h-5 w-5" />
              <span>
                {language === "km" ? article.readTime : article.readTimeEn}{" "}
                {t("featured.minutes")}
              </span>
            </div>
          </div>

          {/* Article Stats */}
          <div className="flex items-center justify-between p-6 bg-white rounded-2xl shadow-lg border border-gray-100">
            <div className="flex items-center space-x-8">
              <div className="flex items-center space-x-2 text-gray-600">
                <Eye className="h-5 w-5" />
                <span className="font-medium">
                  {article.views.toLocaleString()}
                </span>
              </div>
              <div className="flex items-center space-x-2 text-gray-600">
                <Heart className="h-5 w-5" />
                <span className="font-medium">{article.likes}</span>
              </div>
              <div className="flex items-center space-x-2 text-gray-600">
                <MessageCircle className="h-5 w-5" />
                <span className="font-medium">{article.comments}</span>
              </div>
            </div>
            <button
              onClick={handleShare}
              className="flex items-center space-x-2 bg-koh-rong-500 hover:bg-koh-rong-600 text-white px-4 py-2 rounded-full transition-colors"
            >
              <Share2 className="h-4 w-4" />
              <span className="text-sm font-medium">
                {language === "km" ? "ចែករំលែក" : "Share"}
              </span>
            </button>
          </div>
        </header>

        {/* Article Content */}
        <div className="prose prose-lg max-w-none">
          <div className="bg-white rounded-3xl shadow-lg p-8 md:p-12 border border-gray-100">
            <div className="article-content">
              {formatContent(
                language === "km" ? article.content : article.contentEn
              )}
            </div>
          </div>
        </div>

        {/* Article Footer */}
        <footer className="mt-16 p-8 bg-white rounded-3xl shadow-lg border border-gray-100">
          <div className="flex flex-col md:flex-row items-center justify-between">
            <div className="flex items-center space-x-4 mb-6 md:mb-0">
              <div className="w-16 h-16 bg-gradient-to-r from-koh-rong-500 to-koh-rong-600 rounded-full flex items-center justify-center">
                <User className="h-8 w-8 text-white" />
              </div>
              <div>
                <h3 className="text-xl font-bold text-gray-900">
                  {language === "km" ? article.author : article.authorEn}
                </h3>
                <p className="text-gray-600">
                  {language === "km" ? "អ្នកនិពន្ធ" : "Author"}
                </p>
              </div>
            </div>

            <div className="flex items-center space-x-4">
              <button className="flex items-center space-x-2 bg-red-50 hover:bg-red-100 text-red-600 px-6 py-3 rounded-full transition-colors">
                <Heart className="h-5 w-5" />
                <span className="font-medium">
                  {language === "km" ? "ចូលចិត្ត" : "Like"} ({article.likes})
                </span>
              </button>
              <button className="flex items-center space-x-2 bg-blue-50 hover:bg-blue-100 text-blue-600 px-6 py-3 rounded-full transition-colors">
                <MessageCircle className="h-5 w-5" />
                <span className="font-medium">
                  {language === "km" ? "មតិយោបល់" : "Comment"} (
                  {article.comments})
                </span>
              </button>
            </div>
          </div>
        </footer>
      </article>
    </div>
  );
};

export default ArticlePage;
