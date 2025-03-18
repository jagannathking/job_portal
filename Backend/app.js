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


const allowedOrigins = [
    "https://job-portal-tfzw-jagannaths-projects-36d87af2.vercel.app",
    "https://job-portal-tfzw-git-main-jagannaths-projects-36d87af2.vercel.app",
  ];
  
  app.use(
    cors({
      origin: (origin, callback) => {
        if (allowedOrigins.includes(origin)) {
          callback(null, true);
        } else {
          callback(new Error("Not allowed by CORS"));
        }
      },
    })
  );
  
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