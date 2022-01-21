function triangleArea(input){
    const a = Number(input[0]);
    const h = Number(input[1]);
    const formula = a*h/2;
    console.log(formula.toFixed(2));
}
triangleArea(["20", "30"]);