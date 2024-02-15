const translate = require("./translate");

describe("Translate", () => {

    //5 tests for words starting with different vowels
    test("Translate word starting with 'a' successfully", () => {
        //Act
        let translatedWord = translate("apple"); 
        //Assert
        expect(translatedWord).toBe("appleway");
    });
    test("Translate word starting with 'e' successfully", () => {
        //Act 
        let translatedWord = translate("else"); 
        //Assert
        expect(translatedWord).toBe("elseway"); 
    });
    test("Translate word starting with 'i' successfully", () => {
        //Arrange,Act 
        let translatedWord = translate("irate"); 
        //Assert
        expect(translatedWord).toBe("irateway"); 
    });
    test("Translate word starting with 'o' successfully", () => {
        //Arrange, Act 
        let translatedWord = translate("orange"); 
        //Assert
        expect(translatedWord).toBe("orangeway");
    }); 
    test("Translate word starting with 'u' successfully", () => {
        //Arrange, Act 
        let translatedWord = translate("universe"); 
        //Assert 
        expect(translatedWord).toBe("universeway"); 
    });

    //Tests starting with one consonant
    test("Translate word starting with consonant 'c' successfully", () => {
        //Arrange, Act 
        let translatedWord = translate("cat"); 
        //Assert 
        expect(translatedWord).toBe("atcay"); 
    });
    test("Translate word starting with consonant 't' successfully", () => {
        //Arrange, Act 
        let translatedWord = translate("tape"); 
        //Assert
        expect(translatedWord).toBe("apetay"); 
    });

    //Test word startign with two consonants 
    test("Translate word starting with two consonants 'p' and 'h' successfully",() => {
        //Arrange Act 
        let translatedWord = translate("photo"); 
        //Assert 
        expect(translatedWord).toBe("otophay"); 
    });

    //Test word starting with three consonants 
    test("Translate word starting with three consonants 's', 'c', and 'r' successfully", () => {
        //Arrange Act 
        let translatedWord = translate("scroll"); 
        //Assert 
        expect(translatedWord).toBe("ollscray");
    })

    //Test word starting with uppercase
    test("Translate word starting with uppercase letter successfully", () => {
        //Arrange Act 
        let translatedWord = translate("Hello"); 
        //Assert
        expect(translatedWord).toBe("ellohay"); 
    })
})


// AEIOU Tests using test.each 
describe("translate function tests", () => {
    const testCases = [
        ["apple", "appleway"], 
        ["elephant", "elephantway"], 
        ["indigo", "indigoway"]
    ]; 

    test.each(testCases)('given %p as input, return %p', (input, expected) => {
        const result = translate(input); 
        expect(result).toBe(expected)
    }
    );
});