import { Racer } from "./IRacer";

export class GasCar implements Racer {
    team:string; 
    speed:number = 0; 
    fuel: number = 10; 

    constructor(team:string,fuel?:number){
        this.team = team; 
        if(fuel !== undefined){
            this.fuel = fuel;
        }
        // }else {
        //     this.fuel = 10;
        // }
        // this.fuel = fuel;
    }

    accelerate(): void {
        this.speed += 2; 
        this.fuel -= 1; 
    }

    isFuelEmpty(): boolean {
        if(this.fuel <= 0){
            return true;
        }else {
            return false;
        }
    }
}