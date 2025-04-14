
import React, { useState } from 'react';
import BalanceDisplay from '@/components/BalanceDisplay';
import ItemCard from '@/components/ItemCard';
import { Item, Purchase } from '@/types/Item';
import { toast } from 'sonner';

const INITIAL_BALANCE = 1_000_000_000;

const ITEMS: Item[] = [
  { id: 'villa', name: 'Luxury Villa', cost: 1_000_000, icon: 'home' },
  { id: 'jet', name: 'Private Jet', cost: 150_000_000, icon: 'airplane' },
  { id: 'car', name: 'Luxury Car', cost: 3_000_000, icon: 'car' },
  { id: 'sports-team', name: 'Sports Team', cost: 700_000_000, icon: 'sports-team' },
  { id: 'fries', name: 'Fries 🍟', cost: 100, icon: 'fries' },
  { id: 'island', name: 'Private Island', cost: 250_000_000, icon: 'island' },
];

const Index: React.FC = () => {
  const [balance, setBalance] = useState(INITIAL_BALANCE);
  const [purchases, setPurchases] = useState<Purchase[]>([]);

  const handlePurchase = (item: Item) => {
    if (balance >= item.cost) {
      const newBalance = balance - item.cost;
      setBalance(newBalance);
      
      const purchase: Purchase = {
        id: `${item.id}-${Date.now()}`,
        item,
        timestamp: new Date()
      };
      
      setPurchases([purchase, ...purchases]);
      
      toast.success(`You bought ${item.name}!`, {
        description: `Remaining balance: $${newBalance.toLocaleString()}`
      });
    } else {
      toast.error('Insufficient funds!');
    }
  };

  return (
    <div className="container mx-auto p-4 bg-soft-gray min-h-screen">
      <h1 className="text-4xl font-bold text-center mb-8">💸 Spend Your Billions</h1>
      
      <BalanceDisplay balance={balance} />
      
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mt-8">
        {ITEMS.map(item => (
          <ItemCard 
            key={item.id} 
            item={item} 
            balance={balance} 
            onPurchase={handlePurchase} 
          />
        ))}
      </div>
    </div>
  );
};

export default Index;
