function grades (input){
index = 0;
let moves = Number(input[index]);
index++;

let score = 0;
let to9 = 0;
let to19 = 0;
let to29 = 0;
let to39 = 0;
let to50 = 0;
let invalid = 0;

    for (let i = 0; i < moves; i++){
        let turn = Number(input[index]);
        index++

        if (turn >=0 && turn <= 9){
            score += turn * 0.2
            to9++;
        } else if (turn >= 10 && turn <= 19){
            score += turn * 0.3;
            to19++;
        } else if (turn >= 20 && turn <= 29){
            score += turn * 0.4;
            to29++;
        } else if (turn >= 30 && turn <= 39){
            score += 50;
            to39++;
        } else if (turn >= 40 && turn <= 50){
            score += 100;
            to50++;
        } else if ( turn < 0 &&  turn >= -100 || turn >50 && turn <= 100){
            score /=  2;
            invalid++;
        }
            
        
    } 

    let to9Percentage = to9 / moves * 100;
    let to19Percentage = to19 / moves * 100;
    let to29Percentage = to29 / moves * 100;
    let to39Percentage = to39 / moves * 100;
    let to50Percentage = to50 / moves * 100;
    let invaldiePercentage = invalid / moves * 100;

console.log(score.toFixed(2));
console.log(`From 0 to 9: ${to9Percentage.toFixed(2)}%`);
console.log(`From 10 to 19: ${to19Percentage.toFixed(2)}%`);
console.log(`From 20 to 29: ${to29Percentage.toFixed(2)}%`);
console.log(`From 30 to 39: ${to39Percentage.toFixed(2)}%`);
console.log(`From 40 to 50: ${to50Percentage.toFixed(2)}%`);
console.log(`Invalid numbers: ${invaldiePercentage.toFixed(2)}%`);

}
grades(["10", "43", "57", "-12", "23", "12", "0", "50", "40", "30", "20", ])