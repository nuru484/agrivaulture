// src/types/crop-cycle/crop-record.ts

export interface ICropRecord {
  id: string;
  userId: string;
  cropType: string;
  plantingDate: string;
  harvestingDate?: string;
  notes?: string;
  createdAt: string;
  updatedAt: string;
}

export interface IExpense {
  id: string;
  cropRecordId: string;
  item: string;
  cost: number;
  date: string;
  createdAt: string;
  updatedAt: string;
}

export interface IYield {
  id: string;
  cropRecordId: string;
  quantity: number;
  unit: string;
  date: string;
  createdAt: string;
  updatedAt: string;
}

export interface ICreateCropRecordRequest {
  cropType: string;
  plantingDate: string;
  harvestingDate?: string;
  notes?: string;
}

export interface IUpdateCropRecordRequest
  extends Partial<ICreateCropRecordRequest> {
  id: string;
}

export interface ICropRecordsResponse {
  message: string;
  data: ICropRecord[];
}

export interface ICropRecordResponse {
  message: string;
  data: ICropRecord;
}
