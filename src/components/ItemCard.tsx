
import React from 'react';
import { Item } from '@/types/Item';
import { ShoppingCart } from 'lucide-react';

interface ItemCardProps {
  item: Item;
  balance: number;
  onPurchase: (item: Item) => void;
}

const ItemCard: React.FC<ItemCardProps> = ({ item, balance, onPurchase }) => {
  const canAfford = balance >= item.cost;

  return (
    <div className="bg-white shadow-md rounded-lg p-4 hover:scale-105 transition-transform">
      <div className="flex justify-between items-center mb-2">
        <h3 className="text-lg font-bold">{item.name}</h3>
        <span className="text-green-600 font-semibold">${item.cost.toLocaleString()}</span>
      </div>
      <button 
        onClick={() => onPurchase(item)}
        disabled={!canAfford}
        className={`
          w-full flex items-center justify-center 
          py-2 rounded-md transition-colors
          ${canAfford 
            ? 'bg-green-500 hover:bg-green-600 text-white' 
            : 'bg-gray-300 text-gray-500 cursor-not-allowed'
          }
        `}
      >
        <ShoppingCart className="mr-2" />
        {canAfford ? 'Purchase' : 'Too Expensive'}
      </button>
    </div>
  );
};

export default ItemCard;
