function cinema(input) {

    let index = 1;
    let capacity = Number(input[0]);
    let groupPrice = 0;
    let command = input[index];
    index++
    let cinemaIncome = 0;



    while (command !== 'Movie time!'){
        let group = Number(command);
        groupPrice = group * 5;
        

        if(group % 3 === 0){
            groupPrice -= 5;
        }
        
        capacity -= group;
        if (capacity < 0) {
            console.log ("The cinema is full.");
            console.log (`Cinema income - ${cinemaIncome} lv.`)
            break;
        }
        
        cinemaIncome += groupPrice;
        command = input[index];
        index++
    }

    if(command === 'Movie time!'){
        console.log (`There are ${capacity} seats left in the cinema.`);
        console.log (`Cinema income - ${cinemaIncome} lv.`)
    }

}

cinema(["100", "15", "15", "15", "15", "15","15","15"]); 
