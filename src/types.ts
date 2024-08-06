export interface BazaarData {
  success: boolean;
  lastUpdated: number;
  products: Products;
}

export interface Product {
  product_id: string;
  sell_summary: Summary[];
  buy_summary: Summary[];
  quick_status: QuickStatus;
}

interface Products {
  [key: string]: Product;
}

interface QuickStatus {
  productId: string;
  sellPrice: number;
  sellVolume: number;
  sellMovingWeek: number;
  sellOrders: number;
  buyPrice: number;
  buyVolume: number;
  buyMovingWeek: number;
  buyOrders: number;
}

interface Summary {
  amount: number;
  pricePerUnit: number;
  orders: number;
}
