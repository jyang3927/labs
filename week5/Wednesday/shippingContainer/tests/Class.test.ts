import { LightContainer } from "../LightContainer";
import { HeavyContainer } from "../HeavyContainer";
import { Truck } from "../Truck";

describe("LightContainerClass", () => {
    
    test("destination and cargoweight are set from constructor parameters", () => {
        let test =  new LightContainer("Hawaii", 200); 
        expect(test).toMatchObject({destination:"Hawaii", cargoWeight:200})
    }); 

    test("cargoWeight defaults to 0 when second constructor parameter is omitted", () => {
        let test = new LightContainer("Korea"); 
        expect(test).toMatchObject({destination:"Korea", cargoWeight:0})
    })

    test("getGrossWeight returns 2 when the cargoWeight is 2", () => {
        let test = new LightContainer("Hawaii", 2); 
        let weight = test.getGrossWeight(); 
        expect(weight).toBe(2);
    })

    test("getGrossWeight returns 100 when the cargoWeight is 100", () => {
        let test = new LightContainer("Hawaii", 100); 
        let weight = test.getGrossWeight(); 
        expect(weight).toBe(100);
    })
}); 

describe("HeavyContainerClass", () => {
    test("the tareWeight, destination, and cargoWeight properties are set from constructor parameters", () => {
        let test = new HeavyContainer("Hawaii", 200, 100); 
        expect(test).toMatchObject({destination:"Hawaii", tareWeight: 200, cargoWeight: 100 })
    }); 
    test("cargoWeight defaults to 0 when constructor parameter is omitted", () => {
        let test = new HeavyContainer("Hawaii", 200); 
        expect(test).toMatchObject({destination:"Hawaii", tareWeight: 200, cargoWeight: 0})
    });
    test("getGrossWeight returns 300 when the tareWeight is 100 plus cargoWeight is 200", () => {
        let test = new HeavyContainer("Hawaii", 100, 200); 
        let result = test.getGrossWeight(); 
        expect(result).toBe(300)
    });
    test("getGrossWeight returns 600 when the tareWeight is 300 plus cargoWeight is 300", () => {
        let test = new HeavyContainer("Hawaii", 300, 300); 
        let result = test.getGrossWeight(); 
        expect(result).toBe(600)
    })
}); 

describe("Truck Class", () => {
    let truck:Truck; 
    let light1 = new LightContainer("Hawaii", 10);
    let light2 = new LightContainer("Hawaii", 20);
    let heavy1 = new HeavyContainer("Hawaii", 1000); 
    let heavy2 = new HeavyContainer("Hawaii", 20); 
    let equalCon = new HeavyContainer("Hawaii", 100);
    beforeEach(() => {
        truck = new Truck(100)
    })
    test("maxWeight property is set from constructor parameter and container property is set to null", () => {
        expect(truck.maxWeight).toBe(100);
        expect(truck.container).toBe(null);
        expect(truck.getTotalWeight()).toBe(0)
    }); 
    test("calling addContainer sets the container property", () => {
        let lightCon = new LightContainer("Hawaii", 30);
        truck.addContainer(lightCon); 
        expect(truck.container).toMatchObject(lightCon)
    }); 
    test("getTotalWeight returns gross weight 10 of container when container weight 10 is added",() => {
        truck.addContainer(light1); 
        expect(truck.getTotalWeight()).toBe(10); 
    });
    test("getTotalWeight returns gross weight 20 of container when Heavycontainer tareWeight 20 is added",() => {
        truck.addContainer(heavy2); 
        expect(truck.getTotalWeight()).toBe(20); 
    });
    test("isOverweight returns true when total weight is greater than maxWeight", () => {
        truck.addContainer(heavy1); 
        expect(truck.isOverweight()).toBeTruthy; 
    }); 
    test("isOverweight returns false when total weight is less than maxWeight", () => {
        truck.addContainer(heavy2); 
        expect(truck.isOverweight()).toBeFalsy; 
    }); 
    test("isOverweight returns false when total weight is equal to maxWeight", () => {
        truck.addContainer(equalCon); 
        expect(truck.isOverweight()).toBeFalsy; 
    }); 
})