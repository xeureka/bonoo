import express from "express"
import dotenv from "dotenv"
import cookieParser from "cookie-parser"
import { connectDB } from "./utils/db.js"
import studentRoute from "./routes/student.route.js"
import adminRoute from "./routes/admin.route.js"

dotenv.config()

const PORT = process.env.PORT || 4000
const app = express()

app.use(express.json())
app.use(cookieParser())

app.use('/api/student', studentRoute)
app.use('/api/admin', adminRoute)
app.use('/api/doorRequest', doorRequestRoute)

connectDB()
app.listen(PORT, () => {
  console.log(`server running on port ${PORT}`)
})
