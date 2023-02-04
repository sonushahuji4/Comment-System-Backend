import { MySqlService } from "./MySqlService";
import * as Http from "http-status-codes";
import { createCustomer } from "../models/customer";
import * as constant from "../constants/constant";

interface props {
    productKey : string;
}

export class customerService {
    
    // public static getProductList = async (params:props) =>{
    //     try {
    //         const query = constant.queries.fetchProductList(constant.tableNames.PRODUCT);
    //         const productResult = await RDSService.doQuery({query, variable : []});
    //         if(productResult.rowCount){
    //             return {
    //                 products : productResult.rows,
    //                 total : productResult.rowCount,
    //                 responseCode : Http.OK,
    //                 message : "Product fetched successfully" 
    //             }
    //         }
    //         throw new Error("Product not found");
    //     } catch(error) {
    //         console.log(error);
    //         throw (error);
    //     }
    // }
    
    // public static getProduct = async (params:props) =>{
    //     try {
    //         const { productKey } = params;
    //         const query = constant.queries.fetchSingleProduct(constant.tableNames.PRODUCT, `\'${productKey}\'`);
    //         const productResult = await RDSService.doQuery({query, variable : []});
    //         if(productResult.rowCount){
    //             return {
    //                 products : productResult.rows[0],
    //                 total :  productResult.rowCount,
    //                 responseCode : Http.OK,
    //                 message : "Product fetched successfully"
    //             }
    //         }
    //         throw new Error("Product not found");
    //     } catch(error) {
    //         console.log(error);
    //         throw (error);
    //     }
    // }

    public static createCustomer = async (customer: createCustomer) =>{
        try {
            //`insert into customers (customerName,email,picture) values (\'${customer.customerName}\', \'${customer.email}\', \'${customer.picture}\') returning *`; 
            //constant.queries.createCustomer(constant.tableNames.USERS,customer);
            if(!MySqlService.connection){
                await MySqlService.init();
            }
            console.log("customer :",customer);
            const customerResult = await MySqlService.connection `
            insert into customers (
                customerName, email, picture
            ) values (\'${customer.customerName}\'::text, \'${customer.email}\::text', \'${customer.picture}\::text')
            returning *
            `;
            console.log("customerResult :",customerResult);
            if(customerResult.rowCount){
                return {
                    products : customerResult.rows,
                    total : customerResult.rowCount,
                    responseCode : Http.OK,
                    message : "User created successfully"
                }
            }
            throw new Error("user not created");
        } catch(error) {
            console.log(error);
            throw (error);
        }
    }

    // public static updateProduct = async (params:Product) =>{
    //     try {
    //         const query = constant.queries.updateProduct(constant.tableNames.PRODUCT);
    //         const productResult = await RDSService.doQuery({query, variable : [params.productKey,params.productDetails]});
    //         if(productResult.rowCount){
    //             return {
    //                 isUpdated : true,
    //                 responseCode : Http.OK,
    //                 message : "Product updated successfully"
    //             }
    //         }
    //         throw new Error("Product does not exist");
    //     } catch(error) {
    //         console.log(error);
    //         throw (error);
    //     }
    // }

    // public static deleteProduct = async (params:props) =>{
    //     try {
    //         const { productKey } = params;
    //         const query = constant.queries.deleteProduct(constant.tableNames.PRODUCT, `\'${productKey}\'`);
    //         const productResult = await RDSService.doQuery({query, variable : []});
    //         if(productResult.rowCount){
    //             return {
    //                 isDelete : true,
    //                 responseCode : Http.OK,
    //                 message : "Product delete successfully"
    //             }
    //         }
    //         throw new Error("Product does not exist");
    //     } catch(error) {
    //         console.log(error);
    //         throw (error);
    //     }
    // }
}