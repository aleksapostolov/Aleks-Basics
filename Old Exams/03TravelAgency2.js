function travelAgency(input) {
    const city = input[0];
    const equipment = input[1];
    const vip = input[2];
    let days = +input[3];
    let totalMoney = 0;
    let money = 0;
    let invalid = 0;
   
    if (city === "Bansko" || city === "Borovets") {
      if (equipment === "noEquipment") {
        money = 80;
        if (vip === "yes") {
          money *= 0.95;
        }
      } else if (equipment === "withEquipment") {
        money = 100;
        if (vip === "yes") {
          money *= 0.9;
        }
      } else {
        invalid++;
      }
    } else if (city === "Varna" || city === "Burgas") {
      if (equipment === "noBreakfast") {
        money = 100;
        if (vip === "yes") {
          money *= 0.93;
        }
      } else if (equipment === "withBreakfast") {
        money = 130;
        if (vip === "yes") {
          money *= 0.88;
        }
      } else {
        invalid++;
      }
    } else {
      invalid++;
    }
   
    if (days > 7) {
      days -= 1;
    }
    totalMoney = money * days;
   
    if (days < 1) {
      console.log("Days must be positive number!");
    } else if (invalid > 0) {
      console.log("Invalid input!");
    } else {
      console.log(`The price is ${totalMoney.toFixed(2)}lv! Have a nice time!`);
    }
  }

  travelAgency(["Borovets", "noEquipment", "yes", "6"]);

  travelAgency(["Bansko", "withEquipment", "no", "2"]);
  
  travelAgency(["Varna", "withBreakfast", "yes", "5"]);
  
  travelAgency(["Burgas", "noBreakfast", "no", "4"]);
  
  travelAgency(["Varna", "withBreakfast", "no", "0"]);
  
  travelAgency(["Gabrovo", "noBreakfast", "no", "3"]);