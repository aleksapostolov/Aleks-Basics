function sumOfNumbers(input){
    let textNumber = "" + input[0];      /* правим го на стринг */
    let sum = 0;
    for(let i = 0; i < textNumber.length; i++){
        let num = Number(textNumber[i]);    /* връщаме обратно към число */
        sum += num;
    }
    console.log(`The sum of the digits is:${sum}`)
}
sumOfNumbers(["1234"]);
sumOfNumbers(["564891"]);