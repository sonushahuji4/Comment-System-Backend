import { createCustomer } from "../models/customer";
import { customerService } from "../services/customerService";

export class customerControler {

    public createCustomer = async (customer: createCustomer) => {
        const errors: string[] = [];
        const requiredBody: string[] = ["customer_name","email","picture"];
        // for(const item of requiredBody){
        //     if(!customer[item]){
        //         errors.push(item);
        //     }
        // }
        if(errors.length > 0){
            throw new Error(errors.join("\n"));
        }

        try{
            return await customerService.createCustomer(customer);
        } catch(error) {
            console.log("error :",error);
            throw (error);
        }
    }

    public getSingleCustomer = async (params:any) => {
        const errors: string[] = [];
        if(!params.email){
            errors.push("Missing email id");
        }
        if(errors.length > 0){
            throw new Error(errors.join("\n"));
        }

        try{
            return await customerService.getSingleCustomer(params.email);
        } catch(error) {
            console.log("error :",error);
            throw (error);
        }
    }  
}