import { Repository } from "../domain/entities/repository";

export class TransferUseCase {

  private repository: Repository

  constructor(repository: Repository){
    this.repository = repository;
  }

  transfer(destinationId: string, sourceId: string, ammount: number) {
    const account_destination = this.repository.getById(destinationId);
    const account_source = this.repository.getById(sourceId);
    account_destination.transfer(account_source, ammount);
    return [account_destination, account_source];
  }

}