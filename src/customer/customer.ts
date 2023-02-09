type ClienteCommand = {
  name: string,
  idade: number,
  description?: string,
  is_active?: boolean
} 
export class Cliente {
  
  private constructor(private props: ClienteCommand){
    this.name = props.name;
    this.idade = props.idade;
    this.is_active = props.is_active;
    this.description = props.description;
  }

  static new(props: ClienteCommand){
    return new Cliente(props);
  }

  get name(): string{
    return this.props.name;
  }

  get idade(): number{
    return this.props.idade;
  }

  get is_active(): boolean | undefined{
    return this.props.is_active;
  }

  get description() {
    return this.props.description;
  }

  set name(value:string){
    this.props.name = value;
  }

  set idade(value:number){
    this.props.idade = value;
  }

  private set is_active(value:boolean | undefined){
    this.props.is_active = value ?? true;
  }

  private set description(value:string){
    this.props.description = value ?? null;
  }


  toJson = () => {
    return {
      ...this
    }
  }


}