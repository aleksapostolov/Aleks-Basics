function housePainting(input) {
    const x = Number(input[0]);
    const y = Number(input[1]);
    const h = Number(input[2]);

    // Front & back walls
    const backWall = x * x;
    const frontWall = (x * x) - (1.2 * 2);
    const frontAndBackSquare = backWall + frontWall;
    // Side walls
    const sideWalls = 2*((x * y) - (1.5 * 1.5));
    const totalGreenPaint = (frontAndBackSquare + sideWalls) / 3.4;
    // roof
    const roofFace = 2 * (x * h / 2);
    const roofSides = 2 * (x * y);
    const totalRedPaint = (roofFace + roofSides) / 4.3;

    console.log(totalGreenPaint.toFixed(2));
    console.log(totalRedPaint.toFixed(2));
}
housePainting(["6", "10", "5.2"]);