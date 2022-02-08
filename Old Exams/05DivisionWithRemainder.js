function division(input) {
    let index = 1;
    let count = Number(input[0]);

    let p1 = 0;
    let p2 = 0;
    let p3 = 0;

    for (let i = 0; i < count; i++){
        let number = Number(input[index]);
        index++;

        if (number % 2 === 0){
            p1++
        } 
        
        if (number % 3 === 0){
            p2++
        } 
        
        if (number % 4 === 0){
            p3++
        }
    }

    let p1Percentage = p1 / count * 100;
    let p2Percentage = p2 / count * 100;
    let p3Percentage = p3 / count * 100;

    console.log(`${p1Percentage.toFixed(2)}%`);
    console.log(`${p2Percentage.toFixed(2)}%`);
    console.log(`${p3Percentage.toFixed(2)}%`);

}
division(["10","680","2","600","200","800","799","199","46","128","65"]);
