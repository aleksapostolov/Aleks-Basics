function cinema(input) {
    const premierePrice = 12;
    const normalPrice = 7.5;
    const discountPrice = 5;

    const typeOfProjection = input[0];
    const rows = Number(input[1]);
    const cols = Number(input[2]);

    let finalMoney = 0;
    // let finalMoney = rows * cols;

    switch (typeOfProjection) {
        case "Premiere": 
            finalMoney = rows * cols * premierePrice; 
            // finalMoney *= PremierePrice;
            break;
            case "Normal": 
            finalMoney = rows * cols * normalPrice;
            break;
            case "Discount":
            finalMoney = rows * cols * discountPrice;
            break;

    }
  console.log(`${finalMoney.toFixed(2)}`);  
}
cinema(["Premiere", "10", "12"]);
