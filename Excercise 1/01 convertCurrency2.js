function convertCurrency(input){
    const fixedValue = 1.79549; // Използват се константи, тъй като няма да бъдат променяни съответните стойности
    const usd = Number(input[0]);
    const bgn = usd * fixedValue;
    console.log(bgn);

}
convertCurrency(["1"])