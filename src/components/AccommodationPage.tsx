import React, { useState } from "react";
import {
  ArrowLeft,
  Home,
  MapPin,
  Star,
  DollarSign,
  Search,
  Phone,
  Mail,
  CheckCircle,
} from "lucide-react";
import { useLanguage } from "../contexts/LanguageContext";
import Footer from "./Footer";

interface AccommodationPageProps {
  onBack: () => void;
  onAccommodationItemClick: (accommodation: Accommodation) => void;
}

interface Accommodation {
  id: number;
  name: string;
  nameEn: string;
  type: string;
  typeEn: string;
  beach: string;
  beachEn: string;
  village: string;
  villageEn: string;
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

const AccommodationPage: React.FC<AccommodationPageProps> = ({
  onBack,
  onAccommodationItemClick,
}) => {
  const { language } = useLanguage();
  const [selectedBeach, setSelectedBeach] = useState("all");
  const [selectedType, setSelectedType] = useState("all");
  const [selectedPriceRange, setSelectedPriceRange] = useState("all");
  const [selectedVillage, setSelectedVillage] = useState("all");
  const [searchTerm, setSearchTerm] = useState("");

  // New state for applied filters
  const [appliedFilters, setAppliedFilters] = useState({
    beach: "all",
    type: "all",
    priceRange: "all",
    village: "all",
    term: "",
  });

  const handleFilter = () => {
    setAppliedFilters({
      beach: selectedBeach,
      type: selectedType,
      priceRange: selectedPriceRange,
      village: selectedVillage,
      term: searchTerm,
    });
  };

  const beaches = [
    { id: "all", name: language === "km" ? "ឆ្នេរទាំងអស់" : "All Beaches" },
    { id: "koh-touch", name: language === "km" ? "កោះតូច" : "Koh Touch" },
    { id: "sok-san", name: language === "km" ? "សុខសាន្ត" : "Sok San Beach" },
    { id: "long-set", name: language === "km" ? "ឡុងសិត" : "Long Set Beach" },
    { id: "coconut", name: language === "km" ? "ដូង" : "Coconut Beach" },
    {
      id: "prasat-beach",
      name: language === "km" ? "ឆ្នេរប្រាសាទ" : "Prasat Beach",
    },
    {
      id: "preksvay-beach",
      name: language === "km" ? "ឆ្នេរព្រែកស្វាយ" : "Prek Svay Beach",
    },
    {
      id: "lomhor-beach",
      name: language === "km" ? "ឆ្នេរលំហ" : "Lomhor Beach",
    },
    {
      id: "heaven-beach",
      name: language === "km" ? "ឆ្នេរឋានសួគ៌" : "Heaven Beach",
    },
    {
      id: "goldensand-beach",
      name: language === "km" ? "ឆ្នេរខ្សាច់មាស" : "Golden Sand Beach",
    },
    {
      id: "kohrong-beach",
      name: language === "km" ? "ឆ្នេរកោះរ៉ុង" : "Koh Rong Beach",
    },
    {
      id: "rongsonlem-beach",
      name: language === "km" ? "ឆ្នេររ៉ុងសន្លឹម" : "Rong Sonlem Beach",
    },
    {
      id: "lazy-beach",
      name: language === "km" ? "ឆ្នេរលំហែ" : "Lomhae Beach",
    },
    {
      id: "sunset-beach",
      name: language === "km" ? "ឆ្នេរថ្ងៃលិច" : "Sunset Beach",
    },
  ];

  const villages = [
    { id: "all", name: language === "km" ? "ភូមិទាំងអស់" : "All Villages" },
    { id: "village1", name: language === "km" ? "ភូមិកោះតូច" : "ភូមិកោះតូច" },
    {
      id: "village2",
      name: language === "km" ? "ភូមិកោះរ៉ុងសន្លឹម" : "ភូមិកោះរ៉ុងសន្លឹម",
    },
    {
      id: "village3",
      name: language === "km" ? "ភូមិថើមថ្កូវ" : "ភូមិថើមថ្កូវ",
    },
    {
      id: "village4",
      name: language === "km" ? "ភូមិព្រែកស្វាយ" : "ភូមិព្រែកស្វាយ",
    },
    {
      id: "village5",
      name: language === "km" ? "ភូមិសុខសាន្ដ" : "ភូមិសុខសាន្ដ",
    },
  ];

  const accommodationTypes = [
    { id: "all", name: language === "km" ? "ប្រភេទទាំងអស់" : "All Types" },
    { id: "resort", name: language === "km" ? "រីសត" : "Resort" },
    { id: "hotel", name: language === "km" ? "សណ្ឋាគារ" : "Hotel" },
    { id: "bungalow", name: language === "km" ? "បុងហ្គាឡូ" : "Bungalow" },
    { id: "guesthouse", name: language === "km" ? "ផ្ទះសំណាក់" : "Guesthouse" },
    { id: "hostel", name: language === "km" ? "ហូស្តែល" : "Hostel" },
  ];

  const priceRanges = [
    { id: "all", name: language === "km" ? "តម្លៃទាំងអស់" : "All Prices" },
    {
      id: "budget",
      name: language === "km" ? "ថវិកាតិច ($10-30)" : "Budget ($10-30)",
    },
    {
      id: "mid",
      name: language === "km" ? "មធ្យម ($30-80)" : "Mid-range ($30-80)",
    },
    {
      id: "luxury",
      name: language === "km" ? "ប្រណីត ($80+)" : "Luxury ($80+)",
    },
  ];

  // Dummy accommodation data to make the component runnable
  const accommodations: Accommodation[] = [
    {
      id: 1,
      name: "សុខសាន្ត បេច រីសត",
      nameEn: "Sok San Beach Resort",
      type: "resort",
      typeEn: "Resort",
      beach: "sok-san",
      beachEn: "Sok San Beach",
      village: "village1",
      villageEn: "Village 1",
      price: "$120-200",
      priceRange: "luxury",
      rating: 4.8,
      reviews: 324,
      description:
        "រីសតប្រណីតនៅឆ្នេរសុខសាន្ត ជាមួយនឹងបន្ទប់ទំនើប និងសេវាកម្មល្អបំផុត។ មានអាងហែលទឹក ភោជនីយដ្ឋាន និងស្ប៉ា។",
      descriptionEn:
        "Luxury resort at Sok San Beach with modern rooms and excellent service. Features swimming pool, restaurant, and spa.",
      features: [
        "អាងហែលទឹក",
        "ភោជនីយដ្ឋាន",
        "ស្ប៉ា",
        "Wi-Fi ឥតគិតថ្លៃ",
        "កន្លែងចតរថយន្ត",
        "បន្ទប់ទំនើប",
      ],
      featuresEn: [
        "Swimming Pool",
        "Restaurant",
        "Spa",
        "Free Wi-Fi",
        "Parking",
        "Modern Rooms",
      ],
      image:
        "https://images.pexels.com/photos/1659438/pexels-photo-1659438.jpeg?auto=compress&cs=tinysrgb&w=800",
      gallery: [
        "https://images.pexels.com/photos/1659438/pexels-photo-1659438.jpeg?auto=compress&cs=tinysrgb&w=800",
        "https://images.pexels.com/photos/1371360/pexels-photo-1371360.jpeg?auto=compress&cs=tinysrgb&w=800",
        "https://images.pexels.com/photos/1640777/pexels-photo-1640777.jpeg?auto=compress&cs=tinysrgb&w=800",
      ],
      contact: {
        phone: "012 345 678",
        email: "info@soksanresort.com",
        website: "www.soksanresort.com",
      },
      coordinates: { lat: 10.6297, lng: 103.2943 },
      availability: true,
    },
    {
      id: 2,
      name: "កោះតូច បេច បុងហ្គាឡូ",
      nameEn: "Koh Touch Beach Bungalows",
      type: "bungalow",
      typeEn: "Bungalow",
      beach: "koh-touch",
      beachEn: "Koh Touch",
      village: "village2",
      villageEn: "Village 2",
      price: "$25-45",
      priceRange: "mid",
      rating: 4.3,
      reviews: 189,
      description:
        "បុងហ្គាឡូបែបប្រពៃណីនៅឆ្នេរកោះតូច ជិតភោជនីយដ្ឋាន និងកំពង់ផែទូក។ បរិយាកាសស្ងប់ស្ងាត់ និងតម្លៃសមរម្យ។",
      descriptionEn:
        "Traditional bungalows at Koh Touch beach, close to restaurants and boat pier. Peaceful atmosphere and reasonable prices.",
      features: [
        "ជិតឆ្នេរ",
        "ភោជនីយដ្ឋាន",
        "Wi-Fi",
        "បន្ទប់ទឹកឯកជន",
        "កន្លែងអង្គុយ",
      ],
      featuresEn: [
        "Near Beach",
        "Restaurant",
        "Wi-Fi",
        "Private Bathroom",
        "Seating Area",
      ],
      image:
        "https://images.pexels.com/photos/1371360/pexels-photo-1371360.jpeg?auto=compress&cs=tinysrgb&w=800",
      gallery: [
        "https://images.pexels.com/photos/1371360/pexels-photo-1371360.jpeg?auto=compress&cs=tinysrgb&w=800",
        "https://images.pexels.com/photos/1640777/pexels-photo-1640777.jpeg?auto=compress&cs=tinysrgb&w=800",
        "https://images.pexels.com/photos/1450361/pexels-photo-1450361.jpeg?auto=compress&cs=tinysrgb&w=800",
      ],
      contact: {
        phone: "017 888 999",
        email: "kohtouchbungalows@gmail.com",
      },
      coordinates: { lat: 10.6156, lng: 103.2821 },
      availability: true,
    },
    {
      id: 3,
      name: "ឡុងសិត ហូស្តែល",
      nameEn: "Long Set Hostel",
      type: "hostel",
      typeEn: "Hostel",
      beach: "long-set",
      beachEn: "Long Set Beach",
      village: "village3",
      villageEn: "Village 3",
      price: "$12-25",
      priceRange: "budget",
      rating: 4.1,
      reviews: 156,
      description:
        "ហូស្តែលសម្រាប់អ្នកធ្វើដំណើរថវិកាតិច។ មានបន្ទប់រួម និងបន្ទប់ឯកជន។ បរិយាកាសមិត្តភាព និងជួបប្រជាពលរដ្ឋ។",
      descriptionEn:
        "Budget hostel for backpackers. Shared and private rooms available. Friendly atmosphere and meet locals.",
      features: ["បន្ទប់រួម", "បន្ទប់ឯកជន", "ផ្ទះបាយរួម", "Wi-Fi", "ជិតឆ្នេរ"],
      featuresEn: [
        "Shared Rooms",
        "Private Rooms",
        "Shared Kitchen",
        "Wi-Fi",
        "Near Beach",
      ],
      image:
        "https://images.pexels.com/photos/1640777/pexels-photo-1640777.jpeg?auto=compress&cs=tinysrgb&w=800",
      gallery: [
        "https://images.pexels.com/photos/1640777/pexels-photo-1640777.jpeg?auto=compress&cs=tinysrgb&w=800",
        "https://images.pexels.com/photos/1450361/pexels-photo-1450361.jpeg?auto=compress&cs=tinysrgb&w=800",
        "https://images.pexels.com/photos/1371360/pexels-photo-1371360.jpeg?auto=compress&cs=tinysrgb&w=800",
      ],
      contact: {
        phone: "010 123 456",
        email: "longsethostel@gmail.com",
      },
      coordinates: { lat: 10.6089, lng: 103.2756 },
      availability: true,
    },
    {
      id: 4,
      name: "ដូង បេច វីឡា",
      nameEn: "Coconut Beach Villa",
      type: "hotel",
      typeEn: "Hotel",
      beach: "coconut",
      beachEn: "Coconut Beach",
      village: "village4",
      villageEn: "Village 4",
      price: "$60-90",
      priceRange: "mid",
      rating: 4.5,
      reviews: 98,
      description:
        "វីឡាទំនើបនៅឆ្នេរដូង ជាមួយនឹងទិដ្ឋភាពសមុទ្រស្រស់ស្អាត។ កន្លែងស្ងប់ស្ងាត់ ល្អសម្រាប់ការសម្រាក។",
      descriptionEn:
        "Modern villa at Coconut Beach with beautiful ocean views. Quiet location perfect for relaxation.",
      features: [
        "ទិដ្ឋភាពសមុទ្រ",
        "បន្ទប់ទំនើប",
        "ភោជនីយដ្ឋាន",
        "Wi-Fi",
        "កន្លែងចតរថយន្ត",
      ],
      featuresEn: [
        "Ocean View",
        "Modern Rooms",
        "Restaurant",
        "Wi-Fi",
        "Parking",
      ],
      image:
        "https://images.pexels.com/photos/1450361/pexels-photo-1450361.jpeg?auto=compress&cs=tinysrgb&w=800",
      gallery: [
        "https://images.pexels.com/photos/1450361/pexels-photo-1450361.jpeg?auto=compress&cs=tinysrgb&w=800",
        "https://images.pexels.com/photos/1659438/pexels-photo-1659438.jpeg?auto=compress&cs=tinysrgb&w=800",
        "https://images.pexels.com/photos/1640777/pexels-photo-1640777.jpeg?auto=compress&cs=tinysrgb&w=800",
      ],
      contact: {
        phone: "092 567 890",
        email: "coconutbeachvilla@gmail.com",
      },
      coordinates: { lat: 10.6234, lng: 103.2889 },
      availability: false,
    },
    {
      id: 5,
      name: "កោះរ៉ុង ហីល រីសត",
      nameEn: "Koh Rong Hill Resort",
      type: "resort",
      typeEn: "Resort",
      beach: "sok-san",
      beachEn: "Sok San Beach",
      village: "village5",
      villageEn: "Village 5",
      price: "$150-250",
      priceRange: "luxury",
      rating: 4.9,
      reviews: 267,
      description:
        "រីសតប្រណីតបំផុតនៅកោះរ៉ុង ស្ថិតនៅលើភ្នំតូច ជាមួយទិដ្ឋភាព ៣៦០ ដឺក្រេ។ សេវាកម្មកម្រិតពិភពលោក។",
      descriptionEn:
        "Most luxurious resort on Koh Rong, located on a small hill with 360-degree views. World-class service.",
      features: [
        "ទិដ្ឋភាព ៣៦០ ដឺក្រេ",
        "អាងហែលទឹកអាកាស",
        "ស្ប៉ាពេញលេញ",
        "ភោជនីយដ្ឋានច្រើន",
        "សេវាកម្មឯកជន",
      ],
      featuresEn: [
        "360° Views",
        "Infinity Pool",
        "Full Spa",
        "Multiple Restaurants",
        "Private Service",
      ],
      image:
        "https://images.pexels.com/photos/1450360/pexels-photo-1450360.jpeg?auto=compress&cs=tinysrgb&w=800",
      gallery: [
        "https://images.pexels.com/photos/1450360/pexels-photo-1450360.jpeg?auto=compress&cs=tinysrgb&w=800",
        "https://images.pexels.com/photos/1659438/pexels-photo-1659438.jpeg?auto=compress&cs=tinysrgb&w=800",
        "https://images.pexels.com/photos/1371360/pexels-photo-1371360.jpeg?auto=compress&cs=tinysrgb&w=800",
      ],
      contact: {
        phone: "023 456 789",
        email: "info@kohronghillresort.com",
        website: "www.kohronghillresort.com",
      },
      coordinates: { lat: 10.6312, lng: 103.2967 },
      availability: true,
    },
    {
      id: 6,
      name: "កោះតូច ផ្ទះសំណាក់",
      nameEn: "Koh Touch Guesthouse",
      type: "guesthouse",
      typeEn: "Guesthouse",
      beach: "koh-touch",
      beachEn: "Koh Touch",
      village: "village2",
      villageEn: "Village 2",
      price: "$15-35",
      priceRange: "budget",
      rating: 4.0,
      reviews: 134,
      description:
        "ផ្ទះសំណាក់គ្រួសារនៅកោះតូច។ បរិយាកាសកក់ក្តៅ និងម្ចាស់ផ្ទះជាប្រជាពលរដ្ឋមូលដ្ឋាន។ តម្លៃសមរម្យ។",
      descriptionEn:
        "Family guesthouse at Koh Touch. Warm atmosphere and local owners. Reasonable prices.",
      features: [
        "គ្រួសារមូលដ្ឋាន",
        "បន្ទប់ស្អាត",
        "ភោជនីយដ្ឋាន",
        "Wi-Fi",
        "ជិតកំពង់ផែ",
      ],
      featuresEn: [
        "Local Family",
        "Clean Rooms",
        "Restaurant",
        "Wi-Fi",
        "Near Pier",
      ],
      image:
        "https://images.pexels.com/photos/1450363/pexels-photo-1450363.jpeg?auto=compress&cs=tinysrgb&w=800",
      gallery: [
        "https://images.pexels.com/photos/1450363/pexels-photo-1450363.jpeg?auto=compress&cs=tinysrgb&w=800",
        "https://images.pexels.com/photos/1371360/pexels-photo-1371360.jpeg?auto=compress&cs=tinysrgb&w=800",
        "https://images.pexels.com/photos/1640777/pexels-photo-1640777.jpeg?auto=compress&cs=tinysrgb&w=800",
      ],
      contact: {
        phone: "078 901 234",
        email: "kohtouchguesthouse@gmail.com",
      },
      coordinates: { lat: 10.6145, lng: 103.2834 },
      availability: true,
    },
  ];

  const filteredAccommodations = accommodations.filter((accommodation) => {
    const beachMatch =
      appliedFilters.beach === "all" ||
      accommodation.beach === appliedFilters.beach;
    const typeMatch =
      appliedFilters.type === "all" ||
      accommodation.type === appliedFilters.type;
    const priceMatch =
      appliedFilters.priceRange === "all" ||
      accommodation.priceRange === appliedFilters.priceRange;
    const villageMatch =
      appliedFilters.village === "all" ||
      accommodation.village === appliedFilters.village;
    const searchMatch =
      appliedFilters.term === "" ||
      (language === "km" ? accommodation.name : accommodation.nameEn)
        .toLowerCase()
        .includes(appliedFilters.term.toLowerCase()) ||
      (language === "km"
        ? accommodation.description
        : accommodation.descriptionEn
      )
        .toLowerCase()
        .includes(appliedFilters.term.toLowerCase());

    return beachMatch && typeMatch && priceMatch && searchMatch && villageMatch;
  });

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
      <section className="relative py-20 overflow-hidden">
        <div className="absolute inset-0 opacity-100">
          <img
            src="https://www.redsavannah.com/-/media/countries/cambodia/accommodation/the-royal-sands/cambodia-royal-sands-beachfront-pool-villa-pool.jpg?h=610&w=1400&udi=1&cropregion=10,291,1597,982&hash=BB4CC18F66FA9A7B549C3C4814020E03"
            alt="Koh Rong Accommodation"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-black opacity-50"></div>
        </div>

        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center text-white">
          <div className="flex justify-center mb-6">
            <div className="bg-white/20 backdrop-blur-sm rounded-full p-4">
              <Home className="h-12 w-12 text-white" />
            </div>
          </div>

          <h1 className="text-4xl md:text-6xl font-bold mb-6">
            {language === "km"
              ? "កន្លែងស្នាក់នៅកោះរ៉ុង"
              : "Koh Rong Accommodation"}
          </h1>

          <p className="text-xl md:text-2xl mb-8 max-w-3xl mx-auto leading-relaxed">
            {language === "km"
              ? "ស្វែងរកកន្លែងស្នាក់នៅដ៏ល្អបំផុតនៅកោះរ៉ុង ពីថវិកាតិចរហូតដល់ប្រណីត"
              : "Find the best accommodation on Koh Rong, from budget to luxury"}
          </p>

          {/* Quick Stats */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mt-12">
            <div className="text-center">
              <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-6">
                <div className="text-3xl md:text-4xl font-bold mb-2">
                  {accommodations.length}
                </div>
                <div className="text-lg font-semibold mb-1">
                  {language === "km" ? "កន្លែងស្នាក់នៅ" : "Properties"}
                </div>
                <div className="text-sm opacity-90">
                  {language === "km" ? "ជម្រើសច្រើន" : "Great choices"}
                </div>
              </div>
            </div>
            <div className="text-center">
              <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-6">
                <div className="text-3xl md:text-4xl font-bold mb-2">4</div>
                <div className="text-lg font-semibold mb-1">
                  {language === "km" ? "ឆ្នេរ" : "Beaches"}
                </div>
                <div className="text-sm opacity-90">
                  {language === "km" ? "ទីតាំងផ្សេងៗ" : "Different locations"}
                </div>
              </div>
            </div>
            <div className="text-center">
              <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-6">
                <div className="text-3xl md:text-4xl font-bold mb-2">$12+</div>
                <div className="text-lg font-semibold mb-1">
                  {language === "km" ? "តម្លៃចាប់ពី" : "Starting from"}
                </div>
                <div className="text-sm opacity-90">
                  {language === "km" ? "ក្នុងមួយយប់" : "Per night"}
                </div>
              </div>
            </div>
            <div className="text-center">
              <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-6">
                <div className="text-3xl md:text-4xl font-bold mb-2">4.4★</div>
                <div className="text-lg font-semibold mb-1">
                  {language === "km" ? "ការវាយតម្លៃ" : "Average Rating"}
                </div>
                <div className="text-sm opacity-90">
                  {language === "km" ? "ពីភ្ញៀវ" : "From guests"}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Search and Filter Section */}
      <section className="py-12 bg-white border-b">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-gray-50 rounded-3xl p-8">
            <h2 className="text-2xl font-bold text-gray-900 mb-6 text-center">
              {language === "km"
                ? "ស្វែងរកកន្លែងស្នាក់នៅ"
                : "Find Your Perfect Stay"}
            </h2>

            {/* Search Bar */}
            <div className="relative mb-6">
              <Search className="absolute left-4 top-1/2 transform -translate-y-1/2 h-5 w-5 text-gray-400" />
              <input
                type="text"
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                placeholder={
                  language === "km"
                    ? "ស្វែងរកកន្លែងស្នាក់នៅ..."
                    : "Search accommodation..."
                }
                className="w-full pl-12 pr-4 py-4 rounded-xl border border-gray-300 focus:outline-none focus:ring-2 focus:ring-koh-rong-500 focus:border-transparent transition-all text-lg"
              />
            </div>

            {/* Filters */}
            <div className="grid md:grid-cols-5 gap-6 items-end">
              <div>
                <label className="block text-sm font-semibold text-gray-700 mb-2">
                  <MapPin className="inline h-4 w-4 mr-1" />
                  {language === "km" ? "ឆ្នេរ/តំបន់" : "Beach/Area"}
                </label>
                <select
                  value={selectedBeach}
                  onChange={(e) => setSelectedBeach(e.target.value)}
                  className="w-full px-4 py-3 rounded-xl border border-gray-300 focus:outline-none focus:ring-2 focus:ring-koh-rong-500 focus:border-transparent transition-all"
                >
                  {beaches.map((beach) => (
                    <option key={beach.id} value={beach.id}>
                      {beach.name}
                    </option>
                  ))}
                </select>
              </div>

              <div>
                <label className="block text-sm font-semibold text-gray-700 mb-2">
                  <Home className="inline h-4 w-4 mr-1" />
                  {language === "km" ? "ប្រភេទ" : "Type"}
                </label>
                <select
                  value={selectedType}
                  onChange={(e) => setSelectedType(e.target.value)}
                  className="w-full px-4 py-3 rounded-xl border border-gray-300 focus:outline-none focus:ring-2 focus:ring-koh-rong-500 focus:border-transparent transition-all"
                >
                  {accommodationTypes.map((type) => (
                    <option key={type.id} value={type.id}>
                      {type.name}
                    </option>
                  ))}
                </select>
              </div>

              <div>
                <label className="block text-sm font-semibold text-gray-700 mb-2">
                  <DollarSign className="inline h-4 w-4 mr-1" />
                  {language === "km" ? "ថវិកា" : "Budget"}
                </label>
                <select
                  value={selectedPriceRange}
                  onChange={(e) => setSelectedPriceRange(e.target.value)}
                  className="w-full px-4 py-3 rounded-xl border border-gray-300 focus:outline-none focus:ring-2 focus:ring-koh-rong-500 focus:border-transparent transition-all"
                >
                  {priceRanges.map((range) => (
                    <option key={range.id} value={range.id}>
                      {range.name}
                    </option>
                  ))}
                </select>
              </div>
              <div>
                <label className="block text-sm font-semibold text-gray-700 mb-2">
                  <MapPin className="inline h-4 w-4 mr-1" />
                  {language === "km" ? "ភូមិ" : "Village"}
                </label>
                <select
                  value={selectedVillage}
                  onChange={(e) => setSelectedVillage(e.target.value)}
                  className="w-full px-4 py-3 rounded-xl border border-gray-300 focus:outline-none focus:ring-2 focus:ring-koh-rong-500 focus:border-transparent transition-all"
                >
                  {villages.map((village) => (
                    <option key={village.id} value={village.id}>
                      {village.name}
                    </option>
                  ))}
                </select>
              </div>
              <div>
                <button
                  onClick={handleFilter}
                  className="w-full flex items-center justify-center space-x-2 bg-koh-rong-500 hover:bg-koh-rong-600 text-white px-4 py-3 rounded-xl font-semibold transition-colors"
                >
                  <Search className="h-5 w-5" />
                  <span>{language === "km" ? "ស្វែងរក" : "Search"}</span>
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Accommodations Listing */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Results Info */}
          <div className="mb-8">
            <h2 className="text-2xl font-bold text-gray-900 mb-2">
              {language === "km"
                ? `ទទួលបានលទ្ធផល ${filteredAccommodations.length} កន្លែង`
                : `Found ${filteredAccommodations.length} accommodations`}
            </h2>
            {appliedFilters.term && (
              <p className="text-gray-600">
                {language === "km"
                  ? `លទ្ធផលសម្រាប់ "${appliedFilters.term}"`
                  : `Results for "${appliedFilters.term}"`}
              </p>
            )}
          </div>

