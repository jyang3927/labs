const {SolarCar} = require("../SolarCar")

describe('SolarCar', () => {
  let newCar = new SolarCar("Lightyear")
  test("team property is set from constructor parameter", () => {
    const result = newCar.team; 
    expect(result).toBe("Lightyear")
  })

  test("Speed property starts at 0", () => {
    const result = newCar.speed; 
    expect(result).toBe(0); 
  })

  test("Calling accelerate once brings speed to 1", () => {
    newCar.accelerate(); 
    const result = newCar.speed; 
    expect(result).toBe(1); 
  })

  test("calling accelerate twice brings speed to 2", () => {
    newCar.accelerate(); 
    const result = newCar.speed; 
    expect(result).toBe(2)
  })

  test("isFuelEmpty returns false", () => {
    const result = newCar.isFuelEmpty(); 
    expect(result).toBeFalsy;
  })
})
