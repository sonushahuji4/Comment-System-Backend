import express, { Request, Response, NextFunction} from "express";
import * as Http from "http-status-codes";
import { customerControler } from "./controllers/customerControler";

export class App {

    /**
     * create new users
     * @param req 
     * @param res 
     */
    public static createCustomer = async (req: Request, res: Response) => {
        try {
            console.log("app.ts")
            const customerControlers: customerControler = new customerControler();
            const response: any = await customerControlers.createCustomer(req.body);
            response.responseCode = Http.OK;
            res.status(Http.OK).send(response);
        } catch(error: any) {
            // if(error && error.message){
            //     console.log(error.message);
            //     return res.status(Http.BAD_REQUEST).json({
            //         message: error.message,
            //         responseCode: Http.BAD_REQUEST 
            //     });
            // }else {
            //     console.log(error);
            //     return res.status(Http.INTERNAL_SERVER_ERROR).json({
            //         message: "Some error occured while processing your request",
            //         responseCode: Http.INTERNAL_SERVER_ERROR
            //     });
            // }
        }
    }

    //     /**
    //  * create new users
    //  * @param req 
    //  * @param res 
    //  */
    // public static getSingleUser = async (req: Request, res: Response) => {
    //     // try {
    //     //     const productController: ProductController = new ProductController();
    //     //     const response: HttpProductReponse = await productController.getProductList(req.query);
    //     //     response.responseCode = Http.OK;
    //     //     res.status(Http.OK).send(response);
    //     // } catch(error: any) {
    //     //     if(error && error.message){
    //     //         console.log(error.message);
    //     //         return res.status(Http.BAD_REQUEST).json({
    //     //             message: error.message,
    //     //             responseCode: Http.BAD_REQUEST 
    //     //         });
    //     //     }else {
    //     //         console.log(error);
    //     //         return res.status(Http.INTERNAL_SERVER_ERROR).json({
    //     //             message: "Some error occured while processing your request",
    //     //             responseCode: Http.INTERNAL_SERVER_ERROR
    //     //         });
    //     //     }
    //     // }
    // }
    
    //             /**
    //  * create new users
    //  * @param req 
    //  * @param res 
    //  */
    // public static getUsersList = async (req: Request, res: Response) => {
    //     // try {
    //     //     const productController: ProductController = new ProductController();
    //     //     const response: HttpProductReponse = await productController.getProductList(req.query);
    //     //     response.responseCode = Http.OK;
    //     //     res.status(Http.OK).send(response);
    //     // } catch(error: any) {
    //     //     if(error && error.message){
    //     //         console.log(error.message);
    //     //         return res.status(Http.BAD_REQUEST).json({
    //     //             message: error.message,
    //     //             responseCode: Http.BAD_REQUEST 
    //     //         });
    //     //     }else {
    //     //         console.log(error);
    //     //         return res.status(Http.INTERNAL_SERVER_ERROR).json({
    //     //             message: "Some error occured while processing your request",
    //     //             responseCode: Http.INTERNAL_SERVER_ERROR
    //     //         });
    //     //     }
    //     // }
    // }
}