// DEBUG!!!!

function fishingBoat(input) {
    const springPrice = 3000;
    const summerAndFallPrice = 4200;
    const winterPrice = 2600;
    const budget = Number(input[0]);
    const season = input[1];
    const fishermen = Number(input[2]);

    let totalMoney = 0;

    switch (season) {
        case "Winter":
            totalMoney = winterPrice
            break;
        case "Spring":
            totalMoney = springPrice
            break;
        case "Summer":
        case "Fall":
             totalMoney = summerAndFallPrice
             break;
    }
    if (fishermen <= 6) {
        totalMoney -= totalMoney * 0.1;
    } else if (fishermen >= 7 && fishermen <= 11) {
        totalMoney -= totalMoney * 0.15;
    } else if (fishermen >= 12){
        totalMoney -= totalMoney * 0.25;
    }

if (fishermen % 2 === 0 && season != "Autumn") {
    totalMoney -= totalMoney * 0.05;
}
if (budget >= totalMoney) {
    const moneyLeft = budget - totalMoney;
    console.log (`Yes! You have ${moneyLeft.toFixed(2)} leva left.`)
} else {
    const moneyNeeded = totalMoney - budget;
    console.log (`Not enough money! You need ${moneyNeeded.toFixed(2)} leva.`)
}
}
fishingBoat(["3000", "Summer", "11"]);
fishingBoat(["3600", "Autumn", "6"]);
fishingBoat(["2000", "Winte", "13"]);

