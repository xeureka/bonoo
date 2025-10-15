import express from 'express'

import { loginStudent, logoutStudent, registerStudent} from '../controllers/student.controller.js'
import { registerSchema, loginSchema } from '../schemas/user.schema.js'
import { validateInput } from "../middleware/inputValidate.js"
import { authorizedRoles, authenticated } from '../middleware/auth.middleware.js'

const router = express.Router()

router.post('/register', validateInput(registerSchema), registerStudent)
router.post('/login', validateInput(loginSchema), loginStudent)
router.post('/logout', logoutStudent)

export default router