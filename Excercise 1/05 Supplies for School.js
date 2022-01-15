function schoolSupplies(input) {
  const penPackPrice = 5.8;
  const markersPackPrice = 7.2;
  const detergentPerLiterPrice = 1.2;

  const penPacks = Number(input[0]);
  const markerPacks = Number(input[1]);
  const detergentLiters = Number(input[2]);
  const discount = Number(input[3]);

  const totalPens = penPacks * penPackPrice;
  const totalMarkers = markerPacks * markersPackPrice;
  const totalDetergent = detergentLiters * detergentPerLiterPrice;
  const totalPriceOfMaterials = totalPens + totalMarkers + totalDetergent;

  const Subtotal =
    totalPriceOfMaterials - totalPriceOfMaterials * (discount / 100);

  console.log(Subtotal);
}
schoolSupplies(["2 ", "3 ", "4 ", "25 "]);
