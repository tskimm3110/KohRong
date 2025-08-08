import React, { useState } from 'react';
import { ArrowLeft, Cookie, Shield, Settings, Eye, BarChart3, Globe, CheckCircle, X, Info } from 'lucide-react';
import { useLanguage } from '../contexts/LanguageContext';
import Footer from './Footer';

interface CookiePolicyPageProps {
  onBack: () => void;
}

const CookiePolicyPage: React.FC<CookiePolicyPageProps> = ({ onBack }) => {
  const { language } = useLanguage();
  const [cookieSettings, setCookieSettings] = useState({
    necessary: true, // Always true, cannot be disabled
    analytics: true,
    marketing: false,
    preferences: true
  });

  const lastUpdated = language === 'km' ? '២៨ ធ្នូ ២០២៤' : 'December 28, 2024';

  const handleCookieToggle = (type: keyof typeof cookieSettings) => {
    if (type === 'necessary') return; // Cannot disable necessary cookies
    
    setCookieSettings(prev => ({
      ...prev,
      [type]: !prev[type]
    }));
  };

  const acceptAllCookies = () => {
    setCookieSettings({
      necessary: true,
      analytics: true,
      marketing: true,
      preferences: true
    });
  };

  const acceptNecessaryOnly = () => {
    setCookieSettings({
      necessary: true,
      analytics: false,
      marketing: false,
      preferences: false
    });
  };

  const cookieTypes = [
    {
      id: 'necessary',
      name: language === 'km' ? 'Cookie ចាំបាច់' : 'Necessary Cookies',
      description: language === 'km' 
        ? 'Cookie ទាំងនេះចាំបាច់សម្រាប់ការដំណើរការគេហទំព័រ និងមិនអាចបិទបានទេ។'
        : 'These cookies are necessary for website operation and cannot be disabled.',
      icon: Shield,
      color: 'text-green-600',
      bgColor: 'bg-green-50',
      required: true,
      examples: language === 'km' 
        ? ['ការចងចាំការកំណត់ភាសា', 'ការរក្សាសុវត្ថិភាពសម័យ', 'ការដំណើរការទម្រង់']
        : ['Language preference memory', 'Session security', 'Form processing']
    },
    {
      id: 'analytics',
      name: language === 'km' ? 'Cookie វិភាគ' : 'Analytics Cookies',
      description: language === 'km' 
        ? 'ជួយយើងយល់ពីរបៀបដែលអ្នកប្រើប្រាស់គេហទំព័រ ដើម្បីធ្វើឱ្យប្រសើរឡើង។'
        : 'Help us understand how you use the website to improve it.',
      icon: BarChart3,
      color: 'text-blue-600',
      bgColor: 'bg-blue-50',
      required: false,
      examples: language === 'km' 
        ? ['ចំនួនអ្នកទស្សនា', 'ទំព័រដែលមើលច្រើន', 'ពេលវេលាស្នាក់នៅ']
        : ['Visitor count', 'Most viewed pages', 'Time spent']
    },
    {
      id: 'marketing',
      name: language === 'km' ? 'Cookie ទីផ្សារ' : 'Marketing Cookies',
      description: language === 'km' 
        ? 'ប្រើសម្រាប់បង្ហាញការផ្សាយពាណិជ្ជកម្មដែលសមស្របជាមួយចំណាប់អារម្មណ៍របស់អ្នក។'
        : 'Used to show advertisements relevant to your interests.',
      icon: Eye,
      color: 'text-purple-600',
      bgColor: 'bg-purple-50',
      required: false,
      examples: language === 'km' 
        ? ['ការផ្សាយពាណិជ្ជកម្មតាមចំណាប់អារម្មណ៍', 'ការតាមដានលើគេហទំព័រផ្សេង', 'ការវាស់វែងប្រសិទ្ធភាពការផ្សាយ']
        : ['Interest-based ads', 'Cross-site tracking', 'Ad effectiveness measurement']
    },
    {
      id: 'preferences',
      name: language === 'km' ? 'Cookie ចំណូលចិត្ត' : 'Preference Cookies',
      description: language === 'km' 
        ? 'ចងចាំការកំណត់របស់អ្នក ដូចជាភាសា និងតំបន់។'
        : 'Remember your settings like language and region.',
      icon: Settings,
      color: 'text-orange-600',
      bgColor: 'bg-orange-50',
      required: false,
      examples: language === 'km' 
        ? ['ការកំណត់ភាសា', 'ការកំណត់តំបន់', 'ការកំណត់ការបង្ហាញ']
        : ['Language settings', 'Region settings', 'Display preferences']
    }
  ];

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <div className="bg-white shadow-sm sticky top-16 z-40">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
          <button
            onClick={onBack}
            className="flex items-center space-x-2 text-gray-600 hover:text-koh-rong-600 transition-colors group"
          >
            <ArrowLeft className="h-5 w-5 group-hover:-translate-x-1 transition-transform" />
            <span className="font-medium">
              {language === 'km' ? 'ត្រលប់ទៅទំព័រដើម' : 'Back to Home'}
            </span>
          </button>
        </div>
      </div>

      {/* Hero Section */}
      <section className="relative py-20 bg-gradient-to-br from-koh-rong-500 via-koh-rong-600 to-blue-700 overflow-hidden">
        <div className="absolute inset-0 opacity-20">
          <img
            src="https://images.pexels.com/photos/1659438/pexels-photo-1659438.jpeg?auto=compress&cs=tinysrgb&w=1600"
            alt="Cookie Policy"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-koh-rong-600/80 to-blue-700/80"></div>
        </div>
        
        <div className="relative z-10 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center text-white">
          <div className="flex justify-center mb-6">
            <div className="bg-white/20 backdrop-blur-sm rounded-full p-4">
              <Cookie className="h-12 w-12 text-white" />
            </div>
          </div>
          
          <h1 className="text-4xl md:text-6xl font-bold mb-6">
            {language === 'km' ? 'គោលការណ៍ Cookie' : 'Cookie Policy'}
          </h1>
          
          <p className="text-xl md:text-2xl mb-8 max-w-3xl mx-auto leading-relaxed">
            {language === 'km' 
              ? 'យល់ដឹងអំពីរបៀបដែលយើងប្រើ Cookie នៅលើគេហទំព័រកោះរ៉ុង កម្ពុជា'
              : 'Learn how we use cookies on Koh Rong Cambodia website'
            }
          </p>

          <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-4 inline-flex items-center space-x-2">
            <Info className="h-5 w-5" />
            <span className="font-semibold">
              {language === 'km' ? 'ធ្វើបច្ចុប្បន្នភាពចុងក្រោយ: ' : 'Last Updated: '}{lastUpdated}
            </span>
          </div>
        </div>
      </section>

      {/* Cookie Settings Panel */}
      <section className="py-12 bg-white border-b">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-gradient-to-br from-gray-50 to-blue-50 rounded-3xl p-8">
            <h2 className="text-3xl font-bold text-gray-900 mb-6 text-center">
              {language === 'km' ? 'ការកំណត់ Cookie' : 'Cookie Settings'}
            </h2>
            <p className="text-lg text-gray-600 text-center mb-8">
              {language === 'km' 
                ? 'អ្នកអាចគ្រប់គ្រងការកំណត់ Cookie របស់អ្នកនៅទីនេះ'
                : 'You can manage your cookie preferences here'
              }
            </p>

            <div className="grid md:grid-cols-2 gap-6 mb-8">
              {cookieTypes.map((type) => {
                const IconComponent = type.icon;
                const isEnabled = cookieSettings[type.id as keyof typeof cookieSettings];
                
                return (
                  <div key={type.id} className={`${type.bgColor} rounded-2xl p-6 border-2 ${isEnabled ? 'border-green-200' : 'border-gray-200'} transition-all`}>
                    <div className="flex items-start justify-between mb-4">
                      <div className="flex items-center space-x-3">
                        <IconComponent className={`h-6 w-6 ${type.color}`} />
                        <h3 className="text-lg font-semibold text-gray-900">{type.name}</h3>
                      </div>
                      <div className="flex items-center">
                        {type.required ? (
                          <span className="bg-green-100 text-green-800 px-2 py-1 rounded-full text-xs font-medium">
                            {language === 'km' ? 'ចាំបាច់' : 'Required'}
                          </span>
                        ) : (
                          <button
                            onClick={() => handleCookieToggle(type.id as keyof typeof cookieSettings)}
                            className={`relative inline-flex h-6 w-11 items-center rounded-full transition-colors ${
                              isEnabled ? 'bg-koh-rong-600' : 'bg-gray-300'
                            }`}
                          >
                            <span
                              className={`inline-block h-4 w-4 transform rounded-full bg-white transition-transform ${
                                isEnabled ? 'translate-x-6' : 'translate-x-1'
                              }`}
                            />
                          </button>
                        )}
                      </div>
                    </div>
                    
                    <p className="text-gray-600 mb-4">{type.description}</p>
                    
                    <div>
                      <h4 className="text-sm font-semibold text-gray-800 mb-2">
                        {language === 'km' ? 'ឧទាហរណ៍:' : 'Examples:'}
                      </h4>
                      <ul className="text-sm text-gray-600 space-y-1">
                        {type.examples.map((example, index) => (
                          <li key={index} className="flex items-center space-x-2">
                            <div className="w-1 h-1 bg-gray-400 rounded-full"></div>
                            <span>{example}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                );
              })}
            </div>

            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button
                onClick={acceptAllCookies}
                className="bg-gradient-to-r from-koh-rong-500 to-koh-rong-600 hover:from-koh-rong-600 hover:to-koh-rong-700 text-white px-8 py-3 rounded-xl font-semibold transition-all duration-300 transform hover:scale-105"
              >
                {language === 'km' ? 'ទទួលយក Cookie ទាំងអស់' : 'Accept All Cookies'}
              </button>
              <button
                onClick={acceptNecessaryOnly}
                className="border-2 border-gray-300 text-gray-700 hover:bg-gray-50 px-8 py-3 rounded-xl font-semibold transition-all duration-300"
              >
                {language === 'km' ? 'ទទួលតែ Cookie ចាំបាច់' : 'Accept Necessary Only'}
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Cookie Policy Content */}
      <section className="py-20 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-white rounded-3xl shadow-xl p-8 md:p-12 border border-gray-100">
            
            {/* What are Cookies */}
            <div className="mb-12">
              <div className="flex items-center space-x-3 mb-6">
                <Cookie className="h-8 w-8 text-koh-rong-600" />
                <h2 className="text-3xl font-bold text-gray-900">
                  {language === 'km' ? '១. Cookie គឺជាអ្វី?' : '1. What are Cookies?'}
                </h2>
              </div>
              <div className="prose prose-lg max-w-none text-gray-700 leading-relaxed">
                {language === 'km' ? (
                  <div className="space-y-4">
                    <p>
                      Cookie គឺជាឯកសារតូចៗដែលត្រូវបានរក្សាទុកនៅលើកុំព្យូទ័រ ឬឧបករណ៍របស់អ្នកនៅពេលអ្នកទស្សនាគេហទំព័រ។ Cookie ជួយឱ្យគេហទំព័រចងចាំព័ត៌មានអំពីការទស្សនារបស់អ្នក។
                    </p>
                    <p>
                      Cookie មិនអាចធ្វើឱ្យខូចដល់កុំព្យូទ័ររបស់អ្នកទេ ហើយក៏មិនមានវីរុសដែរ។ ពួកវាគ្រាន់តែជាឯកសារអត្ថបទធម្មតាដែលផ្ទុកព័ត៌មានតិចតួចប៉ុណ្ណោះ។
                    </p>
                  </div>
                ) : (
                  <div className="space-y-4">
                    <p>
                      Cookies are small files stored on your computer or device when you visit a website. Cookies help websites remember information about your visit.
                    </p>
                    <p>
                      Cookies cannot harm your computer and do not contain viruses. They are simply normal text files that store small amounts of information.
                    </p>
                  </div>
                )}
              </div>
            </div>

            {/* How We Use Cookies */}
            <div className="mb-12">
              <div className="flex items-center space-x-3 mb-6">
                <Settings className="h-8 w-8 text-koh-rong-600" />
                <h2 className="text-3xl font-bold text-gray-900">
                  {language === 'km' ? '២. យើងប្រើ Cookie យ៉ាងដូចម្តេច?' : '2. How Do We Use Cookies?'}
                </h2>
              </div>
              <div className="prose prose-lg max-w-none text-gray-700 leading-relaxed">
                {language === 'km' ? (
                  <div className="space-y-6">
                    <div>
                      <h3 className="text-xl font-semibold text-gray-800 mb-3">២.១ ការធ្វើឱ្យគេហទំព័រដំណើរការ</h3>
                      <ul className="space-y-2 ml-6">
                        <li className="flex items-start space-x-2">
                          <CheckCircle className="h-5 w-5 text-green-500 mt-0.5 flex-shrink-0" />
                          <span>ចងចាំការកំណត់ភាសារបស់អ្នក (ខ្មែរ ឬ អង់គ្លេស)</span>
                        </li>
                        <li className="flex items-start space-x-2">
                          <CheckCircle className="h-5 w-5 text-green-500 mt-0.5 flex-shrink-0" />
                          <span>រក្សាការកំណត់ការបង្ហាញរបស់អ្នក</span>
                        </li>
                        <li className="flex items-start space-x-2">
                          <CheckCircle className="h-5 w-5 text-green-500 mt-0.5 flex-shrink-0" />
                          <span>ធានាសុវត្ថិភាពនៃសម័យការប្រើប្រាស់</span>
                        </li>
                      </ul>
                    </div>

                    <div>
                      <h3 className="text-xl font-semibold text-gray-800 mb-3">២.២ ការវិភាគ និងការធ្វើឱ្យប្រសើរ</h3>
                      <ul className="space-y-2 ml-6">
                        <li className="flex items-start space-x-2">
                          <BarChart3 className="h-5 w-5 text-blue-500 mt-0.5 flex-shrink-0" />
                          <span>យល់ពីរបៀបដែលអ្នកប្រើប្រាស់គេហទំព័រ</span>
                        </li>
                        <li className="flex items-start space-x-2">
                          <BarChart3 className="h-5 w-5 text-blue-500 mt-0.5 flex-shrink-0" />
                          <span>កំណត់ទំព័រដែលពេញនិយមបំផុត</span>
                        </li>
                        <li className="flex items-start space-x-2">
                          <BarChart3 className="h-5 w-5 text-blue-500 mt-0.5 flex-shrink-0" />
                          <span>ធ្វើឱ្យប្រសើរឡើងនូវបទពិសោធន៍អ្នកប្រើប្រាស់</span>
                        </li>
                      </ul>
                    </div>

                    <div>
                      <h3 className="text-xl font-semibold text-gray-800 mb-3">២.៣ ការផ្ទាល់ខ្លួន</h3>
                      <ul className="space-y-2 ml-6">
                        <li className="flex items-start space-x-2">
                          <Eye className="h-5 w-5 text-purple-500 mt-0.5 flex-shrink-0" />
                          <span>បង្ហាញមាតិកាដែលសមស្របជាមួយចំណាប់អារម្មណ៍</span>
                        </li>
                        <li className="flex items-start space-x-2">
                          <Eye className="h-5 w-5 text-purple-500 mt-0.5 flex-shrink-0" />
                          <span>ណែនាំសេវាកម្មដែលអាចចាប់អារម្មណ៍</span>
                        </li>
                      </ul>
                    </div>
                  </div>
                ) : (
                  <div className="space-y-6">
                    <div>
                      <h3 className="text-xl font-semibold text-gray-800 mb-3">2.1 Making Website Function</h3>
                      <ul className="space-y-2 ml-6">
                        <li className="flex items-start space-x-2">
                          <CheckCircle className="h-5 w-5 text-green-500 mt-0.5 flex-shrink-0" />
                          <span>Remember your language preference (Khmer or English)</span>
                        </li>
                        <li className="flex items-start space-x-2">
                          <CheckCircle className="h-5 w-5 text-green-500 mt-0.5 flex-shrink-0" />
                          <span>Save your display preferences</span>
                        </li>
                        <li className="flex items-start space-x-2">
                          <CheckCircle className="h-5 w-5 text-green-500 mt-0.5 flex-shrink-0" />
                          <span>Ensure session security</span>
                        </li>
                      </ul>
                    </div>

                    <div>
                      <h3 className="text-xl font-semibold text-gray-800 mb-3">2.2 Analytics and Improvement</h3>
                      <ul className="space-y-2 ml-6">
                        <li className="flex items-start space-x-2">
                          <BarChart3 className="h-5 w-5 text-blue-500 mt-0.5 flex-shrink-0" />
                          <span>Understand how you use the website</span>
                        </li>
                        <li className="flex items-start space-x-2">
                          <BarChart3 className="h-5 w-5 text-blue-500 mt-0.5 flex-shrink-0" />
                          <span>Identify most popular pages</span>
                        </li>
                        <li className="flex items-start space-x-2">
                          <BarChart3 className="h-5 w-5 text-blue-500 mt-0.5 flex-shrink-0" />
                          <span>Improve user experience</span>
                        </li>
                      </ul>
                    </div>

                    <div>
                      <h3 className="text-xl font-semibold text-gray-800 mb-3">2.3 Personalization</h3>
                      <ul className="space-y-2 ml-6">
                        <li className="flex items-start space-x-2">
                          <Eye className="h-5 w-5 text-purple-500 mt-0.5 flex-shrink-0" />
                          <span>Show content relevant to your interests</span>
                        </li>
                        <li className="flex items-start space-x-2">
                          <Eye className="h-5 w-5 text-purple-500 mt-0.5 flex-shrink-0" />
                          <span>Recommend services that might interest you</span>
                        </li>
                      </ul>
                    </div>
                  </div>
                )}
              </div>
            </div>

            {/* Third Party Cookies */}
            <div className="mb-12">
              <div className="flex items-center space-x-3 mb-6">
                <Globe className="h-8 w-8 text-koh-rong-600" />
                <h2 className="text-3xl font-bold text-gray-900">
                  {language === 'km' ? '៣. Cookie ពីភាគីទីបី' : '3. Third-Party Cookies'}
                </h2>
              </div>
              <div className="prose prose-lg max-w-none text-gray-700 leading-relaxed">
                {language === 'km' ? (
                  <div className="space-y-4">
                    <p>
                      យើងអាចប្រើ Cookie ពីភាគីទីបីដើម្បីជួយយើងវិភាគការប្រើប្រាស់គេហទំព័រ និងផ្តល់សេវាកម្មកាន់តែប្រសើរ។
                    </p>
                    
                    <h3 className="text-xl font-semibold text-gray-800 mb-3">៣.១ សេវាកម្មវិភាគ</h3>
                    <ul className="space-y-2 ml-6">
                      <li>• Google Analytics - សម្រាប់វិភាគចរាចរណ៍គេហទំព័រ</li>
                      <li>• Facebook Pixel - សម្រាប់វាស់វែងប្រសិទ្ធភាពការផ្សាយ</li>
                    </ul>

                    <h3 className="text-xl font-semibold text-gray-800 mb-3 mt-6">៣.២ ការគ្រប់គ្រង</h3>
                    <p>
                      អ្នកអាចគ្រប់គ្រង Cookie ទាំងនេះតាមរយៈការកំណត់នៅក្នុងកម្មវិធីរុករកបណ្តាញរបស់អ្នក។
                    </p>
                  </div>
                ) : (
                  <div className="space-y-4">
                    <p>
                      We may use third-party cookies to help us analyze website usage and provide better services.
                    </p>
                    
                    <h3 className="text-xl font-semibold text-gray-800 mb-3">3.1 Analytics Services</h3>
                    <ul className="space-y-2 ml-6">
                      <li>• Google Analytics - for website traffic analysis</li>
                      <li>• Facebook Pixel - for advertising effectiveness measurement</li>
                    </ul>

                    <h3 className="text-xl font-semibold text-gray-800 mb-3 mt-6">3.2 Management</h3>
                    <p>
                      You can manage these cookies through your browser settings.
                    </p>
                  </div>
                )}
              </div>
            </div>

            {/* Managing Cookies */}
            <div className="mb-12">
              <div className="flex items-center space-x-3 mb-6">
                <Settings className="h-8 w-8 text-koh-rong-600" />
                <h2 className="text-3xl font-bold text-gray-900">
                  {language === 'km' ? '៤. ការគ្រប់គ្រង Cookie' : '4. Managing Cookies'}
                </h2>
              </div>
              <div className="prose prose-lg max-w-none text-gray-700 leading-relaxed">
                {language === 'km' ? (
                  <div className="space-y-4">
                    <p>
                      អ្នកមានសិទ្ធិគ្រប់គ្រង Cookie នៅលើឧបករណ៍របស់អ្នក។ នេះជាវិធីមួយចំនួន៖
                    </p>
                    
                    <h3 className="text-xl font-semibold text-gray-800 mb-3">៤.១ តាមរយៈកម្មវិធីរុករកបណ្តាញ</h3>
                    <div className="bg-gray-50 rounded-2xl p-6">
                      <ul className="space-y-3">
                        <li><strong>Chrome:</strong> Settings → Privacy and security → Cookies and other site data</li>
                        <li><strong>Firefox:</strong> Options → Privacy & Security → Cookies and Site Data</li>
                        <li><strong>Safari:</strong> Preferences → Privacy → Manage Website Data</li>
                        <li><strong>Edge:</strong> Settings → Cookies and site permissions → Cookies and site data</li>
                      </ul>
                    </div>

                    <h3 className="text-xl font-semibold text-gray-800 mb-3 mt-6">៤.២ តាមរយៈគេហទំព័រយើង</h3>
                    <p>
                      អ្នកអាចគ្រប់គ្រងការកំណត់ Cookie នៅផ្នែកខាងលើនៃទំព័រនេះ។
                    </p>

                    <h3 className="text-xl font-semibold text-gray-800 mb-3 mt-6">៤.៣ ផលប៉ះពាល់នៃការបិទ Cookie</h3>
                    <div className="bg-yellow-50 border border-yellow-200 rounded-2xl p-6">
                      <p className="text-yellow-800">
                        <strong>ចំណាំ:</strong> ការបិទ Cookie អាចធ្វើឱ្យមុខងារមួយចំនួននៃគេហទំព័រមិនដំណើរការបានត្រឹមត្រូវ។
                      </p>
                    </div>
                  </div>
                ) : (
                  <div className="space-y-4">
                    <p>
                      You have the right to manage cookies on your device. Here are some ways:
                    </p>
                    
                    <h3 className="text-xl font-semibold text-gray-800 mb-3">4.1 Through Browser</h3>
                    <div className="bg-gray-50 rounded-2xl p-6">
                      <ul className="space-y-3">
                        <li><strong>Chrome:</strong> Settings → Privacy and security → Cookies and other site data</li>
                        <li><strong>Firefox:</strong> Options → Privacy & Security → Cookies and Site Data</li>
                        <li><strong>Safari:</strong> Preferences → Privacy → Manage Website Data</li>
                        <li><strong>Edge:</strong> Settings → Cookies and site permissions → Cookies and site data</li>
                      </ul>
                    </div>

                    <h3 className="text-xl font-semibold text-gray-800 mb-3 mt-6">4.2 Through Our Website</h3>
                    <p>
                      You can manage cookie settings in the section above on this page.
                    </p>

                    <h3 className="text-xl font-semibold text-gray-800 mb-3 mt-6">4.3 Impact of Disabling Cookies</h3>
                    <div className="bg-yellow-50 border border-yellow-200 rounded-2xl p-6">
                      <p className="text-yellow-800">
                        <strong>Note:</strong> Disabling cookies may cause some website functions to not work properly.
                      </p>
                    </div>
                  </div>
                )}
              </div>
            </div>

            {/* Contact Information */}
            <div className="mb-12">
              <div className="flex items-center space-x-3 mb-6">
                <Shield className="h-8 w-8 text-koh-rong-600" />
                <h2 className="text-3xl font-bold text-gray-900">
                  {language === 'km' ? '៥. ព័ត៌មានទំនាក់ទំនង' : '5. Contact Information'}
                </h2>
              </div>
              <div className="prose prose-lg max-w-none text-gray-700 leading-relaxed">
                {language === 'km' ? (
                  <div className="space-y-4">
                    <p>
                      ប្រសិនបើអ្នកមានសំណួរអំពីគោលការណ៍ Cookie នេះ សូមទាក់ទងមកកាន់យើង៖
                    </p>
                    
                    <div className="bg-gray-50 rounded-2xl p-6">
                      <div className="grid md:grid-cols-2 gap-6">
                        <div>
                          <h4 className="font-semibold text-gray-900 mb-3">ព័ត៌មានទំនាក់ទំនង</h4>
                          <div className="space-y-2">
                            <div className="flex items-center space-x-2">
                              <Globe className="h-4 w-4 text-koh-rong-600" />
                              <span>chhaileang27@gmail.com</span>
                            </div>
                            <div className="flex items-center space-x-2">
                              <Settings className="h-4 w-4 text-koh-rong-600" />
                              <span>010 820 486</span>
                            </div>
                          </div>
                        </div>
                        <div>
                          <h4 className="font-semibold text-gray-900 mb-3">ទីតាំង</h4>
                          <p className="text-gray-600">
                            កោះរ៉ុង<br />
                            ខេត្តព្រះសីហនុ<br />
                            កម្ពុជា
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                ) : (
                  <div className="space-y-4">
                    <p>
                      If you have questions about this Cookie Policy, please contact us:
                    </p>
                    
                    <div className="bg-gray-50 rounded-2xl p-6">
                      <div className="grid md:grid-cols-2 gap-6">
                        <div>
                          <h4 className="font-semibold text-gray-900 mb-3">Contact Information</h4>
                          <div className="space-y-2">
                            <div className="flex items-center space-x-2">
                              <Globe className="h-4 w-4 text-koh-rong-600" />
                              <span>chhaileang27@gmail.com</span>
                            </div>
                            <div className="flex items-center space-x-2">
                              <Settings className="h-4 w-4 text-koh-rong-600" />
                              <span>010 820 486</span>
                            </div>
                          </div>
                        </div>
                        <div>
                          <h4 className="font-semibold text-gray-900 mb-3">Location</h4>
                          <p className="text-gray-600">
                            Koh Rong Island<br />
                            Sihanoukville Province<br />
                            Cambodia
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                )}
              </div>
            </div>

            {/* Footer Note */}
            <div className="bg-gradient-to-r from-koh-rong-50 to-blue-50 rounded-2xl p-6 text-center">
              <p className="text-gray-700 font-medium">
                {language === 'km' 
                  ? 'គោលការណ៍ Cookie នេះត្រូវបានធ្វើបច្ចុប្បន្នភាពចុងក្រោយនៅថ្ងៃទី ២៨ ខែធ្នូ ឆ្នាំ ២០២៤'
                  : 'This Cookie Policy was last updated on December 28, 2024'
                }
              </p>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default CookiePolicyPage;