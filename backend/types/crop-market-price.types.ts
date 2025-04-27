/**
 * Input interface for creating/updating a market price
 */
export interface IMarketPriceInput {
  crop: string;
  region: string;
  price: number;
  unit: string;
  date: string | Date;
}

/**
 * Response interface for market price data
 */
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
