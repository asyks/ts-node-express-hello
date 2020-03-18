import * as constants from "./constants";

export interface RespBody {
  status: constants.RespStatus;
  message?: string;
}
