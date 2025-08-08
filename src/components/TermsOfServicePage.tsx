import React from 'react';
import { ArrowLeft, Shield, FileText, AlertTriangle, CheckCircle, Phone, Mail, Calendar, Globe } from 'lucide-react';
import { useLanguage } from '../contexts/LanguageContext';
import Footer from './Footer';

interface TermsOfServicePageProps {
  onBack: () => void;
}

const TermsOfServicePage: React.FC<TermsOfServicePageProps> = ({ onBack }) => {
  const { language } = useLanguage();

  const lastUpdated = language === 'km' ? '២៨ ធ្នូ ២០២៤' : 'December 28, 2024';

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
            alt="Terms of Service"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-koh-rong-600/80 to-blue-700/80"></div>
        </div>
        
        <div className="relative z-10 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center text-white">
          <div className="flex justify-center mb-6">
            <div className="bg-white/20 backdrop-blur-sm rounded-full p-4">
              <FileText className="h-12 w-12 text-white" />
            </div>
          </div>
          
          <h1 className="text-4xl md:text-6xl font-bold mb-6">
            {language === 'km' ? 'លក្ខខណ្ឌសេវាកម្ម' : 'Terms of Service'}
          </h1>
          
          <p className="text-xl md:text-2xl mb-8 max-w-3xl mx-auto leading-relaxed">
            {language === 'km' 
              ? 'លក្ខខណ្ឌ និងកិច្ចព្រមព្រៀងសម្រាប់ការប្រើប្រាស់គេហទំព័រកោះរ៉ុង កម្ពុជា'
              : 'Terms and conditions for using Koh Rong Cambodia website'
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

      {/* Terms Content */}
      <section className="py-20 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-white rounded-3xl shadow-xl p-8 md:p-12 border border-gray-100">
            
            {/* Introduction */}
            <div className="mb-12">
              <div className="flex items-center space-x-3 mb-6">
                <Shield className="h-8 w-8 text-koh-rong-600" />
                <h2 className="text-3xl font-bold text-gray-900">
                  {language === 'km' ? '១. ការណែនាំ' : '1. Introduction'}
                </h2>
              </div>
              <div className="prose prose-lg max-w-none text-gray-700 leading-relaxed">
                {language === 'km' ? (
                  <div className="space-y-4">
                    <p>
                      សូមស្វាគមន៍មកកាន់គេហទំព័រ "កោះរ៉ុង កម្ពុជា" (www.kohrong-cambodia.com)។ គេហទំព័រនេះត្រូវបានបង្កើតឡើងដោយប្រជាពលរដ្ឋកោះរ៉ុង ដើម្បីផ្តល់ព័ត៌មានពិតប្រាកដអំពីកោះរ៉ុង កម្ពុជា។
                    </p>
                    <p>
                      ដោយការប្រើប្រាស់គេហទំព័រនេះ អ្នកយល់ព្រម និងទទួលយកលក្ខខណ្ឌសេវាកម្មទាំងនេះ។ ប្រសិនបើអ្នកមិនយល់ព្រមជាមួយលក្ខខណ្ឌទាំងនេះទេ សូមកុំប្រើប្រាស់គេហទំព័រនេះ។
                    </p>
                  </div>
                ) : (
                  <div className="space-y-4">
                    <p>
                      Welcome to "Koh Rong Cambodia" website (www.kohrong-cambodia.com). This website is created by Koh Rong residents to provide authentic information about Koh Rong, Cambodia.
                    </p>
                    <p>
                      By using this website, you agree to and accept these terms of service. If you do not agree with these terms, please do not use this website.
                    </p>
                  </div>
                )}
              </div>
            </div>

            {/* Website Usage */}
            <div className="mb-12">
              <div className="flex items-center space-x-3 mb-6">
                <Globe className="h-8 w-8 text-koh-rong-600" />
                <h2 className="text-3xl font-bold text-gray-900">
                  {language === 'km' ? '២. ការប្រើប្រាស់គេហទំព័រ' : '2. Website Usage'}
                </h2>
              </div>
              <div className="prose prose-lg max-w-none text-gray-700 leading-relaxed">
                {language === 'km' ? (
                  <div className="space-y-4">
                    <h3 className="text-xl font-semibold text-gray-800 mb-3">២.១ គោលបំណងប្រើប្រាស់</h3>
                    <ul className="space-y-2 ml-6">
                      <li className="flex items-start space-x-2">
                        <CheckCircle className="h-5 w-5 text-green-500 mt-0.5 flex-shrink-0" />
                        <span>គេហទំព័រនេះមានគោលបំណងផ្តល់ព័ត៌មានអំពីទេសចរណ៍កោះរ៉ុង</span>
                      </li>
                      <li className="flex items-start space-x-2">
                        <CheckCircle className="h-5 w-5 text-green-500 mt-0.5 flex-shrink-0" />
                        <span>ជួយអ្នកទេសចរណ៍រៀបចំដំណើរ</span>
                      </li>
                      <li className="flex items-start space-x-2">
                        <CheckCircle className="h-5 w-5 text-green-500 mt-0.5 flex-shrink-0" />
                        <span>ផ្តល់សេវាកម្មទំនាក់ទំនងជាមួយអ្នកផ្តល់សេវាកម្មមូលដ្ឋាន</span>
                      </li>
                    </ul>

                    <h3 className="text-xl font-semibold text-gray-800 mb-3 mt-6">២.២ ការហាមឃាត់</h3>
                    <ul className="space-y-2 ml-6">
                      <li className="flex items-start space-x-2">
                        <AlertTriangle className="h-5 w-5 text-red-500 mt-0.5 flex-shrink-0" />
                        <span>ប្រើប្រាស់គេហទំព័រសម្រាប់គោលបំណងខុសច្បាប់</span>
                      </li>
                      <li className="flex items-start space-x-2">
                        <AlertTriangle className="h-5 w-5 text-red-500 mt-0.5 flex-shrink-0" />
                        <span>ចម្លងព័ត៌មានដោយគ្មានការអនុញ្ញាត</span>
                      </li>
                      <li className="flex items-start space-x-2">
                        <AlertTriangle className="h-5 w-5 text-red-500 mt-0.5 flex-shrink-0" />
                        <span>បង្កើតគណនីក្លែងក្លាយ ឬផ្សព្វផ្សាយព័ត៌មានមិនពិត</span>
                      </li>
                    </ul>
                  </div>
                ) : (
                  <div className="space-y-4">
                    <h3 className="text-xl font-semibold text-gray-800 mb-3">2.1 Purpose of Use</h3>
                    <ul className="space-y-2 ml-6">
                      <li className="flex items-start space-x-2">
                        <CheckCircle className="h-5 w-5 text-green-500 mt-0.5 flex-shrink-0" />
                        <span>This website aims to provide information about Koh Rong tourism</span>
                      </li>
                      <li className="flex items-start space-x-2">
                        <CheckCircle className="h-5 w-5 text-green-500 mt-0.5 flex-shrink-0" />
                        <span>Help tourists plan their trips</span>
                      </li>
                      <li className="flex items-start space-x-2">
                        <CheckCircle className="h-5 w-5 text-green-500 mt-0.5 flex-shrink-0" />
                        <span>Provide contact services with local service providers</span>
                      </li>
                    </ul>

                    <h3 className="text-xl font-semibold text-gray-800 mb-3 mt-6">2.2 Prohibited Uses</h3>
                    <ul className="space-y-2 ml-6">
                      <li className="flex items-start space-x-2">
                        <AlertTriangle className="h-5 w-5 text-red-500 mt-0.5 flex-shrink-0" />
                        <span>Use website for illegal purposes</span>
                      </li>
                      <li className="flex items-start space-x-2">
                        <AlertTriangle className="h-5 w-5 text-red-500 mt-0.5 flex-shrink-0" />
                        <span>Copy information without permission</span>
                      </li>
                      <li className="flex items-start space-x-2">
                        <AlertTriangle className="h-5 w-5 text-red-500 mt-0.5 flex-shrink-0" />
                        <span>Create fake accounts or spread false information</span>
                      </li>
                    </ul>
                  </div>
                )}
              </div>
            </div>

            {/* Services and Bookings */}
            <div className="mb-12">
              <div className="flex items-center space-x-3 mb-6">
                <Phone className="h-8 w-8 text-koh-rong-600" />
                <h2 className="text-3xl font-bold text-gray-900">
                  {language === 'km' ? '៣. សេវាកម្ម និងការកក់ទុក' : '3. Services and Bookings'}
                </h2>
              </div>
              <div className="prose prose-lg max-w-none text-gray-700 leading-relaxed">
                {language === 'km' ? (
                  <div className="space-y-4">
                    <h3 className="text-xl font-semibold text-gray-800 mb-3">៣.១ តួនាទីរបស់យើង</h3>
                    <p>
                      យើងជាអ្នកផ្តល់ព័ត៌មាន និងជាអ្នកភ្ជាប់ទំនាក់ទំនងរវាងអ្នកទេសចរណ៍ និងអ្នកផ្តល់សេវាកម្មមូលដ្ឋាន។ យើងមិនមែនជាអ្នកផ្តល់សេវាកម្មផ្ទាល់ទេ។
                    </p>

                    <h3 className="text-xl font-semibold text-gray-800 mb-3 mt-6">៣.២ ការទទួលខុសត្រូវ</h3>
                    <ul className="space-y-2 ml-6">
                      <li className="flex items-start space-x-2">
                        <CheckCircle className="h-5 w-5 text-green-500 mt-0.5 flex-shrink-0" />
                        <span>យើងទទួលខុសត្រូវលើភាពត្រឹមត្រូវនៃព័ត៌មានដែលយើងផ្តល់</span>
                      </li>
                      <li className="flex items-start space-x-2">
                        <AlertTriangle className="h-5 w-5 text-orange-500 mt-0.5 flex-shrink-0" />
                        <span>យើងមិនទទួលខុសត្រូវលើគុណភាពសេវាកម្មពីភាគីទីបីទេ</span>
                      </li>
                      <li className="flex items-start space-x-2">
                        <AlertTriangle className="h-5 w-5 text-orange-500 mt-0.5 flex-shrink-0" />
                        <span>ការទូទាត់ និងកិច្ចព្រមព្រៀងត្រូវធ្វើផ្ទាល់ជាមួយអ្នកផ្តល់សេវាកម្ម</span>
                      </li>
                    </ul>

                    <h3 className="text-xl font-semibold text-gray-800 mb-3 mt-6">៣.៣ ការបោះបង់ និងការផ្លាស់ប្តូរ</h3>
                    <p>
                      គោលការណ៍ការបោះបង់ និងការផ្លាស់ប្តូរអាស្រ័យលើអ្នកផ្តល់សេវាកម្មនីមួយៗ។ សូមពិនិត្យជាមួយពួកគេផ្ទាល់។
                    </p>
                  </div>
                ) : (
                  <div className="space-y-4">
                    <h3 className="text-xl font-semibold text-gray-800 mb-3">3.1 Our Role</h3>
                    <p>
                      We are information providers and connectors between tourists and local service providers. We are not direct service providers.
                    </p>

                    <h3 className="text-xl font-semibold text-gray-800 mb-3 mt-6">3.2 Responsibilities</h3>
                    <ul className="space-y-2 ml-6">
                      <li className="flex items-start space-x-2">
                        <CheckCircle className="h-5 w-5 text-green-500 mt-0.5 flex-shrink-0" />
                        <span>We are responsible for accuracy of information we provide</span>
                      </li>
                      <li className="flex items-start space-x-2">
                        <AlertTriangle className="h-5 w-5 text-orange-500 mt-0.5 flex-shrink-0" />
                        <span>We are not responsible for third-party service quality</span>
                      </li>
                      <li className="flex items-start space-x-2">
                        <AlertTriangle className="h-5 w-5 text-orange-500 mt-0.5 flex-shrink-0" />
                        <span>Payments and agreements must be made directly with service providers</span>
                      </li>
                    </ul>

                    <h3 className="text-xl font-semibold text-gray-800 mb-3 mt-6">3.3 Cancellations and Changes</h3>
                    <p>
                      Cancellation and change policies depend on individual service providers. Please check with them directly.
                    </p>
                  </div>
                )}
              </div>
            </div>

            {/* Privacy and Data */}
            <div className="mb-12">
              <div className="flex items-center space-x-3 mb-6">
                <Shield className="h-8 w-8 text-koh-rong-600" />
                <h2 className="text-3xl font-bold text-gray-900">
                  {language === 'km' ? '៤. ភាពឯកជន និងទិន្នន័យ' : '4. Privacy and Data'}
                </h2>
              </div>
              <div className="prose prose-lg max-w-none text-gray-700 leading-relaxed">
                {language === 'km' ? (
                  <div className="space-y-4">
                    <p>
                      យើងគោរពភាពឯកជនរបស់អ្នក។ ព័ត៌មានដែលអ្នកផ្តល់ឱ្យយើងនឹងត្រូវបានការពារ និងប្រើប្រាស់តែសម្រាប់គោលបំណងផ្តល់សេវាកម្មប៉ុណ្ណោះ។
                    </p>
                    
                    <h3 className="text-xl font-semibold text-gray-800 mb-3">៤.១ ព័ត៌មានដែលយើងប្រមូល</h3>
                    <ul className="space-y-2 ml-6">
                      <li>• ព័ត៌មានទំនាក់ទំនង (ឈ្មោះ, អ៊ីមែល, ទូរស័ព្ទ)</li>
                      <li>• ព័ត៌មានការប្រើប្រាស់គេហទំព័រ</li>
                      <li>• ព័ត៌មាន Cookie និង tracking</li>
                    </ul>

                    <h3 className="text-xl font-semibold text-gray-800 mb-3 mt-6">៤.២ ការប្រើប្រាស់ព័ត៌មាន</h3>
                    <ul className="space-y-2 ml-6">
                      <li>• ផ្តល់សេវាកម្មដែលអ្នកស្នើសុំ</li>
                      <li>• ធ្វើឱ្យប្រសើរឡើងនូវបទពិសោធន៍ប្រើប្រាស់</li>
                      <li>• ផ្ញើព័ត៌មានថ្មីៗ (ប្រសិនបើអ្នកយល់ព្រម)</li>
                    </ul>
                  </div>
                ) : (
                  <div className="space-y-4">
                    <p>
                      We respect your privacy. Information you provide to us will be protected and used only for service provision purposes.
                    </p>
                    
                    <h3 className="text-xl font-semibold text-gray-800 mb-3">4.1 Information We Collect</h3>
                    <ul className="space-y-2 ml-6">
                      <li>• Contact information (name, email, phone)</li>
                      <li>• Website usage information</li>
                      <li>• Cookie and tracking information</li>
                    </ul>

                    <h3 className="text-xl font-semibold text-gray-800 mb-3 mt-6">4.2 Use of Information</h3>
                    <ul className="space-y-2 ml-6">
                      <li>• Provide services you request</li>
                      <li>• Improve user experience</li>
                      <li>• Send updates (if you agree)</li>
                    </ul>
                  </div>
                )}
              </div>
            </div>

            {/* Limitation of Liability */}
            <div className="mb-12">
              <div className="flex items-center space-x-3 mb-6">
                <AlertTriangle className="h-8 w-8 text-orange-500" />
                <h2 className="text-3xl font-bold text-gray-900">
                  {language === 'km' ? '៥. ការកំណត់ការទទួលខុសត្រូវ' : '5. Limitation of Liability'}
                </h2>
              </div>
              <div className="prose prose-lg max-w-none text-gray-700 leading-relaxed">
                {language === 'km' ? (
                  <div className="space-y-4">
                    <p>
                      គេហទំព័រនេះផ្តល់ព័ត៌មាន "ដូចដែលមាន" ហើយយើងមិនធានាភាពពេញលេញ ឬភាពត្រឹមត្រូវ ១០០% ទេ។
                    </p>
                    
                    <h3 className="text-xl font-semibold text-gray-800 mb-3">៥.១ យើងមិនទទួលខុសត្រូវចំពោះ</h3>
                    <ul className="space-y-2 ml-6">
                      <li>• ការខូចខាតដោយសារការប្រើប្រាស់ព័ត៌មានពីគេហទំព័រ</li>
                      <li>• គុណភាពសេវាកម្មពីអ្នកផ្តល់សេវាកម្មភាគីទីបី</li>
                      <li>• ការបាត់បង់ទិន្នន័យ ឬការរំខានដល់សេវាកម្ម</li>
                      <li>• ការផ្លាស់ប្តូរតម្លៃ ឬលក្ខខណ្ឌពីអ្នកផ្តល់សេវាកម្ម</li>
                    </ul>

                    <h3 className="text-xl font-semibold text-gray-800 mb-3 mt-6">៥.២ ការណែនាំ</h3>
                    <p>
                      សូមពិនិត្យព័ត៌មានឱ្យបានល្អិតល្អន់ និងទាក់ទងផ្ទាល់ជាមួយអ្នកផ្តល់សេវាកម្មមុនពេលធ្វើការសម្រេចចិត្ត។
                    </p>
                  </div>
                ) : (
                  <div className="space-y-4">
                    <p>
                      This website provides information "as is" and we do not guarantee 100% completeness or accuracy.
                    </p>
                    
                    <h3 className="text-xl font-semibold text-gray-800 mb-3">5.1 We Are Not Responsible For</h3>
                    <ul className="space-y-2 ml-6">
                      <li>• Damages from using information from website</li>
                      <li>• Service quality from third-party providers</li>
                      <li>• Data loss or service interruptions</li>
                      <li>• Price or condition changes from service providers</li>
                    </ul>

                    <h3 className="text-xl font-semibold text-gray-800 mb-3 mt-6">5.2 Recommendations</h3>
                    <p>
                      Please check information carefully and contact service providers directly before making decisions.
                    </p>
                  </div>
                )}
              </div>
            </div>

            {/* Contact Information */}
            <div className="mb-12">
              <div className="flex items-center space-x-3 mb-6">
                <Mail className="h-8 w-8 text-koh-rong-600" />
                <h2 className="text-3xl font-bold text-gray-900">
                  {language === 'km' ? '៦. ព័ត៌មានទំនាក់ទំនង' : '6. Contact Information'}
                </h2>
              </div>
              <div className="prose prose-lg max-w-none text-gray-700 leading-relaxed">
                {language === 'km' ? (
                  <div className="space-y-4">
                    <p>
                      ប្រសិនបើអ្នកមានសំណួរអំពីលក្ខខណ្ឌសេវាកម្មទាំងនេះ សូមទាក់ទងមកកាន់យើង៖
                    </p>
                    
                    <div className="bg-gray-50 rounded-2xl p-6">
                      <div className="grid md:grid-cols-2 gap-6">
                        <div>
                          <h4 className="font-semibold text-gray-900 mb-3">ព័ត៌មានទំនាក់ទំនង</h4>
                          <div className="space-y-2">
                            <div className="flex items-center space-x-2">
                              <Mail className="h-4 w-4 text-koh-rong-600" />
                              <span>chhaileang27@gmail.com</span>
                            </div>
                            <div className="flex items-center space-x-2">
                              <Phone className="h-4 w-4 text-koh-rong-600" />
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
                      If you have questions about these terms of service, please contact us:
                    </p>
                    
                    <div className="bg-gray-50 rounded-2xl p-6">
                      <div className="grid md:grid-cols-2 gap-6">
                        <div>
                          <h4 className="font-semibold text-gray-900 mb-3">Contact Information</h4>
                          <div className="space-y-2">
                            <div className="flex items-center space-x-2">
                              <Mail className="h-4 w-4 text-koh-rong-600" />
                              <span>chhaileang27@gmail.com</span>
                            </div>
                            <div className="flex items-center space-x-2">
                              <Phone className="h-4 w-4 text-koh-rong-600" />
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

            {/* Changes to Terms */}
            <div className="mb-12">
              <div className="flex items-center space-x-3 mb-6">
                <Calendar className="h-8 w-8 text-koh-rong-600" />
                <h2 className="text-3xl font-bold text-gray-900">
                  {language === 'km' ? '៧. ការផ្លាស់ប្តូរលក្ខខណ្ឌ' : '7. Changes to Terms'}
                </h2>
              </div>
              <div className="prose prose-lg max-w-none text-gray-700 leading-relaxed">
                {language === 'km' ? (
                  <div className="space-y-4">
                    <p>
                      យើងអាចធ្វើការផ្លាស់ប្តូរលក្ខខណ្ឌសេវាកម្មទាំងនេះនៅពេលណាមួយ។ ការផ្លាស់ប្តូរនឹងមានប្រសិទ្ធភាពភ្លាមៗបន្ទាប់ពីការបង្ហោះនៅលើគេហទំព័រ។
                    </p>
                    <p>
                      ការបន្តប្រើប្រាស់គេហទំព័របន្ទាប់ពីការផ្លាស់ប្តូរ មានន័យថាអ្នកយល់ព្រមជាមួយលក្ខខណ្ឌថ្មី។
                    </p>
                  </div>
                ) : (
                  <div className="space-y-4">
                    <p>
                      We may change these terms of service at any time. Changes will be effective immediately after posting on the website.
                    </p>
                    <p>
                      Continued use of the website after changes means you agree to the new terms.
                    </p>
                  </div>
                )}
              </div>
            </div>

            {/* Footer Note */}
            <div className="bg-gradient-to-r from-koh-rong-50 to-blue-50 rounded-2xl p-6 text-center">
              <p className="text-gray-700 font-medium">
                {language === 'km' 
                  ? 'លក្ខខណ្ឌសេវាកម្មនេះត្រូវបានធ្វើបច្ចុប្បន្នភាពចុងក្រោយនៅថ្ងៃទី ២៨ ខែធ្នូ ឆ្នាំ ២០២៤'
                  : 'These terms of service were last updated on December 28, 2024'
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

export default TermsOfServicePage;