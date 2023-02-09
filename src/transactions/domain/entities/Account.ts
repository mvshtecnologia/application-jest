type AccountCommand = {
  id: string,
  balance: number
}
export class Account {

  private constructor(private props: AccountCommand){
    this.id = props.id;
    this.balance = props.balance;
  }

  static new(props: AccountCommand) {
    return new Account(props);
  }

  transfer(destination: Account, ammount: number){
    this.debit(ammount);
    destination.deposit(ammount);
  }

  transferTax(destination: Account, ammount: number){
    this.debit(ammount + 100);
    destination.deposit(ammount);
  }

  transferInternational(destination: Account, ammount: number){
    if(ammount + 100 > this.balance){
      throw new Error('A tranferencia nao pode ser concluída: Saldo insuficiente');
    }
    if(ammount < 1000){
      throw new Error('A tranferencia nao pode ser menor que 1000');
    }
    if(ammount > 9999){
      throw new Error('A tranferencia nao pode ser maior que 9999');
    }
    if(ammount >= 1000 && ammount <= 5000 ){
      const porcent = ammount * 0.05;
      const taxaFinal = porcent + 100;
      this.debit(ammount + taxaFinal);
    }else
    if(ammount > 5001){
      const porcent = ammount * 0.10;
      console.log('porcentagem', porcent);
      const taxaFinal = porcent + 100;
      console.log('taxa final', taxaFinal);
      this.debit(ammount + taxaFinal);
    }else{
      this.debit(ammount + 100);
    }
    destination.deposit(ammount);
  }

  private deposit(value: number){
    this.props.balance += value;
  }

  private debit(value: number){
    this.props.balance -= value;
  }

  get id(){
    return this.props.id;
  }

  get balance(){
    return this.props.balance;
  }

  set balance(value: number){
    this.props.balance = value;
  }

  set id(value: string){
    this.props.id = value;
  }
}