function sleepingTom(input){
    const daysOff = Number(input[0]);
    const workingDays = 365 - daysOff;
    const playMinutesInWorkDays = workingDays * 63;
    const playMinutesInDaysOff = daysOff * 127;
    const playMinutesTotal = playMinutesInDaysOff + playMinutesInWorkDays;
    const tomNorm = 30000;

    const remainingMinutes = Math.abs(tomNorm - playMinutesTotal);
    const hours = Math.floor(remainingMinutes / 60) 
    const minutes = Math.floor(remainingMinutes % 60)

    if ( tomNorm >= playMinutesTotal) {
        console.log("Tom sleeps well");
        console.log(`${hours} hours and ${minutes} minutes less for play`)
    } else {
        console.log ("Tom will run away");
        console.log(`${hours} hours and ${minutes} minutes more for play`);
    }
}
sleepingTom(["20"]);