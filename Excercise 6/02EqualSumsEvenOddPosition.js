function evenOdd(input) {

    let start = Number(input[0]);
    let end = Number(input[1]);
    let printLine = "";
    for (let i = start; i <= end; i++) {
        let curNum = '' + i;
        let oddSum = 0;
        let evenSum = 0;

        for ( let j = 0; j <= curNum.length; j++){  //ако се махне = от j<= curNum
            let currDigit = Number(curNum.charAt(j)); // може тук да се веме само Number(curNum[j]);
                if (j % 2 === 0){
                    evenSum += currDigit;
                } else {
                    oddSum += currDigit;
                }
            
        }
        if (oddSum === evenSum){
            printLine += `${i} `;
        }
    }
    console.log(printLine);
}
evenOdd(["100000", "100050"]);
/* evenOdd(["123456", "124000"]);
evenOdd(["299900", "300000"]);
evenOdd(["100115", "100120"]); */
