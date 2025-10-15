import mongoose from "mongoose";

const studentSchema = new mongoose.Schema({
    studentId:{
        type: String,
        unique: true,
        required: true
    },
    department : {
        type: String,
        required: true,
    },
    classYear: {
        type: String,
        required: true,
    },
    name: {
        type: String,
        required: true
    },
    password:{
        type: String,
        required: true,
    },
})

const Students = new mongoose.model("Student", studentSchema)
export default Students