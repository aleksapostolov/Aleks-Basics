function sumInSeconds(input) {
    const firstTime = Number(input[0]);
    const secondTime = Number(input[1]);
    const thirdTime = Number(input[2]);

    const totalTime = firstTime + secondTime + thirdTime;
    const minutes = totalTime / 60;
    const seconds = totalTime % 60;


    if (seconds < 10){
        console.log(`${Math.floor(minutes)}:0${seconds}`);
    } else {
        console.log(`${Math.floor(minutes)}:${seconds}`)
    }
}
sumInSeconds(["35", "45", "44"]);
