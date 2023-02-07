import { RDSService } from "./RDSService";
import * as Http from "http-status-codes";
import { createCustomer } from "../models/customer";
import * as constant from "../constants/constant";

export class customerService {

    public static createCustomer = async (customer: createCustomer) =>{
        try {
            const isCustomerExists: boolean = await this.isCustomerExits(customer.email);
            if(isCustomerExists){
                return {
                    message : "Customer Already Exits",
                    code : 302
                }
            }

            const query = constant.queries.createCustomer(constant.tableNames.CUSTOMER);
            const result = await RDSService.doQuery({query, variable : [customer.customer_name,customer.email,customer.picture]});
            if(result.rowCount){
                return {
                    code : Http.CREATED,
                    message : "Customer Created Successfully"
                }
            }
            throw new Error("customer Not Created");
        } catch(error) {
            console.log(error);
            throw (error);
        }
    }

    private static isCustomerExits = async (email: string) => {
        try {
            const query = constant.queries.isCustomerExits(constant.tableNames.CUSTOMER);
            const result = await RDSService.doQuery({query, variable: [email]});
            if(result.rowCount) return true;
            return false;
        } catch (error) {
            console.log(error);
            throw (error);
        }
    }

    public static getSingleCustomer = async (email: string) =>{
        try {
            const query = constant.queries.getSingleCustomer(constant.tableNames.CUSTOMER);
            const result = await RDSService.doQuery({query, variable : [email]});
            if(result.rowCount){
                return {
                    code : Http.ACCEPTED,
                    message : "Customer Found Successfully",
                    customer: result.rows
                }
            }
            throw new Error("Customer Not Found");
        } catch(error) {
            console.log(error);
            throw (error);
        }
    }
}