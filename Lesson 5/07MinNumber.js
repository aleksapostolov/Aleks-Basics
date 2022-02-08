function minimumNumber(input) {

    let index = 0;
    let command = input[index];
    index++;
    let minNumber = Number.MAX_SAFE_INTEGER;
    

    while (command !== "Stop"){
        let num = Number(command);

        if(minNumber > num){
            minNumber = num;
        }

        command = input[index];
        index++;
    }
    console.log(minNumber);
}
minimumNumber(["100", "99", "80", "70", "Stop"]);
minimumNumber(["-10", "20", "-30", "Stop"]);
minimumNumber(["45", "-20", "7", "99", "Stop"]);
minimumNumber(["999", "Stop"]);
minimumNumber(["-1", "-2", "Stop"]);
