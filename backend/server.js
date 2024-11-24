import express from "express";
import cors from "cors";
import { connectDB } from "./config/db.js";

import userRouter from "./routes/userRoute.js";
import 'dotenv/config';

import employeeRoutes from "./routes/employeeRoute.js";

// app configuration
const app = express();
const port =process.env.PORT || 4000;

// middleware
app.use(express.json());
app.use(cors());

// db connection
connectDB();

// api endpoints 

app.use("/images", express.static('uploads'));
app.use("/api/user", userRouter);
app.use("/api/employee",employeeRoutes);
// Corrected path

app.get("/", (req, res) => {
  res.send("app is working very fine ");
});

app.listen(port, () => {
  console.log(`Server started on http://localhost:${port}`);
});
