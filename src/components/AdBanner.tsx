
import React from 'react';

interface AdBannerProps {
  size?: 'small' | 'large';
  position?: 'sidebar' | 'inline';
}

const AdBanner: React.FC<AdBannerProps> = ({ size = 'large', position = 'sidebar' }) => {
  // Determine height based on size
  const height = size === 'small' ? 'h-[120px]' : 'h-[250px]';
  const width = position === 'sidebar' ? 'w-full' : 'w-full md:w-[336px]';
  
  return (
    <div className={`${width} bg-gradient-to-r from-gray-100 to-gray-200 border border-gray-300 rounded-lg flex flex-col items-center justify-center p-4 mb-6 overflow-hidden`}>
      <div className="text-gray-500 font-medium text-xs uppercase tracking-wider mb-2">Advertisement</div>
      <div className={`${height} w-full flex items-center justify-center relative`}>
        <div className="absolute inset-0 bg-gradient-to-br from-blue-50 to-indigo-50 opacity-50"></div>
        <div className="relative z-10 text-center p-4">
          <div className="text-indigo-600 font-bold text-lg mb-2">Fantasy Awaits!</div>
          <p className="text-gray-600 text-sm mb-3">Explore more incredible experiences</p>
          <button className="bg-indigo-500 hover:bg-indigo-600 text-white px-4 py-2 rounded-full text-sm font-medium transition-colors">
            Discover Now
          </button>
        </div>
      </div>
    </div>
  );
};

export default AdBanner;
