function cinemaTickets(input) {

    index = 0;
    let movieName = input[index];
    index++;
    let kidCounter = 0;
    let standardCounter = 0;
    let studentCounter = 0;
    let seatsPerMovie = 0;
    let totalTickets = 0;
    let typeOfTicket = 0;

    while (movieName !== `Finish`){
        let command = movieName;
        
        seatsPerMovie = Number(input[index]);
        index++;

        for (let i = 0; i <= seatsPerMovie; i++){
            typeOfTicket = input[index];
            index++;
            

            if (typeOfTicket === `End`){
                break;
            }
            totalTickets++;
            switch (typeOfTicket){
                
                case "student": studentCounter++; break;
                case "standard": standardCounter++; break;
                case "kid": kidCounter++; break;

    
            }
            let capacityPercentage = totalTickets / seatsPerMovie * 100;
            console.log(`${movieName} - ${capacityPercentage.toFixed(2)}% full.`)
        }
        console.log (kidCounter)
        command = input[index];
        index++
    }

}
cinemaTickets(["Taxi",
"10",
"standard",
"kid",
"student",
"student",
"standard",
"standard",
"End",
"Scary Movie",
"6",
"student",
"student",
"student",
"student",
"student",
"student",
"Finish"])
