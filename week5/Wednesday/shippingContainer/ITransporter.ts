import { ShippingContainer } from "./IShippingContainer";

export interface Transporter {
    maxWeight:number; 

    addContainer(container: ShippingContainer): void; 

    getTotalWeight(): number; 

    isOverweight(): boolean; 
}