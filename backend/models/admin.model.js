import mongoose from "mongoose";

const adminSchema = new mongoose.Schema({
    adminId: {
        type: String,
        required: true,
    },
    password: {
        type: String,
        required: true
    }
})

const Admins = new mongoose.model("Admin", adminSchema)
export default Admins