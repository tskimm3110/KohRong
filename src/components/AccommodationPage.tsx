import React, { useState } from 'react';
import { ArrowLeft, Home, MapPin, Star, DollarSign, Users, Wifi, Car, Coffee, Waves, Filter, Search, Phone, Mail, Calendar, CheckCircle, Heart, Eye } from 'lucide-react';
import { useLanguage } from '../contexts/LanguageContext';
import Footer from './Footer';

interface AccommodationPageProps {
  onBack: () => void;
}

interface Accommodation {
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

const AccommodationPage: React.FC<AccommodationPageProps> = ({ onBack }) => {
  const { language } = useLanguage();
  const [selectedBeach, setSelectedBeach] = useState('all');
  const [selectedType, setSelectedType] = useState('all');
  const [selectedPriceRange, setSelectedPriceRange] = useState('all');
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedAccommodation, setSelectedAccommodation] = useState<Accommodation | null>(null);

  const beaches = [
    { id: 'all', name: language === 'km' ? 'ឆ្នេរទាំងអស់' : 'All Beaches' },
    { id: 'koh-touch', name: language === 'km' ? 'កោះតូច' : 'Koh Touch' },
    { id: 'sok-san', name: language === 'km' ? 'សុខសាន្ត' : 'Sok San Beach' },
    { id: 'long-set', name: language === 'km' ? 'ឡុងសិត' : 'Long Set Beach' },
    { id: 'coconut', name: language === 'km' ? 'ដូង' : 'Coconut Beach' }
  ];

  const accommodationTypes = [
    { id: 'all', name: language === 'km' ? 'ប្រភេទទាំងអស់' : 'All Types' },
    { id: 'resort', name: language === 'km' ? 'រីសត' : 'Resort' },
    { id: 'hotel', name: language === 'km' ? 'សណ្ឋាគារ' : 'Hotel' },
    { id: 'bungalow', name: language === 'km' ? 'បុងហ្គាឡូ' : 'Bungalow' },
    { id: 'guesthouse', name: language === 'km' ? 'ផ្ទះសំណាក់' : 'Guesthouse' },
    { id: 'hostel', name: language === 'km' ? 'ហូស្តែល' : 'Hostel' }
  ];

  const priceRanges = [
    { id: 'all', name: language === 'km' ? 'តម្លៃទាំងអស់' : 'All Prices' },
    { id: 'budget', name: language === 'km' ? 'ថវិកាតិច ($10-30)' : 'Budget ($10-30)' },
    { id: 'mid', name: language === 'km' ? 'មធ្យម ($30-80)' : 'Mid-range ($30-80)' },
    { id: 'luxury', name: language === 'km' ? 'ប្រណីត ($80+)' : 'Luxury ($80+)' }
  ];

