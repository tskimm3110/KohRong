import React from "react";
import {
  ArrowLeft,
  MapPin,
  Star,
  Users,
  Clock,
  Waves,
  Sun,
  Camera,
  Heart,
  Eye,
  Navigation,
  Compass,
  Home,
  Utensils,
  Building,
  TreePine,
} from "lucide-react";
import { useLanguage } from "../contexts/LanguageContext";

interface Beach {
  id: number;
  name: string;
  nameEn: string;
  length: number; // in meters
  village: string;
  villageEn: string;
  commune: string;
  communeEn: string;
  description: string;
  descriptionEn: string;
  features: string[];
  featuresEn: string[];
  activities: string[];
  activitiesEn: string[];
  bestTime: string;
  bestTimeEn: string;
  accommodations: number;
  image: string;
  popular: boolean;
  difficulty: "easy" | "medium" | "hard";
  categories: string[];
}

interface Village {
  id: number;
  name: string;
  nameEn: string;
  families: number;
  population: number;
  women: number;
  description: string;
  descriptionEn: string;
  features: string[];
  featuresEn: string[];
  accommodations: number;
  restaurants: number;
  activities: string[];
  activitiesEn: string[];
  image: string;
  beaches: string[];
  beachesEn: string[];
}

interface DestinationDetailPageProps {
  destination: Beach | Village;
  onBack: () => void;
}

