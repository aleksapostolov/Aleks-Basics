function repainting(input) {
  const plasticPrice = 1.5;
  const paintPrice = 14.5;
  const thinnerPrice = 5;
  const additionalPaint = 0.1;
  const additionalPlastic = 2;
  const plasticBags = 0.4;

  const squareMeters = Number(input[0]);
  const litersOfPaint = Number(input[1]);
  const litersOfThinner = Number(input[2]);
  const hoursWorked = Number(input[3]);

  //solution

  const totalPlastic = (squareMeters + additionalPlastic) * plasticPrice;
  const totalPaint =
    (litersOfPaint + litersOfPaint * additionalPaint) * paintPrice;
  const totalThinner = litersOfThinner * thinnerPrice;
  const materialsTotal = totalPlastic + totalPaint + totalThinner + plasticBags;
  const workersTotal = materialsTotal * 0.3 * hoursWorked;
  const subtotal = workersTotal + materialsTotal;
  console.log(subtotal);
}
repainting(["10 ", "11 ", "4 ", "8 "]);
