import { VirtualPet } from "./VirtualPet";

export class Dog extends VirtualPet{
    public play() : void {
        if (this.happiness <= 85) {
            this.happiness += 15; 
        } else if (this.happiness > 85 && this.happiness < 100){
            let toHundred = 100 - this.happiness; 
            this.happiness += toHundred; 
        }
    }
}