const DestinationDetailPage: React.FC<DestinationDetailPageProps> = ({
  destination,
  onBack,
}) => {
  const { language } = useLanguage();

  const isBeach = "length" in destination;

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <div className="bg-white shadow-sm sticky top-0 z-40">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
          <button
            onClick={onBack}
            className="flex items-center space-x-2 text-gray-600 hover:text-koh-rong-600 transition-colors group"
          >
            <ArrowLeft className="h-5 w-5 group-hover:-translate-x-1 transition-transform" />
            <span className="font-medium">
              {language === "km" ? "ត្រលប់" : "Back"}
            </span>
          </button>
        </div>
      </div>

      {/* Hero Section */}
      <section className="relative h-96 overflow-hidden">
        <img
          src={destination.image}
          alt={language === "km" ? destination.name : destination.nameEn}
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-black opacity-50"></div>
        <div className="absolute inset-0 flex items-center justify-center">
          <div className="text-center text-white">
            <h1 className="text-4xl md:text-6xl font-bold mb-4">
              {language === "km" ? destination.name : destination.nameEn}
            </h1>
            {isBeach && (
              <p className="text-xl">
                {language === "km"
                  ? (destination as Beach).village
                  : (destination as Beach).villageEn}
              </p>
            )}
          </div>
        </div>
      </section>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Main Content */}
          <div className="md:col-span-2">
            <div className="bg-white rounded-2xl shadow-lg p-8">
              <h2 className="text-2xl font-bold text-gray-900 mb-4">
                {language === "km" ? "អំពី" : "About"}{" "}
                {language === "km" ? destination.name : destination.nameEn}
              </h2>
              <p className="text-gray-600 leading-relaxed">
                {language === "km"
                  ? destination.description
                  : destination.descriptionEn}
              </p>

              <div className="mt-8">
                <h3 className="text-xl font-bold text-gray-900 mb-4">
                  {language === "km" ? "លក្ខណៈពិសេស" : "Features"}
                </h3>
                <div className="flex flex-wrap gap-2">
                  {(language === "km"
                    ? destination.features
                    : destination.featuresEn
                  ).map((feature, index) => (
                    <span
                      key={index}
                      className="bg-koh-rong-100 text-koh-rong-700 px-3 py-1 rounded-full text-sm font-semibold"
                    >
                      {feature}
                    </span>
                  ))}
                </div>
              </div>

              <div className="mt-8">
                <h3 className="text-xl font-bold text-gray-900 mb-4">
                  {language === "km" ? "សកម្មភាព" : "Activities"}
                </h3>
                <div className="flex flex-wrap gap-2">
                  {(language === "km"
                    ? destination.activities
                    : destination.activitiesEn
                  ).map((activity, index) => (
                    <span
                      key={index}
                      className="bg-green-100 text-green-700 px-3 py-1 rounded-full text-sm font-semibold"
                    >
                      {activity}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </div>

          {/* Sidebar */}
          <div className="space-y-8">
            <div className="bg-white rounded-2xl shadow-lg p-6">
              <h3 className="text-xl font-bold text-gray-900 mb-4">
                {language === "km" ? "ព័ត៌មានលម្អិត" : "Details"}
              </h3>
              {isBeach ? (
                <div className="space-y-4">
                  <div className="flex items-center space-x-3">
                    <Waves className="h-5 w-5 text-blue-500" />
                    <span className="text-gray-700">
                      {((destination as Beach).length / 1000).toFixed(1)} km{" "}
                      {language === "km" ? "ប្រវែង" : "Length"}
                    </span>
                  </div>
                  <div className="flex items-center space-x-3">
                    <Home className="h-5 w-5 text-gray-500" />
                    <span className="text-gray-700">
                      {(destination as Beach).accommodations}{" "}
                      {language === "km" ? "កន្លែងស្នាក់នៅ" : "accommodations"}
                    </span>
                  </div>
                  <div className="flex items-center space-x-3">
                    <Clock className="h-5 w-5 text-gray-500" />
                    <span className="text-gray-700">
                      {language === "km"
                        ? (destination as Beach).bestTime
                        : (destination as Beach).bestTimeEn}
                    </span>
                  </div>
                  <div className="flex items-center space-x-3">
                    <span
                      className={`px-3 py-1 rounded-full text-sm font-semibold ${
                        (destination as Beach).difficulty === "easy"
                          ? "bg-green-100 text-green-800"
                          : (destination as Beach).difficulty === "medium"
                          ? "bg-yellow-100 text-yellow-800"
                          : "bg-red-100 text-red-800"
                      }`}
                    >
                      {language === "km"
                        ? (destination as Beach).difficulty === "easy"
                          ? "ងាយស្រួល"
                          : (destination as Beach).difficulty === "medium"
                          ? "មធ្យម"
                          : "លំបាក"
                        : (destination as Beach).difficulty}
                    </span>
                  </div>
                </div>
              ) : (
                <div className="space-y-4">
                  <div className="flex items-center space-x-3">
                    <Users className="h-5 w-5 text-gray-500" />
                    <span className="text-gray-700">
                      {(destination as Village).population}{" "}
                      {language === "km" ? "ប្រជាជន" : "Population"}
                    </span>
                  </div>
                  <div className="flex items-center space-x-3">
                    <Home className="h-5 w-5 text-gray-500" />
                    <span className="text-gray-700">
                      {(destination as Village).accommodations}{" "}
                      {language === "km" ? "កន្លែងស្នាក់នៅ" : "accommodations"}
                    </span>
                  </div>
                  <div className="flex items-center space-x-3">
                    <Utensils className="h-5 w-5 text-gray-500" />
                    <span className="text-gray-700">
                      {(destination as Village).restaurants}{" "}
                      {language === "km" ? "ភោជនីយដ្ឋាន" : "restaurants"}
                    </span>
                  </div>
                  <div className="flex items-center space-x-3">
                    <Waves className="h-5 w-5 text-blue-500" />
                    <span className="text-gray-700">
                      {(destination as Village).beaches.length}{" "}
                      {language === "km" ? "ឆ្នេរ" : "beaches"}
                    </span>
                  </div>
                </div>
              )}
            </div>
            {!isBeach && (
              <div className="bg-white rounded-2xl shadow-lg p-6">
                <h3 className="text-xl font-bold text-gray-900 mb-4">
                  {language === "km" ? "ឆ្នេរនៅក្នុងភូមិនេះ" : "Beaches in this Village"}
                </h3>
                <ul className="space-y-2">
                  {(language === "km"
                    ? (destination as Village).beaches
                    : (destination as Village).beachesEn
                  ).map((beach, index) => (
                    <li key={index} className="flex items-center space-x-2">
                      <Waves className="h-4 w-4 text-blue-400" />
                      <span className="text-gray-700">{beach}</span>
                    </li>
                  ))}
                </ul>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default DestinationDetailPage;
