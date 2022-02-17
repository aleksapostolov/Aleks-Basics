function petFood(input) {
   
    let index = 2;
    let days = Number(input[0]);
    let totalFood = Number(input[1]);
    let dogFoodPerDay = 0;
    let catFoodPerDay = 0;
    let totalDailyFood = 0;
    let biscuits = 0;
    let totalDogFood = 0;
    let totalCatFood = 0;
    let timePeriodFood = 0;
    


    for (let i = 1; i <= days; i++){
        dogFoodPerDay = Number(input[index]);
        index++;
        totalDogFood += dogFoodPerDay;
        catFoodPerDay = Number(input[index]);
        index++;
        totalCatFood += catFoodPerDay;
        
        timePeriodFood += dogFoodPerDay + catFoodPerDay;

        if (i % 3 === 0){
            totalDailyFood = dogFoodPerDay + catFoodPerDay
            biscuits += totalDailyFood * 0.1;
        }

        

    }

    let foodEatenPercentage = timePeriodFood / totalFood * 100;
    let dogFoodPercentage = totalDogFood / timePeriodFood * 100;
    let catFoodPercentage = totalCatFood / timePeriodFood * 100;
    
    console.log(`Total eaten biscuits: ${Math.round(biscuits)}gr.`);
    console.log(`${foodEatenPercentage.toFixed(2)}% of the food has been eaten.`);
    console.log(`${dogFoodPercentage.toFixed(2)}% eaten from the dog.`);
    console.log(`${catFoodPercentage.toFixed(2)}% eaten from the cat.`)
    

}
petFood(["3", "1000", "300", "20", "100", "30", "110", "40"]);
petFood(["3", "500", "100", "30", "110", "25", "120", "35"]);
 
