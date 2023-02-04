import express from "express";
import { App } from "../app";

const customerRouter = express.Router();
console.log("routes.ts")
// userRouter.get("/", App.getSingleUser);
// userRouter.get("/list", App.getUsersList)
customerRouter.post("/", App.createCustomer);

export { customerRouter }