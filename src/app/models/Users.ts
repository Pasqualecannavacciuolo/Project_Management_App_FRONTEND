import { PMS3 } from "./PMS3";

export interface Users {
  id?: any,
  name: string,
  lastname: string,
  email: string,
  cf: string,
  pm3s?: Set<PMS3>
}
