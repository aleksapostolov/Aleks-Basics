function numbers(input) {

    /* let index = 0;
    let result = Number(input[index]);
    index++
    let number = Number(input[index]);
    index++

    let sum = 0;

    while (result !== sum){
        number = input[index];
        index++;
        sum += number
    }
    console.log(sum); */

    let index = 0;
    let num = Number(input[index]);
    index++;

    let sum = 0;

    while(sum < num){
        let tempNumber = Number(input[index]);
        index++

        sum += tempNumber;
    }

    console.log(sum);
}
numbers(["100", "10", "20", "30", "40"]);
numbers(["20", "1", "2", "3", "4", "5", "6"]);
