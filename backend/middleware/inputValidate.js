import {z} from 'zod'

export function validateInput(schema){
    return (req,res,next) =>{
        const parsed = schema.safeParse(req.body)

        if (!parsed.success){
            return res.status(400).json({
                errors: parsed.error.format()
            })
            req.body = parsed.data
            next()
        }
    }
}