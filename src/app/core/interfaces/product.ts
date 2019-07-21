export interface Product {
  amount: number;
  name: string;
  description: string;
  price: number;
  category: string;
  isAvailable: boolean;
  dependsOn: string[];
}