  const accommodations: Accommodation[] = [
    {
      id: 1,
      name: 'សុខសាន្ត បេច រីសត',
      nameEn: 'Sok San Beach Resort',
      type: 'resort',
      typeEn: 'Resort',
      beach: 'sok-san',
      beachEn: 'Sok San Beach',
      price: '$120-200',
      priceRange: 'luxury',
      rating: 4.8,
      reviews: 324,
      description: 'រីសតប្រណីតនៅឆ្នេរសុខសាន្ត ជាមួយនឹងបន្ទប់ទំនើប និងសេវាកម្មល្អបំផុត។ មានអាងហែលទឹក ភោជនីយដ្ឋាន និងស្ប៉ា។',
      descriptionEn: 'Luxury resort at Sok San Beach with modern rooms and excellent service. Features swimming pool, restaurant, and spa.',
      features: ['អាងហែលទឹក', 'ភោជនីយដ្ឋាន', 'ស្ប៉ា', 'Wi-Fi ឥតគិតថ្លៃ', 'កន្លែងចតរថយន្ត', 'បន្ទប់ទំនើប'],
      featuresEn: ['Swimming Pool', 'Restaurant', 'Spa', 'Free Wi-Fi', 'Parking', 'Modern Rooms'],
      image: 'https://images.pexels.com/photos/1659438/pexels-photo-1659438.jpeg?auto=compress&cs=tinysrgb&w=800',
      gallery: [
        'https://images.pexels.com/photos/1659438/pexels-photo-1659438.jpeg?auto=compress&cs=tinysrgb&w=800',
        'https://images.pexels.com/photos/1371360/pexels-photo-1371360.jpeg?auto=compress&cs=tinysrgb&w=800',
        'https://images.pexels.com/photos/1640777/pexels-photo-1640777.jpeg?auto=compress&cs=tinysrgb&w=800'
      ],
      contact: {
        phone: '012 345 678',
        email: 'info@soksanresort.com',
        website: 'www.soksanresort.com'
      },
      coordinates: { lat: 10.6297, lng: 103.2943 },
      availability: true
    },
    {
      id: 2,
      name: 'កោះតូច បេច បុងហ្គាឡូ',
      nameEn: 'Koh Touch Beach Bungalows',
      type: 'bungalow',
      typeEn: 'Bungalow',
      beach: 'koh-touch',
      beachEn: 'Koh Touch',
      price: '$25-45',
      priceRange: 'mid',
      rating: 4.3,
      reviews: 189,
      description: 'បុងហ្គាឡូបែបប្រពៃណីនៅឆ្នេរកោះតូច ជិតភោជនីយដ្ឋាន និងកំពង់ផែទូក។ បរិយាកាសស្ងប់ស្ងាត់ និងតម្លៃសមរម្យ។',
      descriptionEn: 'Traditional bungalows at Koh Touch beach, close to restaurants and boat pier. Peaceful atmosphere and reasonable prices.',
      features: ['ជិតឆ្នេរ', 'ភោជនីយដ្ឋាន', 'Wi-Fi', 'បន្ទប់ទឹកឯកជន', 'កន្លែងអង្គុយ'],
      featuresEn: ['Near Beach', 'Restaurant', 'Wi-Fi', 'Private Bathroom', 'Seating Area'],
      image: 'https://images.pexels.com/photos/1371360/pexels-photo-1371360.jpeg?auto=compress&cs=tinysrgb&w=800',
      gallery: [
        'https://images.pexels.com/photos/1371360/pexels-photo-1371360.jpeg?auto=compress&cs=tinysrgb&w=800',
        'https://images.pexels.com/photos/1640777/pexels-photo-1640777.jpeg?auto=compress&cs=tinysrgb&w=800',
        'https://images.pexels.com/photos/1450361/pexels-photo-1450361.jpeg?auto=compress&cs=tinysrgb&w=800'
      ],
      contact: {
        phone: '017 888 999',
        email: 'kohtouchbungalows@gmail.com'
      },
      coordinates: { lat: 10.6156, lng: 103.2821 },
      availability: true
    },
    {
      id: 3,
      name: 'ឡុងសិត ហូស្តែល',
      nameEn: 'Long Set Hostel',
      type: 'hostel',
      typeEn: 'Hostel',
      beach: 'long-set',
      beachEn: 'Long Set Beach',
      price: '$12-25',
      priceRange: 'budget',
      rating: 4.1,
      reviews: 156,
      description: 'ហូស្តែលសម្រាប់អ្នកធ្វើដំណើរថវិកាតិច។ មានបន្ទប់រួម និងបន្ទប់ឯកជន។ បរិយាកាសមិត្តភាព និងជួបប្រជាពលរដ្ឋ។',
      descriptionEn: 'Budget hostel for backpackers. Shared and private rooms available. Friendly atmosphere and meet locals.',
      features: ['បន្ទប់រួម', 'បន្ទប់ឯកជន', 'ផ្ទះបាយរួម', 'Wi-Fi', 'ជិតឆ្នេរ'],
      featuresEn: ['Shared Rooms', 'Private Rooms', 'Shared Kitchen', 'Wi-Fi', 'Near Beach'],
      image: 'https://images.pexels.com/photos/1640777/pexels-photo-1640777.jpeg?auto=compress&cs=tinysrgb&w=800',
      gallery: [
        'https://images.pexels.com/photos/1640777/pexels-photo-1640777.jpeg?auto=compress&cs=tinysrgb&w=800',
        'https://images.pexels.com/photos/1450361/pexels-photo-1450361.jpeg?auto=compress&cs=tinysrgb&w=800',
        'https://images.pexels.com/photos/1371360/pexels-photo-1371360.jpeg?auto=compress&cs=tinysrgb&w=800'
      ],
      contact: {
        phone: '010 123 456',
        email: 'longsethostel@gmail.com'
      },
      coordinates: { lat: 10.6089, lng: 103.2756 },
      availability: true
    },
    {
      id: 4,
      name: 'ដូង បេច វីឡា',
      nameEn: 'Coconut Beach Villa',
      type: 'hotel',
      typeEn: 'Hotel',
      beach: 'coconut',
      beachEn: 'Coconut Beach',
      price: '$60-90',
      priceRange: 'mid',
      rating: 4.5,
      reviews: 98,
      description: 'វីឡាទំនើបនៅឆ្នេរដូង ជាមួយនឹងទិដ្ឋភាពសមុទ្រស្រស់ស្អាត។ កន្លែងស្ងប់ស្ងាត់ ល្អសម្រាប់ការសម្រាក។',
      descriptionEn: 'Modern villa at Coconut Beach with beautiful ocean views. Quiet location perfect for relaxation.',
      features: ['ទិដ្ឋភាពសមុទ្រ', 'បន្ទប់ទំនើប', 'ភោជនីយដ្ឋាន', 'Wi-Fi', 'កន្លែងចតរថយន្ត'],
      featuresEn: ['Ocean View', 'Modern Rooms', 'Restaurant', 'Wi-Fi', 'Parking'],
      image: 'https://images.pexels.com/photos/1450361/pexels-photo-1450361.jpeg?auto=compress&cs=tinysrgb&w=800',
      gallery: [
        'https://images.pexels.com/photos/1450361/pexels-photo-1450361.jpeg?auto=compress&cs=tinysrgb&w=800',
        'https://images.pexels.com/photos/1659438/pexels-photo-1659438.jpeg?auto=compress&cs=tinysrgb&w=800',
        'https://images.pexels.com/photos/1640777/pexels-photo-1640777.jpeg?auto=compress&cs=tinysrgb&w=800'
      ],
      contact: {
        phone: '092 567 890',
        email: 'coconutbeachvilla@gmail.com'
      },
      coordinates: { lat: 10.6234, lng: 103.2889 },
      availability: false
    },
    {
      id: 5,
      name: 'កោះរ៉ុង ហីល រីសត',
      nameEn: 'Koh Rong Hill Resort',
      type: 'resort',
      typeEn: 'Resort',
      beach: 'sok-san',
      beachEn: 'Sok San Beach',
      price: '$150-250',
      priceRange: 'luxury',
      rating: 4.9,
      reviews: 267,
      description: 'រីសតប្រណីតបំផុតនៅកោះរ៉ុង ស្ថិតនៅលើភ្នំតូច ជាមួយទិដ្ឋភាព ៣៦០ ដឺក្រេ។ សេវាកម្មកម្រិតពិភពលោក។',
      descriptionEn: 'Most luxurious resort on Koh Rong, located on a small hill with 360-degree views. World-class service.',
      features: ['ទិដ្ឋភាព ៣៦០ ដឺក្រេ', 'អាងហែលទឹកអាកាស', 'ស្ប៉ាពេញលេញ', 'ភោជនីយដ្ឋានច្រើន', 'សេវាកម្មឯកជន'],
      featuresEn: ['360° Views', 'Infinity Pool', 'Full Spa', 'Multiple Restaurants', 'Private Service'],
      image: 'https://images.pexels.com/photos/1450360/pexels-photo-1450360.jpeg?auto=compress&cs=tinysrgb&w=800',
      gallery: [
        'https://images.pexels.com/photos/1450360/pexels-photo-1450360.jpeg?auto=compress&cs=tinysrgb&w=800',
        'https://images.pexels.com/photos/1659438/pexels-photo-1659438.jpeg?auto=compress&cs=tinysrgb&w=800',
        'https://images.pexels.com/photos/1371360/pexels-photo-1371360.jpeg?auto=compress&cs=tinysrgb&w=800'
      ],
      contact: {
        phone: '023 456 789',
        email: 'info@kohronghillresort.com',
        website: 'www.kohronghillresort.com'
      },
      coordinates: { lat: 10.6312, lng: 103.2967 },
      availability: true
    },
    {
      id: 6,
      name: 'កោះតូច ផ្ទះសំណាក់',
      nameEn: 'Koh Touch Guesthouse',
      type: 'guesthouse',
      typeEn: 'Guesthouse',
      beach: 'koh-touch',
      beachEn: 'Koh Touch',
      price: '$15-35',
      priceRange: 'budget',
      rating: 4.0,
      reviews: 134,
      description: 'ផ្ទះសំណាក់គ្រួសារនៅកោះតូច។ បរិយាកាសកក់ក្តៅ និងម្ចាស់ផ្ទះជាប្រជាពលរដ្ឋមូលដ្ឋាន។ តម្លៃសមរម្យ។',
      descriptionEn: 'Family guesthouse at Koh Touch. Warm atmosphere and local owners. Reasonable prices.',
      features: ['គ្រួសារមូលដ្ឋាន', 'បន្ទប់ស្អាត', 'ភោជនីយដ្ឋាន', 'Wi-Fi', 'ជិតកំពង់ផែ'],
      featuresEn: ['Local Family', 'Clean Rooms', 'Restaurant', 'Wi-Fi', 'Near Pier'],
      image: 'https://images.pexels.com/photos/1450363/pexels-photo-1450363.jpeg?auto=compress&cs=tinysrgb&w=800',
      gallery: [
        'https://images.pexels.com/photos/1450363/pexels-photo-1450363.jpeg?auto=compress&cs=tinysrgb&w=800',
        'https://images.pexels.com/photos/1371360/pexels-photo-1371360.jpeg?auto=compress&cs=tinysrgb&w=800',
        'https://images.pexels.com/photos/1640777/pexels-photo-1640777.jpeg?auto=compress&cs=tinysrgb&w=800'
      ],
      contact: {
        phone: '078 901 234',
        email: 'kohtouchguesthouse@gmail.com'
      },
      coordinates: { lat: 10.6145, lng: 103.2834 },
      availability: true
    }
  ];

