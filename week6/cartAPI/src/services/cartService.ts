
import { getAllCarts, getCartById, createCart, updateCart, deleteCart } from "../DAL/cartRepository";
import { Cart } from "../models/Cart";

export const getCarts = async(): Promise<Cart[]> => {
    return getAllCarts(); 
};

export const getIdCart = async(id:string): Promise<Cart | null> => {
    return getCartById(id); 
};

export const createNewCart = async(cartData:Cart) : Promise<void> => {
    return createCart(cartData); 
}; 

export const updateCartbyId = async(id:string, cartData: Partial<Cart>): Promise<boolean> => {
    return updateCart(id, cartData); 
}; 

export const deleteCartbyId = async(id:string): Promise<boolean> => {
    return deleteCart(id); 
}