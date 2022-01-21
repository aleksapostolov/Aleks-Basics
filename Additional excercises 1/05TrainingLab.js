function trainingLab(input){
    const w = Number(input[0]);
    const h = Number(input[1]);
    const labWidth = h * 100 - 100;
    const labLenght = w * 100;

    const deskRows = Math.floor(labWidth / 70);
    const deskColumn = Math.floor(labLenght / 120);

    console.log(deskRows * deskColumn - 3);

}
trainingLab(["15", "8.9"]);