  const filteredAccommodations = accommodations.filter(accommodation => {
    const beachMatch = selectedBeach === 'all' || accommodation.beach === selectedBeach;
    const typeMatch = selectedType === 'all' || accommodation.type === selectedType;
    const priceMatch = selectedPriceRange === 'all' || accommodation.priceRange === selectedPriceRange;
    const searchMatch = searchTerm === '' || 
      (language === 'km' ? accommodation.name : accommodation.nameEn).toLowerCase().includes(searchTerm.toLowerCase()) ||
      (language === 'km' ? accommodation.description : accommodation.descriptionEn).toLowerCase().includes(searchTerm.toLowerCase());
    
    return beachMatch && typeMatch && priceMatch && searchMatch;
  });

  const handleAccommodationClick = (accommodation: Accommodation) => {
    setSelectedAccommodation(accommodation);
  };

  const closeModal = () => {
    setSelectedAccommodation(null);
  };

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
            alt="Koh Rong Accommodation"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-koh-rong-600/80 to-blue-700/80"></div>
        </div>
        
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center text-white">
          <div className="flex justify-center mb-6">
            <div className="bg-white/20 backdrop-blur-sm rounded-full p-4">
              <Home className="h-12 w-12 text-white" />
            </div>
          </div>
          
          <h1 className="text-4xl md:text-6xl font-bold mb-6">
            {language === 'km' ? 'កន្លែងស្នាក់នៅកោះរ៉ុង' : 'Koh Rong Accommodation'}
          </h1>
          
