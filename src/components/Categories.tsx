import React from 'react';
import { Plane, Utensils, Users, TreePine, Lightbulb, Home } from 'lucide-react';
import { useLanguage } from '../contexts/LanguageContext';

const Categories = () => {
  const { language, t } = useLanguage();

  const categories = [
    {
      id: 1,
      name: t('categories.travel'),
      icon: Plane,
      count: 15,
      color: 'from-blue-500 to-blue-600',
      bgColor: 'bg-blue-50',
      textColor: 'text-blue-600'
    },
    {
      id: 2,
      name: t('categories.food'),
      icon: Utensils,
      count: 12,
      color: 'from-orange-500 to-orange-600',
      bgColor: 'bg-orange-50',
      textColor: 'text-orange-600'
    },
    {
      id: 3,
      name: t('categories.culture'),
      icon: Users,
      count: 8,
      color: 'from-purple-500 to-purple-600',
      bgColor: 'bg-purple-50',
      textColor: 'text-purple-600'
    },
    {
      id: 4,
      name: t('categories.nature'),
      icon: TreePine,
      count: 10,
      color: 'from-green-500 to-green-600',
      bgColor: 'bg-green-50',
      textColor: 'text-green-600'
    },
    {
      id: 5,
      name: t('categories.tips'),
      icon: Lightbulb,
      count: 7,
      color: 'from-yellow-500 to-yellow-600',
      bgColor: 'bg-yellow-50',
      textColor: 'text-yellow-600'
    },
    {
      id: 6,
      name: t('categories.accommodation'),
      icon: Home,
      count: 9,
      color: 'from-pink-500 to-pink-600',
      bgColor: 'bg-pink-50',
      textColor: 'text-pink-600'
    }
  ];

  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            {t('categories.title')}
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            {t('categories.subtitle')}
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {categories.map((category) => {
            const IconComponent = category.icon;
            return (
              <div
                key={category.id}
                className="group cursor-pointer"
              >
                <div className={`${category.bgColor} rounded-3xl p-8 hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2 border border-gray-100`}>
                  <div className="text-center">
                    <div className={`inline-flex items-center justify-center w-16 h-16 bg-gradient-to-r ${category.color} rounded-2xl mb-6 group-hover:scale-110 transition-transform duration-300`}>
                      <IconComponent className="h-8 w-8 text-white" />
                    </div>
                    
                    <h3 className={`text-xl font-bold ${category.textColor} mb-2 group-hover:scale-105 transition-transform duration-300`}>
                      {category.name}
                    </h3>
                    
                    <p className="text-gray-600 text-sm mb-4">
                      {category.count} {t('categories.articles')}
                    </p>
                    
                    <div className={`w-full h-1 bg-gradient-to-r ${category.color} rounded-full opacity-60 group-hover:opacity-100 transition-opacity duration-300`}></div>
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        {/* View All Button */}
        <div className="text-center mt-12">
          <button className="bg-gradient-to-r from-koh-rong-500 to-koh-rong-600 hover:from-koh-rong-600 hover:to-koh-rong-700 text-white px-8 py-4 rounded-full font-semibold text-lg transition-all duration-300 transform hover:scale-105 shadow-lg">
            {t('categories.viewall')}
          </button>
        </div>
      </div>
    </section>
  );
};

export default Categories;