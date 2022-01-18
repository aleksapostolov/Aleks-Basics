function shopping(input) {
    const graphicsCardPrice = 250;
    const budget = Number(input[0]);
    const graphicsCardsCount = Number(input[1]);
    const processorsCount = Number(input[2]);
    const ramCount = Number(input[3]);

    const totalGraphicsCardPrice = graphicsCardsCount * graphicsCardPrice
    const processorsPrice = totalGraphicsCardPrice * 0.35;
    const ramPrice = totalGraphicsCardPrice * 0.1;

    let totalSum = totalGraphicsCardPrice + processorsPrice * processorsCount + ramPrice * ramCount;
    if (graphicsCardsCount > processorsCount) {
        totalSum *= 0.85;
    }
    const difference = Math.abs(totalSum - budget).toFixed(2);
    if (totalSum <= budget){
        console.log(`You have ${difference} leva left!`)
    }else{
        console.log(`Not enough money! You need ${difference} leva more!`);
    }
}
shopping(["900", "2", "1", "3"]);
