function grades (input){
    index = 0;
    let students = Number(input[index]);
    index++;
    let fail = 0;
    let btw3 = 0;
    let btw4 = 0;
    let top = 0;
    let failedStudents = 0;
    let btw3Students = 0;
    let btw4Students = 0;
    let topStudents = 0;
    let total = 0;

    for (let i = 0; i < students; i++){
        let grades = Number(input[index]);
        index++;
        total += grades;

        if (grades >= 2.00 && grades <= 2.99){
            fail += grades;
            failedStudents++;
        } else if (grades >= 3.00 && grades <= 3.99){
            btw3 += grades;
            btw3Students++;
        } else if (grades >= 4.00 && grades <= 4.99){
            btw4 += grades;
            btw4Students++;
        } else {
            top += grades;
            topStudents++;
        }
    }
    
    let average = total / students;
    let failPercentage = failedStudents / students * 100;
    let btww3Percentage = btw3Students / students * 100;
    let btw4Percentage = btw4Students / students * 100;
    let topPercentage = topStudents / students * 100;

    console.log (`Top students: ${topPercentage.toFixed(2)}%`);
    console.log(`Between 4.00 and 4.99: ${btw4Percentage.toFixed(2)}%`);
    console.log(`Between 3.00 and 3.99: ${btww3Percentage.toFixed(2)}%`);
    console.log(`Fail: ${failPercentage.toFixed(2)}%`);
    console.log(`Average: ${average.toFixed(2)}`);
}
grades (["10", "3.00", "2.99", "5.68", "3.01", "4", "4", "6.00", "4.50", "2.44", "5", ])