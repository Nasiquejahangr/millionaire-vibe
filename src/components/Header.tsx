
import React from 'react';
import { Sparkles } from 'lucide-react';

const Header: React.FC = () => {
  return (
    <header className="py-6 mb-8 bg-gradient-to-r from-indigo-600 to-purple-600 text-white">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-center">
          <Sparkles className="mr-2 h-8 w-8" />
          <h1 className="text-3xl md:text-4xl font-extrabold tracking-tight">Fantasillionaire</h1>
          <Sparkles className="ml-2 h-8 w-8" />
        </div>
        <p className="text-center mt-2 text-white/80 max-w-2xl mx-auto">
          Where dreams become purchases and fantasies become reality
        </p>
      </div>
    </header>
  );
};

export default Header;
