/**
 * Input interface for creating or updating a yield
 */
interface IYieldInput {
  cropRecordId: string;
  quantity: number;
  unit: string;
  date: string | Date;
}

/**
 * Response interface for yield data
 */
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
