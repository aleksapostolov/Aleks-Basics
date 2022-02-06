function cake(input) {
    let index = 2;
    let width = Number(input[0]);
    let length = Number(input[1]);
    let piecesOfCake = width * length;
    let command = input[index];
    
    
    while (command !== "STOP"){
        let eatenPieces = command = input[index];
        

        if(piecesOfCake >= eatenPieces){
            piecesOfCake -= eatenPieces
            command = input[index];
            index++;
        } else {
            let leftPieces = Math.abs(piecesOfCake - eatenPieces);
            console.log(`No more cake left! You need ${leftPieces} pieces more.`);
            break;
        }

        
        
    }
    console.log(`${piecesOfCake} pieces are left.`)
}
    
cake(["10", "10", "20", "20", "20", "20", "21"]);