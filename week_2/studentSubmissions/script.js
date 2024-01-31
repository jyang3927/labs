const submissions = [
    {name: "Jane", score: 95, passed: true}, 
    {name: "Joe", score: 77, passed: true}, 
    {name: "Jack", score: 59, passed: false}, 
    {name: "Jill", score: 88, passed: true}, 
];

//Add Submission
function addSubmission(array, newName, newScore) {
    let checkPassProperty; 
    if (newScore >= 60) {
        checkPassProperty = true;
    } else {
        checkPassProperty = false;
    }
    let addSub = {name: newName, score: newScore, passed: checkPassProperty};
    array.push(addSub);
}
//testing
addSubmission(submissions, "Jamie", 65); 
console.log(submissions);


//Delete Submission at specified index
const deleteSubmissionByIndex = (array, index) => {array.splice(index, 1);}
//testing
deleteSubmissionByIndex(submissions, 4);
console.log(submissions);
  
//Delete submission by a specified name
const deleteSubmissionByName = (array, name) => {
    let indexOfName = array.findIndex(array => array.name === name);
    array.splice(indexOfName, 1); 
}
//testing
deleteSubmissionByName(submissions, "Jill"); 
console.log(submissions);

//Update score at specified index 
const editSubmission = (array, index, score) => {
    array[index].score = score;
    array[index].passed = score >= 60 ? true : false;
}
//testing 
editSubmission(submissions, 2, 24);
console.log(submissions);

//return object that has specified name 
const findSubmissionByName = (array, name) => {
    let found = array.find(array => array.name === name); 
    return found;
}
//testing
console.log("find submission by name" )
console.log( findSubmissionByName(submissions, "Jack")); 

//return the lowest score 
const findLowestScore = (array) => {
    return array.reduce((min, arr) => {return arr.score < min.score ? arr : min}, array[0]);
}
//test
console.log("find Lowest Score: ")
console.log(findLowestScore(submissions));

//find the average score 
const findAverageScore = (array) => (array.reduce((total,arr) => arr.score + total, 0))/(array.length); 
//test
submissions.forEach((submission) => console.log(submission.score));
console.log(findAverageScore(submissions));

//return new array using filter method to find objects in array that have passing score 
const filterPassing = (array) => array.filter(submission => submission.passed === true);
//testing 
console.log(filterPassing(submissions));

//return new array using filter method that finds objects in array tha thave scores greater than or equal to 90
const filter90AndAbove = (array) => array.filter(submission => submission.score >= 90); 
//testing
console.log(filter90AndAbove(submissions)); 






// EXTENDED CHALLENGES 

//create a function that constructs and returns an array of ints starting with start parameter and ending at end parameter 
let arrRange = [];
const createRange = (start, end) => {
    for (let i = 0; i < end; i ++){
        arrRange.push(start + i);
    }
    return arrRange;
}
console.log("create range"); 
console.log(createRange(2,5));


//create function that returns obj with arr values as keys and the number of times that key appears in the array as values 
let newArray = [];
const countElements = (array) => array.forEach(val => newArray[val] ? newArray[val] += 1 : newArray[val] = 1)

//const countElements = (array) => array.reduce((value, comp) => (value[comp] ? ++value[comp] : value[comp] = 1, value), []); 

//testing 
console.log("count Elements"); 

let checkArray = ['a', 'b', 'a', 'c', 'a', 'b']; 
// console.log(countElements(checkArray))
countElements(checkArray); 
console.log(newArray); 