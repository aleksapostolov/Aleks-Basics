function vacationBooks(input) {
  const numberOfPages = Number(input[0]);
  const numberOfPagesPerHour = Number(input[1]);
  const numberOfDays = Number(input[2]);

  // Solution

  const timeForBook = numberOfPages / numberOfPagesPerHour;
  const hoursPerDay = timeForBook / numberOfDays;

  console.log(hoursPerDay);
}
vacationBooks(["212", "20", "2"]);
