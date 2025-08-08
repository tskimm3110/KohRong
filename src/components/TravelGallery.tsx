import React from 'react';
import { ArrowRight } from 'lucide-react';
import { useLanguage } from '../contexts/LanguageContext';

interface TravelGalleryProps {
  onArticleClick: (articleId: number) => void;
}

const TravelGallery: React.FC<TravelGalleryProps> = ({ onArticleClick }) => {
  const { language } = useLanguage();

  const galleryImages = [
    {
      id: 1,
      src: 'https://images.pexels.com/photos/1371360/pexels-photo-1371360.jpeg?auto=compress&cs=tinysrgb&w=800',
      title: language === 'km' ? 'ខាងក្នុងទូកល្បឿនលឿន' : 'Speed Boat Interior',
      description: language === 'km' 
        ? 'កៅអី និងអាវពោងសុវត្ថិភាព' 
        : 'Seats and life jackets'
    },
    {
      id: 2,
      src: 'https://images.pexels.com/photos/1001682/pexels-photo-1001682.jpeg?auto=compress&cs=tinysrgb&w=800',
      title: language === 'km' ? 'ទូកកំពុងធ្វើដំណើរ' : 'Speed Boat in Transit',
      description: language === 'km' 
        ? 'ទូកល្បឿនលឿននៅលើទឹកថ្លាដូចកញ្ចក់' 
        : 'Speed boat on crystal clear waters like glass'
    },
    {
      id: 3,
      src: 'https://images.pexels.com/photos/1450360/pexels-photo-1450360.jpeg?auto=compress&cs=tinysrgb&w=800',
      title: language === 'km' ? 'កំពង់ផែទេសចរណ៍ខេត្តព្រះសីហនុ' : 'Sihanoukville Tourism Pier',
      description: language === 'km' 
        ? 'កន្លែងចេញដំណើរទៅកោះរ៉ុង' 
        : 'Departure point to Koh Rong'
    },
    {
      id: 4,
      src: 'https://images.pexels.com/photos/1450363/pexels-photo-1450363.jpeg?auto=compress&cs=tinysrgb&w=800',
      title: language === 'km' ? 'កំពង់ផែកោះរ៉ុងពីលើ' : 'Koh Rong Pier Aerial View',
      description: language === 'km' 
        ? 'ទិដ្ឋភាពពីលើនៃកំពង់ផែកោះរ៉ុង' 
        : 'Aerial view of Koh Rong pier and crystal waters'
    },
    {
      id: 5,
      src: 'https://images.pexels.com/photos/1450361/pexels-photo-1450361.jpeg?auto=compress&cs=tinysrgb&w=800',
      title: language === 'km' ? 'កំពង់ផែកោះរ៉ុង' : 'Koh Rong Pier',
      description: language === 'km' 
        ? 'ទីកន្លែងទៅដល់នៅកោះរ៉ុង' 
        : 'Arrival destination at Koh Rong'
    },
    {
      id: 6,
      src: 'https://images.pexels.com/photos/1640777/pexels-photo-1640777.jpeg?auto=compress&cs=tinysrgb&w=800',
      title: language === 'km' ? 'ឆ្នេរសុខសាន្ត' : 'Peaceful Beach',
      description: language === 'km' 
        ? 'ឆ្នេរសុខសាន្តដ៏ស្រស់ស្អាតជាមួយទឹកថ្លាដូចកញ្ចក់' 
        : 'Beautiful peaceful beach with crystal clear waters like glass'
    },
    {
      id: 7,
      src: 'https://images.pexels.com/photos/1659438/pexels-photo-1659438.jpeg?auto=compress&cs=tinysrgb&w=800',
      title: language === 'km' ? 'ទឹកសមុទ្រថ្លាដូចកញ្ចក់ និងខ្សាច់ដូចគ្រីស្តាល់' : 'Crystal Clear Ocean and Sand Like Crystal',
      description: language === 'km' 
        ? 'ទឹកសមុទ្រថ្លាដូចកញ្ចក់ និងខ្សាច់ដូចគ្រីស្តាល់' 
        : 'Crystal clear ocean water like glass and sand like crystal'
    }
  ];

  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            {language === 'km' ? 'រូបភាពការធ្វើដំណើរ' : 'Travel Photo Gallery'}
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            {language === 'km' 
              ? 'រូបភាពពិតប្រាកដពីការធ្វើដំណើរទៅកោះរ៉ុង' 
              : 'Real photos from traveling to Koh Rong Island'
            }
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {galleryImages.map((image, index) => (
            <div 
              key={image.id} 
              className={`group cursor-pointer ${
                index === 3 ? 'md:col-span-2' : ''
              } ${
                index === 5 || index === 6 ? 'lg:col-span-2' : ''
              }`}
            >
              <div className="bg-white rounded-3xl shadow-xl overflow-hidden hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-2">
                <div className="relative overflow-hidden">
                  <img
                    src={image.src}
                    alt={image.title}
                    className={`w-full object-cover group-hover:scale-105 transition-transform duration-700 ${
                      index === 3 || index === 5 || index === 6 ? 'h-64' : 'h-56'
                    }`}
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                  
                  {/* Overlay content */}
                  <div className="absolute inset-0 flex items-end p-6 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    <div className="text-white">
                      <h3 className="text-lg font-bold mb-2">{image.title}</h3>
                      <p className="text-sm text-gray-200">{image.description}</p>
                    </div>
                  </div>
                </div>
                
                <div className="p-6">
                  <h3 className="text-xl font-bold text-gray-900 mb-3 group-hover:text-koh-rong-600 transition-colors">
                    {image.title}
                  </h3>
                  <p className="text-gray-600 mb-4 leading-relaxed">
                    {image.description}
                  </p>
                  
                  {/* Photo number indicator */}
                  <div className="flex items-center justify-between">
                    <span className="text-sm text-gray-500 bg-gray-100 px-3 py-1 rounded-full">
                      {language === 'km' ? `រូបទី ${image.id}` : `Photo ${image.id}`}
                    </span>
                    <div className="w-8 h-8 bg-koh-rong-100 rounded-full flex items-center justify-center group-hover:bg-koh-rong-500 transition-colors">
                      <ArrowRight className="h-4 w-4 text-koh-rong-600 group-hover:text-white transition-colors" />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Call to Action */}
        <div className="text-center mt-16">
          <div className="bg-gradient-to-r from-koh-rong-50 to-blue-50 rounded-3xl p-12 border border-koh-rong-100">
            <h3 className="text-2xl md:text-3xl font-bold text-gray-900 mb-4">
              {language === 'km' ? 'ចង់ដឹងបន្ថែមអំពីការធ្វើដំណើរ?' : 'Want to know more about traveling?'}
            </h3>
            <p className="text-lg text-gray-600 mb-8 max-w-2xl mx-auto">
              {language === 'km' 
                ? 'អានការណែនាំពេញលេញអំពីរបៀបធ្វើដំណើរទៅកោះរ៉ុង រួមទាំងតម្លៃ ពេលវេលា និងគន្លឹះសំខាន់ៗ'
                : 'Read our complete guide on how to travel to Koh Rong, including prices, schedules, and important tips'
              }
            </p>
            <button 
              onClick={() => onArticleClick(1)}
              className="bg-gradient-to-r from-koh-rong-500 to-koh-rong-600 hover:from-koh-rong-600 hover:to-koh-rong-700 text-white px-10 py-4 rounded-full font-semibold text-lg transition-all duration-300 transform hover:scale-105 shadow-xl flex items-center space-x-3 mx-auto"
            >
              <span>
                {language === 'km' ? 'អានការណែនាំពេញលេញ' : 'Read Complete Travel Guide'}
              </span>
              <ArrowRight className="h-5 w-5" />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TravelGallery;