import { Cart } from "../models/Cart";
import { getDb } from "./db";
import { Collection, Document, ObjectId } from 'mongodb'; 

export const findData = async (): Promise <Document[]> => {
    const db = getDb(); 
    return db.collection('carts').find({}).toArray(); 
};

const collectionName = 'carts'; 

const collection = (): Collection<Cart> => {
    return getDb().collection(collectionName); 
}; 

//CRUD 
//Get All of X
export const getAllCarts = async (): Promise<Cart[]> => {
    return await collection().find({}).toArray(); 
};
//Get X by ID
export const getCartById = async(id:string): Promise<Cart | null> => {
    return await collection().findOne({_id: new ObjectId(id)});
};
//Create X
export const createCart = async(cartData:Cart): Promise<void> => {
    await collection().insertOne(cartData); 
}; 
//Update X
export const updateCart = async(id:string, cartData: Partial<Cart>): Promise<boolean> => {
    const result = await collection(). updateOne({_id: new ObjectId(id)}, {$set: cartData}); 
    return result.modifiedCount > 0; 
}
//Delete X
export const deleteCart = async(id:string): Promise<boolean> => {
    const result = await collection().deleteOne({_id: new ObjectId(id)}); 
    return result.deletedCount > 0; 
}