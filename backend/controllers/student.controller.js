import { hashPassword, validatePassword } from "../utils/hash.js";
import Students from "../models/student.model.js";
import { generateAccessToken, generateRefreshToken } from "../services/generateToken.js";
import  mongoose from "mongoose"

export const registerStudent = async (req, res) =>{
    try {
       const user = await Students.findOne({userId: req.body.userId})
       if (user){
        return res.status(400).json({message: "student already exists"})
       }
       const hashedPass = await hashPassword(req.body.hashPassword)
       const newUser = await Students.create({
        userId: req.body.userId,
        password: hashedPass
       })
       const accessToken = generateAccessToken(newUser.userId)
       res.cookie('accessToken', accessToken, {httpOnly: true})
       res.status(201).json({
        userId: newUser.userId
       })
    } catch (error) {
        console.error(error)
        res.status(500).json({error: error.message})
    }
}

export const loginStudent = async (req, res) => {
    try {
       const user = await Students.findOne({userId: req.body.userId}) 
       if (!user){
        return res.status(401).json({message: "Invalid student id or password"})
       }

       const passwordVerification = await validatePassword(req.body.password)
       if (!passwordVerification){
        return res.status(401).json({message: "Invalid student id or password"})
       }

       const token = generateAccessToken(user.userId)
       res.cookie('accessToken', token, {httpOnly: true})
       res.status(200).json({message: "login successful"})
    } catch (error) {
       console.error(error) 
       res.status(500).json({error: error.message})
    }
}

export const logoutStudent = async (req,res) => {
    try {
        res.clearCookie('accessToken').status(200).json({message: "Logout successful"})
    } catch (error) {
        console.error(error)
        res.status(500).json({error: error.message})
    }
}
