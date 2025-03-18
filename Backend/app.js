import express from "express";
import cookieParser from "cookie-parser";
import cors from "cors";
import dotenv from "dotenv";

import userRoute from "./routes/user.route.js";
import companyRoute from "./routes/company.route.js";
import jobRoute from "./routes/job.route.js";
import applicationRoute from "./routes/application.route.js";

dotenv.config();
const app = express();

//middleware
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cookieParser());

// const corsOptions = {
//   origin: ["https://job-portal-tfzw.vercel.app"],
//   credentials: true,
// };
// app.use(cors(corsOptions));


// Allow requests only from your frontend domain
const corsOptions = {
    origin: "https://job-portal-tfzw.vercel.app/", 
    methods: "GET,POST,PUT,DELETE",
    allowedHeaders: "Content-Type,Authorization",
  };
  
  app.use(cors(corsOptions));
//api's

app.use("/api/user", userRoute);
app.use("/api/company", companyRoute);
app.use("/api/job", jobRoute);
app.use("/api/application", applicationRoute);


// Test route
app.get("/", (req, res) => {
    res.status(200).json({message:"Healthy"})
})

export default app