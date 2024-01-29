let totalPaycheck;

let hours = prompt('How many hours did you work?'); 
hours = Number(hours); 

let wage = prompt('What is your hourly wage?'); 
wage = Number(wage); 

if (hours <= 40) {
    totalPaycheck = hours * wage; 
    console.log (`Your total paycheck is $${totalPaycheck}`); 
} else {
    let overtime = hours - 40; 
    let overtimePay = (wage * 1.5) * overtime; 
    totalPaycheck = overtimePay + (40 * wage); 
    console.log(`Your total paycheck is $${totalPaycheck}`); 
}

let weeksTilMillion = Math.ceil(1000000 / totalPaycheck); 
console.log(`With wage = ${wage} and hours = ${hours} it would take ${weeksTilMillion} weeks to earn a million dollars`); 