import express, { Request, Response} from "express";
import * as Http from "http-status-codes";
import { customerControler } from "./controllers/customerControler";

export class App {

    /**
     * create new customer
     * @param req 
     * @param res 
     */
    public static createCustomer = async (req: Request, res: Response) => {
        try {
            const customerControlers: customerControler = new customerControler();
            const response: any = await customerControlers.createCustomer(req.body);
            res.status(response.code).send(response);
        } catch(error: any) {
            if(error && error.message){
                console.log(error.message);
                return res.status(Http.BAD_REQUEST).json({
                    message: error.message,
                    code: Http.BAD_REQUEST 
                });
            }else {
                console.log(error);
                return res.status(Http.INTERNAL_SERVER_ERROR).json({
                    message: "Some error occured while processing your request",
                    code: Http.INTERNAL_SERVER_ERROR
                });
            }
        }
    }

    /**
     * get single customer
     * @param req 
     * @param res 
     */
    public static getSingleCustomer = async (req: Request, res: Response) => {
        try {
            const customerControlers: customerControler = new customerControler();
            const response: any = await customerControlers.getSingleCustomer(req.query);
            res.status(Http.OK).send(response);
        } catch(error: any) {
            if(error && error.message){
                console.log(error.message);
                return res.status(Http.BAD_REQUEST).json({
                    message: error.message,
                    code: Http.BAD_REQUEST 
                });
            }else {
                console.log(error);
                return res.status(Http.INTERNAL_SERVER_ERROR).json({
                    message: "Some error occured while processing your request",
                    code: Http.INTERNAL_SERVER_ERROR
                });
            }
        }
    }
}