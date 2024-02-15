function translate(string) {
    let vowels = ["a","e","i","o","u"];

    let lowerCase = string.toLowerCase(); 
    let arrayWord = lowerCase.split("");
    
    //Check if first letter is vowel 
    // if (vowels.indexOf(arrayWord[0]) != -1){
    //     arrayWord.push("way"); 
    //     console.log(arrayWord)
    //     return arrayWord.join("");

    // ORIGINAL 

    for (let i = 0; i < vowels.length; i++){
        if (arrayWord[0] === vowels[i]) {
            arrayWord.push("way"); 
            return arrayWord.join("");
        }
    }
    
    // //Iterate through array of letters
        for(let i = 0; i < arrayWord.length; i++){
            for (let j = 0; j < vowels.length; j++){
                if (arrayWord[i] === vowels[j]){
                    //Get first consonants 
                    let firstConsonants = arrayWord.slice(0, i); 
                    arrayWord.splice(0, i); 
                    let consonantsMoved = arrayWord.concat(firstConsonants);
                    consonantsMoved.push("ay")
                    return(consonantsMoved.join(""));
                }
            }
        }
    }


module.exports = translate;


    //Check if first letter is vowel 
    // if (vowels.indexOf(arrayWord[0]) != -1){
    //     arrayWord.push("way"); 
    //     console.log(arrayWord)
    //     return arrayWord.join("");
