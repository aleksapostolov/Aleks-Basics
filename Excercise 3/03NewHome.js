function newHome(input) {
    const priceOfRoses = 5;
    const priceOfDahlias = 3.8;
    const priceOfTulips = 2.8;
    const priceOfNarcissus = 3;
    const priceOfGladiolus = 2.5;
    const flowerType = input[0];
    const flowerCount = Number(input[1]);
    const budget = Number(input[2]);
    let finalPrice = 0;

    switch(flowerType) {
        case "Roses": 
        if (flowerCount > 80) {
            finalPrice -= flowerCount * priceOfRoses * 0.10;
        }
        finalPrice += flowerCount * priceOfRoses;
        break;
        case "Dahlias": 
        if (flowerCount > 90 ){
            finalPrice-= flowerCount * priceOfDahlias * 0.15;
        }
        finalPrice += flowerCount * priceOfDahlias;
        break;
        case "Tulips": 
        if (flowerCount > 80){
            finalPrice -= flowerCount * priceOfTulips * 0.15;
        }
        finalPrice += flowerCount * priceOfTulips;
        break;
        case "Narcissus": 
        if (flowerCount < 120){
            finalPrice += flowerCount * priceOfNarcissus * 0.15;
        }
        finalPrice += flowerCount * priceOfNarcissus;
        break;
        case "Gladiolus": 
        if (flowerCount < 80) {
            finalPrice += flowerCount * priceOfGladiolus * 0.2;
        }
        finalPrice += flowerCount * priceOfGladiolus;
        break;
    }

    if (budget >= finalPrice) {
        const moneyLeft = budget - finalPrice;
        console.log(`Hey, you have a great garden with ${flowerCount} ${flowerType} and ${moneyLeft.toFixed(2)} leva left.`)
    } else {
        const moneyNeeded = finalPrice - budget;
        console.log(`Not enough money, you need ${moneyNeeded.toFixed(2)} leva more.`);
    }
}
newHome(["Roses", "55", "250"]);
