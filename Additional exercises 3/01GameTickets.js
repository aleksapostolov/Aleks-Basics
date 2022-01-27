function tickets(input) {
    const budget = Number(input[0]);
    const category = input[1];
    const fans = Number(input[2]);
   
    const Normal = 249.99;
    const VIP = 499.99;
   
    let ticketPrice = 0;              // ...   // 
    let transport = 0;
    let postTransport = 0;
    let remaining = 0;
   
    switch (category) {              // ...   // 
      case "VIP": ticketPrice = VIP; break;            // ...   // 
      case "Normal": ticketPrice = Normal; break;          // ...   // 
    }
   
    if (fans >= 1 && fans <= 4) {
      transport = budget * 0.75;
      // switch (category) {
      //   case "Normal":
      //     postTransport = budget - transport;
      //     remaining = postTransport - fans * 249.99;
      //     break;
      //   case "VIP":
      //     transport = budget * 0.75;
      //     postTransport = budget - transport;
      //     remaining = postTransport - fans * 499.99;
      //     break;
      // }
    } else if (fans >= 5 && fans <= 9) {
      transport = budget * 0.6;
      // switch (category) {
      //   case "Normal":
      //     postTransport = budget - transport;
      //     remaining = postTransport - fans * 249.99;
      //     break;
      //   case "VIP":
      //     transport = budget * 0.6;
      //     postTransport = budget - transport;
      //     remaining = postTransport - fans * 499.99;
      //     break;
      // }
    } else if (fans >= 10 && fans <= 24) {
      transport = budget * 0.5;
      // switch (category) {
      //   case "Normal":
      //     postTransport = budget - transport;
      //     remaining = postTransport - fans * 249.99;
      //     break;
      //   case "VIP":
      //     transport = budget * 0.5;
      //     postTransport = budget - transport;
      //     remaining = postTransport - fans * 499.99;
      //     break;
      // }
    } else if (fans >= 25 && fans <= 49) {
      transport = budget * 0.4;
      // switch (category) {
      //   case "Normal":
      //     postTransport = budget - transport;
      //     remaining = postTransport - fans * 249.99;
      //     break;
      //   case "VIP":
      //     transport = budget * 0.4;
      //     postTransport = budget - transport;
      //     remaining = postTransport - fans * 499.99;
      //     break;
      // }
    } else {
      transport = budget * 0.25;
      // switch (category) {
      //   case "Normal":
      //     postTransport = budget - transport;
      //     remaining = postTransport - fans * 249.99;
      //     break;
      //   case "VIP":
      //     transport = budget * 0.25;
      //     postTransport = budget - transport;
      //     remaining = postTransport - fans * 499.99;
      //     break;
      // }
    }
   
    postTransport = budget - transport;
    remaining = fans * ticketPrice;             // ...   // 
   
    const difference = Math.abs(remaining - postTransport);       // ... //
   
    if (remaining <= postTransport) {              // ...   // 
      console.log(`Yes! You have ${difference.toFixed(2)} leva left.`);        // ...   // 
    } else {
      console.log(`Not enough money! You need ${difference.toFixed(2)} leva.`);      // ...   // 
    }
  }
tickets(["1000", "Normal", "1"]);
tickets(["30000", "VIP", "49"]);