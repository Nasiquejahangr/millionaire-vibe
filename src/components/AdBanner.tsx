
import React from 'react';

const AdBanner: React.FC = () => {
  return (
    <div className="w-full bg-gray-200 border border-gray-300 rounded-lg flex flex-col items-center justify-center p-4">
      <div className="text-gray-500 font-medium">Advertisement</div>
      <div className="h-[200px] w-full flex items-center justify-center">
        <span className="text-gray-400 text-sm">Your ad could be here</span>
        {/* Google AdSense code would go here in production */}
        {/* <ins className="adsbygoogle"
            style={{ display: 'block' }}
            data-ad-client="ca-pub-YOUR_AD_CLIENT_ID"
            data-ad-slot="YOUR_AD_SLOT_ID"
            data-ad-format="auto"
            data-full-width-responsive="true"></ins> */}
      </div>
    </div>
  );
};

export default AdBanner;
