function cToF(input){
    const C = Number(input[0]);
    const F = (C * 9/5) + 32;
    console.log(F.toFixed(2));
}
cToF(["25"]);