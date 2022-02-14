function cinemaTickets(input) {

    let index = 0;
    let inputLine = input[index];
    let countStandardTickets = 0;
    let countKidTickets = 0;
    let countStudentTickets = 0;

    while(inputLine !== `Finish`){
        let movieName = inputLine;
        index++;
        let allTickets = Number(input[index]); //всички свободни места, но така
        let freeSpaceInTheCinema = allTickets; // можем от тук да вадим горните билети
        index++;
        let ticketType = input[index];
        while (ticketType !== `End`){
            switch (ticketType){
                case 'standard': countStandardTickets++; break;
                case 'student': countStudentTickets++; break;
                case 'kid': countKidTickets++; break;
            }
            freeSpaceInTheCinema--; //колко билета продаваме
            if (freeSpaceInTheCinema === 0){
                break;
        }
        index++;
        ticketType = input[index];
        }
        let boughtTickets = allTickets - freeSpaceInTheCinema;
        let percentageFull = (boughtTickets / allTickets) * 100;
        console.log(`${movieName} - ${percentageFull.toFixed(2)}% full.`);
        index++;
        inputLine = input[index];
    }
    let allBoughtTickets = countKidTickets + countStudentTickets + countStandardTickets;
    console.log(`Total tickets: ${allBoughtTickets}`);
    console.log(`${(countStudentTickets / allBoughtTickets * 100).toFixed(2)}% student tickets.`);
    console.log(`${(countStandardTickets / allBoughtTickets * 100).toFixed(2)}% standard tickets.`);
    console.log(`${(countKidTickets / allBoughtTickets * 100).toFixed(2)}% kids tickets.`);
}
cinemaTickets(["Taxi","10","standard","kid","student","student","standard","standard","End","Scary Movie","6","student","student","student","student","student","student","Finish"]);
