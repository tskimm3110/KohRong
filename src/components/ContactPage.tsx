import React, { useState } from "react";
import {
  ArrowLeft,
  MapPin,
  Mail,
  Phone,
  Clock,
  Send,
  MessageCircle,
  Globe,
  Facebook,
  Instagram,
  Youtube,
  Twitter,
  CheckCircle,
  AlertCircle,
} from "lucide-react";
import { useLanguage } from "../contexts/LanguageContext";
import Footer from "./Footer";

interface ContactPageProps {
  onBack: () => void;
}

const ContactPage: React.FC<ContactPageProps> = ({ onBack }) => {
  const { language } = useLanguage();
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<
    "idle" | "success" | "error"
  >("idle");

  const handleInputChange = (
    e: React.ChangeEvent<
      HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement
    >
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    // Simulate form submission
    setTimeout(() => {
      setSubmitStatus("success");
      setIsSubmitting(false);
      setFormData({ name: "", email: "", subject: "", message: "" });

      // Reset status after 5 seconds
      setTimeout(() => setSubmitStatus("idle"), 5000);
    }, 2000);
  };

  const contactInfo = {
    email: "chhaileang27@gmail.com",
    phone: "010 820 486",
    whatsapp: "097 56 86 425",
    address:
      language === "km"
        ? "កោះរ៉ុង, ខេត្តព្រះសីហនុ, កម្ពុជា"
        : "Koh Rong Island, Sihanoukville Province, Cambodia",
    hours:
      language === "km"
        ? "ចន្លោះម៉ោង ៧:០០ ព្រឹក - ៩:០០ យប់"
        : "7:00 AM - 9:00 PM",
  };

  const subjects =
    language === "km"
      ? [
          "ការណែនាំទេសចរណ៍",
          "ការកក់កន្លែងស្នាក់នៅ",
          "ការជួលទូក",
          "សំណួរអំពីកោះរ៉ុង",
          "ការសហការ",
          "ផ្សេងៗ",
        ]
      : [
          "Travel Guidance",
          "Accommodation Booking",
          "Boat Rental",
          "Questions about Koh Rong",
          "Collaboration",
          "Other",
        ];

  const faqs =
    language === "km"
      ? [
          {
            question: "តម្លៃទូកល្បឿនលឿនប៉ុន្មាន?",
            answer:
              "ទូកល្បឿនលឿនពីព្រះសីហនុទៅកោះរ៉ុង តម្លៃ ២៥ ដុល្លារ (ទៅមក)។ ម៉ោងចេញដំណើរពី ៨:០០ ព្រឹក ដល់ ៥:០០ ល្ងាច។",
          },
          {
            question: "កន្លែងស្នាក់នៅណាល្អបំផុត?",
            answer:
              "អាស្រ័យលើថវិកា និងចំណូលចិត្ត។ សម្រាប់ថវិកាមធ្យម ខ្ញុំណែនាំ Beach Bungalow នៅឆ្នេរសុខសាន្ត។ សម្រាប់ថវិកាតិច ខ្ញុំណែនាំ Hostel នៅកោះតូច។",
          },
          {
            question: "រដូវណាល្អបំផុតសម្រាប់មកកោះរ៉ុង?",
            answer:
              "ខែវិច្ឆិកា ដល់ ខែមេសា គឺជារដូវល្អបំផុត។ អាកាសធាតុស្រួល មិនមានភ្លៀង និងទឹកសមុទ្រស្ងប់។",
          },
          {
            question: "តើត្រូវយកអ្វីខ្លះទៅ?",
            answer:
              "ឡេការពារព្រះអាទិត្យ, ឈុតហែលទឹក, ស្បែកជើងឆ្នេរ, ថ្នាំពេទ្យផ្ទាល់ខ្លួន, និងប្រាក់សម្រាប់ការចំណាយ។",
          },
        ]
      : [
          {
            question: "How much does the speed boat cost?",
            answer:
              "Speed boat from Sihanoukville to Koh Rong costs $25 (round trip). Departure times from 8:00 AM to 5:00 PM.",
          },
          {
            question: "What is the best accommodation?",
            answer:
              "Depends on budget and preferences. For mid-budget, I recommend Beach Bungalows at Sok San Beach. For budget travelers, I recommend Hostels at Koh Touch.",
          },
          {
            question: "What is the best season to visit Koh Rong?",
            answer:
              "November to April is the best season. Pleasant weather, no rain, and calm seas.",
          },
          {
            question: "What should I bring?",
            answer:
              "Sunscreen, swimwear, beach shoes, personal medication, and cash for expenses.",
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
      <section className="relative py-20 bg-gradient-to-br from-koh-rong-500 via-koh-rong-600 to-blue-700 overflow-hidden">
        <div className="absolute inset-0 opacity-20">
          <img
            src="https://images.pexels.com/photos/1659438/pexels-photo-1659438.jpeg?auto=compress&cs=tinysrgb&w=1600"
            alt="Koh Rong Contact"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-koh-rong-600/80 to-blue-700/80"></div>
        </div>

        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center text-white">
          <div className="flex justify-center mb-6">
            <div className="bg-white/20 backdrop-blur-sm rounded-full p-4">
              <MessageCircle className="h-12 w-12 text-white" />
            </div>
          </div>

          <h1 className="text-4xl md:text-6xl font-bold mb-6">
            {language === "km" ? "ទំនាក់ទំនងជាមួយយើង" : "Contact Us"}
          </h1>

          <p className="text-xl md:text-2xl mb-8 max-w-3xl mx-auto leading-relaxed">
            {language === "km"
              ? "ខ្ញុំរីករាយក្នុងការជួយអ្នករៀបចំដំណើរទេសចរណ៍ដ៏អស្ចារ្យនៅកោះរ៉ុង កម្ពុជា"
              : "I'm happy to help you plan an amazing trip to Koh Rong Cambodia"}
          </p>

          {/* Quick Contact Stats */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mt-12">
            <div className="text-center">
              <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-6">
                <div className="text-3xl md:text-4xl font-bold mb-2">24/7</div>
                <div className="text-lg font-semibold mb-1">
                  {language === "km" ? "ជំនួយ" : "Support"}
                </div>
                <div className="text-sm opacity-90">
                  {language === "km" ? "ឆ្លើយតបរហ័ស" : "Quick response"}
                </div>
              </div>
            </div>
            <div className="text-center">
              <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-6">
                <div className="text-3xl md:text-4xl font-bold mb-2">5+</div>
                <div className="text-lg font-semibold mb-1">
                  {language === "km" ? "ឆ្នាំ" : "Years"}
                </div>
                <div className="text-sm opacity-90">
                  {language === "km" ? "បទពិសោធន៍" : "Experience"}
                </div>
              </div>
            </div>
            <div className="text-center">
              <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-6">
                <div className="text-3xl md:text-4xl font-bold mb-2">1000+</div>
                <div className="text-lg font-semibold mb-1">
                  {language === "km" ? "អ្នកទេសចរណ៍" : "Tourists"}
                </div>
                <div className="text-sm opacity-90">
                  {language === "km" ? "បានជួយ" : "Helped"}
                </div>
              </div>
            </div>
            <div className="text-center">
              <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-6">
                <div className="text-3xl md:text-4xl font-bold mb-2">100%</div>
                <div className="text-lg font-semibold mb-1">
                  {language === "km" ? "ពិតប្រាកដ" : "Authentic"}
                </div>
                <div className="text-sm opacity-90">
                  {language === "km" ? "ព័ត៌មាន" : "Information"}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Form & Info Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid  gap-16">
            {/* Contact Form */}

            {/* Contact Information */}
            <div className="space-y-8">
              <div>
                <h2 className="text-3xl font-bold text-gray-900 mb-6">
                  {language === "km"
                    ? "ព័ត៌មានទំនាក់ទំនង"
                    : "Contact Information"}
                </h2>
                <p className="text-lg text-gray-600 mb-8">
                  {language === "km"
                    ? "អ្នកអាចទាក់ទងមកកាន់ខ្ញុំតាមរយៈវិធីសាស្រ្តខាងក្រោម"
                    : "You can reach me through the following methods"}
                </p>
              </div>

              {/* Contact Cards */}
              <div className="space-y-6">
                <div className="bg-white rounded-2xl p-6 shadow-lg border border-gray-100 hover:shadow-xl transition-all duration-300">
                  <div className="flex items-center space-x-4">
                    <div className="bg-gradient-to-r from-koh-rong-500 to-koh-rong-600 p-3 rounded-xl">
                      <Mail className="h-6 w-6 text-white" />
                    </div>
                    <div>
                      <h3 className="text-lg font-semibold text-gray-900">
                        {language === "km" ? "អ៊ីមែល" : "Email"}
                      </h3>
                      <a
                        href={`mailto:${contactInfo.email}`}
                        className="text-koh-rong-600 hover:text-koh-rong-700 transition-colors"
                      >
                        {contactInfo.email}
                      </a>
                    </div>
                  </div>
                </div>

                <div className="bg-white rounded-2xl p-6 shadow-lg border border-gray-100 hover:shadow-xl transition-all duration-300">
                  <div className="flex items-center space-x-4">
                    <div className="bg-gradient-to-r from-green-500 to-green-600 p-3 rounded-xl">
                      <Phone className="h-6 w-6 text-white" />
                    </div>
                    <div>
                      <h3 className="text-lg font-semibold text-gray-900">
                        {language === "km"
                          ? "ទូរស័ព្ទ / WhatsApp"
                          : "Phone / WhatsApp"}
                      </h3>
                      <div className="space-y-1">
                        <a
                          href={`tel:${contactInfo.phone.replace(/\s/g, "")}`}
                          className="block text-koh-rong-600 hover:text-koh-rong-700 transition-colors"
                        >
                          {contactInfo.phone}
                        </a>
                        <a
                          href={`https://wa.me/855${contactInfo.whatsapp
                            .replace(/\s/g, "")
                            .substring(1)}`}
                          className="block text-green-600 hover:text-green-700 transition-colors"
                        >
                          {contactInfo.whatsapp} (WhatsApp)
                        </a>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="bg-white rounded-2xl p-6 shadow-lg border border-gray-100 hover:shadow-xl transition-all duration-300">
                  <div className="flex items-center space-x-4">
                    <div className="bg-gradient-to-r from-blue-500 to-blue-600 p-3 rounded-xl">
                      <MapPin className="h-6 w-6 text-white" />
                    </div>
                    <div>
                      <h3 className="text-lg font-semibold text-gray-900">
                        {language === "km" ? "ទីតាំង" : "Location"}
                      </h3>
                      <p className="text-gray-600">{contactInfo.address}</p>
                    </div>
                  </div>
                </div>

                <div className="bg-white rounded-2xl p-6 shadow-lg border border-gray-100 hover:shadow-xl transition-all duration-300">
                  <div className="flex items-center space-x-4">
                    <div className="bg-gradient-to-r from-purple-500 to-purple-600 p-3 rounded-xl">
                      <Clock className="h-6 w-6 text-white" />
                    </div>
                    <div>
                      <h3 className="text-lg font-semibold text-gray-900">
                        {language === "km" ? "ម៉ោងធ្វើការ" : "Working Hours"}
                      </h3>
                      <p className="text-gray-600">{contactInfo.hours}</p>
                      <p className="text-sm text-gray-500 mt-1">
                        {language === "km" ? "រាល់ថ្ងៃ" : "Every day"}
                      </p>
                    </div>
                  </div>
                </div>
              </div>

              {/* Social Media */}
              <div className="bg-gradient-to-br from-gray-50 to-blue-50 rounded-2xl p-6">
                <h3 className="text-xl font-bold text-gray-900 mb-4 flex items-center justify-center">
                  {language === "km" ? "តាមដានយើងនៅលើ" : "Follow Us On"}
                </h3>
                <div className="flex space-x-4 justify-center">
                  <a
                    href="https://web.facebook.com/kohrongshvcambodia"
                    className="bg-blue-600 hover:bg-blue-700 p-3 rounded-xl transition-colors group"
                  >
                    <Facebook className="h-6 w-6 text-white group-hover:scale-110 transition-transform" />
                  </a>
                  <a
                    href="https://www.instagram.com/kohrongcambodiashv?igsh=MTMweXN3Y2R6dWU2bw%3D%3D&utm_source=qr"
                    className="bg-pink-600 hover:bg-pink-700 p-3 rounded-xl transition-colors group"
                  >
                    <Instagram className="h-6 w-6 text-white group-hover:scale-110 transition-transform" />
                  </a>
                  <a
                    href="https://www.youtube.com/@chhaileangchen6864"
                    className="bg-red-600 hover:bg-red-700 p-3 rounded-xl transition-colors group"
                  >
                    <Youtube className="h-6 w-6 text-white group-hover:scale-110 transition-transform" />
                  </a>
                  <a
                    href="https://t.me/chhaileang_chen"
                    className="bg-green-600 text-white flex items-center  hover:bg-green-700 p-3 rounded-xl transition-colors group"
                  >
                    <svg
                      className="h-5 w-5"
                      fill="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path d="M11.944 0A12 12 0 0 0 0 12a12 12 0 0 0 12 12 12 12 0 0 0 12-12A12 12 0 0 0 12 0a12 12 0 0 0-.056 0zm4.962 7.224c.1-.002.321.023.465.14a.506.506 0 0 1 .171.325c.016.093.036.306.02.472-.18 1.898-.962 6.502-1.36 8.627-.168.9-.499 1.201-.82 1.23-.696.065-1.225-.46-1.9-.902-1.056-.693-1.653-1.124-2.678-1.8-1.185-.78-.417-1.21.258-1.91.177-.184 3.247-2.977 3.307-3.23.007-.032.014-.15-.056-.212s-.174-.041-.249-.024c-.106.024-1.793 1.14-5.061 3.345-.48.33-.913.49-1.302.48-.428-.008-1.252-.241-1.865-.44-.752-.245-1.349-.374-1.297-.789.027-.216.325-.437.893-.663 3.498-1.524 5.83-2.529 6.998-3.014 3.332-1.386 4.025-1.627 4.476-1.635z" />
                    </svg>{" "}
                  </a>
                  <a
                    href="https://www.tiktok.com/@koh.rong.cambodia?_t=ZS-8yhR489SGyO&_r=1"
                    className="bg-blue-800 text-white flex items-center  hover:bg-blue-800 p-3 rounded-xl transition-colors group"
                  >
                    <svg
                      className="h-5 w-5"
                      fill="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path d="M12.525.02c1.31-.02 2.61-.01 3.91-.02.08 1.53.63 3.09 1.75 4.17 1.12 1.11 2.7 1.62 4.24 1.79v4.03c-1.44-.05-2.89-.35-4.2-.97-.57-.26-1.1-.59-1.62-.93-.01 2.92.01 5.84-.02 8.75-.08 1.4-.54 2.79-1.35 3.94-1.31 1.92-3.58 3.17-5.91 3.21-1.43.08-2.86-.31-4.08-1.03-2.02-1.19-3.44-3.37-3.65-5.71-.02-.5-.03-1-.01-1.49.18-1.9 1.12-3.72 2.58-4.96 1.66-1.44 3.98-2.13 6.15-1.72.02 1.48-.04 2.96-.04 4.44-.99-.32-2.15-.23-3.02.37-.63.41-1.11 1.04-1.36 1.75-.21.51-.15 1.07-.14 1.61.24 1.64 1.82 3.02 3.5 2.87 1.12-.01 2.19-.66 2.77-1.61.19-.33.4-.67.41-1.06.1-1.79.06-3.57.07-5.36.01-4.03-.01-8.05.02-12.07z" />
                    </svg>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">
              {language === "km"
                ? "សំណួរដែលសួរញឹកញាប់"
                : "Frequently Asked Questions"}
            </h2>
            <p className="text-xl text-gray-600">
              {language === "km"
                ? "ចម្លើយលើសំណួរដែលអ្នកទេសចរណ៍សួរញឹកញាប់"
                : "Answers to questions tourists ask frequently"}
            </p>
          </div>

          <div className="space-y-6">
            {faqs.map((faq, index) => (
              <div
                key={index}
                className="bg-white rounded-2xl p-6 shadow-lg border border-gray-100"
              >
                <h3 className="text-lg font-semibold text-gray-900 mb-3">
                  {faq.question}
                </h3>
                <p className="text-gray-600 leading-relaxed">{faq.answer}</p>
              </div>
            ))}
          </div>

          <div className="text-center mt-12">
            <p className="text-lg text-gray-600 mb-6">
              {language === "km"
                ? "មានសំណួរផ្សេងទៀតទេ? សូមទាក់ទងមកកាន់ខ្ញុំ!"
                : "Have other questions? Feel free to contact me!"}
            </p>
            <a
              href="https://t.me/chhaileang_chen"
              className="bg-gradient-to-r from-koh-rong-500 to-koh-rong-600 hover:from-koh-rong-600 hover:to-koh-rong-700 text-white px-8 py-4 rounded-full font-semibold text-lg transition-all duration-300 transform hover:scale-105 shadow-lg"
            >
              {language === "km" ? "ផ្ញើសំណួរ" : "Ask a Question"}
            </a>
          </div>
        </div>
      </section>

      {/* Map Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">
              {language === "km" ? "ទីតាំងកោះរ៉ុង" : "Koh Rong Location"}
            </h2>
            <p className="text-xl text-gray-600">
              {language === "km"
                ? "កោះរ៉ុងស្ថិតនៅក្នុងខេត្តព្រះសីហនុ កម្ពុជា"
                : "Koh Rong is located in Sihanoukville Province, Cambodia"}
            </p>
          </div>

          <div className="bg-gray-100 rounded-3xl overflow-hidden shadow-xl">
            <div className="aspect-w-16 aspect-h-9 h-96">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d125883.35744903189!2d103.20263143840355!3d10.685432819394335!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3108b1e7b1a9a23b%3A0x33b33a7a2a75a643!2sKoh%20Rong!5e0!3m2!1sen!2skh!4v1724150291590!5m2!1sen!2skh"
                width="100%"
                height="100%"
                style={{ border: 0 }}
                allowFullScreen={true}
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                title="Koh Rong Location"
              ></iframe>
            </div>
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-20 bg-gradient-to-r from-koh-rong-500 to-koh-rong-600">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center text-white">
          <h2 className="text-4xl font-bold mb-6">
            {language === "km" ? "រៀបចំដំណើរទេសចរណ៍របស់អ្នក" : "Plan Your Trip"}
          </h2>
          <p className="text-xl mb-8 opacity-90">
            {language === "km"
              ? "ខ្ញុំរីករាយក្នុងការជួយអ្នករៀបចំដំណើរទេសចរណ៍ដ៏អស្ចារ្យនៅកោះរ៉ុង"
              : "I'm excited to help you plan an amazing trip to Koh Rong"}
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

export default ContactPage;
