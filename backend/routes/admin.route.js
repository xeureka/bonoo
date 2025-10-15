import express from "express"
import { validateInput } from "../middleware/inputValidate"
import { loginSchema, registerSchema } from "../schemas/user.schema"

const router = express.Router()

router.post('/register', validateInput(registerSchema), registerAdmin)
router.post('/login', validateInput(loginSchema), loginAdmin)
router.post('/logout', logoutAdmin)