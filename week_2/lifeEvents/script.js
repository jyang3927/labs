let fullName = 'Jamie Yang'; 
let age = 25; 
let birthday = 'February 28'; 
let pineapplePizza = false; 

let lifeEvents = ['I was born in Korea', 'I went to University of Michigan', 'I got married 2 years ago', 'I bought a house last year']; 

if (pineapplePizza === true) {
    console.log(`My name is ${fullName} and I like pineapples on pizza. I am currently ${age} years old and my birthday is on ${birthday}`); 
} else {
    console.log(`My name is ${fullName} and I'm not into pineapples on pizza. I am currently ${age} years old and my birthday is on ${birthday}`); 
}

for(let i = 0; i < lifeEvents.length; i++) {
    console.log(lifeEvents[i]); 
}

let counter = 0; 
let randomNumber = Math.floor(Math.random() * 10); 

while (true){
    let randomNumber = Math.floor(Math.random() * 10); 
    if(randomNumber !== 5) {
        counter ++; 
        console.log(`${randomNumber} !== 5`)
    } else {
        counter++; 
        console.log(`5 === 5. It took ${counter} iterations to randomly generate the number 5`); 
        break;
    }
}