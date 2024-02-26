

//Using apiPromise 
const apiPromise = fetch("https://grandcircusco.github.io/demo-apis/donuts.json")
.then(res => res.json())
.then(response => {
    console.log(response);
    console.log(`The total count is ${response.count}`);
})


const countPromise = apiPromise.then(data => data.count)
countPromise.then(count => {
    console.log(count)
})

// function apiDonuts() {
//     fetch("https://grandcircusco.github.io/demo-apis/donuts.json")
//     .then(response => {
//         return response.json();
//     })
//     .then(response => {
//         console.log(response)
//         console.log(`The count is ${response.count}`)
//     })
// }

// apiDonuts();

 