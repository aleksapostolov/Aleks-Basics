function lunchBreak(input) {
  const seriesName = input[0];
  const seriesDurationInMinutes = Number(input[1]);
  const breakDuration = Number(input[2]);

  const lunchTime = breakDuration / 8;
  const chillTime = breakDuration / 4;
  const timeRemaining = breakDuration - lunchTime - chillTime;

  let timeLeft = Math.abs(seriesDurationInMinutes - timeRemaining);

  if (timeRemaining >= seriesDurationInMinutes) {
    console.log(
      `You have enough time to watch ${seriesName} and left with ${Math.ceil(timeLeft)} minutes free time.`
    );
  } else {
    console.log(
      `You don't have enough time to watch ${seriesName}, you need ${Math.ceil(timeLeft)} more minutes.`
    );
  }
}
lunchBreak(["Game of Thrones", "48", "60"]);
