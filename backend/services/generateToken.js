import jwt from "jsonwebtoken"
import dotenv from "dotenv"

dotenv.config()

export function generateAccessToken(userID){
    return jwt.sign(
        {userId: userId},
        process.env.JWT_SECRET,
        { expiresIn: '15m'}
    )
}

export function generateRefreshToken(userID){
    return jwt.sign(
        {userId: userId},
        process.env.JWT_SECRET,
        { expiresIn: '7d'}
    )
}

export function verifyAccessToken(token){
    try {
       return jwt.verify(token, process.env.JWT_SECRET) 
    } catch (error) {
       throw new Error("Invalid token" + error.message) 
    }
}
export function verifyRefreshToken(token){
    try {
       return jwt.verify(token, process.env.JWT_SECRET) 
    } catch (error) {
       throw new Error("Invalid token" + error.message) 
    }
}