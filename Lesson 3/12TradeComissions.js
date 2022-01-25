function comissions(input) {

    const town = input[0];
    const sales = Number(input[1]);
    let comission  = 0;

    if (town === "Sofia" && sales > 0 || town === "Varna" && sales > 0 || town === "Plovdiv" && sales > 0) 
    switch (town) {
        case "Sofia":
          if (sales >= 0 && sales <= 500)  {
            comission = sales * 0.05;
          } else if (sales > 500 && sales <= 1000) {
            comission = sales * 0.07;
          } else if (sales > 1000 && sales <= 10000) {
            comission = sales * 0.08;
          } else {
            comission = sales * 0.12;
          }
          console.log(`${comission.toFixed(2)}`);
        break;
        case "Varna":
          if (sales >= 0 && sales <= 500)  {
            comission = sales * 0.045;
          } else if (sales > 500 && sales <= 1000) {
            comission = sales * 0.075;
          } else if (sales > 1000 && sales <= 10000) {
            comission = sales * 0.10;
          } else {
            comission = sales * 0.13;
          }
          console.log(`${comission.toFixed(2)}`);
        break;
        case "Plovdiv":
          if (sales >= 0 && sales <= 500)  {
            comission = sales * 0.055;
          } else if (sales > 500 && sales <= 1000) {
            comission = sales * 0.08;
          } else if (sales > 1000 && sales <= 10000) {
            comission = sales * 0.12;
          } else {
            comission = sales * 0.145;
          }
          console.log(`${comission.toFixed(2)}`);
        break;
    } else {
        console.log("error");
    }
}
comissions(["Sofia", "1500"]);
comissions(["Plovdiv", "499.99"]);
comissions(["Varna", "3874.50"]);
comissions(["Kaspichan", "-50"]);
