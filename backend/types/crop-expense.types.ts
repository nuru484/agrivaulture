export interface IExpenseInput {
  cropRecordId: string;
  item: string;
  cost: number;
  date: string | Date;
}

export interface IExpenseResponse {
  id: string;
  cropRecordId: string;
  item: string;
  cost: number;
  date: Date;
  createdAt: Date;
  updatedAt: Date;
}
