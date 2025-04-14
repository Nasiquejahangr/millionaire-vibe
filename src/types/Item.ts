
export interface Item {
  id: string;
  name: string;
  cost: number;
  icon?: string;
  imageUrl: string;
}

export interface Purchase {
  id: string;
  item: Item;
  timestamp: Date;
}
