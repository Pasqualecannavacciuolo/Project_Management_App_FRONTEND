import { PMS2 } from "./PMS2";

export interface PMS1 {
  id?: number,
  name: string,
  lastname: string,
  email: string,
  cf: string,
  pm2s_assigned: Set<PMS2>
}
