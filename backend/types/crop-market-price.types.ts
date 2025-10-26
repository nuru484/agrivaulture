export interface IMarketPriceInput {
  crop: string;
  region: string;
  price: number;
  unit: string;
  date: string | Date;
}

export interface IMarketPriceResponse {
  id: string;
  crop: string;
  region: string;
  price: number;
  unit: string;
  date: Date;
  createdAt: Date;
  updatedAt: Date;
}
