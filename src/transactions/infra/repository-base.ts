import { Account } from "../domain/entities/Account";
import { Repository } from "../domain/entities/repository";

export class RepositoryBase implements Repository {

  getById(id: string): Account {
    return undefined;
  }



}