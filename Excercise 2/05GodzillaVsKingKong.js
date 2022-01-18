function godzillaVsKong(input) {
    const budget = Number(input[0]);
    const extra = Number(input[1]);
    const extraClothesPrice = Number(input[2]);
    const decoresPrice = budget * 0.1;
    let totalClothesPrice = extra * extraClothesPrice;
    /*   let discountedPrice = 0.0;
     */
  
    if (extra > 150) {
      totalClothesPrice = totalClothesPrice * 0.9;
    }
    let totalCost = totalClothesPrice + decoresPrice;
    /*   let totalProductionPrice = budget - totalCost - discountedPrice
     */ let remainingMoney = Math.abs (budget - totalCost);
  
    if (totalCost <= budget) {
      console.log("Action!");
      console.log(
        `Wingard starts filming with ${remainingMoney.toFixed(2)} leva left.`
      );
    } else {
      console.log("Not enough money!");
      console.log(`Wingard needs ${remainingMoney.toFixed(2)} leva more.`);
    }
  }
  godzillaVsKong(["9587.88", "222", "55.68"]);
  