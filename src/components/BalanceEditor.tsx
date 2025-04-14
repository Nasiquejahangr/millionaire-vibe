
import React, { useState } from 'react';
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { DollarSign, Plus, Minus } from 'lucide-react';

interface BalanceEditorProps {
  balance: number;
  onBalanceChange: (newBalance: number) => void;
}

const BalanceEditor: React.FC<BalanceEditorProps> = ({ balance, onBalanceChange }) => {
  const [amount, setAmount] = useState<string>('1000000');

  const handleAdd = () => {
    const amountNum = parseFloat(amount) || 0;
    if (amountNum > 0) {
      onBalanceChange(balance + amountNum);
    }
  };

  const handleSubtract = () => {
    const amountNum = parseFloat(amount) || 0;
    if (amountNum > 0 && balance - amountNum >= 0) {
      onBalanceChange(balance - amountNum);
    }
  };

  return (
    <div className="bg-white p-4 rounded-lg shadow-md">
      <h2 className="text-lg font-bold mb-3 flex items-center">
        <DollarSign className="mr-1" size={18} />
        Adjust Balance
      </h2>
      <div className="flex gap-2">
        <Input
          type="number"
          value={amount}
          onChange={(e) => setAmount(e.target.value)}
          placeholder="Enter amount"
          className="flex-grow"
        />
        <Button onClick={handleAdd} className="bg-green-500 hover:bg-green-600">
          <Plus size={18} />
        </Button>
        <Button onClick={handleSubtract} className="bg-red-500 hover:bg-red-600">
          <Minus size={18} />
        </Button>
      </div>
    </div>
  );
};

export default BalanceEditor;
