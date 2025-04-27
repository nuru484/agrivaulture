/**
 * Input interface for creating or updating a farming tip
 */
interface IFarmingTipInput {
  tip: string;
  crop?: string;
  region?: string;
  date: string | Date;
}

/**
 * Response interface for farming tip data
 */
interface IFarmingTipResponse {
  id: string;
  tip: string;
  crop?: string;
  region?: string;
  date: Date;
  createdAt: Date;
  updatedAt: Date;
}

export { IFarmingTipInput, IFarmingTipResponse };
