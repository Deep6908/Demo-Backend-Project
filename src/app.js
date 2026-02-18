import express from "express"
import cors from "cors"
import cookieParser from "cookie-parser";

const app = express()

app.use(cors({
    origin: process.env.CORS_ORIGIN,
    credentials: true
}))

app.use(express.json({limit: "30kb"})) // accepts json data, size limit 30kb
app.use(express.urlencoded({extended: true, limit: "30kb"})) // data from url, sometimes space is converted to %20 and many more like that, this telling express to be aware of this fact and accept it
app.use(express.static("public"))
app.use(cookieParser())


export default app;