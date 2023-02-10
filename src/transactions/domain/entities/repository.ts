import { Account } from "./Account";

export interface Repository {
  getById(id: string): undefined | Account
}