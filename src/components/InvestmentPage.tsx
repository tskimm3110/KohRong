import React, { useState } from "react";
import {
  ArrowLeft,
  TrendingUp,
  DollarSign,
  MapPin,
  Users,
  Building,
  Briefcase,
  PieChart,
  BarChart3,
  Target,
  Award,
  CheckCircle,
  Phone,
  Mail,
  Calendar,
  Globe,
  Star,
  ArrowRight,
} from "lucide-react";
import { useLanguage } from "../contexts/LanguageContext";
import Footer from "./Footer";

interface InvestmentPageProps {
  onBack: () => void;
  onViewDetails: (opportunity: any) => void; // Add this prop
}

const InvestmentPage: React.FC<InvestmentPageProps> = ({
  onBack,
  onViewDetails,
}) => {
  const { language } = useLanguage();
  const [selectedOpportunity, setSelectedOpportunity] = useState<any>(null);

  const investmentOpportunities = [
    {
      id: 1,
      title: language === "km" ? "រីសតឆ្នេរប្រណីត" : "Luxury Beach Resort",
      type: language === "km" ? "ទេសចរណ៍" : "Tourism",
      investment: "$2.5M - $5M",
      roi: "15-25%",
      timeline: language === "km" ? "២-៣ ឆ្នាំ" : "2-3 years",
      location: language === "km" ? "ឆ្នេរសុខសាន្ត" : "Sok San Beach",
      description:
        language === "km"
          ? "ឱកាសវិនិយោគក្នុងការបង្កើតរីសតប្រណីតនៅឆ្នេរសុខសាន្ត ជាមួយនឹងបន្ទប់ ៥០ និងសេវាកម្មកម្រិតពិភពលោក។"
          : "Investment opportunity in developing a luxury resort at Sok San Beach with 50 rooms and world-class amenities.",
      features: [
        language === "km" ? "ទីតាំងឆ្នេរពិសេស" : "Prime beachfront location",
        language === "km" ? "ការអនុម័តពេញលេញ" : "Full permits approved",
        language === "km" ? "ការរចនាបានបញ្ចប់" : "Design completed",
        language === "km" ? "ទីផ្សារកំពុងរីកចម្រើន" : "Growing market demand",
      ],
      image:
        "https://images.pexels.com/photos/1659438/pexels-photo-1659438.jpeg?auto=compress&cs=tinysrgb&w=800",
      status: language === "km" ? "កំពុងស្វែងរកដៃគូ" : "Seeking Partners",
    },
    {
      id: 2,
      title:
        language === "km"
          ? "ភោជនីយដ្ឋានអន្តរជាតិ"
          : "International Restaurant Chain",
      type: language === "km" ? "ភោជនីយដ្ឋាន" : "Restaurant",
      investment: "$500K - $1M",
      roi: "20-30%",
      timeline: language === "km" ? "១-២ ឆ្នាំ" : "1-2 years",
      location: language === "km" ? "កោះតូច" : "Koh Touch",
      description:
        language === "km"
          ? "បង្កើតសាខាភោជនីយដ្ឋានអន្តរជាតិនៅកោះតូច ដើម្បីបម្រើអ្នកទេសចរណ៍កាន់តែច្រើន។"
          : "Establish international restaurant franchise at Koh Touch to serve growing tourist population.",
      features: [
        language === "km" ? "ម៉ាកយីហោល្បី" : "Established brand",
        language === "km" ? "ទីតាំងកណ្តាល" : "Central location",
        language === "km" ? "ការគាំទ្រពេញលេញ" : "Full support provided",
        language === "km" ? "ចំណូលធានា" : "Guaranteed revenue",
      ],
      image:
        "https://images.pexels.com/photos/1371360/pexels-photo-1371360.jpeg?auto=compress&cs=tinysrgb&w=800",
      status: language === "km" ? "ត្រៀមចាប់ផ្តើម" : "Ready to Launch",
    },
    {
      id: 3,
      title:
        language === "km" ? "កម្មវិធីអេកូទេសចរណ៍" : "Eco-Tourism Development",
      type: language === "km" ? "អេកូទេសចរណ៍" : "Eco-Tourism",
      investment: "$1M - $2M",
      roi: "12-18%",
      timeline: language === "km" ? "៣-៥ ឆ្នាំ" : "3-5 years",
      location: language === "km" ? "ព្រៃកោងកាង" : "Mangrove Forest",
      description:
        language === "km"
          ? "អភិវឌ្ឍន៍កម្មវិធីអេកូទេសចរណ៍ក្នុងព្រៃកោងកាង ជាមួយនឹងការគាំទ្រសហគមន៍មូលដ្ឋាន។"
          : "Develop eco-tourism program in mangrove forests with local community support.",
      features: [
        language === "km" ? "ការការពារបរិស្ថាន" : "Environmental protection",
        language === "km" ? "ការគាំទ្រសហគមន៍" : "Community support",
        language === "km" ? "ទេសចរណ៍ប្រកបដោយនិរន្តរភាព" : "Sustainable tourism",
        language === "km" ? "ការអប់រំ" : "Educational component",
      ],
      image:
        "https://images.pexels.com/photos/1450361/pexels-photo-1450361.jpeg?auto=compress&cs=tinysrgb&w=800",
      status: language === "km" ? "ការសិក្សាលម្អិត" : "Feasibility Study",
    },
    {
      id: 4,
      title:
        language === "km" ? "ផ្ទះសំណាក់ទំនើប" : "Modern Guesthouse Complex",
      type: language === "km" ? "កន្លែងស្នាក់នៅ" : "Accommodation",
      investment: "$800K - $1.5M",
      roi: "18-25%",
      timeline: language === "km" ? "១.៥-២ ឆ្នាំ" : "1.5-2 years",
      location: language === "km" ? "ឡុងសិត" : "Long Set Beach",
      description:
        language === "km"
          ? "បង្កើតផ្ទះសំណាក់ទំនើបជាមួយបន្ទប់ ៣០ នៅឆ្នេរឡុងសិត សម្រាប់អ្នកទេសចរណ៍ថវិកាមធ្យម។"
          : "Build modern guesthouse complex with 30 rooms at Long Set Beach for mid-budget travelers.",
      features: [
        language === "km" ? "ការរចនាទំនើប" : "Modern design",
        language === "km" ? "ឆ្នេរស្ងប់ស្ងាត់" : "Quiet beach location",
        language === "km" ? "តម្លៃសមរម្យ" : "Competitive pricing",
        language === "km"
          ? "ការគ្រប់គ្រងវិជ្ជាជីវៈ"
          : "Professional management",
      ],
      image:
        "https://images.pexels.com/photos/1640777/pexels-photo-1640777.jpeg?auto=compress&cs=tinysrgb&w=800",
      status: language === "km" ? "កំពុងរៀបចំ" : "In Planning",
    },
  ];

  const whyInvest = [
    {
      icon: TrendingUp,
      title: language === "km" ? "ព័ត៏មានអចលនទ្រព្យ" : "Pproperty Information",
      description:
        language === "km"
          ? "ទេសចរណ៍កម្ពុជាកំពុងរីកចម្រើនយ៉ាងឆាប់រហ័ស ជាពិសេសកោះរ៉ុង"
          : "Cambodia tourism is rapidly growing, especially Koh Rong",
    },
    {
      icon: MapPin,
      title: language === "km" ? "ទីតាំងវិនិយោគ" : "Investment Location",
      description:
        language === "km"
          ? "កោះរ៉ុងស្ថិតនៅទីតាំងល្អក្នុងតំបន់អាស៊ីអាគ្នេយ៍"
          : "Koh Rong is strategically located in Southeast Asia",
    },
    {
      icon: DollarSign,
      title: language === "km" ? "ឱកាសវិនិយោគ" : "Investment Opportunity",
      description:
        language === "km"
          ? "តម្លៃដីនិងការសាងសង់នៅតែទាបបើប្រៀបធៀបនឹងតំបន់ផ្សេង"
          : "Land and construction costs still low compared to other regions",
    },
    {
      icon: Users,
      title:
        language === "km" ? "ការប្រឹក្សាវិនិយោគ" : "Investment Consultation",
      description:
        language === "km"
          ? "រដ្ឋាភិបាលកម្ពុជាគាំទ្រការវិនិយោគក្នុងវិស័យទេសចរណ៍"
          : "Cambodian government supports tourism investment",
    },
  ];

  const investmentProcess = [
    {
      step: 1,
      title:
        language === "km" ? "ការពិគ្រោះយោបល់ដំបូង" : "Initial Consultation",
      description:
        language === "km"
          ? "ពិភាក្សាអំពីគោលដៅនិងថវិការបស់អ្នក"
          : "Discuss your goals and budget",
    },
    {
      step: 2,
      title: language === "km" ? "ការសិក្សាទីផ្សារ" : "Market Research",
      description:
        language === "km"
          ? "វិភាគទីផ្សារនិងឱកាសវិនិយោគ"
          : "Analyze market and investment opportunities",
    },
    {
      step: 3,
      title: language === "km" ? "ការរៀបចំគម្រោង" : "Project Planning",
      description:
        language === "km"
          ? "រៀបចំផែនការលម្អិតនិងការគណនា"
          : "Develop detailed plans and calculations",
    },
    {
      step: 4,
      title: language === "km" ? "ការអនុម័តច្បាប់" : "Legal Approval",
      description:
        language === "km"
          ? "ទទួលការអនុម័តនិងអាជ្ញាប័ណ្ណ"
          : "Obtain permits and legal approvals",
    },
    {
      step: 5,
      title: language === "km" ? "ការអនុវត្ត" : "Implementation",
      description:
        language === "km"
          ? "ចាប់ផ្តើមអនុវត្តគម្រោង"
          : "Begin project implementation",
    },
  ];

  const testimonials = [
    {
      name: language === "km" ? "លោក ជន ស្មីត" : "Mr. John Smith",
      company: "Paradise Resort Group",
      text:
        language === "km"
          ? "ការវិនិយោគនៅកោះរ៉ុងបានផ្តល់ផលចំណេញលើសពីការរំពឹងទុក។ ទីតាំងនិងការគាំទ្រមូលដ្ឋានពិតជាអស្ចារ្យ។"
          : "Investment in Koh Rong exceeded our expectations. The location and local support are amazing.",
      rating: 5,
      investment: "$3.2M Resort",
      roi: "22% Annual ROI",
    },
    {
      name: language === "km" ? "កញ្ញា សារ៉ា ចាន" : "Ms. Sarah Chen",
      company: "Eco Tourism Ventures",
      text:
        language === "km"
          ? "កម្មវិធីអេកូទេសចរណ៍របស់យើងទទួលបានការគាំទ្រយ៉ាងល្អពីសហគមន៍មូលដ្ឋាន។ នេះជាការវិនិយោគដ៏មានន័យ។"
          : "Our eco-tourism program received excellent community support. This is meaningful investment.",
      rating: 5,
      investment: "$1.5M Eco Project",
      roi: "18% Annual ROI",
    },
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
              {language === "km" ? "ត្រលប់ទៅទំព័រដើម" : "Back to Home"}
            </span>
          </button>
        </div>
      </div>

      {/* Hero Section */}
      <section className="relative py-20  overflow-hidden">
        <div className="absolute inset-0 opacity-100">
          <img
            src="https://www.tickertape.in/blog/wp-content/uploads/2023/01/26-jan-23-Where-To-Invest-Money-In-India-27.png"
            alt="Koh Rong Investment"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-black opacity-50"></div>
        </div>

        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center text-white">
          <div className="flex justify-center mb-6">
            <div className="bg-white/20 backdrop-blur-sm rounded-full p-4">
              <TrendingUp className="h-12 w-12 text-white" />
            </div>
          </div>

          <h1 className="text-4xl md:text-6xl font-bold mb-6">
            {language === "km"
              ? "ឱកាសវិនិយោគកោះរ៉ុង"
              : "Koh Rong Investment Opportunities"}
          </h1>

          <p className="text-xl md:text-2xl mb-8 max-w-3xl mx-auto leading-relaxed">
            {language === "km"
              ? "ស្វែងរកឱកាសវិនិយោគដ៏ល្អបំផុតនៅកោះរ៉ុង កម្ពុជា ជាមួយនឹងការគាំទ្រពីប្រជាពលរដ្ឋមូលដ្ឋាន"
              : "Discover the best investment opportunities in Koh Rong Cambodia with local community support"}
          </p>

          {/* Investment Stats */}
        </div>
      </section>

      {/* Why Invest Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
              {language === "km"
                ? "ព័ត័មានឱកាសវិនិយោគនៅកោះរ៉ុង"
                : "Investment Opportunities in Koh Rong"}
            </h2>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {whyInvest.map((reason, index) => {
              const IconComponent = reason.icon;
              return (
                <div
                  key={index}
                  className="bg-gray-50 rounded-3xl p-8 text-center hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2"
                >
                  <div className="bg-gradient-to-r from-koh-rong-500 to-koh-rong-600 p-4 rounded-2xl inline-block mb-6">
                    <IconComponent className="h-8 w-8 text-white" />
                  </div>
                  <h3 className="text-xl font-bold text-gray-900 mb-4">
                    {reason.title}
                  </h3>
                  <p className="text-gray-600 leading-relaxed">
                    {reason.description}
                  </p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Investment Opportunities */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
              {language === "km"
                ? "ឱកាសវិនិយោគបច្ចុប្បន្ន"
                : "Current Investment Opportunities"}
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              {language === "km"
                ? "គម្រោងវិនិយោគដែលកំពុងស្វែងរកដៃគូ"
                : "Investment projects currently seeking partners"}
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            {investmentOpportunities.map((opportunity) => (
              <div
                key={opportunity.id}
                onClick={() => setSelectedOpportunity(opportunity)}
                className="bg-white rounded-3xl shadow-lg overflow-hidden hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2 cursor-pointer"
              >
                <div className="relative">
                  <img
                    src={opportunity.image}
                    alt={opportunity.title}
                    className="w-full h-48 object-cover"
                  />
                  <div className="absolute top-4 left-4">
                    <span className="bg-gradient-to-r from-koh-rong-500 to-koh-rong-600 text-white px-3 py-1 rounded-full text-sm font-semibold">
                      {opportunity.type}
                    </span>
                  </div>
                  <div className="absolute top-4 right-4">
                    <span className="bg-white/90 backdrop-blur-sm text-gray-800 px-3 py-1 rounded-full text-sm font-semibold">
                      {opportunity.status}
                    </span>
                  </div>
                </div>

                <div className="p-8">
                  <h3 className="text-2xl font-bold text-gray-900 mb-4">
                    {opportunity.title}
                  </h3>
                  <p className="text-gray-600 mb-6 leading-relaxed">
                    {opportunity.description}
                  </p>

                  {/* Investment Details */}

                  {/* Features */}
                  <div className="mb-6">
                    <h4 className="font-semibold text-gray-900 mb-3">
                      {language === "km" ? "លក្ខណៈពិសេស" : "Key Features"}
                    </h4>
                    <div className="space-y-2">
                      {opportunity.features.map((feature, index) => (
                        <div
                          key={index}
                          className="flex items-center space-x-2"
                        >
                          <CheckCircle className="h-4 w-4 text-green-500" />
                          <span className="text-gray-700 text-sm">
                            {feature}
                          </span>
                        </div>
                      ))}
                    </div>
                  </div>

                  <button
                    onClick={() => onViewDetails(opportunity)}
                    className="w-full bg-gradient-to-r from-koh-rong-500 to-koh-rong-600 hover:from-koh-rong-600 hover:to-koh-rong-700 text-white px-6 py-3 rounded-xl font-semibold transition-all duration-300 transform hover:scale-105"
                  >
                    {language === "km" ? "មើលលម្អិត" : "View Details"}
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Investment Process */}

      {/* Testimonials */}

      {/* Contact CTA */}
      <section className="py-20 bg-gradient-to-r from-koh-rong-500 to-koh-rong-600">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center text-white">
          <h2 className="text-4xl font-bold mb-6">
            {language === "km"
              ? "ត្រៀមរៀបចំការវិនិយោគ?"
              : "Ready to Start Investing?"}
          </h2>
          <p className="text-xl mb-8 opacity-90">
            {language === "km"
              ? "ទាក់ទងមកកាន់ខ្ញុំដើម្បីពិភាក្សាអំពីឱកាសវិនិយោគ"
              : "Contact me to discuss investment opportunities"}
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

      {/* Investment Opportunity Modal */}
    </div>
  );
};

export default InvestmentPage;
