
import React, { useState } from 'react';
import BalanceDisplay from '@/components/BalanceDisplay';
import BalanceEditor from '@/components/BalanceEditor';
import ItemCard from '@/components/ItemCard';
import PurchaseHistory from '@/components/PurchaseHistory';
import AdBanner from '@/components/AdBanner';
import { Item, Purchase } from '@/types/Item';
import { toast } from 'sonner';

const INITIAL_BALANCE = 1_000_000_000;

const ITEMS: Item[] = [
  { 
    id: 'villa', 
    name: 'Luxury Villa', 
    cost: 1_000_000, 
    icon: 'home',
    imageUrl: 'https://images.unsplash.com/photo-1613490493576-7fde63acd811?auto=format&fit=crop&q=80&w=1000'
  },
  { 
    id: 'jet', 
    name: 'Private Jet', 
    cost: 150_000_000, 
    icon: 'airplane',
    imageUrl: 'https://images.unsplash.com/photo-1540962351504-03099e0a754b?auto=format&fit=crop&q=80&w=1000'
  },
  { 
    id: 'car', 
    name: 'Luxury Car', 
    cost: 3_000_000, 
    icon: 'car',
    imageUrl: 'https://images.unsplash.com/photo-1525609004556-c46c7d6cf023?auto=format&fit=crop&q=80&w=1000'
  },
  { 
    id: 'sports-team', 
    name: 'Sports Team', 
    cost: 700_000_000, 
    icon: 'sports-team',
    imageUrl: 'https://images.unsplash.com/photo-1461896836934-ffe607ba8211?auto=format&fit=crop&q=80&w=1000'
  },
  { 
    id: 'fries', 
    name: 'Fries 🍟', 
    cost: 100, 
    icon: 'fries',
    imageUrl: 'https://images.unsplash.com/photo-1630384060421-cb20321cd102?auto=format&fit=crop&q=80&w=1000'
  },
  { 
    id: 'island', 
    name: 'Private Island', 
    cost: 250_000_000, 
    icon: 'island',
    imageUrl: 'https://images.unsplash.com/photo-1559128010-7c1ad6e1b6a5?auto=format&fit=crop&q=80&w=1000'
  },
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

  const handleBalanceChange = (newBalance: number) => {
    setBalance(newBalance);
    toast.info(`Balance updated to $${newBalance.toLocaleString()}`);
  };

  return (
    <div className="container mx-auto p-4 min-h-screen bg-gradient-to-b from-blue-50 to-white">
      <h1 className="text-4xl font-bold text-center mb-8 text-blue-900">💸 Spend Your Billions</h1>
      
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 mb-8">
        <div className="lg:col-span-2">
          <BalanceDisplay balance={balance} />
        </div>
        <div>
          <BalanceEditor balance={balance} onBalanceChange={handleBalanceChange} />
        </div>
      </div>
      
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        <div className="lg:col-span-2">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-6">
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
        
        <div className="space-y-6">
          <PurchaseHistory purchases={purchases} />
          <AdBanner />
        </div>
      </div>
    </div>
  );
};

export default Index;
