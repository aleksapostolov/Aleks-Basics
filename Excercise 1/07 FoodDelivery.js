function foodDelivery(input) {
  //values

  const chickenPrice = 10.35;
  const fishPrice = 12.4;
  const veggiePrice = 8.15;
  const deliveryPrice = 2.5;

  //input

  const chickenMenu = Number(input[0]);
  const fishMenu = Number(input[1]);
  const veggieMenu = Number(input[2]);

  //solution

  const chickenTotal = chickenMenu * chickenPrice;
  const fishTotal = fishMenu * fishPrice;
  const veggieTotal = veggieMenu * veggiePrice;
  const dessertTotal = (chickenTotal + fishTotal + veggieTotal) * 0.2;
  const orderSubtotal = chickenTotal + fishTotal + veggieTotal + dessertTotal;

  const orderTotal = orderSubtotal + deliveryPrice;

  console.log(orderTotal);
}
foodDelivery(["2 ", "4 ", "3 "]);
