function vegetablerMarket(input){
    const pricePerKiloOfVeggies = Number(input[0]);
    const pricePerKiloOfFruits = Number(input[1]);
    const kilosOfVeggies = Number(input[2]);
    const kilosOfFruits = Number(input[3]);
    const totalSales = (pricePerKiloOfVeggies * kilosOfVeggies) + (pricePerKiloOfFruits * kilosOfFruits);
    const totalInEuro = totalSales / 1.94;
    console.log(totalInEuro.toFixed(2));
}
vegetablerMarket(["0.194", "19.4", "10", "10"]);