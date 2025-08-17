import React from "react";
import {
  ArrowLeft,
  Star,
  MapPin,
  Phone,
  Mail,
  Wifi,
  CheckCircle,
} from "lucide-react";
import { useLanguage } from "../contexts/LanguageContext";

interface AccommodationDetailPageProps {
  accommodation: {
    id: number;
    name: string;
    nameEn: string;
    type: string;
    typeEn: string;
    beach: string;
    beachEn: string;
    price: string;
    priceRange: string;
    rating: number;
    reviews: number;
    description: string;
    descriptionEn: string;
    features: string[];
    featuresEn: string[];
    image: string;
    gallery: string[];
    contact: {
      phone: string;
      email: string;
      website?: string;
    };
    coordinates: {
      lat: number;
      lng: number;
    };
    availability: boolean;
  };
  onBack: () => void;
}

const AccommodationDetailPage: React.FC<AccommodationDetailPageProps> = ({
  accommodation,
  onBack,
}) => {
  const { language } = useLanguage();

  if (!accommodation) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-gray-50 p-4">
        <div className="text-center">
          <h2 className="text-2xl font-bold text-gray-900 mb-4">
            {language === "km"
              ? "រកមិនឃើញកន្លែងស្នាក់នៅ"
              : "Accommodation Not Found"}
          </h2>
          <button
            onClick={onBack}
            className="bg-koh-rong-500 hover:bg-koh-rong-600 text-white px-6 py-3 rounded-full font-semibold transition-colors"
          >
            {language === "km" ? "ត្រលប់ទៅបញ្ជី" : "Back to Listing"}
          </button>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header with back button */}
      <div className="bg-white shadow-sm sticky top-16 z-40">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
          <button
            onClick={onBack}
            className="flex items-center space-x-2 text-gray-600 hover:text-koh-rong-600 transition-colors group"
          >
            <ArrowLeft className="h-5 w-5 group-hover:-translate-x-1 transition-transform" />
            <span className="font-medium">
              {language === "km"
                ? "ត្រលប់ទៅកន្លែងស្នាក់នៅ"
                : "Back to Accommodation"}
            </span>
          </button>
        </div>
      </div>

      {/* Main Content */}
      <div className="py-12 md:py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-white rounded-3xl shadow-lg p-6 md:p-12">
            {/* Image Gallery */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-8">
              <div className="md:col-span-2">
                <img
                  src={accommodation.image}
                  alt={
                    language === "km"
                      ? accommodation.name
                      : accommodation.nameEn
                  }
                  className="w-full h-64 md:h-80 object-cover rounded-2xl"
                />
              </div>
              <div className="space-y-4">
                {accommodation.gallery.slice(1, 3).map((img, index) => (
                  <img
                    key={index}
                    src={img}
                    alt={`${accommodation.name} ${index + 2}`}
                    className="w-full h-36 md:h-36 object-cover rounded-2xl"
                  />
                ))}
              </div>
            </div>

            {/* Title & Info */}
            <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-8 border-b pb-8">
              <div>
                <h1 className="text-3xl md:text-4xl font-bold text-gray-900 mb-2">
                  {language === "km"
                    ? accommodation.name
                    : accommodation.nameEn}
                </h1>
                <div className="flex items-center space-x-4 text-gray-600">
                  <div className="flex items-center space-x-1">
                    <MapPin className="h-4 w-4" />
                    <span>
                      {language === "km"
                        ? accommodation.beachEn
                        : accommodation.beachEn}
                    </span>
                  </div>
                  <div className="flex items-center space-x-1">
                    <Star className="h-4 w-4 text-yellow-500 fill-current" />
                    <span className="font-semibold">
                      {accommodation.rating} ({accommodation.reviews} reviews)
                    </span>
                  </div>
                </div>
              </div>
              <div className="mt-4 md:mt-0 md:text-right">
                <span className="text-4xl font-bold text-koh-rong-600">
                  {accommodation.price}
                </span>
                <span className="text-gray-600 text-sm">
                  /{language === "km" ? "យប់" : "night"}
                </span>
              </div>
            </div>

            {/* Description & Features */}
            <div className="grid md:grid-cols-2 gap-8">
              <div>
                <h2 className="text-xl font-bold text-gray-900 mb-4">
                  {language === "km" ? "ការពិពណ៌នា" : "Description"}
                </h2>
                <p className="text-gray-600 leading-relaxed mb-6">
                  {language === "km"
                    ? accommodation.description
                    : accommodation.descriptionEn}
                </p>

                <h2 className="text-xl font-bold text-gray-900 mb-4">
                  {language === "km" ? "លក្ខណៈពិសេស" : "Features & Amenities"}
                </h2>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  {(language === "km"
                    ? accommodation.features
                    : accommodation.featuresEn
                  ).map((feature, index) => (
                    <div key={index} className="flex items-center space-x-3">
                      <CheckCircle className="h-5 w-5 text-green-500" />
                      <span className="text-gray-700">{feature}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Contact Information & Booking */}
              <div className="bg-gradient-to-br from-koh-rong-50 to-blue-50 rounded-2xl p-6 h-fit sticky top-28">
                <h2 className="text-xl font-bold text-gray-900 mb-4">
                  {language === "km" ? "ទំនាក់ទំនង" : "Contact Information"}
                </h2>
                <div className="space-y-4 mb-6">
                  <div className="flex items-center space-x-3">
                    <Phone className="h-5 w-5 text-koh-rong-500" />
                    <a
                      href={`tel:${accommodation.contact.phone}`}
                      className="text-koh-rong-600 hover:text-koh-rong-700 transition-colors"
                    >
                      {accommodation.contact.phone}
                    </a>
                  </div>
                  <div className="flex items-center space-x-3">
                    <Mail className="h-5 w-5 text-koh-rong-500" />
                    <a
                      href={`mailto:${accommodation.contact.email}`}
                      className="text-koh-rong-600 hover:text-koh-rong-700 transition-colors"
                    >
                      {accommodation.contact.email}
                    </a>
                  </div>
                  {accommodation.contact.website && (
                    <div className="flex items-center space-x-3">
                      <Wifi className="h-5 w-5 text-koh-rong-500" />
                      <a
                        href={`https://${accommodation.contact.website}`}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-koh-rong-600 hover:text-koh-rong-700 transition-colors"
                      >
                        {accommodation.contact.website}
                      </a>
                    </div>
                  )}
                </div>

                <div className="flex flex-col gap-3">
                  <a
                    href={`tel:${accommodation.contact.phone}`}
                    className="bg-gradient-to-r from-koh-rong-500 to-koh-rong-600 hover:from-koh-rong-600 hover:to-koh-rong-700 text-white px-6 py-3 rounded-xl font-semibold transition-all duration-300 transform hover:scale-105 flex items-center justify-center space-x-2"
                  >
                    <Phone className="h-5 w-5" />
                    <span>
                      {language === "km" ? "ទូរស័ព្ទឥឡូវ" : "Call Now"}
                    </span>
                  </a>
                  <p className="text-center text-sm text-gray-600 mt-2">
                    {language === "km"
                      ? "ទាក់ទងផ្ទាល់ដើម្បីទទួលបានតម្លៃល្អបំផុត"
                      : "Contact directly for best rates and availability"}
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AccommodationDetailPage;
