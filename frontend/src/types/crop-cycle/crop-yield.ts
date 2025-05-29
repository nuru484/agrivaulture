// src/types/crop-cycle/crop-yield.ts
export interface IYield {
  id: string;
  cropRecordId: string;
  quantity: number;
  unit: string;
  date: string;
  createdAt: string;
  updatedAt: string;
}

export interface ICreateYieldRequest {
  cropRecordId: string;
  quantity: number;
  unit: string;
  date: string;
}

export interface IUpdateYieldRequest extends Partial<ICreateYieldRequest> {
  id: string;
}

export interface IYieldsResponse {
  message: string;
  data: IYield[];
}

export interface IYieldResponse {
  message: string;
  data: IYield;
}