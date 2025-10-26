interface IYieldInput {
  cropRecordId: string;
  quantity: number;
  unit: string;
  date: string | Date;
}

interface IYieldResponse {
  id: string;
  cropRecordId: string;
  quantity: number;
  unit: string;
  date: Date;
  createdAt: Date;
  updatedAt: Date;
}

export { IYieldInput, IYieldResponse };
