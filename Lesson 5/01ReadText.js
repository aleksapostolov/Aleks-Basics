function read(input){

     let index = 0;
    
    let name = input[index];
    index++;

    while (name !== "Stop") {
        console.log(name)
        name = input[index];
        index++;
        
    } 

    /* let index = 0;   - Toshevo reshenie
    let command = input[index];
    index++;

    while(command !== "Stop"){
        console.log(command);
        command = input[index];
        index++;
    } */
}
read(["Nakov","SoftUni","Sofia","Bulgaria","SomeText","Stop","AfterStop","Europe","HelloWorld"]);
/* read(["Sofia","Berlin","Moscow","Athens","Madrid","London","Paris","Stop","AfterStop"])
 */
