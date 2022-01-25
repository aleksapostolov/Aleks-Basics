function skiTrip(input) {
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

  if (days < 10) {
  }
    if (roomType === "room for one person") {
    subTotal = singleRoom * nights;
         } else if (roomType === "apartment") {
        subTotal = apartment * nights - (apartment * nights) * 0.3;
    /*  discountedSubtotal += subTotal * 0.3; */
             } else if (roomType === "presidentApartment") {
             subTotal = presidentApartment * nights - (presidentApartment * nights) * 0.1;
  }

  if (days > 10 && days < 15) {
  }
    if (roomType === "room for one person") {
    subTotal = singleRoom * nights;
        } else if (roomType === "apartment") {
         subTotal = apartment * nights - apartment * nights * 0.35;
    /*  discountedSubtotal += subTotal * 0.3; */
         } else if (roomType === "presidentApartment") {
        subTotal = presidentApartment * nights - (presidentApartment * nights) * 0.15;
  }

  if (days > 15) {
  }
    if (roomType === "room for one person") {
    subTotal = singleRoom * nights;
        } else if (roomType === "apartment") {
        subTotal = apartment * nights - (apartment * nights) * 0.5;
    /*  discountedSubtotal += subTotal * 0.3; */
            } else if (roomType === "presidentApartment") {
            subTotal = presidentApartment * nights - (presidentApartment * nights) * 0.2;
  }

  if (feedback === "positive") {
    total = subTotal + (subTotal * 0.25);
        } else {
        total = subTotal - (subTotal * 0.1);
  }
  console.log(total);
}
skiTrip(["14", "apartment", "positive"]);
skiTrip(["30", "president apartment", "negative"]);
skiTrip(["12", "room for one person", "positive"]);
skiTrip(["2", "apartment", "positive"]); 
