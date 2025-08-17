import React from "react";
import {
  Star,
  Phone,
  Mail,
  Wifi,
  CheckCircle,
} from "lucide-react";
import { useLanguage } from "../contexts/LanguageContext";

export interface Accommodation {
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
}

interface AccommodationDetailsProps {
  accommodation: Accommodation;
}

const AccommodationDetails: React.FC<AccommodationDetailsProps> = ({ accommodation }) => {
  const { language } = useLanguage();

  return (
    <>
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
          {accommodation.gallery
            .slice(1, 3)
            .map((img, index) => (
              <img
                key={index}
                src={img}
                alt={`${accommodation.name} ${index + 2}`}
                className="w-full h-36 md:h-36 object-cover rounded-2xl"
              />
            ))}
        </div>
      </div>

      {/* Basic Info */}
      <div className="grid md:grid-cols-2 gap-8 mb-8">
        <div>
          <h3 className="text-xl font-bold text-gray-900 mb-4">
            {language === "km" ? "ព័ត៌មានទូទៅ" : "General Information"}
          </h3>
          <div className="space-y-3">
            <div className="flex justify-between items-center">
              <span className="text-gray-600">
                {language === "km" ? "ប្រភេទ" : "Type"}:
              </span>
              <span className="font-semibold">
                {accommodation.typeEn}
              </span>
            </div>
            <div className="flex justify-between items-center">
              <span className="text-gray-600">
                {language === "km" ? "ទីតាំង" : "Location"}:
              </span>
              <span className="font-semibold">
                {accommodation.beachEn}
              </span>
            </div>
            <div className="flex justify-between items-center">
              <span className="text-gray-600">
                {language === "km" ? "តម្លៃ" : "Price"}:
              </span>
              <span className="font-bold text-2xl text-koh-rong-600">
                {accommodation.price}
              </span>
            </div>
            <div className="flex justify-between items-center">
              <span className="text-gray-600">
                {language === "km" ? "ការវាយតម្លៃ" : "Rating"}:
              </span>
              <div className="flex items-center space-x-1">
                <Star className="h-4 w-4 text-yellow-500 fill-current" />
                <span className="font-semibold">
                  {accommodation.rating}
                </span>
                <span className="text-gray-500">
                  ({accommodation.reviews} reviews)
                </span>
              </div>
            </div>
            <div className="flex justify-between items-center">
              <span className="text-gray-600">
                {language === "km" ? "ស្ថានភាព" : "Availability"}:
              </span>
              <span
                className={`px-3 py-1 rounded-full text-sm font-semibold ${
                  accommodation.availability
                    ? "bg-green-100 text-green-800"
                    : "bg-red-100 text-red-800"
                }`}
              >
                {accommodation.availability
                  ? language === "km"
                    ? "មាន"
                    : "Available"
                  : language === "km"
                  ? "អស់"
                  : "Booked"}
              </span>
            </div>
          </div>
        </div>

        <div>
          <h3 className="text-xl font-bold text-gray-900 mb-4">
            {language === "km" ? "ទំនាក់ទំនង" : "Contact Information"}
          </h3>
          <div className="space-y-3">
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
        </div>
      </div>

      {/* Description */}
      <div className="mb-8">
        <h3 className="text-xl font-bold text-gray-900 mb-4">
          {language === "km" ? "ការពិពណ៌នា" : "Description"}
        </h3>
        <p className="text-gray-600 leading-relaxed">
          {language === "km"
            ? accommodation.description
            : accommodation.descriptionEn}
        </p>
      </div>

      {/* Features */}
      <div className="mb-8">
        <h3 className="text-xl font-bold text-gray-900 mb-4">
          {language === "km" ? "លក្ខណៈពិសេស" : "Features & Amenities"}
        </h3>
        <div className="grid md:grid-cols-2 gap-4">
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

      {/* Contact Actions */}
      <div className="bg-gradient-to-br from-koh-rong-50 to-blue-50 rounded-2xl p-6">
        <h3 className="text-xl font-bold text-gray-900 mb-4 text-center">
          {language === "km" ? "កក់ទុកឥឡូវ!" : "Book Now!"}
        </h3>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <a
            href={`tel:${accommodation.contact.phone}`}
            className="bg-gradient-to-r from-koh-rong-500 to-koh-rong-600 hover:from-koh-rong-600 hover:to-koh-rong-700 text-white px-6 py-3 rounded-xl font-semibold transition-all duration-300 transform hover:scale-105 flex items-center justify-center space-x-2"
          >
            <Phone className="h-5 w-5" />
            <span>
              {language === "km" ? "ទូរស័ព្ទឥឡូវ" : "Call Now"}
            </span>
          </a>
          <a
            href={`mailto:${accommodation.contact.email}?subject=Booking Inquiry - ${accommodation.nameEn}`}
            className="border-2 border-koh-rong-500 text-koh-rong-600 hover:bg-koh-rong-500 hover:text-white px-6 py-3 rounded-xl font-semibold transition-all duration-300 flex items-center justify-center space-x-2"
          >
            <Mail className="h-5 w-5" />
            <span>
              {language === "km" ? "ផ្ញើអ៊ីមែល" : "Send Email"}
            </span>
          </a>
        </div>
        <p className="text-center text-sm text-gray-600 mt-4">
          {language === "km"
            ? "ទាក់ទងផ្ទាល់ដើម្បីទទួលបានតម្លៃល្អបំផុត"
            : "Contact directly for best rates and availability"}
        </p>
      </div>
    </>
  );
};

export default AccommodationDetails;
