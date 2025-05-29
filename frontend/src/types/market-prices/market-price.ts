export interface IMarketPrice {
  id: string;
  crop: string;
  region: string;
  price: number;
  unit: string;
  date: string;
  createdAt: string;
  updatedAt: string;
}

export interface IMarketPriceResponse {
  message: string;
  data: IMarketPrice;
}

export interface IMarketPricesResponse {
  message: string;
  data: IMarketPrice[];
}

export interface ICreateMarketPriceRequest {
  crop: string;
  region: string;
  price: number;
  unit: string;
  date: string;
}

export interface IUpdateMarketPriceRequest extends Partial<ICreateMarketPriceRequest> {
  id: string;
}