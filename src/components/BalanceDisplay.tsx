
import React from 'react';
import { DollarSign } from 'lucide-react';

interface BalanceDisplayProps {
  balance: number;
}

const BalanceDisplay: React.FC<BalanceDisplayProps> = ({ balance }) => {
  return (
    <div className="bg-gradient-to-r from-green-400 to-blue-500 text-white p-6 rounded-xl shadow-lg flex items-center justify-between">
      <div className="flex items-center">
        <DollarSign size={28} className="mr-3" />
        <h2 className="text-2xl font-bold">Your Balance</h2>
      </div>
      <span className="text-3xl font-extrabold">
        ${balance.toLocaleString()}
      </span>
    </div>
  );
};

export default BalanceDisplay;
