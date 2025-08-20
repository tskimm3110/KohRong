import React from "react";
import { Facebook, ThumbsUp, MessageSquare, Share2 } from "lucide-react";
import { useLanguage } from "../contexts/LanguageContext";

const FollowFacebook: React.FC = () => {
  const { t } = useLanguage();

  return (
    <section className="relative py-20 sm:py-24 bg-gray-50 overflow-hidden">
      <div className="absolute inset-0">
        <div
          className="absolute inset-0 bg-cover bg-center opacity-5"
          style={{
            backgroundImage:
              "url('https://images.pexels.com/photos/1001682/pexels-photo-1001682.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2')",
          }}
        ></div>
        <div className="absolute inset-0 bg-gradient-to-br from-white via-gray-50 to-white"></div>
      </div>

      <div className="relative z-10 max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Text Content */}
          <div className="text-center lg:text-left">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-5 leading-tight">
              Koh Rong Cambodia -កោះរ៉ុង
            </h2>
            <p className="text-lg text-gray-600 max-w-lg mx-auto lg:mx-0 mb-8">
              chhaileang27@gmail.com
            </p>
            <a
              href="https://web.facebook.com/kohrongshvcambodia"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center bg-gradient-to-r from-blue-500 to-blue-600 hover:from-blue-600 hover:to-blue-700 text-white px-8 py-4 rounded-full font-semibold text-lg transition-all duration-300 transform hover:scale-105 shadow-lg"
            >
              <Facebook className="h-6 w-6 mr-3" />
              Koh Rong Cambodia -កោះរ៉ុង{" "}
            </a>
          </div>

          {/* Facebook Page Mockup */}
          <div className="group perspective-1000">
            <div className="relative w-full max-w-md mx-auto bg-white rounded-2xl shadow-2xl p-4 border border-gray-200/80 transform-style-3d rotate-y-15 group-hover:rotate-y-0 transition-transform duration-500">
              {/* Cover Photo */}
              <div className="relative h-32 rounded-t-lg overflow-hidden">
                <img
                  src="src/data/cover.jpg"
                  alt="Koh Rong Cover"
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent"></div>
              </div>

              {/* Profile Picture & Name */}
              <div className="relative flex items-end -mt-12 px-4">
                <img
                  src="src/data/profile.jpg"
                  alt="Profile"
                  className="w-24 h-24 rounded-full border-4 border-white shadow-md"
                />
                <div className="ml-4 mb-1">
                  <h3 className="text-2xl font-bold  text-gray-800">
                    Koh Rong Cambodia -កោះរ៉ុង{" "}
                  </h3>
                  <p className="text-sm text-gray-500">@kohrongshvcambodia</p>
                </div>
              </div>

              {/* Mock Post */}
              <div className="mt-6 border-t border-gray-200 pt-4">
                <p className="text-gray-700 text-sm px-4">
                  ស្វែងយល់អំពីកោះដ៏ស្រស់ស្អាត
                  និងការណែនាំពេញលេញអំពីរបៀបធ្វើដំណើរមកកាន់កោះរ៉ុង រួមទាំងតម្លៃ
                  ពេលវេលា និងគន្លឹះសំខាន់ៗ។ Discover this beautiful island
                  Complete guide on how to travel to Koh Rong including prices,
                  schedules, and important tips.
                </p>
                <div className="aspect-w-16 aspect-h-9 mt-3 rounded-lg overflow-hidden mx-4">
                  <img
                    src="https://images.pexels.com/photos/3601425/pexels-photo-3601425.jpeg?auto=compress&cs=tinysrgb&w=800"
                    alt="Mock Post"
                    className="object-cover w-full h-full"
                  />
                </div>
                <div className="flex justify-around items-center text-gray-500 mt-3 border-t border-gray-200 pt-2 mx-4">
                  <button className="flex items-center space-x-1 hover:text-blue-600 transition-colors">
                    <ThumbsUp size={18} /> <span>1.2k</span>
                  </button>
                  <button className="flex items-center space-x-1 hover:text-blue-600 transition-colors">
                    <MessageSquare size={18} /> <span>158</span>
                  </button>
                  <button className="flex items-center space-x-1 hover:text-blue-600 transition-colors">
                    <Share2 size={18} /> <span>302</span>
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FollowFacebook;
