function yardGreening(input) {
    let price = 7.61;
    let discount = 0.18;
    let area = (input[0]);
    let areaTotal = price * area
    let discountTotal = areaTotal * discount;
    let jobTotalPrice = areaTotal - discountTotal
    console.log(`The final price is: ${jobTotalPrice} lv.`);
    console.log(`The discount is: ${discountTotal} lv.`);

}
yardGreening(["550"]);