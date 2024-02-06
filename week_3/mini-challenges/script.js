//Vending Machine 
const machineOptions = document.getElementById("machine-options");
const vendingTotal = document.getElementById("vending-machine-total");
let vendingAdd = 0; 

machineOptions.addEventListener('click', (e) => {
    e.preventDefault();
    console.log(e.target);
    if (e.target.tagName ==="BUTTON") {
        if (e.target.id === "cola") {
            vendingAdd += 2;
        }else if (e.target.id === "peanuts"){
            vendingAdd += 3;
        }else if (e.target.id === "chocolate"){
            vendingAdd += 4;
        }else if (e.target.id === "gummies"){
            vendingAdd += 6;
        }
    }
    vendingTotal.innerText = vendingAdd;
})


//MAKE MONEY 
const NumofCoins = document.getElementById("coin-number"); 
const coinType = document.getElementById("coin-type");
const makeMoneyBtn = document.getElementById("makeMoneyBtn");
const form = document.querySelector("form");
const displayCoins = document.getElementById("display-coins");
const coin = document.querySelectorAll(".coin");
const totalMoney = document.getElementById("totalMoney");

let total = 0; 

form.addEventListener('submit', (e) => {
    e.preventDefault();
    console.log(NumofCoins);
    for (let i = 0; i < NumofCoins.value; i++){
        const newCoin = document.createElement("span"); 
        // newCoin.classList.add("coin");
        if(coinType.value === "penny"){
            newCoin.classList.add("pennies");
            total += .01;
        } else if (coinType.value ==="nickel") {
            newCoin.classList.add('nickels');
            total += .05;
        }else if (coinType.value === "dime") {
            newCoin.classList.add('dimes');
            total += .10;
        }else if (coinType.value === "quarter"){
            newCoin.classList.add('quarters');
            total += .25;
        }
        newCoin.innerText = coinType.value;
        displayCoins.appendChild(newCoin);
    }
    totalMoney.innerText = total;
})

displayCoins.addEventListener('click', (e) => {
    if (e.target.className === "pennies") {
        e.target.style.display = "none";
        total = total - .01;
    } else if (coinType.value ==="nickel") {
        e.target.style.display = "none";
        total = total - .05;
    }else if (coinType.value === "dime") {
        e.target.style.display = "none";
        total= total - .10;
    }else if (coinType.value === "quarter"){
        e.target.style.display = "none";
        total= total - .25;
    }
    totalMoney.innerText = total.toFixed(2);
})


//LIGHT BULB
const buttons = document.getElementById("light-btns"); 
const light = document.getElementById("bulb");
const on = document.getElementById("on"); 
const off = document.getElementById("off");
const toggle = document.getElementById("toggle");

let toggleCheck = false;
buttons.addEventListener('click', (e) => {
    if (e.target.id ==="on") {
        light.style.backgroundColor = "yellow";
        light.style.color = "darkgoldenrod";
        toggleCheck = true;
    } else if (e.target.id ==="off"){
        light.style.backgroundColor = "black";
        light.style.color = "silver";
        toggleCheck = false;
    } else if (e.target.id === "toggle") {
        if (toggleCheck === true) {
            light.style.backgroundColor = "black";
            light.style.color = "silver";
            toggleCheck = false;
        } else if (toggleCheck === false) {
            light.style.backgroundColor = "yellow";
            light.style.color = "darkgoldenrod";
            toggleCheck = true;
        }
    } else if (e.target.id === "end") {
        light.style.display = "none";
        e.target.style.disabled = true;
        on.style.disabled = true;
        off.style.disabled = true;
        toggle.style.disabled = true;
        e.target.style.backgroundColor = "gray";
        on.style.backgroundColor = "gray";
        off.style.backgroundColor = "gray";
        toggle.style.backgroundColor = "gray";
    }
})
