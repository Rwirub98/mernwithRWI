import express from 'express';
import notesRoutes from './routes/notesRoutes.js';
import { connectDB } from "./config/db.js";
import dotenv from "dotenv";
import rateLimiter from "./middleware/rateLimiter.js";



dotenv.config()
const app = express();


// middleware
app.use(express.json());// this is middleware which will parse JSON bodies : req.body
app.use(rateLimiter);


//our simple custom middleware
// app.use((req, res, next)=>{
// console.log(`req method id ${req.method} and url is ${req.url}`);
// next ();
// })


app.use("/api/notes",notesRoutes);

connectDB().then(()=>{
app.listen(8000,()=>{
  console.log("server is started on port 8000");
})
});
