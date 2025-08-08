import React from 'react';
import { Calendar, User, ArrowRight, Clock, Heart, MessageCircle, Eye } from 'lucide-react';
import { useLanguage } from '../contexts/LanguageContext';
import { articles } from '../data/articles';

interface FeaturedPostsProps {
  onArticleClick: (articleId: number) => void;
}

const FeaturedPosts: React.FC<FeaturedPostsProps> = ({ onArticleClick }) => {
  const { language, t } = useLanguage();

  const featuredPost = articles[0]; // First article is featured
  const otherPosts = articles.slice(1, 4); // Next 3 articles

  return (
    <section className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            {t('featured.title')}
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            {t('featured.subtitle')}
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12">
          {/* Featured Post */}
          <div className="lg:col-span-1">
            <article className="bg-white rounded-3xl shadow-xl overflow-hidden hover:shadow-2xl transition-all duration-500 group cursor-pointer">
              <div className="relative overflow-hidden">
                <img
                  src={featuredPost.image}
                  alt={language === 'km' ? featuredPost.title : featuredPost.titleEn}
                  className="w-full h-80 object-cover group-hover:scale-105 transition-transform duration-700"
                />
                <div className="absolute top-6 left-6">
                  <span className="bg-gradient-to-r from-koh-rong-500 to-koh-rong-600 text-white px-4 py-2 rounded-full text-sm font-semibold shadow-lg">
                    {language === 'km' ? featuredPost.category : featuredPost.categoryEn}
                  </span>
                </div>
                <div className="absolute top-6 right-6 bg-white/90 backdrop-blur-sm rounded-full px-3 py-1">
                  <span className="text-xs font-medium text-gray-700">
                    {t('featured.badge')}
                  </span>
                </div>
              </div>
              
              <div className="p-8">
                <h3 className="text-2xl font-bold text-gray-900 mb-4 group-hover:text-koh-rong-600 transition-colors leading-tight">
                  {language === 'km' ? featuredPost.title : featuredPost.titleEn}
                </h3>
                <p className="text-gray-600 mb-6 leading-relaxed text-lg">
                  {language === 'km' ? featuredPost.excerpt : featuredPost.excerptEn}
                </p>
                
                <div className="flex items-center justify-between mb-6">
                  <div className="flex items-center space-x-4 text-sm text-gray-500">
                    <div className="flex items-center space-x-2">
                      <User className="h-4 w-4" />
                      <span>{language === 'km' ? featuredPost.author : featuredPost.authorEn}</span>
                    </div>
                    <div className="flex items-center space-x-2">
                      <Calendar className="h-4 w-4" />
                      <span>{language === 'km' ? featuredPost.date : featuredPost.dateEn}</span>
                    </div>
                    <div className="flex items-center space-x-2">
                      <Clock className="h-4 w-4" />
                      <span>{language === 'km' ? featuredPost.readTime : featuredPost.readTimeEn} {t('featured.minutes')}</span>
                    </div>
                  </div>
                </div>

                <div className="flex items-center justify-between">
                  <div className="flex items-center space-x-6 text-sm text-gray-500">
                    <div className="flex items-center space-x-1">
                      <Eye className="h-4 w-4" />
                      <span>{featuredPost.views}</span>
                    </div>
                    <div className="flex items-center space-x-1">
                      <Heart className="h-4 w-4" />
                      <span>{featuredPost.likes}</span>
                    </div>
                    <div className="flex items-center space-x-1">
                      <MessageCircle className="h-4 w-4" />
                      <span>{featuredPost.comments}</span>
                    </div>
                  </div>
                  <button 
                    onClick={() => onArticleClick(featuredPost.id)}
                    className="bg-gradient-to-r from-koh-rong-500 to-koh-rong-600 hover:from-koh-rong-600 hover:to-koh-rong-700 text-white px-6 py-3 rounded-full font-semibold flex items-center space-x-2 transition-all duration-300 group"
                  >
                    <span>{t('featured.readmore')}</span>
                    <ArrowRight className="h-4 w-4 group-hover:translate-x-1 transition-transform" />
                  </button>
                </div>
              </div>
            </article>
          </div>

          {/* Other Posts */}
          <div className="space-y-6">
            {otherPosts.map((post) => (
              <article
                key={post.id}
                onClick={() => onArticleClick(post.id)}
                className="bg-white rounded-2xl shadow-lg overflow-hidden hover:shadow-xl transition-all duration-300 group cursor-pointer"
              >
                <div className="flex">
                  <div className="w-40 h-32 flex-shrink-0 overflow-hidden">
                    <img
                      src={post.image}
                      alt={language === 'km' ? post.title : post.titleEn}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                    />
                  </div>
                  <div className="p-6 flex-1">
                    <div className="mb-3">
                      <span className="bg-gray-100 text-gray-700 px-3 py-1 rounded-full text-xs font-medium">
                        {language === 'km' ? post.category : post.categoryEn}
                      </span>
                    </div>
                    <h3 className="text-lg font-bold text-gray-900 mb-2 group-hover:text-koh-rong-600 transition-colors line-clamp-2">
                      {language === 'km' ? post.title : post.titleEn}
                    </h3>
                    <p className="text-gray-600 text-sm mb-3 line-clamp-2">
                      {language === 'km' ? post.excerpt : post.excerptEn}
                    </p>
                    <div className="flex items-center justify-between text-xs text-gray-500">
                      <div className="flex items-center space-x-3">
                        <span>{language === 'km' ? post.author : post.authorEn}</span>
                        <span>{language === 'km' ? post.date : post.dateEn}</span>
                      </div>
                      <div className="flex items-center space-x-3">
                        <span>{language === 'km' ? post.readTime : post.readTimeEn} {t('featured.minutes')}</span>
                        <div className="flex items-center space-x-1">
                          <Heart className="h-3 w-3" />
                          <span>{post.likes}</span>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </article>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default FeaturedPosts;