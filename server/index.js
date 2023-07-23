import express from "express";
import cookieParser from "cookie-parser";
import cors from "cors";
import http from "http";
import mongoose from "mongoose";
import "dotenv/config";
import routes from "./src/routes/index.js";

const app = express();

app.use(
  cors({
    origin: [
      "http://localhost:3000",
      "https://flixxit-t89d.vercel.app/",
      "https://vercel.live/link/flixxit-t89d-git-main-omidhokate2002.vercel.app?via=deployment-domains-list-branch",
      "https://vercel.live/link/flixxit-t89d-d4elfslf8-omidhokate2002.vercel.app?via=deployment-domains-list-commit",
    ],
  })
);
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
//vercel.live/link/flixxit-t89d-d4elfslf8-omidhokate2002.vercel.app?via=deployment-domains-list-commit
https: app.use("/api/v1", routes);

const port = process.env.PORT || 5000;

const server = http.createServer(app);

mongoose
  .connect(process.env.MONGODB_URL)
  .then(() => {
    console.log("Mongodb connected");
    server.listen(port, () => {
      console.log(`Server is listening on port ${port}`);
    });
  })
  .catch((err) => {
    console.log({ err });
    process.exit(1);
  });

//test
