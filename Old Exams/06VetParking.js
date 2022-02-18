function vetParking(input) {

    let day = Number(input[0]);
    let hours = Number(input[1]);
    let evenDayOddHour = 2.5;
    let oddDayEvenHour = 1.25;
    let anyOther = 1;
    let totalSum = 0;
    let dailyTotal = 0;

    for (let i = 1; i <= day; i++){
        dailyTotal = 0;

        for (let j = 1; j <= hours; j++){
            if (i % 2 === 0 && j % 2 !== 0){
                dailyTotal += evenDayOddHour;
            } else if (i % 2 !== 0 && j % 2 === 0){
                dailyTotal += oddDayEvenHour
            } else {
                dailyTotal += anyOther
            }

        }

        totalSum += dailyTotal
        console.log (`Day: ${i} - ${dailyTotal.toFixed(2)} leva`)
        
    }

    console.log(`Total: ${totalSum.toFixed(2)} leva`)
}
vetParking(["2", "5"]);
