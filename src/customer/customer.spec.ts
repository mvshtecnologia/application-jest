import { Cliente } from "./customer";

describe('Client Unit test', () => {

  it('', () => {

    //ARRANGE
    const expected_name  = "Sophia";
    const expected_idade = 2;
    const aCommand = {
      name: expected_name,
      idade: expected_idade
    }

    //ACTION
    const actualClient = Cliente.new(aCommand);

    //ASSERTION
    expect(actualClient.name).toBe(expected_name);
    expect(actualClient.idade).toBe(expected_idade);
    expect(actualClient.description).toBeNull();
    expect(actualClient.is_active).toBeTruthy();
  })
})