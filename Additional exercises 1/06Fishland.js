function fishMarket(input){
    const mackarelPrice = Number(input[0]);
    const spratPrice = Number(input[1]);
    const bonitoKg = Number(input[2]);
    const scadKg = Number(input[3]);
    const musselsKg = Number(input[4]);
    const musselsPrice = 7.5;
    const bonitoPrice = (mackarelPrice * 1.6) * bonitoKg;
    const scadPrice = (spratPrice * 1.8) * scadKg;
    const musselsTotal = musselsPrice * musselsKg;

    const formula = (bonitoPrice + scadPrice + musselsTotal);
    console.log(formula.toFixed(2));

}
fishMarket(["6.9", "4.2", "1.5", "2.5", "1"]);