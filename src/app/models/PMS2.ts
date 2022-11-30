import { PMS1 } from "./PMS1"
import { PMS3 } from "./PMS3"

export interface PMS2 {
  id?: number,
  name: string,
  lastname: string,
  email: string,
  cf: string
  pm1: PMS1,
  pms3_assigned: Set<PMS3>
}
