function poolPipes(input) {
  /* V - обем на басейна; N - времето, в което работникът отсъства; P1 - дебит тръба 1; P2 - дебит тръба 2; */
  const V = Number(input[0]);
  const P1 = Number(input[1]);
  const P2 = Number(input[2]);
  const N = Number(input[3]);

  let P1Filled = N * P1;
  let P2Filled = N * P2;
  const P1NP2Total = P1Filled + P2Filled;

  const PercentageOfP1 = (P1Filled * 100) / P1NP2Total;
  const PercentageOfP2 = (P2Filled * 100) / P1NP2Total;
  PercentageOfP1P2 = (P1NP2Total * 100) / V;

  const difference = Math.abs(P1NP2Total - V);

  if (V >= P1NP2Total) {
    console.log(
      `The pool is ${PercentageOfP1P2}% full. Pipe 1: ${PercentageOfP1.toFixed(
        2
      )}%. Pipe 2: ${PercentageOfP2.toFixed(2)}%.`
    );
  } else {
    console.log(
      `For ${N} hours the pool overflows with ${difference.toFixed(2)} liters.`
    );
  }
}
poolPipes(["1000", "100", "120", "3"]);

/*  DEBUG!!!
function poolPipes(input){
   V - обем на басейна; N - времето, в което работникът отсъства; P1 - дебит тръба 1; P2 - дебит тръба 2; 
    const V = Number(input[0]);
    const P1 = Number(input[1]);
    const P2 = Number(input[2]);
    const N = Number(input[3]);

    let P1Filled = N * P1;
    let P2Filled = N * P2;
    const P1NP2Total = P1Filled + P2Filled;
    if (P1NP2Total < V) {
        console.log (`The pool is ${(P1NP2Total/10).toFixed(2)}% full. Pipe 1: ${((P1Filled / P1NP2Total) * 100).toFixed(2)}%. Pipe 2: ${((P2Filled / P1NP2Total) * 100).toFixed(2)}%.`)
    } else {
        console.log(`For ${N.toFixed(2)} hours the pool overflows with ${(P1NP2Total - V).toFixed(2)} liters.`)
    }
} */
