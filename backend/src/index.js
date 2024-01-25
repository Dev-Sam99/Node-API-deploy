import dotenv from "dotenv";
import connectDB from "./db/index.js";
import {app} from "./app.js";

dotenv.config({
    path:'./env'
})

const port = process.env.PORT || 5000;
connectDB()
.then(()=>{
    app.listen(port,()=>{
        console.log(`app is running on ${port}`);
    })
})
.catch((err)=>{
    console.log('MONGO DB connection failed...!',err)
});