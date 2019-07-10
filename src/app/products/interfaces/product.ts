export interface Product {
  name: string;
  description: string;
  price: number;
  category: string;
  isAvailable: boolean;
  dependsOn: string[];
}
