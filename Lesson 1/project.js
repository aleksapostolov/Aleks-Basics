function project(input) {

    let name = input[0];
    let projects = input[1];
    let total = projects * 3; 

    console.log(`The architect ${name} will need ${total} hours to complete ${projects} project/s.`);

}
project(["Aleks", "4"]);