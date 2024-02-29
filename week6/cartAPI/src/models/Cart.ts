import { ObjectId } from "mongodb";

export interface Cart {
    _id?: ObjectId; 
    product: string; 
    price: number; 
    quantity: number; 
}