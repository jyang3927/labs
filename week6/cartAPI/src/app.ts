import express, {Application} from 'express'; 
import {connectDB} from './DAL/db'; 
import router from './ controllers/cartController'

const app:Application = express(); 

const port:string | number = 3000; 

app.use(express.json()); 

app.use('/api', router); 

const startApp = async(): Promise<void> => {
    await connectDB(); 
    app.listen(port, () => console.log(`Server is running on port ${port}`))
}; 

startApp(); 