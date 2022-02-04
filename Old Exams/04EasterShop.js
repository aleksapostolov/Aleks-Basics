function easterShop(input) {
    index = 0;
  
    let startingEggs = Number(input[index]);
    index++;
    let availableEggs=0;
    let soldEggs = 0;
    for (let i = 0; i < startingEggs || i === 'Close'; i++){
        let action = input[index];
        index++;
        let numberOfEggs = Number(input[index]);
        index++;
        
        if (action === "Buy") {
            availableEggs = startingEggs - numberOfEggs;
            soldEggs += numberOfEggs;
            
        } else if (action ==="Fill"){
            availableEggs += numberOfEggs
        } else if (action === "Close"){
            console.log("Store is closed!");
            console.log(`${soldEggs} eggs sold.`)
        }
        if (availableEggs - numberOfEggs  < 0){
            console.log("Not enough eggs in store!");
            console.log(`You can buy only ${availableEggs}.`);
        
        
        }
    }

  
   
}
easterShop(["13", "Buy", "8", "Fill", "3", "Buy", "10"]);
/* easterShop(["20", "Fill", "30", "Buy", "15", "Buy", "20", "Close"]);
 */