export interface IFarmingTip {
  id: string;
  tip: string;
  crop?: string;
  region?: string;
  date: string;
  createdAt: string;
  updatedAt: string;
}

export interface IFarmingTipResponse {
  message: string;
  data: IFarmingTip;
}

export interface IFarmingTipsResponse {
  message: string;
  data: IFarmingTip[];
}

export interface ICreateFarmingTipRequest {
  tip: string;
  crop?: string;
  region?: string;
  date: string;
}

export interface IUpdateFarmingTipRequest extends Partial<ICreateFarmingTipRequest> {
  id: string;
}