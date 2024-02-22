export class VirtualPet {
    name: string; 
    hunger:number = 50; 
    happiness:number = 50; 

    constructor(name:string) {
        this.name = name;
    }

    public describe() : string {
        return (`Name: ${this.name}, Hunger: ${this.hunger}, Happiness: ${this.happiness}`);
    }

    public getSatisfaction() : number {
        let satisfaction = this.happiness - this.hunger; 
        return satisfaction;
    }

    public makeSound(sound:string) : string {
        return (`${this.name} says ${sound}`); 
    }

    public feed() : void{
        if (this.hunger >= 10){
            this.hunger -= 10;
        } else if (this.hunger < 10 && this.hunger > 0){
            let toZero = 10 - this.hunger; 
            this.hunger -= toZero; 
        }
    }

    public play() : void {
        if (this.happiness <= 90) {
            this.happiness += 10; 
        }else if (this.happiness > 90 && this.happiness <100) {
            let toHundred = 100 - this.happiness; 
            this.happiness += toHundred; 
        }
    }
}