function ranklist(input) {

    let index = 0;

    let tournamentsCount = Number(input[index]);
    index++
    let startingPoints = Number(input[index]);
    index++;
    let tempPoints = 0;
    let winCounter = 0;
for(let i = 0; i < tournamentsCount; i++){
    let score = input[index];
    index++;

    switch(score){
        case "W": 
        tempPoints += 2000; 
        winCounter++;
        break;
        case "F": tempPoints += 1200; break;
        case "SF": tempPoints += 720; break;
    }    
}
let finalPoints = tempPoints + startingPoints;
let avgPoints = Math.floor(tempPoints / tournamentsCount);
let winGameP = winCounter / tournamentsCount * 100;
 
console.log(`Final points: ${finalPoints}`);
console.log(`Average points: ${avgPoints}`);
console.log(`${winGameP.toFixed(2)}%`)

}
ranklist(["5", "1400", "F", "SF", "W", "W", "SF"]);
ranklist(["4", "750", "SF", "W", "SF", "W"]);
