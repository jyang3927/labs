import { GasCar } from "../GasCar";
import { Racer } from "../IRacer";
import { SolarCar } from "../SolarCar";
import { findAverageSpeed, findRacersWithEmptyFuel, getFasterRacer } from "../racer-functions";

describe("findRacerswithEmptyFuel", () => {
        let gas10 = new GasCar("Gas Guzzler")
        let gas20 = new GasCar("Gas20", 20)
        let gas30 = new GasCar("Gas30", 30)
        let zeroGas1 = new GasCar("Carbon Footprint", 0)
        let zeroGas2 = new GasCar("Burn Baby Burn", 0)
        let zeroGas3 = new GasCar("zero Fuel", 0)
        let solarCar1 =  new SolarCar("Green Machine")
        let solarCar2 = new SolarCar("Sunray")
        let solarCar3 = new SolarCar("Light Lightning")

    test("some cars have no fuel returns array of cars with no fuel", () => {
        let racers: Racer[] = [
            gas10, 
            zeroGas1, 
            zeroGas2, 
            solarCar1, 
            solarCar2, 
            solarCar3
          ];
          let result = findRacersWithEmptyFuel(racers); 
          expect(result).toMatchObject([zeroGas1, zeroGas2])
    });

    test("all cars have zero fuel returns array with all cars", () => {
        let racers: Racer[] = [
            zeroGas1, 
            zeroGas2, 
            zeroGas3
          ];
          let result = findRacersWithEmptyFuel(racers); 
          expect(result).toMatchObject([zeroGas1, zeroGas2, zeroGas3])
    }); 

    test("Array of GasCar where none have no fuel returns empty array", () => {
        let racers: Racer[] = [
            gas10, 
            gas20, 
            gas30
        ]; 
        let result = findRacersWithEmptyFuel(racers); 
        expect(result).toMatchObject([]);
    }); 

    test("Array of solarcars will return empty array", () => {
        let racers:Racer[] = [
            solarCar1, 
            solarCar2, 
            solarCar3
        ]; 
        let result = findRacersWithEmptyFuel(racers); 
        expect(result).toMatchObject([]);
    }); 

    test("array of mix gas and solar car returns only gas car with empty fuel", () => {
        let racers:Racer[] = [
            gas10,
            gas20,
            gas30,
            zeroGas1,
            zeroGas2,
            solarCar1,
            solarCar2
        ]; 
        let result = findRacersWithEmptyFuel(racers); 
        expect(result).toMatchObject([zeroGas1,zeroGas2])
    }); 
    test("empty array returns empty array", () => {
        let racers:Racer[] = []; 
        let result = findRacersWithEmptyFuel(racers); 
        expect(result).toMatchObject([]);
    })
})

describe("findAverageSpeed", () => {
    let gas10 = new GasCar("Gas10", 10)
    let gas20 = new GasCar("Gas20", 20)
    let gas30 = new GasCar("Gas30", 30)
    let gas40 = new GasCar("Gas40", 40)
    let zeroGas1 = new GasCar("Carbon Footprint", 0)
    let zeroGas2 = new GasCar("Burn Baby Burn", 0)
    let zeroGas3 = new GasCar("zero Fuel", 0)
    let solarCar1 =  new SolarCar("Green Machine")
    let solarCar2 = new SolarCar("Sunray")
    let solarCar3 = new SolarCar("Light Lightning")

    test("average speed of gas cars", () => {
        let i = 0; 
        //gas30 = 8
        while (i < 4){
            gas30.accelerate();
            i++;
        }
        //gas40 = 2
        gas40.accelerate();

        let racer:Racer[] = [
            gas30, gas40
        ]; 

        let result = findAverageSpeed(racer);
        expect(result).toBe(5)
    });

    test("average speed of mix of solar and gas", () => {
        gas10.accelerate(); 
        gas10.accelerate(); 
        //gas10 has speed 4
        gas20.accelerate();
        //gas20 has speed 2
        solarCar1.accelerate(); 
        //solarCar1 has speed 1
        solarCar2.accelerate();
        solarCar2.accelerate();
        //solarCar2 has speed 2

        let racers:Racer[] = [
            gas10,gas20,solarCar1,solarCar2
        ]; 

        let result = findAverageSpeed(racers); 
        expect(result).toBe(2)
    }); 
    
    test("array of cars that have 0 speed returns 0", () => {
        let racers:Racer[] = [
            zeroGas1,zeroGas2,zeroGas3
        ]; 
        let result = findAverageSpeed(racers); 
        expect(result).toBe(0);
    }); 

    test("empty array will return 0", () => {
        let racers:Racer[] = []; 
        let result = findAverageSpeed(racers); 
        expect(result).toBe(0);
    })
}); 

describe("getFasterRacer", () => {
    let gas10 = new GasCar("Gas10", 10)
    gas10.accelerate();
    let gas20 = new GasCar("Gas20", 20)
    gas20.accelerate();
    gas20.accelerate();
    let solarCar1 =  new SolarCar("Green Machine")
    solarCar1.accelerate();
    let equalSpeed1 = new GasCar("equal1") 
    equalSpeed1.accelerate();
    let equalSpeed2 = new GasCar("equal2")
    equalSpeed2.accelerate();

    test("racerA is faster returns racerA", () => {
        let result = getFasterRacer(gas20, gas10); 
        expect(result).toMatchObject(gas20)
    }); 

    test("racerB is faster, returns racerB", () => {
        let result = getFasterRacer(gas10, gas20); 
        expect(result).toMatchObject(gas20)
    }); 
    test("both racers have same speed, return null", () => {
        let result = getFasterRacer(equalSpeed1, equalSpeed2)
        expect(result).toBe(null)
    }); 
    test("both gas20 and solarCar1, returns gas20", () => {
        let result = getFasterRacer(solarCar1, gas20); 
        expect(result).toMatchObject(gas20)
    })

})

