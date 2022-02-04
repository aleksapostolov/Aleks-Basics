function travelAgency(input) {
    const town = input[0];
    const package = input[1];
    const vipDiscount = input[2];
    const days = Number(input[3]);

    let pricePerNight = 0;
    let totalStay = 0;

    if (days < 1) {
        console.log ('Days must be positive number!');
    } else if (town === 'Bansko' && days <=7 || town === 'Borovets' && days <=7 ){
        switch (package){
            case 'withEquipment' :
                pricePerNight = 100;
                if ( vipDiscount === 'yes') {
                    pricePerNight *= 0.9;
                    totalStay = pricePerNight * days;
                    console.log (`The price is ${totalStay.toFixed(2)}lv! Have a nice time!`);
                } else {
                    totalStay = pricePerNight * days;
                    console.log (`The price is ${totalStay.toFixed(2)}lv! Have a nice time!`);
                }
                break;
                case 'noEquipment' :
                    pricePerNight = 80;
                    if ( vipDiscount === 'yes') {
                        pricePerNight *= 0.95;
                        totalStay = pricePerNight * days;
                        console.log (`The price is ${totalStay.toFixed(2)}lv! Have a nice time!`);
                    } else {
                        totalStay = pricePerNight * days;
                        console.log (`The price is ${totalStay.toFixed(2)}lv! Have a nice time!`);
                    }
                    break;
        }
    } else if (town === 'Varna' && days <=7  || town === 'Burgas' && days <=7 ) {
        switch (package){
            case 'withBreakfast' :
                pricePerNight = 130;
                if ( vipDiscount === 'yes') {
                    pricePerNight *= 0.88;
                    totalStay = pricePerNight * days;
                    console.log (`The price is ${totalStay.toFixed(2)}lv! Have a nice time!`);
                } else {
                    totalStay = pricePerNight * days;
                    console.log (`The price is ${totalStay.toFixed(2)}lv! Have a nice time!`);
                }
                break;
                case 'noBreakfast' :
                    pricePerNight = 100;
                    if ( vipDiscount === 'yes') {
                        pricePerNight *= 0.93;
                        totalStay = pricePerNight * days;
                        console.log (`The price is ${totalStay.toFixed(2)}lv! Have a nice time!`);
                    } else {
                        totalStay = pricePerNight * days;
                        console.log (`The price is ${totalStay.toFixed(2)}lv! Have a nice time!`);
                    }
                    break;
    } 
    } else if (town === 'Bansko' && days >7 || town === 'Borovets' && days > 7 ){ 
        switch (package){
            case 'withEquipment' :
                pricePerNight = 100;
                if ( vipDiscount === 'yes') {
                    pricePerNight *= 0.9;
                    totalStay = pricePerNight * days - pricePerNight;
                    console.log (`The price is ${totalStay.toFixed(2)}lv! Have a nice time!`);
                } else {
                    totalStay = pricePerNight * days - pricePerNight;
                    console.log (`The price is ${totalStay.toFixed(2)}lv! Have a nice time!`);
                }
                break;
                case 'noEquipment' :
                    pricePerNight = 80;
                    if ( vipDiscount === 'yes') {
                        pricePerNight *= 0.95;
                        totalStay = pricePerNight * days - pricePerNight;
                        console.log (`The price is ${totalStay.toFixed(2)}lv! Have a nice time!`);
                    } else {
                        totalStay = pricePerNight * days - pricePerNight;
                        console.log (`The price is ${totalStay.toFixed(2)}lv! Have a nice time!`);
                    }
                    break;
        }
    } else if (town === 'Varna' && days > 7  || town === 'Burgas' && days > 7 ) {
        switch (package){
            case 'withBreakfast' :
                pricePerNight = 130;
                if ( vipDiscount === 'yes') {
                    pricePerNight *= 0.88;
                    totalStay = pricePerNight * days - pricePerNight;
                    console.log (`The price is ${totalStay.toFixed(2)}lv! Have a nice time!`);
                } else {
                    totalStay = pricePerNight * days - pricePerNight;
                    console.log (`The price is ${totalStay.toFixed(2)}lv! Have a nice time!`);
                }
                break;
                case 'noBreakfast' :
                    pricePerNight = 100;
                    if ( vipDiscount === 'yes') {
                        pricePerNight *= 0.93;
                        totalStay = pricePerNight * days - pricePerNight;
                        console.log (`The price is ${totalStay.toFixed(2)}lv! Have a nice time!`);
                    } else {
                        totalStay = pricePerNight * days - pricePerNight;
                        console.log (`The price is ${totalStay.toFixed(2)}lv! Have a nice time!`);
                    }
                    break;
                }

    } else {
        console.log ('Invalid input!');
    }


    
}

travelAgency(["Borovets", "noEquipment", "yes", "6"]);

travelAgency(["Bansko", "withEquipment", "no", "2"]);

travelAgency(["Varna", "withBreakfast", "yes", "5"]);

travelAgency(["Burgas", "noBreakfast", "no", "4"]);

travelAgency(["Varna", "withBreakfast", "no", "0"]);

travelAgency(["Gabrovo", "noBreakfast", "no", "3"]);