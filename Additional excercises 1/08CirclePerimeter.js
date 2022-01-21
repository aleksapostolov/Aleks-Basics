function circlePerimeter(input){
    const r = Number(input[0]);
    const circleArea = Math.PI * (r * r);
    const circlePerimeter = 2 * Math.PI * r;

    console.log(circleArea.toFixed(2));
    console.log(circlePerimeter.toFixed(2));
}
circlePerimeter(["3"])