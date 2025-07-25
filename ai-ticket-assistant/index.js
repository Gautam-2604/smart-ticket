import express from 'express'
import dotenv from "dotenv";
import cors from 'cors'
import mongoose from 'mongoose';

dotenv.config();

const PORT = process.env.PORT || 3000;

const app = express()

app.use(cors());
app.use(express.json());


mongoose
  .connect(process.env.MONGO_URI)
  .then(() => {
    console.log("MongoDB connected ✅");
    app.listen(PORT, () => console.log("🚀 Server at http://localhost:3000"));
  })
  .catch((err) => console.error("❌ MongoDB error: ", err));