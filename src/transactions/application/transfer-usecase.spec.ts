import { Account } from "../domain/entities/Account";
import { RepositoryBase } from "../infra/repository-base";
import { TransferUseCase } from "./transfer-usecase";

describe('Tranfer UseCase Unit Tests', () => {

  it('should', () => {

    //ARRANGE
    const id_account_destination = "1";
    const id_account_source = "2";
    const ammount = 200;

    const repository = new RepositoryBase();
    
    repository.getById = jest.fn()
    .mockReturnValueOnce(Account.new({ id: '1', balance: 1000}))
    .mockReturnValueOnce(Account.new({ id: '2', balance: 10}));

    const usecase = new TransferUseCase(repository);

    //ACTION
    const accountUpdates = usecase.transfer(id_account_destination, id_account_source, ammount);

    //ASSERTION
    expect(accountUpdates).toHaveLength(2);
    // expect(accountUpdates[0].balance).toBe(800);
    // expect(accountUpdates[1].balance).toBe(210);
    expect(accountUpdates).toEqual(
      expect.arrayContaining([
        expect.objectContaining(   { id: '1', balance: 800 }),
        expect.objectContaining( { id: '2', balance:  210})
      ])
    );
  });
});