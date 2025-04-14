
import React from 'react';
import { Purchase } from '@/types/Item';
import { ScrollArea } from "@/components/ui/scroll-area";
import { 
  Card,
  CardHeader,
  CardTitle,
  CardContent
} from "@/components/ui/card";
import { ShoppingBag } from 'lucide-react';

interface PurchaseHistoryProps {
  purchases: Purchase[];
}

interface ItemQuantity {
  item: {
    id: string;
    name: string;
    cost: number;
    imageUrl: string;
  };
  quantity: number;
  totalCost: number;
}

const PurchaseHistory: React.FC<PurchaseHistoryProps> = ({ purchases }) => {
  // Group purchases by item ID
  const itemQuantities: Record<string, ItemQuantity> = {};
  
  purchases.forEach(purchase => {
    const { item } = purchase;
    
    if (!itemQuantities[item.id]) {
      itemQuantities[item.id] = {
        item,
        quantity: 0,
        totalCost: 0
      };
    }
    
    itemQuantities[item.id].quantity += 1;
    itemQuantities[item.id].totalCost += item.cost;
  });
  
  const itemQuantityArray = Object.values(itemQuantities);
  
  return (
    <Card>
      <CardHeader>
        <CardTitle className="flex items-center">
          <ShoppingBag className="mr-2" size={18} />
          Your Purchases
        </CardTitle>
      </CardHeader>
      <CardContent>
        <ScrollArea className="h-[300px] pr-4">
          {itemQuantityArray.length > 0 ? (
            <div className="space-y-4">
              {itemQuantityArray.map(({ item, quantity, totalCost }) => (
                <div key={item.id} className="flex items-center justify-between py-2 border-b last:border-b-0">
                  <div className="flex items-center gap-3">
                    <div className="h-10 w-10 rounded overflow-hidden bg-gray-100">
                      <img src={item.imageUrl} alt={item.name} className="h-full w-full object-cover" />
                    </div>
                    <div>
                      <h3 className="font-medium text-sm">{item.name}</h3>
                      <p className="text-xs text-gray-500">Cost: ${item.cost.toLocaleString()} each</p>
                    </div>
                  </div>
                  <div className="text-right">
                    <span className="font-bold text-sm">x{quantity}</span>
                    <p className="text-xs text-gray-600">${totalCost.toLocaleString()} total</p>
                  </div>
                </div>
              ))}
            </div>
          ) : (
            <div className="text-center py-8 text-gray-500">
              No purchases yet. Go buy something nice!
            </div>
          )}
        </ScrollArea>
      </CardContent>
    </Card>
  );
};

export default PurchaseHistory;
