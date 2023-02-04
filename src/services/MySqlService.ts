import * as dotenv from "dotenv";
import * as mysql from 'mysql2';

dotenv.config();

interface queries {
    query : string;
    variable : any[];
}
export class MySqlService {
    public static connection: any;

    public static init = () => {
        try {

            const { HOST, DATABASE_NAME, USERNAME, PASSWORD, PORT } = process.env;
            MySqlService.connection = mysql.createConnection({
                host: HOST,
                user: USERNAME,
                password: PASSWORD,
                database: DATABASE_NAME
              });
            MySqlService.connection.connect(function(err: any) {
            if (err) {
                return console.error('error: ' + err.message);
            }    
            console.log('Connected to the MySQL server.');
            });
        }catch(error) {
            console.error("Error occured", error);
            throw error;
        }
    }

    public static end = async () => {
        if(MySqlService.connection){
            await MySqlService.connection.end();
        }
    }

    public static doQuery = async (query: any) => {
        if(!MySqlService.connection){
            await MySqlService.init();
        }
        return await MySqlService.connection `${query}`;
    }
}