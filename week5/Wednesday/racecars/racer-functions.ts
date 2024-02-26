import { Racer } from "./IRacer";

export function findRacersWithEmptyFuel(racers:Racer[]) : Racer[]{
    let newRacers:Racer[] = racers.filter((racer) => racer.isFuelEmpty() === true)
    return newRacers;
}

export function findAverageSpeed(racers:Racer[]) : number {
    if (racers.length === 0 ){
        return 0;
    }else {
        let averageSpeed = (racers.reduce((sum, racer) => sum += racer.speed, 0)) / racers.length; 
        return Math.round(averageSpeed);
    }
} 

export function getFasterRacer(racerA:Racer, racerB:Racer): Racer | null {
    let result = racerA.speed === racerB.speed ? null : racerA.speed > racerB.speed ? racerA : racerB; 
    return result; 
}