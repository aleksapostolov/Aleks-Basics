function oscars(input){

   let actorName = input[0];
   let startingPoints = Number(input[1]);
   let judges = Number(input[2]);
   let index = 3;
   let judgeName = 0;
   let judgeScore = 0;
   let judgeNamePoints = 0;
   let totalPoints = 0;
   let tempPoints = 0
   let nomination = 1250.5;
   
   for (let i = 0; i < judges; i++){
       judgeName = input[index];
       index++;
       judgeScore = Number(input[index]);
       index++;
       judgeNamePoints = judgeName.length;

       if (tempPoints + startingPoints > nomination){
           break;
       }

       tempPoints += (judgeNamePoints * judgeScore) / 2;

       
    }

    totalPoints = tempPoints + startingPoints;

    let diff = Math.abs(nomination - totalPoints);

    if(totalPoints >= nomination){
        console.log(`Congratulations, ${actorName} got a nominee for leading role with ${totalPoints.toFixed(1)}!`)
    } else {
        console.log(`Sorry, ${actorName} you need ${diff.toFixed(1)} more!`)
    }
}
/* oscars(["Zahari Baharov","205","4","Johnny Depp","45","Will Smith","29","Jet Lee","10","Matthew Mcconaughey","39"]);
 */oscars(["Sandra Bullock","340","5","Robert De Niro","50","Julia Roberts","40.5","Daniel Day-Lewis","39.4","Nicolas Cage","29.9","Stoyanka Mutafova","33"]);
 
