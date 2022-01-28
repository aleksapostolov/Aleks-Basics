function energy(input) {
  const flavor = input[0];
  const size = input[1];
  const sets = Number(input[2]);

  const big = 5;
  const small = 2;
  let subTotal = 0;

  if (size === 'small'){
      switch (flavor){
          case 'Watermelon':
              subTotal = sets * small * 56;
              break;
            case 'Mango':
                subTotal = sets * small * 36.66;
                break;
            case 'Pineapple':
                subTotal = sets * small * 42.10;
                break;
            case 'Raspberry':
                subTotal = sets * small * 20;
                break;
      } 
    } else {
        switch (flavor){
            case 'Watermelon':
                subTotal = sets * big * 28.70;
                break;
              case 'Mango':
                  subTotal = sets * big * 19.6;
                  break;
              case 'Pineapple':
                  subTotal = sets * big * 24.8;
                  break;
              case 'Raspberry':
                  subTotal = sets * big * 15.20;
                  break; 
      }
  }

  if ( subTotal >= 400 && subTotal <= 1000){
      subTotal *= 0.85; 
  } else if  (subTotal > 1000) {
      subTotal *= 0.5;
  }


  console.log(`${subTotal.toFixed(2)} lv.`);
}
energy(["Watermelon", "big", "4"]);
energy(["Pineapple", "small", "1"]);
energy(["Raspberry", "small", "50"]);
energy(["Mango", "big", "8"]);
