function basketballEquipment(input){
 const pricePerYear = Number(input[0]);
 const shoes = pricePerYear - (pricePerYear * 0.4);
 const clothes = shoes - (shoes * 0.2);
 const basketball = clothes * 0.25;
 const accessories = basketball * 0.2;

 const totalPrice = pricePerYear + shoes + clothes + basketball + accessories;
 console.log(totalPrice);
}
basketballEquipment(["365"]);