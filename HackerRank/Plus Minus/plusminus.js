function plusMinus(arr) {
    // Write your code here
    let positiveCount = 0;
    let negativeCount = 0;
    let zeroCount = 0;
    const length = arr.length;
    
    for(let a of arr) {
        if(a > 0) {
            positiveCount++;
        } else if(a < 0) {
            negativeCount++;
        } else {
            zeroCount++
        }
    }
    
    const positiveRatio = (positiveCount/length).toFixed(6);
    
    const negativeRatio = (negativeCount/length).toFixed(6);
    
    const zeroRatio = (zeroCount/length).toFixed(6);
    
    console.log(positiveRatio);
    
    console.log(negativeRatio);
    
    console.log(zeroRatio);
}