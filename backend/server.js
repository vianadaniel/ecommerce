import express from "express"
import productRouter from "./routes/productRouter.js"
import dotenv from "dotenv"
import connectDB from "./config/db.js"

const app = express()

dotenv.config()

connectDB()

app.get("/", (req, res) => {
  res.send("API is running")
})

app.use("/api/products", productRouter)

const PORT = process.env.PORT || 5000

app.listen(
  PORT,
  console.log(`Server running in ${process.env.NODE_ENV} mode on  port ${PORT}`)
)
