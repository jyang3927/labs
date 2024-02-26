import { ShippingContainer } from "./IShippingContainer";
import { Transporter } from "./ITransporter";

export class Ship implements Transporter {
    maxWeight: number;
    containers: ShippingContainer[] = []; 

    constructor(maxWeight: number){
        this.maxWeight = maxWeight; 
    }

    addContainer(container: ShippingContainer): void {
        this.containers.push(container);
    }; 

    getTotalWeight(): number {
        if (this.containers.length === 0){
            return 0
        }else {
            let sum = this.containers.reduce((sum, container) => sum + container.getGrossWeight(), 0); 
            return sum; 
        }
    }

    isOverweight(): boolean {
        if (this.getTotalWeight() > this.maxWeight){
            return true;
        } else {
            return false; 
        }
    }
}