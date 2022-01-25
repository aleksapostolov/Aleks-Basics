function timeForExam(input) {
    const examHour = Number(input[0]);
    const examMinute = Number(input[1]);
    const arrivalHour = Number(input[2]);
    const arrivalMinute = Number(input[3]);

    const examTimeInMinutes = examHour * 60 + examMinute;
    const arrivalTimeInMinutes = arrivalHour* 60 + arrivalMinute;

    difference = Math.abs(examTimeInMinutes - arrivalTimeInMinutes);
    const hoursDifference = Math.floor(difference / 60);
    let minutesDifference = difference % 60;

    if ( minutesDifference === 0 || (minutesDifference < 10 && hoursDifference > 0)) {
        minutesDifference = `0${minutesDifference}`;
    } if ( arrivalTimeInMinutes === examTimeInMinutes ) {
        console.log("On time");
        } else if (arrivalTimeInMinutes > examTimeInMinutes && difference < 60 ) {
        console.log("Late");
        console.log (`${minutesDifference} minutes after the start`)
    } else if (arrivalTimeInMinutes > examTimeInMinutes && difference >= 60 ) {
        console.log ("Late");
        console.log(`${hoursDifference}:${minutesDifference} hours after the start`);
     
    } else if ( arrivalTimeInMinutes < examTimeInMinutes && difference <= 30) {
        console.log("On time");
        console.log (`${minutesDifference} minutes before the start`);
    } else if (arrivalTimeInMinutes < examTimeInMinutes && difference > 30 && difference < 60) {
        console.log ("Early")
        console.log(`${minutesDifference} minutes before the start`)
    } else {
        console.log("Early");
        console.log (`${hoursDifference}:${minutesDifference} hours before the start`)
    }

}
timeForExam(["9", "30", "9", "50"]); // late 20
timeForExam(["9", "00", "8", "30"]); // on time 30
timeForExam(["16", "00", "15", "00"]); // early 1
timeForExam(["9", "00", "10", "30"]); // late 1:30
timeForExam(["14", "00", "13", "55"]); // on time 5
timeForExam(["11", "30", "8", "12"]); // early 3:18
timeForExam(["10", "00", "10", "00"]); // on time 
timeForExam(["11", "30", "10", "55"]); // early 35
timeForExam(["11", "30", "12", "29"]); // late 59
