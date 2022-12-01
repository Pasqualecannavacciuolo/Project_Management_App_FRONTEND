import { PMS2 } from "./PMS2";
import { Users } from "./Users";

export interface PMS3 {
  id?: number,
  name: string,
  lastname: string,
  email: string,
  cf: string,
  pm2?: PMS2
  users_assigned?: Set<Users>
}
