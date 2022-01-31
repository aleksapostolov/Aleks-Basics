function hospital(input){
    let index = 0;
    let timePeriod = Number(input[index]);
    index++;
    let patientsPerDay = Number(input[index]);;
    index++;
    let doctors = 7;
    let treatedPatients = 0;
    let untreatedPatients = 0;
    
    let totalDays = 0;

    for ( let i = 1; i <= timePeriod; i++){
        totalDays++;
        patientsPerDay = Number(input[i]);  
        treatedPatients += 7;
        
        index++;

        if (patientsPerDay <= 7){
            
        }

        
        
        

        
        console.log(untreatedPatients)
    }

}
hospital(["4", "7", "27", "9", "1"]);
/* hospital(["6", "25", "25", "25", "25", "25", "2"]);
hospital(["3", "7", "7", "7"]); */