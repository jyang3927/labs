import { VirtualPet } from "./VirtualPet";

export class Cat extends VirtualPet {
    color: string; 

    constructor(name:string, color: string){
        super(name); 
        this.color = color; 
    }

    public getAttitude() : string {
        if (this.getSatisfaction() > 0){
            return "inquisitive";
        }else {
            return "grumpy";
        }
    }

    public describe() : string {
        return (`Name: ${this.name}, Hunger: ${this.hunger}, Happiness: ${this.happiness}, Color: ${this.color}, Attitude: ${this.getAttitude()}`);
    }
}