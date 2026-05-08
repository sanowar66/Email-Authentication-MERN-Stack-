import mongoose from "mongoose";

const uri = process.env.MONGODB_URI
const connectDB = async() => {
    try {
        await mongoose.connect(uri)
        console.log('MongoDB Connected Successfully.')
    } catch (error) {
        console.log(error.message)
    }
}
export default connectDB;
