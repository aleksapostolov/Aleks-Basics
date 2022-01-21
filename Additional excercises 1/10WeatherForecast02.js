function weatherForecast2(input){
    const temp = Number(input[0]);
    if ( temp >= 26 && temp <= 35){
        console.log("Hot");
    } else if (temp >= 20.1 && temp <= 25.9) {
        console.log("Warm");
    } else if (temp >= 15 && temp <= 20) {
        console.log("Mild");
    } else if (temp >= 12 && temp <= 14.9) {
        console.log("Cool");
    } else if (temp >= 5 && temp <= 11.9) {
        console.log("Cold");
    } else {
        console.log("unknown");
    }
}
weatherForecast2(["1"])