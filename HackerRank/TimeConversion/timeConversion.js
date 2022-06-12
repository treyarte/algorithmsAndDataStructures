function timeConversion(s) {
    // Write your code here
    const timeOfDayIndex = 8;
    
const amOrPm = s.toUpperCase().slice(timeOfDayIndex);

let isAm = amOrPm === 'AM';

let militaryTime = s.slice(2).replace(amOrPm, '');

let hour = Number.parseInt(s.slice(0,2));

    if(hour === 12){
        hour = 0;
}

if(!isAm) {

    
hour+=12;

}  
let hourStr = `${hour}`

if(hour < 10) {
    hourStr = '0'+hourStr;
}
militaryTime = `${hourStr}${militaryTime}`;

return militaryTime;

}
