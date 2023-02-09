import { Calculator } from "./calculator";

describe('Calculator Unit Test', () => {

  it('should sum two number ', () => {
    //ARRANGE
    const expectedResult = 4;
    const calculator = new Calculator();

    //ACTION
    const actualResult = calculator.sum(2,2);

    //ASSERTION
    expect(actualResult).toBe(expectedResult);
  });

  it('should sum any numbers ', () => {
    //ARRANGE
    const expectedResult = 6;
    const calculator = new Calculator();

    //ACTION
    const actualResult = calculator.sum(2,2,2);

    //ASSERTION
    expect(actualResult).toBe(expectedResult);
  });

  it('should subtract two numbers ', () => {
    //ARRANGE
    const expectedResult = 6;
    const calculator = new Calculator();

    //ACTION
    const actualResult = calculator.subtract(10,4);

    //ASSERTION
    expect(actualResult).toBe(expectedResult);
  });

  it('should subtract any numbers ', () => {
    //ARRANGE
    const expectedResult = 5;
    const calculator = new Calculator();

    //ACTION
    const actualResult = calculator.subtract(10,4,1);

    //ASSERTION
    expect(actualResult).toBe(expectedResult);
  });
});