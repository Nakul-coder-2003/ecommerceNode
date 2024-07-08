import mongoose from "mongoose";

const connectDB = async()=>{
    try {
        mongoose.connect('mongodb://127.0.0.1:27017/ecom');
        console.log("connection successful");
    } catch (error) {
        console.log(`error in connection ${error}`);
    }
}

export default connectDB;

