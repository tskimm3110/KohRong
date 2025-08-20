// ...existing code...
import React, { useState } from "react";
import {
  ArrowLeft,
  Search,
  Filter,
  Calendar,
  User,
  Clock,
  Eye,
  Heart,
  MessageCircle,
  ArrowRight,
  Tag,
  TrendingUp,
  Star,
} from "lucide-react";
import { useLanguage } from "../contexts/LanguageContext";
import { articles } from "../data/articles";
import Footer from "./Footer";

interface BlogPageProps {
  onBack: () => void;
  onArticleClick: (articleId: number) => void;
}

const BlogPage: React.FC<BlogPageProps> = ({ onBack, onArticleClick }) => {
  const { language } = useLanguage();

  // UI (temporary) inputs
  const [tempSearch, setTempSearch] = useState("");
  const [tempSelectedCategory, setTempSelectedCategory] = useState("all");
  const [tempSortBy, setTempSortBy] = useState("latest");

  // Applied filters used to compute results
  const [appliedSearch, setAppliedSearch] = useState("");
  const [appliedCategory, setAppliedCategory] = useState("all");
  const [appliedSortBy, setAppliedSortBy] = useState("latest");

  const categories = [
    {
      id: "all",
      name: language === "km" ? "ទាំងអស់" : "All",
      count: articles.length,
    },
    {
      id: "travel",
      name: language === "km" ? "ការធ្វើដំណើរ" : "Travel",
      count: articles.filter(
        (a) =>
          (language === "km" ? a.category : a.categoryEn) ===
          (language === "km" ? "ការធ្វើដំណើរ" : "Travel")
      ).length,
    },
    {
      id: "destinations",
      name: language === "km" ? "ទីកន្លែងទេសចរណ៍" : "Destinations",
      count: articles.filter(
        (a) =>
          (language === "km" ? a.category : a.categoryEn) ===
          (language === "km" ? "ទីកន្លែងទេសចរណ៍" : "Destinations")
      ).length,
    },
    {
      id: "food",
      name: language === "km" ? "អាហារ" : "Food",
      count: articles.filter(
        (a) =>
          (language === "km" ? a.category : a.categoryEn) ===
          (language === "km" ? "អាហារ" : "Food")
      ).length,
    },
    {
      id: "accommodation",
      name: language === "km" ? "កន្លែងស្នាក់នៅ" : "Accommodation",
      count: articles.filter(
        (a) =>
          (language === "km" ? a.category : a.categoryEn) ===
          (language === "km" ? "កន្លែងស្នាក់នៅ" : "Accommodation")
      ).length,
    },
    {
      id: "culture",
      name: language === "km" ? "វប្បធម៌" : "Culture",
      count: articles.filter(
        (a) =>
          (language === "km" ? a.category : a.categoryEn) ===
          (language === "km" ? "វប្បធម៌" : "Culture")
      ).length,
    },
    {
      id: "nature",
      name: language === "km" ? "ធម្មជាតិ" : "Nature",
      count: articles.filter(
        (a) =>
          (language === "km" ? a.category : a.categoryEn) ===
          (language === "km" ? "ធម្មជាតិ" : "Nature")
      ).length,
    },
  ];

  const sortOptions = [
    { id: "latest", name: language === "km" ? "ថ្មីបំផុត" : "Latest" },
    { id: "popular", name: language === "km" ? "ពេញនិយម" : "Most Popular" },
    { id: "views", name: language === "km" ? "មើលច្រើន" : "Most Viewed" },
    { id: "likes", name: language === "km" ? "ចូលចិត្តច្រើន" : "Most Liked" },
  ];

  // helper: get localized category name for selectedCategory id
  const getCategoryNameById = (id: string) => {
    const found = categories.find((c) => c.id === id);
    return found ? found.name.toLowerCase() : "";
  };

  // whether applied filters are active
  const appliedFiltersActive =
    appliedSearch.trim() !== "" ||
    appliedCategory !== "all" ||
    appliedSortBy !== "latest";

  // Filter and sort articles using the applied filters
  const filteredArticles = articles
    .filter((article) => {
      const title = (
        language === "km" ? article.title : article.titleEn
      ).toLowerCase();
      const excerpt = (
        language === "km" ? article.excerpt : article.excerptEn
      ).toLowerCase();
      const matchesSearch =
        appliedSearch.trim() === "" ||
        title.includes(appliedSearch.toLowerCase()) ||
        excerpt.includes(appliedSearch.toLowerCase());

      const articleCategoryName = (
        language === "km" ? article.category : article.categoryEn
      ).toLowerCase();
      const selectedCategoryName = getCategoryNameById(appliedCategory);

      const matchesCategory =
        appliedCategory === "all" ||
        articleCategoryName === selectedCategoryName;

      return matchesSearch && matchesCategory;
    })
    .sort((a, b) => {
      switch (appliedSortBy) {
        case "popular":
          return b.likes + b.comments - (a.likes + a.comments);
        case "views":
          return b.views - a.views;
        case "likes":
          return b.likes - a.likes;
        default:
          return b.id - a.id; // Latest first
      }
    });

  const featuredArticles = articles.filter((article) => article.featured);
  const popularTags = [
    language === "km" ? "កោះរ៉ុង" : "Koh Rong",
    language === "km" ? "ឆ្នេរ" : "Beach",
    language === "km" ? "ទូកល្បឿនលឿន" : "Speed Boat",
    language === "km" ? "ទេសចរណ៍" : "Tourism",
    language === "km" ? "កម្ពុជា" : "Cambodia",
    language === "km" ? "ហែលទឹក" : "Swimming",
    language === "km" ? "ថតរូប" : "Photography",
    language === "km" ? "ធម្មជាតិ" : "Nature",
  ];

  const clearAllFilters = () => {
    // clear both UI temps and applied
    setTempSearch("");
    setTempSelectedCategory("all");
    setTempSortBy("latest");
    setAppliedSearch("");
    setAppliedCategory("all");
    setAppliedSortBy("latest");
  };

  const applyFilters = (scroll = true) => {
    setAppliedSearch(tempSearch);
    setAppliedCategory(tempSelectedCategory);
    setAppliedSortBy(tempSortBy);
    if (scroll) {
      const el = document.getElementById("results");
      if (el) el.scrollIntoView({ behavior: "smooth" });
    }
  };

  const scrollToResults = () => {
    const el = document.getElementById("results");
    if (el) el.scrollIntoView({ behavior: "smooth" });
  };

  // whether UI inputs differ from applied filters (show Apply button)
  const hasPendingChanges =
    tempSearch !== appliedSearch ||
    tempSelectedCategory !== appliedCategory ||
    tempSortBy !== appliedSortBy;

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
      <section className="relative py-20 bg-gradient-to-br  overflow-hidden">
        <div className="absolute inset-0 opacity-100">
          <img
            src="https://a.cdn-hotels.com/gdcs/production190/d337/2ad33536-121b-4f15-931d-954d86d66817.jpg"
            alt="Koh Rong Blog"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-black opacity-40"></div>
        </div>

        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center text-white">
          <div className="flex justify-center mb-6">
            <div className="bg-white/20 backdrop-blur-sm rounded-full p-4">
              <TrendingUp className="h-12 w-12 text-white" />
            </div>
          </div>

          <h1 className="text-4xl md:text-6xl shadow-2xl  font-bold mb-6">
            {language === "km"
              ? "ប្លុកកោះរ៉ុង កម្ពុជា"
              : "Koh Rong Cambodia Blog"}
          </h1>

          <p className="text-xl md:text-2xl mb-8 max-w-3xl mx-auto shadow-xl leading-relaxed">
            {language === "km"
              ? "រឿងរ៉ាវ ព័ត៌មាន និងបទពិសោធន៍ពិតប្រាកដពីកោះរ៉ុង កម្ពុជា"
              : "Stories, information, and authentic experiences from Koh Rong Cambodia"}
          </p>

          {/* Blog Stats */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mt-12">
            <div className="text-center">
              <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-6">
                <div className="text-3xl md:text-4xl font-bold mb-2">
                  {articles.length}
                </div>
                <div className="text-lg font-semibold mb-1">
                  {language === "km" ? "អត្ថបទ" : "Articles"}
                </div>
                <div className="text-sm opacity-90">
                  {language === "km" ? "បានបោះពុម្ព" : "Published"}
                </div>
              </div>
            </div>
            <div className="text-center">
              <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-6">
                <div className="text-3xl md:text-4xl font-bold mb-2">
                  {articles
                    .reduce((sum, article) => sum + article.views, 0)
                    .toLocaleString()}
                </div>
                <div className="text-lg font-semibold mb-1">
                  {language === "km" ? "ការមើល" : "Views"}
                </div>
                <div className="text-sm opacity-90">
                  {language === "km" ? "សរុប" : "Total"}
                </div>
              </div>
            </div>
            <div className="text-center">
              <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-6">
                <div className="text-3xl md:text-4xl font-bold mb-2">
                  {articles.reduce((sum, article) => sum + article.likes, 0)}
                </div>
                <div className="text-lg font-semibold mb-1">
                  {language === "km" ? "ចូលចិត្ត" : "Likes"}
                </div>
                <div className="text-sm opacity-90">
                  {language === "km" ? "សរុប" : "Total"}
                </div>
              </div>
            </div>
            <div className="text-center">
              <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-6">
                <div className="text-3xl md:text-4xl font-bold mb-2">
                  {categories.length - 1}
                </div>
                <div className="text-lg font-semibold mb-1">
                  {language === "km" ? "ប្រភេទ" : "Categories"}
                </div>
                <div className="text-sm opacity-90">
                  {language === "km" ? "ផ្សេងៗ" : "Different"}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Search and Filter Section */}
      <section className="py-12 bg-white border-b">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col lg:flex-row gap-6 items-center justify-between">
            {/* Search */}
            <div className="relative flex-1 max-w-md">
              <Search className="absolute left-4 top-1/2 transform -translate-y-1/2 h-5 w-5 text-gray-400" />
              <input
                type="text"
                value={tempSearch}
                onChange={(e) => setTempSearch(e.target.value)}
                onKeyDown={(e) => {
                  if (e.key === "Enter") {
                    // apply search immediately when pressing Enter
                    setAppliedSearch(e.currentTarget.value);
                    // keep other applied values in sync with current temps
                    setAppliedCategory(tempSelectedCategory);
                    setAppliedSortBy(tempSortBy);
                    const el = document.getElementById("results");
                    if (el) el.scrollIntoView({ behavior: "smooth" });
                  }
                }}
                placeholder={
                  language === "km" ? "ស្វែងរកអត្ថបទ..." : "Search articles..."
                }
                className="w-full pl-12 pr-4 py-3 rounded-xl border border-gray-300 focus:outline-none focus:ring-2 focus:ring-koh-rong-500 focus:border-transparent transition-all"
              />
            </div>
            ...
            <select
              value={tempSelectedCategory}
              onChange={(e) => {
                const val = e.target.value;
                // update UI temp
                setTempSelectedCategory(val);
                // apply immediately
                setAppliedCategory(val);
                // keep other applied filters consistent
                setAppliedSearch(tempSearch);
                setAppliedSortBy(tempSortBy);
                const el = document.getElementById("results");
                if (el) el.scrollIntoView({ behavior: "smooth" });
              }}
              className="px-4 py-3 rounded-xl border border-gray-300 focus:outline-none focus:ring-2 focus:ring-koh-rong-500 focus:border-transparent transition-all"
            ></select>
            {/* Category Filter */}
            <div className="flex items-center space-x-4">
              <Filter className="h-5 w-5 text-gray-600" />
              <select
                value={tempSelectedCategory}
                onChange={(e) => setTempSelectedCategory(e.target.value)}
                className="px-4 py-3 rounded-xl border border-gray-300 focus:outline-none focus:ring-2 focus:ring-koh-rong-500 focus:border-transparent transition-all"
              >
                {categories.map((category) => (
                  <option key={category.id} value={category.id}>
                    {category.name} ({category.count})
                  </option>
                ))}
              </select>
            </div>
            {/* Sort */}
            <div className="flex items-center space-x-4">
              <span className="text-gray-600 font-medium">
                {language === "km" ? "តម្រៀប:" : "Sort by:"}
              </span>
              <select
                value={tempSortBy}
                onChange={(e) => setTempSortBy(e.target.value)}
                className="px-4 py-3 rounded-xl border border-gray-300 focus:outline-none focus:ring-2 focus:ring-koh-rong-500 focus:border-transparent transition-all"
              >
                {sortOptions.map((option) => (
                  <option key={option.id} value={option.id}>
                    {option.name}
                  </option>
                ))}
              </select>
            </div>
            {/* Filter actions */}
            <div className="flex items-center space-x-3">
              {hasPendingChanges ? (
                <button
                  onClick={() => applyFilters(true)}
                  className="px-4 py-3 bg-koh-rong-500 hover:bg-koh-rong-600 text-white rounded-xl font-semibold transition-colors"
                >
                  {language === "km" ? "អនុវត្ត" : "Apply Filters"}
                </button>
              ) : (
                appliedFiltersActive && (
                  <button
                    onClick={scrollToResults}
                    className="px-4 py-3 bg-koh-rong-500 hover:bg-koh-rong-600 text-white rounded-xl font-semibold transition-colors"
                  >
                    {language === "km"
                      ? `បង្ហាញ ${filteredArticles.length} លទ្ធផល`
                      : `View ${filteredArticles.length} results`}
                  </button>
                )
              )}

              <button
                onClick={clearAllFilters}
                className="px-4 py-3 bg-gray-100 hover:bg-gray-200 text-gray-700 rounded-xl transition-colors"
              >
                {language === "km" ? "សម្អាត" : "Clear"}
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Main Content */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-4 gap-12">
            {/* Articles Grid */}
            <div className="lg:col-span-3">
              {/* Results Info */}
              <div id="results" className="mb-8">
                <h2 className="text-2xl font-bold text-gray-900 mb-2">
                  {language === "km"
                    ? `ទទួលបានលទ្ធផល ${filteredArticles.length} អត្ថបទ`
                    : `Found ${filteredArticles.length} articles`}
                </h2>
                {appliedSearch && (
                  <p className="text-gray-600">
                    {language === "km"
                      ? `លទ្ធផលសម្រាប់ "${appliedSearch}"`
                      : `Results for "${appliedSearch}"`}
                  </p>
                )}
              </div>

              {/* Articles */}
              <div className="space-y-8">
                {filteredArticles.map((article, index) => (
                  <article
                    key={article.id}
                    onClick={() => onArticleClick(article.id)}
                    className="bg-white rounded-3xl shadow-lg overflow-hidden hover:shadow-xl transition-all duration-300 group cursor-pointer border border-gray-100"
                  >
                    <div
                      className={`grid ${
                        index % 2 === 0 ? "md:grid-cols-3" : "md:grid-cols-3"
                      } gap-0`}
                    >
                      {/* Image */}
                      <div
                        className={`relative overflow-hidden ${
                          index % 2 === 0 ? "md:order-1" : "md:order-2"
                        }`}
                      >
                        <img
                          src={article.image}
                          alt={
                            language === "km" ? article.title : article.titleEn
                          }
                          className="w-full h-64 md:h-full object-cover group-hover:scale-105 transition-transform duration-700"
                        />
                        <div className="absolute top-4 left-4">
                          <span className="bg-gradient-to-r from-koh-rong-500 to-koh-rong-600 text-white px-3 py-1 rounded-full text-sm font-semibold shadow-lg">
                            {language === "km"
                              ? article.category
                              : article.categoryEn}
                          </span>
                        </div>
                        {article.featured && (
                          <div className="absolute top-4 right-4">
                            <span className="bg-yellow-500 text-white px-3 py-1 rounded-full text-sm font-semibold shadow-lg flex items-center space-x-1">
                              <Star className="h-3 w-3 fill-current" />
                              <span>
                                {language === "km" ? "ពិសេស" : "Featured"}
                              </span>
                            </span>
                          </div>
                        )}
                      </div>

                      {/* Content */}
                      <div
                        className={`md:col-span-2 p-8 ${
                          index % 2 === 0 ? "md:order-2" : "md:order-1"
                        }`}
                      >
                        <h3 className="text-2xl font-bold text-gray-900 mb-4 group-hover:text-koh-rong-600 transition-colors leading-tight">
                          {language === "km" ? article.title : article.titleEn}
                        </h3>
                        <p className="text-gray-600 mb-6 leading-relaxed text-lg line-clamp-3">
                          {language === "km"
                            ? article.excerpt
                            : article.excerptEn}
                        </p>

                        {/* Article Meta */}
                        <div className="flex flex-wrap items-center gap-4 text-sm text-gray-500 mb-6">
                          <div className="flex items-center space-x-2">
                            <User className="h-4 w-4" />
                            <span>
                              {language === "km"
                                ? article.author
                                : article.authorEn}
                            </span>
                          </div>
                          <div className="flex items-center space-x-2">
                            <Calendar className="h-4 w-4" />
                            <span>
                              {language === "km"
                                ? article.date
                                : article.dateEn}
                            </span>
                          </div>
                          <div className="flex items-center space-x-2">
                            <Clock className="h-4 w-4" />
                            <span>
                              {language === "km"
                                ? article.readTime
                                : article.readTimeEn}{" "}
                              {language === "km" ? "នាទីអាន" : "min read"}
                            </span>
                          </div>
                        </div>

                        {/* Article Stats */}
                        <div className="flex items-center justify-between">
                          <div className="flex items-center space-x-6 text-sm text-gray-500">
                            <div className="flex items-center space-x-1">
                              <Eye className="h-4 w-4" />
                              <span>{article.views.toLocaleString()}</span>
                            </div>
                            <div className="flex items-center space-x-1">
                              <Heart className="h-4 w-4" />
                              <span>{article.likes}</span>
                            </div>
                            <div className="flex items-center space-x-1">
                              <MessageCircle className="h-4 w-4" />
                              <span>{article.comments}</span>
                            </div>
                          </div>
                          <button
                            onClick={(e) => {
                              e.stopPropagation();
                              onArticleClick(article.id);
                            }}
                            className="flex items-center space-x-2 bg-koh-rong-500 hover:bg-koh-rong-600 text-white px-6 py-3 rounded-full font-semibold transition-all duration-300 group"
                          >
                            <span>
                              {language === "km" ? "អានបន្ត" : "Read More"}
                            </span>
                            <ArrowRight className="h-4 w-4 group-hover:translate-x-1 transition-transform" />
                          </button>
                        </div>
                      </div>
                    </div>
                  </article>
                ))}
              </div>

              {/* No Results */}
              {filteredArticles.length === 0 && (
                <div className="text-center py-16">
                  <div className="bg-gray-100 rounded-full p-6 w-24 h-24 mx-auto mb-6 flex items-center justify-center">
                    <Search className="h-12 w-12 text-gray-400" />
                  </div>
                  <h3 className="text-2xl font-bold text-gray-900 mb-4">
                    {language === "km" ? "រកមិនឃើញអត្ថបទ" : "No Articles Found"}
                  </h3>
                  <p className="text-gray-600 mb-6">
                    {language === "km"
                      ? "សូមព្យាយាមស្វែងរកដោយប្រើពាក្យគន្លឹះផ្សេង ឬជ្រើសរើសប្រភេទផ្សេង"
                      : "Try searching with different keywords or select a different category"}
                  </p>
                  <button
                    onClick={clearAllFilters}
                    className="bg-koh-rong-500 hover:bg-koh-rong-600 text-white px-6 py-3 rounded-full font-semibold transition-colors"
                  >
                    {language === "km" ? "សម្អាតការស្វែងរក" : "Clear Search"}
                  </button>
                </div>
              )}
            </div>

            {/* Sidebar */}
            <div className="lg:col-span-1 space-y-8">
              {/* Featured Articles */}
              <div className="bg-white rounded-3xl p-6 shadow-lg border border-gray-100">
                <h3 className="text-xl font-bold text-gray-900 mb-6 flex items-center space-x-2">
                  <Star className="h-5 w-5 text-yellow-500" />
                  <span>
                    {language === "km" ? "អត្ថបទពិសេស" : "Featured Articles"}
                  </span>
                </h3>
                <div className="space-y-4">
                  {featuredArticles.slice(0, 3).map((article) => (
                    <div
                      key={article.id}
                      onClick={() => onArticleClick(article.id)}
                      className="group cursor-pointer"
                    >
                      <div className="flex space-x-3">
                        <img
                          src={article.image}
                          alt={
                            language === "km" ? article.title : article.titleEn
                          }
                          className="w-16 h-16 object-cover rounded-xl group-hover:scale-105 transition-transform"
                        />
                        <div className="flex-1">
                          <h4 className="font-semibold text-gray-900 group-hover:text-koh-rong-600 transition-colors line-clamp-2 text-sm">
                            {language === "km"
                              ? article.title
                              : article.titleEn}
                          </h4>
                          <div className="flex items-center space-x-2 text-xs text-gray-500 mt-1">
                            <Calendar className="h-3 w-3" />
                            <span>
                              {language === "km"
                                ? article.date
                                : article.dateEn}
                            </span>
                          </div>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              {/* Categories */}
              <div className="bg-white rounded-3xl p-6 shadow-lg border border-gray-100">
                <h3 className="text-xl font-bold text-gray-900 mb-6">
                  {language === "km" ? "ប្រភេទអត្ថបទ" : "Categories"}
                </h3>
                <div className="space-y-3">
                  {categories.slice(1).map((category) => (
                    <button
                      key={category.id}
                      onClick={() => {
                        // immediately apply the clicked category to applied state
                        setTempSelectedCategory(category.id); // keep temp in sync
                        setAppliedCategory(category.id); // update applied so filteredArticles updates
                        // keep other applied filters in sync with UI temps
                        setAppliedSearch(tempSearch);
                        setAppliedSortBy(tempSortBy);
                        // scroll to results
                        const el = document.getElementById("results");
                        if (el) el.scrollIntoView({ behavior: "smooth" });
                      }}
                      className={`w-full flex items-center justify-between p-3 rounded-xl transition-all ${
                        appliedCategory === category.id
                          ? "bg-koh-rong-100 text-koh-rong-700 border border-koh-rong-200"
                          : "hover:bg-gray-50 text-gray-700"
                      }`}
                    >
                      <span className="font-medium">{category.name}</span>
                      <span
                        className={`text-sm px-2 py-1 rounded-full ${
                          appliedCategory === category.id
                            ? "bg-koh-rong-200 text-koh-rong-800"
                            : "bg-gray-200 text-gray-600"
                        }`}
                      >
                        {category.count}
                      </span>
                    </button>
                  ))}
                </div>
              </div>

              {/* Popular Tags */}
              <div className="bg-white rounded-3xl p-6 shadow-lg border border-gray-100">
                <h3 className="text-xl font-bold text-gray-900 mb-6 flex items-center space-x-2">
                  <Tag className="h-5 w-5 text-koh-rong-500" />
                  <span>
                    {language === "km" ? "ស្លាកពេញនិយម" : "Popular Tags"}
                  </span>
                </h3>
                <div className="flex flex-wrap gap-2">
                  {popularTags.map((tag, index) => (
                    <span
                      key={index}
                      className="bg-gray-100 hover:bg-koh-rong-100 text-gray-700 hover:text-koh-rong-700 px-3 py-1 rounded-full text-sm font-medium transition-colors cursor-pointer"
                    >
                      #{tag}
                    </span>
                  ))}
                </div>
              </div>

              {/* Newsletter Signup */}
              <div className="bg-gradient-to-br from-koh-rong-500 to-koh-rong-600 rounded-3xl p-6 text-white">
                <h3 className="text-xl font-bold mb-4">
                  {language === "km" ? "ទទួលព័ត៌មានថ្មី" : "Get Updates"}
                </h3>
                <p className="text-koh-rong-100 mb-6 text-sm">
                  {language === "km"
                    ? "តាមដានទំព័រដើម្បីទទួលបានអត្ថបទថ្មីៗពីកោះរ៉ុង"
                    : "Follow page to get the latest articles from Koh Rong"}
                </p>
                <div className="space-y-3 ">
                  <a
                    href="https://web.facebook.com/kohrongshvcambodia"
                    className="w-full flex p-2 gap-2 bg-white text-koh-rong-600 rounded-xl font-semibold hover:bg-gray-100 transition-colors"
                  >
                    <svg
                      className="h-10 w-10"
                      fill="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z" />
                    </svg>
                    Koh Rong Cambodia -កោះរ៉ុង
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-20 bg-gradient-to-r from-koh-rong-500 to-koh-rong-600">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center text-white">
          <h2 className="text-4xl font-bold mb-6">
            {language === "km"
              ? "មានសំណួរអំពីកោះរ៉ុង?"
              : "Have Questions About Koh Rong?"}
          </h2>
          <p className="text-xl mb-8 opacity-90">
            {language === "km"
              ? "ខ្ញុំរីករាយក្នុងការឆ្លើយសំណួរ និងជួយអ្នករៀបចំដំណើរទេសចរណ៍"
              : "I'm happy to answer questions and help you plan your trip"}
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="https://t.me/chhaileang_chen"
              className="bg-white text-koh-rong-600 px-8 py-4 rounded-full font-semibold hover:bg-gray-100 transition-colors inline-flex items-center justify-center space-x-2"
            >
              <span>
                {language === "km" ? "ទាក់ទងមកកាន់ខ្ញុំ" : "Contact Me"}
              </span>
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

export default BlogPage;
// ...existing code...
