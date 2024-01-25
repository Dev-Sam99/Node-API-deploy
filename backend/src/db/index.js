import mongoose from "mongoose";
import { DB_NAME } from "../constants.js";


const connectDB = async() =>{
        try{
           const connectionInstance = await mongoose.connect(`${process.env.MONGODB_URI}/${DB_NAME}`,{
              useNewUrlParser: true,
              useUnifiedTopology: true,
              writeConcern: { w: 'majority' },
           });
           console.log("\n MONGO DB connected");
        }
        catch(err){
            console.log("MONGO DB connection error!",err);
            process.exit(1)
        }
};

export  default connectDB;