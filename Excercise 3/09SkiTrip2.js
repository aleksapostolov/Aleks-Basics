function skiTrip(input){
    const days = Number(input[0]);
    const roomType = input[1];
    const feedback = input[2];
    const singleRoom = 18;
    const apartment = 25;
    const presidentApartment = 35;
    const positive = 0.25;
    const negative = 0.1;
    const nights = days - 1;
  
    let subTotal = 0;
    let discountedSubtotal = 0;
    let total = 0;

    switch (roomType){
        case "room for one person":
            subTotal = singleRoom * nights;
        break;
        case "apartment":
            if (days < 10) {
                subTotal = apartment * nights - (apartment * nights) * 0.3;
                break;
            } else if (days > 10 && days < 15) {
                subTotal = apartment * nights - apartment * nights * 0.35;
                break;
            } else {
                subTotal = apartment * nights - (apartment * nights) * 0.5;
                break;
            }
        case "president apartment":
            if (days < 10) {
                subTotal = presidentApartment * nights - (presidentApartment * nights) * 0.1;
                break;
            } else if (days > 10 && days < 15) {
                subTotal = presidentApartment * nights - presidentApartment * nights * 0.15;
                break;
            } else {
                subTotal = presidentApartment * nights - (presidentApartment * nights) * 0.2;
                break;
            }
    }

    if (feedback === "positive") {
        total = subTotal + (subTotal * 0.25);
            } else {
            total = subTotal - (subTotal * 0.1);
      }
      console.log(total.toFixed(2));

}
skiTrip(["14", "apartment", "positive"]);
skiTrip(["30", "president apartment", "negative"]);
skiTrip(["12", "room for one person", "positive"]);
skiTrip(["2", "apartment", "positive"]); 