
import React from 'react';
import { DollarSign } from 'lucide-react';

interface BalanceDisplayProps {
  balance: number;
}

const BalanceDisplay: React.FC<BalanceDisplayProps> = ({ balance }) => {
  return (
    <div className="bg-soft-purple text-dark-purple p-4 rounded-lg shadow-md flex items-center justify-between">
      <div className="flex items-center">
        <DollarSign className="mr-2" />
        <h2 className="text-2xl font-bold">Balance</h2>
      </div>
      <span className="text-3xl font-extrabold">
        ${balance.toLocaleString()}
      </span>
    </div>
  );
};

export default BalanceDisplay;
