import * as dotenv from "dotenv";
const { Client } = require("pg");
dotenv.config();

interface queries {
    query : string;
    variable : any[];
}
export class RDSService {
    public static client: any;

    public static init = async () => {
        try {
            console.log("process.env.RDS_DATABASE_USER :",process.env.RDS_DATABASE_USER);
            RDSService.client = new Client({
                user: process.env.RDS_DATABASE_USER,
                host: process.env.RDS_DATABASE_HOST,
                database: process.env.RDS_DATABASE_NAME,
                password: process.env.RDS_DATABASE_PASSWORD,
                port: process.env.RDS_DATABASE_PORT,
                ssl: false
            })
            await RDSService.client.connect();
            console.log("Connected to the database");
        }catch(error) {
            console.error("Error occured", error);
            throw error;
        }
    }

    public static end = async () => {
        if(RDSService.client){
            await RDSService.client.end();
        }
    }

    public static doQuery = async (params: queries) => {
        const { query, variable}  = params;
        if(!RDSService.client){
            await RDSService.init();
        }
        return await RDSService.client.query(query,variable);
        
    }
}
