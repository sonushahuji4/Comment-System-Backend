import express from "express";
import { App } from "../app";

const customerRouter = express.Router();
customerRouter.get("/", App.getSingleCustomer);
customerRouter.post("/", App.createCustomer);

export { customerRouter }