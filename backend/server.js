import express from 'express';
import notesRoutes from './routes/notesRoutes.js';


const app = express();

app.use("/api/notes",notesRoutes);

app.listen(8000,()=>{
  console.log("server is started on port 8000");
});