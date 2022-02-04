function logistics(input) {
    let index = 0;
    let cargo = Number(input[index]);
    index++;
    let bus = 0;
    let truck = 0;
    let train = 0;
    let totalWeight = 0;

    for (let i = 0; i < cargo; i++) {
        let cargoWeight = Number(input[index]);
        index++
        totalWeight += cargoWeight;
        if (cargoWeight <= 3){
            bus += cargoWeight
        } else if (cargoWeight >= 4 && cargoWeight <= 11){
            truck += cargoWeight;
        } else {
            train += cargoWeight;
        }
        
    }

    let averagePerTon = (bus * 200 + truck * 175 + train * 120) / totalWeight;

    let busPercentage = bus / totalWeight * 100;
    let truckPercentage = truck / totalWeight * 100;
    let trainPercentage = train / totalWeight * 100;


    console.log(averagePerTon.toFixed(2));
    console.log(`${busPercentage.toFixed(2)}%`);
    console.log(`${truckPercentage.toFixed(2)}%`);
    console.log(`${trainPercentage.toFixed(2)}%`);
}
logistics(["4", "1", "5", "16", "3"]);
/* logistics(["5", "2", "10", "20", "1", "7",]) */