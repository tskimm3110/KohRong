import React, { useState } from 'react';
import { ArrowLeft, MapPin, Mail, Phone, Clock, Send, MessageCircle, Globe, Facebook, Instagram, Youtube, Twitter, CheckCircle, AlertCircle } from 'lucide-react';
import { useLanguage } from '../contexts/LanguageContext';
import Footer from './Footer';

interface ContactPageProps {
  onBack: () => void;
}

const ContactPage: React.FC<ContactPageProps> = ({ onBack }) => {
  const { language } = useLanguage();
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<'idle' | 'success' | 'error'>('idle');

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // Simulate form submission
    setTimeout(() => {
      setSubmitStatus('success');
      setIsSubmitting(false);
      setFormData({ name: '', email: '', subject: '', message: '' });
      
      // Reset status after 5 seconds
      setTimeout(() => setSubmitStatus('idle'), 5000);
    }, 2000);
  };

  const contactInfo = {
    email: 'chhaileang27@gmail.com',
    phone: '010 820 486',
    whatsapp: '097 56 86 425',
    address: language === 'km' 
      ? 'កោះរ៉ុង, ខេត្តព្រះសីហនុ, កម្ពុជា'
      : 'Koh Rong Island, Sihanoukville Province, Cambodia',
    hours: language === 'km'
      ? 'ចន្លោះម៉ោង ៧:០០ ព្រឹក - ៩:០០ យប់'
      : '7:00 AM - 9:00 PM'
  };

  const subjects = language === 'km' ? [
    'ការណែនាំទេសចរណ៍',
    'ការកក់កន្លែងស្នាក់នៅ',
    'ការជួលទូក',
    'សំណួរអំពីកោះរ៉ុង',
    'ការសហការ',
    'ផ្សេងៗ'
  ] : [
    'Travel Guidance',
    'Accommodation Booking',
    'Boat Rental',
    'Questions about Koh Rong',
    'Collaboration',
    'Other'
  ];

  const faqs = language === 'km' ? [
    {
      question: 'តម្លៃទូកល្បឿនលឿនប៉ុន្មាន?',
      answer: 'ទូកល្បឿនលឿនពីព្រះសីហនុទៅកោះរ៉ុង តម្លៃ ២៥ ដុល្លារ (ទៅមក)។ ម៉ោងចេញដំណើរពី ៨:០០ ព្រឹក ដល់ ៥:០០ ល្ងាច។'
    },
    {
      question: 'កន្លែងស្នាក់នៅណាល្អបំផុត?',
      answer: 'អាស្រ័យលើថវិកា និងចំណូលចិត្ត។ សម្រាប់ថវិកាមធ្យម ខ្ញុំណែនាំ Beach Bungalow នៅឆ្នេរសុខសាន្ត។ សម្រាប់ថវិកាតិច ខ្ញុំណែនាំ Hostel នៅកោះតូច។'
    },
    {
      question: 'រដូវណាល្អបំផុតសម្រាប់មកកោះរ៉ុង?',
      answer: 'ខែវិច្ឆិកា ដល់ ខែមេសា គឺជារដូវល្អបំផុត។ អាកាសធាតុស្រួល មិនមានភ្លៀង និងទឹកសមុទ្រស្ងប់។'
    },
    {
      question: 'តើត្រូវយកអ្វីខ្លះទៅ?',
      answer: 'ឡេការពារព្រះអាទិត្យ, ឈុតហែលទឹក, ស្បែកជើងឆ្នេរ, ថ្នាំពេទ្យផ្ទាល់ខ្លួន, និងប្រាក់សម្រាប់ការចំណាយ។'
    }
  ] : [
    {
      question: 'How much does the speed boat cost?',
      answer: 'Speed boat from Sihanoukville to Koh Rong costs $25 (round trip). Departure times from 8:00 AM to 5:00 PM.'
    },
    {
      question: 'What is the best accommodation?',
      answer: 'Depends on budget and preferences. For mid-budget, I recommend Beach Bungalows at Sok San Beach. For budget travelers, I recommend Hostels at Koh Touch.'
    },
    {
      question: 'What is the best season to visit Koh Rong?',
      answer: 'November to April is the best season. Pleasant weather, no rain, and calm seas.'
    },
    {
      question: 'What should I bring?',
      answer: 'Sunscreen, swimwear, beach shoes, personal medication, and cash for expenses.'
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
            alt="Koh Rong Contact"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-koh-rong-600/80 to-blue-700/80"></div>
        </div>
        
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center text-white">
          <div className="flex justify-center mb-6">
            <div className="bg-white/20 backdrop-blur-sm rounded-full p-4">
              <MessageCircle className="h-12 w-12 text-white" />
            </div>
          </div>
          
          <h1 className="text-4xl md:text-6xl font-bold mb-6">
            {language === 'km' ? 'ទំនាក់ទំនងជាមួយយើង' : 'Contact Us'}
          </h1>
          
          <p className="text-xl md:text-2xl mb-8 max-w-3xl mx-auto leading-relaxed">
            {language === 'km' 
              ? 'ខ្ញុំរីករាយក្នុងការជួយអ្នករៀបចំដំណើរទេសចរណ៍ដ៏អស្ចារ្យនៅកោះរ៉ុង កម្ពុជា'
              : 'I\'m happy to help you plan an amazing trip to Koh Rong Cambodia'
            }
          </p>

          {/* Quick Contact Stats */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mt-12">
            <div className="text-center">
              <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-6">
                <div className="text-3xl md:text-4xl font-bold mb-2">24/7</div>
                <div className="text-lg font-semibold mb-1">
                  {language === 'km' ? 'ជំនួយ' : 'Support'}
                </div>
                <div className="text-sm opacity-90">
                  {language === 'km' ? 'ឆ្លើយតបរហ័ស' : 'Quick response'}
                </div>
              </div>
            </div>
            <div className="text-center">
              <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-6">
                <div className="text-3xl md:text-4xl font-bold mb-2">5+</div>
                <div className="text-lg font-semibold mb-1">
                  {language === 'km' ? 'ឆ្នាំ' : 'Years'}
                </div>
                <div className="text-sm opacity-90">
                  {language === 'km' ? 'បទពិសោធន៍' : 'Experience'}
                </div>
              </div>
            </div>
            <div className="text-center">
              <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-6">
                <div className="text-3xl md:text-4xl font-bold mb-2">1000+</div>
                <div className="text-lg font-semibold mb-1">
                  {language === 'km' ? 'អ្នកទេសចរណ៍' : 'Tourists'}
                </div>
                <div className="text-sm opacity-90">
                  {language === 'km' ? 'បានជួយ' : 'Helped'}
                </div>
              </div>
            </div>
            <div className="text-center">
              <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-6">
                <div className="text-3xl md:text-4xl font-bold mb-2">100%</div>
                <div className="text-lg font-semibold mb-1">
                  {language === 'km' ? 'ពិតប្រាកដ' : 'Authentic'}
                </div>
                <div className="text-sm opacity-90">
                  {language === 'km' ? 'ព័ត៌មាន' : 'Information'}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Form & Info Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-16">
            {/* Contact Form */}
            <div>
              <div className="bg-gray-50 rounded-3xl p-8">
                <h2 className="text-3xl font-bold text-gray-900 mb-6">
                  {language === 'km' ? 'ផ្ញើសារមកកាន់ខ្ញុំ' : 'Send Me a Message'}
                </h2>
                <p className="text-lg text-gray-600 mb-8">
                  {language === 'km' 
                    ? 'បំពេញទម្រង់ខាងក្រោម ខ្ញុំនឹងឆ្លើយតបក្នុងរយៈពេល ២៤ ម៉ោង'
                    : 'Fill out the form below and I\'ll respond within 24 hours'
                  }
                </p>

                {submitStatus === 'success' && (
                  <div className="mb-6 p-4 bg-green-50 border border-green-200 rounded-xl flex items-center space-x-3">
                    <CheckCircle className="h-5 w-5 text-green-600" />
                    <span className="text-green-800 font-medium">
                      {language === 'km' 
                        ? 'សារបានផ្ញើដោយជោគជ័យ! ខ្ញុំនឹងឆ្លើយតបឆាប់ៗ។'
                        : 'Message sent successfully! I\'ll respond soon.'
                      }
                    </span>
                  </div>
                )}

                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="grid md:grid-cols-2 gap-6">
                    <div>
                      <label className="block text-sm font-semibold text-gray-700 mb-2">
                        {language === 'km' ? 'ឈ្មោះ *' : 'Name *'}
                      </label>
                      <input
                        type="text"
                        name="name"
                        value={formData.name}
                        onChange={handleInputChange}
                        required
                        className="w-full px-4 py-3 rounded-xl border border-gray-300 focus:outline-none focus:ring-2 focus:ring-koh-rong-500 focus:border-transparent transition-all"
                        placeholder={language === 'km' ? 'បញ្ចូលឈ្មោះរបស់អ្នក' : 'Enter your name'}
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-semibold text-gray-700 mb-2">
                        {language === 'km' ? 'អ៊ីមែល *' : 'Email *'}
                      </label>
                      <input
                        type="email"
                        name="email"
                        value={formData.email}
                        onChange={handleInputChange}
                        required
                        className="w-full px-4 py-3 rounded-xl border border-gray-300 focus:outline-none focus:ring-2 focus:ring-koh-rong-500 focus:border-transparent transition-all"
                        placeholder={language === 'km' ? 'បញ្ចូលអ៊ីមែលរបស់អ្នក' : 'Enter your email'}
                      />
                    </div>
                  </div>

                  <div>
                    <label className="block text-sm font-semibold text-gray-700 mb-2">
                      {language === 'km' ? 'ប្រធានបទ *' : 'Subject *'}
                    </label>
                    <select
                      name="subject"
                      value={formData.subject}
                      onChange={handleInputChange}
                      required
                      className="w-full px-4 py-3 rounded-xl border border-gray-300 focus:outline-none focus:ring-2 focus:ring-koh-rong-500 focus:border-transparent transition-all"
                    >
                      <option value="">
                        {language === 'km' ? 'ជ្រើសរើសប្រធានបទ' : 'Select a subject'}
                      </option>
                      {subjects.map((subject, index) => (
                        <option key={index} value={subject}>{subject}</option>
                      ))}
                    </select>
                  </div>

                  <div>
                    <label className="block text-sm font-semibold text-gray-700 mb-2">
                      {language === 'km' ? 'សារ *' : 'Message *'}
                    </label>
                    <textarea
                      name="message"
                      value={formData.message}
                      onChange={handleInputChange}
                      required
                      rows={6}
                      className="w-full px-4 py-3 rounded-xl border border-gray-300 focus:outline-none focus:ring-2 focus:ring-koh-rong-500 focus:border-transparent transition-all resize-none"
                      placeholder={language === 'km' 
                        ? 'សរសេរសាររបស់អ្នកនៅទីនេះ...'
                        : 'Write your message here...'
                      }
                    />
                  </div>

                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className="w-full bg-gradient-to-r from-koh-rong-500 to-koh-rong-600 hover:from-koh-rong-600 hover:to-koh-rong-700 text-white px-8 py-4 rounded-xl font-semibold text-lg transition-all duration-300 transform hover:scale-105 shadow-lg disabled:opacity-50 disabled:cursor-not-allowed disabled:transform-none flex items-center justify-center space-x-2"
                  >
                    {isSubmitting ? (
                      <>
                        <div className="animate-spin rounded-full h-5 w-5 border-b-2 border-white"></div>
                        <span>
                          {language === 'km' ? 'កំពុងផ្ញើ...' : 'Sending...'}
                        </span>
                      </>
                    ) : (
                      <>
                        <Send className="h-5 w-5" />
                        <span>
                          {language === 'km' ? 'ផ្ញើសារ' : 'Send Message'}
                        </span>
                      </>
                    )}
                  </button>
                </form>
              </div>
            </div>

            {/* Contact Information */}
            <div className="space-y-8">
              <div>
                <h2 className="text-3xl font-bold text-gray-900 mb-6">
                  {language === 'km' ? 'ព័ត៌មានទំនាក់ទំនង' : 'Contact Information'}
                </h2>
                <p className="text-lg text-gray-600 mb-8">
                  {language === 'km' 
                    ? 'អ្នកអាចទាក់ទងមកកាន់ខ្ញុំតាមរយៈវិធីសាស្រ្តខាងក្រោម'
                    : 'You can reach me through the following methods'
                  }
                </p>
              </div>

              {/* Contact Cards */}
              <div className="space-y-6">
                <div className="bg-white rounded-2xl p-6 shadow-lg border border-gray-100 hover:shadow-xl transition-all duration-300">
                  <div className="flex items-center space-x-4">
                    <div className="bg-gradient-to-r from-koh-rong-500 to-koh-rong-600 p-3 rounded-xl">
                      <Mail className="h-6 w-6 text-white" />
                    </div>
                    <div>
                      <h3 className="text-lg font-semibold text-gray-900">
                        {language === 'km' ? 'អ៊ីមែល' : 'Email'}
                      </h3>
                      <a 
                        href={`mailto:${contactInfo.email}`}
                        className="text-koh-rong-600 hover:text-koh-rong-700 transition-colors"
                      >
                        {contactInfo.email}
                      </a>
                    </div>
                  </div>
                </div>

                <div className="bg-white rounded-2xl p-6 shadow-lg border border-gray-100 hover:shadow-xl transition-all duration-300">
                  <div className="flex items-center space-x-4">
                    <div className="bg-gradient-to-r from-green-500 to-green-600 p-3 rounded-xl">
                      <Phone className="h-6 w-6 text-white" />
                    </div>
                    <div>
                      <h3 className="text-lg font-semibold text-gray-900">
                        {language === 'km' ? 'ទូរស័ព្ទ / WhatsApp' : 'Phone / WhatsApp'}
                      </h3>
                      <div className="space-y-1">
                        <a 
                          href={`tel:${contactInfo.phone.replace(/\s/g, '')}`}
                          className="block text-koh-rong-600 hover:text-koh-rong-700 transition-colors"
                        >
                          {contactInfo.phone}
                        </a>
                        <a 
                          href={`https://wa.me/855${contactInfo.whatsapp.replace(/\s/g, '').substring(1)}`}
                          className="block text-green-600 hover:text-green-700 transition-colors"
                        >
                          {contactInfo.whatsapp} (WhatsApp)
                        </a>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="bg-white rounded-2xl p-6 shadow-lg border border-gray-100 hover:shadow-xl transition-all duration-300">
                  <div className="flex items-center space-x-4">
                    <div className="bg-gradient-to-r from-blue-500 to-blue-600 p-3 rounded-xl">
                      <MapPin className="h-6 w-6 text-white" />
                    </div>
                    <div>
                      <h3 className="text-lg font-semibold text-gray-900">
                        {language === 'km' ? 'ទីតាំង' : 'Location'}
                      </h3>
                      <p className="text-gray-600">{contactInfo.address}</p>
                    </div>
                  </div>
                </div>

                <div className="bg-white rounded-2xl p-6 shadow-lg border border-gray-100 hover:shadow-xl transition-all duration-300">
                  <div className="flex items-center space-x-4">
                    <div className="bg-gradient-to-r from-purple-500 to-purple-600 p-3 rounded-xl">
                      <Clock className="h-6 w-6 text-white" />
                    </div>
                    <div>
                      <h3 className="text-lg font-semibold text-gray-900">
                        {language === 'km' ? 'ម៉ោងធ្វើការ' : 'Working Hours'}
                      </h3>
                      <p className="text-gray-600">{contactInfo.hours}</p>
                      <p className="text-sm text-gray-500 mt-1">
                        {language === 'km' ? 'រាល់ថ្ងៃ' : 'Every day'}
                      </p>
                    </div>
                  </div>
                </div>
              </div>

              {/* Social Media */}
              <div className="bg-gradient-to-br from-gray-50 to-blue-50 rounded-2xl p-6">
                <h3 className="text-xl font-bold text-gray-900 mb-4">
                  {language === 'km' ? 'តាមដានយើងនៅលើ' : 'Follow Us On'}
                </h3>
                <div className="flex space-x-4">
                  <a href="#" className="bg-blue-600 hover:bg-blue-700 p-3 rounded-xl transition-colors group">
                    <Facebook className="h-6 w-6 text-white group-hover:scale-110 transition-transform" />
                  </a>
                  <a href="#" className="bg-pink-600 hover:bg-pink-700 p-3 rounded-xl transition-colors group">
                    <Instagram className="h-6 w-6 text-white group-hover:scale-110 transition-transform" />
                  </a>
                  <a href="#" className="bg-red-600 hover:bg-red-700 p-3 rounded-xl transition-colors group">
                    <Youtube className="h-6 w-6 text-white group-hover:scale-110 transition-transform" />
                  </a>
                  <a href="#" className="bg-blue-400 hover:bg-blue-500 p-3 rounded-xl transition-colors group">
                    <Twitter className="h-6 w-6 text-white group-hover:scale-110 transition-transform" />
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">
              {language === 'km' ? 'សំណួរដែលសួរញឹកញាប់' : 'Frequently Asked Questions'}
            </h2>
            <p className="text-xl text-gray-600">
              {language === 'km' 
                ? 'ចម្លើយលើសំណួរដែលអ្នកទេសចរណ៍សួរញឹកញាប់'
                : 'Answers to questions tourists ask frequently'
              }
            </p>
          </div>

          <div className="space-y-6">
            {faqs.map((faq, index) => (
              <div key={index} className="bg-white rounded-2xl p-6 shadow-lg border border-gray-100">
                <h3 className="text-lg font-semibold text-gray-900 mb-3">
                  {faq.question}
                </h3>
                <p className="text-gray-600 leading-relaxed">
                  {faq.answer}
                </p>
              </div>
            ))}
          </div>

          <div className="text-center mt-12">
            <p className="text-lg text-gray-600 mb-6">
              {language === 'km' 
                ? 'មានសំណួរផ្សេងទៀតទេ? សូមទាក់ទងមកកាន់ខ្ញុំ!'
                : 'Have other questions? Feel free to contact me!'
              }
            </p>
            <button 
              onClick={() => document.querySelector('form')?.scrollIntoView({ behavior: 'smooth' })}
              className="bg-gradient-to-r from-koh-rong-500 to-koh-rong-600 hover:from-koh-rong-600 hover:to-koh-rong-700 text-white px-8 py-4 rounded-full font-semibold text-lg transition-all duration-300 transform hover:scale-105 shadow-lg"
            >
              {language === 'km' ? 'ផ្ញើសំណួរ' : 'Ask a Question'}
            </button>
          </div>
        </div>
      </section>

      {/* Map Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">
              {language === 'km' ? 'ទីតាំងកោះរ៉ុង' : 'Koh Rong Location'}
            </h2>
            <p className="text-xl text-gray-600">
              {language === 'km' 
                ? 'កោះរ៉ុងស្ថិតនៅក្នុងខេត្តព្រះសីហនុ កម្ពុជា'
                : 'Koh Rong is located in Sihanoukville Province, Cambodia'
              }
            </p>
          </div>

          <div className="bg-gray-100 rounded-3xl overflow-hidden shadow-xl">
            <div className="aspect-w-16 aspect-h-9 h-96">
              <div className="w-full h-full bg-gradient-to-br from-blue-100 to-blue-200 flex items-center justify-center">
                <div className="text-center">
                  <MapPin className="h-16 w-16 text-koh-rong-600 mx-auto mb-4" />
                  <h3 className="text-2xl font-bold text-gray-800 mb-2">
                    {language === 'km' ? 'កោះរ៉ុង កម្ពុជា' : 'Koh Rong Cambodia'}
                  </h3>
                  <p className="text-gray-600">
                    {language === 'km' 
                      ? 'កោះដ៏ស្រស់ស្អាតនៅកម្ពុជា'
                      : 'Beautiful Island in Cambodia'
                    }
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-20 bg-gradient-to-r from-koh-rong-500 to-koh-rong-600">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center text-white">
          <h2 className="text-4xl font-bold mb-6">
            {language === 'km' ? 'រៀបចំដំណើរទេសចរណ៍របស់អ្នក' : 'Plan Your Trip'}
          </h2>
          <p className="text-xl mb-8 opacity-90">
            {language === 'km' 
              ? 'ខ្ញុំរីករាយក្នុងការជួយអ្នករៀបចំដំណើរទេសចរណ៍ដ៏អស្ចារ្យនៅកោះរ៉ុង'
              : 'I\'m excited to help you plan an amazing trip to Koh Rong'
            }
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a 
              href={`mailto:${contactInfo.email}`}
              className="bg-white text-koh-rong-600 px-8 py-4 rounded-full font-semibold hover:bg-gray-100 transition-colors inline-flex items-center justify-center space-x-2"
            >
              <Mail className="h-5 w-5" />
              <span>{language === 'km' ? 'ផ្ញើអ៊ីមែល' : 'Send Email'}</span>
            </a>
            <a 
              href={`https://wa.me/855${contactInfo.whatsapp.replace(/\s/g, '').substring(1)}`}
              className="border-2 border-white text-white px-8 py-4 rounded-full font-semibold hover:bg-white hover:text-koh-rong-600 transition-colors inline-flex items-center justify-center space-x-2"
            >
              <MessageCircle className="h-5 w-5" />
              <span>{language === 'km' ? 'WhatsApp' : 'WhatsApp'}</span>
            </a>
            <button 
              onClick={onBack}
              className="border-2 border-white text-white px-8 py-4 rounded-full font-semibold hover:bg-white hover:text-koh-rong-600 transition-colors"
            >
              {language === 'km' ? 'ត្រលប់ទៅទំព័រដើម' : 'Back to Home'}
            </button>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default ContactPage;