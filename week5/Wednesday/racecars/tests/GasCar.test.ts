import { GasCar } from "../GasCar";

describe("GasCar Class", () => {
    test("team and fuel properties are set from constructor parameters", () => {
        let newGas = new GasCar("Toyota", 100); 
        expect(newGas).toMatchObject({team:"Toyota", speed: 0, fuel:100});
    }); 
    test("fuel defaults to 10, when the second constructor parameter is omitted & expect speed property to start at 0", () => {
        let newGas = new GasCar("Toyota"); 
        expect(newGas).toMatchObject({team:"Toyota", speed: 0, fuel: 10});
        expect(newGas.speed).toBe(0);
    }); 
    test("calling accelerate once brings speed to 2 and reduce fuel by 1", () => {
        let commonCar = new GasCar("Chevy", 30); 
        commonCar.accelerate(); 
        expect(commonCar.speed).toBe(2);
        expect(commonCar.fuel).toBe(29);
    }); 
    test("calling accelerate twice brings speed to 4 and reduces fuel by 2", () => {
        let commonCar = new GasCar("Chevy", 30); 
        commonCar.accelerate(); 
        commonCar.accelerate(); 
        expect(commonCar.speed).toBe(4);
        expect(commonCar.fuel).toBe(28);
    }); 
    test("isFuelEmpty returns true when fuel is 0", () => {
        let emptyFuel = new GasCar("Toyota", 0);
        expect(emptyFuel.isFuelEmpty).toBeTruthy;
    }); 
    test("isFuelEmpty returns false when fuel is greater than 0", () => {
        let emptyFuel = new GasCar("Toyota", 20);
        expect(emptyFuel.isFuelEmpty).toBeFalsy;
    })
    
})