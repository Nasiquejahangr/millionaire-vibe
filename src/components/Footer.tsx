
import React from 'react';
import { Heart } from 'lucide-react';

const Footer: React.FC = () => {
  return (
    <footer className="mt-12 py-6 border-t border-gray-200">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <div className="mb-4 md:mb-0">
            <p className="text-gray-600">© 2025 Fantasillionaire. All rights reserved.</p>
          </div>
          <div className="flex items-center space-x-4">
            <span className="text-gray-600">Made with</span>
            <Heart className="h-4 w-4 text-red-500" />
            <span className="text-gray-600">for dreamers everywhere</span>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
