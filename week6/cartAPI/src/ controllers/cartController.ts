import express, {Request, Response} from "express";
import { getCarts, getIdCart, createNewCart, updateCartbyId, deleteCartbyId } from "../services/cartService";

const router = express.Router(); 

router.get('/carts', async(req:Request, res:Response) => {
    try{
        const {state} = req.query; 
        const data = await getCarts(); 

        return res.status(200).json(data); 
    }
    catch(error:any){
        return res.status(500).json({error: error}); 
    }
}); 

router.get('/carts/:id', async(req:Request, res:Response) => {
    try{
        const cartId = await getIdCart(req.params.id); 
        return res.status(200).json(cartId); 
    }
    catch(error:any){
        return res.status(500).json({error: error}); 
    }
});

router.post('/carts', async(req:Request, res:Response) => {
    try{
        const cart = await createNewCart(req.body); 
        return res.status(201).json(cart)
    }
    catch(error:any){
        return res.status(500).json({error: error}); 
    }
}); 

router.put('/carts/:id', async(req:Request, res:Response) => {
    try{
        const success = await updateCartbyId(req.params.id, req.body); 

        if(success){
            return res.status(200).json({message: "Cart item updated successfully"})
        }else {
            return res.status(404).json({message: "Cart not found"})
        }
    }
    catch(error:any){
        return res.status(500).json({error: error}); 
    }
}); 

router.delete('/carts/:id', async(req:Request, res:Response) => {
    try{
        const success = await deleteCartbyId(req.params.id); 
        if(success){
            return res.status(204).json({message: "Item Deleted"})
        }else {
            return res.status(404).json({message:"Cart item not found"})
        }
    }
    catch(error:any){
        return res.status(500).json({error: error}); 
    }
}); 

export default router; 
