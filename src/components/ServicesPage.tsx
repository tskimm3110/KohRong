import React, { useState } from 'react';
import { ArrowLeft, Car, Bike, Anchor, Ship, Ticket, ShoppingBag, Phone, Mail, MapPin, Star, Clock, Users, DollarSign, CheckCircle, Heart, MessageCircle, Calendar, ArrowRight, Search, Filter, Waves, Navigation } from 'lucide-react';
import { useLanguage } from '../contexts/LanguageContext';
import Footer from './Footer';

interface ServicesPageProps {
  onBack: () => void;
}

interface Service {
  id: number;
  name: string;
  nameEn: string;
  category: string;
  categoryEn: string;
  description: string;
  descriptionEn: string;
  price: string;
  priceEn: string;
  duration: string;
  durationEn: string;
  capacity: string;
  capacityEn: string;
  features: string[];
  featuresEn: string[];
  image: string;
  gallery: string[];
  contact: {
    name: string;
    nameEn: string;
    phone: string;
    email?: string;
    location: string;
    locationEn: string;
  };
  rating: number;
  reviews: number;
  availability: boolean;
  popular: boolean;
}

const ServicesPage: React.FC<ServicesPageProps> = ({ onBack }) => {
  const { language } = useLanguage();
  const [selectedCategory, setSelectedCategory] = useState('all');
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedService, setSelectedService] = useState<Service | null>(null);

  const categories = [
    { id: 'all', name: language === 'km' ? 'សេវាកម្មទាំងអស់' : 'All Services', icon: ShoppingBag },
    { id: 'motorbike', name: language === 'km' ? 'ជួលម៉ូតូ' : 'Motorbike Rental', icon: Bike },
    { id: 'car', name: language === 'km' ? 'ជួលឡាន' : 'Car Rental', icon: Car },
    { id: 'taxi', name: language === 'km' ? 'តាក់ស៊ី' : 'Taxi Service', icon: Navigation },
    { id: 'boat', name: language === 'km' ? 'សេវាកម្មទូក' : 'Boat Services', icon: Anchor },
    { id: 'watersports', name: language === 'km' ? 'កីឡាទឹក' : 'Water Sports', icon: Waves },
    { id: 'tickets', name: language === 'km' ? 'កក់សំបុត្រ' : 'Ticket Booking', icon: Ticket }
  ];

  const services: Service[] = [
    {
      id: 1,
      name: 'ជួលម៉ូតូ',
      nameEn: 'Motorbike Rental',
      category: 'motorbike',
      categoryEn: 'Motorbike Rental',
      description: 'ម៉ូតូស្ថានភាពល្អសម្រាប់ដើរលេងកោះរ៉ុង។ មានសុវត្ថិភាពខ្ពស់ និងសន្សំប្រេង។ ល្អសម្រាប់ការធ្វើដំណើរជុំវិញកោះ។',
      descriptionEn: 'Good condition motorbikes for exploring Koh Rong. High safety and fuel efficient. Perfect for traveling around the island.',
      price: '$10-15',
      priceEn: '$10-15',
      duration: 'ក្នុងមួយថ្ងៃ',
      durationEn: 'Per day',
      capacity: '១-២ នាក់',
      capacityEn: '1-2 people',
      features: ['មួកសុវត្ថិភាព', 'ប្រេងពេញ', 'ការធានារ៉ាប់រង', 'ការណែនាំផ្លូវ', 'ជួសជុលឥតគិតថ្លៃ'],
      featuresEn: ['Safety helmets', 'Full tank', 'Insurance', 'Route guidance', 'Free repairs'],
      image: 'https://images.pexels.com/photos/1371360/pexels-photo-1371360.jpeg?auto=compress&cs=tinysrgb&w=800',
      gallery: [
        'https://images.pexels.com/photos/1371360/pexels-photo-1371360.jpeg?auto=compress&cs=tinysrgb&w=800',
        'https://images.pexels.com/photos/1640777/pexels-photo-1640777.jpeg?auto=compress&cs=tinysrgb&w=800'
      ],
      contact: {
        name: 'លោក សុខា',
        nameEn: 'Mr. Sokha',
        phone: '012 345 678',
        email: 'sokha.motorbike@gmail.com',
        location: 'កោះតូច',
        locationEn: 'Koh Touch'
      },
      rating: 4.5,
      reviews: 89,
      availability: true,
      popular: true
    },
    {
      id: 2,
      name: 'សេវាកម្មតាក់ស៊ី',
      nameEn: 'Taxi Service',
      category: 'taxi',
      categoryEn: 'Taxi Service',
      description: 'សេវាកម្មតាក់ស៊ីជាមួយអ្នកបើកបរមានបទពិសោធន៍។ ទៅតាមទីតាំងផ្សេងៗនៅកោះរ៉ុង និងព្រះសីហនុ។',
      descriptionEn: 'Taxi service with experienced drivers. Go to various locations on Koh Rong and Sihanoukville.',
      price: '$10-40',
      priceEn: '$10-40',
      duration: 'ទៅតាមទីតាំង',
      durationEn: 'By destination',
      capacity: '១-៤ នាក់',
      capacityEn: '1-4 people',
      features: ['អ្នកបើកបរវិជ្ជាជីវៈ', 'ម៉ាស៊ីនត្រជាក់', 'ការធានារ៉ាប់រង', 'ទឹកបរិសុទ្ធ', 'តម្លៃថេរ'],
      featuresEn: ['Professional driver', 'Air conditioning', 'Insurance', 'Bottled water', 'Fixed price'],
      image: 'https://images.pexels.com/photos/1640777/pexels-photo-1640777.jpeg?auto=compress&cs=tinysrgb&w=800',
      gallery: [
        'https://images.pexels.com/photos/1640777/pexels-photo-1640777.jpeg?auto=compress&cs=tinysrgb&w=800',
        'https://images.pexels.com/photos/1450361/pexels-photo-1450361.jpeg?auto=compress&cs=tinysrgb&w=800'
      ],
      contact: {
        name: 'លោក ចាន់ថា',
        nameEn: 'Mr. Chanthy',
        phone: '017 888 999',
        location: 'ព្រះសីហនុ-កោះរ៉ុង',
        locationEn: 'Sihanoukville-Koh Rong'
      },
      rating: 4.3,
      reviews: 156,
      availability: true,
      popular: false
    },
    {
      id: 3,
      name: 'សេវាកម្មតាក់ស៊ីទូក',
      nameEn: 'Boat Taxi Service',
      category: 'boat',
      categoryEn: 'Boat Services',
      description: 'សេវាកម្មតាក់ស៊ីទូកឯកជនទៅកាន់ឆ្នេរផ្សេងៗនៅកោះរ៉ុង។ រហ័ស សុវត្ថិភាព និងសេវាកម្មល្អ។',
      descriptionEn: 'Private boat taxi service to various beaches on Koh Rong. Fast, safe, and good service.',
      price: '$40-150',
      priceEn: '$40-150',
      duration: 'ទៅតាមទីតាំង',
      durationEn: 'By destination',
      capacity: '១-១២ នាក់',
      capacityEn: '1-12 people',
      features: ['ទូកទំនើប', 'អាវពោងសុវត្ថិភាព', 'អ្នកបើកបរវិជ្ជាជីវៈ', 'ការធានារ៉ាប់រង', 'ទឹកបរិសុទ្ធ'],
      featuresEn: ['Modern boat', 'Life jackets', 'Professional captain', 'Insurance', 'Bottled water'],
      image: 'https://images.pexels.com/photos/1450361/pexels-photo-1450361.jpeg?auto=compress&cs=tinysrgb&w=800',
      gallery: [
        'https://images.pexels.com/photos/1450361/pexels-photo-1450361.jpeg?auto=compress&cs=tinysrgb&w=800',
        'https://images.pexels.com/photos/1659438/pexels-photo-1659438.jpeg?auto=compress&cs=tinysrgb&w=800'
      ],
      contact: {
        name: 'លោក ពិសាច',
        nameEn: 'Mr. Pisach',
        phone: '010 123 456',
        location: 'កោះតូច',
        locationEn: 'Koh Touch'
      },
      rating: 4.6,
      reviews: 73,
      availability: true,
      popular: true
    },
    {
      id: 4,
      name: 'ជួលឡានឯកជន',
      nameEn: 'Private Car Rental',
      category: 'car',
      categoryEn: 'Car Rental',
      description: 'ឡានឯកជនជាមួយអ្នកបើកបរមានបទពិសោធន៍។ ល្អសម្រាប់ការធ្វើដំណើរពីព្រះសីហនុមកកោះរ៉ុង និងទីកន្លែងផ្សេងៗ។',
      descriptionEn: 'Private car with experienced driver. Perfect for travel from Sihanoukville to Koh Rong and other places.',
      price: '$40-80',
      priceEn: '$40-80',
      duration: 'ក្នុងមួយថ្ងៃ',
      durationEn: 'Per day',
      capacity: '១-៧ នាក់',
      capacityEn: '1-7 people',
      features: ['អ្នកបើកបរវិជ្ជាជីវៈ', 'ម៉ាស៊ីនត្រជាក់', 'ការធានារ៉ាប់រង', 'ទឹកបរិសុទ្ធ', 'Wi-Fi'],
      featuresEn: ['Professional driver', 'Air conditioning', 'Insurance', 'Bottled water', 'Wi-Fi'],
      image: 'https://images.pexels.com/photos/1450360/pexels-photo-1450360.jpeg?auto=compress&cs=tinysrgb&w=800',
      gallery: [
        'https://images.pexels.com/photos/1450360/pexels-photo-1450360.jpeg?auto=compress&cs=tinysrgb&w=800',
        'https://images.pexels.com/photos/1001682/pexels-photo-1001682.jpeg?auto=compress&cs=tinysrgb&w=800'
      ],
      contact: {
        name: 'លោក រតនា',
        nameEn: 'Mr. Ratana',
        phone: '092 567 890',
        location: 'ព្រះសីហនុ',
        locationEn: 'Sihanoukville'
      },
      rating: 4.7,
      reviews: 234,
      availability: true,
      popular: true
    },
    {
      id: 5,
      name: 'ជួលម៉ូតូទឹក',
      nameEn: 'Jet Ski Rental',
      category: 'watersports',
      categoryEn: 'Water Sports',
      description: 'ម៉ូតូទឹកទំនើបសម្រាប់បទពិសោធន៍រំភើបនៅលើទឹកសមុទ្រ។ មានការណែនាំសុវត្ថិភាព និងឧបករណ៍ការពារ។',
      descriptionEn: 'Modern jet skis for exciting experience on the ocean. Safety instruction and protective equipment included.',
      price: '$80-150',
      priceEn: '$80-150',
      duration: 'ក្នុងមួយម៉ោង',
      durationEn: 'Per hour',
      capacity: '១-២ នាក់',
      capacityEn: '1-2 people',
      features: ['ម៉ូតូទឹកទំនើប', 'អាវពោងសុវត្ថិភាព', 'ការណែនាំសុវត្ថិភាព', 'ការធានារ៉ាប់រង', 'ប្រេងរួមបញ្ចូល'],
      featuresEn: ['Modern jet ski', 'Life jacket', 'Safety instruction', 'Insurance', 'Fuel included'],
      image: 'https://images.pexels.com/photos/1450363/pexels-photo-1450363.jpeg?auto=compress&cs=tinysrgb&w=800',
      gallery: [
        'https://images.pexels.com/photos/1450363/pexels-photo-1450363.jpeg?auto=compress&cs=tinysrgb&w=800',
        'https://images.pexels.com/photos/1001682/pexels-photo-1001682.jpeg?auto=compress&cs=tinysrgb&w=800'
      ],
      contact: {
        name: 'កញ្ញា សុភាព',
        nameEn: 'Ms. Sopheak',
        phone: '078 901 234',
        email: 'jetski@kohrong.com',
        location: 'ឆ្នេរសុខសាន្ត',
        locationEn: 'Sok San Beach'
      },
      rating: 4.4,
      reviews: 112,
      availability: true,
      popular: false
    },
    {
      id: 6,
      name: 'ជួលម៉ូតូកង់បួន',
      nameEn: 'ATV Rental',
      category: 'motorbike',
      categoryEn: 'Motorbike Rental',
      description: 'ម៉ូតូកង់បួនសម្រាប់ការផ្សងព្រេងនៅលើដីនិងឆ្នេរ។ បទពិសោធន៍រំភើប និងសុវត្ថិភាពខ្ពស់។',
      descriptionEn: 'ATV for adventure on land and beach. Exciting experience and high safety.',
      price: '$40-80',
      priceEn: '$40-80',
      duration: 'ក្នុងមួយម៉ោង',
      durationEn: 'Per hour',
      capacity: '១ នាក់',
      capacityEn: '1 person',
      features: ['ម៉ូតូកង់បួនទំនើប', 'មួកសុវត្ថិភាព', 'ការណែនាំការប្រើប្រាស់', 'ការធានារ៉ាប់រង', 'ប្រេងរួមបញ្ចូល'],
      featuresEn: ['Modern ATV', 'Safety helmet', 'Usage instruction', 'Insurance', 'Fuel included'],
      image: 'https://images.pexels.com/photos/1659438/pexels-photo-1659438.jpeg?auto=compress&cs=tinysrgb&w=800',
      gallery: [
        'https://images.pexels.com/photos/1659438/pexels-photo-1659438.jpeg?auto=compress&cs=tinysrgb&w=800',
        'https://images.pexels.com/photos/1371360/pexels-photo-1371360.jpeg?auto=compress&cs=tinysrgb&w=800'
      ],
      contact: {
        name: 'លោក ធារា',
        nameEn: 'Mr. Thara',
        phone: '096 789 012',
        location: 'កោះតូច',
        locationEn: 'Koh Touch'
      },
      rating: 4.2,
      reviews: 67,
      availability: true,
      popular: false
    },
    {
      id: 7,
      name: 'ជួលទូកទេសចរណ៍ស្ទូចត្រីឯកជន',
      nameEn: 'Private Tourism & Fishing Boat Charter',
      category: 'boat',
      categoryEn: 'Boat Services',
      description: 'ទូកទេសចរណ៍ និងស្ទូចត្រីឯកជនជាមួយឧបករណ៍ពេញលេញ។ ល្អសម្រាប់ការទេសចរណ៍ និងស្ទូចត្រី។',
      descriptionEn: 'Private tourism and fishing boat with complete equipment. Perfect for sightseeing and fishing.',
      price: '$80-300',
      priceEn: '$80-300',
      duration: 'ក្នុងមួយថ្ងៃ',
      durationEn: 'Per day',
      capacity: '៦-២០ នាក់',
      capacityEn: '6-20 people',
      features: ['ទូកទំនើប', 'ឧបករណ៍ស្ទូចត្រី', 'មគ្គុទ្ទេសក៍', 'អាហារថ្ងៃត្រង់', 'អាវពោងសុវត្ថិភាព'],
      featuresEn: ['Modern boat', 'Fishing equipment', 'Local guide', 'Lunch included', 'Life jackets'],
      image: 'https://images.pexels.com/photos/1640777/pexels-photo-1640777.jpeg?auto=compress&cs=tinysrgb&w=800',
      gallery: [
        'https://images.pexels.com/photos/1640777/pexels-photo-1640777.jpeg?auto=compress&cs=tinysrgb&w=800',
        'https://images.pexels.com/photos/1450361/pexels-photo-1450361.jpeg?auto=compress&cs=tinysrgb&w=800'
      ],
      contact: {
        name: 'លោក ស្រីមុំ',
        nameEn: 'Mr. Sreymom',
        phone: '087 654 321',
        location: 'កោះតូច',
        locationEn: 'Koh Touch'
      },
      rating: 4.8,
      reviews: 145,
      availability: true,
      popular: true
    },
    {
      id: 8,
      name: 'ជួលអូបរទូកល្បឿនលឿនឯកជន',
      nameEn: 'Private Speed Boat Operator',
      category: 'boat',
      categoryEn: 'Boat Services',
      description: 'សេវាកម្មអូបរទូកល្បឿនលឿនឯកជន។ ការធ្វើដំណើររហ័ស និងសុវត្ថិភាពពីព្រះសីហនុទៅកោះរ៉ុង។',
      descriptionEn: 'Private speed boat operator service. Fast and safe travel from Sihanoukville to Koh Rong.',
      price: '$600-1500',
      priceEn: '$600-1500',
      duration: 'ក្នុងមួយថ្ងៃ',
      durationEn: 'Per day',
      capacity: '១០-៤០ នាក់',
      capacityEn: '10-40 people',
      features: ['ទូកល្បឿនលឿនទំនើប', 'អ្នកបើកបរវិជ្ជាជីវៈ', 'អាវពោងសុវត្ថិភាព', 'ការធានារ៉ាប់រង', 'ភេសជ្ជៈ'],
      featuresEn: ['Modern speed boat', 'Professional captain', 'Life jackets', 'Insurance', 'Refreshments'],
      image: 'https://images.pexels.com/photos/1450360/pexels-photo-1450360.jpeg?auto=compress&cs=tinysrgb&w=800',
      gallery: [
        'https://images.pexels.com/photos/1450360/pexels-photo-1450360.jpeg?auto=compress&cs=tinysrgb&w=800',
        'https://images.pexels.com/photos/1001682/pexels-photo-1001682.jpeg?auto=compress&cs=tinysrgb&w=800'
      ],
      contact: {
        name: 'លោក ចាន់',
        nameEn: 'Mr. Chan',
        phone: '085 432 109',
        location: 'ព្រះសីហនុ',
        locationEn: 'Sihanoukville'
      },
      rating: 4.9,
      reviews: 89,
      availability: true,
      popular: true
    },
    {
      id: 9,
      name: 'កក់សំបុត្រអូបរ',
      nameEn: 'Speed Boat Ticket Booking',
      category: 'tickets',
      categoryEn: 'Ticket Booking',
      description: 'សេវាកម្មកក់សំបុត្រទូកល្បឿនលឿនអនឡាញ។ ងាយស្រួល រហ័ស និងមានការធានា។',
      descriptionEn: 'Online speed boat ticket booking service. Easy, fast, and guaranteed.',
      price: '$14 (១ជើង) / $25 (ទៅមក)',
      priceEn: '$14 (One way) / $25 (Round trip)',
      duration: 'ក្នុងមនុស្សម្នាក់',
      durationEn: 'Per person',
      capacity: 'គ្មានកំណត់',
      capacityEn: 'Unlimited',
      features: ['កក់អនឡាញ', 'ការធានាកន្លែងអង្គុយ', 'ការបោះបង់ឥតគិតថ្លៃ', 'ការគាំទ្រ ២៤/៧', 'ទទួលបានភ្លាមៗ'],
      featuresEn: ['Online booking', 'Seat guarantee', 'Free cancellation', '24/7 support', 'Instant confirmation'],
      image: 'https://images.pexels.com/photos/1450363/pexels-photo-1450363.jpeg?auto=compress&cs=tinysrgb&w=800',
      gallery: [
        'https://images.pexels.com/photos/1450363/pexels-photo-1450363.jpeg?auto=compress&cs=tinysrgb&w=800',
        'https://images.pexels.com/photos/1001682/pexels-photo-1001682.jpeg?auto=compress&cs=tinysrgb&w=800'
      ],
      contact: {
        name: 'កញ្ញា សុភាព',
        nameEn: 'Ms. Sopheak',
        phone: '078 901 234',
        email: 'booking@kohrong-tickets.com',
        location: 'អនឡាញ',
        locationEn: 'Online'
      },
      rating: 4.4,
      reviews: 312,
      availability: true,
      popular: false
    },
    {
      id: 10,
      name: 'កក់សំបុត្រឡានពីព្រះសីហនុទៅភ្នំពេញ',
      nameEn: 'Bus Ticket Sihanoukville to Phnom Penh',
      category: 'tickets',
      categoryEn: 'Ticket Booking',
      description: 'សេវាកម្មកក់សំបុត្រឡានក្រុងពីព្រះសីហនុទៅភ្នំពេញ។ ឡានទំនើប និងសុវត្ថិភាពខ្ពស់។',
      descriptionEn: 'Bus ticket booking service from Sihanoukville to Phnom Penh. Modern buses and high safety.',
      price: '$14.5-20',
      priceEn: '$14.5-20',
      duration: '៤-៥ ម៉ោង',
      durationEn: '4-5 hours',
      capacity: 'គ្មានកំណត់',
      capacityEn: 'Unlimited',
      features: ['ឡានម៉ាស៊ីនត្រជាក់', 'កន្លែងអង្គុយធំទូលាយ', 'Wi-Fi', 'ទឹកបរិសុទ្ធ', 'ការធានាសុវត្ថិភាព'],
      featuresEn: ['Air-conditioned bus', 'Spacious seats', 'Wi-Fi', 'Bottled water', 'Safety guarantee'],
      image: 'https://images.pexels.com/photos/1659438/pexels-photo-1659438.jpeg?auto=compress&cs=tinysrgb&w=800',
      gallery: [
        'https://images.pexels.com/photos/1659438/pexels-photo-1659438.jpeg?auto=compress&cs=tinysrgb&w=800',
        'https://images.pexels.com/photos/1371360/pexels-photo-1371360.jpeg?auto=compress&cs=tinysrgb&w=800'
      ],
      contact: {
        name: 'លោក វិចិត្រ',
        nameEn: 'Mr. Vichit',
        phone: '012 987 654',
        email: 'bus@transport.com',
        location: 'ព្រះសីហនុ',
        locationEn: 'Sihanoukville'
      },
      rating: 4.1,
      reviews: 203,
      availability: true,
      popular: false
    }
  ];

  const filteredServices = services.filter(service => {
    const categoryMatch = selectedCategory === 'all' || service.category === selectedCategory;
    const searchMatch = searchTerm === '' || 
      (language === 'km' ? service.name : service.nameEn).toLowerCase().includes(searchTerm.toLowerCase()) ||
      (language === 'km' ? service.description : service.descriptionEn).toLowerCase().includes(searchTerm.toLowerCase());
    
    return categoryMatch && searchMatch;
  });

  const popularServices = services.filter(service => service.popular);

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
            alt="Koh Rong Services"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-koh-rong-600/80 to-blue-700/80"></div>
        </div>
        
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center text-white">
          <div className="flex justify-center mb-6">
            <div className="bg-white/20 backdrop-blur-sm rounded-full p-4">
              <ShoppingBag className="h-12 w-12 text-white" />
            </div>
          </div>
          
          <h1 className="text-4xl md:text-6xl font-bold mb-6">
            {language === 'km' ? 'សេវាកម្មកោះរ៉ុង' : 'Koh Rong Services'}
          </h1>
          
          <p className="text-xl md:text-2xl mb-8 max-w-3xl mx-auto leading-relaxed">
            {language === 'km' 
              ? 'សេវាកម្មគ្រប់ប្រភេទសម្រាប់ការធ្វើដំណើរនៅកោះរ៉ុង ពីប្រជាពលរដ្ឋមូលដ្ឋាន'
              : 'All types of services for your Koh Rong journey from local residents'
            }
          </p>

          {/* Service Stats */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mt-12">
            <div className="text-center">
              <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-6">
                <div className="text-3xl md:text-4xl font-bold mb-2">{services.length}</div>
                <div className="text-lg font-semibold mb-1">
                  {language === 'km' ? 'សេវាកម្ម' : 'Services'}
                </div>
                <div className="text-sm opacity-90">
                  {language === 'km' ? 'ជម្រើសច្រើន' : 'Available options'}
                </div>
              </div>
            </div>
            <div className="text-center">
              <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-6">
                <div className="text-3xl md:text-4xl font-bold mb-2">{categories.length - 1}</div>
                <div className="text-lg font-semibold mb-1">
                  {language === 'km' ? 'ប្រភេទ' : 'Categories'}
                </div>
                <div className="text-sm opacity-90">
                  {language === 'km' ? 'ផ្សេងៗ' : 'Different types'}
                </div>
              </div>
            </div>
            <div className="text-center">
              <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-6">
                <div className="text-3xl md:text-4xl font-bold mb-2">100%</div>
                <div className="text-lg font-semibold mb-1">
                  {language === 'km' ? 'មូលដ្ឋាន' : 'Local'}
                </div>
                <div className="text-sm opacity-90">
                  {language === 'km' ? 'ប្រជាពលរដ្ឋកោះរ៉ុង' : 'Koh Rong residents'}
                </div>
              </div>
            </div>
            <div className="text-center">
              <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-6">
                <div className="text-3xl md:text-4xl font-bold mb-2">4.5★</div>
                <div className="text-lg font-semibold mb-1">
                  {language === 'km' ? 'ការវាយតម្លៃ' : 'Rating'}
                </div>
                <div className="text-sm opacity-90">
                  {language === 'km' ? 'ពីអតិថិជន' : 'From customers'}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Search and Categories */}
      <section className="py-12 bg-white border-b">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Search Bar */}
          <div className="relative mb-8 max-w-2xl mx-auto">
            <Search className="absolute left-4 top-1/2 transform -translate-y-1/2 h-5 w-5 text-gray-400" />
            <input
              type="text"
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              placeholder={language === 'km' ? 'ស្វែងរកសេវាកម្ម...' : 'Search services...'}
              className="w-full pl-12 pr-4 py-4 rounded-xl border border-gray-300 focus:outline-none focus:ring-2 focus:ring-koh-rong-500 focus:border-transparent transition-all text-lg"
            />
          </div>

          {/* Categories */}
          <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-7 gap-4">
            {categories.map((category) => {
              const IconComponent = category.icon;
              return (
                <button
                  key={category.id}
                  onClick={() => setSelectedCategory(category.id)}
                  className={`p-4 rounded-2xl transition-all duration-300 text-center ${
                    selectedCategory === category.id
                      ? 'bg-gradient-to-r from-koh-rong-500 to-koh-rong-600 text-white shadow-lg transform scale-105'
                      : 'bg-gray-50 hover:bg-gray-100 text-gray-700'
                  }`}
                >
                  <IconComponent className={`h-6 w-6 mx-auto mb-2 ${
                    selectedCategory === category.id ? 'text-white' : 'text-koh-rong-600'
                  }`} />
                  <span className="text-sm font-medium">{category.name}</span>
                </button>
              );
            })}
          </div>
        </div>
      </section>

      {/* Popular Services */}
      {selectedCategory === 'all' && (
        <section className="py-16 bg-gray-50">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold text-gray-900 mb-4">
                {language === 'km' ? 'សេវាកម្មពេញនិយម' : 'Popular Services'}
              </h2>
              <p className="text-lg text-gray-600">
                {language === 'km' 
                  ? 'សេវាកម្មដែលអតិថិជនជ្រើសរើសច្រើនបំផុត'
                  : 'Most chosen services by our customers'
                }
              </p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {popularServices.map((service) => (
                <div 
                  key={service.id}
                  onClick={() => setSelectedService(service)}
                  className="bg-white rounded-3xl shadow-lg overflow-hidden hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2 cursor-pointer relative"
                >
                  <div className="absolute top-4 left-4 z-10">
                    <span className="bg-red-500 text-white px-3 py-1 rounded-full text-sm font-semibold flex items-center space-x-1">
                      <Heart className="h-3 w-3 fill-current" />
                      <span>{language === 'km' ? 'ពេញនិយម' : 'Popular'}</span>
                    </span>
                  </div>
                  
                  <img
                    src={service.image}
                    alt={language === 'km' ? service.name : service.nameEn}
                    className="w-full h-48 object-cover"
                  />
                  
                  <div className="p-6">
                    <h3 className="text-xl font-bold text-gray-900 mb-2">
                      {language === 'km' ? service.name : service.nameEn}
                    </h3>
                    <p className="text-gray-600 mb-4 line-clamp-2">
                      {language === 'km' ? service.description : service.descriptionEn}
                    </p>
                    
                    <div className="flex items-center justify-between mb-4">
                      <div className="flex items-center space-x-1">
                        <Star className="h-4 w-4 text-yellow-500 fill-current" />
                        <span className="font-semibold">{service.rating}</span>
                        <span className="text-gray-500 text-sm">({service.reviews})</span>
                      </div>
                      <span className="text-2xl font-bold text-koh-rong-600">
                        {language === 'km' ? service.price : service.priceEn}
                      </span>
                    </div>
                    
                    <button className="w-full bg-gradient-to-r from-koh-rong-500 to-koh-rong-600 hover:from-koh-rong-600 hover:to-koh-rong-700 text-white px-4 py-3 rounded-xl font-semibold transition-all duration-300 transform hover:scale-105">
                      {language === 'km' ? 'មើលលម្អិត' : 'View Details'}
                    </button>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* All Services */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Results Info */}
          <div className="mb-8">
            <h2 className="text-2xl font-bold text-gray-900 mb-2">
              {language === 'km' 
                ? `ទទួលបានលទ្ធផល ${filteredServices.length} សេវាកម្ម`
                : `Found ${filteredServices.length} services`
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

          {/* Services Grid */}
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredServices.map((service) => (
              <div 
                key={service.id}
                onClick={() => setSelectedService(service)}
                className="bg-white rounded-3xl shadow-lg overflow-hidden hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2 cursor-pointer"
              >
                <div className="relative">
                  <img
                    src={service.image}
                    alt={language === 'km' ? service.name : service.nameEn}
                    className="w-full h-48 object-cover"
                  />
                  <div className="absolute top-4 left-4">
                    <span className="bg-gradient-to-r from-koh-rong-500 to-koh-rong-600 text-white px-3 py-1 rounded-full text-sm font-semibold">
                      {language === 'km' ? service.categoryEn : service.categoryEn}
                    </span>
                  </div>
                  <div className="absolute top-4 right-4">
                    <span className={`px-3 py-1 rounded-full text-sm font-semibold ${
                      service.availability 
                        ? 'bg-green-100 text-green-800' 
                        : 'bg-red-100 text-red-800'
                    }`}>
                      {service.availability 
                        ? (language === 'km' ? 'មាន' : 'Available')
                        : (language === 'km' ? 'អស់' : 'Unavailable')
                      }
                    </span>
                  </div>
                  {service.popular && (
                    <div className="absolute bottom-4 right-4">
                      <span className="bg-red-500 text-white px-2 py-1 rounded-full text-xs font-semibold flex items-center space-x-1">
                        <Heart className="h-3 w-3 fill-current" />
                        <span>{language === 'km' ? 'ពេញនិយម' : 'Popular'}</span>
                      </span>
                    </div>
                  )}
                </div>

                <div className="p-6">
                  <h3 className="text-xl font-bold text-gray-900 mb-2">
                    {language === 'km' ? service.name : service.nameEn}
                  </h3>
                  <p className="text-gray-600 mb-4 leading-relaxed line-clamp-2">
                    {language === 'km' ? service.description : service.descriptionEn}
                  </p>

                  {/* Service Details */}
                  <div className="grid grid-cols-2 gap-4 mb-4 text-sm">
                    <div className="flex items-center space-x-2">
                      <Clock className="h-4 w-4 text-gray-500" />
                      <span className="text-gray-600">{language === 'km' ? service.duration : service.durationEn}</span>
                    </div>
                    <div className="flex items-center space-x-2">
                      <Users className="h-4 w-4 text-gray-500" />
                      <span className="text-gray-600">{language === 'km' ? service.capacity : service.capacityEn}</span>
                    </div>
                  </div>

                  <div className="flex items-center justify-between">
                    <div className="flex items-center space-x-2">
                      <div className="flex items-center space-x-1">
                        <Star className="h-4 w-4 text-yellow-500 fill-current" />
                        <span className="font-semibold">{service.rating}</span>
                        <span className="text-gray-500 text-sm">({service.reviews})</span>
                      </div>
                    </div>
                    <div className="text-right">
                      <span className="text-2xl font-bold text-koh-rong-600">
                        {language === 'km' ? service.price : service.priceEn}
                      </span>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* No Results */}
          {filteredServices.length === 0 && (
            <div className="text-center py-16">
              <div className="bg-gray-100 rounded-full p-6 w-24 h-24 mx-auto mb-6 flex items-center justify-center">
                <ShoppingBag className="h-12 w-12 text-gray-400" />
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-4">
                {language === 'km' ? 'រកមិនឃើញសេវាកម្ម' : 'No Services Found'}
              </h3>
              <p className="text-gray-600 mb-6">
                {language === 'km' 
                  ? 'សូមព្យាយាមស្វែងរកដោយប្រើពាក្យគន្លឹះផ្សេង ឬជ្រើសរើសប្រភេទផ្សេង'
                  : 'Try searching with different keywords or select a different category'
                }
              </p>
              <button
                onClick={() => {
                  setSearchTerm('');
                  setSelectedCategory('all');
                }}
                className="bg-koh-rong-500 hover:bg-koh-rong-600 text-white px-6 py-3 rounded-full font-semibold transition-colors"
              >
                {language === 'km' ? 'សម្អាតការស្វែងរក' : 'Clear Search'}
              </button>
            </div>
          )}
        </div>
      </section>

      {/* Service Details Modal */}
      {selectedService && (
        <div className="fixed inset-0 bg-black bg-opacity-50 z-50 flex items-center justify-center p-4">
          <div className="bg-white rounded-3xl max-w-4xl w-full max-h-[90vh] overflow-y-auto">
            {/* Modal Header */}
            <div className="sticky top-0 bg-white border-b border-gray-200 p-6 flex justify-between items-center rounded-t-3xl">
              <h2 className="text-2xl font-bold text-gray-900">
                {language === 'km' ? selectedService.name : selectedService.nameEn}
              </h2>
              <button
                onClick={() => setSelectedService(null)}
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
                    src={selectedService.image}
                    alt={language === 'km' ? selectedService.name : selectedService.nameEn}
                    className="w-full h-64 md:h-80 object-cover rounded-2xl"
                  />
                </div>
                <div className="space-y-4">
                  {selectedService.gallery.slice(1).map((img, index) => (
                    <img
                      key={index}
                      src={img}
                      alt={`${selectedService.name} ${index + 2}`}
                      className="w-full h-36 md:h-36 object-cover rounded-2xl"
                    />
                  ))}
                </div>
              </div>

              {/* Service Info */}
              <div className="grid md:grid-cols-2 gap-8 mb-8">
                <div>
                  <h3 className="text-xl font-bold text-gray-900 mb-4">
                    {language === 'km' ? 'ព័ត៌មានសេវាកម្ម' : 'Service Information'}
                  </h3>
                  <div className="space-y-3">
                    <div className="flex justify-between items-center">
                      <span className="text-gray-600">{language === 'km' ? 'ប្រភេទ' : 'Category'}:</span>
                      <span className="font-semibold">{selectedService.categoryEn}</span>
                    </div>
                    <div className="flex justify-between items-center">
                      <span className="text-gray-600">{language === 'km' ? 'តម្លៃ' : 'Price'}:</span>
                      <span className="font-bold text-2xl text-koh-rong-600">{selectedService.price}</span>
                    </div>
                    <div className="flex justify-between items-center">
                      <span className="text-gray-600">{language === 'km' ? 'រយៈពេល' : 'Duration'}:</span>
                      <span className="font-semibold">{language === 'km' ? selectedService.duration : selectedService.durationEn}</span>
                    </div>
                    <div className="flex justify-between items-center">
                      <span className="text-gray-600">{language === 'km' ? 'សមត្ថភាព' : 'Capacity'}:</span>
                      <span className="font-semibold">{language === 'km' ? selectedService.capacity : selectedService.capacityEn}</span>
                    </div>
                    <div className="flex justify-between items-center">
                      <span className="text-gray-600">{language === 'km' ? 'ការវាយតម្លៃ' : 'Rating'}:</span>
                      <div className="flex items-center space-x-1">
                        <Star className="h-4 w-4 text-yellow-500 fill-current" />
                        <span className="font-semibold">{selectedService.rating}</span>
                        <span className="text-gray-500">({selectedService.reviews} reviews)</span>
                      </div>
                    </div>
                  </div>
                </div>

                <div>
                  <h3 className="text-xl font-bold text-gray-900 mb-4">
                    {language === 'km' ? 'ព័ត៌មានទំនាក់ទំនង' : 'Contact Information'}
                  </h3>
                  <div className="space-y-3">
                    <div className="flex items-center space-x-3">
                      <Users className="h-5 w-5 text-koh-rong-500" />
                      <span className="font-semibold">{language === 'km' ? selectedService.contact.name : selectedService.contact.nameEn}</span>
                    </div>
                    <div className="flex items-center space-x-3">
                      <Phone className="h-5 w-5 text-koh-rong-500" />
                      <a 
                        href={`tel:${selectedService.contact.phone}`}
                        className="text-koh-rong-600 hover:text-koh-rong-700 transition-colors"
                      >
                        {selectedService.contact.phone}
                      </a>
                    </div>
                    {selectedService.contact.email && (
                      <div className="flex items-center space-x-3">
                        <Mail className="h-5 w-5 text-koh-rong-500" />
                        <a 
                          href={`mailto:${selectedService.contact.email}`}
                          className="text-koh-rong-600 hover:text-koh-rong-700 transition-colors"
                        >
                          {selectedService.contact.email}
                        </a>
                      </div>
                    )}
                    <div className="flex items-center space-x-3">
                      <MapPin className="h-5 w-5 text-koh-rong-500" />
                      <span className="text-gray-700">{language === 'km' ? selectedService.contact.location : selectedService.contact.locationEn}</span>
                    </div>
                  </div>
                </div>
              </div>

              {/* Description */}
              <div className="mb-8">
                <h3 className="text-xl font-bold text-gray-900 mb-4">
                  {language === 'km' ? 'ការពិពណ៌នា' : 'Description'}
                </h3>
                <p className="text-gray-600 leading-relaxed">
                  {language === 'km' ? selectedService.description : selectedService.descriptionEn}
                </p>
              </div>

              {/* Features */}
              <div className="mb-8">
                <h3 className="text-xl font-bold text-gray-900 mb-4">
                  {language === 'km' ? 'លក្ខណៈពិសេស' : 'Features Included'}
                </h3>
                <div className="grid md:grid-cols-2 gap-4">
                  {(language === 'km' ? selectedService.features : selectedService.featuresEn).map((feature, index) => (
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
                    href={`tel:${selectedService.contact.phone}`}
                    className="bg-gradient-to-r from-koh-rong-500 to-koh-rong-600 hover:from-koh-rong-600 hover:to-koh-rong-700 text-white px-6 py-3 rounded-xl font-semibold transition-all duration-300 transform hover:scale-105 flex items-center justify-center space-x-2"
                  >
                    <Phone className="h-5 w-5" />
                    <span>{language === 'km' ? 'ទូរស័ព្ទឥឡូវ' : 'Call Now'}</span>
                  </a>
                  {selectedService.contact.email && (
                    <a 
                      href={`mailto:${selectedService.contact.email}?subject=Service Inquiry - ${selectedService.nameEn}`}
                      className="border-2 border-koh-rong-500 text-koh-rong-600 hover:bg-koh-rong-500 hover:text-white px-6 py-3 rounded-xl font-semibold transition-all duration-300 flex items-center justify-center space-x-2"
                    >
                      <Mail className="h-5 w-5" />
                      <span>{language === 'km' ? 'ផ្ញើអ៊ីមែល' : 'Send Email'}</span>
                    </a>
                  )}
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
              ? 'ខ្ញុំរីករាយក្នុងការជួយអ្នកស្វែងរកសេវាកម្មដ៏ល្អបំផុត'
              : 'I\'m happy to help you find the best services'
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

export default ServicesPage;