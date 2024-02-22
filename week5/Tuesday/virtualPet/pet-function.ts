import { VirtualPet } from "./VirtualPet";
import {Dog} from "./Dog"; 
import {Cat} from "./Cat";


export function decay(pet:VirtualPet) : void{
    if(pet.hunger <= 95){
        pet.hunger += 5; 
    }else if (pet.hunger < 100 && pet.hunger > 95){
        let toHundred = 100 - pet.hunger; 
        pet.hunger += toHundred;
    }

    if(pet.happiness >= 5){
        pet.happiness -= 5; 
    }else if(pet.happiness < 5 && pet.happiness > 0){
        let toZero = 5 - pet.happiness; 
        pet.happiness -= toZero;
    }
}

export function makePet(name:string, type:string) : VirtualPet {
    if(type.toLowerCase() === "dog"){
        let newDog = new Dog(name); 
        return newDog; 
    }else if (type.toLowerCase() === "cat"){
        let newCat = new Cat(name, "black"); 
        return newCat;
    }else {
        let newVirtualPet = new VirtualPet(name); 
        return newVirtualPet;
    }
}
