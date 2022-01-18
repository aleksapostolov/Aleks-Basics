function toyStore(input) {
    const puzzlePrice = 2.6;
    const talkingDollPrice = 3;
    const teddyBearPrice = 4.1;
    const minionPrice = 8.2;
    const truckPrice = 2;
  
    const vacationPrice = Number(input[0]);
    const numberOfPuzzles = Number(input[1]);
    const numberOfTalkingDolls = Number(input[2]);
    const numberOfTeddyBears = Number(input[3]);
    const numberOfMinions = Number(input[4]);
    const numberOfTrucks = Number(input[5]);
  
    const toyCount =
      numberOfMinions +
      numberOfPuzzles +
      numberOfTalkingDolls +
      numberOfTeddyBears +
      numberOfTrucks;
    let totalCost =
      numberOfPuzzles * puzzlePrice +
      numberOfTalkingDolls * talkingDollPrice +
      numberOfTeddyBears * teddyBearPrice +
      numberOfTrucks * truckPrice +
      numberOfMinions * minionPrice;
  
    if (toyCount >= 50) {
      //  totalCost = totalCost * 0.75;
      totalCost *= 0.75;
    }
    totalCost *= 0.9;
  
    const difference = Math.abs(totalCost - vacationPrice); // -25 => 25 (връща положителната стойност на отрицателно число)
  
    if (totalCost >= vacationPrice) {
      console.log(`Yes! ${difference.toFixed(2)} lv left.`);
    } else {
      console.log(`Not enough money! ${difference.toFixed(2)} lv needed.`);
    }
  }
  
  toyStore(["40.8", "20", "25", "30", "50", "10"]);
  