          {/* Accommodations Grid */}
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredAccommodations.map((accommodation) => (
              <div
                key={accommodation.id}
                onClick={() => onAccommodationItemClick(accommodation)} // Call the prop function
                className="bg-white rounded-3xl shadow-lg overflow-hidden hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2 cursor-pointer"
              >
                <div className="relative">
                  <img
                    src={accommodation.image}
                    alt={
                      language === "km"
                        ? accommodation.name
                        : accommodation.nameEn
                    }
                    className="w-full h-48 object-cover"
                  />
                  <div className="absolute top-4 left-4">
                    <span className="bg-gradient-to-r from-koh-rong-500 to-koh-rong-600 text-white px-3 py-1 rounded-full text-sm font-semibold">
                      {language === "km"
                        ? accommodation.typeEn
                        : accommodation.typeEn}
                    </span>
                  </div>
                  <div className="absolute top-4 right-4">
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
                  <div className="absolute bottom-4 right-4">
                    <div className="bg-white/90 backdrop-blur-sm rounded-full px-3 py-1 flex items-center space-x-1">
                      <Star className="h-4 w-4 text-yellow-500 fill-current" />
                      <span className="text-sm font-semibold text-gray-800">
                        {accommodation.rating}
                      </span>
                      <span className="text-xs text-gray-600">
                        ({accommodation.reviews})
                      </span>
                    </div>
                  </div>
                </div>

                <div className="p-6">
                  <h3 className="text-xl font-bold text-gray-900 mb-2">
                    {language === "km"
                      ? accommodation.name
                      : accommodation.nameEn}
                  </h3>
                  <div className="flex items-center space-x-2 text-gray-600 mb-3">
                    <MapPin className="h-4 w-4" />
                    <span className="text-sm">
                      {language === "km"
                        ? accommodation.beachEn
                        : accommodation.beachEn}
                    </span>
                  </div>
                  <p className="text-gray-600 mb-4 leading-relaxed line-clamp-2">
                    {language === "km"
                      ? accommodation.description
                      : accommodation.descriptionEn}
                  </p>

                  {/* Features */}
                  <div className="mb-4">
                    <div className="flex flex-wrap gap-2">
                      {(language === "km"
                        ? accommodation.features
                        : accommodation.featuresEn
                      )
                        .slice(0, 3)
                        .map((feature, index) => (
                          <span
                            key={index}
                            className="bg-gray-100 text-gray-700 px-2 py-1 rounded-full text-xs"
                          >
                            {feature}
                          </span>
                        ))}
                      {accommodation.features.length > 3 && (
                        <span className="text-xs text-gray-500">
                          +{accommodation.features.length - 3}{" "}
                          {language === "km" ? "ផ្សេងទៀត" : "more"}
                        </span>
                      )}
                    </div>
                  </div>

                  <div className="flex items-center justify-between">
                    <div>
                      <span className="text-2xl font-bold text-koh-rong-600">
                        {accommodation.price}
                      </span>
                      <span className="text-gray-600 text-sm">
                        /{language === "km" ? "យប់" : "night"}
                      </span>
                    </div>
                    <button
                      onClick={() => onAccommodationItemClick(accommodation)}
                      className="bg-gradient-to-r from-koh-rong-500 to-koh-rong-600 hover:from-koh-rong-600 hover:to-koh-rong-700 text-white px-4 py-2 rounded-xl font-semibold transition-all duration-300 transform hover:scale-105"
                    >
                      {language === "km" ? "មើលលម្អិត" : "View Details"}
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* No Results */}
          {filteredAccommodations.length === 0 && (
            <div className="text-center py-16">
              <div className="bg-gray-100 rounded-full p-6 w-24 h-24 mx-auto mb-6 flex items-center justify-center">
                <Home className="h-12 w-12 text-gray-400" />
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-4">
                {language === "km"
                  ? "រកមិនឃើញកន្លែងស្នាក់នៅ"
                  : "No Accommodations Found"}
              </h3>
              <p className="text-gray-600 mb-6">
                {language === "km"
                  ? "សូមព្យាយាមស្វែងរកដោយប្រើលក្ខខណ្ឌផ្សេង"
                  : "Try searching with different criteria"}
              </p>
              <button
                onClick={() => {
                  setSearchTerm("");
                  setSelectedBeach("all");
                  setSelectedType("all");
                  setSelectedPriceRange("all");
                  setSelectedVillage("all");
                  setAppliedFilters({
                    beach: "all",
                    type: "all",
                    priceRange: "all",
                    village: "all",
                    term: "",
                  });
                }}
                className="bg-koh-rong-500 hover:bg-koh-rong-600 text-white px-6 py-3 rounded-full font-semibold transition-colors"
              >
                {language === "km" ? "សម្អាតការស្វែងរក" : "Clear Filters"}
              </button>
            </div>
          )}
        </div>
      </section>

      {/* Footer is rendered at the App level */}
      <section className="py-20 bg-gradient-to-r from-koh-rong-500 to-koh-rong-600">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center text-white">
          <h2 className="text-4xl font-bold mb-6">
            {language === "km" ? "ត្រូវការជំនួយ?" : "Need Help?"}
          </h2>
          <p className="text-xl mb-8 opacity-90">
            {language === "km"
              ? "ខ្ញុំរីករាយក្នុងការជួយអ្នកស្វែងរកកន្លែងស្នាក់នៅដ៏ល្អបំផុត"
              : "I'm happy to help you find the perfect accommodation"}
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
    </div>
  );
};

export default AccommodationPage;
