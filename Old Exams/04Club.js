function club(input) {
    let index = 0;

    let target = Number(input[index++]);
    let clubIncome = 0;
    let difference = 0;
    let priceOfCocktail = 0;
    
    for (let i =0; i < input.length / 2 ; i++){

        let cocktailName = input[index++];
        let numberOfCocktails = Number(input[index++]);

        priceOfCocktail = cocktailName.length;

        if (cocktailName === "Party!"){
            console.log(`We need ${difference.toFixed(2)} leva more.`)
            console.log(`Club income - ${clubIncome.toFixed(2)} leva.`);
            break;
        }

        let currentOrder = numberOfCocktails * priceOfCocktail;    

        if (currentOrder % 2 !== 0) {
            currentOrder *= 0.75;
        }
        
        clubIncome += currentOrder;
        
        difference = Math.abs(target - clubIncome);

        if (clubIncome >= target){
            console.log("Target acquired.")
            console.log(`Club income - ${clubIncome.toFixed(2)} leva.`);
        }
    }


}
/* club(["500", "Bellini", "6", "Bamboo", "7", "Party!"]);
 */club(["100", "Sidecar", "7", "Mojito", "5", "White", "Russian", "10"]);
 