import React from 'react';
import { ArrowLeft, Shield, Lock, Eye, Database, UserCheck, Globe, Mail, Phone, Calendar, AlertTriangle, CheckCircle, Info, FileText, Users, Settings } from 'lucide-react';
import { useLanguage } from '../contexts/LanguageContext';
import Footer from './Footer';

interface PrivacyPolicyPageProps {
  onBack: () => void;
}

const PrivacyPolicyPage: React.FC<PrivacyPolicyPageProps> = ({ onBack }) => {
  const { language } = useLanguage();

  const lastUpdated = language === 'km' ? '២៨ ធ្នូ ២០២៤' : 'December 28, 2024';

  const dataTypes = [
    {
      icon: UserCheck,
      title: language === 'km' ? 'ព័ត៌មានផ្ទាល់ខ្លួន' : 'Personal Information',
      description: language === 'km' 
        ? 'ព័ត៌មានដែលអ្នកផ្តល់ដោយស្ម័គ្រចិត្ត'
        : 'Information you provide voluntarily',
      examples: language === 'km' 
        ? ['ឈ្មោះ', 'អ៊ីមែល', 'លេខទូរស័ព្ទ', 'ព័ត៌មានទំនាក់ទំនង']
        : ['Name', 'Email', 'Phone number', 'Contact information']
    },
    {
      icon: Globe,
      title: language === 'km' ? 'ព័ត៌មានការប្រើប្រាស់' : 'Usage Information',
      description: language === 'km' 
        ? 'ព័ត៌មានអំពីរបៀបអ្នកប្រើប្រាស់គេហទំព័រ'
        : 'Information about how you use the website',
      examples: language === 'km' 
        ? ['ទំព័រដែលបានមើល', 'ពេលវេលាស្នាក់នៅ', 'ការចុចលើតំណ', 'ការស្វែងរក']
        : ['Pages viewed', 'Time spent', 'Link clicks', 'Search queries']
    },
    {
      icon: Settings,
      title: language === 'km' ? 'ព័ត៌មានបច្ចេកទេស' : 'Technical Information',
      description: language === 'km' 
        ? 'ព័ត៌មានដែលប្រមូលដោយស្វ័យប្រវត្តិ'
        : 'Information collected automatically',
      examples: language === 'km' 
        ? ['អាសយដ្ឋាន IP', 'ប្រភេទកម្មវិធីរុករក', 'ប្រព័ន្ធប្រតិបត្តិការ', 'ព័ត៌មានឧបករណ៍']
        : ['IP address', 'Browser type', 'Operating system', 'Device information']
    },
    {
      icon: Eye,
      title: language === 'km' ? 'ព័ត៌មាន Cookie' : 'Cookie Information',
      description: language === 'km' 
        ? 'ព័ត៌មានដែលរក្សាទុកតាមរយៈ Cookie'
        : 'Information stored through cookies',
      examples: language === 'km' 
        ? ['ការកំណត់ភាសា', 'ចំណូលចិត្ត', 'ការកំណត់បង្ហាញ', 'ព័ត៌មានសម័យ']
        : ['Language settings', 'Preferences', 'Display settings', 'Session information']
    }
  ];

  const usagePurposes = [
    {
      icon: CheckCircle,
      title: language === 'km' ? 'ផ្តល់សេវាកម្ម' : 'Service Provision',
      description: language === 'km' 
        ? 'ដើម្បីផ្តល់សេវាកម្មដែលអ្នកស្នើសុំ'
        : 'To provide services you request',
      details: language === 'km' 
        ? ['ឆ្លើយតបសំណួរ', 'ផ្តល់ព័ត៌មានទេសចរណ៍', 'ភ្ជាប់ជាមួយអ្នកផ្តល់សេវាកម្ម', 'ជួយរៀបចំដំណើរ']
        : ['Answer questions', 'Provide tourism information', 'Connect with service providers', 'Help plan trips']
    },
    {
      icon: Users,
      title: language === 'km' ? 'ធ្វើឱ្យប្រសើរឡើង' : 'Improvement',
      description: language === 'km' 
        ? 'ដើម្បីធ្វើឱ្យប្រសើរឡើងនូវគេហទំព័រ និងសេវាកម្ម'
        : 'To improve website and services',
      details: language === 'km' 
        ? ['វិភាគការប្រើប្រាស់', 'កំណត់បញ្ហា', 'បង្កើនបទពិសោធន៍', 'អភិវឌ្ឍន៍មុខងារថ្មី']
        : ['Usage analysis', 'Identify issues', 'Enhance experience', 'Develop new features']
    },
    {
      icon: Mail,
      title: language === 'km' ? 'ទំនាក់ទំនង' : 'Communication',
      description: language === 'km' 
        ? 'ដើម្បីទាក់ទងជាមួយអ្នកអំពីសេវាកម្ម'
        : 'To communicate with you about services',
      details: language === 'km' 
        ? ['ផ្ញើព័ត៌មានថ្មី', 'ឆ្លើយសំណួរ', 'ជូនដំណឹងសំខាន់', 'ការគាំទ្រអតិថិជន']
        : ['Send updates', 'Answer questions', 'Important notifications', 'Customer support']
    },
    {
      icon: Shield,
      title: language === 'km' ? 'សុវត្ថិភាព' : 'Security',
      description: language === 'km' 
        ? 'ដើម្បីការពារគេហទំព័រ និងអ្នកប្រើប្រាស់'
        : 'To protect website and users',
      details: language === 'km' 
        ? ['ការពារពីការវាយប្រហារ', 'កំណត់អត្តសញ្ញាណ', 'ការពារទិន្នន័យ', 'រក្សាសុវត្ថិភាព']
        : ['Protect from attacks', 'Identity verification', 'Data protection', 'Maintain security']
    }
  ];

  const rights = [
    {
      icon: Eye,
      title: language === 'km' ? 'សិទ្ធិមើល' : 'Right to Access',
      description: language === 'km' 
        ? 'អ្នកមានសិទ្ធិស្នើសុំមើលព័ត៌មានផ្ទាល់ខ្លួនដែលយើងមាន'
        : 'You have the right to request access to personal information we have'
    },
    {
      icon: Settings,
      title: language === 'km' ? 'សិទ្ធិកែប្រែ' : 'Right to Rectification',
      description: language === 'km' 
        ? 'អ្នកអាចស្នើសុំកែប្រែព័ត៌មានមិនត្រឹមត្រូវ'
        : 'You can request correction of inaccurate information'
    },
    {
      icon: AlertTriangle,
      title: language === 'km' ? 'សិទ្ធិលុប' : 'Right to Erasure',
      description: language === 'km' 
        ? 'អ្នកអាចស្នើសុំលុបព័ត៌មានផ្ទាល់ខ្លួនក្នុងករណីជាក់លាក់'
        : 'You can request deletion of personal information in specific cases'
    },
    {
      icon: Lock,
      title: language === 'km' ? 'សិទ្ធិកំណត់' : 'Right to Restriction',
      description: language === 'km' 
        ? 'អ្នកអាចស្នើសុំកំណត់ការប្រើប្រាស់ព័ត៌មាន'
        : 'You can request restriction of information processing'
    },
    {
      icon: Database,
      title: language === 'km' ? 'សិទ្ធិចល័ត' : 'Right to Portability',
      description: language === 'km' 
        ? 'អ្នកអាចស្នើសុំទទួលព័ត៌មានក្នុងទម្រង់អាចប្រើបាន'
        : 'You can request to receive information in a usable format'
    },
    {
      icon: UserCheck,
      title: language === 'km' ? 'សិទ្ធិបដិសេធ' : 'Right to Object',
      description: language === 'km' 
        ? 'អ្នកអាចបដិសេធការប្រើប្រាស់ព័ត៌មានសម្រាប់គោលបំណងជាក់លាក់'
        : 'You can object to information use for specific purposes'
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
            alt="Privacy Policy"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-koh-rong-600/80 to-blue-700/80"></div>
        </div>
        
        <div className="relative z-10 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center text-white">
          <div className="flex justify-center mb-6">
            <div className="bg-white/20 backdrop-blur-sm rounded-full p-4">
              <Shield className="h-12 w-12 text-white" />
            </div>
          </div>
          
          <h1 className="text-4xl md:text-6xl font-bold mb-6">
            {language === 'km' ? 'គោលការណ៍ភាពឯកជន' : 'Privacy Policy'}
          </h1>
          
          <p className="text-xl md:text-2xl mb-8 max-w-3xl mx-auto leading-relaxed">
            {language === 'km' 
              ? 'យើងគោរពភាពឯកជនរបស់អ្នក និងការពារព័ត៌មានផ្ទាល់ខ្លួនរបស់អ្នក'
              : 'We respect your privacy and protect your personal information'
            }
          </p>

          <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-4 inline-flex items-center space-x-2">
            <Calendar className="h-5 w-5" />
            <span className="font-semibold">
              {language === 'km' ? 'ធ្វើបច្ចុប្បន្នភាពចុងក្រោយ: ' : 'Last Updated: '}{lastUpdated}
            </span>
          </div>
        </div>
      </section>

      {/* Privacy Overview */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">
              {language === 'km' ? 'ការការពារព័ត៌មានរបស់អ្នក' : 'Protecting Your Information'}
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              {language === 'km' 
                ? 'យើងប្តេជ្ញាការពារភាពឯកជន និងសុវត្ថិភាពនៃព័ត៌មានផ្ទាល់ខ្លួនរបស់អ្នក'
                : 'We are committed to protecting the privacy and security of your personal information'
              }
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="bg-gradient-to-r from-green-500 to-green-600 p-4 rounded-2xl inline-block mb-4">
                <Lock className="h-8 w-8 text-white" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-2">
                {language === 'km' ? 'ការអ៊ិនគ្រីប' : 'Encryption'}
              </h3>
              <p className="text-gray-600">
                {language === 'km' 
                  ? 'ព័ត៌មានរបស់អ្នកត្រូវបានការពារដោយការអ៊ិនគ្រីប'
                  : 'Your information is protected by encryption'
                }
              </p>
            </div>
            <div className="text-center">
              <div className="bg-gradient-to-r from-blue-500 to-blue-600 p-4 rounded-2xl inline-block mb-4">
                <Database className="h-8 w-8 text-white" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-2">
                {language === 'km' ? 'ការរក្សាទុកសុវត្ថិភាព' : 'Secure Storage'}
              </h3>
              <p className="text-gray-600">
                {language === 'km' 
                  ? 'ទិន្នន័យត្រូវបានរក្សាទុកនៅម៉ាស៊ីនមេសុវត្ថិភាព'
                  : 'Data is stored on secure servers'
                }
              </p>
            </div>
            <div className="text-center">
              <div className="bg-gradient-to-r from-purple-500 to-purple-600 p-4 rounded-2xl inline-block mb-4">
                <UserCheck className="h-8 w-8 text-white" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-2">
                {language === 'km' ? 'ការគ្រប់គ្រងសិទ្ធិ' : 'Rights Management'}
              </h3>
              <p className="text-gray-600">
                {language === 'km' 
                  ? 'អ្នកមានសិទ្ធិគ្រប់គ្រងព័ត៌មានរបស់អ្នក'
                  : 'You have full control over your information'
                }
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Main Content */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-white rounded-3xl shadow-xl p-8 md:p-12 border border-gray-100">
            
            {/* Introduction */}
            <div className="mb-12">
              <div className="flex items-center space-x-3 mb-6">
                <Info className="h-8 w-8 text-koh-rong-600" />
                <h2 className="text-3xl font-bold text-gray-900">
                  {language === 'km' ? '១. ការណែនាំ' : '1. Introduction'}
                </h2>
              </div>
              <div className="prose prose-lg max-w-none text-gray-700 leading-relaxed">
                {language === 'km' ? (
                  <div className="space-y-4">
                    <p>
                      គោលការណ៍ភាពឯកជននេះពន្យល់អំពីរបៀបដែលគេហទំព័រ "កោះរ៉ុង កម្ពុជា" ប្រមូល ប្រើប្រាស់ និងការពារព័ត៌មានផ្ទាល់ខ្លួនរបស់អ្នក។
                    </p>
                    <p>
                      យើងគោរពភាពឯកជនរបស់អ្នក និងប្តេជ្ញាការពារព័ត៌មានដែលអ្នកផ្តល់ឱ្យយើង។ គោលការណ៍នេះអនុវត្តចំពោះការប្រើប្រាស់គេហទំព័រ និងសេវាកម្មទាំងអស់របស់យើង។
                    </p>
                    <p>
                      ដោយការប្រើប្រាស់គេហទំព័រនេះ អ្នកយល់ព្រមជាមួយនឹងការប្រមូល និងការប្រើប្រាស់ព័ត៌មានដូចដែលបានពិពណ៌នានៅក្នុងគោលការណ៍នេះ។
                    </p>
                  </div>
                ) : (
                  <div className="space-y-4">
                    <p>
                      This Privacy Policy explains how "Koh Rong Cambodia" website collects, uses, and protects your personal information.
                    </p>
                    <p>
                      We respect your privacy and are committed to protecting the information you provide to us. This policy applies to all use of our website and services.
                    </p>
                    <p>
                      By using this website, you agree to the collection and use of information as described in this policy.
                    </p>
                  </div>
                )}
              </div>
            </div>

            {/* Information We Collect */}
            <div className="mb-12">
              <div className="flex items-center space-x-3 mb-6">
                <Database className="h-8 w-8 text-koh-rong-600" />
                <h2 className="text-3xl font-bold text-gray-900">
                  {language === 'km' ? '២. ព័ត៌មានដែលយើងប្រមូល' : '2. Information We Collect'}
                </h2>
              </div>
              
              <div className="grid md:grid-cols-2 gap-8 mb-8">
                {dataTypes.map((type, index) => {
                  const IconComponent = type.icon;
                  return (
                    <div key={index} className="bg-gray-50 rounded-2xl p-6">
                      <div className="flex items-center space-x-3 mb-4">
                        <IconComponent className="h-6 w-6 text-koh-rong-600" />
                        <h3 className="text-xl font-semibold text-gray-900">{type.title}</h3>
                      </div>
                      <p className="text-gray-600 mb-4">{type.description}</p>
                      <div>
                        <h4 className="text-sm font-semibold text-gray-800 mb-2">
                          {language === 'km' ? 'ឧទាហរណ៍:' : 'Examples:'}
                        </h4>
                        <ul className="text-sm text-gray-600 space-y-1">
                          {type.examples.map((example, idx) => (
                            <li key={idx} className="flex items-center space-x-2">
                              <div className="w-1 h-1 bg-koh-rong-500 rounded-full"></div>
                              <span>{example}</span>
                            </li>
                          ))}
                        </ul>
                      </div>
                    </div>
                  );
                })}
              </div>

              <div className="bg-blue-50 border border-blue-200 rounded-2xl p-6">
                <div className="flex items-start space-x-3">
                  <Info className="h-6 w-6 text-blue-600 mt-0.5 flex-shrink-0" />
                  <div>
                    <h4 className="font-semibold text-blue-900 mb-2">
                      {language === 'km' ? 'ចំណាំសំខាន់' : 'Important Note'}
                    </h4>
                    <p className="text-blue-800">
                      {language === 'km' 
                        ? 'យើងមិនប្រមូលព័ត៌មានផ្ទាល់ខ្លួនដែលមិនចាំបាច់ទេ ហើយយើងមិនលក់ ឬចែករំលែកព័ត៌មានរបស់អ្នកទៅឱ្យភាគីទីបីដោយគ្មានការយល់ព្រមរបស់អ្នកទេ។'
                        : 'We do not collect unnecessary personal information and we do not sell or share your information with third parties without your consent.'
                      }
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* How We Use Information */}
            <div className="mb-12">
              <div className="flex items-center space-x-3 mb-6">
                <Settings className="h-8 w-8 text-koh-rong-600" />
                <h2 className="text-3xl font-bold text-gray-900">
                  {language === 'km' ? '៣. របៀបដែលយើងប្រើព័ត៌មាន' : '3. How We Use Information'}
                </h2>
              </div>
              
              <div className="grid md:grid-cols-2 gap-8">
                {usagePurposes.map((purpose, index) => {
                  const IconComponent = purpose.icon;
                  return (
                    <div key={index} className="bg-gray-50 rounded-2xl p-6">
                      <div className="flex items-center space-x-3 mb-4">
                        <IconComponent className="h-6 w-6 text-koh-rong-600" />
                        <h3 className="text-xl font-semibold text-gray-900">{purpose.title}</h3>
                      </div>
                      <p className="text-gray-600 mb-4">{purpose.description}</p>
                      <ul className="space-y-2">
                        {purpose.details.map((detail, idx) => (
                          <li key={idx} className="flex items-start space-x-2">
                            <CheckCircle className="h-4 w-4 text-green-500 mt-0.5 flex-shrink-0" />
                            <span className="text-sm text-gray-700">{detail}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  );
                })}
              </div>
            </div>

            {/* Information Sharing */}
            <div className="mb-12">
              <div className="flex items-center space-x-3 mb-6">
                <Users className="h-8 w-8 text-koh-rong-600" />
                <h2 className="text-3xl font-bold text-gray-900">
                  {language === 'km' ? '៤. ការចែករំលែកព័ត៌មាន' : '4. Information Sharing'}
                </h2>
              </div>
              <div className="prose prose-lg max-w-none text-gray-700 leading-relaxed">
                {language === 'km' ? (
                  <div className="space-y-6">
                    <p>
                      យើងមិនលក់ ជួល ឬផ្តល់ព័ត៌មានផ្ទាល់ខ្លួនរបស់អ្នកទៅឱ្យភាគីទីបីទេ លើកលែងតែក្នុងករណីខាងក្រោម៖
                    </p>

                    <div className="bg-green-50 rounded-2xl p-6">
                      <h3 className="text-xl font-semibold text-gray-800 mb-4 flex items-center space-x-2">
                        <CheckCircle className="h-5 w-5 text-green-600" />
                        <span>៤.១ ការចែករំលែកដែលអនុញ្ញាត</span>
                      </h3>
                      <ul className="space-y-3">
                        <li className="flex items-start space-x-3">
                          <div className="w-2 h-2 bg-green-500 rounded-full mt-2 flex-shrink-0"></div>
                          <span><strong>ជាមួយការយល់ព្រម:</strong> នៅពេលអ្នកយល់ព្រមឱ្យចែករំលែក</span>
                        </li>
                        <li className="flex items-start space-x-3">
                          <div className="w-2 h-2 bg-green-500 rounded-full mt-2 flex-shrink-0"></div>
                          <span><strong>អ្នកផ្តល់សេវាកម្ម:</strong> ដើម្បីភ្ជាប់អ្នកជាមួយអ្នកផ្តល់សេវាកម្មមូលដ្ឋាន</span>
                        </li>
                        <li className="flex items-start space-x-3">
                          <div className="w-2 h-2 bg-green-500 rounded-full mt-2 flex-shrink-0"></div>
                          <span><strong>តម្រូវការច្បាប់:</strong> នៅពេលច្បាប់តម្រូវឱ្យចែករំលែក</span>
                        </li>
                      </ul>
                    </div>

                    <div className="bg-red-50 rounded-2xl p-6">
                      <h3 className="text-xl font-semibold text-gray-800 mb-4 flex items-center space-x-2">
                        <AlertTriangle className="h-5 w-5 text-red-600" />
                        <span>៤.២ យើងមិនដែលចែករំលែក</span>
                      </h3>
                      <ul className="space-y-3">
                        <li className="flex items-start space-x-3">
                          <div className="w-2 h-2 bg-red-500 rounded-full mt-2 flex-shrink-0"></div>
                          <span>លក់ព័ត៌មានទៅឱ្យក្រុមហ៊ុនផ្សាយពាណិជ្ជកម្ម</span>
                        </li>
                        <li className="flex items-start space-x-3">
                          <div className="w-2 h-2 bg-red-500 rounded-full mt-2 flex-shrink-0"></div>
                          <span>ផ្តល់ព័ត៌មានទំនាក់ទំនងដល់អ្នកផ្សាយ spam</span>
                        </li>
                        <li className="flex items-start space-x-3">
                          <div className="w-2 h-2 bg-red-500 rounded-full mt-2 flex-shrink-0"></div>
                          <span>ចែករំលែកដោយគ្មានការយល់ព្រម</span>
                        </li>
                      </ul>
                    </div>
                  </div>
                ) : (
                  <div className="space-y-6">
                    <p>
                      We do not sell, rent, or provide your personal information to third parties except in the following cases:
                    </p>

                    <div className="bg-green-50 rounded-2xl p-6">
                      <h3 className="text-xl font-semibold text-gray-800 mb-4 flex items-center space-x-2">
                        <CheckCircle className="h-5 w-5 text-green-600" />
                        <span>4.1 Permitted Sharing</span>
                      </h3>
                      <ul className="space-y-3">
                        <li className="flex items-start space-x-3">
                          <div className="w-2 h-2 bg-green-500 rounded-full mt-2 flex-shrink-0"></div>
                          <span><strong>With Consent:</strong> When you agree to share</span>
                        </li>
                        <li className="flex items-start space-x-3">
                          <div className="w-2 h-2 bg-green-500 rounded-full mt-2 flex-shrink-0"></div>
                          <span><strong>Service Providers:</strong> To connect you with local service providers</span>
                        </li>
                        <li className="flex items-start space-x-3">
                          <div className="w-2 h-2 bg-green-500 rounded-full mt-2 flex-shrink-0"></div>
                          <span><strong>Legal Requirements:</strong> When required by law</span>
                        </li>
                      </ul>
                    </div>

                    <div className="bg-red-50 rounded-2xl p-6">
                      <h3 className="text-xl font-semibold text-gray-800 mb-4 flex items-center space-x-2">
                        <AlertTriangle className="h-5 w-5 text-red-600" />
                        <span>4.2 We Never Share</span>
                      </h3>
                      <ul className="space-y-3">
                        <li className="flex items-start space-x-3">
                          <div className="w-2 h-2 bg-red-500 rounded-full mt-2 flex-shrink-0"></div>
                          <span>Sell information to advertising companies</span>
                        </li>
                        <li className="flex items-start space-x-3">
                          <div className="w-2 h-2 bg-red-500 rounded-full mt-2 flex-shrink-0"></div>
                          <span>Provide contact information to spammers</span>
                        </li>
                        <li className="flex items-start space-x-3">
                          <div className="w-2 h-2 bg-red-500 rounded-full mt-2 flex-shrink-0"></div>
                          <span>Share without consent</span>
                        </li>
                      </ul>
                    </div>
                  </div>
                )}
              </div>
            </div>

            {/* Data Security */}
            <div className="mb-12">
              <div className="flex items-center space-x-3 mb-6">
                <Lock className="h-8 w-8 text-koh-rong-600" />
                <h2 className="text-3xl font-bold text-gray-900">
                  {language === 'km' ? '៥. សុវត្ថិភាពទិន្នន័យ' : '5. Data Security'}
                </h2>
              </div>
              <div className="prose prose-lg max-w-none text-gray-700 leading-relaxed">
                {language === 'km' ? (
                  <div className="space-y-6">
                    <p>
                      យើងប្រើវិធានការសុវត្ថិភាពបច្ចេកទេស រដ្ឋបាល និងរូបវន្តដើម្បីការពារព័ត៌មានរបស់អ្នក។
                    </p>

                    <div className="grid md:grid-cols-2 gap-6">
                      <div className="bg-blue-50 rounded-2xl p-6">
                        <h3 className="text-lg font-semibold text-gray-800 mb-3 flex items-center space-x-2">
                          <Shield className="h-5 w-5 text-blue-600" />
                          <span>វិធានការបច្ចេកទេស</span>
                        </h3>
                        <ul className="space-y-2 text-sm">
                          <li>• ការអ៊ិនគ្រីប SSL/TLS</li>
                          <li>• ការការពារ firewall</li>
                          <li>• ការធ្វើបច្ចុប្បន្នភាពសុវត្ថិភាពទៀងទាត់</li>
                          <li>• ការតាមដានសកម្មភាពសង្ស័យ</li>
                        </ul>
                      </div>

                      <div className="bg-green-50 rounded-2xl p-6">
                        <h3 className="text-lg font-semibold text-gray-800 mb-3 flex items-center space-x-2">
                          <UserCheck className="h-5 w-5 text-green-600" />
                          <span>វិធានការរដ្ឋបាល</span>
                        </h3>
                        <ul className="space-y-2 text-sm">
                          <li>• ការកំណត់សិទ្ធិចូលប្រើ</li>
                          <li>• ការបណ្តុះបណ្តាលបុគ្គលិក</li>
                          <li>• គោលការណ៍ភាពឯកជនតឹងរ៉ឹង</li>
                          <li>• ការត្រួតពិនិត្យទៀងទាត់</li>
                        </ul>
                      </div>
                    </div>

                    <div className="bg-yellow-50 border border-yellow-200 rounded-2xl p-6">
                      <div className="flex items-start space-x-3">
                        <AlertTriangle className="h-6 w-6 text-yellow-600 mt-0.5 flex-shrink-0" />
                        <div>
                          <h4 className="font-semibold text-yellow-900 mb-2">ការជូនដំណឹងអំពីការរំលោភ</h4>
                          <p className="text-yellow-800">
                            ក្នុងករណីមានការរំលោភសុវត្ថិភាពទិន្នន័យ យើងនឹងជូនដំណឹងដល់អ្នកក្នុងរយៈពេល ៧២ ម៉ោង និងអាជ្ញាធរពាក់ព័ន្ធ។
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                ) : (
                  <div className="space-y-6">
                    <p>
                      We use technical, administrative, and physical security measures to protect your information.
                    </p>

                    <div className="grid md:grid-cols-2 gap-6">
                      <div className="bg-blue-50 rounded-2xl p-6">
                        <h3 className="text-lg font-semibold text-gray-800 mb-3 flex items-center space-x-2">
                          <Shield className="h-5 w-5 text-blue-600" />
                          <span>Technical Measures</span>
                        </h3>
                        <ul className="space-y-2 text-sm">
                          <li>• SSL/TLS encryption</li>
                          <li>• Firewall protection</li>
                          <li>• Regular security updates</li>
                          <li>• Suspicious activity monitoring</li>
                        </ul>
                      </div>

                      <div className="bg-green-50 rounded-2xl p-6">
                        <h3 className="text-lg font-semibold text-gray-800 mb-3 flex items-center space-x-2">
                          <UserCheck className="h-5 w-5 text-green-600" />
                          <span>Administrative Measures</span>
                        </h3>
                        <ul className="space-y-2 text-sm">
                          <li>• Access control restrictions</li>
                          <li>• Staff training</li>
                          <li>• Strict privacy policies</li>
                          <li>• Regular audits</li>
                        </ul>
                      </div>
                    </div>

                    <div className="bg-yellow-50 border border-yellow-200 rounded-2xl p-6">
                      <div className="flex items-start space-x-3">
                        <AlertTriangle className="h-6 w-6 text-yellow-600 mt-0.5 flex-shrink-0" />
                        <div>
                          <h4 className="font-semibold text-yellow-900 mb-2">Breach Notification</h4>
                          <p className="text-yellow-800">
                            In case of a data security breach, we will notify you within 72 hours and relevant authorities.
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                )}
              </div>
            </div>

            {/* Your Rights */}
            <div className="mb-12">
              <div className="flex items-center space-x-3 mb-6">
                <UserCheck className="h-8 w-8 text-koh-rong-600" />
                <h2 className="text-3xl font-bold text-gray-900">
                  {language === 'km' ? '៦. សិទ្ធិរបស់អ្នក' : '6. Your Rights'}
                </h2>
              </div>
              
              <div className="grid md:grid-cols-2 gap-6 mb-8">
                {rights.map((right, index) => {
                  const IconComponent = right.icon;
                  return (
                    <div key={index} className="bg-gray-50 rounded-2xl p-6">
                      <div className="flex items-start space-x-3">
                        <IconComponent className="h-6 w-6 text-koh-rong-600 mt-1 flex-shrink-0" />
                        <div>
                          <h3 className="text-lg font-semibold text-gray-900 mb-2">{right.title}</h3>
                          <p className="text-gray-600">{right.description}</p>
                        </div>
                      </div>
                    </div>
                  );
                })}
              </div>

              <div className="bg-koh-rong-50 border border-koh-rong-200 rounded-2xl p-6">
                <h3 className="text-xl font-semibold text-gray-900 mb-4">
                  {language === 'km' ? 'របៀបអនុវត្តសិទ្ធិ' : 'How to Exercise Your Rights'}
                </h3>
                <p className="text-gray-700 mb-4">
                  {language === 'km' 
                    ? 'ដើម្បីអនុវត្តសិទ្ធិទាំងនេះ សូមទាក់ទងមកកាន់យើងតាមរយៈ:'
                    : 'To exercise these rights, please contact us through:'
                  }
                </p>
                <div className="grid md:grid-cols-2 gap-4">
                  <div className="flex items-center space-x-2">
                    <Mail className="h-4 w-4 text-koh-rong-600" />
                    <span className="text-gray-700">chhaileang27@gmail.com</span>
                  </div>
                  <div className="flex items-center space-x-2">
                    <Phone className="h-4 w-4 text-koh-rong-600" />
                    <span className="text-gray-700">010 820 486</span>
                  </div>
                </div>
              </div>
            </div>

            {/* Data Retention */}
            <div className="mb-12">
              <div className="flex items-center space-x-3 mb-6">
                <Calendar className="h-8 w-8 text-koh-rong-600" />
                <h2 className="text-3xl font-bold text-gray-900">
                  {language === 'km' ? '៧. ការរក្សាទុកទិន្នន័យ' : '7. Data Retention'}
                </h2>
              </div>
              <div className="prose prose-lg max-w-none text-gray-700 leading-relaxed">
                {language === 'km' ? (
                  <div className="space-y-4">
                    <p>
                      យើងរក្សាទុកព័ត៌មានរបស់អ្នកតែរយៈពេលចាំបាច់ដើម្បីផ្តល់សេវាកម្ម និងបំពេញកាតព្វកិច្ចច្បាប់។
                    </p>
                    
                    <div className="bg-gray-50 rounded-2xl p-6">
                      <h3 className="text-xl font-semibold text-gray-800 mb-4">រយៈពេលរក្សាទុក</h3>
                      <ul className="space-y-3">
                        <li className="flex items-start space-x-3">
                          <div className="w-2 h-2 bg-koh-rong-500 rounded-full mt-2 flex-shrink-0"></div>
                          <span><strong>ព័ត៌មានទំនាក់ទំនង:</strong> ៣ ឆ្នាំបន្ទាប់ពីការទំនាក់ទំនងចុងក្រោយ</span>
                        </li>
                        <li className="flex items-start space-x-3">
                          <div className="w-2 h-2 bg-koh-rong-500 rounded-full mt-2 flex-shrink-0"></div>
                          <span><strong>ទិន្នន័យការប្រើប្រាស់:</strong> ២ ឆ្នាំសម្រាប់ការវិភាគ</span>
                        </li>
                        <li className="flex items-start space-x-3">
                          <div className="w-2 h-2 bg-koh-rong-500 rounded-full mt-2 flex-shrink-0"></div>
                          <span><strong>ព័ត៌មានច្បាប់:</strong> តាមតម្រូវការច្បាប់</span>
                        </li>
                      </ul>
                    </div>
                  </div>
                ) : (
                  <div className="space-y-4">
                    <p>
                      We retain your information only for as long as necessary to provide services and fulfill legal obligations.
                    </p>
                    
                    <div className="bg-gray-50 rounded-2xl p-6">
                      <h3 className="text-xl font-semibold text-gray-800 mb-4">Retention Periods</h3>
                      <ul className="space-y-3">
                        <li className="flex items-start space-x-3">
                          <div className="w-2 h-2 bg-koh-rong-500 rounded-full mt-2 flex-shrink-0"></div>
                          <span><strong>Contact Information:</strong> 3 years after last contact</span>
                        </li>
                        <li className="flex items-start space-x-3">
                          <div className="w-2 h-2 bg-koh-rong-500 rounded-full mt-2 flex-shrink-0"></div>
                          <span><strong>Usage Data:</strong> 2 years for analytics</span>
                        </li>
                        <li className="flex items-start space-x-3">
                          <div className="w-2 h-2 bg-koh-rong-500 rounded-full mt-2 flex-shrink-0"></div>
                          <span><strong>Legal Information:</strong> As required by law</span>
                        </li>
                      </ul>
                    </div>
                  </div>
                )}
              </div>
            </div>

            {/* Children's Privacy */}
            <div className="mb-12">
              <div className="flex items-center space-x-3 mb-6">
                <Users className="h-8 w-8 text-koh-rong-600" />
                <h2 className="text-3xl font-bold text-gray-900">
                  {language === 'km' ? '៨. ភាពឯកជនកុមារ' : '8. Children\'s Privacy'}
                </h2>
              </div>
              <div className="prose prose-lg max-w-none text-gray-700 leading-relaxed">
                {language === 'km' ? (
                  <div className="space-y-4">
                    <p>
                      គេហទំព័រនេះមិនមែនសម្រាប់កុមារអាយុក្រោម ១៣ ឆ្នាំទេ។ យើងមិនប្រមូលព័ត៌មានផ្ទាល់ខ្លួនពីកុមារដោយចេតនាទេ។
                    </p>
                    
                    <div className="bg-orange-50 border border-orange-200 rounded-2xl p-6">
                      <div className="flex items-start space-x-3">
                        <AlertTriangle className="h-6 w-6 text-orange-600 mt-0.5 flex-shrink-0" />
                        <div>
                          <h4 className="font-semibold text-orange-900 mb-2">សម្រាប់ឪពុកម្តាយ</h4>
                          <p className="text-orange-800">
                            ប្រសិនបើអ្នកជឿថាកូនរបស់អ្នកបានផ្តល់ព័ត៌មានផ្ទាល់ខ្លួនដល់យើង សូមទាក់ទងមកកាន់យើងភ្លាមៗ ដើម្បីយើងអាចលុបព័ត៌មាននោះ។
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                ) : (
                  <div className="space-y-4">
                    <p>
                      This website is not intended for children under 13 years old. We do not knowingly collect personal information from children.
                    </p>
                    
                    <div className="bg-orange-50 border border-orange-200 rounded-2xl p-6">
                      <div className="flex items-start space-x-3">
                        <AlertTriangle className="h-6 w-6 text-orange-600 mt-0.5 flex-shrink-0" />
                        <div>
                          <h4 className="font-semibold text-orange-900 mb-2">For Parents</h4>
                          <p className="text-orange-800">
                            If you believe your child has provided personal information to us, please contact us immediately so we can delete that information.
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                )}
              </div>
            </div>

            {/* Contact Information */}
            <div className="mb-12">
              <div className="flex items-center space-x-3 mb-6">
                <Mail className="h-8 w-8 text-koh-rong-600" />
                <h2 className="text-3xl font-bold text-gray-900">
                  {language === 'km' ? '៩. ព័ត៌មានទំនាក់ទំនង' : '9. Contact Information'}
                </h2>
              </div>
              <div className="prose prose-lg max-w-none text-gray-700 leading-relaxed">
                {language === 'km' ? (
                  <div className="space-y-4">
                    <p>
                      ប្រសិនបើអ្នកមានសំណួរ ការព្រួយបារម្ភ ឬស្នើសុំអំពីគោលការណ៍ភាពឯកជននេះ សូមទាក់ទងមកកាន់យើង៖
                    </p>
                    
                    <div className="bg-gray-50 rounded-2xl p-6">
                      <div className="grid md:grid-cols-2 gap-6">
                        <div>
                          <h4 className="font-semibold text-gray-900 mb-3">ព័ត៌មានទំនាក់ទំនង</h4>
                          <div className="space-y-3">
                            <div className="flex items-center space-x-3">
                              <Mail className="h-5 w-5 text-koh-rong-600" />
                              <a href="mailto:chhaileang27@gmail.com" className="text-koh-rong-600 hover:text-koh-rong-700">
                                chhaileang27@gmail.com
                              </a>
                            </div>
                            <div className="flex items-center space-x-3">
                              <Phone className="h-5 w-5 text-koh-rong-600" />
                              <a href="tel:010820486" className="text-koh-rong-600 hover:text-koh-rong-700">
                                010 820 486
                              </a>
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

                    <div className="bg-blue-50 border border-blue-200 rounded-2xl p-6">
                      <h4 className="font-semibold text-blue-900 mb-2">ពេលវេលាឆ្លើយតប</h4>
                      <p className="text-blue-800">
                        យើងនឹងព្យាយាមឆ្លើយតបសំណួររបស់អ្នកក្នុងរយៈពេល ២៤-៤៨ ម៉ោង។ សម្រាប់សំណួរអំពីភាពឯកជន យើងនឹងឆ្លើយតបក្នុងរយៈពេល ៧២ ម៉ោង។
                      </p>
                    </div>
                  </div>
                ) : (
                  <div className="space-y-4">
                    <p>
                      If you have questions, concerns, or requests about this Privacy Policy, please contact us:
                    </p>
                    
                    <div className="bg-gray-50 rounded-2xl p-6">
                      <div className="grid md:grid-cols-2 gap-6">
                        <div>
                          <h4 className="font-semibold text-gray-900 mb-3">Contact Information</h4>
                          <div className="space-y-3">
                            <div className="flex items-center space-x-3">
                              <Mail className="h-5 w-5 text-koh-rong-600" />
                              <a href="mailto:chhaileang27@gmail.com" className="text-koh-rong-600 hover:text-koh-rong-700">
                                chhaileang27@gmail.com
                              </a>
                            </div>
                            <div className="flex items-center space-x-3">
                              <Phone className="h-5 w-5 text-koh-rong-600" />
                              <a href="tel:010820486" className="text-koh-rong-600 hover:text-koh-rong-700">
                                010 820 486
                              </a>
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

                    <div className="bg-blue-50 border border-blue-200 rounded-2xl p-6">
                      <h4 className="font-semibold text-blue-900 mb-2">Response Time</h4>
                      <p className="text-blue-800">
                        We will try to respond to your questions within 24-48 hours. For privacy-related questions, we will respond within 72 hours.
                      </p>
                    </div>
                  </div>
                )}
              </div>
            </div>

            {/* Changes to Policy */}
            <div className="mb-12">
              <div className="flex items-center space-x-3 mb-6">
                <FileText className="h-8 w-8 text-koh-rong-600" />
                <h2 className="text-3xl font-bold text-gray-900">
                  {language === 'km' ? '១០. ការផ្លាស់ប្តូរគោលការណ៍' : '10. Changes to Policy'}
                </h2>
              </div>
              <div className="prose prose-lg max-w-none text-gray-700 leading-relaxed">
                {language === 'km' ? (
                  <div className="space-y-4">
                    <p>
                      យើងអាចធ្វើបច្ចុប្បន្នភាពគោលការណ៍ភាពឯកជននេះនៅពេលណាមួយ។ ការផ្លាស់ប្តូរសំខាន់ៗនឹងត្រូវបានជូនដំណឹងដល់អ្នកតាមរយៈ៖
                    </p>
                    
                    <ul className="space-y-2 ml-6">
                      <li className="flex items-start space-x-2">
                        <CheckCircle className="h-5 w-5 text-green-500 mt-0.5 flex-shrink-0" />
                        <span>ការបង្ហោះនៅលើគេហទំព័រ</span>
                      </li>
                      <li className="flex items-start space-x-2">
                        <CheckCircle className="h-5 w-5 text-green-500 mt-0.5 flex-shrink-0" />
                        <span>ការផ្ញើអ៊ីមែលជូនដំណឹង (ប្រសិនបើអ្នកបានចុះឈ្មោះ)</span>
                      </li>
                      <li className="flex items-start space-x-2">
                        <CheckCircle className="h-5 w-5 text-green-500 mt-0.5 flex-shrink-0" />
                        <span>ការជូនដំណឹងនៅលើគេហទំព័រ</span>
                      </li>
                    </ul>

                    <p>
                      ការបន្តប្រើប្រាស់គេហទំព័របន្ទាប់ពីការផ្លាស់ប្តូរ មានន័យថាអ្នកយល់ព្រមជាមួយគោលការណ៍ថ្មី។
                    </p>
                  </div>
                ) : (
                  <div className="space-y-4">
                    <p>
                      We may update this Privacy Policy at any time. Significant changes will be notified to you through:
                    </p>
                    
                    <ul className="space-y-2 ml-6">
                      <li className="flex items-start space-x-2">
                        <CheckCircle className="h-5 w-5 text-green-500 mt-0.5 flex-shrink-0" />
                        <span>Posting on the website</span>
                      </li>
                      <li className="flex items-start space-x-2">
                        <CheckCircle className="h-5 w-5 text-green-500 mt-0.5 flex-shrink-0" />
                        <span>Email notification (if you subscribed)</span>
                      </li>
                      <li className="flex items-start space-x-2">
                        <CheckCircle className="h-5 w-5 text-green-500 mt-0.5 flex-shrink-0" />
                        <span>Website notification</span>
                      </li>
                    </ul>

                    <p>
                      Continued use of the website after changes means you agree to the new policy.
                    </p>
                  </div>
                )}
              </div>
            </div>

            {/* Footer Note */}
            <div className="bg-gradient-to-r from-koh-rong-50 to-blue-50 rounded-2xl p-6 text-center">
              <p className="text-gray-700 font-medium">
                {language === 'km' 
                  ? 'គោលការណ៍ភាពឯកជននេះត្រូវបានធ្វើបច្ចុប្បន្នភាពចុងក្រោយនៅថ្ងៃទី ២៨ ខែធ្នូ ឆ្នាំ ២០២៤'
                  : 'This Privacy Policy was last updated on December 28, 2024'
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

export default PrivacyPolicyPage;