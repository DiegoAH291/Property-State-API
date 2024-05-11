import router from "./router/router";
import express from "express";
import cors from "cors";
import "dotenv/config";

const core = express();

core.set("port", process.env.PORT ?? 6000);
core.use(express.json());
core.use(
  cors({
    origin: "*",
    optionsSuccessStatus: 200,
    methods: ["GET", "POST", "DELETE"],
  })
);
core.use(router);

export default core;
