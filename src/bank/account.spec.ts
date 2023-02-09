import { Account } from "./account";

describe('Bank Unit Test', () => {
  it('deve transferir um valor com uma taxa para 2 contas diferentes', () => {
    //ARRANGE
    const expected_ammount_transfer = 100;
    const expected_ammount_account = 800;
    const command = {
      id: '123',
      balance: 1000
    }
    const command2 = {
      id: '123',
      balance: 0
    }
    const account = Account.new(command);
    const outher_account = Account.new(command2);
  
    //ACTION
    account.transferTax(outher_account, 100)

    //ASSERTION
    expect(outher_account.balance).toBe(expected_ammount_transfer);
    expect(account.balance).toBe(expected_ammount_account);
   
  });
  it('Deve retornar uma exceção caso o valor da transferência ser menor que 1000', () => {
    //ARRANGE
    const command = {
      id: '123',
      balance: 1000
    }
    const command2 = {
      id: '123',
      balance: 0
    }
    const account = Account.new(command);
    const outher_account = Account.new(command2);
  
    //ACTION
    const transfer = () => account.transferInternational(outher_account, 100);

    //ASSERTION
    expect(()=> transfer() ).toThrow(Error('A tranferencia nao pode ser menor que 1000'));
  });
  it('Deve retornar uma exceção caso o valor da transferência ser maior que 9999', () => {
    //ARRANGE
    const command = {
      id: '123',
      balance: 100000
    }
    const command2 = {
      id: '123',
      balance: 0
    }
    const account = Account.new(command);
    const outher_account = Account.new(command2);
  
    //ACTION
    const transfer = () => account.transferInternational(outher_account, 10000);

    //ASSERTION
    expect(()=> transfer() ).toThrow(Error('A tranferencia nao pode ser maior que 9999'));
  });
  it('Deve retornar uma exceção caso o valor da transferência + taxa ser maior do que o saldo da conta', () => {
    //ARRANGE
    const command = {
      id: '123',
      balance: 1000
    }
    const command2 = {
      id: '123',
      balance: 0
    }
    const account = Account.new(command);
    const outher_account = Account.new(command2);
  
    //ACTION
    const transfer = () => account.transferInternational(outher_account, 10000);

    //ASSERTION
    expect(()=> transfer() ).toThrow(Error('A tranferencia nao pode ser concluída: Saldo insuficiente'));
  });
  it('Deve descontar a porcentagem de 5% do valor da transferência  + taxa caso o valor da transferência fique entre 1000 e 5000 ', () => {
    //ARRANGE
    const expectedAmmount = 5850;
    const command = {
      id: '123',
      balance: 7000
    }
    const command2 = {
      id: '123',
      balance: 0
    }
    const account = Account.new(command);
    const outher_account = Account.new(command2);
  
    //ACTION
   account.transferInternational(outher_account, 1000);

    //ASSERTION
    expect(account.balance).toBe(expectedAmmount);
  });
  it('Deve descontar a porcentagem de 10% do valor da transferência  + taxa caso o valor da transferência ser maior que 5001 ', () => {
    //ARRANGE
    const expectedAmmount = 300;
    const command = {
      id: '123',
      balance: 7000
    }
    const command2 = {
      id: '123',
      balance: 0
    }
    const account = Account.new(command);
    const outher_account = Account.new(command2);
  
    //ACTION
   account.transferInternational(outher_account, 6000);

    //ASSERTION
    expect(account.balance).toBe(expectedAmmount);
  });
});