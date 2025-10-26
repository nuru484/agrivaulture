interface ICropRecordInput {
  cropType: string;
  plantingDate: string | Date;
  harvestingDate?: string | Date | null;
  notes?: string | null;
}

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
