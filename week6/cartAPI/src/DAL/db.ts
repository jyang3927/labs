import { MongoClient, Db} from "mongodb"; 
import dotenv from 'dotenv'; 

dotenv.config(); 

const dbURI: string = process.env.URL || ""; 

let dbInstance:Db;

export const connectDB = async(): Promise<void> => {
    try{
        const client:MongoClient = new MongoClient(dbURI); 
        await client.connect(); 

        dbInstance = client.db('cartsLab'); 
        console.log('Connected to MongoDB');
    }
    catch(error:any){
        console.log('Failed to connect to MongoDB', error); 
        process.exit(1); 
    }
}

export const getDb = ():Db => {
    if(!dbInstance) throw Error('Must connect to DB first'); 
    return dbInstance; 
}