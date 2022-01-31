function trekking(input) {
    let index = 0;
    let groups = Number(input[index]);
    index++;
    let musala = 0;
    let montblanc = 0;
    let killimandjaro = 0;
    let k2 = 0;
    let everest = 0;

    let total = 0;

    for (let i = 0; i < groups; i++){
        let numberOfPeople = Number(input[index]);
        index++;
        total += numberOfPeople;

        if (numberOfPeople <= 5) {
            musala += numberOfPeople;
        } else if (numberOfPeople >= 6 && numberOfPeople <= 12){
            montblanc += numberOfPeople;
        } else if (numberOfPeople >= 13 && numberOfPeople <= 25){
            killimandjaro += numberOfPeople;
        } else if (numberOfPeople >= 26 && numberOfPeople <= 40){
            k2 += numberOfPeople;
        } else {
            everest += numberOfPeople;
        }
    }


    let musalaPercentage = musala / total * 100;
    let montblancPercentage = montblanc / total * 100;
    let killimandjaroPercentage = killimandjaro / total * 100;
    let k2Percentage = k2 / total * 100;
    let everestPercentage = everest / total * 100;

    console.log(`${musalaPercentage.toFixed(2)}%`);
    console.log(`${montblancPercentage.toFixed(2)}%`);
    console.log(`${killimandjaroPercentage.toFixed(2)}%`);
    console.log(`${k2Percentage.toFixed(2)}%`);
    console.log(`${everestPercentage.toFixed(2)}%`);
}
trekking(["10", "10", "5", "1", "100", "12", "26", "17", "37", "40", "78"]);
