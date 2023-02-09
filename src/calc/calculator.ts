export class Calculator {
  sum(...numbers: number[]): number {
    return numbers.reduce((acc , current, i) => {
     console.log(i);
     console.log(acc);
      return  acc + current 
    }, 0);
  }

  subtract(...numbers: number[]): number {
    let acc = 0;
    numbers.forEach((n, i, items)=> {
      if(i === 0){
        acc = n;
      }
      if(items[i+1]){
        acc -= items[i+1];
      }
    });
    return acc;
  }

  minus(...numbers: number[]): number {
    return numbers.reduce((acc , current, i) => {
     console.log(i);
     console.log(acc);
     console.log(current);
   
      return acc - current;
    }, 0);
  }
}