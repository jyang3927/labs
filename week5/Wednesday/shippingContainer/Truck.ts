import { ShippingContainer } from "./IShippingContainer";
import { Transporter } from "./ITransporter";

export class Truck implements Transporter {
    maxWeight: number;
    container: ShippingContainer | null = null; 

    constructor(maxWeight: number){
        this.maxWeight = maxWeight; 
    }

    addContainer(container: ShippingContainer): void {
        this.container = container;
    }
    getTotalWeight(): number {
        if (this.container === null){
            return 0
        }else {
            return this.container.getGrossWeight();
        }
    }
    isOverweight(): boolean {
        let result  = this.getTotalWeight(); 
        if (result > this.maxWeight){
            return true; 
        }else {
            return false;
        }
    }
}