import React from "react";
import {
  ArrowLeft,
  Phone,
  Mail,
  MapPin,
  Star,
  Clock,
  Users,
  DollarSign,
  CheckCircle,
  Heart,
  Calendar,
  Tag,
} from "lucide-react";
import { useLanguage } from "../contexts/LanguageContext";
import { Service } from "./ServicesPage"; // Importing the interface
import Footer from "./Footer";

interface ServiceDetailPageProps {
  service: Service;
  onBack: () => void;
}

const ServiceDetailPage: React.FC<ServiceDetailPageProps> = ({
  service,
  onBack,
}) => {
  const { language } = useLanguage();

  const renderFeature = (feature: string, index: number) => (
    <li key={index} className="flex items-center space-x-3">
      <CheckCircle className="h-5 w-5 text-green-500" />
      <span className="text-gray-700">{feature}</span>
    </li>
  );

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <div className="bg-white shadow-sm sticky top-16 z-40">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
          <button
            onClick={onBack}
            className="flex items-center space-x-2 text-gray-600 hover:text-koh-rong-600 transition-colors group"
          >
            <ArrowLeft className="h-5 w-5 group-hover:-translate-x-1 transition-transform" />
            <span className="font-medium">
              {language === "km" ? "ត្រលប់ទៅសេវាកម្ម" : "Back to Services"}
            </span>
          </button>
        </div>
      </div>

      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="bg-white rounded-3xl shadow-xl overflow-hidden">
          {/* Image Gallery */}
          <div className="grid grid-cols-1 md:grid-cols-2">
            <div className="col-span-1">
              <img
                src={service.image}
                alt={language === "km" ? service.name : service.nameEn}
                className="w-full h-full object-cover max-h-[500px]"
              />
            </div>
            <div className="grid grid-cols-2 gap-1">
              {service.gallery.slice(0, 4).map((img, index) => (
                <img
                  key={index}
                  src={img}
                  alt={`${
                    language === "km" ? service.name : service.nameEn
                  } gallery ${index + 1}`}
                  className="w-full h-full object-cover"
                />
              ))}
            </div>
          </div>

          <div className="p-8 md:p-12">
            {/* Title and Meta */}
            <div className="flex justify-between items-start mb-6">
              <div>
                <div className="flex items-center space-x-3 mb-2">
                  <span className="bg-gradient-to-r from-koh-rong-500 to-koh-rong-600 text-white px-4 py-1 rounded-full text-sm font-semibold">
                    {language === "km"
                      ? service.category
                      : service.categoryEn}
                  </span>
                  {service.popular && (
                    <span className="bg-red-100 text-red-800 px-4 py-1 rounded-full text-sm font-semibold flex items-center space-x-1">
                      <Heart className="h-4 w-4 fill-current" />
                      <span>{language === "km" ? "ពេញនិយម" : "Popular"}</span>
                    </span>
                  )}
                </div>
                <h1 className="text-3xl md:text-4xl font-bold text-gray-900">
                  {language === "km" ? service.name : service.nameEn}
                </h1>
              </div>
              <div className="text-right flex-shrink-0">
                <div className="flex items-center space-x-1 text-yellow-500">
                  {[...Array(Math.floor(service.rating))].map((_, i) => (
                    <Star key={i} className="h-6 w-6 fill-current" />
                  ))}
                  {service.rating % 1 !== 0 && (
                    <Star className="h-6 w-6" /> /* Simple half-star representation */
                  )}
                </div>
                <span className="text-gray-600 mt-1">
                  {service.rating.toFixed(1)} ({service.reviews}{" "}
                  {language === "km" ? "ការវាយតម្លៃ" : "reviews"})
                </span>
              </div>
            </div>

            {/* Description */}
            <p className="text-gray-700 text-lg leading-relaxed mb-8">
              {language === "km"
                ? service.description
                : service.descriptionEn}
            </p>

            {/* Core Details */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-8 border-t border-b border-gray-200 py-6">
              <div className="flex items-center space-x-3">
                <DollarSign className="h-8 w-8 text-koh-rong-600" />
                <div>
                  <p className="text-sm text-gray-500">
                    {language === "km" ? "តម្លៃ" : "Price"}
                  </p>
                  <p className="font-bold text-lg">
                    {language === "km" ? service.price : service.priceEn}
                  </p>
                </div>
              </div>
              <div className="flex items-center space-x-3">
                <Clock className="h-8 w-8 text-koh-rong-600" />
                <div>
                  <p className="text-sm text-gray-500">
                    {language === "km" ? "រយៈពេល" : "Duration"}
                  </p>
                  <p className="font-bold text-lg">
                    {language === "km" ? service.duration : service.durationEn}
                  </p>
                </div>
              </div>
              <div className="flex items-center space-x-3">
                <Users className="h-8 w-8 text-koh-rong-600" />
                <div>
                  <p className="text-sm text-gray-500">
                    {language === "km" ? " χωρητικότητα" : "Capacity"}
                  </p>
                  <p className="font-bold text-lg">
                    {language === "km" ? service.capacity : service.capacityEn}
                  </p>
                </div>
              </div>
              <div className="flex items-center space-x-3">
                <Tag className="h-8 w-8 text-koh-rong-600" />
                <div>
                  <p className="text-sm text-gray-500">
                    {language === "km" ? "ស្ថានភាព" : "Status"}
                  </p>
                  <p
                    className={`font-bold text-lg ${
                      service.availability
                        ? "text-green-600"
                        : "text-red-600"
                    }`}
                  >
                    {service.availability
                      ? language === "km"
                        ? "មាន"
                        : "Available"
                      : language === "km"
                      ? "អស់"
                      : "Unavailable"}
                  </p>
                </div>
              </div>
            </div>

            <div className="grid md:grid-cols-2 gap-12">
              {/* Features */}
              <div>
                <h2 className="text-2xl font-bold text-gray-900 mb-4">
                  {language === "km" ? "លក្ខណៈពិសេស" : "Features"}
                </h2>
                <ul className="space-y-3">
                  {language === "km"
                    ? service.features.map(renderFeature)
                    : service.featuresEn.map(renderFeature)}
                </ul>
              </div>

              {/* Contact Info */}
              <div>
                <h2 className="text-2xl font-bold text-gray-900 mb-4">
                  {language === "km" ? "ព័ត៌មានទំនាក់ទំនង" : "Contact Information"}
                </h2>
                <div className="space-y-4">
                  <div className="flex items-center space-x-3">
                    <Users className="h-5 w-5 text-gray-500" />
                    <span className="text-gray-700">
                      {language === "km"
                        ? service.contact.name
                        : service.contact.nameEn}
                    </span>
                  </div>
                  <div className="flex items-center space-x-3">
                    <Phone className="h-5 w-5 text-gray-500" />
                    <a
                      href={`tel:${service.contact.phone}`}
                      className="text-koh-rong-600 hover:underline"
                    >
                      {service.contact.phone}
                    </a>
                  </div>
                  {service.contact.email && (
                    <div className="flex items-center space-x-3">
                      <Mail className="h-5 w-5 text-gray-500" />
                      <a
                        href={`mailto:${service.contact.email}`}
                        className="text-koh-rong-600 hover:underline"
                      >
                        {service.contact.email}
                      </a>
                    </div>
                  )}
                  <div className="flex items-center space-x-3">
                    <MapPin className="h-5 w-5 text-gray-500" />
                    <span className="text-gray-700">
                      {language === "km"
                        ? service.contact.location
                        : service.contact.locationEn}
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default ServiceDetailPage;
