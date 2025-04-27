/**
 * Input interface for creating or updating a CropRecord
 */
interface ICropRecordInput {
  cropType: string;
  plantingDate: string | Date;
  harvestingDate?: string | Date | null;
  notes?: string | null;
}

/**
 * Response interface for retrieving a CropRecord
 */
interface ICropRecordResponse {
  id: string;
  userId: string;
  cropType: string;
  plantingDate: Date;
  harvestingDate?: Date | null;
  notes?: string | null;
  createdAt: Date;
  updatedAt: Date;
}

export { ICropRecordInput, ICropRecordResponse };
