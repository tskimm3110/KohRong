import React, { useState } from 'react';
import { ArrowLeft, MapPin, Search, Filter, Star, Users, Clock, Waves, Sun, Camera, Heart, Eye, Navigation, Compass, Home, Utensils, Building, TreePine } from 'lucide-react';
import { useLanguage } from '../contexts/LanguageContext';
import Footer from './Footer';

interface DestinationsPageProps {
  onBack: () => void;
  onAccommodationClick: () => void;
}

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
  difficulty: 'easy' | 'medium' | 'hard';
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

const DestinationsPage: React.FC<DestinationsPageProps> = ({ onBack, onAccommodationClick }) => {
  const { language } = useLanguage();
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedVillage, setSelectedVillage] = useState('all');
  const [showAllBeaches, setShowAllBeaches] = useState(false);
  const [currentView, setCurrentView] = useState<'beaches' | 'villages'>('beaches');

  const villages = [
    { id: 'all', name: language === 'km' ? 'ភូមិទាំងអស់' : 'All Villages' },
    { id: 'daem-thkov', name: language === 'km' ? 'ភូមិដើមថ្កូវ' : 'Daem Thkov Village' },
    { id: 'prek-svay', name: language === 'km' ? 'ភូមិព្រែកស្វា' : 'Prek Svay Village' },
    { id: 'sok-san', name: language === 'km' ? 'ភូមិសុខសាន្ត' : 'Sok San Village' },
    { id: 'koh-touch', name: language === 'km' ? 'ភូមិកោះតូច' : 'Koh Touch Village' },
    { id: 'koh-rong-sanloem', name: language === 'km' ? 'ភូមិកោះរ៉ុងសន្លឹម' : 'Koh Rong Sanloem Village' }
  ];

  const villageData: Village[] = [
    {
      id: 1,
      name: 'ភូមិកោះតូច',
      nameEn: 'Koh Touch Village',
      families: 171,
      population: 568,
      women: 263,
      description: 'ភូមិកោះតូចគឺជាចំណុចចូលសំខាន់បំផុតនៅកោះរ៉ុង។ ជាកន្លែងដែលមានកំពង់ផែទូកល្បឿនលឿន ភោជនីយដ្ឋាន កន្លែងស្នាក់នៅ និងជីវិតយប់សកម្ម។ ភូមិនេះមានប្រជាពលរដ្ឋ ៥៦៨ នាក់ ក្នុងនោះមានស្រី ២៦៣ នាក់ និងមានគ្រួសារសរុប ១៧១ គ្រួសារ។',
      descriptionEn: 'Koh Touch Village is the main entry point to Koh Rong. It has the speed boat pier, restaurants, accommodations, and active nightlife. This village has 568 residents, including 263 women, with a total of 171 families.',
      features: ['កំពង់ផែទូកល្បឿនលឿន', 'ភោជនីយដ្ឋានច្រើន', 'កន្លែងស្នាក់នៅច្រើន', 'ជីវិតយប់សកម្ម'],
      featuresEn: ['Speed boat pier', 'Many restaurants', 'Many accommodations', 'Active nightlife'],
      accommodations: 25,
      restaurants: 18,
      activities: ['ហែលទឹក', 'ញ៉ាំអាហារ', 'ជីវិតយប់', 'ទិញអីវ៉ាន់', 'ជិះទូកមើលផ្កាយ'],
      activitiesEn: ['Swimming', 'Dining', 'Nightlife', 'Shopping', 'Stargazing boat trips'],
      image: 'https://images.pexels.com/photos/1371360/pexels-photo-1371360.jpeg?auto=compress&cs=tinysrgb&w=800',
      beaches: ['ឆ្នេរកោះតូច', 'ឆ្នេរខ្សាច់មាស'],
      beachesEn: ['Koh Touch Beach', 'Golden Sand Beach']
    },
    {
      id: 2,
      name: 'ភូមិកោះរ៉ុងសន្លឹម',
      nameEn: 'Koh Rong Sanloem Village',
      families: 170,
      population: 519,
      women: 210,
      description: 'ភូមិកោះរ៉ុងសន្លឹមស្ថិតនៅលើកោះរ៉ុងសន្លឹម ជាកោះប្អូនរបស់កោះរ៉ុង។ ភូមិនេះមានបរិយាកាសស្ងប់ស្ងាត់ជាងភូមិកោះតូច ហើយមានឆ្នេរស្រស់ស្អាតជាច្រើន។ ភូមិនេះមានប្រជាពលរដ្ឋ ៥១៩ នាក់ ក្នុងនោះមានស្រី ២១០ នាក់ និងមានគ្រួសារសរុប ១៧០ គ្រួសារ។',
      descriptionEn: 'Koh Rong Sanloem Village is located on Koh Rong Sanloem, the sister island of Koh Rong. This village has a more peaceful atmosphere than Koh Touch and has many beautiful beaches. This village has 519 residents, including 210 women, with a total of 170 families.',
      features: ['ស្ងប់ស្ងាត់', 'ឆ្នេរស្រស់ស្អាត', 'ភ្លើងសញ្ញាសមុទ្រ', 'ទឹកថ្លាដូចកញ្ចក់'],
      featuresEn: ['Peaceful', 'Beautiful beaches', 'Lighthouse', 'Crystal clear water'],
      accommodations: 15,
      restaurants: 10,
      activities: ['ហែលទឹក', 'ស្នរកឹល', 'ដើរលេង', 'ឡើងភ្លើងសញ្ញា', 'មើលព្រះអាទិត្យលិច'],
      activitiesEn: ['Swimming', 'Snorkeling', 'Walking', 'Lighthouse climbing', 'Sunset viewing'],
      image: 'https://images.pexels.com/photos/1659438/pexels-photo-1659438.jpeg?auto=compress&cs=tinysrgb&w=800',
      beaches: ['ឆ្នេររ៉ុងសន្លឹម', 'ឆ្នេរថ្មដុះ', 'ឆ្នេរព្រែកកោងកាងវរៈការពារកោះលេខបួន', 'ឆ្នេរខ្សាច់ស', 'ឆ្នេរ២៣', 'ឆ្នេរថ្ងៃលិច', 'ឆ្នេរភ្លើងសញ្ញា', 'ឆ្នេរត្រីកិ', 'ឆ្នេរលំហែ'],
      beachesEn: ['Rong Sanloem Beach', 'Thom Doh Beach', 'Prek Kong Kang Protected Island 4 Beach', 'White Sand Beach', 'Beach 23', 'Sunset Beach', 'Lighthouse Beach', 'Treki Beach', 'Relaxation Beach']
    },
    {
      id: 3,
      name: 'ភូមិដើមថ្កូវ',
      nameEn: 'Daem Thkov Village',
      families: 270,
      population: 620,
      women: 340,
      description: 'ភូមិដើមថ្កូវគឺជាភូមិដ៏ធំមួយនៅកោះរ៉ុង ដែលមានឆ្នេរស្រស់ស្អាតជាច្រើន។ ភូមិនេះមានប្រជាពលរដ្ឋ ៦២០ នាក់ ក្នុងនោះមានស្រី ៣៤០ នាក់ និងមានគ្រួសារសរុប ២៧០ គ្រួសារ។ ប្រជាពលរដ្ឋភាគច្រើនប្រកបរបរនេសាទ និងកសិកម្ម។',
      descriptionEn: 'Daem Thkov Village is a large village on Koh Rong with many beautiful beaches. This village has 620 residents, including 340 women, with a total of 270 families. Most residents work in fishing and agriculture.',
      features: ['ឆ្នេរច្រើន', 'ការនេសាទ', 'កសិកម្ម', 'ធម្មជាតិស្រស់ស្អាត'],
      featuresEn: ['Many beaches', 'Fishing', 'Agriculture', 'Beautiful nature'],
      accommodations: 12,
      restaurants: 8,
      activities: ['ហែលទឹក', 'ស្នរកឹល', 'ដើរព្រៃ', 'ស្វែងយល់ជីវិតមូលដ្ឋាន', 'ស្ទូចត្រី'],
      activitiesEn: ['Swimming', 'Snorkeling', 'Forest walking', 'Learning local life', 'Fishing'],
      image: 'https://images.pexels.com/photos/1450361/pexels-photo-1450361.jpeg?auto=compress&cs=tinysrgb&w=800',
      beaches: ['ឆ្នេរកោះរ៉ុង', 'ឆ្នេរគីង្គក់', 'ឆ្នេររំដួល', 'ឆ្នេរដូង', 'ឆ្នេរឡទឹកត្រី', 'ឆ្នេរដើមថ្កូវ', 'ឆ្នេរប្រាសាទ', 'ឆ្នេរថ្មត្រួត'],
      beachesEn: ['Koh Rong Beach', 'Kingkok Beach', 'Romdoul Beach', 'Doung Beach', 'La Teuk Trey Beach', 'Daem Thkov Beach', 'Prasat Beach', 'Thom Truot Beach']
    },
    {
      id: 4,
      name: 'ភូមិព្រែកស្វាយ',
      nameEn: 'Prek Svay Village',
      families: 290,
      population: 750,
      women: 465,
      description: 'ភូមិព្រែកស្វាយគឺជាភូមិដែលមានប្រជាពលរដ្ឋច្រើនជាងគេនៅកោះរ៉ុង។ ភូមិនេះមានប្រជាពលរដ្ឋ ៧៥០ នាក់ ក្នុងនោះមានស្រី ៤៦៥ នាក់ និងមានគ្រួសារសរុប ២៩០ គ្រួសារ។ ភូមិនេះមានព្រៃកោងកាងដ៏ធំ និងជាកន្លែងល្អសម្រាប់ការស្វែងយល់អំពីធម្មជាតិ។',
      descriptionEn: 'Prek Svay Village is the most populated village on Koh Rong. This village has 750 residents, including 465 women, with a total of 290 families. This village has a large mangrove forest and is a great place for nature exploration.',
      features: ['ព្រៃកោងកាង', 'ប្រជាពលរដ្ឋច្រើន', 'ការនេសាទ', 'ធម្មជាតិស្រស់ស្អាត'],
      featuresEn: ['Mangrove forest', 'Large population', 'Fishing', 'Beautiful nature'],
      accommodations: 8,
      restaurants: 6,
      activities: ['ជិះកាយ៉ាក់', 'ស្វែងយល់ព្រៃកោងកាង', 'មើលសត្វព្រៃ', 'ស្វែងយល់ជីវិតមូលដ្ឋាន', 'ស្ទូចត្រី'],
      activitiesEn: ['Kayaking', 'Mangrove exploration', 'Wildlife watching', 'Learning local life', 'Fishing'],
      image: 'https://images.pexels.com/photos/1640777/pexels-photo-1640777.jpeg?auto=compress&cs=tinysrgb&w=800',
      beaches: ['ឆ្នេរកោងកាងមួយ', 'ឆ្នេរកោងកាងពីរ', 'ឆ្នេរព្រែកស្វាយ', 'ឆ្នេរនេសាទ', 'ឆ្នេរលំហរ', 'ឆ្នេរឋានសួគ៌'],
      beachesEn: ['Kong Kang 1 Beach', 'Kong Kang 2 Beach', 'Prek Svay Beach', 'Nesad Beach', 'Lomhor Beach', 'Paradise Beach']
    },
    {
      id: 5,
      name: 'ភូមិសុខសាន្ត',
      nameEn: 'Sok San Village',
      families: 250,
      population: 432,
      women: 286,
      description: 'ភូមិសុខសាន្តគឺជាភូមិដែលមានឆ្នេរល្បីបំផុតនៅកោះរ៉ុង។ ភូមិនេះមានប្រជាពលរដ្ឋ ៤៣២ នាក់ ក្នុងនោះមានស្រី ២៨៦ នាក់ និងមានគ្រួសារសរុប ២៥០ គ្រួសារ។ ភូមិនេះមានរីសតប្រណីតនិងសេវាកម្មទេសចរណ៍ពេញលេញ។',
      descriptionEn: 'Sok San Village is the village with the most famous beach on Koh Rong. This village has 432 residents, including 286 women, with a total of 250 families. This village has luxury resorts and complete tourism services.',
      features: ['ឆ្នេរល្បីបំផុត', 'រីសតប្រណីត', 'សេវាកម្មពេញលេញ', 'ទឹកថ្លាបំផុត'],
      featuresEn: ['Most famous beach', 'Luxury resorts', 'Complete services', 'Clearest water'],
      accommodations: 20,
      restaurants: 15,
      activities: ['ហែលទឹក', 'ស្នរកឹល', 'កីឡាទឹក', 'ស្ប៉ា', 'ញ៉ាំអាហារប្រណីត'],
      activitiesEn: ['Swimming', 'Snorkeling', 'Water sports', 'Spa', 'Fine dining'],
      image: 'https://images.pexels.com/photos/1450363/pexels-photo-1450363.jpeg?auto=compress&cs=tinysrgb&w=800',
      beaches: ['ឆ្នេរសុខសាន្ត'],
      beachesEn: ['Sok San Beach']
    }
  ];

  const beaches: Beach[] = [
    {
      id: 1,
      name: 'ឆ្នេរកោះរ៉ុង',
      nameEn: 'Koh Rong Beach',
      length: 2015,
      village: 'ភូមិដើមថ្កូវ',
      villageEn: 'Daem Thkov Village',
      commune: 'សង្កាត់កោះរ៉ុង',
      communeEn: 'Koh Rong Commune',
      description: 'ឆ្នេរកោះរ៉ុងគឺជាឆ្នេរដ៏ស្រស់ស្អាតនិងធំបំផុតមួយនៅលើកោះ។ ខ្សាច់សនិងទឹកថ្លាដូចកញ្ចក់ធ្វើឱ្យកន្លែងនេះក្លាយជាទីកន្លែងល្អបំផុតសម្រាប់ការសម្រាកលំហែកាយ។',
      descriptionEn: 'Koh Rong Beach is one of the most beautiful and largest beaches on the island. White sand and crystal clear water make this place perfect for relaxation.',
      features: ['ខ្សាច់ស', 'ទឹកថ្លា', 'ទិដ្ឋភាពស្រស់ស្អាត', 'កន្លែងថតរូប'],
      featuresEn: ['White sand', 'Clear water', 'Beautiful scenery', 'Photo spots'],
      activities: ['ហែលទឹក', 'ថតរូប', 'ដើរលេង', 'មើលព្រះអាទិត្យលិច'],
      activitiesEn: ['Swimming', 'Photography', 'Walking', 'Sunset viewing'],
      bestTime: 'ព្រឹក ៦:០០ - ល្ងាច ៦:០០',
      bestTimeEn: '6:00 AM - 6:00 PM',
      accommodations: 8,
      image: 'https://images.pexels.com/photos/1659438/pexels-photo-1659438.jpeg?auto=compress&cs=tinysrgb&w=800',
      popular: true,
      difficulty: 'easy'
    },
    {
      id: 2,
      name: 'ឆ្នេរគីង្គក់',
      nameEn: 'Kingkok Beach',
      length: 540,
      village: 'ភូមិដើមថ្កូវ',
      villageEn: 'Daem Thkov Village',
      commune: 'សង្កាត់កោះរ៉ុង',
      communeEn: 'Koh Rong Commune',
      description: 'ឆ្នេរតូចស្ងប់ស្ងាត់ដែលល្អសម្រាប់ការសម្រាកឯកជន។ មានបរិយាកាសរ៉ូមែនទិកនិងទឹកសមុទ្រស្ងប់។',
      descriptionEn: 'Small quiet beach perfect for private relaxation. Romantic atmosphere and calm sea water.',
      features: ['ស្ងប់ស្ងាត់', 'ឯកជន', 'រ៉ូមែនទិក', 'ទឹកស្ងប់'],
      featuresEn: ['Quiet', 'Private', 'Romantic', 'Calm water'],
      activities: ['ហែលទឹក', 'សម្រាក', 'ថតរូប'],
      activitiesEn: ['Swimming', 'Relaxation', 'Photography'],
      bestTime: 'ព្រឹក ៧:០០ - ល្ងាច ៥:០០',
      bestTimeEn: '7:00 AM - 5:00 PM',
      accommodations: 2,
      image: 'https://images.pexels.com/photos/1371360/pexels-photo-1371360.jpeg?auto=compress&cs=tinysrgb&w=800',
      popular: false,
      difficulty: 'medium'
    },
    {
      id: 3,
      name: 'ឆ្នេររំដួល',
      nameEn: 'Romdoul Beach',
      length: 710,
      village: 'ភូមិដើមថ្កូវ',
      villageEn: 'Daem Thkov Village',
      commune: 'សង្កាត់កោះរ៉ុង',
      communeEn: 'Koh Rong Commune',
      description: 'ឆ្នេរដែលមានឈ្មោះតាមផ្កាជាតិកម្ពុជា។ កន្លែងនេះល្អសម្រាប់ការស្វែងយល់អំពីធម្មជាតិនិងសត្វព្រៃ។',
      descriptionEn: 'Beach named after Cambodia\'s national flower. Great place for exploring nature and wildlife.',
      features: ['ធម្មជាតិ', 'សត្វព្រៃ', 'ផ្កាឈើ', 'បរិស្ថានស្អាត'],
      featuresEn: ['Nature', 'Wildlife', 'Flowers', 'Clean environment'],
      activities: ['ស្វែងយល់ធម្មជាតិ', 'មើលសត្វស្លាប', 'ដើរព្រៃ'],
      activitiesEn: ['Nature exploration', 'Bird watching', 'Forest walking'],
      bestTime: 'ព្រឹក ៦:០០ - ល្ងាច ៤:០០',
      bestTimeEn: '6:00 AM - 4:00 PM',
      accommodations: 1,
      image: 'https://images.pexels.com/photos/1450361/pexels-photo-1450361.jpeg?auto=compress&cs=tinysrgb&w=800',
      popular: false,
      difficulty: 'medium'
    },
    {
      id: 4,
      name: 'ឆ្នេរដូង',
      nameEn: 'Doung Beach (Coconut Beach)',
      length: 680,
      village: 'ភូមិដើមថ្កូវ',
      villageEn: 'Daem Thkov Village',
      commune: 'សង្កាត់កោះរ៉ុង',
      communeEn: 'Koh Rong Commune',
      description: 'ឆ្នេរដែលមានដើមដូងច្រើន។ ទឹកដូងស្រស់និងម្លប់ដើមដូងធ្វើឱ្យកន្លែងនេះក្លាយជាទីកន្លែងសម្រាកដ៏ល្អ។',
      descriptionEn: 'Beach with many coconut trees. Fresh coconut water and coconut tree shade make this a great resting place.',
      features: ['ដើមដូង', 'ម្លប់', 'ទឹកដូងស្រស់', 'បរិយាកាសត្រជាក់'],
      featuresEn: ['Coconut trees', 'Shade', 'Fresh coconut water', 'Cool atmosphere'],
      activities: ['ផឹកទឹកដូង', 'សម្រាកក្រោមម្លប់', 'ហែលទឹក'],
      activitiesEn: ['Drinking coconut water', 'Resting under shade', 'Swimming'],
      bestTime: 'ព្រឹក ៨:០០ - ល្ងាច ៥:០០',
      bestTimeEn: '8:00 AM - 5:00 PM',
      accommodations: 3,
      image: 'https://images.pexels.com/photos/1640777/pexels-photo-1640777.jpeg?auto=compress&cs=tinysrgb&w=800',
      popular: true,
      difficulty: 'easy'
    },
    {
      id: 5,
      name: 'ឆ្នេរឡទឹកត្រី',
      nameEn: 'La Teuk Trey Beach',
      length: 1100,
      village: 'ភូមិដើមថ្កូវ',
      villageEn: 'Daem Thkov Village',
      commune: 'សង្កាត់កោះរ៉ុង',
      communeEn: 'Koh Rong Commune',
      description: 'ឆ្នេរដែលល្បីសម្រាប់ការស្ទូចត្រី។ ទឹកសមុទ្រមានត្រីច្រើនប្រភេទនិងជាកន្លែងល្អសម្រាប់ការស្នរកឹល។',
      descriptionEn: 'Beach famous for fishing. Sea water has many fish species and is great for snorkeling.',
      features: ['ត្រីច្រើន', 'ស្នរកឹល', 'ទឹកថ្លា', 'ការស្ទូចត្រី'],
      featuresEn: ['Many fish', 'Snorkeling', 'Clear water', 'Fishing'],
      activities: ['ស្ទូចត្រី', 'ស្នរកឹល', 'មើលត្រី', 'ហែលទឹក'],
      activitiesEn: ['Fishing', 'Snorkeling', 'Fish watching', 'Swimming'],
      bestTime: 'ព្រឹក ៥:០០ - ល្ងាច ៦:០០',
      bestTimeEn: '5:00 AM - 6:00 PM',
      accommodations: 2,
      image: 'https://images.pexels.com/photos/1450360/pexels-photo-1450360.jpeg?auto=compress&cs=tinysrgb&w=800',
      popular: true,
      difficulty: 'medium'
    },
    {
      id: 6,
      name: 'ឆ្នេរដើមថ្កូវ',
      nameEn: 'Daem Thkov Beach',
      length: 3200,
      village: 'ភូមិដើមថ្កូវ',
      villageEn: 'Daem Thkov Village',
      commune: 'សង្កាត់កោះរ៉ុង',
      communeEn: 'Koh Rong Commune',
      description: 'ឆ្នេរវែងបំផុតនៅភូមិដើមថ្កូវ។ មានទិដ្ឋភាពស្រស់ស្អាតនិងកន្លែងសម្រាប់សកម្មភាពច្រើនប្រភេទ។',
      descriptionEn: 'Longest beach in Daem Thkov village. Beautiful scenery and place for various activities.',
      features: ['ឆ្នេរវែង', 'ទិដ្ឋភាពស្រស់ស្អាត', 'សកម្មភាពច្រើន', 'កន្លែងដើរលេង'],
      featuresEn: ['Long beach', 'Beautiful scenery', 'Many activities', 'Walking area'],
      activities: ['ដើរលេងឆ្នេរ', 'ហែលទឹក', 'កីឡាឆ្នេរ', 'ថតរូប'],
      activitiesEn: ['Beach walking', 'Swimming', 'Beach sports', 'Photography'],
      bestTime: 'ព្រឹក ៦:០០ - ល្ងាច ៦:០០',
      bestTimeEn: '6:00 AM - 6:00 PM',
      accommodations: 5,
      image: 'https://images.pexels.com/photos/1450363/pexels-photo-1450363.jpeg?auto=compress&cs=tinysrgb&w=800',
      popular: true,
      difficulty: 'easy'
    },
    {
      id: 7,
      name: 'ឆ្នេរប្រាសាទ',
      nameEn: 'Prasat Beach',
      length: 1150,
      village: 'ភូមិដើមថ្កូវ',
      villageEn: 'Daem Thkov Village',
      commune: 'សង្កាត់កោះរ៉ុង',
      communeEn: 'Koh Rong Commune',
      description: 'ឆ្នេរដែលមានទេសភាពដូចប្រាសាទបុរាណ។ ថ្មធម្មជាតិនិងរូបរាងពិសេសធ្វើឱ្យកន្លែងនេះពិសេស។',
      descriptionEn: 'Beach with landscape like ancient temple. Natural rocks and special formations make this place unique.',
      features: ['ថ្មធម្មជាតិ', 'រូបរាងពិសេស', 'ទេសភាពស្រស់ស្អាត', 'កន្លែងថតរូប'],
      featuresEn: ['Natural rocks', 'Special formations', 'Beautiful landscape', 'Photo spots'],
      activities: ['ថតរូប', 'ស្វែងយល់ថ្ម', 'ហែលទឹក', 'ដើរលេង'],
      activitiesEn: ['Photography', 'Rock exploration', 'Swimming', 'Walking'],
      bestTime: 'ព្រឹក ៧:០០ - ល្ងាច ៥:០០',
      bestTimeEn: '7:00 AM - 5:00 PM',
      accommodations: 1,
      image: 'https://images.pexels.com/photos/1001682/pexels-photo-1001682.jpeg?auto=compress&cs=tinysrgb&w=800',
      popular: false,
      difficulty: 'medium'
    },
    {
      id: 8,
      name: 'ឆ្នេរថ្មត្រួត',
      nameEn: 'Thom Truot Beach',
      length: 3111,
      village: 'ភូមិដើមថ្កូវ',
      villageEn: 'Daem Thkov Village',
      commune: 'សង្កាត់កោះរ៉ុង',
      communeEn: 'Koh Rong Commune',
      description: 'ឆ្នេរវែងដែលមានថ្មធំៗនិងទេសភាពដ៏អស្ចារ្យ។ កន្លែងល្អសម្រាប់ការផ្សងព្រេងនិងស្វែងយល់ធម្មជាតិ។',
      descriptionEn: 'Long beach with large rocks and amazing landscape. Great place for adventure and nature exploration.',
      features: ['ថ្មធំ', 'ទេសភាពអស្ចារ្យ', 'ការផ្សងព្រេង', 'ធម្មជាតិព្រៃ'],
      featuresEn: ['Large rocks', 'Amazing landscape', 'Adventure', 'Wild nature'],
      activities: ['ផ្សងព្រេង', 'ឡើងថ្ម', 'ស្វែងយល់ធម្មជាតិ', 'ថតរូប'],
      activitiesEn: ['Adventure', 'Rock climbing', 'Nature exploration', 'Photography'],
      bestTime: 'ព្រឹក ៦:០០ - ល្ងាច ៤:០០',
      bestTimeEn: '6:00 AM - 4:00 PM',
      accommodations: 0,
      image: 'https://images.pexels.com/photos/1659438/pexels-photo-1659438.jpeg?auto=compress&cs=tinysrgb&w=800',
      popular: false,
      difficulty: 'hard'
    },
    {
      id: 9,
      name: 'ឆ្នេរកោងកាងមួយ',
      nameEn: 'Kong Kang 1 Beach',
      length: 1500,
      village: 'ភូមិព្រែកស្វាយ',
      villageEn: 'Prek Svay Village',
      commune: 'សង្កាត់កោះរ៉ុង',
      communeEn: 'Koh Rong Commune',
      description: 'ឆ្នេរដែលស្ថិតនៅជិតព្រៃកោងកាង។ បរិស្ថានធម្មជាតិនិងសត្វព្រៃធ្វើឱ្យកន្លែងនេះពិសេស។',
      descriptionEn: 'Beach located near mangrove forest. Natural environment and wildlife make this place special.',
      features: ['ព្រៃកោងកាង', 'សត្វព្រៃ', 'បរិស្ថានធម្មជាតិ', 'ទឹកប្រៃ'],
      featuresEn: ['Mangrove forest', 'Wildlife', 'Natural environment', 'Brackish water'],
      activities: ['មើលសត្វព្រៃ', 'ស្វែងយល់ព្រៃកោងកាង', 'ជិះកាយ៉ាក់', 'ថតរូប'],
      activitiesEn: ['Wildlife watching', 'Mangrove exploration', 'Kayaking', 'Photography'],
      bestTime: 'ព្រឹក ៦:០០ - ល្ងាច ៥:០០',
      bestTimeEn: '6:00 AM - 5:00 PM',
      accommodations: 1,
      image: 'https://images.pexels.com/photos/1371360/pexels-photo-1371360.jpeg?auto=compress&cs=tinysrgb&w=800',
      popular: true,
      difficulty: 'medium'
    },
    {
      id: 10,
      name: 'ឆ្នេរកោងកាងពីរ',
      nameEn: 'Kong Kang 2 Beach',
      length: 1550,
      village: 'ភូមិព្រែកស្វាយ',
      villageEn: 'Prek Svay Village',
      commune: 'សង្កាត់កោះរ៉ុង',
      communeEn: 'Koh Rong Commune',
      description: 'ឆ្នេរបន្តពីកោងកាងមួយ។ កន្លែងល្អសម្រាប់ការសិក្សាអេកូឡូស៊ីនិងការអប់រំបរិស្ថាន។',
      descriptionEn: 'Beach continuing from Kong Kang 1. Great place for ecosystem study and environmental education.',
      features: ['អេកូឡូស៊ី', 'ការអប់រំ', 'ការសិក្សា', 'បរិស្ថានស្អាត'],
      featuresEn: ['Ecosystem', 'Education', 'Study', 'Clean environment'],
      activities: ['សិក្សាអេកូឡូស៊ី', 'ការអប់រំបរិស្ថាន', 'ជិះកាយ៉ាក់', 'មើលសត្វស្លាប'],
      activitiesEn: ['Ecosystem study', 'Environmental education', 'Kayaking', 'Bird watching'],
      bestTime: 'ព្រឹក ៦:០០ - ល្ងាច ៥:០០',
      bestTimeEn: '6:00 AM - 5:00 PM',
      accommodations: 0,
      image: 'https://images.pexels.com/photos/1450361/pexels-photo-1450361.jpeg?auto=compress&cs=tinysrgb&w=800',
      popular: false,
      difficulty: 'medium'
    },
    {
      id: 11,
      name: 'ឆ្នេរព្រែកស្វាយ',
      nameEn: 'Prek Svay Beach',
      length: 3038,
      village: 'ភូមិព្រែកស្វាយ',
      villageEn: 'Prek Svay Village',
      commune: 'សង្កាត់កោះរ៉ុង',
      communeEn: 'Koh Rong Commune',
      description: 'ឆ្នេរធំនៅភូមិព្រែកស្វាយ។ មានដើមស្វាយច្រើននិងបរិយាកាសស្រស់ស្អាត។',
      descriptionEn: 'Large beach in Prek Svay village. Many mango trees and beautiful atmosphere.',
      features: ['ដើមស្វាយ', 'ឆ្នេរធំ', 'បរិយាកាសស្រស់ស្អាត', 'ម្លប់ធម្មជាតិ'],
      featuresEn: ['Mango trees', 'Large beach', 'Beautiful atmosphere', 'Natural shade'],
      activities: ['សម្រាកក្រោមម្លប់', 'ហែលទឹក', 'ដើរលេង', 'ញ៉ាំផ្លែស្វាយ'],
      activitiesEn: ['Resting under shade', 'Swimming', 'Walking', 'Eating mangoes'],
      bestTime: 'ព្រឹក ៧:០០ - ល្ងាច ៦:០០',
      bestTimeEn: '7:00 AM - 6:00 PM',
      accommodations: 3,
      image: 'https://images.pexels.com/photos/1640777/pexels-photo-1640777.jpeg?auto=compress&cs=tinysrgb&w=800',
      popular: true,
      difficulty: 'easy'
    },
    {
      id: 12,
      name: 'ឆ្នេរនេសាទ',
      nameEn: 'Nesad Beach (Fisherman Beach)',
      length: 761,
      village: 'ភូមិព្រែកស្វាយ',
      villageEn: 'Prek Svay Village',
      commune: 'សង្កាត់កោះរ៉ុង',
      communeEn: 'Koh Rong Commune',
      description: 'ឆ្នេរនេសាទដែលអ្នកនេសាទមូលដ្ឋានប្រើប្រាស់។ អ្នកអាចមើលការរស់នៅរបស់អ្នកនេសាទនិងទិញត្រីស្រស់។',
      descriptionEn: 'Fisherman beach used by local fishermen. You can see fishermen\'s life and buy fresh fish.',
      features: ['អ្នកនេសាទ', 'ត្រីស្រស់', 'ជីវិតមូលដ្ឋាន', 'វប្បធម៌'],
      featuresEn: ['Fishermen', 'Fresh fish', 'Local life', 'Culture'],
      activities: ['មើលការនេសាទ', 'ទិញត្រីស្រស់', 'រៀនវប្បធម៌', 'ថតរូប'],
      activitiesEn: ['Watching fishing', 'Buying fresh fish', 'Learning culture', 'Photography'],
      bestTime: 'ព្រឹក ៥:០០ - ព្រឹក ១០:០០',
      bestTimeEn: '5:00 AM - 10:00 AM',
      accommodations: 1,
      image: 'https://images.pexels.com/photos/1450360/pexels-photo-1450360.jpeg?auto=compress&cs=tinysrgb&w=800',
      popular: false,
      difficulty: 'easy'
    },
    {
      id: 13,
      name: 'ឆ្នេរលំហរ',
      nameEn: 'Lomhor Beach',
      length: 4430,
      village: 'ភូមិព្រែកស្វាយ',
      villageEn: 'Prek Svay Village',
      commune: 'សង្កាត់កោះរ៉ុង',
      communeEn: 'Koh Rong Commune',
      description: 'ឆ្នេរវែងបំផុតនៅកោះរ៉ុង។ កន្លែងល្អសម្រាប់ការដើរលេងវែងនិងរីករាយជាមួយធម្មជាតិ។',
      descriptionEn: 'Longest beach on Koh Rong. Great place for long walks and enjoying nature.',
      features: ['ឆ្នេរវែងបំផុត', 'ការដើរលេង', 'ធម្មជាតិស្រស់ស្អាត', 'ស្ងប់ស្ងាត់'],
      featuresEn: ['Longest beach', 'Walking', 'Beautiful nature', 'Peaceful'],
      activities: ['ដើរលេងវែង', 'ហែលទឹក', 'សម្រាក', 'ថតរូប'],
      activitiesEn: ['Long walking', 'Swimming', 'Relaxation', 'Photography'],
      bestTime: 'ព្រឹក ៦:០០ - ល្ងាច ៦:០០',
      bestTimeEn: '6:00 AM - 6:00 PM',
      accommodations: 2,
      image: 'https://images.pexels.com/photos/1450363/pexels-photo-1450363.jpeg?auto=compress&cs=tinysrgb&w=800',
      popular: true,
      difficulty: 'medium'
    },
    {
      id: 14,
      name: 'ឆ្នេរឋានសួគ៌',
      nameEn: 'Than Suor Beach (Paradise Beach)',
      length: 1300,
      village: 'ភូមិព្រែកស្វាយ',
      villageEn: 'Prek Svay Village',
      commune: 'សង្កាត់កោះរ៉ុង',
      communeEn: 'Koh Rong Commune',
      description: 'ឆ្នេរដែលមានឈ្មោះថា "ឋានសួគ៌" ដោយសារភាពស្រស់ស្អាតដូចសួគ៌។ កន្លែងល្អបំផុតសម្រាប់ការសម្រាក។',
      descriptionEn: 'Beach called "Paradise" because of its heaven-like beauty. Best place for relaxation.',
      features: ['ស្រស់ស្អាតដូចសួគ៌', 'ស្ងប់ស្ងាត់', 'ទឹកថ្លា', 'ខ្សាច់ស'],
      featuresEn: ['Heaven-like beauty', 'Peaceful', 'Clear water', 'White sand'],
      activities: ['សម្រាក', 'ហែលទឹក', 'ថតរូប', 'មើលព្រះអាទិត្យលិច'],
      activitiesEn: ['Relaxation', 'Swimming', 'Photography', 'Sunset viewing'],
      bestTime: 'ព្រឹក ៨:០០ - ល្ងាច ៦:០០',
      bestTimeEn: '8:00 AM - 6:00 PM',
      accommodations: 1,
      image: 'https://images.pexels.com/photos/1001682/pexels-photo-1001682.jpeg?auto=compress&cs=tinysrgb&w=800',
      popular: true,
      difficulty: 'easy'
    },
    {
      id: 15,
      name: 'ឆ្នេរសុខសាន្ត',
      nameEn: 'Sok San Beach',
      length: 5945,
      village: 'ភូមិសុខសាន្ត',
      villageEn: 'Sok San Village',
      commune: 'សង្កាត់កោះរ៉ុង',
      communeEn: 'Koh Rong Commune',
      description: 'ឆ្នេរល្បីបំផុតនៅកោះរ៉ុង។ មានរីសតប្រណីតនិងសេវាកម្មទេសចរណ៍ពេញលេញ។ កន្លែងល្អបំផុតសម្រាប់ការសម្រាកលំហែកាយ។',
      descriptionEn: 'Most famous beach on Koh Rong. Has luxury resorts and complete tourism services. Best place for vacation.',
      features: ['ល្បីបំផុត', 'រីសតប្រណីត', 'សេវាកម្មពេញលេញ', 'ទឹកថ្លាបំផុត'],
      featuresEn: ['Most famous', 'Luxury resorts', 'Complete services', 'Clearest water'],
      activities: ['ហែលទឹក', 'ស្នរកឹល', 'កីឡាទឹក', 'ស្ប៉ា', 'ភោជនីយដ្ឋាន'],
      activitiesEn: ['Swimming', 'Snorkeling', 'Water sports', 'Spa', 'Restaurants'],
      bestTime: 'ព្រឹក ៦:០០ - ល្ងាច ៨:០០',
      bestTimeEn: '6:00 AM - 8:00 PM',
      accommodations: 12,
      image: 'https://images.pexels.com/photos/1659438/pexels-photo-1659438.jpeg?auto=compress&cs=tinysrgb&w=800',
      popular: true,
      difficulty: 'easy'
    },
    {
      id: 16,
      name: 'ឆ្នេរកោះតូច',
      nameEn: 'Koh Touch Beach',
      length: 1521,
      village: 'ភូមិកោះតូច',
      villageEn: 'Koh Touch Village',
      commune: 'សង្កាត់កោះរ៉ុងសន្លឹម',
      communeEn: 'Koh Rong Sanloem Commune',
      description: 'ឆ្នេរកណ្តាលនៃកោះរ៉ុង។ មានកំពង់ផែទូកល្បឿនលឿននិងជាចំណុចចូលសំខាន់បំផុត។ មានភោជនីយដ្ឋាននិងកន្លែងស្នាក់នៅច្រើន។',
      descriptionEn: 'Central beach of Koh Rong. Has speed boat pier and is the most important entry point. Many restaurants and accommodations.',
      features: ['កំពង់ផែទូក', 'ចំណុចចូលសំខាន់', 'ភោជនីយដ្ឋានច្រើន', 'ជីវិតយប់'],
      featuresEn: ['Boat pier', 'Main entry point', 'Many restaurants', 'Nightlife'],
      activities: ['ហែលទឹក', 'ញ៉ាំអាហារ', 'ជីវិតយប់', 'ទិញអីវ៉ាន់'],
      activitiesEn: ['Swimming', 'Dining', 'Nightlife', 'Shopping'],
      bestTime: 'ព្រឹក ៦:០០ - យប់ ១០:០០',
      bestTimeEn: '6:00 AM - 10:00 PM',
      accommodations: 15,
      image: 'https://images.pexels.com/photos/1371360/pexels-photo-1371360.jpeg?auto=compress&cs=tinysrgb&w=800',
      popular: true,
      difficulty: 'easy'
    },
    {
      id: 17,
      name: 'ឆ្នេរខ្សាច់មាស',
      nameEn: 'Khsach Meas Beach (Golden Sand Beach)',
      length: 749,
      village: 'ភូមិកោះតូច',
      villageEn: 'Koh Touch Village',
      commune: 'សង្កាត់កោះរ៉ុងសន្លឹម',
      communeEn: 'Koh Rong Sanloem Commune',
      description: 'ឆ្នេរដែលមានខ្សាច់ពណ៌មាសស្រស់ស្អាត។ កន្លែងល្អសម្រាប់ការថតរូបនិងមើលព្រះអាទិត្យលិច។',
      descriptionEn: 'Beach with beautiful golden sand. Great place for photography and sunset viewing.',
      features: ['ខ្សាច់ពណ៌មាស', 'ថតរូបស្រស់ស្អាត', 'ព្រះអាទិត្យលិច', 'រ៉ូមែនទិក'],
      featuresEn: ['Golden sand', 'Beautiful photography', 'Sunset', 'Romantic'],
      activities: ['ថតរូប', 'មើលព្រះអាទិត្យលិច', 'ហែលទឹក', 'សម្រាក'],
      activitiesEn: ['Photography', 'Sunset viewing', 'Swimming', 'Relaxation'],
      bestTime: 'ល្ងាច ៤:០០ - ល្ងាច ៧:០០',
      bestTimeEn: '4:00 PM - 7:00 PM',
      accommodations: 4,
      image: 'https://images.pexels.com/photos/1450361/pexels-photo-1450361.jpeg?auto=compress&cs=tinysrgb&w=800',
      popular: true,
      difficulty: 'easy'
    },
    // New beaches added
    {
      id: 18,
      name: 'ឆ្នេររ៉ុងសន្លឹម',
      nameEn: 'Rong Sanloem Beach',
      length: 3333,
      village: 'ភូមិកោះរ៉ុងសន្លឹម',
      villageEn: 'Koh Rong Sanloem Village',
      commune: 'សង្កាត់កោះរ៉ុងសន្លឹម',
      communeEn: 'Koh Rong Sanloem Commune',
      description: 'ឆ្នេរដ៏ស្រស់ស្អាតនៅកោះរ៉ុងសន្លឹម។ ទឹកសមុទ្រពណ៌ផ្កាឈូកនិងបរិយាកាសស្ងប់ស្ងាត់ធ្វើឱ្យកន្លែងនេះពិសេស។',
      descriptionEn: 'Beautiful beach on Koh Rong Sanloem. Turquoise sea water and peaceful atmosphere make this place special.',
      features: ['ទឹកពណ៌ផ្កាឈូក', 'ស្ងប់ស្ងាត់', 'ខ្សាច់ស', 'ទេសភាពស្រស់ស្អាត'],
      featuresEn: ['Turquoise water', 'Peaceful', 'White sand', 'Beautiful scenery'],
      activities: ['ហែលទឹក', 'សម្រាក', 'ថតរូប', 'ស្នរកឹល'],
      activitiesEn: ['Swimming', 'Relaxation', 'Photography', 'Snorkeling'],
      bestTime: 'ព្រឹក ៧:០០ - ល្ងាច ៦:០០',
      bestTimeEn: '7:00 AM - 6:00 PM',
      accommodations: 8,
      image: 'https://images.pexels.com/photos/1659438/pexels-photo-1659438.jpeg?auto=compress&cs=tinysrgb&w=800',
      popular: true,
      difficulty: 'easy'
    },
    {
      id: 19,
      name: 'ឆ្នេរថ្មដុះ',
      nameEn: 'Thom Doh Beach',
      length: 1429,
      village: 'ភូមិកោះរ៉ុងសន្លឹម',
      villageEn: 'Koh Rong Sanloem Village',
      commune: 'សង្កាត់កោះរ៉ុងសន្លឹម',
      communeEn: 'Koh Rong Sanloem Commune',
      description: 'ឆ្នេរដែលមានថ្មធម្មជាតិដុះចេញពីដី។ ទេសភាពពិសេសនិងកន្លែងល្អសម្រាប់ការថតរូប។',
      descriptionEn: 'Beach with natural rocks growing from the ground. Special landscape and great place for photography.',
      features: ['ថ្មធម្មជាតិ', 'ទេសភាពពិសេស', 'កន្លែងថតរូប', 'ស្ងប់ស្ងាត់'],
      featuresEn: ['Natural rocks', 'Special landscape', 'Photography spots', 'Peaceful'],
      activities: ['ថតរូប', 'ស្វែងយល់ថ្ម', 'ហែលទឹក', 'សម្រាក'],
      activitiesEn: ['Photography', 'Rock exploration', 'Swimming', 'Relaxation'],
      bestTime: 'ព្រឹក ៦:៣០ - ល្ងាច ៥:៣០',
      bestTimeEn: '6:30 AM - 5:30 PM',
      accommodations: 2,
      image: 'https://images.pexels.com/photos/1450361/pexels-photo-1450361.jpeg?auto=compress&cs=tinysrgb&w=800',
      popular: false,
      difficulty: 'medium'
    },
    {
      id: 20,
      name: 'ឆ្នេរព្រែកកោងកាងវរៈការពារកោះលេខបួន',
      nameEn: 'Prek Kong Kang Protected Island 4 Beach',
      length: 872,
      village: 'ភូមិកោះរ៉ុងសន្លឹម',
      villageEn: 'Koh Rong Sanloem Village',
      commune: 'សង្កាត់កោះរ៉ុងសន្លឹម',
      communeEn: 'Koh Rong Sanloem Commune',
      description: 'ឆ្នេរនៅតំបន់ការពារធម្មជាតិ។ មានព្រៃកោងកាងនិងប្រព័ន្ធអេកូឡូស៊ីដ៏សម្បូរបែប។',
      descriptionEn: 'Beach in nature protected area. Has mangrove forest and rich ecosystem.',
      features: ['តំបន់ការពារ', 'ព្រៃកោងកាង', 'ប្រព័ន្ធអេកូឡូស៊ី', 'ធម្មជាតិស្អាត'],
      featuresEn: ['Protected area', 'Mangrove forest', 'Ecosystem', 'Clean nature'],
      activities: ['ស្វែងយល់ធម្មជាតិ', 'ជិះកាយ៉ាក់', 'មើលសត្វព្រៃ', 'ថតរូប'],
      activitiesEn: ['Nature exploration', 'Kayaking', 'Wildlife watching', 'Photography'],
      bestTime: 'ព្រឹក ៦:០០ - ល្ងាច ៤:០០',
      bestTimeEn: '6:00 AM - 4:00 PM',
      accommodations: 0,
      image: 'https://images.pexels.com/photos/1640777/pexels-photo-1640777.jpeg?auto=compress&cs=tinysrgb&w=800',
      popular: false,
      difficulty: 'hard'
    },
    {
      id: 21,
      name: 'ឆ្នេរខ្សាច់ស',
      nameEn: 'Khsach Sor Beach (White Sand Beach)',
      length: 1273,
      village: 'ភូមិកោះរ៉ុងសន្លឹម',
      villageEn: 'Koh Rong Sanloem Village',
      commune: 'សង្កាត់កោះរ៉ុងសន្លឹម',
      communeEn: 'Koh Rong Sanloem Commune',
      description: 'ឆ្នេរដែលមានខ្សាច់សដូចព្រិល។ ទឹកសមុទ្រថ្លាពណ៌ផ្កាឈូកនិងបរិយាកាសស្ងប់ស្ងាត់។',
      descriptionEn: 'Beach with snow-like white sand. Clear turquoise sea water and peaceful atmosphere.',
      features: ['ខ្សាច់សដូចព្រិល', 'ទឹកពណ៌ផ្កាឈូក', 'ស្ងប់ស្ងាត់', 'ស្អាត'],
      featuresEn: ['Snow-like white sand', 'Turquoise water', 'Peaceful', 'Clean'],
      activities: ['ហែលទឹក', 'សម្រាក', 'ថតរូប', 'ស្នរកឹល'],
      activitiesEn: ['Swimming', 'Relaxation', 'Photography', 'Snorkeling'],
      bestTime: 'ព្រឹក ៧:០០ - ល្ងាច ៦:០០',
      bestTimeEn: '7:00 AM - 6:00 PM',
      accommodations: 5,
      image: 'https://images.pexels.com/photos/1659438/pexels-photo-1659438.jpeg?auto=compress&cs=tinysrgb&w=800',
      popular: true,
      difficulty: 'easy'
    },
    {
      id: 22,
      name: 'ឆ្នេរ២៣',
      nameEn: 'Beach 23',
      length: 2960,
      village: 'ភូមិកោះរ៉ុងសន្លឹម',
      villageEn: 'Koh Rong Sanloem Village',
      commune: 'សង្កាត់កោះរ៉ុងសន្លឹម',
      communeEn: 'Koh Rong Sanloem Commune',
      description: 'ឆ្នេរដែលមានឈ្មោះតាមលេខ។ ឆ្នេរស្ងប់ស្ងាត់និងមិនសូវមានអ្នកទេសចរណ៍។',
      descriptionEn: 'Beach named by number. Quiet beach with few tourists.',
      features: ['ស្ងប់ស្ងាត់', 'មិនសូវមានអ្នកទេសចរណ៍', 'ធម្មជាតិ', 'ឯកជន'],
      featuresEn: ['Quiet', 'Few tourists', 'Natural', 'Private'],
      activities: ['ហែលទឹក', 'សម្រាក', 'ថតរូប', 'ដើរលេង'],
      activitiesEn: ['Swimming', 'Relaxation', 'Photography', 'Walking'],
      bestTime: 'ព្រឹក ៧:៣០ - ល្ងាច ៥:៣០',
      bestTimeEn: '7:30 AM - 5:30 PM',
      accommodations: 1,
      image: 'https://images.pexels.com/photos/1450363/pexels-photo-1450363.jpeg?auto=compress&cs=tinysrgb&w=800',
      popular: false,
      difficulty: 'medium'
    },
    {
      id: 23,
      name: 'ឆ្នេរថ្ងៃលិច',
      nameEn: 'Sunset Beach',
      length: 5148,
      village: 'ភូមិកោះរ៉ុងសន្លឹម',
      villageEn: 'Koh Rong Sanloem Village',
      commune: 'សង្កាត់កោះរ៉ុងសន្លឹម',
      communeEn: 'Koh Rong Sanloem Commune',
      description: 'ឆ្នេរដែលល្បីល្បាញសម្រាប់ការមើលព្រះអាទិត្យលិច។ ទិដ្ឋភាពព្រះអាទិត្យលិចដ៏ស្រស់ស្អាតបំផុត។',
      descriptionEn: 'Beach famous for sunset viewing. Most beautiful sunset views.',
      features: ['ព្រះអាទិត្យលិចស្រស់ស្អាត', 'ទិដ្ឋភាពល្អ', 'រ៉ូមែនទិក', 'ឆ្នេរវែង'],
      featuresEn: ['Beautiful sunset', 'Great views', 'Romantic', 'Long beach'],
      activities: ['មើលព្រះអាទិត្យលិច', 'ថតរូប', 'ហែលទឹក', 'ជប់លៀងឆ្នេរ'],
      activitiesEn: ['Sunset viewing', 'Photography', 'Swimming', 'Beach parties'],
      bestTime: 'ល្ងាច ៤:០០ - យប់ ៧:០០',
      bestTimeEn: '4:00 PM - 7:00 PM',
      accommodations: 6,
      image: 'https://images.pexels.com/photos/1001682/pexels-photo-1001682.jpeg?auto=compress&cs=tinysrgb&w=800',
      popular: true,
      difficulty: 'easy'
    },
    {
      id: 24,
      name: 'ឆ្នេរភ្លើងសញ្ញា',
      nameEn: 'Lighthouse Beach',
      length: 2086,
      village: 'ភូមិកោះរ៉ុងសន្លឹម',
      villageEn: 'Koh Rong Sanloem Village',
      commune: 'សង្កាត់កោះរ៉ុងសន្លឹម',
      communeEn: 'Koh Rong Sanloem Commune',
      description: 'ឆ្នេរនៅជិតភ្លើងសញ្ញាសមុទ្រ។ ទិដ្ឋភាពល្អពីលើភ្លើងសញ្ញានិងកន្លែងល្អសម្រាប់ថតរូប។',
      descriptionEn: 'Beach near the lighthouse. Great views from the lighthouse and good place for photography.',
      features: ['ភ្លើងសញ្ញាសមុទ្រ', 'ទិដ្ឋភាពល្អ', 'ប្រវត្តិសាស្ត្រ', 'ថតរូប'],
      featuresEn: ['Lighthouse', 'Great views', 'History', 'Photography'],
      activities: ['ឡើងភ្លើងសញ្ញា', 'ថតរូប', 'ស្វែងយល់ប្រវត្តិសាស្ត្រ', 'ហែលទឹក'],
      activitiesEn: ['Climbing lighthouse', 'Photography', 'Learning history', 'Swimming'],
      bestTime: 'ព្រឹក ៨:០០ - ល្ងាច ៦:០០',
      bestTimeEn: '8:00 AM - 6:00 PM',
      accommodations: 2,
      image: 'https://images.pexels.com/photos/1450360/pexels-photo-1450360.jpeg?auto=compress&cs=tinysrgb&w=800',
      popular: false,
      difficulty: 'medium'
    },
    {
      id: 25,
      name: 'ឆ្នេរត្រីកិ',
      nameEn: 'Treki Beach',
      length: 2914,
      village: 'ភូមិកោះរ៉ុងសន្លឹម',
      villageEn: 'Koh Rong Sanloem Village',
      commune: 'សង្កាត់កោះរ៉ុងសន្លឹម',
      communeEn: 'Koh Rong Sanloem Commune',
      description: 'ឆ្នេរដែលមានត្រីច្រើនប្រភេទ។ កន្លែងល្អសម្រាប់ការស្នរកឹលនិងមើលត្រី។',
      descriptionEn: 'Beach with many fish species. Great place for snorkeling and fish watching.',
      features: ['ត្រីច្រើនប្រភេទ', 'ស្នរកឹល', 'ទឹកថ្លា', 'ផ្កាថ្ម'],
      featuresEn: ['Many fish species', 'Snorkeling', 'Clear water', 'Coral'],
      activities: ['ស្នរកឹល', 'មើលត្រី', 'ហែលទឹក', 'ថតរូបក្រោមទឹក'],
      activitiesEn: ['Snorkeling', 'Fish watching', 'Swimming', 'Underwater photography'],
      bestTime: 'ព្រឹក ៧:០០ - ល្ងាច ៥:០០',
      bestTimeEn: '7:00 AM - 5:00 PM',
      accommodations: 3,
      image: 'https://images.pexels.com/photos/1371360/pexels-photo-1371360.jpeg?auto=compress&cs=tinysrgb&w=800',
      popular: true,
      difficulty: 'medium'
    },
    {
      id: 26,
      name: 'ឆ្នេរលំហែ',
      nameEn: 'Relaxation Beach',
      length: 817,
      village: 'ភូមិកោះរ៉ុងសន្លឹម',
      villageEn: 'Koh Rong Sanloem Village',
      commune: 'សង្កាត់កោះរ៉ុងសន្លឹម',
      communeEn: 'Koh Rong Sanloem Commune',
      description: 'ឆ្នេរតូចស្ងប់ស្ងាត់សម្រាប់ការសម្រាកលំហែកាយ។ មានម្លប់ធម្មជាតិនិងបរិយាកាសស្ងប់ស្ងាត់។',
      descriptionEn: 'Small quiet beach for relaxation. Has natural shade and peaceful atmosphere.',
      features: ['ស្ងប់ស្ងាត់', 'ម្លប់ធម្មជាតិ', 'បរិយាកាសល្អ', 'ឯកជន'],
      featuresEn: ['Quiet', 'Natural shade', 'Good atmosphere', 'Private'],
      activities: ['សម្រាក', 'អានសៀវភៅ', 'ហែលទឹក', 'យូហ្គា'],
      activitiesEn: ['Relaxation', 'Reading books', 'Swimming', 'Yoga'],
      bestTime: 'ព្រឹក ៨:០០ - ល្ងាច ៥:០០',
      bestTimeEn: '8:00 AM - 5:00 PM',
      accommodations: 2,
      image: 'https://images.pexels.com/photos/1450361/pexels-photo-1450361.jpeg?auto=compress&cs=tinysrgb&w=800',
      popular: false,
      difficulty: 'easy'
    }
  ];

  const filteredBeaches = beaches.filter(beach => {
    const villageMatch = selectedVillage === 'all' || 
      (selectedVillage === 'daem-thkov' && beach.village === 'ភូមិដើមថ្កូវ') ||
      (selectedVillage === 'prek-svay' && beach.village === 'ភូមិព្រែកស្វាយ') ||
      (selectedVillage === 'sok-san' && beach.village === 'ភូមិសុខសាន្ត') ||
      (selectedVillage === 'koh-touch' && beach.village === 'ភូមិកោះតូច') ||
      (selectedVillage === 'koh-rong-sanloem' && beach.village === 'ភូមិកោះរ៉ុងសន្លឹម');
    
    const searchMatch = searchTerm === '' || 
      (language === 'km' ? beach.name : beach.nameEn).toLowerCase().includes(searchTerm.toLowerCase());
    
    return villageMatch && searchMatch;
  });

  const displayedBeaches = showAllBeaches ? filteredBeaches : filteredBeaches.filter(beach => beach.popular);
  const popularBeaches = beaches.filter(beach => beach.popular);

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
            alt="Koh Rong Destinations"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-koh-rong-600/80 to-blue-700/80"></div>
        </div>
        
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center text-white">
          <div className="flex justify-center mb-6">
            <div className="bg-white/20 backdrop-blur-sm rounded-full p-4">
              <Compass className="h-12 w-12 text-white" />
            </div>
          </div>
          
          <h1 className="text-4xl md:text-6xl font-bold mb-6">
            {language === 'km' ? 'ទីកន្លែងទេសចរណ៍កោះរ៉ុង' : 'Koh Rong Destinations'}
          </h1>
          
          <p className="text-xl md:text-2xl mb-8 max-w-3xl mx-auto leading-relaxed">
            {language === 'km' 
              ? 'ស្វែងយល់អំពីឆ្នេរស្រស់ស្អាតទាំង ២៦ និងភូមិទាំង ៥ នៅលើកោះរ៉ុង ដែលនីមួយៗមានលក្ខណៈពិសេសខុសៗគ្នា'
              : 'Discover all 26 beautiful beaches and 5 villages on Koh Rong, each with unique characteristics'
            }
          </p>

          {/* Stats */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mt-12">
            <div className="text-center">
              <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-6">
                <div className="text-3xl md:text-4xl font-bold mb-2">26</div>
                <div className="text-lg font-semibold mb-1">
                  {language === 'km' ? 'ឆ្នេរ' : 'Beaches'}
                </div>
                <div className="text-sm opacity-90">
                  {language === 'km' ? 'ស្រស់ស្អាត' : 'Beautiful'}
                </div>
              </div>
            </div>
            <div className="text-center">
              <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-6">
                <div className="text-3xl md:text-4xl font-bold mb-2">5</div>
                <div className="text-lg font-semibold mb-1">
                  {language === 'km' ? 'ភូមិ' : 'Villages'}
                </div>
                <div className="text-sm opacity-90">
                  {language === 'km' ? 'ផ្សេងៗ' : 'Different'}
                </div>
              </div>
            </div>
            <div className="text-center">
              <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-6">
                <div className="text-3xl md:text-4xl font-bold mb-2">50+</div>
                <div className="text-lg font-semibold mb-1">
                  {language === 'km' ? 'គីឡូម៉ែត្រ' : 'Kilometers'}
                </div>
                <div className="text-sm opacity-90">
                  {language === 'km' ? 'ឆ្នេរសរុប' : 'Total coastline'}
                </div>
              </div>
            </div>
            <div className="text-center">
              <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-6">
                <div className="text-3xl md:text-4xl font-bold mb-2">70+</div>
                <div className="text-lg font-semibold mb-1">
                  {language === 'km' ? 'កន្លែងស្នាក់នៅ' : 'Accommodations'}
                </div>
                <div className="text-sm opacity-90">
                  {language === 'km' ? 'ជម្រើសច្រើន' : 'Many options'}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* View Selector */}
      <section className="py-8 bg-white border-b">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-center space-x-4">
            <button
              onClick={() => setCurrentView('beaches')}
              className={`px-6 py-3 rounded-xl font-semibold transition-all ${
                currentView === 'beaches'
                  ? 'bg-gradient-to-r from-koh-rong-500 to-koh-rong-600 text-white shadow-lg'
                  : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
              }`}
            >
              <div className="flex items-center space-x-2">
                <Waves className="h-5 w-5" />
                <span>{language === 'km' ? 'ឆ្នេរ' : 'Beaches'}</span>
              </div>
            </button>
            <button
              onClick={() => setCurrentView('villages')}
              className={`px-6 py-3 rounded-xl font-semibold transition-all ${
                currentView === 'villages'
                  ? 'bg-gradient-to-r from-koh-rong-500 to-koh-rong-600 text-white shadow-lg'
                  : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
              }`}
            >
              <div className="flex items-center space-x-2">
                <Home className="h-5 w-5" />
                <span>{language === 'km' ? 'ភូមិ' : 'Villages'}</span>
              </div>
            </button>
          </div>
        </div>
      </section>

      {/* Search and Filter Section - Only for Beaches */}
      {currentView === 'beaches' && (
        <section className="py-8 bg-white border-b">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex flex-col lg:flex-row gap-6 items-center justify-between">
              {/* Search */}
              <div className="relative flex-1 max-w-md">
                <Search className="absolute left-4 top-1/2 transform -translate-y-1/2 h-5 w-5 text-gray-400" />
                <input
                  type="text"
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                  placeholder={language === 'km' ? 'ស្វែងរកឆ្នេរ...' : 'Search beaches...'}
                  className="w-full pl-12 pr-4 py-3 rounded-xl border border-gray-300 focus:outline-none focus:ring-2 focus:ring-koh-rong-500 focus:border-transparent transition-all"
                />
              </div>

              {/* Village Filter */}
              <div className="flex items-center space-x-4">
                <Filter className="h-5 w-5 text-gray-600" />
                <select
                  value={selectedVillage}
                  onChange={(e) => setSelectedVillage(e.target.value)}
                  className="px-4 py-3 rounded-xl border border-gray-300 focus:outline-none focus:ring-2 focus:ring-koh-rong-500 focus:border-transparent transition-all"
                >
                  {villages.map(village => (
                    <option key={village.id} value={village.id}>{village.name}</option>
                  ))}
                </select>
              </div>

              {/* Show All Toggle */}
              <button
                onClick={() => setShowAllBeaches(!showAllBeaches)}
                className={`px-6 py-3 rounded-xl font-semibold transition-all ${
                  showAllBeaches
                    ? 'bg-koh-rong-500 text-white hover:bg-koh-rong-600'
                    : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                }`}
              >
                {showAllBeaches 
                  ? (language === 'km' ? 'បង្ហាញតែពេញនិយម' : 'Show Popular Only')
                  : (language === 'km' ? 'បង្ហាញទាំងអស់' : 'Show All Beaches')
                }
              </button>
            </div>
          </div>
        </section>
      )}

      {/* Introduction Section */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="space-y-16">
            {/* Main Introduction */}
            <div className="grid lg:grid-cols-2 gap-12 items-center">
              <div>
                <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
                  {language === 'km' ? 'កោះរ៉ុង កម្ពុជា' : 'Koh Rong Cambodia'}
                </h2>
                <p className="text-lg text-gray-600 mb-6 leading-relaxed">
                  {language === 'km' 
                    ? 'កោះរ៉ុងគឺជាកោះដ៏ស្រស់ស្អាតមួយនៅក្នុងខេត្តព្រះសីហនុ ដែលមានឆ្នេរខ្សាច់សនិងទឹកសមុទ្រថ្លាដូចកញ្ចក់។ កោះនេះមានឆ្នេរចំនួន ២៦ ដែលនីមួយៗមានលក្ខណៈពិសេសនិងភាពស្រស់ស្អាតខុសៗគ្នា។ កោះរ៉ុងមានភូមិចំនួន ៥ ដែលមានប្រជាពលរដ្ឋសរុបប្រមាណ ២,៨៨៩ នាក់។'
                    : 'Koh Rong is a beautiful island in Sihanoukville Province with white sand beaches and crystal clear ocean water. This island has 26 beaches, each with unique characteristics and beauty. Koh Rong has 5 villages with a total population of approximately 2,889 people.'
                  }
                </p>
                <div className="grid grid-cols-2 gap-6">
                  <div className="text-center p-4 bg-koh-rong-50 rounded-2xl">
                    <Waves className="h-8 w-8 text-koh-rong-600 mx-auto mb-2" />
                    <div className="text-2xl font-bold text-gray-900">50+</div>
                    <div className="text-sm text-gray-600">
                      {language === 'km' ? 'គីឡូម៉ែត្រឆ្នេរ' : 'KM of coastline'}
                    </div>
                  </div>
                  <div className="text-center p-4 bg-blue-50 rounded-2xl">
                    <Users className="h-8 w-8 text-blue-600 mx-auto mb-2" />
                    <div className="text-2xl font-bold text-gray-900">2,889</div>
                    <div className="text-sm text-gray-600">
                      {language === 'km' ? 'ប្រជាពលរដ្ឋ' : 'Residents'}
                    </div>
                  </div>
                </div>
              </div>
              <div className="bg-gray-50 rounded-3xl p-8">
                <img
                  src="https://images.pexels.com/photos/1659438/pexels-photo-1659438.jpeg?auto=compress&cs=tinysrgb&w=800"
                  alt="Koh Rong Beach"
                  className="w-full h-64 object-cover rounded-2xl mb-6"
                />
                <h3 className="text-xl font-bold text-gray-900 mb-4">
                  {language === 'km' ? 'ព័ត៌មានសំខាន់' : 'Key Information'}
                </h3>
                <div className="space-y-3">
                  <div className="flex items-center space-x-3">
                    <MapPin className="h-5 w-5 text-koh-rong-500" />
                    <span className="text-gray-700">
                      {language === 'km' ? 'ខេត្តព្រះសីហនុ កម្ពុជា' : 'Sihanoukville Province, Cambodia'}
                    </span>
                  </div>
                  <div className="flex items-center space-x-3">
                    <Clock className="h-5 w-5 text-koh-rong-500" />
                    <span className="text-gray-700">
                      {language === 'km' ? 'ម៉ោងបើកចំហ ៦:០០ - ១៨:០០' : 'Open hours: 6:00 - 18:00'}
                    </span>
                  </div>
                  <div className="flex items-center space-x-3">
                    <Users className="h-5 w-5 text-koh-rong-500" />
                    <span className="text-gray-700">
                      {language === 'km' ? 'កន្លែងស្នាក់នៅ ៧០+ កន្លែង' : '70+ accommodations'}
                    </span>
                  </div>
                </div>
                <button
                  onClick={onAccommodationClick}
                  className="w-full mt-6 bg-gradient-to-r from-koh-rong-500 to-koh-rong-600 hover:from-koh-rong-600 hover:to-koh-rong-700 text-white px-6 py-3 rounded-xl font-semibold transition-all duration-300 transform hover:scale-105"
                >
                  {language === 'km' ? 'មើលកន្លែងស្នាក់នៅ' : 'View Accommodations'}
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Villages Section */}
      {currentView === 'villages' && (
        <section className="py-16 bg-gray-50">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold text-gray-900 mb-4">
                {language === 'km' ? 'ភូមិនៅកោះរ៉ុង' : 'Villages on Koh Rong'}
              </h2>
              <p className="text-lg text-gray-600">
                {language === 'km' 
                  ? 'ស្វែងយល់អំពីភូមិទាំង ៥ នៅលើកោះរ៉ុង'
                  : 'Discover all 5 villages on Koh Rong'
                }
              </p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {villageData.map((village) => (
                <div key={village.id} className="bg-white rounded-3xl shadow-lg overflow-hidden hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2">
                  <div className="relative">
                    <img
                      src={village.image}
                      alt={language === 'km' ? village.name : village.nameEn}
                      className="w-full h-48 object-cover"
                    />
                    <div className="absolute top-4 left-4">
                      <span className="bg-gradient-to-r from-koh-rong-500 to-koh-rong-600 text-white px-3 py-1 rounded-full text-sm font-semibold">
                        {language === 'km' ? 'ភូមិ' : 'Village'}
                      </span>
                    </div>
                  </div>
                  
                  <div className="p-6">
                    <h3 className="text-xl font-bold text-gray-900 mb-2">
                      {language === 'km' ? village.name : village.nameEn}
                    </h3>
                    
                    {/* Village Stats */}
                    <div className="grid grid-cols-3 gap-2 mb-4">
                      <div className="bg-gray-50 rounded-xl p-3 text-center">
                        <div className="text-lg font-bold text-koh-rong-600">{village.families}</div>
                        <div className="text-xs text-gray-600">{language === 'km' ? 'គ្រួសារ' : 'Families'}</div>
                      </div>
                      <div className="bg-gray-50 rounded-xl p-3 text-center">
                        <div className="text-lg font-bold text-koh-rong-600">{village.population}</div>
                        <div className="text-xs text-gray-600">{language === 'km' ? 'ប្រជាពលរដ្ឋ' : 'Population'}</div>
                      </div>
                      <div className="bg-gray-50 rounded-xl p-3 text-center">
                        <div className="text-lg font-bold text-koh-rong-600">{village.women}</div>
                        <div className="text-xs text-gray-600">{language === 'km' ? 'ស្រី' : 'Women'}</div>
                      </div>
                    </div>
                    
                    <p className="text-gray-600 mb-4 line-clamp-3">
                      {language === 'km' ? village.description : village.descriptionEn}
                    </p>
                    
                    {/* Accommodations and Restaurants */}
                    <div className="flex items-center justify-between mb-4">
                      <div className="flex items-center space-x-2">
                        <Home className="h-4 w-4 text-gray-500" />
                        <span className="text-sm text-gray-600">
                          {village.accommodations} {language === 'km' ? 'កន្លែងស្នាក់នៅ' : 'accommodations'}
                        </span>
                      </div>
                      <div className="flex items-center space-x-2">
                        <Utensils className="h-4 w-4 text-gray-500" />
                        <span className="text-sm text-gray-600">
                          {village.restaurants} {language === 'km' ? 'ភោជនីយដ្ឋាន' : 'restaurants'}
                        </span>
                      </div>
                    </div>
                    
                    {/* Features */}
                    <div className="flex flex-wrap gap-2 mb-4">
                      {(language === 'km' ? village.features : village.featuresEn).slice(0, 3).map((feature, index) => (
                        <span key={index} className="bg-koh-rong-100 text-koh-rong-700 px-2 py-1 rounded-full text-xs">
                          {feature}
                        </span>
                      ))}
                    </div>
                    
                    {/* Beaches Count */}
                    <div className="flex items-center justify-between">
                      <div className="flex items-center space-x-2">
                        <Waves className="h-4 w-4 text-blue-500" />
                        <span className="text-sm text-gray-600">
                          {village.beaches.length} {language === 'km' ? 'ឆ្នេរ' : 'beaches'}
                        </span>
                      </div>
                      <button className="bg-koh-rong-500 hover:bg-koh-rong-600 text-white px-4 py-2 rounded-xl font-semibold transition-colors">
                        {language === 'km' ? 'មើលលម្អិត' : 'View Details'}
                      </button>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* Popular Beaches Section - Only for Beaches view */}
      {currentView === 'beaches' && !showAllBeaches && (
        <section className="py-16 bg-gray-50">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold text-gray-900 mb-4">
                {language === 'km' ? 'ឆ្នេរពេញនិយម' : 'Popular Beaches'}
              </h2>
              <p className="text-lg text-gray-600">
                {language === 'km' 
                  ? 'ឆ្នេរដែលអ្នកទេសចរណ៍ចូលចិត្តបំផុត'
                  : 'Most loved beaches by tourists'
                }
              </p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {popularBeaches.slice(0, 6).map((beach) => (
                <div key={beach.id} className="bg-white rounded-3xl shadow-lg overflow-hidden hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2">
                  <div className="relative">
                    <img
                      src={beach.image}
                      alt={language === 'km' ? beach.name : beach.nameEn}
                      className="w-full h-48 object-cover"
                    />
                    <div className="absolute top-4 left-4">
                      <span className="bg-red-500 text-white px-3 py-1 rounded-full text-sm font-semibold flex items-center space-x-1">
                        <Heart className="h-3 w-3 fill-current" />
                        <span>{language === 'km' ? 'ពេញនិយម' : 'Popular'}</span>
                      </span>
                    </div>
                    <div className="absolute top-4 right-4">
                      <span className="bg-white/90 backdrop-blur-sm text-gray-800 px-3 py-1 rounded-full text-sm font-semibold">
                        {(beach.length / 1000).toFixed(1)} km
                      </span>
                    </div>
                  </div>
                  
                  <div className="p-6">
                    <h3 className="text-xl font-bold text-gray-900 mb-2">
                      {language === 'km' ? beach.name : beach.nameEn}
                    </h3>
                    <div className="flex items-center space-x-2 text-gray-600 mb-3">
                      <MapPin className="h-4 w-4" />
                      <span className="text-sm">
                        {language === 'km' ? beach.village : beach.villageEn}
                      </span>
                    </div>
                    <p className="text-gray-600 mb-4 line-clamp-2">
                      {language === 'km' ? beach.description : beach.descriptionEn}
                    </p>
                    
                    <div className="flex items-center justify-between mb-4">
                      <div className="flex items-center space-x-2">
                        <Users className="h-4 w-4 text-gray-500" />
                        <span className="text-sm text-gray-600">
                          {beach.accommodations} {language === 'km' ? 'កន្លែងស្នាក់នៅ' : 'places'}
                        </span>
                      </div>
                      <div className="flex items-center space-x-2">
                        <Clock className="h-4 w-4 text-gray-500" />
                        <span className="text-sm text-gray-600">
                          {language === 'km' ? beach.bestTime.split(' ')[0] : beach.bestTimeEn.split(' ')[0]}
                        </span>
                      </div>
                    </div>
                    
                    <div className="flex flex-wrap gap-2 mb-4">
                      {(language === 'km' ? beach.features : beach.featuresEn).slice(0, 3).map((feature, index) => (
                        <span key={index} className="bg-koh-rong-100 text-koh-rong-700 px-2 py-1 rounded-full text-xs">
                          {feature}
                        </span>
                      ))}
                    </div>
                    
                    <div className="flex items-center justify-between">
                      <span className={`px-3 py-1 rounded-full text-sm font-semibold ${
                        beach.difficulty === 'easy' ? 'bg-green-100 text-green-800' :
                        beach.difficulty === 'medium' ? 'bg-yellow-100 text-yellow-800' :
                        'bg-red-100 text-red-800'
                      }`}>
                        {beach.difficulty === 'easy' ? (language === 'km' ? 'ងាយស្រួល' : 'Easy') :
                         beach.difficulty === 'medium' ? (language === 'km' ? 'មធ្យម' : 'Medium') :
                         (language === 'km' ? 'លំបាក' : 'Hard')
                        }
                      </span>
                      <button className="bg-koh-rong-500 hover:bg-koh-rong-600 text-white px-4 py-2 rounded-xl font-semibold transition-colors">
                        {language === 'km' ? 'មើលលម្អិត' : 'View Details'}
                      </button>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* Village Details Section */}
      {currentView === 'villages' && (
        <section className="py-16 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold text-gray-900 mb-4">
                {language === 'km' ? 'ព័ត៌មានលម្អិតអំពីភូមិ' : 'Village Details'}
              </h2>
              <p className="text-lg text-gray-600">
                {language === 'km' 
                  ? 'ព័ត៌មានលម្អិតអំពីភូមិនីមួយៗនៅលើកោះរ៉ុង'
                  : 'Detailed information about each village on Koh Rong'
                }
              </p>
            </div>

            {villageData.map((village, index) => (
              <div key={village.id} className={`bg-white rounded-3xl shadow-lg overflow-hidden mb-12 ${index % 2 === 0 ? '' : ''}`}>
                <div className={`grid md:grid-cols-2 ${index % 2 === 0 ? '' : 'md:grid-flow-dense'}`}>
                  <div className={`${index % 2 === 0 ? 'md:order-1' : 'md:order-2'}`}>
                    <img
                      src={village.image}
                      alt={language === 'km' ? village.name : village.nameEn}
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <div className={`p-8 ${index % 2 === 0 ? 'md:order-2' : 'md:order-1'}`}>
                    <h3 className="text-2xl font-bold text-gray-900 mb-4">
                      {language === 'km' ? village.name : village.nameEn}
                    </h3>
                    
                    {/* Village Stats */}
                    <div className="grid grid-cols-3 gap-4 mb-6">
                      <div className="bg-gray-50 rounded-xl p-4 text-center">
                        <div className="text-xl font-bold text-koh-rong-600">{village.families}</div>
                        <div className="text-sm text-gray-600">{language === 'km' ? 'គ្រួសារ' : 'Families'}</div>
                      </div>
                      <div className="bg-gray-50 rounded-xl p-4 text-center">
                        <div className="text-xl font-bold text-koh-rong-600">{village.population}</div>
                        <div className="text-sm text-gray-600">{language === 'km' ? 'ប្រជាពលរដ្ឋ' : 'Population'}</div>
                      </div>
                      <div className="bg-gray-50 rounded-xl p-4 text-center">
                        <div className="text-xl font-bold text-koh-rong-600">{village.women}</div>
                        <div className="text-sm text-gray-600">{language === 'km' ? 'ស្រី' : 'Women'}</div>
                      </div>
                    </div>
                    
                    <p className="text-gray-600 mb-6 leading-relaxed">
                      {language === 'km' ? village.description : village.descriptionEn}
                    </p>
                    
                    {/* Accommodations and Restaurants */}
                    <div className="grid grid-cols-2 gap-4 mb-6">
                      <div className="bg-blue-50 rounded-xl p-4">
                        <div className="flex items-center space-x-2 mb-2">
                          <Home className="h-5 w-5 text-blue-600" />
                          <h4 className="font-semibold text-gray-900">{language === 'km' ? 'កន្លែងស្នាក់នៅ' : 'Accommodations'}</h4>
                        </div>
                        <div className="text-2xl font-bold text-blue-600">{village.accommodations}</div>
                        <div className="text-sm text-gray-600">{language === 'km' ? 'កន្លែង' : 'places'}</div>
                      </div>
                      <div className="bg-green-50 rounded-xl p-4">
                        <div className="flex items-center space-x-2 mb-2">
                          <Utensils className="h-5 w-5 text-green-600" />
                          <h4 className="font-semibold text-gray-900">{language === 'km' ? 'ភោជនីយដ្ឋាន' : 'Restaurants'}</h4>
                        </div>
                        <div className="text-2xl font-bold text-green-600">{village.restaurants}</div>
                        <div className="text-sm text-gray-600">{language === 'km' ? 'កន្លែង' : 'places'}</div>
                      </div>
                    </div>
                    
                    {/* Features */}
                    <div className="mb-6">
                      <h4 className="font-semibold text-gray-900 mb-3">{language === 'km' ? 'លក្ខណៈពិសេស' : 'Features'}</h4>
                      <div className="flex flex-wrap gap-2">
                        {(language === 'km' ? village.features : village.featuresEn).map((feature, index) => (
                          <span key={index} className="bg-koh-rong-100 text-koh-rong-700 px-3 py-1 rounded-full text-sm">
                            {feature}
                          </span>
                        ))}
                      </div>
                    </div>
                    
                    {/* Activities */}
                    <div className="mb-6">
                      <h4 className="font-semibold text-gray-900 mb-3">{language === 'km' ? 'សកម្មភាព' : 'Activities'}</h4>
                      <div className="flex flex-wrap gap-2">
                        {(language === 'km' ? village.activities : village.activitiesEn).slice(0, 5).map((activity, index) => (
                          <span key={index} className="bg-gray-100 text-gray-700 px-3 py-1 rounded-full text-sm">
                            {activity}
                          </span>
                        ))}
                      </div>
                    </div>
                    
                    {/* Beaches */}
                    <div>
                      <h4 className="font-semibold text-gray-900 mb-3">{language === 'km' ? 'ឆ្នេរ' : 'Beaches'}</h4>
                      <div className="flex flex-wrap gap-2">
                        {(language === 'km' ? village.beaches : village.beachesEn).slice(0, 3).map((beach, index) => (
                          <span key={index} className="bg-blue-100 text-blue-700 px-3 py-1 rounded-full text-sm">
                            {beach}
                          </span>
                        ))}
                        {village.beaches.length > 3 && (
                          <span className="text-sm text-gray-500">
                            +{village.beaches.length - 3} {language === 'km' ? 'ផ្សេងទៀត' : 'more'}
                          </span>
                        )}
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </section>
      )}

      {/* All Beaches Section - Only for Beaches view */}
      {currentView === 'beaches' && (
        <section className="py-20">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold text-gray-900 mb-4">
                {showAllBeaches 
                  ? (language === 'km' ? 'ឆ្នេរទាំងអស់នៅកោះរ៉ុង' : 'All Beaches on Koh Rong')
                  : (language === 'km' ? 'ឆ្នេរផ្សេងទៀត' : 'Other Beaches')
                }
              </h2>
              <p className="text-lg text-gray-600">
                {language === 'km' 
                  ? `ទទួលបានលទ្ធផល ${displayedBeaches.length} ឆ្នេរ`
                  : `Found ${displayedBeaches.length} beaches`
                }
              </p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {displayedBeaches.map((beach) => (
                <div key={beach.id} className="bg-white rounded-3xl shadow-lg overflow-hidden hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2">
                  <div className="relative">
                    <img
                      src={beach.image}
                      alt={language === 'km' ? beach.name : beach.nameEn}
                      className="w-full h-48 object-cover"
                    />
                    <div className="absolute top-4 left-4">
                      {beach.popular ? (
                        <span className="bg-red-500 text-white px-3 py-1 rounded-full text-sm font-semibold flex items-center space-x-1">
                          <Heart className="h-3 w-3 fill-current" />
                          <span>{language === 'km' ? 'ពេញនិយម' : 'Popular'}</span>
                        </span>
                      ) : (
                        <span className="bg-koh-rong-500 text-white px-3 py-1 rounded-full text-sm font-semibold">
                          {language === 'km' ? 'ស្ងប់ស្ងាត់' : 'Peaceful'}
                        </span>
                      )}
                    </div>
                    <div className="absolute top-4 right-4">
                      <span className="bg-white/90 backdrop-blur-sm text-gray-800 px-3 py-1 rounded-full text-sm font-semibold">
                        {(beach.length / 1000).toFixed(1)} km
                      </span>
                    </div>
                  </div>
                  
                  <div className="p-6">
                    <h3 className="text-xl font-bold text-gray-900 mb-2">
                      {language === 'km' ? beach.name : beach.nameEn}
                    </h3>
                    <div className="flex items-center space-x-2 text-gray-600 mb-3">
                      <MapPin className="h-4 w-4" />
                      <span className="text-sm">
                        {language === 'km' ? beach.village : beach.villageEn}
                      </span>
                    </div>
                    <p className="text-gray-600 mb-4 line-clamp-2">
                      {language === 'km' ? beach.description : beach.descriptionEn}
                    </p>
                    
                    <div className="grid grid-cols-2 gap-4 mb-4 text-sm">
                      <div className="flex items-center space-x-2">
                        <Users className="h-4 w-4 text-gray-500" />
                        <span className="text-gray-600">
                          {beach.accommodations} {language === 'km' ? 'កន្លែងស្នាក់នៅ' : 'places'}
                        </span>
                      </div>
                      <div className="flex items-center space-x-2">
                        <Clock className="h-4 w-4 text-gray-500" />
                        <span className="text-gray-600">
                          {language === 'km' ? beach.bestTime.split(' ')[0] : beach.bestTimeEn.split(' ')[0]}
                        </span>
                      </div>
                    </div>
                    
                    <div className="flex flex-wrap gap-2 mb-4">
                      {(language === 'km' ? beach.features : beach.featuresEn).slice(0, 3).map((feature, index) => (
                        <span key={index} className="bg-gray-100 text-gray-700 px-2 py-1 rounded-full text-xs">
                          {feature}
                        </span>
                      ))}
                      {beach.features.length > 3 && (
                        <span className="text-xs text-gray-500">
                          +{beach.features.length - 3} {language === 'km' ? 'ផ្សេងទៀត' : 'more'}
                        </span>
                      )}
                    </div>
                    
                    <div className="flex items-center justify-between">
                      <span className={`px-3 py-1 rounded-full text-sm font-semibold ${
                        beach.difficulty === 'easy' ? 'bg-green-100 text-green-800' :
                        beach.difficulty === 'medium' ? 'bg-yellow-100 text-yellow-800' :
                        'bg-red-100 text-red-800'
                      }`}>
                        {beach.difficulty === 'easy' ? (language === 'km' ? 'ងាយស្រួល' : 'Easy') :
                         beach.difficulty === 'medium' ? (language === 'km' ? 'មធ្យម' : 'Medium') :
                         (language === 'km' ? 'លំបាក' : 'Hard')
                        }
                      </span>
                      <button className="bg-koh-rong-500 hover:bg-koh-rong-600 text-white px-4 py-2 rounded-xl font-semibold transition-colors">
                        {language === 'km' ? 'មើលលម្អិត' : 'View Details'}
                      </button>
                    </div>
                  </div>
                </div>
              ))}
            </div>

            {/* No Results */}
            {displayedBeaches.length === 0 && (
              <div className="text-center py-16">
                <div className="bg-gray-100 rounded-full p-6 w-24 h-24 mx-auto mb-6 flex items-center justify-center">
                  <Search className="h-12 w-12 text-gray-400" />
                </div>
                <h3 className="text-2xl font-bold text-gray-900 mb-4">
                  {language === 'km' ? 'រកមិនឃើញឆ្នេរ' : 'No Beaches Found'}
                </h3>
                <p className="text-gray-600 mb-6">
                  {language === 'km' 
                    ? 'សូមព្យាយាមស្វែងរកដោយប្រើពាក្យគន្លឹះផ្សេង ឬជ្រើសរើសភូមិផ្សេង'
                    : 'Try searching with different keywords or select a different village'
                  }
                </p>
                <button
                  onClick={() => {
                    setSearchTerm('');
                    setSelectedVillage('all');
                  }}
                  className="bg-koh-rong-500 hover:bg-koh-rong-600 text-white px-6 py-3 rounded-full font-semibold transition-colors"
                >
                  {language === 'km' ? 'សម្អាតការស្វែងរក' : 'Clear Search'}
                </button>
              </div>
            )}
          </div>
        </section>
      )}

      {/* Village Accommodations and Restaurants Section */}
      {currentView === 'villages' && (
        <section className="py-16 bg-gray-50">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold text-gray-900 mb-4">
                {language === 'km' ? 'កន្លែងស្នាក់នៅនិងភោជនីយដ្ឋាន' : 'Accommodations and Restaurants'}
              </h2>
              <p className="text-lg text-gray-600">
                {language === 'km' 
                  ? 'កន្លែងស្នាក់នៅនិងភោជនីយដ្ឋានល្អបំផុតនៅតាមភូមិនីមួយៗ'
                  : 'Best accommodations and restaurants in each village'
                }
              </p>
            </div>

            <div className="space-y-12">
              {villageData.map((village) => (
                <div key={`acc-${village.id}`} className="bg-white rounded-3xl shadow-lg overflow-hidden p-8">
                  <h3 className="text-2xl font-bold text-gray-900 mb-6 flex items-center">
                    <MapPin className="h-6 w-6 text-koh-rong-600 mr-2" />
                    {language === 'km' ? village.name : village.nameEn}
                  </h3>
                  
                  <div className="grid md:grid-cols-2 gap-8">
                    {/* Accommodations */}
                    <div>
                      <div className="flex items-center space-x-2 mb-4">
                        <Home className="h-5 w-5 text-koh-rong-600" />
                        <h4 className="text-xl font-semibold text-gray-900">
                          {language === 'km' ? 'កន្លែងស្នាក់នៅ' : 'Accommodations'}
                        </h4>
                      </div>
                      
                      <div className="bg-gray-50 rounded-2xl p-6">
                        <div className="space-y-4">
                          {/* Accommodation Types */}
                          <div>
                            <h5 className="font-semibold text-gray-800 mb-2">
                              {language === 'km' ? 'ប្រភេទកន្លែងស្នាក់នៅ' : 'Accommodation Types'}
                            </h5>
                            <div className="flex flex-wrap gap-2">
                              {village.id === 5 && (
                                <>
                                  <span className="bg-blue-100 text-blue-700 px-2 py-1 rounded-full text-xs">
                                    {language === 'km' ? 'រីសត' : 'Resort'}
                                  </span>
                                  <span className="bg-blue-100 text-blue-700 px-2 py-1 rounded-full text-xs">
                                    {language === 'km' ? 'វីឡា' : 'Villa'}
                                  </span>
                                  <span className="bg-blue-100 text-blue-700 px-2 py-1 rounded-full text-xs">
                                    {language === 'km' ? 'បុងហ្គាឡូ' : 'Bungalow'}
                                  </span>
                                </>
                              )}
                              {village.id === 1 && (
                                <>
                                  <span className="bg-blue-100 text-blue-700 px-2 py-1 rounded-full text-xs">
                                    {language === 'km' ? 'ហូស្តែល' : 'Hostel'}
                                  </span>
                                  <span className="bg-blue-100 text-blue-700 px-2 py-1 rounded-full text-xs">
                                    {language === 'km' ? 'ផ្ទះសំណាក់' : 'Guesthouse'}
                                  </span>
                                  <span className="bg-blue-100 text-blue-700 px-2 py-1 rounded-full text-xs">
                                    {language === 'km' ? 'បុងហ្គាឡូ' : 'Bungalow'}
                                  </span>
                                </>
                              )}
                              {(village.id === 2 || village.id === 3 || village.id === 4) && (
                                <>
                                  <span className="bg-blue-100 text-blue-700 px-2 py-1 rounded-full text-xs">
                                    {language === 'km' ? 'បុងហ្គាឡូ' : 'Bungalow'}
                                  </span>
                                  <span className="bg-blue-100 text-blue-700 px-2 py-1 rounded-full text-xs">
                                    {language === 'km' ? 'ផ្ទះសំណាក់' : 'Guesthouse'}
                                  </span>
                                  <span className="bg-blue-100 text-blue-700 px-2 py-1 rounded-full text-xs">
                                    {language === 'km' ? 'ផ្ទះស្នាក់នៅជាមួយម្ចាស់ផ្ទះ' : 'Homestay'}
                                  </span>
                                </>
                              )}
                            </div>
                          </div>
                          
                          {/* Price Range */}
                          <div>
                            <h5 className="font-semibold text-gray-800 mb-2">
                              {language === 'km' ? 'តម្លៃ' : 'Price Range'}
                            </h5>
                            <div className="flex items-center space-x-2">
                              {village.id === 5 && (
                                <span className="text-gray-700">$50 - $300 {language === 'km' ? 'ក្នុងមួយយប់' : 'per night'}</span>
                              )}
                              {village.id === 1 && (
                                <span className="text-gray-700">$10 - $100 {language === 'km' ? 'ក្នុងមួយយប់' : 'per night'}</span>
                              )}
                              {(village.id === 2 || village.id === 3 || village.id === 4) && (
                                <span className="text-gray-700">$15 - $80 {language === 'km' ? 'ក្នុងមួយយប់' : 'per night'}</span>
                              )}
                            </div>
                          </div>
                          
                          {/* Popular Places */}
                          <div>
                            <h5 className="font-semibold text-gray-800 mb-2">
                              {language === 'km' ? 'កន្លែងពេញនិយម' : 'Popular Places'}
                            </h5>
                            <ul className="space-y-2">
                              {village.id === 5 && (
                                <>
                                  <li className="flex items-center space-x-2">
                                    <Star className="h-4 w-4 text-yellow-500" />
                                    <span className="text-gray-700">Sok San Beach Resort</span>
                                  </li>
                                  <li className="flex items-center space-x-2">
                                    <Star className="h-4 w-4 text-yellow-500" />
                                    <span className="text-gray-700">Royal Retreat Koh Rong</span>
                                  </li>
                                </>
                              )}
                              {village.id === 1 && (
                                <>
                                  <li className="flex items-center space-x-2">
                                    <Star className="h-4 w-4 text-yellow-500" />
                                    <span className="text-gray-700">Monkey Island Resort</span>
                                  </li>
                                  <li className="flex items-center space-x-2">
                                    <Star className="h-4 w-4 text-yellow-500" />
                                    <span className="text-gray-700">White Beach Bungalows</span>
                                  </li>
                                </>
                              )}
                              {village.id === 2 && (
                                <>
                                  <li className="flex items-center space-x-2">
                                    <Star className="h-4 w-4 text-yellow-500" />
                                    <span className="text-gray-700">Saracen Bay Resort</span>
                                  </li>
                                  <li className="flex items-center space-x-2">
                                    <Star className="h-4 w-4 text-yellow-500" />
                                    <span className="text-gray-700">Paradise Villas</span>
                                  </li>
                                </>
                              )}
                              {village.id === 3 && (
                                <>
                                  <li className="flex items-center space-x-2">
                                    <Star className="h-4 w-4 text-yellow-500" />
                                    <span className="text-gray-700">Daem Thkov Bungalows</span>
                                  </li>
                                  <li className="flex items-center space-x-2">
                                    <Star className="h-4 w-4 text-yellow-500" />
                                    <span className="text-gray-700">Nature Retreat</span>
                                  </li>
                                </>
                              )}
                              {village.id === 4 && (
                                <>
                                  <li className="flex items-center space-x-2">
                                    <Star className="h-4 w-4 text-yellow-500" />
                                    <span className="text-gray-700">Prek Svay Community Homestay</span>
                                  </li>
                                  <li className="flex items-center space-x-2">
                                    <Star className="h-4 w-4 text-yellow-500" />
                                    <span className="text-gray-700">Mangrove Bungalows</span>
                                  </li>
                                </>
                              )}
                            </ul>
                          </div>
                        </div>
                      </div>
                    </div>
                    
                    {/* Restaurants */}
                    <div>
                      <div className="flex items-center space-x-2 mb-4">
                        <Utensils className="h-5 w-5 text-koh-rong-600" />
                        <h4 className="text-xl font-semibold text-gray-900">
                          {language === 'km' ? 'ភោជនីយដ្ឋាន' : 'Restaurants'}
                        </h4>
                      </div>
                      
                      <div className="bg-gray-50 rounded-2xl p-6">
                        <div className="space-y-4">
                          {/* Cuisine Types */}
                          <div>
                            <h5 className="font-semibold text-gray-800 mb-2">
                              {language === 'km' ? 'ប្រភេទម្ហូប' : 'Cuisine Types'}
                            </h5>
                            <div className="flex flex-wrap gap-2">
                              <span className="bg-green-100 text-green-700 px-2 py-1 rounded-full text-xs">
                                {language === 'km' ? 'ម្ហូបខ្មែរ' : 'Khmer'}
                              </span>
                              <span className="bg-green-100 text-green-700 px-2 py-1 rounded-full text-xs">
                                {language === 'km' ? 'ម្ហូបសមុទ្រ' : 'Seafood'}
                              </span>
                              {(village.id === 1 || village.id === 5) && (
                                <>
                                  <span className="bg-green-100 text-green-700 px-2 py-1 rounded-full text-xs">
                                    {language === 'km' ? 'អន្តរជាតិ' : 'International'}
                                  </span>
                                  <span className="bg-green-100 text-green-700 px-2 py-1 rounded-full text-xs">
                                    {language === 'km' ? 'ម្ហូបលឿន' : 'Fast Food'}
                                  </span>
                                </>
                              )}
                            </div>
                          </div>
                          
                          {/* Price Range */}
                          <div>
                            <h5 className="font-semibold text-gray-800 mb-2">
                              {language === 'km' ? 'តម្លៃ' : 'Price Range'}
                            </h5>
                            <div className="flex items-center space-x-2">
                              {village.id === 5 && (
                                <span className="text-gray-700">$10 - $50 {language === 'km' ? 'ក្នុងមួយពេល' : 'per meal'}</span>
                              )}
                              {village.id === 1 && (
                                <span className="text-gray-700">$5 - $30 {language === 'km' ? 'ក្នុងមួយពេល' : 'per meal'}</span>
                              )}
                              {(village.id === 2 || village.id === 3 || village.id === 4) && (
                                <span className="text-gray-700">$3 - $15 {language === 'km' ? 'ក្នុងមួយពេល' : 'per meal'}</span>
                              )}
                            </div>
                          </div>
                          
                          {/* Popular Places */}
                          <div>
                            <h5 className="font-semibold text-gray-800 mb-2">
                              {language === 'km' ? 'កន្លែងពេញនិយម' : 'Popular Places'}
                            </h5>
                            <ul className="space-y-2">
                              {village.id === 5 && (
                                <>
                                  <li className="flex items-center space-x-2">
                                    <Star className="h-4 w-4 text-yellow-500" />
                                    <span className="text-gray-700">Sok San Beach Resort Restaurant</span>
                                  </li>
                                  <li className="flex items-center space-x-2">
                                    <Star className="h-4 w-4 text-yellow-500" />
                                    <span className="text-gray-700">Fisherman's Grill</span>
                                  </li>
                                </>
                              )}
                              {village.id === 1 && (
                                <>
                                  <li className="flex items-center space-x-2">
                                    <Star className="h-4 w-4 text-yellow-500" />
                                    <span className="text-gray-700">Monkey Island Restaurant</span>
                                  </li>
                                  <li className="flex items-center space-x-2">
                                    <Star className="h-4 w-4 text-yellow-500" />
                                    <span className="text-gray-700">Sky Bar</span>
                                  </li>
                                </>
                              )}
                              {village.id === 2 && (
                                <>
                                  <li className="flex items-center space-x-2">
                                    <Star className="h-4 w-4 text-yellow-500" />
                                    <span className="text-gray-700">Saracen Bay Restaurant</span>
                                  </li>
                                  <li className="flex items-center space-x-2">
                                    <Star className="h-4 w-4 text-yellow-500" />
                                    <span className="text-gray-700">The Lighthouse</span>
                                  </li>
                                </>
                              )}
                              {village.id === 3 && (
                                <>
                                  <li className="flex items-center space-x-2">
                                    <Star className="h-4 w-4 text-yellow-500" />
                                    <span className="text-gray-700">Daem Thkov Local Eatery</span>
                                  </li>
                                  <li className="flex items-center space-x-2">
                                    <Star className="h-4 w-4 text-yellow-500" />
                                    <span className="text-gray-700">Fisherman's Hut</span>
                                  </li>
                                </>
                              )}
                              {village.id === 4 && (
                                <>
                                  <li className="flex items-center space-x-2">
                                    <Star className="h-4 w-4 text-yellow-500" />
                                    <span className="text-gray-700">Prek Svay Community Restaurant</span>
                                  </li>
                                  <li className="flex items-center space-x-2">
                                    <Star className="h-4 w-4 text-yellow-500" />
                                    <span className="text-gray-700">Mangrove View Dining</span>
                                  </li>
                                </>
                              )}
                            </ul>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  
                  <div className="mt-6 text-center">
                    <button
                      onClick={onAccommodationClick}
                      className="bg-gradient-to-r from-koh-rong-500 to-koh-rong-600 hover:from-koh-rong-600 hover:to-koh-rong-700 text-white px-6 py-3 rounded-xl font-semibold transition-all duration-300 transform hover:scale-105"
                    >
                      {language === 'km' ? 'មើលកន្លែងស្នាក់នៅទាំងអស់' : 'View All Accommodations'}
                    </button>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* Call to Action */}
      <section className="py-20 bg-gradient-to-r from-koh-rong-500 to-koh-rong-600">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center text-white">
          <h2 className="text-4xl font-bold mb-6">
            {language === 'km' ? 'ត្រៀមរៀបចំដំណើរទេសចរណ៍?' : 'Ready to Plan Your Trip?'}
          </h2>
          <p className="text-xl mb-8 opacity-90">
            {language === 'km' 
              ? 'ទាក់ទងមកកាន់ខ្ញុំដើម្បីទទួលបានការណែនាំនិងជំនួយក្នុងការរៀបចំដំណើរ'
              : 'Contact me for guidance and help in planning your trip'
            }
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button 
              onClick={onAccommodationClick}
              className="bg-white text-koh-rong-600 px-8 py-4 rounded-full font-semibold hover:bg-gray-100 transition-colors inline-flex items-center justify-center space-x-2"
            >
              <span>{language === 'km' ? 'រកកន្លែងស្នាក់នៅ' : 'Find Accommodation'}</span>
            </button>
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

export default DestinationsPage;