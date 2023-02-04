import express, { Application } from "express";
import http, { Server } from "http";
import cors from "cors";
import * as dotenv from "dotenv";
import { MySqlService } from "./services/MySqlService";
import { customerRouter } from "./routes/customer";

dotenv.config();
const app: Application = express();

/** Middlerwaver */
app.use(express.json({limit: "6mb"}));
app.use(express.urlencoded({extended: false }));
app.use(cors());

/** default routes */
console.log("server.ts")
app.use('/customer', customerRouter);

const server: Server = http.createServer(app);
MySqlService.init();
server.listen(process.env.SERVER_PORT,() => console.log(`Server running on port : ${process.env.SERVER_PORT}`));