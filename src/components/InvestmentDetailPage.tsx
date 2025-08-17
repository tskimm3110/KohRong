import React from "react";
import {
  ArrowLeft,
  DollarSign,
  TrendingUp,
  MapPin,
  CheckCircle,
  Phone,
  Mail,
} from "lucide-react";
import { useLanguage } from "../contexts/LanguageContext";

interface InvestmentDetailPageProps {
  opportunity: any; // Use a more specific type if available
  onBack: () => void;
}

const InvestmentDetailPage: React.FC<InvestmentDetailPageProps> = ({
  opportunity,
  onBack,
}) => {
  const { language } = useLanguage();

  if (!opportunity) {
    return (
      <div className="flex items-center justify-center min-h-screen">
        <p>{language === "km" ? "មិនមានទិន្នន័យ" : "No data available."}</p>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header with back button */}
      <div className="bg-white shadow-sm sticky top-0 z-40">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
          <button
            onClick={onBack}
            className="flex items-center space-x-2 text-gray-600 hover:text-koh-rong-600 transition-colors group"
          >
            <ArrowLeft className="h-5 w-5 group-hover:-translate-x-1 transition-transform" />
            <span className="font-medium">
              {language === "km"
                ? "ត្រលប់ទៅឱកាសវិនិយោគ"
                : "Back to Investments"}
            </span>
          </button>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="bg-white rounded-3xl shadow-xl overflow-hidden p-8">
          <div className="md:flex md:space-x-8">
            <div className="md:w-1/2 mb-6 md:mb-0">
              <img
                src={opportunity.image}
                alt={opportunity.title}
                className="w-full h-64 object-cover rounded-2xl mb-8"
              />
              <div className="space-y-4">
                <div className="bg-gray-50 rounded-xl p-4">
                  <div className="flex items-center space-x-2 text-gray-600 mb-1">
                    <DollarSign className="h-5 w-5" />
                    <span className="text-sm">
                      {language === "km"
                        ? "ការវិនិយោគត្រូវការ"
                        : "Required Investment"}
                    </span>
                  </div>
                  <div className="text-2xl font-bold text-gray-900">
                    {opportunity.investment}
                  </div>
                </div>
                <div className="bg-green-50 rounded-xl p-4">
                  <div className="flex items-center space-x-2 text-gray-600 mb-1">
                    <TrendingUp className="h-5 w-5" />
                    <span className="text-sm">
                      {language === "km" ? "ផលចំណេញរំពឹងទុក" : "Expected ROI"}
                    </span>
                  </div>
                  <div className="text-2xl font-bold text-green-600">
                    {opportunity.roi}
                  </div>
                </div>
                <div className="bg-blue-50 rounded-xl p-4">
                  <div className="flex items-center space-x-2 text-gray-600 mb-1">
                    <MapPin className="h-5 w-5" />
                    <span className="text-sm">
                      {language === "km" ? "ទីតាំង" : "Location"}
                    </span>
                  </div>
                  <div className="text-2xl font-bold text-blue-600">
                    {opportunity.location}
                  </div>
                </div>
              </div>
            </div>

            <div className="md:w-1/2">
              <h1 className="text-4xl font-bold text-gray-900 mb-4">
                {opportunity.title}
              </h1>
              <p className="text-gray-600 mb-6 leading-relaxed">
                {opportunity.description}
              </p>
              <div className="mb-6">
                <h3 className="font-semibold text-gray-900 mb-3">
                  {language === "km" ? "លក្ខណៈពិសេស" : "Key Features"}
                </h3>
                <div className="space-y-2">
                  {opportunity.features.map((feature, index) => (
                    <div key={index} className="flex items-center space-x-2">
                      <CheckCircle className="h-4 w-4 text-green-500" />
                      <span className="text-gray-700 text-sm">{feature}</span>
                    </div>
                  ))}
                </div>
              </div>

              <div className="bg-gradient-to-br from-koh-rong-50 to-blue-50 rounded-2xl p-6 text-center">
                <h3 className="text-xl font-bold text-gray-900 mb-4">
                  {language === "km"
                    ? "ចាប់ផ្តើមការវិនិយោគ"
                    : "Start Your Investment"}
                </h3>
                <div className="flex flex-col sm:flex-row gap-4 justify-center">
                  <a
                    href={`https://t.me/chhaileang_chen`}
                    className="bg-gradient-to-r from-koh-rong-500 to-koh-rong-600 hover:from-koh-rong-600 hover:to-koh-rong-700 text-white px-6 py-3 rounded-xl font-semibold transition-all duration-300 transform hover:scale-105 flex items-center justify-center space-x-2"
                  >
                    <Phone className="h-5 w-5" />
                    <span>
                      {language === "km" ? "ទូរស័ព្ទឥឡូវ" : "Call Now"}
                    </span>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default InvestmentDetailPage;
