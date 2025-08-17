import React from "react";

type Props = { onBack?: () => void };

const SitemapPage: React.FC<Props> = ({ onBack }) => {
  return (
    <div className="max-w-4xl mx-auto p-8">
      <h1 className="text-2xl font-bold mb-4">Sitemap</h1>
      <ul className="list-disc pl-5 text-gray-700 mb-6 space-y-2">
        <li>Home</li>
        <li>Blog</li>
        <li>Destinations</li>
        <li>Accommodation</li>
        <li>Services</li>
        <li>Investment</li>
        <li>Contact</li>
        <li>About</li>
        <li>Terms of Service</li>
        <li>Cookie Policy</li>
        <li>Privacy Policy</li>
      </ul>
      <button
        onClick={onBack}
        className="px-4 py-2 bg-koh-rong-600 text-white rounded"
      >
        Back
      </button>
    </div>
  );
};

export default SitemapPage;
