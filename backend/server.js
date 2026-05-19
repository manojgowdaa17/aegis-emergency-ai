import express from "express";
import dotenv from "dotenv";
import cors from "cors";
import aiRoutes from "./routes/aiRoutes.js";

import connectDB from "./config/db.js";

import incidentRoutes from "./routes/incidentRoutes.js";

dotenv.config();

connectDB();

const app = express();

app.use(cors());

app.use(express.json());

app.use(
  "/api/incidents",
  incidentRoutes
);

app.use("/api/ai", aiRoutes);

app.get("/", (req,res)=>{
  res.send("AegisAI Backend Running");
});

const PORT = process.env.PORT || 5000;

app.listen(PORT, ()=>{
  console.log(`Server running on ${PORT}`);
});