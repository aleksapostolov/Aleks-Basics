function fishTank(input) {
    const lenght  = Number(input [0]);
    const width = Number(input[1]);
    const height = Number(input[2]);
    const percentage = Number(input[3]);

    const volume = lenght * width * height;
    const volumeInLiters = volume / 1000;
    const spaceTaken = percentage / 100;
    const litersNeeded = volumeInLiters * (1-spaceTaken);

    console.log(litersNeeded);
}
fishTank(["85 ", "75 ", "47 ", "17 "]);
