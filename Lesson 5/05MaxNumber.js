function maximumNumber(input) {

    let index = 0;
    let command = input[index];
    index++;
    let maxNumber = Number.MIN_SAFE_INTEGER;
    

    while (command !== "Stop"){
        let num = Number(command);

        if(maxNumber < num){
            maxNumber = num;
        }

        command = input[index];
        index++;
    }
    console.log(maxNumber);
}
maximumNumber(["100", "99", "80", "70", "Stop"]);
maximumNumber(["-10", "20", "-30", "Stop"]);
maximumNumber(["45", "-20", "7", "99", "Stop"]);
maximumNumber(["999", "Stop"]);
maximumNumber(["-1", "-2", "Stop"]);
