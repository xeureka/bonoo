import { verifyAccessToken } from "../services/generateToken";
import dotenv from "dotenv"

dotenv.config()

export function authenticated(req,res,next){
    const token = req.header('authorization')
    if (!token || typeof token != 'string'){
        res.status(403).json({ message: "No token"})
        return 
    }

    try {
       const payload = verifyAccessToken(token) 
       if (!payoad){
        res.status(401).json({message: "No or Invalid token"})
        return
       }
       next()
    } catch (error) {
       console.error(error) 
       res.status(500).json({message: "Internal server error"})
    }
}

export function authorizedRoles(...allowedRoles){
    return (req,res,next) =>{
        try {
           const token = req.header("authorization") 
           if (!token){
            return res.status(403).json({message: "No token"})
           }

           const payload = verifyAccessToken(token)
           if (!payload){
            return res.status(401).json({message: "Invalid token"})
           }

           if (!allowedRoles.includes(payload.role)){
            return res.status(403).json({message: "forbidden"})

           }
           req.user = payload
           next()
        } catch (error) {
            console.error(error)
            res.status(500).json({message: "Internal server error"})
        }
    }
}