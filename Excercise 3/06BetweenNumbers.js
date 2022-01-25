function betweenNumbers(input) {
  const N1 = Number(input[0]);
  const N2 = Number(input[1]);
  const operator = input[2];

  let Sum = 0;

  switch (operator){
      case "+": Sum = N1 + N2;
      if (Sum % 2 === 0) {
          console.log (`${N1} ${operator} ${N2} = ${Sum} - even`)
      } else {
          console.log(`${N1} ${operator} ${N2} = ${Sum} - odd`)
      }
      break;
      case "-": Sum = N1 - N2; 
      if (Sum % 2 === 0) {
          console.log (`${N1} ${operator} ${N2} = ${Sum} - even`);
      } else {
          console.log(`${N1} ${operator} ${N2} = ${Sum} - odd`)
      }
      break;
      case "*": Sum = N1 * N2; 
      if (Sum % 2 === 0) {
          console.log (`${N1} ${operator} ${N2} = ${Sum} - even`);
      } else {
          console.log(`${N1} ${operator} ${N2} = ${Sum} - odd`)
      }
      break;
      case "/" : Sum = N1 / N2; 
        if (N2 === 0) {
            console.log (`Cannot divide ${N1} by zero`)
        } else {
            console.log(`${N1} ${operator} ${N2} = ${Sum.toFixed(2)}`)
        }
      break;
      case "%": Sum = N1 % N2; 
      if (N2 === 0) {
        console.log (`Cannot divide ${N1} by zero`)
      } else {
          console.log(`${N1} ${operator} ${N2} = ${Sum}`);
      }
      break;
  }
}
betweenNumbers(["10", "12", "+"]);
betweenNumbers(["10", "1", "-"]);
betweenNumbers(["7", "3", "*"]);
betweenNumbers(["123", "12", "/"]);
betweenNumbers(["112", "0", "/"]);
betweenNumbers(["10", "3", "%"]);
betweenNumbers(["10", "0", "%"]);