          <p className="text-xl md:text-2xl mb-8 max-w-3xl mx-auto leading-relaxed">
            {language === 'km' 
              ? 'ស្វែងរកកន្លែងស្នាក់នៅដ៏ល្អបំផុតនៅកោះរ៉ុង ពីថវិកាតិចរហូតដល់ប្រណីត'
              : 'Find the best accommodation on Koh Rong, from budget to luxury'
            }
          </p>

          {/* Quick Stats */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mt-12">
            <div className="text-center">
              <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-6">
                <div className="text-3xl md:text-4xl font-bold mb-2">{accommodations.length}</div>
                <div className="text-lg font-semibold mb-1">
                  {language === 'km' ? 'កន្លែងស្នាក់នៅ' : 'Properties'}
                </div>
                <div className="text-sm opacity-90">
                  {language === 'km' ? 'ជម្រើសច្រើន' : 'Great choices'}
                </div>
              </div>
            </div>
            <div className="text-center">
              <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-6">
                <div className="text-3xl md:text-4xl font-bold mb-2">4</div>
                <div className="text-lg font-semibold mb-1">
                  {language === 'km' ? 'ឆ្នេរ' : 'Beaches'}
                </div>
                <div className="text-sm opacity-90">
                  {language === 'km' ? 'ទីតាំងផ្សេងៗ' : 'Different locations'}
                </div>
              </div>
            </div>
            <div className="text-center">
              <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-6">
                <div className="text-3xl md:text-4xl font-bold mb-2">$12+</div>
                <div className="text-lg font-semibold mb-1">
                  {language === 'km' ? 'តម្លៃចាប់ពី' : 'Starting from'}
                </div>
                <div className="text-sm opacity-90">
                  {language === 'km' ? 'ក្នុងមួយយប់' : 'Per night'}
                </div>
              </div>
            </div>
            <div className="text-center">
              <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-6">
                <div className="text-3xl md:text-4xl font-bold mb-2">4.4★</div>
                <div className="text-lg font-semibold mb-1">
                  {language === 'km' ? 'ការវាយតម្លៃ' : 'Average Rating'}
                </div>
                <div className="text-sm opacity-90">
                  {language === 'km' ? 'ពីភ្ញៀវ' : 'From guests'}
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
              {language === 'km' ? 'ស្វែងរកកន្លែងស្នាក់នៅ' : 'Find Your Perfect Stay'}
            </h2>
            
            {/* Search Bar */}
            <div className="relative mb-6">
              <Search className="absolute left-4 top-1/2 transform -translate-y-1/2 h-5 w-5 text-gray-400" />
              <input
                type="text"
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                placeholder={language === 'km' ? 'ស្វែងរកកន្លែងស្នាក់នៅ...' : 'Search accommodation...'}
                className="w-full pl-12 pr-4 py-4 rounded-xl border border-gray-300 focus:outline-none focus:ring-2 focus:ring-koh-rong-500 focus:border-transparent transition-all text-lg"
              />
            </div>

            {/* Filters */}
            <div className="grid md:grid-cols-3 gap-6">
              <div>
                <label className="block text-sm font-semibold text-gray-700 mb-2">
                  <MapPin className="inline h-4 w-4 mr-1" />
                  {language === 'km' ? 'ឆ្នេរ/តំបន់' : 'Beach/Area'}
                </label>
                <select
                  value={selectedBeach}
                  onChange={(e) => setSelectedBeach(e.target.value)}
                  className="w-full px-4 py-3 rounded-xl border border-gray-300 focus:outline-none focus:ring-2 focus:ring-koh-rong-500 focus:border-transparent transition-all"
                >
                  {beaches.map(beach => (
                    <option key={beach.id} value={beach.id}>{beach.name}</option>
                  ))}
                </select>
              </div>

              <div>
                <label className="block text-sm font-semibold text-gray-700 mb-2">
                  <Home className="inline h-4 w-4 mr-1" />
                  {language === 'km' ? 'ប្រភេទ' : 'Type'}
                </label>
                <select
                  value={selectedType}
                  onChange={(e) => setSelectedType(e.target.value)}
                  className="w-full px-4 py-3 rounded-xl border border-gray-300 focus:outline-none focus:ring-2 focus:ring-koh-rong-500 focus:border-transparent transition-all"
                >
                  {accommodationTypes.map(type => (
                    <option key={type.id} value={type.id}>{type.name}</option>
                  ))}
                </select>
              </div>

              <div>
                <label className="block text-sm font-semibold text-gray-700 mb-2">
                  <DollarSign className="inline h-4 w-4 mr-1" />
                  {language === 'km' ? 'ថវិកា' : 'Budget'}
                </label>
                <select
                  value={selectedPriceRange}
                  onChange={(e) => setSelectedPriceRange(e.target.value)}
                  className="w-full px-4 py-3 rounded-xl border border-gray-300 focus:outline-none focus:ring-2 focus:ring-koh-rong-500 focus:border-transparent transition-all"
                >
                  {priceRanges.map(range => (
                    <option key={range.id} value={range.id}>{range.name}</option>
                  ))}
                </select>
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
              {language === 'km' 
                ? `ទទួលបានលទ្ធផល ${filteredAccommodations.length} កន្លែង`
                : `Found ${filteredAccommodations.length} accommodations`
              }
            </h2>
            {searchTerm && (
              <p className="text-gray-600">
                {language === 'km' 
                  ? `លទ្ធផលសម្រាប់ "${searchTerm}"`
                  : `Results for "${searchTerm}"`
                }
              </p>
            )}
          </div>

          {/* Accommodations Grid */}
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredAccommodations.map((accommodation) => (
              <div 
                key={accommodation.id} 
                onClick={() => handleAccommodationClick(accommodation)}
                className="bg-white rounded-3xl shadow-lg overflow-hidden hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2 cursor-pointer"
              >
                <div className="relative">
                  <img
                    src={accommodation.image}
                    alt={language === 'km' ? accommodation.name : accommodation.nameEn}
                    className="w-full h-48 object-cover"
                  />
                  <div className="absolute top-4 left-4">
                    <span className="bg-gradient-to-r from-koh-rong-500 to-koh-rong-600 text-white px-3 py-1 rounded-full text-sm font-semibold">
                      {language === 'km' ? accommodation.typeEn : accommodation.typeEn}
                    </span>
                  </div>
                  <div className="absolute top-4 right-4">
                    <span className={`px-3 py-1 rounded-full text-sm font-semibold ${
                      accommodation.availability 
                        ? 'bg-green-100 text-green-800' 
                        : 'bg-red-100 text-red-800'
                    }`}>
                      {accommodation.availability 
                        ? (language === 'km' ? 'មាន' : 'Available')
                        : (language === 'km' ? 'អស់' : 'Booked')
                      }
                    </span>
                  </div>
                  <div className="absolute bottom-4 right-4">
                    <div className="bg-white/90 backdrop-blur-sm rounded-full px-3 py-1 flex items-center space-x-1">
                      <Star className="h-4 w-4 text-yellow-500 fill-current" />
                      <span className="text-sm font-semibold text-gray-800">{accommodation.rating}</span>
                      <span className="text-xs text-gray-600">({accommodation.reviews})</span>
                    </div>
                  </div>
                </div>

                <div className="p-6">
                  <h3 className="text-xl font-bold text-gray-900 mb-2">
                    {language === 'km' ? accommodation.name : accommodation.nameEn}
                  </h3>
                  <div className="flex items-center space-x-2 text-gray-600 mb-3">
                    <MapPin className="h-4 w-4" />
                    <span className="text-sm">
                      {language === 'km' ? accommodation.beachEn : accommodation.beachEn}
                    </span>
                  </div>
                  <p className="text-gray-600 mb-4 leading-relaxed line-clamp-2">
                    {language === 'km' ? accommodation.description : accommodation.descriptionEn}
                  </p>

                  {/* Features */}
                  <div className="mb-4">
                    <div className="flex flex-wrap gap-2">
                      {(language === 'km' ? accommodation.features : accommodation.featuresEn).slice(0, 3).map((feature, index) => (
                        <span key={index} className="bg-gray-100 text-gray-700 px-2 py-1 rounded-full text-xs">
                          {feature}
                        </span>
                      ))}
                      {accommodation.features.length > 3 && (
                        <span className="text-xs text-gray-500">
                          +{accommodation.features.length - 3} {language === 'km' ? 'ផ្សេងទៀត' : 'more'}
                        </span>
                      )}
                    </div>
                  </div>

                  <div className="flex items-center justify-between">
                    <div>
                      <span className="text-2xl font-bold text-koh-rong-600">{accommodation.price}</span>
                      <span className="text-gray-600 text-sm">/{language === 'km' ? 'យប់' : 'night'}</span>
                    </div>
                    <button className="bg-gradient-to-r from-koh-rong-500 to-koh-rong-600 hover:from-koh-rong-600 hover:to-koh-rong-700 text-white px-4 py-2 rounded-xl font-semibold transition-all duration-300 transform hover:scale-105">
                      {language === 'km' ? 'មើលលម្អិត' : 'View Details'}
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
                {language === 'km' ? 'រកមិនឃើញកន្លែងស្នាក់នៅ' : 'No Accommodations Found'}
              </h3>
              <p className="text-gray-600 mb-6">
                {language === 'km' 
                  ? 'សូមព្យាយាមស្វែងរកដោយប្រើលក្ខខណ្ឌផ្សេង'
                  : 'Try searching with different criteria'
                }
              </p>
              <button
                onClick={() => {
                  setSearchTerm('');
                  setSelectedBeach('all');
                  setSelectedType('all');
                  setSelectedPriceRange('all');
                }}
                className="bg-koh-rong-500 hover:bg-koh-rong-600 text-white px-6 py-3 rounded-full font-semibold transition-colors"
              >
                {language === 'km' ? 'សម្អាតការស្វែងរក' : 'Clear Filters'}
              </button>
            </div>
          )}
        </div>
      </section>

      {/* Accommodation Details Modal */}
      {selectedAccommodation && (
        <div className="fixed inset-0 bg-black bg-opacity-50 z-50 flex items-center justify-center p-4">
          <div className="bg-white rounded-3xl max-w-4xl w-full max-h-[90vh] overflow-y-auto">
            {/* Modal Header */}
            <div className="sticky top-0 bg-white border-b border-gray-200 p-6 flex justify-between items-center rounded-t-3xl">
              <h2 className="text-2xl font-bold text-gray-900">
                {language === 'km' ? selectedAccommodation.name : selectedAccommodation.nameEn}
              </h2>
              <button
                onClick={closeModal}
                className="p-2 hover:bg-gray-100 rounded-full transition-colors"
              >
                <ArrowLeft className="h-6 w-6 text-gray-600" />
              </button>
            </div>

            {/* Modal Content */}
            <div className="p-6">
              {/* Image Gallery */}
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-8">
                <div className="md:col-span-2">
                  <img
                    src={selectedAccommodation.image}
                    alt={language === 'km' ? selectedAccommodation.name : selectedAccommodation.nameEn}
                    className="w-full h-64 md:h-80 object-cover rounded-2xl"
                  />
                </div>
                <div className="space-y-4">
                  {selectedAccommodation.gallery.slice(1, 3).map((img, index) => (
                    <img
                      key={index}
                      src={img}
                      alt={`${selectedAccommodation.name} ${index + 2}`}
                      className="w-full h-36 md:h-36 object-cover rounded-2xl"
                    />
                  ))}
                </div>
              </div>

              {/* Basic Info */}
              <div className="grid md:grid-cols-2 gap-8 mb-8">
                <div>
                  <h3 className="text-xl font-bold text-gray-900 mb-4">
                    {language === 'km' ? 'ព័ត៌មានទូទៅ' : 'General Information'}
                  </h3>
                  <div className="space-y-3">
                    <div className="flex justify-between items-center">
                      <span className="text-gray-600">{language === 'km' ? 'ប្រភេទ' : 'Type'}:</span>
                      <span className="font-semibold">{selectedAccommodation.typeEn}</span>
                    </div>
                    <div className="flex justify-between items-center">
                      <span className="text-gray-600">{language === 'km' ? 'ទីតាំង' : 'Location'}:</span>
                      <span className="font-semibold">{selectedAccommodation.beachEn}</span>
                    </div>
                    <div className="flex justify-between items-center">
                      <span className="text-gray-600">{language === 'km' ? 'តម្លៃ' : 'Price'}:</span>
                      <span className="font-bold text-2xl text-koh-rong-600">{selectedAccommodation.price}</span>
                    </div>
                    <div className="flex justify-between items-center">
                      <span className="text-gray-600">{language === 'km' ? 'ការវាយតម្លៃ' : 'Rating'}:</span>
                      <div className="flex items-center space-x-1">
                        <Star className="h-4 w-4 text-yellow-500 fill-current" />
                        <span className="font-semibold">{selectedAccommodation.rating}</span>
                        <span className="text-gray-500">({selectedAccommodation.reviews} reviews)</span>
                      </div>
                    </div>
                    <div className="flex justify-between items-center">
                      <span className="text-gray-600">{language === 'km' ? 'ស្ថានភាព' : 'Availability'}:</span>
                      <span className={`px-3 py-1 rounded-full text-sm font-semibold ${
                        selectedAccommodation.availability 
                          ? 'bg-green-100 text-green-800' 
                          : 'bg-red-100 text-red-800'
                      }`}>
                        {selectedAccommodation.availability 
                          ? (language === 'km' ? 'មាន' : 'Available')
                          : (language === 'km' ? 'អស់' : 'Booked')
                        }
                      </span>
                    </div>
                  </div>
                </div>

                <div>
                  <h3 className="text-xl font-bold text-gray-900 mb-4">
                    {language === 'km' ? 'ទំនាក់ទំនង' : 'Contact Information'}
                  </h3>
                  <div className="space-y-3">
                    <div className="flex items-center space-x-3">
                      <Phone className="h-5 w-5 text-koh-rong-500" />
                      <a 
                        href={`tel:${selectedAccommodation.contact.phone}`}
                        className="text-koh-rong-600 hover:text-koh-rong-700 transition-colors"
                      >
                        {selectedAccommodation.contact.phone}
                      </a>
                    </div>
                    <div className="flex items-center space-x-3">
                      <Mail className="h-5 w-5 text-koh-rong-500" />
                      <a 
                        href={`mailto:${selectedAccommodation.contact.email}`}
                        className="text-koh-rong-600 hover:text-koh-rong-700 transition-colors"
                      >
                        {selectedAccommodation.contact.email}
                      </a>
                    </div>
                    {selectedAccommodation.contact.website && (
                      <div className="flex items-center space-x-3">
                        <Wifi className="h-5 w-5 text-koh-rong-500" />
                        <a 
                          href={`https://${selectedAccommodation.contact.website}`}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="text-koh-rong-600 hover:text-koh-rong-700 transition-colors"
                        >
                          {selectedAccommodation.contact.website}
                        </a>
                      </div>
                    )}
                  </div>
                </div>
              </div>

              {/* Description */}
              <div className="mb-8">
                <h3 className="text-xl font-bold text-gray-900 mb-4">
                  {language === 'km' ? 'ការពិពណ៌នា' : 'Description'}
                </h3>
                <p className="text-gray-600 leading-relaxed">
                  {language === 'km' ? selectedAccommodation.description : selectedAccommodation.descriptionEn}
                </p>
              </div>

              {/* Features */}
              <div className="mb-8">
                <h3 className="text-xl font-bold text-gray-900 mb-4">
                  {language === 'km' ? 'លក្ខណៈពិសេស' : 'Features & Amenities'}
                </h3>
                <div className="grid md:grid-cols-2 gap-4">
                  {(language === 'km' ? selectedAccommodation.features : selectedAccommodation.featuresEn).map((feature, index) => (
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
                  {language === 'km' ? 'កក់ទុកឥឡូវ!' : 'Book Now!'}
                </h3>
                <div className="flex flex-col sm:flex-row gap-4 justify-center">
                  <a 
                    href={`tel:${selectedAccommodation.contact.phone}`}
                    className="bg-gradient-to-r from-koh-rong-500 to-koh-rong-600 hover:from-koh-rong-600 hover:to-koh-rong-700 text-white px-6 py-3 rounded-xl font-semibold transition-all duration-300 transform hover:scale-105 flex items-center justify-center space-x-2"
                  >
                    <Phone className="h-5 w-5" />
                    <span>{language === 'km' ? 'ទូរស័ព្ទឥឡូវ' : 'Call Now'}</span>
                  </a>
                  <a 
                    href={`mailto:${selectedAccommodation.contact.email}?subject=Booking Inquiry - ${selectedAccommodation.nameEn}`}
                    className="border-2 border-koh-rong-500 text-koh-rong-600 hover:bg-koh-rong-500 hover:text-white px-6 py-3 rounded-xl font-semibold transition-all duration-300 flex items-center justify-center space-x-2"
                  >
                    <Mail className="h-5 w-5" />
                    <span>{language === 'km' ? 'ផ្ញើអ៊ីមែល' : 'Send Email'}</span>
                  </a>
                </div>
                <p className="text-center text-sm text-gray-600 mt-4">
                  {language === 'km' 
                    ? 'ទាក់ទងផ្ទាល់ដើម្បីទទួលបានតម្លៃល្អបំផុត'
                    : 'Contact directly for best rates and availability'
                  }
                </p>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* Call to Action */}
      <section className="py-20 bg-gradient-to-r from-koh-rong-500 to-koh-rong-600">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center text-white">
          <h2 className="text-4xl font-bold mb-6">
            {language === 'km' ? 'ត្រូវការជំនួយ?' : 'Need Help?'}
          </h2>
          <p className="text-xl mb-8 opacity-90">
            {language === 'km' 
              ? 'ខ្ញុំរីករាយក្នុងការជួយអ្នកស្វែងរកកន្លែងស្នាក់នៅដ៏ល្អបំផុត'
              : 'I\'m happy to help you find the perfect accommodation'
            }
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a 
              href="tel:010820486"
              className="bg-white text-koh-rong-600 px-8 py-4 rounded-full font-semibold hover:bg-gray-100 transition-colors inline-flex items-center justify-center space-x-2"
            >
              <Phone className="h-5 w-5" />
              <span>{language === 'km' ? 'ទូរស័ព្ទឥឡូវ' : 'Call Now'}</span>
            </a>
            <a 
              href="mailto:chhaileang27@gmail.com"
              className="border-2 border-white text-white px-8 py-4 rounded-full font-semibold hover:bg-white hover:text-koh-rong-600 transition-colors inline-flex items-center justify-center space-x-2"
            >
              <Mail className="h-5 w-5" />
              <span>{language === 'km' ? 'ផ្ញើអ៊ីមែល' : 'Send Email'}</span>
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

export default AccommodationPage;