function petShop(input) {
    let dog = 2.50;
    let cat = 4;
    let dogFood = dog * (input[0]);
    let catFood = cat * (input[1]);
    let total = dogFood + catFood
    console.log (total)

}
petShop(["1", "1"]);