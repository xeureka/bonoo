import mongoose from "mongoose"
import dotenv from "dotenv"

dotenv.config()

export async function connectDB(){
  try{
    await mongoose.connect(process.env.MONGO_URI)
    console.log('DB connnected successfully!')
  } catch(err){
    console.log('Error connecting to DB', err)
  }
}
