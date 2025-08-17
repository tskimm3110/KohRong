import React from "react";
import {
  ArrowLeft,
  MapPin,
  Heart,
  Camera,
  Globe,
  Award,
  Target,
  Eye,
  User,
  Phone,
} from "lucide-react";
import { useLanguage } from "../contexts/LanguageContext";
import Footer from "./Footer";

interface AboutPageProps {
  onBack: () => void;
}

const AboutPage: React.FC<AboutPageProps> = ({ onBack }) => {
  const { language, t } = useLanguage();

  const values = [
    {
      icon: Heart,
      title: language === "km" ? "ស្នេហាកោះរ៉ុង" : "Love for Koh Rong",
      description:
        language === "km"
          ? "ខ្ញុំស្រលាញ់កោះរ៉ុងដូចជាផ្ទះរបស់ខ្ញុំ និងចង់ចែករំលែកភាពស្រស់ស្អាតនេះជាមួយអ្នកទាំងអស់គ្នា"
          : "I love Koh Rong like my home and want to share its beauty with everyone",
    },
    {
      icon: Globe,
      title: language === "km" ? "ព័ត៌មានពិតប្រាកដ" : "Authentic Information",
      description:
        language === "km"
          ? "ខ្ញុំផ្តល់ព័ត៌មានពិតប្រាកដ និងបទពិសោធន៍ផ្ទាល់ពីការរស់នៅលើកោះ"
          : "I provide authentic information and direct experiences from living on the island",
    },
    {
      icon: Camera,
      title: language === "km" ? "រូបភាពពិតប្រាកដ" : "Real Photos",
      description:
        language === "km"
          ? "រូបភាពទាំងអស់ក្នុងគេហទំព័រនេះ គឺថតដោយខ្ញុំផ្ទាល់នៅកោះរ៉ុង"
          : "All photos on this website are taken by me personally on Koh Rong",
    },
    {
      icon: User,
      title: language === "km" ? "បទពិសោធន៍ផ្ទាល់" : "Personal Experience",
      description:
        language === "km"
          ? "ខ្ញុំចែករំលែកបទពិសោធន៍ពិតប្រាកដពីការរស់នៅនិងធ្វើការនៅកោះរ៉ុង"
          : "I share real experiences from living and working on Koh Rong",
    },
  ];

  const achievements = [
    {
      number: "50+",
      label: language === "km" ? "អត្ថបទ" : "Articles",
      description:
        language === "km"
          ? "អត្ថបទលម្អិតអំពីកោះរ៉ុង"
          : "Detailed articles about Koh Rong",
    },
    {
      number: "10K+",
      label: language === "km" ? "អ្នកអាន" : "Readers",
      description: language === "km" ? "អ្នកអានប្រចាំខែ" : "Monthly readers",
    },
    {
      number: "500+",
      label: language === "km" ? "រូបភាព" : "Photos",
      description: language === "km" ? "រូបភាពពិតប្រាកដ" : "Authentic photos",
    },
    {
      number: "5+",
      label: language === "km" ? "ឆ្នាំ" : "Years",
      description:
        language === "km" ? "បទពិសោធន៍ទេសចរណ៍" : "Tourism experience",
    },
  ];

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <div className="bg-white shadow-sm sticky top-16 z-40">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
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

      {/* Hero Section */}
      <section className="relative py-20 bg-gradient-to-br from-koh-rong-500 via-koh-rong-600 to-blue-700 overflow-hidden">
        <div className="absolute inset-0 opacity-20">
          <img
            src="https://images.pexels.com/photos/1659438/pexels-photo-1659438.jpeg?auto=compress&cs=tinysrgb&w=1600"
            alt="Koh Rong"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-koh-rong-600/80 to-blue-700/80"></div>
        </div>

        <div className="relative z-10 max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 text-center text-white">
          <div className="flex justify-center mb-6">
            <div className="bg-white/20 backdrop-blur-sm rounded-full p-4">
              <MapPin className="h-12 w-12 text-white" />
            </div>
          </div>

          <h1 className="text-4xl md:text-6xl font-bold mb-6">
            {language === "km" ? "អំពីខ្ញុំ" : "About Me"}
          </h1>

          <p className="text-xl md:text-2xl mb-8 max-w-3xl mx-auto leading-relaxed">
            {language === "km"
              ? "ខ្ញុំជាប្រជាពលរដ្ឋកោះរ៉ុងដែលចង់ចែករំលែកភាពស្រស់ស្អាតនិងព័ត៌មានពិតប្រាកដអំពីកោះរបស់ខ្ញុំ"
              : "I am a Koh Rong resident who wants to share the beauty and authentic information about my island"}
          </p>

          {/* Stats */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mt-12">
            {achievements.map((achievement, index) => (
              <div key={index} className="text-center">
                <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-6">
                  <div className="text-3xl md:text-4xl font-bold mb-2">
                    {achievement.number}
                  </div>
                  <div className="text-lg font-semibold mb-1">
                    {achievement.label}
                  </div>
                  <div className="text-sm opacity-90">
                    {achievement.description}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Mission & Vision */}
      <section className="py-20 bg-white">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 gap-16">
            {/* Mission */}
            <div className="text-center">
              <div className="bg-gradient-to-r from-koh-rong-500 to-koh-rong-600 p-4 rounded-2xl inline-block mb-6">
                <Target className="h-12 w-12 text-white" />
              </div>
              <h2 className="text-3xl font-bold text-gray-900 mb-6">
                {language === "km" ? "បេសកកម្មរបស់ខ្ញុំ" : "My Mission"}
              </h2>
              <p className="text-lg text-gray-600 leading-relaxed">
                {language === "km"
                  ? "ផ្តល់ព័ត៌មានពិតប្រាកដ និងមានគុណភាពខ្ពស់អំពីកោះរ៉ុង កម្ពុជា ដើម្បីជួយអ្នកទេសចរណ៍រៀបចំដំណើរដ៏ល្អបំផុត និងគាំទ្រសហគមន៍មូលដ្ឋាន"
                  : "Provide authentic and high-quality information about Koh Rong Cambodia to help tourists plan the best trips and support the local community"}
              </p>
            </div>

            {/* Vision */}
            <div className="text-center">
              <div className="bg-gradient-to-r from-blue-500 to-blue-600 p-4 rounded-2xl inline-block mb-6">
                <Eye className="h-12 w-12 text-white" />
              </div>
              <h2 className="text-3xl font-bold text-gray-900 mb-6">
                {language === "km" ? "ចក្ខុវិស័យរបស់ខ្ញុំ" : "My Vision"}
              </h2>
              <p className="text-lg text-gray-600 leading-relaxed">
                {language === "km"
                  ? "ក្លាយជាប្រភពព័ត៌មានដំបូងគេអំពីកោះរ៉ុង និងលើកកម្ពស់ទេសចរណ៍ប្រកបដោយការទទួលខុសត្រូវដើម្បីរក្សាភាពស្រស់ស្អាតនៃកោះសម្រាប់កូនចៅ"
                  : "Become the leading source of information about Koh Rong and promote responsible tourism to preserve the island's beauty for future generations"}
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">
              {language === "km" ? "តម្លៃរបស់ខ្ញុំ" : "My Values"}
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              {language === "km"
                ? "តម្លៃដែលនាំមុខការងាររបស់ខ្ញុំគ្រប់ថ្ងៃ"
                : "Values that guide my work every day"}
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {values.map((value, index) => {
              const IconComponent = value.icon;
              return (
                <div
                  key={index}
                  className="bg-white rounded-3xl p-8 shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2 text-center"
                >
                  <div className="bg-gradient-to-r from-koh-rong-500 to-koh-rong-600 p-4 rounded-2xl inline-block mb-6">
                    <IconComponent className="h-8 w-8 text-white" />
                  </div>
                  <h3 className="text-xl font-bold text-gray-900 mb-4">
                    {value.title}
                  </h3>
                  <p className="text-gray-600 leading-relaxed">
                    {value.description}
                  </p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Author Profile */}
      <section className="py-20 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-gradient-to-br from-gray-50 to-blue-50 rounded-3xl p-12 text-center">
            <div className="relative mb-8">
              <img
                src="https://images.pexels.com/photos/1040880/pexels-photo-1040880.jpeg?auto=compress&cs=tinysrgb&w=400"
                alt={language === "km" ? "ឆៃលាង" : "Chailang"}
                className="w-32 h-32 rounded-full mx-auto object-cover border-4 border-white shadow-xl"
              />
              <div className="absolute -bottom-4 -right-4 bg-gradient-to-r from-koh-rong-500 to-koh-rong-600 p-3 rounded-full">
                <Award className="h-6 w-6 text-white" />
              </div>
            </div>

            <h2 className="text-3xl font-bold text-gray-900 mb-2">
              {language === "km" ? "ឆៃលាង" : "Chailang"}
            </h2>
            <p className="text-xl text-koh-rong-600 font-semibold mb-6">
              {language === "km"
                ? "អ្នកបង្កើតគេហទំព័រ និងអ្នកនិពន្ធ"
                : "Website Creator & Writer"}
            </p>
            <p className="text-lg text-gray-600 leading-relaxed max-w-2xl mx-auto">
              {language === "km"
                ? "ប្រជាពលរដ្ឋកោះរ៉ុងដែលមានបទពិសោធន៍ជាង ៥ ឆ្នាំក្នុងវិស័យទេសចរណ៍ និងចង់ចែករំលែកភាពស្រស់ស្អាតនៃកោះរបស់ខ្ញុំជាមួយពិភពលោក"
                : "Koh Rong resident with over 5 years of experience in tourism who wants to share the beauty of my island with the world"}
            </p>
          </div>
        </div>
      </section>

      {/* Story */}
      <section className="py-20 bg-gradient-to-br from-gray-50 to-blue-50">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-white rounded-3xl p-12 shadow-xl">
            <div className="text-center mb-12">
              <h2 className="text-4xl font-bold text-gray-900 mb-6">
                {language === "km" ? "រឿងរ៉ាវរបស់ខ្ញុំ" : "My Story"}
              </h2>
            </div>

            <div className="prose prose-lg max-w-none">
              {language === "km" ? (
                <div className="space-y-6 text-gray-700 leading-relaxed">
                  <p className="text-xl">
                    ខ្ញុំជាប្រជាពលរដ្ឋកោះរ៉ុងដែលបានកើតនិងធំធាត់នៅលើកោះដ៏ស្រស់ស្អាតនេះ។
                    ខ្ញុំបានឃើញការផ្លាស់ប្តូរជាច្រើននៅលើកោះរបស់ខ្ញុំ
                    ចាប់ពីកោះតូចមួយដែលមានតែអ្នកស្រុកមួយចំនួនតូច
                    រហូតដល់ក្លាយជាទីកន្លែងទេសចរណ៍ដ៏ពេញនិយម។
                  </p>

                  <p>
                    ក្នុងអំឡុងពេលនេះ ខ្ញុំបានកត់សម្គាល់ថា
                    អ្នកទេសចរណ៍ជាច្រើនមកដល់កោះរ៉ុងដោយមានព័ត៌មានមិនពេញលេញ
                    ឬព័ត៌មានមិនត្រឹមត្រូវ។
                    ពួកគេច្រើនតែមិនដឹងអំពីកន្លែងស្រស់ស្អាតបំផុត
                    ឬរបៀបធ្វើដំណើរដ៏ល្អបំផុត។
                  </p>

                  <p>
                    នេះហើយជាមូលហេតុដែលខ្ញុំសម្រេចចិត្តបង្កើតគេហទំព័រ "កោះរ៉ុង
                    កម្ពុជា" នេះ។ ខ្ញុំចង់ចែករំលែកបទពិសោធន៍
                    និងចំណេះដឹងរបស់ខ្ញុំជាមួយអ្នកទេសចរណ៍ទាំងអស់
                    ដើម្បីឱ្យពួកគេអាចរីករាយជាមួយដំណើរទេសចរណ៍នៅកោះរ៉ុងបានយ៉ាងពេញលេញ។
                  </p>

                  <p>
                    រូបភាពទាំងអស់ក្នុងគេហទំព័រនេះ គឺថតដោយខ្ញុំផ្ទាល់។
                    អត្ថបទទាំងអស់ គឺសរសេរដោយខ្ញុំដែលស្គាល់កោះរ៉ុងយ៉ាងស៊ីជម្រៅ។
                    ខ្ញុំមិនចម្លងព័ត៌មានពីកន្លែងផ្សេងទេ
                    ប៉ុន្តែផ្តល់ព័ត៌មានពិតប្រាកដពីបទពិសោធន៍ផ្ទាល់របស់ខ្ញុំ។
                  </p>

                  <p>
                    ខ្ញុំធ្វើការនេះដោយមិនរំពឹងផលចំណេញ
                    ប៉ុន្តែដោយសារតែស្នេហាកោះរ៉ុង
                    និងចង់ជួយអ្នកទេសចរណ៍ឱ្យមានបទពិសោធន៍ដ៏អស្ចារ្យ។
                    ខ្ញុំក៏ចង់ជួយគាំទ្រសហគមន៍មូលដ្ឋានរបស់ខ្ញុំផងដែរ
                    តាមរយៈការលើកកម្ពស់ទេសចរណ៍ប្រកបដោយការទទួលខុសត្រូវ។
                  </p>

                  <p className="text-xl font-semibold text-koh-rong-600">
                    ខ្ញុំសង្ឃឹមថា
                    គេហទំព័រនេះនឹងជួយអ្នកក្នុងការរៀបចំដំណើរទេសចរណ៍ដ៏អស្ចារ្យមួយនៅកោះរ៉ុង
                    និងជួយគាំទ្រសហគមន៍មូលដ្ឋានរបស់ខ្ញុំផងដែរ។
                  </p>
                </div>
              ) : (
                <div className="space-y-6 text-gray-700 leading-relaxed">
                  <p className="text-xl">
                    I am a Koh Rong resident who was born and raised on this
                    beautiful island. I have witnessed many changes on my
                    island, from a small island with only a few locals to
                    becoming a popular tourist destination.
                  </p>

                  <p>
                    During this time, I noticed that many tourists arrive at Koh
                    Rong with incomplete or incorrect information. They often
                    don't know about the most beautiful places or the best ways
                    to travel.
                  </p>

                  <p>
                    This is why I decided to create the "Koh Rong Cambodia"
                    website. I want to share my experiences and knowledge with
                    all tourists so they can fully enjoy their travel experience
                    on Koh Rong.
                  </p>

                  <p>
                    All photos on this website are taken directly by me. All
                    articles are written by me, someone who knows Koh Rong
                    intimately. I don't copy information from other sources, but
                    provide authentic information from my direct experiences.
                  </p>

                  <p>
                    I do this work not for profit, but out of love for Koh Rong
                    and wanting to help tourists have amazing experiences. I
                    also want to help support my local community through
                    promoting responsible tourism.
                  </p>

                  <p className="text-xl font-semibold text-koh-rong-600">
                    I hope this website will help you plan an amazing trip to
                    Koh Rong and also help support my local community.
                  </p>
                </div>
              )}
            </div>
          </div>
        </div>
      </section>

      {/* Contact CTA */}
      <section className="py-20 bg-gradient-to-r from-koh-rong-500 to-koh-rong-600">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center text-white">
          <h2 className="text-4xl font-bold mb-6">
            {language === "km" ? "ចង់ទាក់ទងជាមួយខ្ញុំ?" : "Want to Contact Me?"}
          </h2>
          <p className="text-xl mb-8 opacity-90">
            {language === "km"
              ? "ខ្ញុំរីករាយក្នុងការឆ្លើយសំណួរ និងជួយអ្នករៀបចំដំណើរទេសចរណ៍"
              : "I'm happy to answer questions and help you plan your trip"}
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="https://t.me/chhaileang_chen"
              className="bg-white text-koh-rong-600 px-8 py-4 rounded-full font-semibold hover:bg-gray-100 transition-colors inline-flex items-center justify-center space-x-2"
            >
              <Phone className="h-5 w-5" />
              <span>{language === "km" ? "ទំនាក់ទំនង" : "Contact Us"}</span>
            </a>

            <button
              onClick={onBack}
              className="border-2 border-white text-white px-8 py-4 rounded-full font-semibold hover:bg-white hover:text-koh-rong-600 transition-colors"
            >
              {language === "km" ? "ត្រលប់ទៅទំព័រដើម" : "Back to Home"}
            </button>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default AboutPage;
